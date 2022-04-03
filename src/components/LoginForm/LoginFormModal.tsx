import { Modal } from "antd";
import { FC } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import LoginForm from "./LoginForm";

interface Props {
  isModalVisible: boolean;
  handleCancel: () => void;
  isShowRegister: boolean;
}

const LoginFormModal: FC<Props> = ({
  handleCancel,
  isModalVisible,
  isShowRegister,
}) => {
  return (
    <Modal
      title="Login or register"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      {isShowRegister ? <RegistrationForm /> : <LoginForm />}
    </Modal>
  );
};

export default LoginFormModal;
