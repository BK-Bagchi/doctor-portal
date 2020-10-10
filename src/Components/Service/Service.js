import React from 'react'
import './Service.css'
import CardImg1 from '../../Resources/images/001-dental.png'
import CardImg2 from '../../Resources/images/tooth(1).png'
import CardImg3 from '../../Resources/images/tooth.png'
import DentalCare from '../../Resources/images/MaskGroup3.png'

const Card = ({ image, treatment }) => {
    return (
        <div className="col-md-4 d-flex flex-column align-items-center card-item">
            <img className="card-image" src={image} alt="Card Img" />
            <h5>{treatment}</h5>
            <p className="text-muted text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui placeat totam.</p>
        </div>
    )
}
const Service = () => {
    return (
        <section className="service">
            <h5 className="text-center text-uppercase our-services">Our Services</h5>
            <h2 className="text-center text-capitalized provide">Services we provide</h2>
            <div className="card-holder">
                <div className="row w-100">
                    <Card image={CardImg1} treatment={'Potassium Treatment'} />
                    <Card image={CardImg2} treatment={'Fluoride Treatment'} />
                    <Card image={CardImg3} treatment={'Chloride Treatment'} />
                </div>
            </div>
            <div className="dental-care">
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={DentalCare} alt="Dental Care" />
                    </div>
                    <div className="col-md-7">
                        <h2>Exceptional Dental Care, on Your Terms</h2>
                        <p className="text-muted my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempore a cum veritatis ea, libero et enim quod, temporibus ducimus inventore totam molestiae excepturi dolor, odit consequuntur exercitationem autem animi labore voluptatum? Quis eligendi fuga nihil optio similique nostrum itaque deleniti dolor iusto vero excepturi repellat nobis voluptas ea ratione atque aperiam perspiciatis quibusdam ab, velit perferendis autem illum rerum? Tempora ut unde dolorem perferendis! Error reprehenderit facilis tempora amet?
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;