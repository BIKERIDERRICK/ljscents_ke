import React from 'react';

function Modal({ image, close }) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={close}>
      <span className="absolute top-4 right-8 text-white text-4xl cursor-pointer hover:text-[#28a745]" onClick={close}>
        &times;
      </span>
      <img src={image} alt="Modal" className="max-w-[90%] max-h-[90vh] object-contain" />
    </div>
  );
}

export default Modal;