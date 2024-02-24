import React from 'react'
import './About.css'
import Navbar from '../../Components/Navba/Navbar'
import Footer from '../../Components/Footer/Footer'

const About = () => {
    return (
        <>
            <div className="about">
                <Navbar />
                <div className="about_con">
                    <div>
                        <h1>ABOUT</h1>
                        <p>Dayananda Sagar College of Engineering operates under the aegis of the Mahatma Gandhi Vidya Peetha Trust is approved by All India Council for Technical Education (AICTE), Govt. of India and affiliated to Visvesvaraya Technological University. It has the widest choice of engineering branches having 20 Under Graduate courses & 6 Post Graduate courses. In addition, it has 20 Research Centres in different branches of Engineering catering to research scholars for obtaining Ph.D under VTU. Various courses are accredited by NBA</p>
                    </div>
                    <div>
                        <h1>VISION</h1>
                        <p>To impart quality technical education with a focus on Research and Innovation emphasising on Development of Sustainable and Inclusive Technology for the benefit of society.</p>
                    </div>
                    <div>
                        <h1>MISSION</h1>
                        <p>
                            To provide an environment that enhances creativity and Innovation in pursuit of Excellence.
                        </p>
                        <p>To nurture teamwork in order to transform individuals as responsible leaders and entrepreneurs.</p>
                        <p>To train the students to the changing technical scenario and make them to understand the importance of Sustainable and Inclusive technologies.</p>
                    </div>
                </div>
            </div>
            <Footer /></>

    )
}

export default About