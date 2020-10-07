import React from 'react'
import './Header.css'
import Navigation from './Navigation'
import Image from '../../Resources/images/MaskGroup1.png'
import { useHistory } from 'react-router-dom';
import CardImg1 from '../../Resources/images/001-dental.png'
import CardImg2 from '../../Resources/images/tooth(1).png'
import CardImg3 from '../../Resources/images/tooth.png'
import Service from '../Service/Service';
import Booking from '../Booking/Booking';

const HeaderBody = () => {
    const history = useHistory()
    return (
        <section className="header">
            <Navigation />
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
                <div className="row portal-info one mb-3">
                    <div className="col-4 d-flex align-items-center">
                        <img className="card-image" src={CardImg1} alt="Card Img" />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center">
                        <h5>Opening hours</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, consequuntur.</p>
                    </div>
                </div>
                <div className="row portal-info two mb-3">
                    <div className="col-4 d-flex align-items-center">
                        <img className="card-image" src={CardImg2} alt="Card Img" />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center">
                        <h5>Visit our location</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="row portal-info three mb-3">
                    <div className="col-4 d-flex align-items-center">
                        <img className="card-image" src={CardImg3} alt="Card Img" />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center">
                        <h5>Contact us now</h5>
                        <p>01711001100</p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <Service />
            <Booking />
        </section>
    );
};

export default HeaderBody;