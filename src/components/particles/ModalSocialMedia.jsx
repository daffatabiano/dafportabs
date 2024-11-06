import { github2, instagram, linkedin } from '../../assets';
import ModalWrapper from './ModalWrapper';

export default function ModalSocialMedia({ isOpen, onClose }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <h1 className="text-center font-bold text-2xl tracking-wider text-slate-800">
        Social Media
      </h1>

      <div className="mt-4">
        <ul className="text-lg text-slate-800 justify-center flex flex-row gap-6">
          <li
            onClick={() =>
              window.open('https://linkedin.com/in/daffatabiano', '_blank')
            }
            className="flex flex-col text-center items-center justify-center cursor-pointer">
            <img src={linkedin} alt="" className="w-14 h-14  hover:scale-110" />
            <p className="text-sm">daffatabiano</p>
          </li>
          <li
            onClick={() =>
              window.open('https://github.com/daffatabiano', '_blank')
            }
            className="flex flex-col text-center items-center justify-center cursor-pointer">
            <img src={github2} alt="" className="w-14 h-14  hover:scale-110" />
            <p className="text-sm">daffatabiano</p>
          </li>
          <li
            onClick={() =>
              window.open('https://instagram.com/daffatabianoo', '_blank')
            }
            className="flex flex-col text-center items-center justify-center cursor-pointer">
            <img
              src={instagram}
              alt=""
              className="w-14 h-14 object-contain hover:scale-110"
            />
            <p className="text-sm">@daffatabianoo</p>
          </li>
        </ul>
      </div>
    </ModalWrapper>
  );
}
