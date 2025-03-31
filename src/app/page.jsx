import Intro from '@/components/home/Intro';
import { Feature } from './../components/home/Feature';
import { Gallery } from '@/components/home/Gallery';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {

  return (
    <div>
      <Intro />
      <Feature/>
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
