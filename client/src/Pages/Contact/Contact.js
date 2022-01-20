import React, {useState, useEffect} from 'react';
import Navigation from '../../Components/Navbar/Navbar.js'
import Title from '../../Components/Title/Title.js'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { IconContext } from 'react-icons';
import image from '../../Images/contact.png'
import image2 from '../../Images/contact2.jpg'
import { send } from 'emailjs-com';

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Us | First-out Demolition"
    })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message:''
    })
    const [message, setMessage] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
        if(event.target.name === "email" && !event.target.validity.typeMismatch) {
            setValidEmail(true)
        }
        setMessage('')
    }

    function submitForm() {
        if(formData.name === '' || formData.email === '' || formData.phone === '' || formData.message === '') {
            setMessage("Please fill in all fields.")
        }
        else if(!validEmail) {
            setMessage("Please enter a valid email.")
        }
        else {
            setMessage("Your message was sent successfully. Thank you for contacting us. We will be in touch with you shortly.")
            send("service_ku68erf","template_xz7pdm8", formData, 'user_na7bqe0y7PyGg0FffGWHq').then(
                function(response) {
                    console.log(response.status, response.text);
                },
                function(err) {
                    console.log(err)
                }
            );
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
        }
    }

    return(
        <div className='outerContainer'>
            <Navigation active="Contact Us" />
            <div className='innerContainer'>
                <div className='pageTitleContainer'>
                    <Title title="Contact Us" />
                </div>
                <div className='contactContainer'>
                    <div className="email">
                        <IconContext.Provider value={{className: "emailIconContact"}}>
                            <MdEmail />
                        </IconContext.Provider>
                        <a href={"mailto:Firstoutdemolition@gmail.com"}>Firstoutdemolition@gmail.com</a>
                    </div>
                    <div className="phone">
                            <IconContext.Provider value={{className: "phoneIconContact"}}>
                                <BsFillTelephoneFill />
                            </IconContext.Provider>
                            <a href={"tel:647-6945833"}>(647) 694-5833</a>
                    </div>
                </div>
                <img src={image} className='img1' alt=''/>
                <img src={image2} className='img2' alt=''/>
                <div className='hoursContainer'>
                    <p className='hoursTitle'> Our Hours</p>
                    <p> Monday: 9am - 5pm </p>
                    <p> Tuesday: 9am - 5pm </p>
                    <p> Wednesday: 9am - 5pm </p>
                    <p> Thursday: 9am - 5pm </p>
                    <p> Friday: 9am - 5pm </p>
                    <p> Saturday: 9am - 5pm </p>
                    <p> Sunday: Closed </p>
                </div>
                <div className='formContainer'>
                    <p className='hoursTitle'>Webform</p>
                    <input name='name' type='text' value={formData.name} placeholder='Name' onChange={handleChange} />
                    <input name='email' type='email' value={formData.email} placeholder='Email' onChange={handleChange} />
                    <input name='phone' type='text' value={formData.phone} placeholder='Phone Number' onChange={handleChange} />
                    <textarea name='message' type='text' value={formData.message} placeholder='Your Message' onChange={handleChange} />
                    <p>{message}</p>
                    <button onClick={submitForm}>Submit</button>
                </div>
            </div>    
        </div>
    )
}