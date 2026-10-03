import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Window from '../components/Window';
import { metaFor } from '../data/seo';
import { email } from '../data/socials';
import useMeta from '../hooks/useMeta';

export default function Privacy() {
  useMeta(metaFor('/privacy'));

  return (
    <>
      <Window path="C:\project_dream\privacy_policy.txt">
        <div className="doc">
          <span className="eyebrow">Legal</span>
          <h1>privacy policy</h1>
          <div className="stamp">
            Last updated: 15 August 2026 · Extinct Hopes ·{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <p>
            This Privacy Policy applies to the mobile games published by{' '}
            <b>Extinct Hopes</b> on Google Play: <b>Five Nights In Lab: Horror PD</b>,{' '}
            <b>Horror Escape: Project Dream</b> and <b>Cyborg Escape: Project Dream 2</b>{' '}
            (the "Games").
          </p>

          <h2>Information we collect</h2>
          <p>
            The Games do not require an account. We do not ask you for your name, email
            address, phone number, or any other information that identifies you personally.
          </p>
          <p>
            The Games display advertising through <b>Google AdMob</b>. AdMob and its
            partners may automatically collect and process certain data, including:
          </p>
          <ul>
            <li>advertising identifier (Google Advertising ID)</li>
            <li>approximate location derived from IP address</li>
            <li>device type, operating system version and language</li>
            <li>app usage and ad interaction events</li>
          </ul>

          <h2>How the information is used</h2>
          <p>
            This data is used to display advertising, measure ad performance, and prevent
            fraud and abuse. <b>We do not sell your data.</b>
          </p>

          <h2>Third-party services</h2>
          <p>
            Advertising is provided by Google AdMob. Their data handling is described in the{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
              Google Privacy Policy
            </a>{' '}
            and in the{' '}
            <a
              href="https://support.google.com/admob/answer/6128543"
              target="_blank"
              rel="noopener"
            >
              AdMob documentation
            </a>
            .
          </p>

          <h2>Your choices</h2>
          <p>
            You can reset or delete your advertising identifier and opt out of personalized
            advertising in your device settings, under <b>Settings → Google → Ads</b>.
          </p>

          <h2>Children's privacy</h2>
          <p>
            The Games contain horror themes and are rated for ages 12 and up. They are not
            directed at children under 13, and we do not knowingly collect personal
            information from children. If you believe a child has provided us with such
            information, contact us and we will remove it.
          </p>

          <h2>Data retention and deletion</h2>
          <p>
            We do not operate our own servers and do not store personal data ourselves.
            Requests regarding data held by our advertising partners should be directed to
            those partners, or sent to us at the address below and we will help where we
            can.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            This policy may be updated from time to time. Changes will be posted on this
            page with a revised "last updated" date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${email}`}>{email}</a>
          </p>

          <p style={{ marginTop: 24 }}>
            <Link className="btn" to="/">
              ← Back to the games
            </Link>
          </p>
        </div>
      </Window>

      <Footer
        links={[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/fan-games', label: 'Fan Games' },
        ]}
        showPlay
      />
    </>
  );
}
