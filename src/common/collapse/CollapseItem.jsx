'use client';

import { cn } from '@/utils/tailwind-merge.until';
import dynamic from 'next/dynamic';
const Collapse = dynamic(() => import('react-collapse').then((mod) => mod.Collapse), {
  ssr: false,
});
export const CollapseItem = ({ item, isOpen, onClick = () => {} }) => {
  return (
    <div className="flex flex-col gap-1 border-t pt-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center">
        <h3 className={cn(isOpen && 'gradient-text', 'font-bold cursor-pointer flex-1')}>
          {item.title}
        </h3>
        <div className={cn('gradient w-10 h-10 rounded-[50%] flex items-center justify-center transition-all ease-in-out duration-300', isOpen && 'rotate-180')}>
          <img src="/svg/right.svg" className="" />
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <p className="text-justify">{item.content}</p>
      </Collapse>
    </div>
  );
};
