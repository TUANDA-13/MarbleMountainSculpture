'use client';
import { GradientLine } from '@/common/gradient-line/GradientLine';
import { i18nHome } from './const';
import { TestimonialsCard } from './TestimonialsCard';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Amazing service and quality! Highly recommend. The team was professional and delivered on time.',
      image: '/img/default.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'The sculptures are stunning and beautifully crafted. They exceeded my expectations in every way.',
      image: '/img/default.png',
    },
    {
      id: 3,
      name: 'Michael Brown',
      text: 'Great customer service and attention to detail. The team went above and beyond to ensure everything was perfect, and the craftsmanship is truly exceptional. I couldn’t be happier with the results.',
      image: '/img/default.png',
    },
  ];
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

  const SLIDE_COUNT = 5;

  return (
    <section className="bg- px-6 py-24 container">
      <h2 className="text-4xl font-bold text-center">{i18nHome.getText().ClientSays}</h2>
      <GradientLine className={'mx-auto mt-4 mb-[88px]'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <TestimonialsCard testimonial={testimonials[0]} />
        <TestimonialsCard testimonial={testimonials[1]} />
      </div>
      <TestimonialsCard className="mt-6" testimonial={testimonials[2]}/>
    </section>
  );
}
