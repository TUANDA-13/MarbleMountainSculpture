import React from 'react';
import { i18nHome } from './const';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import { GradientLine } from '@/common/gradient-line/GradientLine';

const blogs = [
  {
    id: 1,
    title: 'Real Life Use Cases for NFTs',
    date: '24 August 2023',
    category: 'Uncategorized',
    description: 'NFTs, or Non-Fungible Tokens, have been creating a buzz...',
    image: 'path/to/image1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Navigating the NFT Universe: A Comprehensive Guide',
    date: '19 July 2023',
    category: 'Uncategorized',
    description: 'In the digitally-driven era we live in, the line...',
    image: 'path/to/image2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Odele Introduces Breakthrough Technology',
    date: '28 June 2023',
    category: 'Uncategorized',
    description: 'New York, NY - Odele, a cutting-edge programmatic ad...',
    image: 'path/to/image3.jpg',
    link: '#',
  },
];

export const HomeBlogs = () => {
  return (
    <div className="px-6 py-24 bg-white">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold text-center">
            {i18nHome.getText().HomeBlogs}
            <GradientLine />
          </h2>
          <a href="#" className="px-4 py-4 text-white gradient rounded-2xl">
            {i18nHome.getText().ViewAllTopStories}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card block sm:flex gap-3">
              <img src={'img/default.png'} className="w-full sm:max-w-[320px] sm:h-[150px]" alt={blog.title} />
              <div className="blog-content sm:mt-0 mt-2">
                <p className="blog-category">
                  {blog.category} | {blog.date}
                </p>
                <h3>{blog.title}</h3>
                <div>
                  <span>{blog.description} </span>{' '}
                  <GradientTypo
                    text={i18nHome.getText().ReadMore}
                    className={'underline cursor-pointer text-sm font-semibold inline'}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
