import React from 'react';
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';


import { styles } from "../styles";
import { services} from '../constants';
 import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

 const ServiceCard=({index,title,icon})=>{
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
            variants={fadeIn("right","spring",0.5*index,0.1)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                options={{
                    max:45,
                    scale:1,
                    speed:450,
                }}
                className="bg-tertiary rounded-[20px] py-5 py-12 min-h-[280px] flex justyfy-evenly items-center flex-col"
                >
                    <img src={icon} alt={title}
                    className="w-16 h-16 object-contain" />
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

                </div>

            </motion.div>
        </Tilt>
    )
 }
const About = () => {
  return (
   <>
    <motion.div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    variants={textVariant()}
    >
        <p className={styles.sectionSubText}> Me, My, Myself</p>
        <h2 className={styles.sectionHeadText}> About</h2>
    </motion.div>

    <div className=' flex flex-wrap mt-10'>
    <motion.p
     variants={fadeIn("","",0,1,1)} 
     className="w-[800px] text-[20px]"
    >
In this example, we're using the motion.div component provided by Framer Motion to wrap our h1 element. We're also using the initial and animate props to define the starting and ending states of our animation. Finally, we're using the transition prop to define the duration of the animation
    </motion.p>
   <div>
    here will be code x
   </div>
    </div>
    <div className='mt-10 flex flex-wrap gap-8  justify-center md:justify-start ' >
        {
            services.map((service,index)=>(

                <ServiceCard key={service.title} index={index} {...service}/>
            ))
        }
   </div>
   </>
  )
}

export default SectionWrapper(About,"about")