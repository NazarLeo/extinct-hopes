// The home intro plays once per visit. `seen` covers in-app navigation (leaving
// the home page and coming back); sessionStorage plus the inline script in
// index.html cover a page reload.
let seen = false;

export const introSeen = () => seen;

export function markIntroSeen() {
  seen = true;
  try {
    sessionStorage.setItem('eh-intro', '1');
  } catch {
    /* storage can be blocked — the intro then simply replays */
  }
}
