import React, { useEffect } from 'react'
import { AiFillHtml5, AiOutlineLine } from 'react-icons/ai'
import { DiCss3, DiJqueryLogo, DiNodejs, DiNpm, DiReact } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiGithub, SiGithubactions, SiHeroku, SiMaterialui, SiMongodb, SiMysql, SiNetlify, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import { GrHeroku } from 'react-icons/gr'
import { FaGit } from 'react-icons/fa'
import { MdOutlineDoneAll } from 'react-icons/md'
import bg from "../img/cloud-bg-3.gif"
import { Icon } from '@iconify/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, [])
    return (

        <div className='mt-10' >
            <div className='mt-[300px] sm:mt-28 text-center ' >
                <div data-aos="zoom-in" >
                    <p className='text-base font-semibold tracking-[1px] uppercase  mb-3 inline-block ' ><i className=' inline-block relative top-[1.2rem] right-2 text-[50px]  text-[#ef233cf2]  ' ><AiOutlineLine /></i>What I do</p>
                    <h2 className=' text-[30px] sm:text-5xl tracking-[-1px] font-bold sm:font-bold ' >Cloud Infra Structure</h2>
                </div>
            </div>
            <div className='h-screen w-screen lg:flex lg:mx-auto lg:px-20  '>

                <div className=' lg:flex h-full w-full  ' >
                    <div className='overflow-x-hidden flex items-center mt-7 sm:mt-0'  >
                        <div data-aos="fade-right" >
                            <img src={bg} width="100%" height="100%" alt="" />
                        </div>
                    </div>
                    <div className=' h-full w-full lg:flex items-center px-2 lg:px-0 ' >
                        <div >
                            <p className="text-center py-2 uppercase  tracking-wide" data-aos="fade" >
                                Clouds and languages that I use to make my product
                                everyday
                            </p>
                            <div className='lg:flex justify-center ' >
                                <div>
                                    <div className='flex justify-center py-2' data-aos="flip-down"  >
                                        <div
                                            title="Heroku"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i
                                                title="Heroku"
                                                className=" bg-transparent text-[#7d4e89]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ..."
                                            >
                                                <GrHeroku title="Heroku" />
                                            </i>
                                        </div>
                                        <div
                                            title="MongoDB"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="MongoDB" className=" bg-transparent text-[#008000]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <SiMongodb title="MongoDB" />
                                            </i>
                                        </div>
                                        <div
                                            title="Netlify"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i title="Netlify" className=" bg-transparent text-[#59aec5]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <SiNetlify title="Netlify" />
                                            </i>
                                        </div>
                                        <div
                                            title="ReactJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#336791]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <SiPostgresql />
                                            </i>
                                        </div>

                                    </div>
                                    <div className='flex justify-center py-2' data-aos="flip-down" >
                                        <div
                                            title="NodeJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#1a1d22]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <SiGithub />
                                            </i>
                                        </div>
                                        <div
                                            title="Node Package Manager"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#2084f6]  text-5xl  lg:text-6xl transition   hover:scale-110  duration-300 ...">
                                                <SiGithubactions />
                                            </i>
                                        </div>
                                        <div
                                            title="NextJS"
                                            class="rounded-full bg-transparent shadow-2xl flex items-center justify-center h-16  w-16 lg:h-24 lg:w-24"
                                        >
                                            <i className=" bg-transparent text-[#005e86]  text-5xl  lg:text-7xl transition   hover:scale-110  duration-300 ...">
                                                <SiMysql />
                                            </i>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='flex py-2 pt-4' data-aos="fade-right" >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500  text-3xl lg:text-3xl"  >
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Experience working on multiple cloud platforms.</p>
                            </div>
                            <div className="flex py-2" data-aos="fade-right"  >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500 text-3xl lg:text-3xl">
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Experience hosting and managing websites.</p>
                            </div>
                            <div className="flex py-2" data-aos="fade-right"  >
                                <i className=" -m-2 mr-2 lg:-m-0 lg:mr-0 text-green-500 text-3xl lg:text-3xl">
                                    <MdOutlineDoneAll />
                                </i>
                                <p>Experience with Continuous Integration.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
