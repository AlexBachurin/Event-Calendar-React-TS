import { Button, Form, Input, Checkbox } from 'antd'
import  { FC, useState, useEffect } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ModalActionCreators } from '../../store/reducers/login/action-creators';
import { AuthActionCreators } from '../../store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';


const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const authDispatch = useDispatch()
  const {isLoading, error} = useTypedSelector(state => state.authReducer)
  //input states
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('')

  //form submit
  const onSubmit = () => {
    authDispatch(AuthActionCreators.login(userName, password))
  };

  //remove error after 3 sec
  useEffect(() => {
    const errorId = setTimeout(() => {
        dispatch(AuthActionCreators.setAuthError(''))
    }, 3000);
  
    return () => {
      clearInterval(errorId)
    }
  }, [error])
  


  return (
    
     <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      {/* Error here */}
      {error && <div style={{color: 'red', paddingBottom: '15px', textAlign: 'center'}}>
        {error}
      </div>}

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox disabled={isLoading}>Remember me</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
          Log in
        </Button>
         <Button type="text" htmlType='button' disabled={isLoading} onClick={() => dispatch(ModalActionCreators.showRegister(true))}>register now!</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm