import {useState, useEffect} from 'react';
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';
import { services } from '../constants';

import { styles } from "../styles";
import { sagar } from '../assets';
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
const [text, setText] = useState('');

let i=0;
useEffect(() => {
    
    const timeoutId = setInterval(() => {
        setText(services[i].title);
    
        i=(i+1)% services.length
    }, 1600); // Change text after 2 seconds

    // return () => {
    //   clearTimeout(timeoutId); // Clear the timeout if component unmounts
    // };
    }, []);


return (
<>
<motion.div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
variants={textVariant()}
>
    <p className={styles.aboutSubText}> Me, My, Myself</p>
    <h2 className={styles.aboutHeadText}> About</h2>
</motion.div>

<div className=' flex flex-wrap mt-10'>
<motion.p
    variants={fadeIn("","",0,1,1)} 
    className="w-[700px] z-10 font-mono text-justify text-[20px] text-[#ffffff] decoration-7 text-bold"
>
I am an software developer with expertise in JavaScript, 
React, Node.js, and PHP. Over the course, I have worked
on a variety of projects ranging from small web applications to 
large solutions. I am proud of my ability to collaborate
closely with c team members to create efficient, scalable, and 
user-friendly solutions that solve real-world problems while keeping the UI and Security in mind. 
 I am currently pursuing a Bachelor's degree in Technology and hold a diploma in Computer Science and Technology..
</motion.p>
<motion.div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
variants={textVariant()}

>
<img src={sagar}  className='  relative  sm:w-[400px]  rotate-12 overflow-none' alt="Sagar Bisht"/>
</motion.div>
<div>

</div>
</div>
<div className='mt-10 flex flex-wrap gap-8  justify-center md:justify-start ' >
    <h1 className='text-[40px] font-serif'> Technology I work On <b  className='text-[#a8121e] decoration-2'> {text}</b>  </h1>
</div>
</>
)
}

export default SectionWrapper(About,"about")