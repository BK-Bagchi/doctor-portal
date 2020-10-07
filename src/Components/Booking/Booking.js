import React from 'react'
import './Booking.css'
import DoctorImage from '../../Resources/images/5790-removebg.png'

const Booking = () => {
    return (
        <section className="booking pt-3">
            <div className="row">
                <div className="col-md-5 d-none d-md-flex justify-content-center">
                    <img className="" src={DoctorImage} alt="Doctor Img" />
                </div>
                <div className="col-md-7 p-5">
                    <h5 className="text-uppercase my-4">Appointment</h5>
                    <h2 className="my-4">Make an Appointment Today</h2>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus accusantium nesciunt laudantium, ipsam aperiam consectetur ducimus esse perspiciatis quisquam deserunt itaque?</p>
                    <button className="my-4">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Booking;