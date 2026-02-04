import React, { useState } from 'react'
import { motion } from "framer-motion";
// import { LuRotate3D } from "react-icons/lu";
import { FaRotate } from "react-icons/fa6";

// import { GiThink } from "react-icons/gi";
// import { GoDiscussionClosed } from "react-icons/go";
// import { HiLightBulb } from "react-icons/hi";
// import { TbDeviceImacCode } from "react-icons/tb";
// import { DiResponsive } from "react-icons/di";
// import { GrUserSettings } from "react-icons/gr";
import graphicDesign from "../assets/services/graphic-design_18062375.png";
import support from "../assets/services/technical-support_4230715.png";
import webIdea from "../assets/services/idea_1781638.png";
import webDevelopment from "../assets/services/coding_2704022.png";
import responsiveDesign from "../assets/services/responsive_2703934.png"
import creativeDesign from "../assets/services/idea_12700608.png";


const serviceData = [
  {
    id: 1,
    image: graphicDesign,
    heading: "Graphic Design",
    description: "I create visually appealing graphics that communicate your brand message effectively. From logos to marketing materials, every design is crafted to leave a lasting impression.",
  },
  {
    id: 2,
    image: support,
    heading: "Support",
    description: "I provide reliable technical support to ensure your applications and websites run smoothly. Quick troubleshooting and ongoing assistance keep your projects efficient and problem-free.",
  },
  {
    id: 3,
    image: webIdea,
    heading: "Web Idea",
    description: "I help transform concepts into actionable web solutions. By brainstorming and refining ideas, I ensure your vision is clear, innovative, and feasible for development.",
  },
  {
    id: 4,
    image: webDevelopment,
    heading: "Web Development",
    description: "I build dynamic and functional websites using modern technologies. My development process focuses on clean code, performance, and seamless user experience.",
  },
  {
    id: 5,
    image: responsiveDesign,
    heading: "Responsive Design",
    description: "I design websites that adapt flawlessly across all devices. Mobile, tablet, or desktop—users get a consistent, engaging experience everywhere.",
  },
  {
    id: 6,
    image: creativeDesign,
    heading: "Creative Design",
    description: "I bring creativity into every project, combining aesthetics with usability. Unique designs enhance brand identity and captivate your audience.",
  },
]

const Services = () => {
  const [isFliped, setIsFliped] = useState(null);


  return (
    <div className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-[#92c7cf] via-[#aad7d9] to-[#fbf9f1] w-full services'>
        <div className='w-10/12 mx-auto py-16'>
          <p className='text-xl md:text-2xl text-gray-900 uppercase font-bold text-center mx-auto'>
            Services
          </p>
          <div className='h-1 w-16 bg-purple-500 rounded-full mx-auto my-4'></div>
          <p className='md:text-xl font-semibold text-center mx-auto text-gray-800'>
            This is My Expertise, The Services I'll Provide My Clients
          </p>

          {/* Card  */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  className="h-64 [perspective:1000px] cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }} // animate only once when 20% visible
                >
                  {/* Flip Container */}
                  <div
                    className={`relative w-full h-full transition-transform duration-700
                      [transform-style:preserve-3d] md:hover:[transform:rotateY(150deg)]
                      ${isFliped === service.id? 
                      "[transform:rotateY(180deg)]": "[transform:rotateY(0deg)]"}`
                    }
                  >
                    {/* Front side */}
                    <div className="bg-white absolute inset-0 flex flex-col items-center justify-center gap-4 shadow-lg rounded-2xl border [backface-visibility:hidden]">
                      <img
                        src={service.image}
                        alt={service.heading}
                        width={86}
                        height={86}
                        className="bg-purple-300 p-4 rounded-xl"
                      />
                      <h2 className="text-xl font-semibold">{service.heading}</h2>
                    </div>

                    {/* Back side */}
                    <div className="bg-purple-500 text-white absolute inset-0 text-center flex items-center px-4 shadow-lg rounded-2xl border [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="font-medium leading-6 text-[17px]">
                        {service.description}
                      </p>
                    </div>

                    {/* rotate card for mobile view */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // prevents unwanted bubbling
                        setIsFliped(prev => prev === service.id? null : service.id)
                      }}
                      className={`md:hidden w-9 h-9 rounded-full bg-[#dfbdfd80] grid place-items-center absolute top-2 right-2 text-xl`}
                    >
                      <FaRotate/>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Services