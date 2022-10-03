import React, { useEffect } from 'react'
import "../styles/Main.css"
import bg from "../img/ok5.gif"
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFacebook } from 'react-icons/bs';


export default function Main() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, [])
    return (
        <>
            <div className='hero   '>
                <div className='flex justify-center   ' >

                    <div className=' w-4/5 flex justify-between mx-auto   fixed top-5  ' >

                        <div className="" >Syed Ahsan</div>
                        <div className='flex ' >
                            <a className='text-2xl mr-1 sm:mr-2 ' href=""><i><BsFacebook /></i></a>
                            <a className='text-2xl mr-1 sm:mr-2' href=""><i><BsFacebook /></i></a>
                            <a className='text-2xl mr-1 sm:mr-2' href=""><i><BsFacebook /></i></a>
                            <a className='text-2xl ' href=""><i><BsFacebook /></i></a>

                        </div>

                    </div>

                    {/* <div className=' w-full border-dashed  border-b-[3px] border-[#ffffff] absolute top-16  ' ></div> */}

                </div>
                <div className=" h-screen w-screen sm:flex sm:mx-auto lg:px-20 ">

                    <div className='block sm:hidden' >
                        <div className='sm:h-full w-full flex items-center  ' >
                            <div data-aos="zoom-in" >
                                <img src={bg} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='sm:h-full w-full sm:flex items-center mt-10 md:mt-0 md:pl-12 lg:pl-0' >
                        <div className='flex flex-col items-center sm:block ' >
                            <div data-aos="fade-in" >
                                <p className='text-[#ffffff]  text-base sm:text-6xl font-semibold mb-2 sm:mb-6 ' data-aos="zoom-in" >I'm</p>
                                <h1 className='text-[#ffffff] text-3xl sm:text-6xl font-bold mb-2 sm:mb-6 ' data-aos="zoom-in" >Ahsan Naqvi</h1>
                                <h2 className='inline-block m-0 h-4 sm:h-9 text-[#ffffff] text-lg sm:text-4xl font-semibold ' >
                                    <Typewriter
                                        options={{
                                            strings: ['Front-End Developer', 'Web Developer', "App Developer", "Web Designer", "App Designer"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>

                                <div className='mt-7 md:mt-14' data-aos="flip-down"  >
                                    <a href="/" className='mt-9 text-sm font-semibold sm:tracking-[1px] text-[#ef233cf2] bg-[#ffffff] hover:text-[#ffffff] hover:bg-transparent py-2 sm:py-3 px-3 sm:px-6  border-[2px]  hover:border-[#ffffff]  mr-3 transition ease-in-out duration-[0.3s]' >Hire Me</a>
                                    <a href="/" className='mt-9 text-sm font-semibold sm:tracking-[1px] text-[#ef233cf2] bg-[#ffffff] hover:text-[#ffffff] hover:bg-transparent py-2 sm:py-3 px-3 sm:px-6  border-[2px]  hover:border-[#ffffff]  mr-3 transition ease-in-out duration-[0.3s]' >Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block' >
                        <div className='h-full w-full flex items-center ' >
                            <div data-aos="fade-left" >
                                <img src={bg} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
