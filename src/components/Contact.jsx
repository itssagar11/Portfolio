import React from 'react'
import { SectionWrapper } from '../hoc'
import {motion} from 'framer-motion';
import { fadeIn ,textVariant} from '../utils/motion';
import { styles } from '../styles';


const contact = () => {
  return (
    <>
      <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}> Interested ?</p>
        <h2 className={styles.sectionHeadText}> Get In touch !</h2>
    </motion.div>
    <div className='flex flex-wrap mt-10  gap-7'>
    <motion.div
      variants={fadeIn("","",0.25,1)}
      className='bg-[#EEA1BE]  sm:w-[400px]  px-5 py-5 w-full'
>
        <h3 className='text-[20px] text-black'>  Write me to  <b><a href="mailto:itssagar11@gmail.com" className='text-'>itssagar11@gmail.com</a></b> </h3>
        
        <h3 className='text-[20px] text-black'>  Connect with me on <b><a href="https://www.linkedin.com/in/sagar-bisht-337027200/" className='text-'>LinkedIn</a></b> </h3>
        <h3 className='text-[20px] text-black'>  Give me Star on <b><a href="https://github.com/itssagar11" className='text-'>Github</a> </b></h3>
        <p  className='mt-5 text-black'> 

        </p>
    </motion.div>

    <motion.div
      variants={fadeIn("","",0.25,1)}
      className='  sm:w-[650px]'
    >
        <h3 className='text-[20px] '> I'm actively seeking new projects and opportunities to apply my skills in web development and backend development.My focus on security ensures that your website or application is protected against cyber threats. </h3>

        <p  className='mt-5 text-black'> 

        </p>
    </motion.div>

    </div>
   
    </>
  )
}

export default  SectionWrapper(contact,'contact');