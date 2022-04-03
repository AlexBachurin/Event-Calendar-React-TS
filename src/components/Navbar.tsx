import { Button, Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { ModalActionCreators } from "../store/reducers/login/action-creators";
import LoginFormModal from "./LoginForm/LoginFormModal";

const Navbar: FC = () => {
  const { isModalVisible, isShowRegister } = useTypedSelector(
    (state) => state.loginModalReducer
  );
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const authDispatch = useDispatch();
  const showModal = () => {
    dispatch(ModalActionCreators.openModal(true));
  };
  const handleCancel = () => {
    dispatch(ModalActionCreators.openModal(false));
  };

  return (
    <Layout.Header>
      <Row className="h-100" justify="space-between" align="middle">
        {isAuth ? (
          <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/event">event</Link>
              </Menu.Item>
            </Menu>
            <Row justify="center" align="middle">
              <div style={{ color: "white", marginRight: "20px" }}>
                {user.username}
              </div>
              <Button
                type="primary"
                onClick={() => authDispatch(AuthActionCreators.logout())}
              >
                Logout
              </Button>
            </Row>
          </>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/home">Home</Link>
              </Menu.Item>
            </Menu>
            <Button type="primary" onClick={showModal}>
              Login
            </Button>
          </>
        )}
      </Row>
      <LoginFormModal
        isShowRegister={isShowRegister}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </Layout.Header>
  );
};

export default Navbar;
