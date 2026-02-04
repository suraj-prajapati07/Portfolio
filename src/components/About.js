import React, { useState } from 'react'
import userImage from "../assets/suraj.jpg"
import { FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from 'react-scroll';



const tabsData = [
    {
        id:1,
        tag: "about me",
        heading: "My Story",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        subHeading: "I Do Web Design & Developement since I was 18 Years Old",
        subDescription: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {
        id:2,
        tag: "skills",
        heading: "skills",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        skills:[
            {name: "C/C++", percent: "90%"},
            {name: "Java", percent: "70%"},
            {name: "Data Structure & Algorithm", percent: "80%"},
            {name: "React.Js", percent: "90%"},
            {name: "Node.Js", percent: "100%"},
            {name: "MongoDB", percent: "80%"},
        ]

    },
    {
        id:3,
        tag: "experience",
        data:[
            {
                heading:"Art & Creative Director",
                year: "2014-2015",
                description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
            },
            {
                heading:"Wordpress Developer",
                year: "2015-2017 ",
                description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
            },
            {
                heading:"UI/UX Designer",
                year: "2018-2020",
                description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
            },

        ]
    }

]

const About = () => {

    const tabs = ["about me", "skills", "experience"];
    

    //set current tab..
    const[currentTab, setCurrentTab] = useState(tabs[0]);
    //set current tab data..
    const[currentTabData, setCurrentTabData] = useState(tabsData[0]);
    //set highlighted card..
    const[highLightedTab, setHighLightedTab] = useState(tabsData[0].tag);
    //function for setting data according to clicked tab
    function setCard(value){
        //set clicked tab
        setCurrentTab(value);
        const result = tabsData.filter((obj) => obj.tag === value);
        console.log(result);
        setCurrentTabData(result[0]);

    }

  return (
    <div id='about' className='relative w-full bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]'>
        <div className=' relative w-10/12 mx-auto py-16 flex flex-col gap-20 md:flex-row md:gap-12'>
            {/* Left part */}
            <div className='relative w-full md:w-1/2'>
                <img
                    src={userImage}
                    alt='userImage'
                    className='shadow-xl rounded-md'
                />
                <div className='bg-white flex items-center  absolute -bottom-10 left-[50%] 
                -translate-x-[50%] text-purple-700 px-4 py-2 md:px-6 md:py-3 max-w-72 z-50 text-center rounded-[4px] shadow-2xl drop-shadow-2xl shadow-white '
                >
                    <a target='_blank' href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaFacebook
                            fontSize={24}
                        />
                    </a>
                    <a target='_blank' href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaInstagram
                            fontSize={24}
                            className=''
                        />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/suraj0227/' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaLinkedin
                            fontSize={24}
                            className=''
                        />
                    </a>
                    <a target='_blank' href='https://github.com/suraj-prajapati07' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaGithub
                            fontSize={24}
                            className=''
                        />
                    </a>
                    <a target='_blank' href='#' className='px-2 py-3 md:px-3 md:py-4 hover:bg-purple-600 hover:text-white transition-all duration-200 rounded-md'>
                        <FaBehance
                            fontSize={24}
                            className=''
                        />
                    </a>
                </div>
            </div>
            {/* Right part */}
            <div className='w-full md:w-1/2 flex flex-col '>
                <div className='flex flex-row space-x-5'>
                    {
                        tabs.map((tab, index) => {
                            return(
                                <button
                                    onClick={() => setCard(tab)}
                                    key={index}
                                    className={`md:px-3 md:py-1 px-2 py-[4px] uppercase text-sm font-medium rounded-md 
                                        ${tab === currentTab ? "bg-purple-700 text-white" :
                                            "bg-white text-slate-500"
                                        }`}
                                >
                                    {tab}
                                </button>
                            )
                        })
                    }
                </div>
                {/* Tab Data */}
                <div className='mt-8'>
                    {
                        currentTabData.tag === "about me" ? (
                            <div className='flex flex-col gap-y-6'>
                                <h2 className='text-3xl md:text-4xl font-bold capitalize'>
                                    {currentTabData.heading}
                                </h2>
                                <p className='opacity-60 font-medium text-justify md:w-[80%] leading-6'>
                                    {currentTabData.description}
                                </p>
                                <h3 className='text-xl md:text-2xl font-semibold'>
                                    {currentTabData.subHeading}
                                </h3>
                                <p className='opacity-60 font-medium text-justify md:w-[80%] leading-6'>
                                    {currentTabData.subDescription}
                                </p>
                                {/* btn group */}
                                <div className='flex flex-row items-center space-x-8 mt-6 md:mt-12'>
                                    <Link
                                        to='project'
                                        smooth={true}
                                        duration={500}
                                        className='text-sm md:text-[17px] px-4 md:px-6 py-2 md:py-3 bg-[#9929fb] rounded-md text-white font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 cursor-pointer'
                                    >
                                        My Projects
                                    </Link>
                                    <a target='_blank' href='https://drive.google.com/file/d/1UcUCR_odhmVjXYt6Zci6R0VSz1jgkzzM/view'
                                        className='font-bold px-4 md:px-6 py-2 md:py-3 border bg-white rounded-md flex items-center gap-2 hover:text-purple-500 hover:border-purple-500 transition-all duration-200 text-sm md:text-[17px]'
                                    >
                                        <FaDownload/>
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        ): currentTabData.tag === "skills" ? (
                            <div className='flex flex-col gap-y-6'>
                                <h2 className='text-3xl md:text-4xl font-bold capitalize'>
                                    {currentTabData.heading}
                                </h2>
                                <p className='opacity-60 font-medium text-justify md:w-[80%] leading-6'>
                                    {currentTabData.description}
                                </p>
                                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    {
                                        currentTabData?.skills?.map((skill, index) => {
                                            return(
                                                <div
                                                    key={index}
                                                    className='flex flex-col'  
                                                >
                                                    <p className='font-semibold text-gray-800 text-[17px]'>
                                                        {skill.name}
                                                    </p>

                                                    {/* Progress-bar */}
                                                    <div className='relative w-full'>
                                                        <div className='h-3 md:w-64 bg-gray-200 rounded-full overflow-hidden shadow text-end flex items-center text-sm '>
                                                            <div 
                                                                className='bg-purple-500 h-3 text-slate-700 
                                                                font-semibold text-sm transition-all duration-200'
                                                                style={{width: `${skill.percent}`}}
                                                            >   
                                                            </div>
                                                            
                                                        </div>
                                                        <span 
                                                                className="absolute -top-[3px] text-sm -translate-x-9 text-slate-950"
                                                                style={{left:skill.percent}}
                                                        >
                                                                {skill.percent}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) :(
                            false &&
                            //default experience..
                            <div className='flex flex-col gap-y-6'>
                                {
                                    currentTabData.data?.map((ele, index) => {
                                        return(
                                            <div 
                                                key={index}
                                                className='flex flex-col gap-y-1'
                                            >
                                                <h3 className='text-xl font-semibold'>
                                                    {ele.heading}
                                                </h3>
                                                <div className='flex items-center text-sm space-x-2'>
                                                    <span className='text-purple-500 font-semibold flex items-center gap-1'>
                                                        {ele.year}
                                                        <FaLocationDot/>
                                                    </span>
                                                    <p className='opacity-40 font-bold'>Google Inc.</p>
                                                </div>
                                                <p className='opacity-60 font-medium text-justify md:w-[80%] leading-6'>
                                                    {ele.description}
                                                </p>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) 
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About