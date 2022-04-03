import { Button, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EventCalendar from "../components/EventCalendar/EventCalendar";
import EventForm from "../components/EventCalendar/EventForm";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { EventActionCreators } from "../store/reducers/event/action-creators";

const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { guests, events } = useTypedSelector((state) => state.eventReducer);
  const { user } = useTypedSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //Получить гостей при первой отрисовке
  useEffect(() => {
    dispatch(EventActionCreators.fetchEvents(user.username));
    dispatch(EventActionCreators.fetchGuests());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row align="middle" className="main__content" justify="center">
      <div className="main__content-wrapper">
        <EventCalendar events={events} />
        <Row justify="center">
          <Button onClick={showModal} type="primary">
            Добавить событие
          </Button>
        </Row>
        <Modal
          title="Добавьте событие"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <EventForm guests={guests} />
        </Modal>
      </div>
    </Row>
  );
};

export default Event;
