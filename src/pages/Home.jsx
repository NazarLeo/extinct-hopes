import Block from '../components/Block';
import ChapterSections from '../components/ChapterSections';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { metaFor } from '../data/seo';
import useMeta from '../hooks/useMeta';

export default function Home() {
  useMeta(metaFor('/'));

  return (
    <>
      <Hero />
      <ChapterSections />

      <div className="home-tail">
        <Block title="Before you play" tag="Posted 5:03 AM" alarm red>
          jump scares, flashing lights, loud audio, enclosed spaces, blood and injury. rated
          12+. headphones make it work — and make it worse.
        </Block>
        <Footer
          links={[
            { to: '/about', label: 'About' },
            { to: '/fan-games', label: 'Fan Games' },
            { to: '/privacy', label: 'Privacy' },
          ]}
        />
      </div>
    </>
  );
}
