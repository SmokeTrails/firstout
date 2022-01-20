import React, {useEffect} from 'react';
import Navigation from '../../Components/Navbar/Navbar.js'
import Title from '../../Components/Title/Title.js'
import './About.css'
import video from '../../Videos/about.mp4'

export default function About() {
    useEffect(() => {
        document.title = "About | First-out Demolition"
    })
    return(
        <div className='outerContainer'>
            <Navigation active="About Us"/>
            <div className='innerContainer'>
                <Title title="About Us" />
                <div className='aboutText'>
                    First-Out Demolition is a leader in the deconstruction and demolition industry. We pride ourselves
                    on our professional and top-notch service and commitment to our clients. You can always be confident
                    that your job will be done right, on time, and without any surprises. Whether you're looking to demolish 
                    a small bathroom, a medium sized kitchen, or a whole house, we're the experts you're looking for. Our approach
                    each time on every project is to operate at our best, and our pricing is very competitive.
                    <br /> <br />
                    Safety is never compromised when we're doing the job. Hazardous material such as asbestos is always disposed safely.
                    We also do our job in an environmentally friendly manner by minimizing damage to materials so that they can be 
                    reused, as well as recycling materials such as concrete, metals, plastics and wood. 
                    <br /> <br />
                    We offer our services in GTA, including Ajax, Aurora, Brampton, Etobicoke, Markham, Milton, Missisauga, 
                    Newmarket, North York, Richmond Hill, Toronto, Thornhill, Vaughan, and Woodbridge.
                    <br /> <br />
                    To contact us for a quotation, or to inquire about our services, click <a href='/contact-us'>here</a>.
                    <br /> <br />
                    <span>We thank you for considering First-Out Demolition for your needs, and we look forward to serving you.</span>
                </div>
                <video className='video' loop autoPlay muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}