import React, { useState } from 'react'
import './DAppointment.css'
import Calendar from 'react-calendar'
const DAppointment = () => {
    const [value, onChange] = useState(new Date())
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
                        <tr>
                            <td>BK Bagchi</td>
                            <td>7:00 AM</td>
                            <td><button className="action">Not Visited</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DAppointment;