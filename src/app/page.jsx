import Intro from '@/components/home/Intro';
import { Feature } from './../components/home/Feature';
import { Gallery } from '@/components/home/Gallery';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import { HomeBlogs } from '@/components/home/Blogs';
import AmplifyTest from '@/components/Test/amplify.tst';

const Home = () => {
  return (
    <div>
      <Intro />
      <Feature />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <HomeBlogs />
      <AmplifyTest />
    </div>
  );
};

export default Home;
