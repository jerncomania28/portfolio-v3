import { getShortsData } from '@/lib/youtube';

import About from './components/sections/about';
import Contact from './components/sections/contact';
import ContentCreation from './components/sections/content-creation';
import Hero from './components/sections/hero';
import RecentWorks from './components/sections/recent-works';
import Services from './components/sections/services';
import Skills from './components/sections/skills';
import Stats from './components/sections/stats';
import Testimonials from './components/sections/testimonials';
import YouTubeVideo from './components/sections/youtube-video';

export default async function Home() {
  const shortsData = await getShortsData();

  const videoSchema =
    shortsData && shortsData.some((video) => video.viewCount !== null)
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: shortsData.map((video, index) => ({
            '@type': 'VideoObject',
            position: index + 1,
            name: video.title,
            thumbnailUrl:
              video.thumbnailUrl ??
              `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
            uploadDate: video.publishedAt,
            embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
            contentUrl: `https://www.youtube.com/shorts/${video.id}`,
          })),
        }
      : null;

  return (
    <div className="relative w-full">
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}
      <Hero />
      <YouTubeVideo />
      <About />
      <Skills />
      <Services />
      <RecentWorks />
      <Stats />
      <Testimonials />
      <ContentCreation videos={shortsData} />
      <Contact />
    </div>
  );
}
