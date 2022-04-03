import { Badge, Calendar } from "antd";
import { Moment } from "moment";
import React, { FC } from "react";
import { IEvent } from "../../models/IEvent";
import { formatDate } from "../../utils/utils";
interface Props {
  events: IEvent[];
}
const EventCalendar: FC<Props> = ({ events }) => {
  function dateCellRender(value: Moment) {
    //format date from Momment to string
    const formattedDate = formatDate(value.toDate());
    //check if we have this date in our array with events
    const currentDayEvent = events.filter(
      (item) => item.date === formattedDate
    );
    return (
      <ul style={{ paddingLeft: "5px" }} className="events">
        {currentDayEvent.map((item) => (
          <>
            <li key={item.date + item.author}>
              <p style={{ marginBottom: "1px" }}>author: {item.author}</p>
              <Badge status="success" text={item.description} />
              <p>guest: {item.guest}</p>
            </li>
            <hr />
          </>
        ))}
      </ul>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
