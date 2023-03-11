import { VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from '../hoc'

import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const AchievementCard=({experience})=>{
  return (
      <VerticalTimelineElement

        
        contentStyle={{background:'#fffff',color:'#fff'}}
        contentArrowStyle={{borderRight:'18px solid #fffff'}}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div>
          <img src={experience.icon} className="w-[100%] h-[100%] object-contain" />
        </div>
      }
      >
       
    <span class="relative text-[#d81368]">#Hackathon</span>

        <h2 className="vertical-timeline-element-title text-[#000000]">{experience.title}</h2>
        <div>
          <p className='text-[#63615c] text-justify'>{experience.points}</p>
            
        </div>
        <br/>
        <hr  className='w-[80%] text-[#000000]' />
      </VerticalTimelineElement>
  ) 
}


const Achievement = () => {
  return ( 
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className="text-[#000000] italic">&lt;&gt; Performance &lt; / &gt;</p>
        
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
    <h2 class="relative text-white text-[50px]">Achievement</h2>
  </span>


    </motion.div>
    <div  className='mt-20 flex flex-col'>
      <VerticalTimeline layout='1-column-right'>
        {experiences.map((exp,index)=>(
          <AchievementCard ket={index} experience={exp}/>
        ))
        
        }
      </VerticalTimeline>
    </div>
    
    </>
  )
}

export default SectionWrapper(Achievement,'Achievement');