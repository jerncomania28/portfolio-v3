import About from './components/sections/about';
import Hero from './components/sections/hero';
import RecentWorks from './components/sections/recent-works';

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <About />
      <RecentWorks />
    </div>
  );
}
