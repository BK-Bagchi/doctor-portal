import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Navigation from '../Header/Navigation'
import Image from '../../Resources/images/Mask Group 1.png'
import './Appointment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Appointment = () => {
    const [value, onChange] = useState(new Date());
    const [popupStyle, setPopupStyle] = useState("none")
    const callPopup = (style) => {
        setPopupStyle(style)
    }

    return (
        <>
            <section className="appointment d-flex flex-column">
                <Navigation />
                <div className="row m-0 d-flex align-items-center justify-content-around">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <h2>Appointment</h2>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                    <div className="col-md-6">
                        <img className="portal-cover" src={Image} alt="Doctor Portal" />
                    </div>
                </div>
            </section>
            <section className="appointment-list mt-5">
                <h4 className="text-center mb-3">Available Appointments on {value.toLocaleDateString()}</h4>
                <div className="row all-appointment mx-auto">
                    <div className="col-md-4 p-0 my-3">
                        <div className="text-center mx-3 appointment-info">
                            <h5>Teeth Orthodontics</h5>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p>10 Spaces Available</p>
                            <button className="" onClick={() => callPopup("flex")}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-4 p-0 my-3">
                        <div className="text-center mx-3 appointment-info">
                            <h5>Teeth Orthodontics</h5>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p>10 Spaces Available</p>
                            <button className="" onClick={() => callPopup("flex")}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-4 p-0 my-3">
                        <div className="text-center mx-3 appointment-info">
                            <h5>Teeth Orthodontics</h5>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p>10 Spaces Available</p>
                            <button className="" onClick={() => callPopup("flex")}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-4 p-0 my-3">
                        <div className="text-center mx-3 appointment-info">
                            <h5>Teeth Orthodontics</h5>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p>10 Spaces Available</p>
                            <button className="" onClick={() => callPopup("flex")}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-4 p-0 my-3">
                        <div className="text-center mx-3 appointment-info">
                            <h5>Teeth Orthodontics</h5>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p>10 Spaces Available</p>
                            <button className="" onClick={() => callPopup("flex")}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="col-md-4 p-0 my-3">
                        <div className="text-center mx-3 appointment-info">
                            <h5>Teeth Orthodontics</h5>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p>10 Spaces Available</p>
                            <button className="" onClick={() => callPopup("flex")}>Book Appointment</button>
                        </div>
                    </div>
                </div>
                <br /><br />
            </section>
            <section style={{ "display": popupStyle }} className="appointment-popup">
                <div className="form-holder mx-auto">
                    <span className="quit" onClick={() => callPopup("none")}><FontAwesomeIcon icon={faTimes} /></span>
                    <h5 className="text-center subject">Teeth Orthodontics</h5>
                    <form className="d-flex flex-column submit-appointment mx-auto">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="submit" className="ml-auto set-appointment text-uppercase" value="Send" />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Appointment;