import React from 'react'
import './Header.css'
import Navigation from './Navigation'
import Image from '../../Resources/images/MaskGroup1.png'
import { useHistory } from 'react-router-dom';
import Service from '../Service/Service';
import Booking from '../Booking/Booking';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Card = ({ background, font, text, detail }) => {
    return (
        <div className={`row portal-info ${background} mb-3`}>
            <div className="col-4 d-flex align-items-center">
                <p className="icon"><FontAwesomeIcon icon={font} /></p>
            </div>
            <div className="col-8 d-flex flex-column justify-content-center">
                <h5>{text}</h5>
                <p>{detail}</p>
            </div>
        </div>
    )
}

const HeaderBody = () => {
    const history = useHistory()
    return (
        <>
            <Navigation />
            <section className="header">
                <div className="header-body position-relative h-100 d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-5 p-0 px-5">
                            <h1 className="text-capitalize">Your smile starts here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius veritatis repudiandae qui, asperiores velit. Accusantium et error eaque blanditiis, suscipit vel dolor temporibus! Et?</p>
                            <button className="text-uppercase get-appointment" onClick={() => history.push('/appointment')}>Get Appointment</button>
                        </div>
                        <div className="col-md-7 p-0 d-flex justify-content-start">
                            <img className="portal-cover" src={Image} alt="Doctor Portal" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="fixed-bg-left col-8"></div>
                    <div className="fixed-bg-right col-4"></div>
                </div>
                <div className="container cards d-flex flex-wrap justify-content-between position-relative">
                    <Card background={'one'} font={faClock} text={'Opening hours'} detail={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequuntur.'} />
                    <Card background={'two'} font={faMapMarkerAlt} text={'Visit our location'} detail={'Lorem ipsum dolor sit amet.'} />
                    <Card background={'three'} font={faPhoneVolume} text={'Contact us now'} detail={'01711001100'} />
                </div>
            </section>
            <Service />
            <Booking />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </>
    );
};

export default HeaderBody;