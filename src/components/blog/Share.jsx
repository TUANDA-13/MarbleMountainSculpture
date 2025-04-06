import Image from 'next/image';

export const BlogShare = () => {
  return (
    <div className="flex flex-col margin-left-[-60px] sticky top-[120px]">
      <div className="flex flex-col items-center gap-4">
        <p className="text-black text-sm font-medium">Share</p>
        <div className="flex gap-2 flex-col items-center">
          <div className="w-12 h-12 rounded-full gradient flex items-center justify-center shadow-md">
            <Image  
              src={'svg/facebook.svg'}
              width={22}
              height={18}
              alt="facebook"
              className="text-white invert"
            />
          </div>
          <div className="w-12 h-12 rounded-full gradient flex items-center justify-center shadow-md text-white">
            <img src={'svg/twitter.svg'} alt="facebook" className="text-white invert" />
          </div>
          <div className="w-12 h-12 rounded-full gradient flex items-center justify-center shadow-md text-white">
            <Image
              src={'svg/tiktok.svg'}
              className="text-white invert"
              width={22}
              height={18}
              alt="facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
