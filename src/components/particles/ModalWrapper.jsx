import { IoIosCloseCircle } from 'react-icons/io';

export default function ModalWrapper({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const closeOverlayClick = (e) => {
    if (e.target === e.currentTarget) return onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-slate-900/50 p-4 flex justify-center items-center "
      onClick={closeOverlayClick}>
      <div className="w-full md:w-1/3 relative p-4 bg-white rounded drop-shadow-lg animate-scale-up-center ">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-2 text-red-600">
          <i className="text-3xl">
            <IoIosCloseCircle />
          </i>
        </button>
        {children}
      </div>
    </div>
  );
}
