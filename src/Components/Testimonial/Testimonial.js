import React from 'react'
import './Testimonial.css'
import Patient1 from '../../Resources/images/Ellipse1.png'
import Patient2 from '../../Resources/images/Ellipse2.png'
import Patient3 from '../../Resources/images/Ellipse3.png'

const PatientOpinion = ({ image, name, location }) => {
    return (
        <div className="col-md-4 holder">
            <div className="opinion p-4">
                <p className="text-muted saying">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor? Libero aliquam, similique molestiae aspernatur est sequi! Hic molestias saepe velit. Deleniti tempore optio placeat!</p>
                <main className="d-flex mt-4">
                    <div className="opinion-main mx-4">
                        <img src={image} alt="Patient Img" />
                    </div>
                    <div className="mx-4 patient">
                        <p className="m-0">{name}</p>
                        <h6 className="mt-2 text-muted">{location}</h6>
                    </div>
                </main>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <section className="testimonial my-5">
            <h5 className="text-uppercase mx-4">Testimonial</h5>
            <h2 className="text-capitalized mx-4">What's our patients say</h2>
            <div className="patients-say my-4">
                <div className="row d-flex flex-wrap justify-content-center">
                    <PatientOpinion image={Patient1} name={'Winson Herry'} location={'USA'} />
                    <PatientOpinion image={Patient2} name={'Evy Frey'} location={'UK'} />
                    <PatientOpinion image={Patient3} name={'Emma Rodies'} location={'UAE'} />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;