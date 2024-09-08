import { StarWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Certificate = () => {
  return (
    <div className={`mt-12 bg-zinc-100 rounded-[20px]`}>
      <div
        className={`bg-zinc-200 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What i achieved</p>
          <h2 className={styles.sectionHeadText}>Certificate.</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default StarWrapper(Certificate, 'certificate');
