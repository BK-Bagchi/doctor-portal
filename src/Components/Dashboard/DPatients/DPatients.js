import React, { useEffect, useState } from 'react'
import './DPatients.css'

const DPatients = () => {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/treatments`)
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    return (
        <section className="dashboard-patients">
            <h5 className="tag-1">All Patients</h5>
            <table className="w-100 patients-table mt-5">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient, index) => {
                            const { _id, patientName, patientPhone } = patient
                            return (
                                <tr key={_id}>
                                    <td>{index + 1}</td>
                                    <td>{patientName}</td>
                                    <td>Male</td>
                                    <td>23</td>
                                    <td>55kg</td>
                                    <td>{patientPhone}</td>
                                    <td>Sagorpara, Rajshahi</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    );
};

export default DPatients;