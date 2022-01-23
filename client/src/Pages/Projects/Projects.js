import React, {useEffect} from 'react';
import Navigation from '../../Components/Navbar/Navbar.js'
import Title from '../../Components/Title/Title.js'
import Slideshow from '../../Components/Slideshow/Slideshow.js';
import './Projects.css'

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | First-out Demolition"
    })
    const Woodbridge = ['https://i.ibb.co/cFFTQ6v/img6.jpg', 'https://i.ibb.co/cFQVtH3/img1.jpg', 'https://i.ibb.co/C8MdDNs/img2.jpg', 'https://i.ibb.co/zV95nmD/img3.jpg', 'https://i.ibb.co/YZW4w2m/img4.jpg', 'https://i.ibb.co/Kz3KK2t/img5.jpg', 'https://i.ibb.co/2SDPfz5/img7.jpg']
    const RichmondHill = ['https://i.ibb.co/zPdJrS7/img1.jpg', 'https://i.ibb.co/yhjrjyB/img2.jpg', 'https://i.ibb.co/GCTzkdB/img3.jpg', 'https://i.ibb.co/SX8BZSx/img4.jpg', 'https://i.ibb.co/X71QyQj/img5.jpg', 'https://i.ibb.co/6RW8Wgv/img6.jpg', 'https://i.ibb.co/YT45tY7/img7.jpg', 'https://i.ibb.co/25KkBmG/img8.jpg', 'RichmondHill1.mp4', 'https://i.ibb.co/GdpkKMq/img9.jpg', 'https://i.ibb.co/f06S7WJ/img10.jpg', 'https://i.ibb.co/SRTsdFZ/img11.jpg', 'https://i.ibb.co/CHLV3B9/img12.jpg']
    const Etobicoke = ['Etobicoke1.mp4', 'https://i.ibb.co/gR2j0FN/IMG-1376.jpg', 'https://i.ibb.co/6mWSdCd/IMG-1379.jpg', 'about.mp4']
    const WestMall = ['https://i.ibb.co/F3rsBmT/IMG-2275.jpg', 'https://i.ibb.co/6tdyB8J/IMG-2277.jpg', 'https://i.ibb.co/L0gtRyM/IMG-2278.jpg', 'West mall1.mp4']
    const PizzaHut = ['https://i.ibb.co/bBZsCVp/img1.jpg', 'https://i.ibb.co/nDQgH44/img2.jpg', 'https://i.ibb.co/bHLSLyy/img3.jpg', 'https://i.ibb.co/KVPmpw0/img4.jpg', 'https://i.ibb.co/7pQK6J8/img5.jpg', 'https://i.ibb.co/PjpMKFN/img6.jpg', 'https://i.ibb.co/XsQtxyt/img7.jpg', 'https://i.ibb.co/y4X44Wm/img8.jpg', 'https://i.ibb.co/JFJCX9z/img9.jpg', 'https://i.ibb.co/nrDHtwM/img10.jpg']
    const Newmarket = ['https://i.ibb.co/6mw4Br0/img1.jpg', 'https://i.ibb.co/hcTZc2B/img2.jpg', 'https://i.ibb.co/yqBr5gT/img3.jpg', 'https://i.ibb.co/mvcSmwn/img4.jpg', 'https://i.ibb.co/t8QjSN5/img5.jpg']
    const Markham = ['https://i.ibb.co/Xx0CHH7/img1.jpg', 'https://i.ibb.co/dt49ny5/img2.jpg', 'https://i.ibb.co/vVK2W28/img3.jpg', 'https://i.ibb.co/19wGQ8R/img4.jpg', 'https://i.ibb.co/HBfKhP7/img5.jpg', 'https://i.ibb.co/kK4z9F2/img6.jpg', 'https://i.ibb.co/TqBhXV9/img7.jpg', 'https://i.ibb.co/CvRSQQv/img8.jpg', 'https://i.ibb.co/yn9jzYZ/img9.jpg', 'https://i.ibb.co/sHWjS0h/img10.jpg', 'https://i.ibb.co/n7FQb1y/img11.jpg']
    const NorthYork = ['https://i.ibb.co/99Qnxwn/img1.jpg', 'https://i.ibb.co/jfm2mfY/img2.jpg', 'https://i.ibb.co/hMXHW5v/img3.jpg', 'https://i.ibb.co/rF33Dxc/img4.jpg', 'https://i.ibb.co/X8Byn8D/img5.jpg', 'https://i.ibb.co/P5r5TnP/img6.jpg', 'https://i.ibb.co/zVSjJTL/img7.jpg', 'https://i.ibb.co/jTrNJhJ/img8.jpg']
    const Milton = ['https://i.ibb.co/p1XFhdD/img1.jpg', 'https://i.ibb.co/v3tXYhk/img2.jpg', 'https://i.ibb.co/99t1xsB/img3.jpg', 'https://i.ibb.co/bdbRQnB/img4.jpg', 'https://i.ibb.co/Wk0nptg/img5.jpg']
    const Aurora = ['https://i.ibb.co/ypd6rSd/img1.jpg', 'https://i.ibb.co/jWMZp3v/img2.jpg', 'https://i.ibb.co/njXPyrH/img3.jpg', 'https://i.ibb.co/XFRHbVD/img4.jpg', 'https://i.ibb.co/YbnHWcg/img5.jpg', 'https://i.ibb.co/WVgbq9K/img6.jpg', 'https://i.ibb.co/1LQbZSb/img7.jpg', 'https://i.ibb.co/p3wnwfz/img8.jpg', 'https://i.ibb.co/CsxLD5C/img9.jpg', 'https://i.ibb.co/S6NT47h/img10.jpg']
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


















