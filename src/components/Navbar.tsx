import { Button, Layout,  Row } from 'antd'
import  {useState, FC } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import LoginFormModal from './LoginForm/LoginFormModal';

const Navbar: FC = () => {
  // const {isModalVisible, isShowRegister} = useTypedSelector(state => state.loginModalReducer) 
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const showModal = () => {
    setIsModalVisible(true)
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleShowRegister = () => {
    setShowRegister(!showRegister)
  }
  return (
    <Layout.Header>
      <Row className='h-100' justify='end' align='middle' >
        <Button type="primary" onClick={showModal}>Login</Button>
      </Row>
      <LoginFormModal showRegister={showRegister} handleShowRegister={handleShowRegister} isModalVisible={isModalVisible} handleCancel={handleCancel}/>
    </Layout.Header>
    
  )
}

export default Navbar