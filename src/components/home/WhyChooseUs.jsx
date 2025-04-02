'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientTypo } from '@/common/gradient-text/GradientTipo';
import { GradientLine } from '@/common/gradient-line/GradientLine';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'img/default.png',
  'https://static.vecteezy.com/system/resources/thumbnails/050/808/473/small/a-panoramic-view-of-the-mountains-and-lake-beautiful-landscape-stunning-natural-landscape-photo.jpeg',
];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(interval);
  }, [current]);

  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Image + Dots */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          <div className="rounded-md overflow-hidden w-full max-w-[600px] h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <img
                  src={images[current]}
                  alt={`Slide ${current + 1}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all ${
                  current === index
                    ? 'w-12 h-3 gradient rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Text + Features */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-2">Why Choose Us</h2>
          <GradientLine className={'mt-4 mb-[88px]'} />
          <div className="text-lg leading-7 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed non risus
            eget turpis dignissim gravida vel in lectus. Suspendisse at leo vitae odio scelerisque{' '}
            <GradientTypo text={'tincidunt'} className={'inline-block font-semibold'} />. Cras a
            quam eu velit tincidunt ultricies a in dolor. Aenean{' '}
            <GradientTypo text={'urna'} className={'inline-block font-semibold'} /> lorem id urna
            fermentum, at fermentum metus gravida. Curabitur vitae bibendum augue.
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <GradientTypo text={'★'} className={'text-2xl'} />
                  <span className="text-base text-gray-900">Lorem ipsum</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
