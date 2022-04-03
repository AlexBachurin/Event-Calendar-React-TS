import { Button, Form, Input, Checkbox } from "antd";
import { FC } from "react";
import { ModalActionCreators } from "../../store/reducers/login/action-creators";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const RegistrationForm: FC = () => {
	const dispatch = useAppDispatch();
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};

	const tailFormItemLayout = {
		wrapperCol: {
			xs: {
				span: 24,
				offset: 0,
			},
			sm: {
				span: 16,
				offset: 8,
			},
		},
	};
	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{ remember: true }}
			onFinish={onFinish}
		>
			<Form.Item
				name="email"
				label="E-mail"
				rules={[
					{
						type: "email",
						message: "The input is not valid E-mail!",
					},
					{
						required: true,
						message: "Please input your E-mail!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name="password"
				label="Password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="confirm"
				label="Confirm Password"
				dependencies={["password"]}
				hasFeedback
				rules={[
					{
						required: true,
						message: "Please confirm your password!",
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("The two passwords that you entered do not match!")
							);
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				name="agreement"
				valuePropName="checked"
				rules={[
					{
						validator: (_, value) =>
							value
								? Promise.resolve()
								: Promise.reject(new Error("Should accept agreement")),
					},
				]}
				{...tailFormItemLayout}
			>
				<Checkbox>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}I have read
					the <a href="">agreement</a>
				</Checkbox>
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit" className="login-form-button">
					Register
				</Button>
				<Button
					type="text"
					htmlType="button"
					onClick={() => dispatch(ModalActionCreators.showRegister(false))}
				>
					Have an account?
				</Button>
			</Form.Item>
		</Form>
	);
};

export default RegistrationForm;
