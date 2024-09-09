import { useEffect, useState } from 'react';
import { technologies } from '../constants';
import { StarWrapper } from '../hoc';

const Tech = () => {
  const [shuffledTechnologies, setShuffledTechnologies] = useState([]);

  useEffect(() => {
    const shuffleArray = (array, multiplier) => {
      for (let i = multiplier - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setShuffledTechnologies(shuffleArray([...technologies], 15));
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
          {technologies.map((tech) => {
            for (let i = 0; i > 20; i++) {
              const j = Math.floor(Math.random() * (i + 1));
              [technologies[i], technologies[j]] = [
                technologies[j],
                technologies[i],
              ];
            }

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
