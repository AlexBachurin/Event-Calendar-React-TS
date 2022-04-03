import React, { FC } from "react";
import { Row } from "antd";
const Login: FC = () => {
  return (
    <Row align="middle" className="main__content" justify="center">
      <div className="main__content-wrapper">
        <p className="main__title">Login to see Calendar with Events</p>

        <p>test login:</p>

        <span>
          username: <strong>user</strong>
        </span>
        <br />
        <span>
          password: <strong>123</strong>
        </span>
      </div>
    </Row>
  );
};

export default Login;
