import React, { FC, useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { IEvent } from "../../models/IEvent";
import { iUser } from "../../models/IUser";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import moment, { Moment } from "moment";
import { formatDate } from "../../utils/utils";
import { EventActionCreators } from "../../store/reducers/event/action-creators";

interface Props {
	guests: iUser[];
}

const EventForm: FC<Props> = ({ guests }) => {
	//get user to set author of event
	const { user } = useTypedSelector((state) => state.authReducer);
	//state for event
	const [event, setEvent] = useState<IEvent>({
		description: "",
		author: user.username,
		date: "",
		guest: "",
	} as IEvent);
	const dispatch = useDispatch();

	//SELECT DATE HANDLER
	const selectDate = (date: Moment | null) => {
		if (date) {
			console.log(formatDate(date.toDate()));
			setEvent({ ...event, date: `${formatDate(date.toDate())}` });
		}
	};

	//SUBMIT
	const onSubmit = () => {
		dispatch(EventActionCreators.createEvent(event));
		//also trigger rerender right away
		dispatch(EventActionCreators.fetchEvents(user.username));
	};

	//PREVENT ACCESS TO PAST DATES
	const isDateBefore = (currentDate: Moment | null) => {
		//get today date
		const today = moment().toDate();
		//compare date we get in DatePicker with today date and if it si before we disable it
		//return will be true or false
		return moment(currentDate?.toDate()).isBefore(today);
	};
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onSubmit}
			autoComplete="off"
		>
			<Form.Item
				label="Описание события"
				name="description"
				rules={[{ required: true, message: "required field" }]}
			>
				<Input
					value={event.description}
					onChange={(e) => setEvent({ ...event, description: e.target.value })}
				/>
			</Form.Item>
			<Form.Item
				label="Дата"
				name="date"
				rules={[{ required: true, message: "required field" }]}
			>
				<DatePicker
					onChange={(date) => selectDate(date)}
					disabledDate={isDateBefore}
				/>
			</Form.Item>
			<Form.Item
				label="Выберите гостя"
				name="guest"
				rules={[{ required: true, message: "required field" }]}
			>
				<Select
					onChange={(guest: string) => setEvent({ ...event, guest: guest })}
					placeholder="Select a person"
					style={{ width: 120 }}
				>
					{guests.map((guest) => {
						return (
							<Select.Option key={guest.username} value={guest.username}>
								{guest.username}
							</Select.Option>
						);
					})}
				</Select>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default EventForm;
