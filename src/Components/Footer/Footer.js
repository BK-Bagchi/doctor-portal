import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="footer row w-100">
            <div className="col-md-3">
                <p className="invisible">Dipto</p>
                <ul>
                    <li>Emergency Dental Care</li>
                    <li>Check Up</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Tooth Extraction</li>
                </ul>
            </div>
            <div className="col-md-3">
                <p>Services</p>
                <ul>
                    <li>Tooth Extraction</li>
                    <li>Emergency Dental Care</li>
                    <li>Treatment of Personal Disease</li>
                    <li>Check Up</li>
                </ul>
            </div>
            <div className="col-md-3">
                <p>Oral Health</p>
                <ul>
                    <li>Treatment of Personal Disease</li>
                    <li>Emergency Dental Care</li>
                    <li>Tooth Extraction</li>
                    <li>Check Up</li>
                    <li>Tooth Extraction</li>
                    <li>Emergency Dental Care</li>
                </ul>
            </div>
            <div className="col-md-3">
                <p>Our Address</p>
                <ul><li>New York - 101010 Hudson Avenue</li></ul>
                <div className="w-100 row">
                    <div className="col-4">
                        <div className="icon d-flex justify-content-center"><p><FontAwesomeIcon icon={faFacebookF} /></p></div>
                    </div>
                    <div className="col-4">
                        <div className="icon d-flex justify-content-center"><p><FontAwesomeIcon icon={faGooglePlusG} /></p></div>
                    </div>
                    <div className="col-4">
                        <div className="icon d-flex justify-content-center"><p><FontAwesomeIcon icon={faTwitter} /></p></div>
                    </div>
                </div>
            </div>
            <ul className="w-100">
                <li className="mt-5 pt-5 text-center text-capitalize">Copyright {new Date().getFullYear()} all rights reserved</li>
            </ul>
        </footer>
    );
};

export default Footer;