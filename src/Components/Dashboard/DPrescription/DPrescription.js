import React, { useEffect, useState } from 'react'
import './DPrescription.css'

const DPrescription = () => {
    const [prescriptions, setPrescriptions] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/treatments`)
            .then(res => res.json())
            .then(data => setPrescriptions(data))
    }, [])
    return (
        <section className="dashboard-prescription">
            <h5 className="tag-1">All Prescriptions</h5>
            <table className="w-100 prescription-table mt-5">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Prescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prescriptions.map((prescription, index) => {
                            const { _id, appointmentDate, patientName, patientPhone } = prescription
                            return (
                                <tr key={_id}>
                                    <td>{index + 1}</td>
                                    <td>{appointmentDate}</td>
                                    <td>{patientName}</td>
                                    <td>{patientPhone}</td>
                                    <td>
                                        <button className="prescription">View</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    );
};

export default DPrescription;