import React from 'react';
import Image from 'next/image';

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-[8px] p-6 z-10 w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <Image src="/svg/close-icon.svg" alt="close" width={30} height={30} />
          </button>
        </div>

        {/* Content passed as children */}
        {children}
      </div>
    </div>
  );
}
