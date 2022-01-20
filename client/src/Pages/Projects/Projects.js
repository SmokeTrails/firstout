import React, {useEffect} from 'react';
import Navigation from '../../Components/Navbar/Navbar.js'
import Title from '../../Components/Title/Title.js'
import Slideshow from '../../Components/Slideshow/Slideshow.js';
import './Projects.css'

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | First-out Demolition"
    })
    const Woodbridge = ['Woodbridge/img6.jpg', 'Woodbridge/img1.jpg', 'Woodbridge/img2.jpg', 'Woodbridge/img3.jpg', 'Woodbridge/img4.jpg', 'Woodbridge/img5.jpg', 'Woodbridge/img7.jpg']
    const RichmondHill = ['Richmond Hill/img1.jpg', 'Richmond Hill/img2.jpg', 'Richmond Hill/img3.jpg', 'Richmond Hill/img4.jpg', 'Richmond Hill/img5.jpg', 'Richmond Hill/img6.jpg', 'Richmond Hill/img7.jpg', 'Richmond Hill/img8.jpg', 'RichmondHill1.mp4', 'Richmond Hill/img9.jpg', 'Richmond Hill/img10.jpg', 'Richmond Hill/img11.jpg', 'Richmond Hill/img12.jpg']
    const Etobicoke = ['Etobicoke1.mp4', 'Etobicoke/IMG_1376.jpg', 'Etobicoke/IMG_1379.jpg', 'about.mp4']
    const WestMall = ['West mall/IMG_2275.jpeg', 'West mall/IMG_2277.jpeg', 'West mall/IMG_2277.jpeg', 'West mall1.mp4']
    const PizzaHut = ['Pizza Hut/img1.jpg', 'Pizza Hut/img2.jpg', 'Pizza Hut/img3.jpg', 'Pizza Hut/img4.jpg', 'Pizza Hut/img5.jpg', 'Pizza Hut/img6.jpg', 'Pizza Hut/img7.jpg', 'Pizza Hut/img8.jpg', 'Pizza Hut/img9.jpg', 'Pizza Hut/img10.jpg']
    const Newmarket = ['Newmarket/img1.jpg', 'Newmarket/img2.jpg', 'Newmarket/img3.jpg', 'Newmarket/img4.jpg', 'Newmarket/img5.jpg']
    const Markham = ['Markham/img1.jpg', 'Markham/img2.jpg', 'Markham/img3.jpg', 'Markham/img4.jpg', 'Markham/img5.jpg', 'Markham/img6.jpg', 'Markham/img7.jpg', 'Markham/img8.jpg', 'Markham/img9.jpg', 'Markham/img10.jpg', 'Markham/img11.jpeg']
    const NorthYork = ['North York/img1.jpg', 'North York/img2.jpg', 'North York/img3.jpg', 'North York/img4.jpg', 'North York/img5.jpg', 'North York/img6.jpg', 'North York/img7.jpg', 'North York/img8.jpg']
    const Milton = ['Milton/img1.png', 'Milton/img2.jpeg', 'Milton/img3.jpg', 'Milton/img4.jpg', 'Milton/img5.jpg']
    const Aurora = ['Aurora/img1.jpg', 'Aurora/img2.jpg', 'Aurora/img3.jpg', 'Aurora/img4.jpg', 'Aurora/img5.jpg', 'Aurora/img6.jpg', 'Aurora/img7.jpg', 'Aurora/img8.jpg', 'Aurora/img9.jpg', 'Aurora/img10.jpg']
    return(
        <div className='outerContainer'>
            <Navigation active="Our Projects" />
            <div className='innerContainer'>
                <Title title='Our Projects' />
                <br />
                <div className='slideshowContainerLeft'>
                    <h3 className='projectHeadingLeft'>Woodbridge - Residential</h3>
                    <Slideshow imageNames={Woodbridge} />
                </div>
                <div className='slideshowContainerRight'>
                    <h3 className='projectHeadingRight'>Richmond Hill - Commercial</h3>
                    <Slideshow imageNames={RichmondHill} />
                </div>
                <div className='slideshowContainerLeft'>
                    <h3 className='projectHeadingLeft'>Etobicoke - Residential</h3>
                    <Slideshow imageNames={Etobicoke} />
                </div>
                <div className='slideshowContainerRight'>
                    <h3 className='projectHeadingRight'>West mall - Condo</h3>
                    <Slideshow imageNames={WestMall} />
                </div>
                <div className='slideshowContainerLeft'>
                    <h3 className='projectHeadingLeft'>Pizza Hut - Commercial</h3>
                    <Slideshow imageNames={PizzaHut} />
                </div>
                <div className='slideshowContainerRight'>
                    <h3 className='projectHeadingRight'>Newmarket - Condo</h3>
                    <Slideshow imageNames={Newmarket} />
                </div>
                <div className='slideshowContainerLeft'>
                    <h3 className='projectHeadingLeft'>Markham - Residential</h3>
                    <Slideshow imageNames={Markham} />
                </div>
                <div className='slideshowContainerRight'>
                    <h3 className='projectHeadingRight'>North York - Residential</h3>
                    <Slideshow imageNames={NorthYork} />
                </div>
                <div className='slideshowContainerLeft'>
                    <h3 className='projectHeadingLeft'>Milton - Residential</h3>
                    <Slideshow imageNames={Milton} />
                </div>
                <div className='slideshowContainerRight'>
                    <h3 className='projectHeadingRight'>Aurora - Residential</h3>
                    <Slideshow imageNames={Aurora} />
                </div>
            </div>
        </div>
    )
}