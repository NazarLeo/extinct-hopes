import { Link } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import JoinTheLab from '../components/JoinTheLab';
import SocialLink from '../components/SocialLink';
import Window from '../components/Window';
import { avatar, cctv, chapterArt, games } from '../data/games';
import { metaFor } from '../data/seo';
import { playStoreUrl, socials } from '../data/socials';
import useMeta from '../hooks/useMeta';
import { trackPlay } from '../lib/analytics';

const signalLog = [
  ['01', 'power draw spike, sector B', '03:12'],
  ['02', 'door 04 opened — no keycard', '03:29'],
  ['03', 'cam 03 signal lost', '03:41'],
  ['04', 'motion in the lab', '03:45', true],
];

const facts = [
  ['Series', 'Project Dream'],
  ['Status', 'Building', true],
  ['Chapters', '3 released'],
  ['Engine', 'Unreal'],
  ['Platform', 'Android — free'],
];

export default function Home() {
  useMeta(metaFor('/'));

  return (
    <>
      <Window path="C:\project_dream\index">
        {/* PROFILE */}
        <div className="prof">
          <div className="avatar">
            <img alt="Extinct Hopes" src={avatar} />
          </div>

          <div className="title">
            <h1>
              extinct hopes<span className="x">_</span>
            </h1>
            <div className="tagline">Solo horror game developer</div>
            <ul className="meta">
              {facts.map(([k, v, live]) => (
                <li key={k}>
                  <span>{k}:</span>
                  <b className={live ? 'live' : undefined}>{v}</b>
                </li>
              ))}
            </ul>
          </div>

          <div className="links">
            <h3>follow me...</h3>
            <ol>
              {socials.map((s) => (
                <li key={s.id}>
                  <SocialLink social={s} where="profile">
                    {s.name}
                  </SocialLink>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="acts">
          <a
            className="btn btn-go"
            href={playStoreUrl}
            target="_blank"
            rel="noopener"
            onClick={() => trackPlay('all', 'google_play')}
          >
            Play all three — free
          </a>
          <Link className="btn btn-red" to="/#chapters">
            Open the chapters
          </Link>
        </div>

        {/* TWO COLUMNS */}
        <div className="cols">
          <div>
            <div className="cctv">
              {cctv.map((c) => (
                <div className={c.dead ? 'cam dead' : 'cam'} key={c.id}>
                  <span className="id">{c.id}</span>
                  <img loading="lazy" alt="" src={c.src} />
                </div>
              ))}
            </div>
            <div className="cctv-cap">
              <span>Facility feed — 8 cams</span>
              <span>2 offline</span>
            </div>

            <table className="log">
              <thead>
                <tr>
                  <th className="n">#</th>
                  <th>Signal log</th>
                  <th className="tm">Time</th>
                </tr>
              </thead>
              <tbody>
                {signalLog.map(([n, text, time, alarm]) => (
                  <tr key={n} className={alarm ? 'alarm' : undefined}>
                    <td className="n">{n}</td>
                    <td>{text}</td>
                    <td className="tm">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <Block title="About" tag="Posted 4:58 AM">
              i'm a <b>solo developer</b> making free-roam horror for android. one
              Soviet-era research facility, two survivors, and something down there that
              was never supposed to get out.
              <br />
              <br />
              no fixed camera views and no scares on a timer. you walk the corridors
              yourself, and it moves on its own schedule — not on a script waiting for you
              to reach a trigger.
              <br />
              <br />
              built in unreal engine. everything free, everything runs on real phones.
            </Block>

            <Block title="Fan games" tag="Posted 5:01 AM">
              outside Project Dream i also make <b>fan games and smaller experiments</b> —
              fnaf movie editions, spamton night, gravity falls, brawl park. seven of them,
              mostly for pc, all free on gamejolt.
              <br />
              <br />
              <Link to="/fan-games">see the fan games →</Link>
            </Block>

            <Block title="Before you play" tag="Posted 5:03 AM" alarm red>
              jump scares, flashing lights, loud audio, enclosed spaces, blood and injury.
              rated 12+. headphones make it work — and make it worse.
            </Block>
          </div>
        </div>
      </Window>

      {/* CHAPTERS */}
      <section className="sec" id="chapters">
        <div className="sec-h">
          <h2>the chapters</h2>
        </div>

        <div className="track">
          {games.map((g, i) => (
            <Link className="trk" to={g.path} key={g.slug}>
              <span className="trk-n">{g.number}</span>
              <span className="trk-art">
                <img loading="lazy" alt="" src={chapterArt[i]} />
              </span>
              <span className="trk-t">
                <b>{g.title}</b>
                <span>{g.trackLine}</span>
              </span>
              <span className={g.trackTagNew ? 'trk-go new' : 'trk-go'}>{g.trackTag}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SOCIAL */}
      <section className="sec">
        <div className="sec-h">
          <h2>elsewhere</h2>
        </div>
        <div className="social">
          {socials.map((s) => (
            <SocialLink key={s.id} social={s} where="elsewhere">
              {s.name}
            </SocialLink>
          ))}
        </div>
        <JoinTheLab variant="panel" />
      </section>

      <Footer
        links={[
          { to: '/about', label: 'About' },
          { to: '/fan-games', label: 'Fan Games' },
          { to: '/privacy', label: 'Privacy' },
        ]}
      />
    </>
  );
}
