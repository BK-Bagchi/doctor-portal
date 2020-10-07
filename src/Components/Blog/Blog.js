import React from 'react'
import './Blog.css'
import Doctor1 from '../../Resources/images/Ellipse1.png'
import Doctor2 from '../../Resources/images/Ellipse3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Blogs = ({ image, doctorName, doctorSays }) => {
    return (
        <div className="col-md-4 holder">
            <div className="blog my-2">
                <div className="d-flex">
                    <div className="mx-3 mb-4">
                        <img src={image} alt="User Img" />
                    </div>
                    <div className="mx-3 d-flex flex-column justify-content-center">
                        <h6 className="font-weight-bold">{doctorName}</h6>
                        <span className="text-muted">23 Apr 2020</span>
                    </div>
                </div>
                <h6>{doctorSays}</h6>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odit.</p>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <section className="all-blog">
            <h5 className="text-center text-uppercase">Our Blog</h5>
            <h2 className="text-center text-capitalize">From our blog news</h2>
            <div className="blogs my-5">
                <div className="row d-flex flex-wrap justify-content-center">
                    <div className="col-md-4 holder">
                        <div className="blog one my-2">
                            <h6>Rashed Kabir</h6>
                            <p>22 Aug 2020</p>
                            <h4 className="mt-5">Check at least a doctor in a year for your teeth</h4>
                            <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
                        </div>
                    </div>
                    <Blogs image={Doctor2} doctorName={'Dr. Caudi'} doctorSays={'2 Times of brush in a day can keep you healthy'} />
                    <Blogs image={Doctor1} doctorName={'Dr. John Mitchel'} doctorSays={'The tooth cancer is taking a challenge'} />
                </div>
            </div>
        </section>
    );
};

export default Blog;