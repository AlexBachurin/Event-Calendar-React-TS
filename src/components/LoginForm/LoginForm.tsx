import { Button, Form, Input, Checkbox } from 'antd'
import  { FC } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ModalActionCreators } from '../../store/reducers/login/action-creators';


const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
   const onSubmit = () => {
    console.log('submit');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
     <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
         <Button type="text" htmlType='button' onClick={() => dispatch(ModalActionCreators.showRegister(true))}>register now!</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm