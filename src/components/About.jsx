import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, icon }) => {
  return (
    <Tilt className=" xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75)}
      className=' w-full bg-warna3 p-[1px] rounded-[20px] shadow-card'>
        <div option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        
        className=' bg-tertiary rounded-[20px] py-1 px-1 min-h-[300px] flex justify-evenly flex-col items-center'
        >
          
    
          <img src={icon} className=' object-contain rounded-2xl' />
          
        </div>
      </motion.div>
      
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.3,1)}
    className=" leading-[30px] text-secondary mt-4 max-w-3xl text-[14px]"
    >
      Hello, I am currently studying undergraduate at Universitas Mercu Buana Yogyakarta and I have knowledge and experience in the field of web development and databases. During my course in college, I've learned about basic concepts and technologies related to web development, including HTML, CSS, JavaScript, as well as frameworks like React and Vue,have a basic understanding of database management, including database design and modeling, the use of SQL to manipulate and query data, and the use of database management systems such as MySQL.
      
    </motion.p>
    <div className=' mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index}{...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper (About, "about");