import React, { useEffect, useState } from 'react'
import './DAppointment.css'
import Calendar from 'react-calendar'
const DAppointment = () => {
    const [value, onChange] = useState(new Date())

    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/treatments`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <section className="row dashboard-appointments">
            <div className="col-md-5 d-flex justify-content-center calendar">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
            <div className="col-md-7 appointment-list">
                <div className="d-flex justify-content-between mb-4">
                    <h5 className="tag-1">Appointments</h5>
                    <h5 className="tag-2">{value.toLocaleDateString()}</h5>
                </div>
                <table className="w-100 appointment-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Schedule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment => {
                                const { _id, patientName, treatmentTime } = appointment
                                return (
                                    <tr key={_id}>
                                        <td>{patientName}</td>
                                        <td>{treatmentTime}</td>
                                        <td><button className="action">Not Visited</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DAppointment;