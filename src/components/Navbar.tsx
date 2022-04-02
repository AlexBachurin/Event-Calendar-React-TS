import { Button, Layout,  Row } from 'antd'
import  { FC } from 'react'

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ModalActionCreators } from '../store/reducers/login/action-creators';
import LoginFormModal from './LoginForm/LoginFormModal';

const Navbar: FC = () => {
  const {isModalVisible, isShowRegister} = useTypedSelector(state => state.loginModalReducer) 
  const {isAuth} = useTypedSelector(state => state.authReducer)
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(ModalActionCreators.openModal(true))
  };
  const handleCancel = () => {
    dispatch(ModalActionCreators.openModal(false))
  };
  
  return (
    <Layout.Header>
      <Row className='h-100' justify='end' align='middle' >
        {isAuth ? <Button type="primary" onClick={showModal}>Logout</Button> :  <Button type="primary" onClick={showModal}>Login</Button>}  
      </Row>
      <LoginFormModal isShowRegister={isShowRegister} isModalVisible={isModalVisible} handleCancel={handleCancel}/>
    </Layout.Header>
    
  )
}

export default Navbar