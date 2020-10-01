import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light position-relative">
            <h4>Doctor Portal</h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                    <Link to="/"><li className="nav-link px-4">Home</li></Link>
                    <Link to="/dashboard"><li className="nav-link px-4">Dashboard</li></Link>
                    <li className="nav-link px-4">About</li>
                    <li className="nav-link px-4">Dental Services</li>
                    <li className="nav-link px-4">Reviews</li>
                    <li className="nav-link px-4">Blogs</li>
                    <li className="nav-link px-4">Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;