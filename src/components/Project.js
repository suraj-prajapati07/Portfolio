import React from 'react'
//project image
import project1 from "../assets/projects/Proj1.png";
import project2 from "../assets/projects/Proj2.png";
import project3 from "../assets/projects/Proj3.png";
import project4 from "../assets/projects/Proj4.png";

//project tech stack
import html from "../assets/stack/HTML.png";
import css from "../assets/stack/CSS.png";
import tailwindCSS from "../assets/stack/Tailwind.png";
import javaScript from "../assets/stack/Javascript.svg";
import react from "../assets/stack/React.png";
import redux from "../assets/stack/Redux.svg";
import node from "../assets/stack/NodeJs.svg";
import express from "../assets/stack/Express.png"
import next from "../assets/stack/NextJsCircle.png";
import mongoDB from "../assets/stack/MongoDB.svg";

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-scroll';

const projectData = [
  {
    id: 1,
    image: project1,
    techStack: [html, tailwindCSS, react, redux, node, express, mongoDB],
    heading: "StudyNotion-EdTech",
    description: "A full-featured EdTech platform designed for course creation, learning management, secure user authentication, and online payments.",
    githubLink: "https://github.com/suraj-prajapati07/StudyNotion",
    liveLink: "https://study-notion-nine-roan.vercel.app",
  },
  {
    id: 2,
    image: project2,
    techStack: [html, tailwindCSS, react, redux],
    heading: "Shopping App",
    description: "A fully functional shopping application where users can add products to the cart, remove them, and view a real-time cart summary.",
    githubLink: "https://github.com/suraj-prajapati07/Shopping-App",
    liveLink: "https://shopping-app-indol-two.vercel.app",
  },
  {
    id: 3,
    image: project3,
    techStack: [html, css, tailwindCSS, javaScript],
    heading: "Password Generator",
    description: "A secure web application that instantly generates strong, random passwords with customizable length and complexity.",
    githubLink: "https://github.com/suraj-prajapati07/Password-Generator",
    liveLink: "https://password-generator-ecru.vercel.app",
  },
  {
    id: 4,
    image: project4,
    techStack: [html, css, tailwindCSS],
    heading: "Razorpay UI-Clone",
    description: "Frontend Razorpay clone showcasing responsive layout and Tailwind CSS styling.",
    githubLink: "https://github.com/suraj-prajapati07/RazorpayUI-Clone",
    liveLink: "https://razorpay-ui-clone-murex.vercel.app",
  },

]

const Project = () => {
  return (
    <div id='project' className='w-full '>
      <div className='w-10/12 mx-auto py-16'>
        <p className='text-xl md:text-2xl text-gray-900 uppercase font-bold text-center mx-auto'>
            Project
        </p>
        <div className='h-1 w-16 bg-purple-500 rounded-full mx-auto my-4'></div>
        <p className='md:text-xl font-semibold text-center mx-auto text-gray-800 lg:w-[50%]'>
            Here’s a selection of my recent projects, showcasing my skills in building responsive web applications
        </p>

        {/* Project Card container */}
        <div className='mt-12 relative flex flex-col gap-12 md:gap-[120px]'>
          {
            projectData.map((project, index) => {
              return(
                //project card
                <div
                  key={project.id}
                  className={`w-full md:w-[90%] relative group shadow-[0px_0px_40px_#1f1f1f] project-card
                    ${project.id % 2 === 0 ? "sm:ml-[120px]" : ""}`}
                >
                  <img
                    src={project.image}
                    alt={project.heading}
                    className={`w-full h-full object-contain `}
                  />

                  {/* Overlap elements */}
                  <div className="text-gray-50 z-50 absolute md:bottom-4 lg:bottom-8 bottom-2 flex flex-col gap-2 sm:gap-4 lg:gap-6 p-2 sm:p-[2rem] sm:left-[10%]">
                    {/* icon */}
                    <div className='w-full flex flex-row items-center flex-wrap gap-2 sm:gap-3'>
                      {
                        project.techStack?.map((icon, index) => {
                          return(
                            <img
                              key={index}
                              src={icon}
                              alt='techIcon'
                              className='w-6 md:w-12'
                            />
                          )
                        })
                      }
                    </div>
                    {/* heading */}
                      <h2 className='text-[17px] sm:text-3xl lg:text-6xl font-bold md:leading-[3rem]'>
                        {project.heading}
                      </h2>
                      {/* description */}
                      <p className=' sm:w-[70%] italic text-sm md:text-[17px]'>
                        {project.description}
                      </p>
                      {/* btn and link group */}
                      <div className='flex flex-row items-center gap-4'>
                        <button
                          className='z-10 relative read-btn text-sm md:text-[17px] px-2 md:px-5 py-1 md:py-3 bg-[#9929fb] font-semibold border-2 border-purple-600 hover:text-black'
                        >
                          Read More
                        </button>
                        <a href={project.githubLink} target='_blank'>
                          <FaGithub  className=' hover:text-purple-600 md:text-3xl text-xl
                          transition-all duration-300'/>
                        </a>
                        <a href={project.liveLink} target='_blank'>
                          <FaLink  className=' hover:text-purple-600 md:text-3xl text-xl 
                          transition-all duration-300'/>
                        </a>
                      </div>
                  </div>
                  {/* project number */}
                  <div className={`absolute z-50 text-[50px] md:text-[100px] lg:text-[200px] text-white font-bold
                  opacity-0 group-hover:opacity-100
                    ${project.id % 2 === 0 ? "md:-top-16 md:-left-2 -top-4 left-0" : 
                    "md:-top-16 md:-right-4 -top-4 -right-2"}`}>
                    0{project.id}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Project Idea */}
      <div className='bg-gradient-to-r from-[#0f172a]  to-[#334155] w-full'>
        <div className='py-24 max-w-2xl px-2 mx-auto flex flex-col items-center gap-8'>
          <p className='text-white text-center md:font-semibold text-2xl sm:text-3xl md:text-5xl'>
            Do you have a Project Idea? Let's discuss your project!
          </p>
          <p class="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center">
            I'm always open to discussing  new projects and creative ideas. Let's connect and build something amazing together.
          </p>
          <Link 
            to="contact"
            smooth={true}
            duration={500}
            className='px-4 py-2 bg-[#9929fb] rounded-sm text-white font-bold md:text-[20px] flex items-center gap-2 cursor-pointer hover:scale-105 hover:bg-purple-800 transition-all duration-500'
          >
            Let's Work Together
            <FaArrowCircleRight/>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Project