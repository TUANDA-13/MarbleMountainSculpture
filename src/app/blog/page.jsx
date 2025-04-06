import Image from 'next/image';

const Blog = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/img/blog.png"
          alt="Blog Image"
          height={665}
          width={1920}
          className="w-full h-[665px] object-cover"
        />
        <div className="absolute w-full h-full bg-black top-0 opacity-40" />
        <p className="whitespace-pre-line absolute text-white text-center text-[40px] font-semibold">
          {'The Power of Search Engine Marketing:\nBoost Online Visibility & Drive Results'}
        </p>
      </div>
      <div className="container pl-20 flex gap-8 mt-28">
        <div className="flex-1">123</div>
        <div className="w-[390px] p-[2px] gradient rounded-sm">
          <div className='bg-white p-[30px] rounded-sm'>123 </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
