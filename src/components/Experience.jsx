import { VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from '../hoc'

import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const ExperienceCard=({experience})=>{
  return (
      <VerticalTimelineElement
        contentStyle={{background:'#1d1836',color:'#fff'}}
        contentArrowStyle={{borderRight:'7px solid #232631'}}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div>
          <img src={experience.icon} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
      >

        <div>
          <h3 className='text-white text-[20px] font-bold'>  {experience.title}</h3>
          </div>
      </VerticalTimelineElement>
  ) 
}


const Experience = () => {
  return ( 
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}> Me, My, Myself</p>
        <h2 className={styles.sectionHeadText}> Achiveemmnt</h2>
  


    </motion.div>
    <div  className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((exp,index)=>(
          <ExperienceCard ket={index} experience={exp}/>
        ))
        
        }
      </VerticalTimeline>
    </div>
    
    </>
  )
}

export default SectionWrapper(Experience,'Experiences');