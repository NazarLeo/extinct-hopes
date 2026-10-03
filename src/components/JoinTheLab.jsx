import Block from './Block';
import { DISCORD_PATH, LINKS, hasDiscord } from '../config/links';
import useDiscordOnline from '../hooks/useDiscordOnline';
import { trackDiscord } from '../lib/analytics';

// "Join the lab" panel for the home page, with a live "agents online" count
// when the Discord widget is enabled. The count sits in the panel's header
// bar, so it appearing (or never appearing) cannot move anything.
function Panel({ source }) {
  const online = useDiscordOnline(LINKS.discordServerId);

  return (
    <div className="lab-panel">
      <Block
        title="Join the lab"
        tag={
          online && (
            <span className="live">
              {online} {online === 1 ? 'agent' : 'agents'} online
            </span>
          )
        }
      >
        <p className="lab-copy">
          Early builds drop in Discord first. Chat, level up, reach Lab Tester and play new
          chapters before release.
        </p>
        <a
          className="btn"
          href={DISCORD_PATH}
          target="_blank"
          rel="noopener"
          onClick={() => trackDiscord(source)}
        >
          Join the Discord ↗
        </a>
      </Block>
    </div>
  );
}

// Small secondary line for game pages. Always rendered under the play buttons.
function Line({ source, game }) {
  return (
    <p className="lab-line">
      Found a bug or want early builds?{' '}
      <a
        href={DISCORD_PATH}
        target="_blank"
        rel="noopener"
        onClick={() => trackDiscord(source, game)}
      >
        → Discord
      </a>
    </p>
  );
}

/**
 * Optional Discord call-to-action. Renders nothing at all when
 * LINKS.discordInvite is empty, so callers never leave a gap behind.
 *   variant="panel"  home page block
 *   variant="line"   one-line note under a game's play buttons
 * `source` / `game` are only used for analytics.
 */
export default function JoinTheLab({ variant = 'panel', source, game }) {
  if (!hasDiscord) return null;
  return variant === 'line' ? (
    <Line source={source || 'game_page'} game={game} />
  ) : (
    <Panel source={source || 'home_panel'} />
  );
}
