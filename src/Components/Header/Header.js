import React from 'react'
import './Header.css'
import Navigation from './Navigation'
import Image from '../../Resources/images/Mask Group 1.png'
import { useHistory } from 'react-router-dom';
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
        </section>
    );
};

export default HeaderBody;