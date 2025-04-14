'use client';

import { useRef, useState } from 'react';

export default function ZoomImage() {
  const imageRef = useRef(null);
  const [transformOrigin, setTransformOrigin] = useState('center');

  const handleMouseMove = (e) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[400px] h-[300px] overflow-hidden rounded border border-gray-300 shadow-lg"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTransformOrigin('center')}
      >
        <img
          ref={imageRef}
          src="/img/default.png"
          alt="Zoomable"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-150"
          style={{
            transformOrigin: transformOrigin,
          }}
        />
      </div>
    </div>
  );
}
