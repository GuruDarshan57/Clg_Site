import React, { useState } from 'react'
import './Contact.css'
import Navbar from '../../Components/Navba/Navbar'
import Footer from '../../Components/Footer/Footer'


const Contact = () => {
    const [name, Setname] = useState("")
    const [email, Setemail] = useState("")
    const [message, Setmessage] = useState("")
    const cd = async (e) => {
        e.preventDefault();
        let result = await fetch("http://localhost:4000/", {
            method: 'post',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        result = await result.json;
        localStorage.setItem("data", JSON.stringify(result))
    }
    return (
        <>
            <div className="contact">
                <Navbar />
                <div className="contact_con">
                    <h1>Contact Us</h1>
                    <div className="contact_content">
                        <div className="contact_left">
                            <form onSubmit={cd}>

                                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => {
                                    Setname(e.target.value)
                                }} />


                                <input type="email" placeholder='Enter Your E-Mail' value={email} onChange={(e) => {
                                    Setemail(e.target.value)
                                }} />


                                <textarea cols="10" rows="10" placeholder="Enter Your Query Here ...." value={message} onChange={(e) => {
                                    Setmessage(e.target.value)
                                }}></textarea>


                                <button type="submit" id="submit" >SUBMIT</button>

                            </form>
                        </div>
                        <div className="contact_right">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9775636275267!2d77.5639801745456!3d12.90916351624523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708149753643!5m2!1sen!2sin" style={{ border: "solid 0px rgba(255, 255, 255)", borderRadius: "4px", width: "100%", height: "87%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div className='contact_links'><i class="fa-brands fa-facebook" style={{ color: "#FF3D3D" }}></i><i class="fa-brands fa-flickr" style={{ color: "#FF3D3D" }}></i><i class="fa-brands fa-twitter" style={{ color: "#FF3D3D" }}></i><i class="fa-brands fa-instagram" style={{ color: "#FF3D3D" }}></i><i class="fa-brands fa-linkedin" style={{ color: "#FF3D3D" }}></i><i class="fa-brands fa-youtube" style={{ color: "#FF3D3D" }}></i></div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Contact