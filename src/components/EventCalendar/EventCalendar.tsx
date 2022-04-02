import { Calendar } from 'antd'
import React, { FC } from 'react'
import { IEvent } from '../../models/IEvent'
interface Props {
  events: IEvent[]
}
const EventCalendar: FC<Props> = () => {
  return (
    <Calendar />
  )
}

export default EventCalendar