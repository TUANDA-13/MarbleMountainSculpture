"use client"
import { CollapseItem } from '@/common/collapse/CollapseItem';
import { helpText } from '@/components/help/const';
import { useState } from 'react';

const HelpPage = () => {
  const [openId, setIsOpen] = useState('');
  return (
    <div className="mb-20">
      <div className="help relative overflow-hidden flex flex-col items-center justify-center bg-cover bg-center">
        <p className="whitespace-pre-line text-center text-6xl font-bold text-white py-[150px] leading-20">
          {'We are here to help,\ncheckout our Frequently Asked Questions'}
        </p>
        <div className="absolute w-[8000px] h-[8000px] gradient rounded-[50%] bottom-0 z-[-1]" />
      </div>
      <p className="text-center text-6xl font-bold mt-20 mb-16">FAQs</p>
      <div className="container">
        <div className="px-0 lg:px-32 flex flex-col gap-10">
          {helpText.map((item) => {
            return <CollapseItem key={item.id} isOpen={openId===item.id} item={item} onClick={()=> {
              setIsOpen(openId===item.id ? '' : item.id);
            }}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
