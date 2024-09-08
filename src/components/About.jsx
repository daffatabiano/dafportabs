import { StarWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { motion } from "framer-motion"
import styles from "../styles"

const About = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Summary.</h2>
        </motion.div>
  
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-stone-900 text-[17px] max-w-3xl leading-[30px]'
        >
          I&apos;m a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Next.js, Redux , Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let&apos;s work together to bring your ideas to life!
        </motion.p>
  
      </>
    )
    
}
export default StarWrapper(About, 'about')