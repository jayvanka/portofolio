import { motion } from "framer-motion"
import { textVariant } from "../utils/motion";
import { styles } from "../styles"
import { MobilsCanvas } from "./canvas"



const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 justify-center`}>


<div>
  <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>Hi, I'am <span className=" blinking-text">Jay</span></h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  Explore my portfolio website <br className=" sm:block hidden" /> and discover my journey
  </p>
  </div>    
</div>
      
      <MobilsCanvas />
      <div className=" absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className=" w-[35px] h-[64px] border-4 rounded-3xl flex border-secondary justify-center items-start p-2">
            <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className=" w-3 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero