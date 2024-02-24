import React from 'react'
import './Addmissions.css'
import Navbar from '../../Components/Navba/Navbar'
import Footer from '../../Components/Footer/Footer'

const Addmissions = () => {
    return (
        <>
            <div className="add">
                <Navbar />
                <div className="add_con">
                    <h1>Admission Details</h1>
                    <p>CET Code: E007 | Comed-K Code: E040 | PGCET - MBA: B158 | M.Tech: T822</p>
                    <p>The admission process at DSCE is through CET and COMEDK. The minimum requirement for Bachelor’s Degree (B.E) is pass in PUC / CBSE / ISCE /10+2 or equivalent examination with Physics and Mathematics as compulsory subjects and a minimum of 45% marks aggregate in Physics, Mathematics and any one of the following subjects: Chemistry / Biology / Biotechnology / Computer Science / Electronics and English as a compulsory subject.</p>
                    <h3>B.E Programs</h3>
                    <p>For UG, The admission to college is through the entrance test / Common Entrance Test (CET) conducted by Karnataka Government & Consortium of Medical, Engineering and Dental Colleges of Karnataka / COMEDK. The students with meritorious ranking are considered for admissions.</p>
                    <h3>MBA Program</h3>
                    <p>For admission to Master of Business Administration (MBA) Program, the candidates shall have passed the prescribed qualifying examinations with not less than 50% of the marks in aggregate of all the years / semesters of the degree examinations. PGCET Score is must for Government Quota Students.</p>
                    <h3>Master of Computer Application(MCA)</h3>
                    <p>Admission to Master of Computer Application(MCA)Program, the candidates shall have passed the prescribed qualifying examinations with not less than 50% of the marks in aggregate of all the years / semesters of the degree examinations. PGCET Score is must for Government Quota Students. The revised MCA course is for Two years or Four Semesters. This will be functional from the current academic year.</p>

                </div>
            </div >
            <Footer />
        </>
    )
}

export default Addmissions