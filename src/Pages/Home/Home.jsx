import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import BGV from './Assets/Home_bgv.mp4'
import Navbar from '../../Components/Navba/Navbar'
import EventCard from '../../Components/EventCard/EventCard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    const events = [
        {
            startDate: 'JAN 20',
            endDate: 'JAN 26',
            eventName: 'Tech Summit',
            venue: 'City Convention Center',
            startTime: '09:00 AM'
        },
        {
            startDate: 'FEB 1',
            endDate: 'FEB 4',
            eventName: 'Digital Marketing Workshop',
            venue: 'Business Hub Training Room',
            startTime: '02:00 PM'
        },
        {
            startDate: 'FEB 10',
            endDate: 'FEB 16',
            eventName: 'Art and Design Exhibition',
            venue: 'Gallery Hall',
            startTime: '10:30 AM'
        },
        {
            startDate: 'MAR 1',
            endDate: 'MAR 2',
            eventName: 'Leadership Seminar',
            venue: 'Grand Auditorium',
            startTime: '01:00 PM'
        },
        {
            startDate: 'MAR 4',
            endDate: 'MAR 10',
            eventName: 'Summer Music Festival',
            venue: 'Outdoor Amphitheater',
            startTime: '07:00 PM'
        }
    ];
    return (
        <div className="home">
            <Navbar />
            <div className="home_one">

                <video src={BGV} autoPlay loop muted></video>
                <div className="home_one_content">
                    <h1>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h1>
                    <p>Dayananda Sagar College of Engineering operates under the aegis of the Mahatma Gandhi Vidya Peetha Trust is approved by All India Council for Technical Education (AICTE).</p>
                </div>
            </div>
            <div className="home_two">
                <div className="home_two_con">
                    <div className="home_two_content_left">
                        <h2>
                            CELEBRATING THE
                            BRIGHTEST MIND
                        </h2>
                        <p>
                            Our goal is to prepare the next generation of creative professionals for a future in the industry. We offer degrees in most demanded industries. Whether you begin your journey on our City campus or choose the flexibility of remote classes, our programs are designed to help you along your path.
                        </p>
                        <button><Link to="/Addmissions">ADDMISSIONS</Link></button>
                    </div>
                    <div className="home_two_content_right">
                        <div className="img3"></div>
                    </div>
                </div>
            </div>
            <div className="home_three">
                <h1>UPCOMING EVENTS</h1>
                <div className="home_three_con">
                    <div className="home_three_left">
                        {events.map((ele) => {
                            return <EventCard key={ele.endDate} data={ele} />
                        })}
                    </div>

                </div>
            </div>
            <div className="bar"><div></div></div>
            <Footer />
        </div >
    )
}

export default Home