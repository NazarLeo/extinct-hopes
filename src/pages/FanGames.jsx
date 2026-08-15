import Footer from '../components/Footer';
import Window from '../components/Window';
import { fanGames } from '../data/games';
import useMeta from '../hooks/useMeta';

export default function FanGames() {
  useMeta({
    title: 'Fan Games',
    description: 'Fan games and side projects by Extinct Hopes, hosted on GameJolt.',
    ogTitle: 'Fan Games // Extinct Hopes',
    ogDescription: 'Fan games and side projects, free on GameJolt.',
  });

  return (
    <>
      <Window path="C:\project_dream\fan_games">
        <span className="eyebrow">Side projects</span>
        <h1 className="page-h1">Fan games</h1>
        <p className="page-lede">
          Fan games and smaller experiments, all free on GameJolt. These are separate from
          the Project Dream series — made for fun, mostly PC.
        </p>

        <div className="fan">
          {fanGames.map((f) => (
            <a
              className="fan-card"
              href={f.href}
              key={f.href}
              target="_blank"
              rel="noopener"
            >
              <span className="fan-art">
                <img loading="lazy" alt={f.title} src={f.img} />
              </span>
              <span className="fan-t">
                <b>{f.title}</b>
                <span>{f.tag}</span>
              </span>
            </a>
          ))}
        </div>

        <p style={{ margin: '20px 0 0' }}>
          <a
            className="btn"
            href="https://gamejolt.com/@leni/games"
            target="_blank"
            rel="noopener"
          >
            See all on GameJolt
          </a>
        </p>
      </Window>

      <Footer
        links={[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/privacy', label: 'Privacy' },
        ]}
      />
    </>
  );
}
