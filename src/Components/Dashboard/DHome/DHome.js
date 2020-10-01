import React from 'react'
import './DHome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section className="dashboard-home">
            <h4>Dashboard</h4>
            <div className="row">
                <div className="col-md-3">
                    <div className="row cards pending-appointment">
                        <div className="col-4">
                            <h1 className="m-0">5</h1>
                        </div>
                        <div className="col-8">
                            <p className="m-0">Pending Appointments</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row cards todays-appointment">
                        <div className="col-4">
                            <h1 className="m-0">5</h1>
                        </div>
                        <div className="col-8">
                            <p className="m-0">Today's Appointments</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row cards total-appointment">
                        <div className="col-4">
                            <h1 className="m-0">5</h1>
                        </div>
                        <div className="col-8">
                            <p className="m-0">Total Appointments</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row cards total-patients">
                        <div className="col-4">
                            <h1 className="m-0">5</h1>
                        </div>
                        <div className="col-8">
                            <p className="m-0">Total Patients</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 appointment-details">
                <h4 className="mb-4">Recent Appointments</h4>
                <table className="w-100 appointment-table">
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Prescription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>13-08-2020</td>
                            <td>12.00 AM</td>
                            <td>BK Bagchi</td>
                            <td>01716101098</td>
                            <td>
                                <button className="prescription">View</button>
                            </td>
                            <td>
                                <button className="action-1">Pending</button>
                                <button className="action-2"><FontAwesomeIcon icon={faPenFancy} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Home;