import React, { useState } from 'react'
import './Programs.css'
import Navbar from '../../Components/Navba/Navbar'
import Footer from '../../Components/Footer/Footer'
import Course from '../../Components/Course/Course'
const Programs = () => {
    const ug = [
        {
            course_id: 1,
            program: "Computer Science",
            course_duration: "4 years",
            hod: "Dr. Patel",
        },
        {
            course_id: 2,
            program: "Electrical Engineering",
            course_duration: "5 years",
            hod: "Prof. Gupta",
        },
        {
            course_id: 3,
            program: "Mechanical Engineering",
            course_duration: "4.5 years",
            hod: "Dr. Kumar",
        },
        {
            course_id: 4,
            program: "Civil Engineering",
            course_duration: "4 years",
            hod: "Prof. Sharma",
        },
        {
            course_id: 5,
            program: "Chemical Engineering",
            course_duration: "4.5 years",
            hod: "Dr. Joshi",
        },
        {
            course_id: 6,
            program: "Aerospace Engineering",
            course_duration: "5 years",
            hod: "Prof. Raj",
        },
        {
            course_id: 7,
            program: "Biomedical Engineering",
            course_duration: "4 years",
            hod: "Dr. Singh",
        },
        {
            course_id: 8,
            program: "Computer Engineering",
            course_duration: "4 years",
            hod: "Prof. Kapoor",
        },
        {
            course_id: 9,
            program: "Electronics Engineering",
            course_duration: "4.5 years",
            hod: "Dr. Desai",
        },
        {
            course_id: 10,
            program: "Mechatronics Engineering",
            course_duration: "4 years",
            hod: "Prof. Choudhary",
        },
        {
            course_id: 11,
            program: "Instrumentation Engineering",
            course_duration: "4.5 years",
            hod: "Dr. Malik",
        },
        {
            course_id: 9,
            program: "Electronics Engineering",
            course_duration: "4.5 years",
            hod: "Dr. Desai",
        }

    ];
    const pg = [{
        course_id: 1,
        program: "Computer Science",
        course_duration: "4 years",
        hod: "Dr. Patel",
    },
    {
        course_id: 2,
        program: "Electrical Engineering",
        course_duration: "5 years",
        hod: "Prof. Gupta",
    },
    {
        course_id: 3,
        program: "Mechanical Engineering",
        course_duration: "4.5 years",
        hod: "Dr. Kumar",
    },
    {
        course_id: 4,
        program: "Civil Engineering",
        course_duration: "4 years",
        hod: "Prof. Sharma",
    },
    {
        course_id: 5,
        program: "Chemical Engineering",
        course_duration: "4.5 years",
        hod: "Dr. Joshi",
    },
    {
        course_id: 6,
        program: "Aerospace Engineering",
        course_duration: "5 years",
        hod: "Prof. Raj",
    },
    {
        course_id: 7,
        program: "Biomedical Engineering",
        course_duration: "4 years",
        hod: "Dr. Singh",
    },
    {
        course_id: 8,
        program: "Computer Engineering",
        course_duration: "4 years",
        hod: "Prof. Kapoor",
    }]
    const bsh = [{
        course_id: 1,
        program: "Computer Science",
        course_duration: "4 years",
        hod: "Dr. Patel",
    },
    {
        course_id: 2,
        program: "Electrical Engineering",
        course_duration: "5 years",
        hod: "Prof. Gupta",
    },
    {
        course_id: 3,
        program: "Mechanical Engineering",
        course_duration: "4.5 years",
        hod: "Dr. Kumar",
    },
    {
        course_id: 4,
        program: "Civil Engineering",
        course_duration: "4 years",
        hod: "Prof. Sharma",
    }]
    const [pro, Setpro] = useState(ug);


    return (
        <>

            <div className="programs">
                <Navbar />
                <div className="programs_con">

                    <div className="programs_cover">
                        <p>Discover all of our programs before you make your choice</p>
                    </div>
                    <div className="programs_lists">
                        <div onClick={() => { Setpro(ug) }} className={pro.length === ug.length ? "pre" : ""}>UG PROGRAMS</div>
                        <div onClick={() => { Setpro(pg) }} className={pro.length == pg.length ? "pre" : ""}>PG PROGRAMS</div>
                        <div onClick={() => { Setpro(bsh) }} className={pro.length == bsh.length ? "pre" : ""}>BASIC SCIENCE AND HUMANITIES</div>
                    </div>
                    <div className="programs_exp">
                        {pro.map((ele) => {
                            return <Course data={ele} />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Programs