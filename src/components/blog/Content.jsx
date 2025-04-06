import Image from 'next/image';

export const BlogContent = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 font-sans text-[#111]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Image src={'svg/logo.svg'} width={20} height={20} alt="logo"/>
            <span className="font-semibold text-sm">marblemountainsculpture</span>
          </div>
          <span className="text-xs text-gray-500 font-semibold">PUBLISHED 2024</span>
        </div>

        {/* Introduction */}
        <h1 className="text-lg font-bold mb-2">Introduction</h1>
        <p className="text-sm leading-relaxed text-justify text-gray-800 mb-4">
          Welcome to the world of Search Engine Marketing (SEM), where businesses harness the power
          of search engines to promote their products and services. In this digital age, having a
          strong online presence is essential for success, and SEM plays a crucial role in achieving
          that goal.
        </p>
        <p className="text-sm leading-relaxed text-gray-800 mb-6 text-justify">
          In this article, we will delve into the realm of Search Engine Marketing and explore its
          key concepts, benefits, strategies, and measurement techniques. Whether you're new to SEM
          or looking to enhance your existing campaigns, this guide will provide valuable insights
          to help you navigate through the ever-evolving landscape of online marketing.
        </p>

        {/* Image */}
        <div className="mb-6">
          <img
            src="/img/blog.png"
            alt="Statue"
            className="rounded-sm shadow-md w-full object-cover"
          />
        </div>

        {/* Section */}
        <h2 className="text-md font-bold mb-2">Understanding Search Engine Marketing</h2>
        <p className="text-sm leading-relaxed text-gray-800 mb-4 text-justify">
          Search Engine Marketing (SEM) encompasses various techniques and strategies used to
          improve a website’s visibility on search engine result pages (SERPs). SEM involves both
          paid advertising, commonly known as Pay-Per-Click (PPC), and organic methods such as
          search engine optimization (SEO).
        </p>
        <p className="text-sm leading-relaxed text-gray-800 text-justify">
          The primary goal of SEM is to drive targeted traffic to a website by increasing its
          visibility in search engine results. It utilizes keywords, ad campaigns, and other tactics
          to rank higher in SERPs. By understanding how search engines work and what users are
          looking for, businesses can optimize their online presence and connect with potential
          customers effectively.
        </p>
      </div>
    </div>
  );
};
