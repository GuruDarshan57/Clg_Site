import React from 'react'
import './Course.css'
const Course = (props) => {
    const { course_id, program, course_duration, hod } = props.data
    return (
        <div className="course">
            <h3>{program}</h3>
            <p>{course_duration}</p>
            <p>{hod}</p>
        </div>
    )
}

export default Course