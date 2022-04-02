import React, { FC, useState } from 'react'
import { Button, DatePicker, Form, Input, Select } from 'antd'
import { IEvent } from '../../models/IEvent';
import { iUser } from '../../models/IUser';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface Props {
    guests: iUser[]
}

const EventForm: FC<Props> = ({guests}) => {
   //get user to set author of event
  const {user} = useTypedSelector(state => state.authReducer);
  //state for event
  const [event, setEvent] = useState<IEvent>({} as IEvent)
  const onSubmit = () => {
    console.log('submit')
  }
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
              rules={[{ required: true, message: 'required field' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Дата"
              name="date"
              rules={[{ required: true, message: 'required field' }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label='Выберите гостя'
              name='guest'
              rules={[{ required: true, message: 'required field' }]}
            >
              <Select placeholder="Select a person" style={{ width: 120 }}>
                {guests.map(guest => {
                    return (
                        <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
                    )
                })}
            </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form> 
  )
}

export default EventForm