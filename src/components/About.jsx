import { StarWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { services } from '../constants';

const SkillCard = (prop) => {
  const { index, title, icon } = prop;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full bg-gradient-to-b from-amber-800 to-amber-400 p-[1px] rounded-[20px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="from-amber-600 via-yellow-300 to-amber-800 bg-gradient-to-l rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="from-stone-600 via-stone-100 to-stone-800 bg-gradient-to-r bg-clip-text text-transparent text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Summary.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-stone-900 text-[17px] max-w-3xl leading-[30px]">
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js, Redux ,
        Node.js, and Three.js. I&apos;m a quick learner and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let&apos;s work together to bring your
        ideas to life!
      </motion.p>

      <div className="mt-20 justify-center flex flex-wrap gap-10">
        {services.map((service, index) => (
          <SkillCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default StarWrapper(About, 'about');
