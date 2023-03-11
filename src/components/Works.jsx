import tilt from "react-tilt";
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import Tilt from "react-tilt";


const  ProjectCard=({index,name,description,tags,image,source_code_link})=>{
        return (

          <motion.div
          variants={fadeIn("up","spring",index*0.5,1)}
          
          >
            <Tilt
            option={
              {
                max:45,
                scale:1,
                speed:450
              }
            }
            className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full "
           
            >
              <div className="relative w-full h-[230px]">
                <img src={image}
                    alt={name}
                    className='w-full h-full object-cover rounded-2xl'
                    />

                    <div
                    className="absolute inset-0 flex justify-end card-img_hover"
                    >
                      <div onClick={()=>window.open(source_code_link,"_blank")}
                            className="black-gradient w-10 h-10  rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img
                          src={github}
                          alt='github'
                          className="w-1/2 h-1/2 object-contain" />

                      </div>
                    </div>

              </div>
              <div className="mt-5">

              <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
                <h1>  {name}</h1>
                <p className="text-justify text-[14px]">{description}</p>

              </div>
              
              </Tilt>
          </motion.div>
        )
}


const Project = () => {
  return (
    <> 
       <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}> Me Work</p>
        <h2 className={styles.sectionHeadText}> Projects</h2>
    </motion.div>

    <div className="w-full flex ">

      <motion.p   variants={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      
      >

       The projects listed below serve as tangible evidence of my skills and experience. They demonstrate my ability to tackle real-world problems, utilize a variety of technologies, and manage projects with efficiency. 
       Each project is accompanied by a brief description and links to code repositories and live demos, providing insight into my problem-solving approach and proficiency in different technologies. Overall, these projects
        reflect my competence and dedication as a developer. For more checkout my <a href="https://github.com/itssagar11">Github.</a>
        </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">

      {projects.map((project,index)=>(
        <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
        />

      ))}
    </div>
    
    
    </>
  )
}

export default SectionWrapper(Project,'work');