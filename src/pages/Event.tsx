import { Calendar, Row } from 'antd'
import React, {FC} from 'react'

const Event:FC = () => {
  return (
    <Row align='middle' className='main__content' justify='center'>
      <div className="main__content-wrapper">
        <Calendar />
      </div>
    </Row>
  )
}

export default Event