import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Window from '../components/Window';
import { avatar } from '../data/games';
import { email, playStoreUrl, socials } from '../data/socials';
import useMeta from '../hooks/useMeta';

const rules = [
  <>
    <b>You walk, always.</b> Every corridor you learn is one you can use later — and so
    can it.
  </>,
  <>
    <b>The enemy hunts.</b> It patrols on its own schedule and learns your route. Hiding
    works only if you got there before it did.
  </>,
  <>
    <b>The place tells the story.</b> Notes, recordings and the state of the rooms carry
    the plot.
  </>,
  <>
    <b>It has to run on real phones.</b> A horror game that stutters is not scary, it is
    annoying.
  </>,
];

const spec = [
  ['Name', 'Extinct Hopes'],
  ['Series', 'Project Dream'],
  ['Team', 'Solo'],
  ['Engine', 'Unreal'],
  ['Platform', 'Android'],
  ['Released', '3 + 7 fan games'],
  ['Price', 'All free'],
];

export default function About() {
  useMeta({
    title: 'About Me',
    description:
      'Extinct Hopes — a solo developer building free-roam first-person horror for Android on Unreal Engine.',
    ogTitle: 'Extinct Hopes // About',
    ogDescription:
      'Solo developer. Unreal Engine, Android, and a facility that keeps getting deeper.',
    ogImage: avatar,
  });

  return (
    <>
      <Window path="C:\project_dream\about">
        {/* HEADER */}
        <div className="a-head">
          <div className="g-icon">
            <img alt="Extinct Hopes" src={avatar} />
          </div>
          <div>
            <span className="eyebrow">Who makes this</span>
            <h1>extinct hopes</h1>
            <p className="g-lede">
              I'm a solo developer. Three games in the Project Dream series so far — same
              Soviet-era facility, free-roam first person, built in Unreal Engine for
              Android. On the side I make <Link to="/fan-games">fan games</Link> — seven of
              them on GameJolt, mostly for PC. <b>All free, no paywall.</b>
            </p>
            <div className="pills">
              <span className="pill on">Solo developer</span>
              <span className="pill">3 games + 7 fan games</span>
              <span className="pill">Unreal Engine</span>
              <span className="pill">Android</span>
            </div>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="g-cols" style={{ marginTop: 20 }}>
          <div>
            <Block
              title="What I make"
              tag="Posted 4:58 AM"
              prose={[
                [
                  'One facility, two survivors. The prequel follows a maintenance worker on the night shift, back when the lab still worked. Chapters 1 and 2 follow the same person — the one who fell through the floor and never made it out on the first try. Each chapter stands on its own, but played in order they tell a single story.',
                ],
                [
                  'The rule across every chapter is the same: ',
                  { b: 'no fixed camera views and no scares on a timer.' },
                  ' You walk the corridors yourself, and the thing down there moves on its own schedule. If it catches you, it is because it learned your route — not because a script was waiting for you to reach a trigger.',
                ],
              ]}
            />

            <Block title="Rules I don't break" tag="Posted 5:02 AM">
              <ul className="feat">
                {rules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </Block>
          </div>

          <aside>
            <Block title="status" tag="live">
              <table className="spec">
                <tbody>
                  {spec.map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="meta" style={{ marginTop: 11 }}>
                <li>
                  <span>Status:</span>
                  <b className="live">Building</b>
                </li>
              </ul>
            </Block>

            <Block title="The chapters" tag="In order">
              <div className="prose">
                <p>
                  <b>00</b> — <Link to="/game-lab">Five Nights In Lab</Link>
                  <br />
                  The laboratory is still running. Subject #3808 is behind glass.
                </p>
                <p>
                  <b>01</b> — <Link to="/game-escape">Horror Escape</Link>
                  <br />
                  Abandoned. The hybrid is loose, and someone falls in through the floor.
                </p>
                <p style={{ marginBottom: 0 }}>
                  <b>02</b> — <Link to="/game-cyborg">Cyborg Escape</Link>
                  <br />
                  Deeper levels. Something they rebuilt never stopped working.
                </p>
              </div>
            </Block>

            <Block title="Side projects" tag="Elsewhere">
              <div className="prose">
                <p style={{ marginBottom: 0 }}>
                  Fan games and smaller experiments live on{' '}
                  <Link to="/fan-games">the fan games page</Link> and on{' '}
                  <a href="https://gamejolt.com/@leni/games" target="_blank" rel="noopener">
                    GameJolt
                  </a>
                  .
                </p>
              </div>
            </Block>
          </aside>
        </div>

        {/* SOCIAL */}
        <div className="sec">
          <div className="sec-h">
            <h2>find me</h2>
          </div>
          <div className="social">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noopener'}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="contact-box">
          <span className="eyebrow">Get in touch</span>
          <h2>bug reports, feedback, or just tell me it scared you</h2>
          <p>
            Every message gets read. If something broke on your device, include the phone
            model and which chapter you were playing — that is usually enough to find it.
          </p>
          <div className="contact-acts">
            <a className="btn btn-go" href={`mailto:${email}`}>
              {email}
            </a>
            <a className="btn" href={playStoreUrl} target="_blank" rel="noopener">
              All games on Google Play
            </a>
          </div>
        </div>
      </Window>

      <Footer
        links={[
          { to: '/', label: 'Home' },
          { to: '/fan-games', label: 'Fan Games' },
          { to: '/privacy', label: 'Privacy' },
        ]}
      />
    </>
  );
}
