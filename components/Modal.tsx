// components/Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }: any) => {
  if (!show) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <div className='mb-4'>{children}</div>
        <button 
          onClick={onClose} 
          className='px-4 py-2 bg-blue-500 text-white rounded-md'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
