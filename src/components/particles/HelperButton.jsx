import { AiFillSetting, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { TbKeyboard } from 'react-icons/tb';

export default function HelperButton({ onClick, onClickSocmed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleClick = () => {
    setShouldAnimate(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setShouldAnimate(false);
    }, 500); // Durasi total animasi sesuai konfigurasi
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className={`fixed bottom-20 drop-shadow-lg right-5 py-4 px-2 transform transition-transform origin-bottom-right from-amber-600 via-yellow-300 to-amber-800 bg-gradient-to-l rounded-lg ${
          isOpen ? 'scale-100' : 'scale-0'
        }`}>
        <div className="w-full min-w-32 h-full text-center">
          <ul className=" flex flex-col gap-2">
            <li
              onClick={onClick}
              className="cursor-pointer from-amber-600 via-amber-300 to-amber-800 bg-gradient-to-l  hover:via-amber-400 hover:from-amber-700 hover:to-amber-900 py-2 px-4 rounded-md">
              <p>Technologies</p>
            </li>
            <li
              onClick={onClickSocmed}
              className="cursor-pointer from-amber-600 via-amber-300 to-amber-800 bg-gradient-to-l  hover:via-amber-400 hover:from-amber-700 hover:to-amber-900 p-2 px-4 rounded-md">
              <p>Social Media</p>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="from-amber-600 via-yellow-300 to-amber-800 bg-gradient-to-l text-white font-bold p-4 rounded-full">
        <i
          className={`text-2xl transform transition-transform ${
            shouldAnimate
              ? isOpen
                ? 'animate-spin-scale-down'
                : 'animate-scale-up-spin'
              : ''
          }`}>
          {isOpen ? (
            <AiOutlineClose
              className={
                shouldAnimate
                  ? isOpen
                    ? 'animate-spin-scale-down'
                    : 'animate-scale-up-spin'
                  : ''
              }
            />
          ) : (
            <AiFillSetting
              className={
                shouldAnimate
                  ? isOpen
                    ? 'animate-spin-scale-down'
                    : 'animate-scale-up-spin'
                  : ''
              }
            />
          )}
        </i>
      </button>
    </div>
  );
}
