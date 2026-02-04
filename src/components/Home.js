import React from 'react'
import {ReactTyped } from "react-typed";
import userImage from "../assets/suraj.jpg"

import circle from "../assets/anemyIcon/circle.png";
import cube from "../assets/anemyIcon/cube.png";
import dots from "../assets/anemyIcon/dots.png";
import plus from "../assets/anemyIcon/plus.png";
import zigzag from "../assets/anemyIcon/zigzags.png";


const Home = () => {
  return (
    <div id='home' className='bg-image overflow-y-hidden flex flex-col justify-between'>
        <div className='relative w-10/12 mx-auto py-20'>
            <div className='flex flex-col md:flex-row items-center gap-10'>
                {/* Left section */}
                <div className='relative flex items-start flex-col gap-y-6 md:w-1/2'>
                    {/* Hi there */}
                    <div className="relative inline-block">
                        <p className="text-[17px] bg-white px-3 py-1 rounded-md text-[#9929fb] font-bold relative z-10">
                            Hi There!
                        </p>
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] h-4 w-4 bg-white rotate-45 z-0"></div>
                    </div>

                    {/* typed text */}
                    <p className='md:w-[80%] text-3xl md:text-4xl font font-semibold leading-tight'>
                        I am Suraj Prajapati {" "}
                        <span className='text-purple-900'>
                            <ReactTyped 
                                strings={[
                                    "Full Stack Developer",
                                    "Web Developer",
                                    "UI-UX Designer",
                                    "Backend Developer",
                                    "Coder",
                                ]}
                                typeSpeed={80}
                                backSpeed={50}
                                backDelay= {1000}
                                loop={true}

                            />
                        </span>
                    </p>
                    <p className='text-sm md:text-[18px] md:w-[90%] opacity-80'>
                        I am a software developer and here is my portfolio website. Here you'll learn about my journey as software developer.
                    </p>
                    <button className='px-4 py-2 bg-[#9929fb] rounded-sm text-white font-bold md:text-[20px]'>
                        Say Hello
                    </button>
                </div>
                {/* Right section */}
                <div className='relative  flex  justify-center items-center'>
                    <img
                        src={userImage}
                        alt='userImage'
                        width={490}
                        height={390}
                        className='user-image'
                    />
                    {/* -------------------------------- */}
                    <div className="icon-dots absolute">
                        <img src={dots} alt='dots'/>
                    </div>
                    <div className="icon-cube absolute">
                        <img src={cube} alt='cube'/>
                    </div>
                    <div className="icon-circle absolute">
                        <img src={circle} alt='circle'/>
                    </div>
                    <div className="icon-zigzak absolute">
                        <img src={zigzag} alt='zigzag'/>
                    </div>
                    <div className="icon-plus absolute">
                        <img src={plus} alt='plus'/>
                    </div>
                </div>
            </div>
        </div>

        {/* --------------------- */}
        {/* <div className=''>
            <div className='pb-6 mx-auto w-10/12 flex gap-2'>
                <div className='bg-[#F6EBFE] text-center p-2'>
                    <p className='text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700'>
                        15 Y.
                    </p>
                    <p className='text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500'>
                        Experience
                    </p>
                </div>
                <div className='bg-[#F6EBFE] text-center  p-2'>
                    <p className='text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700'>
                        250+
                    </p>
                    <p className='text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500'>
                        Projects Completed
                    </p>
                </div>
                <div className='bg-[#F6EBFE] text-center  p-2'>
                    <p className='text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700'>
                        58
                    </p>
                    <p className='text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500'>
                        Happy Clients
                    </p>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Home
