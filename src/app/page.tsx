import About from './components/sections/about';
import Hero from './components/sections/hero';

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <About />
    </div>
  );
}
