import React from 'react'
import './EventCard.css'
const EventCard = (props) => {
  const { startDate, endDate, eventName, venue, startTime } = props.data
  return (
    <div className="evcard">
      <div className="evcard_con">
        <div id='ev1'>{startDate} - {endDate} </div>
        <div className='ev2'>{eventName}</div>
        <div className='ev3'>{startTime}</div>
        <div className='ev4'>{venue}</div>
      </div>
    </div>
  )
}

export default EventCard