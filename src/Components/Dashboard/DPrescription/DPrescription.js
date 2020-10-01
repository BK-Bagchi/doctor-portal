import React from 'react'
import './DPrescription.css'

const DPrescription = () => {
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
                    <tr>
                        <td>01</td>
                        <td>13.08.2020</td>
                        <td>BK Bagchi</td>
                        <td>01716101098</td>
                        <td>
                            <button className="prescription">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default DPrescription;