import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import { Carousel } from 'react-bootstrap'
import pic1 from "../img/team-1.jpg"
import pic2 from "../img/team-2.jpg"
import pic3 from "../img/team-3.jpg"

export default function Testimonials() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    return (
        <div className="h-screen flex items-center allfonts sm:mt-16 " style={{ "backgroundColor": "#ef233c" }} data-aos="fade-up" >
            <Carousel className='w-screen sm:h-4/5 h-screen  overflow-hidden   ' style={{ "backgroundColor": "#ef233c" }} pause={false} interval={3000}   >
                <Carousel.Item  >
                    <div class="testimonial  " data-wow-delay="0.1s" id="review"  >
                        < div class="container" >
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic1} />
                                    </div>
                                    <div class="testimonial-text">
                                        <p  >
                                            Grant completely re built my website for me. He took my brief
                                            and injected his own creative ideas and showed an excellent understanding of the style I was
                                            trying to create.
                                        </p>
                                        <h3>Dr Suzy Walton</h3>
                                        <h4>Non-exec Board Director</h4>
                                    </div>
                                </div>

                            </div>
                        </ div>
                    </div >
                </Carousel.Item >
                <Carousel.Item>
                    <div class="testimonial " data-wow-delay="0.1s" id="review">
                        <div class="container">
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic2} />
                                    </div>
                                    <div class="testimonial-text">
                                        <p>
                                            Efficient service. Seamless process from start to finish of website design. Would recommend
                                        </p>
                                        <h3>Mr Philippe de Rosnay, Consultant Gynaecologist</h3>
                                        <h4>PdR Medical</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="testimonial " data-wow-delay="0.1s" id="review">
                        <div class="container">
                            <div class="testimonial-icon">
                                <i class="fa fa-quote-left"></i>
                            </div>
                            <div class="owl-carousel testimonials-carousel">
                                <div class="testimonial-item">
                                    <div class="testimonial-img">
                                        <img src={pic3} />
                                    </div>
                                    <div class="testimonial-text">
                                        <p>
                                            We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Thrive to anyone looking to build a new website.
                                        </p>
                                        <h3>Esra Parr </h3>
                                        <h4>Kee Service Co.</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel >
        </div >
    )
}
