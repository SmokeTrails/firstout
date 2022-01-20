import React, {useState} from "react"
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'
import {Fade} from 'react-slideshow-image'

export default function Slideshow(props) {
    const [autoplay, setAutoPlay] = useState(true)
    return(
        <div className="slide-container">
            <Fade indicators={true} duration={4000} autoplay={autoplay}>
                {props.imageNames.map((name, index) => {
                    if(name.includes(".mp4")) {
                        return(
                            <div className="each-fade" key={index}>
                                <div className="image-container">
                                    <video className='video' muted controls onPlaying={() => setAutoPlay(false)} onEnded={() => setAutoPlay(true)} onPause={() => setAutoPlay(true)}>
                                        <source src={require(`../../Videos/${name}`)} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return(
                            <div className="each-fade" key={index}>
                                <div className="image-container">
                                    <img src={require(`../../Images/${name}`)} alt='Hello' />
                                </div>
                            </div>
                        )
                    }
                })}
            </Fade>
        </div>
    )
}