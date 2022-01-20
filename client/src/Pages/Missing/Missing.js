import React, {useEffect} from 'react';
import Navigation from '../../Components/Navbar/Navbar.js'
import Title from '../../Components/Title/Title.js'
import './Missing.css'

export default function Missing() {
    useEffect(() => {
        document.title = "404 Error | First-out Demolition"
    })
    return(
        <div className='outerContainer'>
            <Navigation active=''/>
            <div className='innerContainer'>
                <Title title='404 Error' />
                <p className='missingP'> Sorry, we couldn't find the page you were looking for. Try going back to <a href='/'>First-Out's home page.</a></p>
            </div>
        </div>
    )
}