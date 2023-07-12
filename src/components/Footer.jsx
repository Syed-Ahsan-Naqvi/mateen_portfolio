import React from 'react'
import { BsFacebook, BsFillTelephoneOutboundFill, BsInstagram, BsLinkedin } from "react-icons/bs";


export default function Footer() {
    return (
        <div>
            <div className="footer wow fadeIn " data-wow-delay="0.3s">
                <div className="container-fluid   ">
                    <div className="container">
                        <div className="footer-info">
                            <h2>Mateen Imran</h2>
                            <h3>HashStack developers Software House, Canal Bank </h3>
                            <div className="footer-menu">
                                <p>+923174217302</p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {/* &nbsp; */}
                                <a href="tel:+923174217302" className='text-gray-50 hover:text-[#313131] text-xl  ' ><BsFillTelephoneOutboundFill /></a>
                                <p></p>
                                <p>mateenimran38@gmail.com</p>
                            </div>
                            <div className="footer-social w-full ">
                                {/* <a href="/"><i> <BsTwitter /> </i></a> */}
                                <a className='ml-2' href="/"><i> <BsFacebook /> </i></a>
                                {/* <a className='ml-2' href="/"><i> <BsYoutube /> </i></a> */}
                                <a className='ml-2' href="/"><i> <BsInstagram /> </i></a>
                                <a className='ml-2' href="/"><i> <BsLinkedin /> </i></a>
                                {/* <a className='ml-2' href="/"><i> <BsGithub /> </i></a> */}
                                <a className='ml-2' href="/"><i></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="container copyright">
                        <p>&copy; <a href="/">Mateen Imran</a>, All Right Reserved |

                            {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                            {/* <!-- Designed By <a href="https://htmlcodex.com">HTML Codex</a> --> */}
                            &nbsp;Copyrights
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
