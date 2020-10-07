import React from 'react'
import './Doctors.css'
import DoctorImage from '../../Resources/images/5790-removebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ name }) => {
    return (
        <div className="col-md-4">
            <img className="w-100" src={DoctorImage} alt="Doctor Img" />
            <p className="text-center font-weight-bold m-2">{name}</p>
            <h6 className="text-center"><span><FontAwesomeIcon icon={faPhoneVolume} /></span> 01716101098</h6>
        </div>
    )
}
const Doctors = () => {
    return (
        <section className="doctors">
            <h5 className="text-center text-uppercase">Our Doctors</h5>
            <div className="row">
                <Doctor name={'Dr. Rashed Kabir'} />
                <Doctor name={'Dr. Caudi'} />
                <Doctor name={'Dr. John Mitchel'} />
            </div>
        </section>
    );
};

export default Doctors;