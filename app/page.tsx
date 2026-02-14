import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BrandStory from './components/BrandStory';
import FeaturedCollection from './components/FeaturedCollection';
import EmotionalSection from './components/EmotionalSection';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-offwhite">
            <Hero />
            <TrustStrip />
            <BrandStory />
            <FeaturedCollection />
            <EmotionalSection />
        </main>
    );
}
