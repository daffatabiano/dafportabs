import { StarWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certs } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const CertCards = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  cert,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="from-amber-600 via-yellow-300 to-amber-800 bg-gradient-to-l p-5 rounded-3xl xs:w-[320px] w-full">
    <div className="">
      <img src={cert} className="w-full h-[200px] object-contain" alt="" />

      <div className="mt-7 px-5 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="text-amber-900">@</span> {name}
          </p>
          <p className="mt-1 text-zinc-200 italic text-[12px]">
            {designation} with {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

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

      <div
        className={`-mt-20 pb-14 ${styles.paddingX} justify-center flex flex-wrap gap-7`}>
        {certs.map((cert, index) => (
          <CertCards key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(Certificate, 'certificate');
