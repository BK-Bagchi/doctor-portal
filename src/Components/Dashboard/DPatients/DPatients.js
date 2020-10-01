import React from 'react'
import './DPatients.css'

const DPatients = () => {
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
                    <tr>
                        <td>01</td>
                        <td>BK Bagchi</td>
                        <td>Male</td>
                        <td>23</td>
                        <td>55kg</td>
                        <td>01716101098</td>
                        <td>Sagorpara, Rajshahi</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default DPatients;