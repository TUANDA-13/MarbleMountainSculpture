import Image from 'next/image';
import { FEATURES } from './const';
import { GradientLine } from '@/common/gradient-line/GradientLine';

export const Feature = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-bg">
      <div className="text-center text-black text-6xl font-bold">Features</div>
      <GradientLine className={"mb-[88px] mt-4"}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-black text-lg max-w-6xl px-4">
        {FEATURES.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white p-4 shadow-lg gradient">
              <Image src={feature.icon} alt={feature.title} width={feature.width} height={50} />
            </div>
            <h2 className="text-base font-semibold mt-[54px] mb-[26px]">{feature.title}</h2>
            <p className="text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
