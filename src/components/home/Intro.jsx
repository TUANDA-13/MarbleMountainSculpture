'use client';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import ParticlesBg from 'particles-bg';
import { useEffect, useState } from 'react';

const Intro = () => {
  const textArray = ['Fashionable.', 'Classic.', 'Elegant.', 'Uplifting.'];
  const [textState, setTextState] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextState((prevText) => {
        const currentIndex = textArray.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval); // Fix: Wrap clearInterval in a cleanup function
  }, [textArray]); // Fix: Add textArray as a dependency

  return (
    <div className="[&>canvas]:bg-[#9D9C9C] h-[700px] overflow-hidden relative">
      <ParticlesBg
        type="circle"
        bg={{ zIndex: 0, position: 'absolute', top: 0 }}
        config={{ color: '#F1F1F1' }}
      />
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="absolute mx-auto text-white text-[60px]">
          <p className="leading-16 text-center font-bold">The essence of sculpture</p>
          <p className="leading-16 text-center font-bold">elevate your space</p>
          <div className="leading-16 text-center text-4xl whitespace-nowrap">
            Bring the beauty of{' '}
            <div className="animate-typing inline-flex items-center overflow-hidden max-w-min">
              <GradientTypo
                text={textState + '   '}
                className={'text-left font-semibold py-1 leading-9'}
              />
            </div>
            <p className="absolute inline-block w-1 h-[40px] bg-primary animate-caret mt-2">
              {'    '}
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Intro;
