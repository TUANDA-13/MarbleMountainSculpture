'use client';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import dynamic from 'next/dynamic';
// import ParticlesBg from 'particles-bg';
import { useEffect, useState } from 'react';
const ParticlesBg = dynamic(() => import('particles-bg'), {
  ssr: false,
});

const Intro = () => {
  const textArray = ['Fashionable.', 'Classic.', 'Elegant.', 'Uplifting.'];
  const [textState, setTextState] = useState(textArray[0]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

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

  if (!isReady) return null;

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
            <div className="flex justify-center items-center mt-4 ">
              <div className="gradient w-60 rounded-4xl text-2xl py-2 flex flex-row gap-2 items-center justify-center cursor-pointer hover:[&>img]:margin-left-2 transition-all duration-300 ease-in-out">
                <p>Product list</p>
                <img src="/svg/arrow-right.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
