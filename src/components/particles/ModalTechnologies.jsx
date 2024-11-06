import { technologies } from '../../constants';
import ModalWrapper from './ModalWrapper';

export default function ModalTechnologies({ isOpen, onClose }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <h1 className="text-center font-bold text-2xl tracking-wider text-slate-800">
        Skill Detail Informations
      </h1>
      <div className="mt-4">
        <h1 className="font-semibold text-xl text-center text-amber-800">
          Frontend Technologies
        </h1>
        <ul className="text-lg text-slate-800 mt-4 justify-center flex flex-row gap-4 flex-wrap">
          {technologies
            .filter((tech) => tech.divisi === 'Frontend')
            .map((tech) => (
              <li key={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 hover:scale-110 transition-all duration-100"
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-2">
        <h1 className="font-semibold text-xl text-center text-amber-800">
          Backend Technologies
        </h1>
        <ul className="text-lg text-slate-800 mt-4 justify-center flex flex-row gap-4 flex-wrap">
          {technologies
            .filter((tech) => tech.divisi === 'Backend')
            .map((tech) => (
              <li key={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 hover:scale-110 transition-all duration-100"
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-2">
        <h1 className="font-semibold text-xl text-center text-amber-800">
          Tools and Others
        </h1>
        <ul className="text-lg text-slate-800 mt-4 justify-center flex flex-row gap-4 flex-wrap">
          {technologies
            .filter((tech) => tech.divisi === 'others')
            .map((tech) => (
              <li key={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 hover:scale-110 transition-all duration-100"
                />
              </li>
            ))}
        </ul>
      </div>
    </ModalWrapper>
  );
}
