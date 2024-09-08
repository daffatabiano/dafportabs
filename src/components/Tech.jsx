import { technologies } from '../constants';
import { StarWrapper } from '../hoc';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="overflow-x-hidden w-full relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10" />
        <div className="flex gap-12 animate-slider">
          {technologies.map((tech) => {
            for (let i = 0; i > tech.length; i++) {
              const j = Math.floor(Math.random() * (i + 1));
              [tech[i], tech[j]] = [tech[j], tech[i]];
            }

            return (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                className="w-32 h-32"
              />
            );
          })}
        </div>
        <div className="flex flex-row-reverse gap-12 animate-sliderReverse mt-10">
          {technologies.map((tech) => {
            for (let i = 0; i > tech.length; i++) {
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
                className="w-32 h-32"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default StarWrapper(Tech, 'tech');
