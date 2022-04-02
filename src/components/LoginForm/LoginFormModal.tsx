
import {  Modal, } from 'antd'
import React, { FC } from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm';

import LoginForm from './LoginForm';

interface Props {
    isModalVisible: boolean,
    handleCancel: () => void,
    showRegister: boolean,
    handleShowRegister: () => void
}

const LoginFormModal: FC<Props> = ({handleCancel, isModalVisible, showRegister, handleShowRegister}) => {
   
 
  return (
    <Modal title="Login or register" visible={isModalVisible} onCancel={handleCancel} footer={null}>
       {showRegister? <RegistrationForm handleShowRegister={handleShowRegister}/> : <LoginForm handleShowRegister={handleShowRegister}/>}
    </Modal>
  )
}

export default LoginFormModal