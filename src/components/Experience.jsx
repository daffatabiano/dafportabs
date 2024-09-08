import { StarWrapper } from "../hoc"
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Experience = () => {
    return(
        <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </motion.div>
  
      
      </>
    )
}

export default StarWrapper(Experience, 'experience');