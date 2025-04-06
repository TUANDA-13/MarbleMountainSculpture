import { BlogContent } from '@/components/blog/Content';
import { BlogShare } from '@/components/blog/Share';
import Image from 'next/image';

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title:
        'The Power of Search Engine Marketing Search Engine Marketing (SEM) is a powerful tool tha',
      description:
        "Search Engine Marketing (SEM) is a powerful tool that Search Engine Marketing (SEM) is a powerful tool tha can significantly enhance your online visibility and drive results. By leveraging paid search advertising, businesses can reach their target audience at the right time and place, ensuring maximum impact. SEM allows for precise targeting, enabling you to connect with potential customers actively searching for your products or services. With the right strategy, SEM can lead to increased website traffic, higher conversion rates, and ultimately, improved ROI. In today's competitive digital landscape, investing in SEM is essential for any business looking to thrive online.",
      img: '/img/blog.png',
      date: '2023-10-01',
    },
    {
      id: 2,
      title:
        'The Power of Search Engine Marketing Search Engine Marketing (SEM) is a powerful tool tha',
      description:
        "Search Engine Marketing (SEM) is a powerful tool that Search Engine Marketing (SEM) is a powerful tool tha can significantly enhance your online visibility and drive results. By leveraging paid search advertising, businesses can reach their target audience at the right time and place, ensuring maximum impact. SEM allows for precise targeting, enabling you to connect with potential customers actively searching for your products or services. With the right strategy, SEM can lead to increased website traffic, higher conversion rates, and ultimately, improved ROI. In today's competitive digital landscape, investing in SEM is essential for any business looking to thrive online.",
      img: '/img/blog.png',
      date: '2023-10-01',
    },
  ];
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
      <div className="container pl-20 flex gap-8 my-28">
        <div className="relative">
          <BlogShare />
        </div>
        <div className="flex-1">
          <BlogContent />
        </div>
        <div className="w-[390px] p-[2px] gradient rounded-sm h-min flex sticky top-[120px]">
          <div>
            <div className="bg-white p-[30px] rounded-sm">
              <p className="mb-6">Other blogs you may also like</p>
              <div className="flex gap-6 flex-col">
                {blogData.map((item) => (
                  <div key={item.id} className="grid grid-cols-2 gap-2">
                    <img src={item.img} />
                    <div className="flex flex-col justify-between">
                      <p className="line-clamp-2" title={item.title}>
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-xs">Published - 2024</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
