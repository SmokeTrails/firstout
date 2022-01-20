import React, {useEffect} from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { IconContext } from 'react-icons';

export default function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Home | First-out Demolition"
    })
    return(
        <div className="homeContainer">
            <h1>First-Out Demolition</h1>
            <h3>We take care of all your demolition needs in an innovative, sustainable, and professional way.</h3>
            <div className="buttonContainer"> 
                <button className='button' onClick={() => navigate("/about-us")}> About Us </button>
                <button className='button' onClick={() => navigate("/our-services")}> Our Services </button>
                <button className='button' onClick={() => navigate("/our-projects")}> Our Projects </button>
                <button className='button' onClick={() => navigate("/contact-us")}> Contact Us </button>
            </div>
            <div className="emailContainer">
                <IconContext.Provider value={{className: "emailIcon"}}>
                    <MdEmail />
                </IconContext.Provider>
                <a href={"mailto:Firstoutdemolition@gmail.com"}>Firstoutdemolition@gmail.com</a>
            </div>
            <div className="phoneContainer">
                <IconContext.Provider value={{className: "phoneIcon"}}>
                    <BsFillTelephoneFill />
                </IconContext.Provider>
                <a href={"tel:647-6945833"}>(647) 694-5833</a>
            </div>
        </div>
    )
}