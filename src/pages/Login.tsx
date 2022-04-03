import React, { FC } from "react";
import { Row } from "antd";
const Login: FC = () => {
	return (
		<Row align="middle" className="main__content" justify="center">
			<div className="main__content-wrapper">
				<h2 className="main__title">Login to see Calendar with Events</h2>
				<p>u can only see events that related to current user!!!</p>
				<p className="main__content-login">test logins:</p>
				<div className="main__content-item">
					<span>
						username: <strong>user</strong>
					</span>
					<br />
					<span>
						password: <strong>123</strong>
					</span>
				</div>
				<div className="main__content-item">
					<span>
						username: <strong>admin</strong>
					</span>
					<br />
					<span>
						password: <strong>123</strong>
					</span>
				</div>
				<div className="main__content-item">
					<span>
						username: <strong>vasya</strong>
					</span>
					<br />
					<span>
						password: <strong>123</strong>
					</span>
				</div>
			</div>
		</Row>
	);
};

export default Login;
