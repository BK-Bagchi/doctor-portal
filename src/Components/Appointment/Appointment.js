import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Navigation from '../Header/Navigation'
import Image from '../../Resources/images/MaskGroup1.png'
import './Appointment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Appointment = () => {
    const [value, onChange] = useState(new Date());
    const [popupStyle, setPopupStyle] = useState("none")

    const [treatmentTypes, setTreatmentTypes] = useState([])
    const [bookings, setBookings] = useState({})

    const callPopup = (style, treatment) => {
        setPopupStyle(style)
        setBookings({ treatmentName: treatment.name, treatmentTime: treatment.time })
    }
    const formValueHandler = e => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'Name') setBookings({ ...bookings, patientName: value })
        else if (name === 'Number') setBookings({ ...bookings, patientPhone: value })
        else if (name === 'Email') setBookings({ ...bookings, patientEmail: value })
        else if (name === 'Date') setBookings({ ...bookings, appointmentDate: value })
    }
    const submitForm = e => {
        e.preventDefault()
        fetch('http://localhost:4000/appointmentBookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => console.log(data.insertedCount))
    }
    useEffect(() => {
        fetch(`http://localhost:4000/treatmentTypes`)
            .then(res => res.json())
            .then(data => setTreatmentTypes(data))
    }, [])

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
                    {
                        treatmentTypes.map(treatments => {
                            const { _id, name, space, time } = treatments
                            return (
                                <div key={_id} className="col-md-4 p-0 my-3">
                                    <div className="text-center mx-3 appointment-info">
                                        <h5>{name}</h5>
                                        <h6>{time}</h6>
                                        <p>{space} Spaces Available</p>
                                        <button className="" onClick={() => callPopup("flex", treatments)}>Book Appointment</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <br /><br />
            </section>
            <section style={{ "display": popupStyle }} className="appointment-popup">
                <div className="form-holder mx-auto">
                    <span className="quit" onClick={() => callPopup("none", {})}><FontAwesomeIcon icon={faTimes} /></span>
                    <h5 className="text-center subject">{bookings.treatmentName}</h5>
                    <form className="d-flex flex-column submit-appointment mx-auto">
                        <input type="text" value={` On ${value.toLocaleDateString()} at ${bookings.treatmentTime}`} readOnly />
                        <input name="Name" type="text" placeholder="Your Name" onBlur={formValueHandler} />
                        <input name="Number" type="number" placeholder="Your Phone Number" onBlur={formValueHandler} />
                        <input name="Email" type="email" placeholder="Your Email" onBlur={formValueHandler} />
                        <input name="Date" type="date" onBlur={formValueHandler} />
                        <input type="submit" className="ml-auto set-appointment text-uppercase" value="Send" onClick={submitForm} />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Appointment;