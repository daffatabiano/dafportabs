import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-amber-800" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-amber-800 to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} flex flex-col`}>
            Hi, I&apos;m{' '}
            <span className="from-amber-600 via-yellow-400 to-yellow-800 bg-gradient-to-r bg-clip-text text-transparent relative font-mono sm:text-[55px] xs:text-[45px] uppercase tracking-widest lg:text-[90px] w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-amber-900 text-[25px]">
              Daffa Tabiano
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-stone-900`}>
            Design and Develop website specialist,{' '}
            <br className="sm:block hidden" />
            with User Experiences and Interfaces
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-amber-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-amber-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
