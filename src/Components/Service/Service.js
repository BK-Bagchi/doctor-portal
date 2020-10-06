import React from 'react'
import './Service.css'
import CardImg1 from '../../Resources/images/001-dental.png'
import CardImg2 from '../../Resources/images/tooth(1).png'
import CardImg3 from '../../Resources/images/tooth.png'

const Service = () => {
    return (
        <section className="service">
            <h5 className="text-center text-uppercase our-services">Our Services</h5>
            <h2 className="text-center text-capitalized provide">Services we provide</h2>
            <div className="card-holder">
                <div className="row w-100">
                    <div className="col-md-4 d-flex flex-column align-items-center card-item">
                        <img className="card-image" src={CardImg1} alt="Card Img" />
                        <h5>Fluoride Treatment</h5>
                        <p className="text-muted text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui placeat totam.</p>
                    </div>
                    <div className="col-md-4 flex-column d-flex align-items-center card-item">
                        <img className="card-image" src={CardImg2} alt="Card Img" />
                        <h5>Fluoride Treatment</h5>
                        <p className="text-muted text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui placeat totam.</p>
                    </div>
                    <div className="col-md-4 flex-column d-flex align-items-center card-item">
                        <img className="card-image" src={CardImg3} alt="Card Img" />
                        <h5>Fluoride Treatment</h5>
                        <p className="text-muted text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui placeat totam.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;