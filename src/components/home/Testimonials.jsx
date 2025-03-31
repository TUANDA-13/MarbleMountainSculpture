'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EmblaCarousel from './EmblaCarousel';

const testimonials = [
  {
    image:
      'https://images.unsplash.com/photo-1600690226094-3bc5f1b24c69?auto=format&fit=crop&w=100&q=80',
    text: 'Vestibulum dictum, nulla id facilisis dictum, ligula nisi tristique dui...',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80',
    text: 'Duis gravida ex vel sapien malesuada, non fermentum ligula luctus...',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529088747246-cd75a41eae74?auto=format&fit=crop&w=100&q=80',
    text: 'Curabitur porta mauris a eros fermentum, in bibendum justo fermentum...',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    text: 'Aliquam erat volutpat. Donec dapibus urna ut arcu congue...',
  },
  {
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    text: 'Sed imperdiet metus non nisl congue, eget varius sem blandit...',
  },
];

export default function TestimonialsCarousel() {
  //   const [current, setCurrent] = useState(0);
  //   const total = testimonials.length;

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % total);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  //   const getIndex = (offset) => {
  //     return (current + offset + total) % total;
  //   };

  const OPTIONS = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What our clients say</h2>
        <div className="w-16 h-1 bg-[#8B2E2E] mx-auto mt-2"></div>
      </div>

      <div className="flex justify-center items-center gap-6">
        {[getIndex(-1), getIndex(0), getIndex(1)].map((index, idx) => {
          const isCenter = idx === 1;
          return (
            <AnimatePresence mode="wait" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`w-[280px] p-6 rounded-2xl bg-gradient-to-tr from-[#2c0000] to-[#8B2E2E] text-white text-center shadow-md ${
                  isCenter ? 'scale-105 shadow-lg z-10' : 'scale-95 opacity-70'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonials[index].image}
                    alt="Client"
                    className="w-[70px] h-[70px] rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div className="flex justify-center gap-1 mb-3 text-base">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed">{testimonials[index].text}</p>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all ${
              current === index
                ? 'w-6 h-3 bg-[#8B2E2E] rounded-full'
                : 'w-3 h-3 bg-gray-300 rounded-full'
            }`}
          />
        ))}
      </div> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
