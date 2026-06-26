import About from './components/sections/about';
import Contact from './components/sections/contact';
import ContentCreation from './components/sections/content-creation';
import Hero from './components/sections/hero';
import RecentWorks from './components/sections/recent-works';
import Services from './components/sections/services';
import Skills from './components/sections/skills';
import Stats from './components/sections/stats';
// import Testimonials from './components/sections/testimonials';
import YouTubeVideo from './components/sections/youtube-video';

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <YouTubeVideo />
      <About />
      <Skills />
      <Services />
      <RecentWorks />
      <Stats />
      {/* <Testimonials /> */}
      <ContentCreation />
      <Contact />
    </div>
  );
}
