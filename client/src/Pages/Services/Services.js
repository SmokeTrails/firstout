import React, {useEffect} from 'react';
import Navigation from '../../Components/Navbar/Navbar.js'
import Title from '../../Components/Title/Title.js'
import './Services.css'

export default function Services() {
    useEffect(() => {
        document.title = "Services | First-out Demolition"
    })
    return(
        <div className='outerContainer'>
            <Navigation active="Our Services" />
            <div className='innerContainer'>
                <Title title='Our Services' />
                <div className='completeContainer'>
                    <div className='completeText'>
                        <h3> Complete Deconstruction</h3>
                        <p> Our complete demolition services encompass everything from large commercial properties
                            to small individual condos. We are the experts in structural and interior demolition and 
                            deconstruction. Demolitions can be complicated and possess unique challenges. When you trust
                            First-out demolition with your project, you be assured that we will plan every detail out, and we will
                            complete the job professionally, precisely, safely, and on time. We will make sure that we save as many 
                            materials as possible, so that they can be used for future projects. We will make sure to take care of your 
                            project, from beginning to end.
                        </p>
                    </div>
                    <img src='https://i.ibb.co/pWtQfk0/complete.jpg' alt='Complete Deconstruction' />
                </div>
                <div className='selectiveContainer'>
                    <img src='https://i.ibb.co/WKSyP5K/selective.jpg' alt='Selective Deconstruction' />
                    <div className='selectiveText'>
                        <h3> Selective Deconstruction</h3>
                        <p> 
                            Some renovations do not require destroying everything! When your renovation only requires the removal
                            of specific areas, First-out demolition has you covered. We will carefully and precisely remove the 
                            parts that you need to be removed, and we will ensure that we try to save as much material as possible 
                            from going to the landfill. Most importantly, we make sure that you save the maximum amount of time and money
                            while prioritizing safety and quality.
                        </p>
                    </div>
                </div>
                <div className='completeContainer'>
                    <div className='completeText'>
                        <h3> Abatement</h3>
                        <p> Hazardous materials such as asbestos, mould, lead, and others can be extremely dangerous for your 
                            property and for your health. As soon as you suspect the presence of any of these materials, 
                            contact the experts at First-out demolition. We will make sure that all hazardous material is removed safely, effectively,
                             and professionally. We will also take preventative measures so that the hazardous material doesn't come back into your home.
                              At First-out demolition, your health and safety is our top priority.
                        </p>
                    </div>
                    <img src='https://i.ibb.co/FbJM0cc/abatement.jpg' alt='Abatement' />
                </div>
                <br />
            </div>
        </div>
    )
}