import { useEffect, useState } from 'react';
import { technologies } from '../constants';
import { StarWrapper } from '../hoc';

const Tech = () => {
  const [shuffledTechnologies, setShuffledTechnologies] = useState([]);
  const [shuffledTechnologies2, setShuffledTechnologies2] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = 0; i < technologies.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const shuffleArray2 = (array) => {
      for (let i = technologies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[j], array[i]] = [array[i], array[j]];
      }
      return array;
    };

    setShuffledTechnologies2(shuffleArray2([...technologies]));

    setShuffledTechnologies(shuffleArray([...technologies]));
  }, [technologies]);

  console.log(shuffledTechnologies);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="overflow-x-hidden w-full relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10" />
        <div className="flex gap-6 lg:gap-12 animate-slider">
          {shuffledTechnologies.map((tech) => {
            return (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
            );
          })}
        </div>
        <div className="flex flex-row-reverse lg:gap-12 gap-6 lg:mt-10 animate-sliderReverse mt-5 ">
          {shuffledTechnologies2.map((tech) => {
            return (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default StarWrapper(Tech, 'tech');
