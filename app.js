const paths = {
  home: '/', daily: '/daily-rewards', game: '/game', promos: '/promos', newbie: '/promos/newbie-rewards', filcoin: '/filcoin',
  coinMall: '/filcoin/mall', coinFaq: '/filcoin/faq', coinHistory: '/filcoin/history',
  my: '/my', responsible: '/my/responsible-gaming', vip: '/my/vip', verification: '/my/verification',
  transaction: '/my/transaction', bets: '/my/bet-history', bonus: '/my/bonus', accounts: '/my/accounts',
  news: '/my/news', about: '/my/about', feedback: '/my/feedback', skins: '/my/skins',
};
const navigation = [['home','Home'], ['game','Game'], ['promos','Promos'], ['filcoin','Filcoin'], ['my','My']];
const icons = {
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
  game:'<path d="M8 7h8c3 0 4 2 5 6l1 4c.4 2-1.5 3-3 2l-4-3H9l-4 3c-1.5 1-3.4 0-3-2l1-4c1-4 2-6 5-6Z"/><path d="M6 12h5m-2.5-2.5v5M16 11h.01M19 13h.01"/>',
  promos:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8c-5 0-7-2-5-4 2-2 5 2 5 4Zm0 0c5 0 7-2 5-4-2-2-5 2-5 4Z"/>',
  filcoin:'<circle cx="12" cy="12" r="9"/><path d="m12 7 1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5L7 10.5l3.5-.5Z"/>',
  my:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1Z"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.4 9a2.6 2.6 0 1 1 4.5 1.8c-1 .9-1.9 1.1-1.9 2.7m0 3.1h.01"/>',
  support:'<path d="M4 13v-2a8 8 0 0 1 16 0v6a4 4 0 0 1-4 4h-3"/><rect x="3" y="11" width="4" height="6" rx="2"/><rect x="17" y="11" width="4" height="6" rx="2"/>',
  back:'<path d="m15 5-7 7 7 7"/>', next:'<path d="m9 5 7 7-7 7"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield:'<path d="M12 22s7-3 7-9V5l-7-3-7 3v8c0 6 7 9 7 9Z"/><path d="m9 12 2 2 4-4"/>',
  wallet:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M21 10h-6v4h6"/>',
  history:'<path d="M3 12a9 9 0 1 1 2 6M3 5v7h7M12 7v5l4 2"/>',
  list:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8m-8 4h8m-8 4h5"/>',
  chat:'<path d="M21 11a9 9 0 0 1-9 9H4l1.8-3.5A9 9 0 1 1 21 11Z"/><path d="M8 11h8"/>',
  slots:'<rect x="2" y="6" width="20" height="12" rx="3"/><path d="m5 10 3 0-2 4m5-4h3l-2 4m5-4h3l-2 4"/>',
  dice:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
  cards:'<rect x="7" y="3" width="13" height="17" rx="2"/><path d="m4 7-2 12a2 2 0 0 0 2 2l10 1m0-15 3 4-3 4-3-4Z"/>',
  fish:'<path d="M17 12c-4-6-10-6-15 0 5 6 11 6 15 0Zm0 0 5-4v8Zm-11 0h.01"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="m12 8 4 3-1.5 4.5h-5L8 11Zm0-5v5m4 3 4-2m-5.5 6.5 3 4m-8-4-3 4M8 11 4 9"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>',
};
const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
const link = (name, text, classes = '') => `<a class="${classes}" href="#${paths[name]}">${text}</a>`;
const iconButton = (symbol, label, action) => `<button type="button" class="icon-button" aria-label="${label}" data-action="${action}">${icon(symbol)}</button>`;
const games = [
  ['Orbit Gold','Studio A','Slot'], ['Paper Phoenix','Studio B','Slot'], ['Amethyst Vault','Studio C','Slot'], ['Jade Current','Studio B','Fishing'],
  ['Temple Bell','Studio A','Live'], ['Aurora Circuit','Studio C','Table'], ['Pocket Arcade','Studio B','Arcade'], ['Blue Lantern','Studio A','Bingo'],
  ['Orbit Gold II','Studio A','Slot'], ['Crimson Flight','Studio B','Slot'], ['Violet Vault','Studio C','Slot'], ['Jade Fortune','Studio B','Slot'],
  ['Golden Echo','Studio A','Slot'], ['Aurora Shift','Studio C','Slot'], ['Neon Pocket','Studio B','Slot'], ['Lantern Nights','Studio A','Slot'],
  ['Aurora League','Studio C','Sport'],
  ['Golden Roulette','Studio B','Live'], ['Imperial Baccarat','Studio C','Live'],
  ['Lucky Dice','Studio A','Live'], ['Midnight Blackjack','Studio B','Live'],
  ['Fortune Wheel','Studio C','Live'],
  ['Coral Quest','Studio A','Fishing'], ['Deep Sea Bounty','Studio C','Fishing'],
  ['Reef Raiders','Studio B','Fishing'], ['Ocean Treasure','Studio A','Fishing'],
  ['Shark Bay','Studio C','Fishing'],
];
const homeScrollCategories = ['Live', 'Fishing'];
const gameCovers = assignGameCovers();

function assignGameCovers() {
  const covers = Array.from({ length: 14 }, (_, index) =>
    `./assets/game-covers/cover-${String(index + 1).padStart(2, '0')}.png`);
  for (let last = covers.length - 1; last > 0; last--) {
    const index = Math.floor(Math.random() * (last + 1));
    [covers[last], covers[index]] = [covers[index], covers[last]];
  }
  // Keep each category together so it gets distinct covers within the set.
  const gameCategories = new Set(games.map(([, , category]) => category));
  const groupedGames = [...gameCategories].flatMap(category => games.filter(game => game[2] === category));
  return new Map(groupedGames.map((game, index) => [game, covers[index % covers.length]]));
}

function gameCover(game, className = 'game-cover') {
  return `<img class="${className}" src="${gameCovers.get(game)}" width="375" height="500" alt="" decoding="async">`;
}

const promoDeadline = '<time datetime="2026-12-31T23:59:59+08:00">Dec 31, 2026 · 11:59 PM PHT</time>';
const offers = [
  ['Daily 5% Loss CashBack', '5%', 5, 'Daily cashback on qualifying losses.', 'game', 'More Games'],
  ['First 3 Deposits Promotion', '1–3', 1],
  ['Daily 1% Rebate Bonus', '1%', 3, 'A daily rebate on eligible play.', 'game', 'More Games'],
  ['Semi-Monthly VIP Bonus', 'VIP', 4, 'Eligibility and rewards depend on your VIP tier and qualifying activity.', 'vip', 'VIP Center'],
  ['New Register-KYC Bonus', 'KYC', 2, 'A registration bonus for eligible new members who complete identity verification.', 'verification', 'KYC Verification'],
  ['VIP Club', 'VIP', 0, 'View your VIP level and available benefits.', 'vip', 'VIP Center'],
];
const depositStages = [
  ['1st Deposit', '200', 200],
  ['2nd Deposit', '600', 200],
  ['3rd Deposit', '1,000', 300],
];
const firstDepositTiers = [
  ['20', 5, 5], ['50', 10, 10], ['100', 10, 20], ['500', 50, 50], ['1,000', 100, 100], ['2,000+', 200, 200],
];
const spinTabs = ['Available', 'In Use', 'Ended'];
const categories = ['Slot','Live','Table','Arcade','Bingo','Fishing','Sport'];
const categoryIcons = ['slots','dice','cards','game','filcoin','fish','ball'];
const defaults = { durationOn: false, hours: 1, scheduleOn: false, start: '20:00', end: '22:00', bettingOn: false, betting: '0', bettingSetAt: null, reachedUntil: null };
const storageKey = 'fb-mobile:responsible-gaming:v1';
let limits = { ...defaults };
try {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  if (stored) {
    for (const key of ['durationOn', 'scheduleOn', 'bettingOn']) {
      if (typeof stored[key] === 'boolean') limits[key] = stored[key];
    }
    if (Number.isInteger(stored.hours) && stored.hours >= 1 && stored.hours <= 24) limits.hours = stored.hours;
    for (const key of ['start', 'end']) {
      if (typeof stored[key] === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(stored[key])) limits[key] = stored[key];
    }
    if (typeof stored.betting === 'string' && /^\d{1,15}(?:\.\d{1,2})?$/.test(stored.betting)) limits.betting = stored.betting;
    for (const key of ['bettingSetAt', 'reachedUntil']) {
      if (Number.isFinite(stored[key])) limits[key] = stored[key];
    }
  }
} catch {}
let draft = { ...limits };
let pendingGame;
const manilaOffset = 8 * 60 * 60 * 1000;
const dayLength = 24 * 60 * 60 * 1000;
const removalDelay = 30_000;
const nextMidnight = now => (Math.floor((now + manilaOffset) / dayLength) + 1) * dayLength - manilaOffset;
const pesoAmount = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' });
let category = 'Slot';
let vendor = 'All';
let coinOrder = 0;
let coinRange = 0;
let coinHistoryTab = 'Earn Filcoins';
let coinReturn = 'filcoin';
let depositSlide = 0;
let heroIndex = 0;
let heroTimer;
let rankingTab = 0;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const canHover = matchMedia('(hover: hover)');
let scheduleDraft;
let scheduleSide;
let trigger;
let statusTimer;
const header = document.querySelector('#header');
const main = document.querySelector('#main');
const nav = document.querySelector('#nav');
const status = document.querySelector('#status');
const dialog = document.querySelector('#dialog');
const route = () => Object.keys(paths).find(key => paths[key] === (location.hash.slice(1) || '/')) ?? 'home';

function announce(message) {
  status.textContent = message;
  status.classList.add('visible');
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => status.classList.remove('visible'), 2300);
}

function save(update) {
  Object.assign(limits, update);
  try {
    localStorage.setItem(storageKey, JSON.stringify(limits));
    announce('Settings saved');
  } catch {
    announce('Settings updated for this session');
  }
}

function refreshBettingStatus() {
  const countdown = document.querySelector('#betting-countdown');
  if (!countdown) return;
  const now = Date.now();
  const seconds = Math.ceil((nextMidnight(now) - now) / 1000);
  const remaining = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
    .map(part => String(part).padStart(2, '0')).join(':');
  if (countdown.textContent !== remaining) countdown.textContent = remaining;
  const locked = now - limits.bettingSetAt < removalDelay;
  const remove = document.querySelector('#remove-betting');
  if (locked) remove.setAttribute('aria-describedby', 'removal-note');
  else remove.removeAttribute('aria-describedby');
  remove.disabled = locked;
  document.querySelector('#removal-note').hidden = !locked;
  document.querySelector('#limit-reached').hidden = !(limits.reachedUntil > now);
}

function bettingCard() {
  if (!limits.bettingOn) return limitCard('bettingOn', 'Daily Betting Limit', `
    <div class="field money"><label for="betting">PHP</label>
      <input id="betting" inputmode="decimal" aria-label="Daily betting limit in Philippine pesos" aria-describedby="betting-error" value="${draft.betting}" maxlength="15">
      ${iconButton('close','Clear betting limit','clear-betting')}
    </div><p class="error" id="betting-error" aria-live="polite" hidden></p>`);

  return `<section class="card limit-card" aria-labelledby="bettingOn-title">
    <div class="row limit-heading"><h2 id="bettingOn-title">Daily Betting Limit</h2></div>
    <dl class="betting-summary">
      <div><dt>Limit</dt><dd>${pesoAmount.format(limits.betting)} <span id="limit-reached" hidden>Limit Reached</span></dd></div>
      <div><dt>Time remaining</dt><dd id="betting-countdown"></dd></div>
    </dl>
    <button type="button" class="secondary" id="remove-betting" data-action="remove-betting" aria-describedby="removal-note" disabled>Remove</button>
    <p id="removal-note" class="removal-note">You can remove this limit from 12:00 AM 11/27/2026. The limit remains active until removal is complete.</p>
  </section>`;
}

function renderSettings() {
  main.innerHTML = responsiblePage();
  refreshBettingStatus();
}

function tiles(entries, catalog = false) {
  return `<div class="game-grid${catalog ? ' catalog-grid' : ''}">${entries.map(entry => {
    const [name, studio] = entry;
    const label = `<strong>${name}</strong><small>${studio}</small>`;
    return `<button type="button" class="game-tile" data-game="${games.indexOf(entry)}">
      ${gameCover(entry)}${catalog ? `<span class="sr-only">${label}</span>` : label}
    </button>`;
  }).join('')}</div>`;
}

const homeOffers = [offers[2], offers[0], offers[3]];
const rewardTiers = [
  [100, 200, 1, 2], [500, 1000, 5, 5], [1000, 5000, 20, 10],
  [3000, 50000, 30, 10], [10000, 100000, 100, 30], [20000, 200000, 200, 30],
  [30000, 500000, 300, 50], [50000, 1000000, 500, 50],
  [100000, 3000000, 1000, 50], [200000, null, 3000, 50],
];
const rankingLabels = ['Popular', 'Highest RTP', 'Top Multipliers'];
const popularGames = [[0, 13900], [8, 9870], [1, 5550], [10, 5366], [2, 5350], [11, 3128], [9, 1897], [12, 1684]];
const homeNumber = new Intl.NumberFormat('en-PH');

function heroSlide(index) {
  const [title, , art, , destination] = homeOffers[index];
  const tint = ['Daily', 'Welcome', 'VIP'][index];
  return `<div class="hero" data-feature="${tint}"><div class="hero-copy">
    <h2>${title}</h2>${link(destination, (destination === 'vip' ? 'VIP Center' : 'View games') + icon('next'), 'primary hero-link')}
  </div><span class="hero-art art art-${art}" aria-hidden="true"></span></div>`;
}

function scheduleHero() {
  clearTimeout(heroTimer);
  const carousel = main.querySelector('.home-carousel');
  if (!carousel || reducedMotion.matches || document.hidden || dialog.open ||
      carousel.matches(':focus-within, [data-swiping]') ||
      (canHover.matches && carousel.matches(':hover'))) return;
  heroTimer = setTimeout(() => showHero(heroIndex + 1, 1), 4500);
}

function showHero(index, direction = Math.sign(index - heroIndex)) {
  const viewport = main.querySelector('.hero-viewport');
  if (!viewport) return;
  index = (index + homeOffers.length) % homeOffers.length;
  if (index !== heroIndex) {
    heroIndex = index;
    const outgoing = viewport.querySelector('.hero:not([inert])');
    viewport.querySelector('.hero[inert]')?.remove();
    if (reducedMotion.matches) outgoing.remove();
    else outgoing.inert = true;
    viewport.insertAdjacentHTML('beforeend', heroSlide(index));
    if (!reducedMotion.matches) {
      const incoming = viewport.lastElementChild;
      const options = { duration: 380, easing: 'cubic-bezier(.22,.75,.25,1)', fill: 'none' };
      const start = `translateX(${direction * 100}%)`;
      const end = `translateX(${-direction * 100}%)`;
      incoming.animate([{ transform: start }, { transform: 'translateX(0)' }], options);
      outgoing.animate([{ transform: 'translateX(0)' }, { transform: end }], options)
        .addEventListener('finish', () => outgoing.remove(), { once: true });
    }
    choice(main.querySelector(`[data-hero="${index}"]`), 'hero');
  }
  scheduleHero();
}

function bindHomeCarousel() {
  const carousel = main.querySelector('.home-carousel');
  const viewport = carousel.querySelector('.hero-viewport');
  let start;
  let suppressClick = false;
  carousel.addEventListener('pointerenter', scheduleHero);
  carousel.addEventListener('pointerleave', scheduleHero);
  carousel.addEventListener('focusin', scheduleHero);
  carousel.addEventListener('focusout', () => queueMicrotask(scheduleHero));
  carousel.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowLeft' ? -1 : 1;
    showHero(heroIndex + direction, direction);
    carousel.querySelector(`[data-hero="${heroIndex}"]`).focus();
  });
  viewport.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    start = { x: event.clientX, y: event.clientY };
    suppressClick = false;
    carousel.dataset.swiping = '';
    scheduleHero();
  });
  function endSwipe(event) {
    if (!start || !event.isPrimary) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    start = undefined;
    delete carousel.dataset.swiping;
    if (event.type === 'pointerup' && Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
      suppressClick = true;
      const direction = dx < 0 ? 1 : -1;
      showHero(heroIndex + direction, direction);
    } else scheduleHero();
  }
  viewport.addEventListener('pointerup', endSwipe);
  viewport.addEventListener('pointercancel', endSwipe);
  viewport.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && start) endSwipe(event);
  });
  viewport.addEventListener('click', event => {
    if (suppressClick && event.detail) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }
  }, true);
  scheduleHero();
}

function rewardTier([deposit, bet, credit, spins], details = false) {
  const content = `<span>${icon('promos')} <b>${homeNumber.format(credit)}</b> Free Credit</span>
    <span>${icon('filcoin')} <b>${spins}</b> Free Spins</span>
    <small>Deposit <b>${homeNumber.format(deposit)}</b></small>
    <small>Bet <b>${bet === null ? '—' : homeNumber.format(bet)}</b></small>`;
  return details ? `<li class="reward-tier">${content}</li>` : link('daily', content, 'reward-tier');
}

function dailyPage() {
  return `<section class="card reward-card"><div class="reward-progress"><span>Deposit <b>0</b></span><span>Bet <b>0</b></span></div>
    <ol class="reward-details">${rewardTiers.map(tier => rewardTier(tier, true)).join('')}</ol></section>`;
}

function rankingResults() {
  if (rankingTab !== 0) return `<div class="empty home-ranking-empty">${icon('game')}No Games Available</div>`;
  const cards = (duplicate = false) => popularGames.map(([index, count]) => {
    const game = games[index];
    const [name] = game;
    return `<button type="button" class="game-tile" data-game="${index}" ${duplicate ? 'tabindex="-1"' : ''}>
      ${gameCover(game)}<strong>${name}</strong>
      <small aria-label="${homeNumber.format(count)} players">${icon('my')} ${homeNumber.format(count)}</small></button>`;
  }).join('');
  return `<div class="ranking-window"><div class="ranking-track">
    <div class="ranking-group">${cards()}</div><div class="ranking-group ranking-repeat" aria-hidden="true">${cards(true)}</div>
  </div></div>`;
}

function homeActivity() {
  const results = [[0, 50, 5205], [2, 45, 7794], [8, 8, 8000], [1, 150, 21410], [10, 20, 5291], [12, 100, 17330]];
  const cards = results.map(([index, stake, win]) => `<div class="home-result">
    <strong>${games[index][0]}</strong><small>Stake ${pesoAmount.format(stake)}</small>
    <b>+ ${pesoAmount.format(win)}</b></div>`).join('');
  return `<section class="home-activity" aria-labelledby="home-activity-title">
    <h2 id="home-activity-title">Sample wins</h2>
    <div class="activity-window"><div class="ranking-track">
      <div class="activity-group">${cards}</div><div class="activity-group ranking-repeat" aria-hidden="true">${cards}</div>
    </div></div>
  </section>`;
}

function homeGameSection(title, symbol, entries, filter) {
  return `<section class="home-games${homeScrollCategories.includes(title) ? ' home-games-scroll' : ''}"><div class="section-heading"><h2>${icon(symbol)}${title}</h2>
    <button class="text-button" type="button" data-home-category="${filter}">View all${icon('next')}</button>
  </div>${tiles(entries)}</section>`;
}

function homePage() {
  return `<h1 class="sr-only">Home</h1>
  <section class="home-carousel" aria-label="Featured promos">
    <div class="hero-viewport">${heroSlide(heroIndex)}</div>
    <div class="hero-dots" role="group" aria-label="Choose promotion">${homeOffers.map(([title], index) => `<button type="button" data-hero="${index}" aria-label="${title}" aria-pressed="${index === heroIndex}"></button>`).join('')}</div>
  </section>
  <section class="card reward-card">
    <h2>${link('daily', icon('promos') + 'Daily Rewards' + icon('next'))}</h2>
    <div class="reward-progress"><span>Deposit <b>0</b></span><span>Bet <b>0</b></span></div>
    <div class="reward-grid" aria-label="Daily reward tiers">${rewardTiers.map(tier => rewardTier(tier)).join('')}</div>
  </section>
  ${homeGameSection('5% Loss CashBack', 'filcoin', [games[1], games[8], games[2], games[11]], 'Slot')}
  ${homeGameSection('Hot Games', 'spark', [games[0], games[4], games[3], games[6]], 'Slot')}
  ${homeGameSection('Slot', 'slots', games.filter(entry => entry[2] === 'Slot'), 'Slot')}
  <section class="card home-ranking" aria-labelledby="home-ranking-title">
    <h2 id="home-ranking-title">Filbet Ranking</h2>
    <div class="scroll-row" role="group" aria-label="Ranking type">${rankingLabels.map((label, index) => `<button type="button" data-ranking="${index}" aria-pressed="${rankingTab === index}" aria-controls="home-ranking-results">${label}</button>`).join('')}</div>
    <div id="home-ranking-results" aria-live="polite">${rankingResults()}</div>
  </section>
  ${homeActivity()}
  ${['Live', 'Fishing', 'Sport'].map(title => homeGameSection(title, categoryIcons[categories.indexOf(title)], games.filter(entry => entry[2] === title), title)).join('')}
  <footer class="card home-footer">${link('responsible', 'Responsible Gaming')}${link('about', 'About Filbet')}</footer>`;
}

function gameVendors() {
  const studios = [...new Set(games.filter(entry => entry[2] === category).map(entry => entry[1]))];
  return ['All', ...studios].map(name => `<button type="button" data-vendor="${name}" aria-pressed="${vendor === name}">${name === 'All' ? icon('grid') : ''}${name}</button>`).join('');
}

function gameResults() {
  const entries = games.filter(entry => entry[2] === category && (vendor === 'All' || entry[1] === vendor));
  return entries.length
    ? `${tiles(entries, true)}<p class="catalog-count">${entries.length} ${entries.length === 1 ? 'game' : 'games'}</p>`
    : '<div class="empty">No games match these filters.</div>';
}

function gamePage() {
  return `<h1 class="sr-only">Game</h1>
  <div class="catalog-toolbar">
    <div class="scroll-row categories" role="group" aria-label="Game categories">${categories.map((name,index) => `<button type="button" data-category="${name}" aria-pressed="${category === name}"><span class="category-icon">${icon(categoryIcons[index])}</span>${name}</button>`).join('')}</div>
    <div class="scroll-row filters" role="group" aria-label="Game studios">${gameVendors()}</div>
  </div>
  <section id="game-results" aria-label="Game results" aria-live="polite">${gameResults()}</section>`;
}

function offerArt([, highlight, art]) {
  return `<span class="offer-art art-${art}" aria-hidden="true"><b>${highlight}</b></span>`;
}

function depositBanner() {
  const [label, bonus, spins] = depositStages[depositSlide];
  return link('newbie', `<span><strong>${label}</strong><small>Up to ₱${bonus} + ${spins} Free Spins</small></span>${icon('next')}`, 'deposit-banner');
}

function promosPage() {
  return `<h1 class="sr-only">Promos</h1>
  <section class="promo-balances" aria-label="My rewards">
    ${link('filcoin', `<strong>${coinBalance.toFixed(2)}</strong><span>My Filcoin ${icon('next')}</span>`)}
    <button type="button" data-action="promo-spins"><strong>0</strong><span>My Free Spin ${icon('next')}</span></button>
  </section>
  <section class="promo-newbie" aria-labelledby="promo-newbie-title">
    <h2 id="promo-newbie-title">${link('newbie', `Newbie Rewards ${icon('next')}`)}</h2>
    <div id="deposit-slide" aria-live="polite">${depositBanner()}</div>
    <div class="deposit-dots" role="group" aria-label="Newbie reward slides">
      ${depositStages.map(([label], index) => `<button type="button" data-deposit-slide="${index}" aria-label="${label}" aria-pressed="${depositSlide === index}"></button>`).join('')}
    </div>
  </section>
  <section class="promo-list" aria-label="Offers">${offers.map((offer, index) => {
    const content = `${offerArt(offer)}<span class="offer-info"><strong>${offer[0]}</strong><small>Ends ${promoDeadline}</small>${icon('next')}</span>`;
    return index === 1 ? link('newbie', content, 'promo-card') : `<button type="button" class="promo-card" data-promo="${index}">${content}</button>`;
  }).join('')}</section>`;
}

function newbiePage() {
  return `<section class="newbie-hero"><h2>First 3 Deposits Promotion</h2></section>
  <section class="promo-list" aria-label="Deposit rewards">
    ${depositStages.map(([label, bonus, spins], index) => `<details class="card deposit-stage" ${index === depositSlide ? 'open' : ''}>
      <summary><span><strong>${label}</strong><small>Up to ₱${bonus} + ${spins} Free Spins</small></span><small>${index ? 'Locked' : 'In Progress'}</small>${icon('next')}</summary>
      ${index ? '<p class="dialog-note">Complete the previous deposit stage to unlock this reward.</p>' : `
        <table class="deposit-tiers"><thead><tr><th scope="col">Deposit</th><th scope="col">Bonus</th><th scope="col">Free Spins</th></tr></thead>
          <tbody>${firstDepositTiers.map(([amount, reward, freeSpins]) => `<tr><td>₱${amount}</td><td>₱${reward}</td><td>${freeSpins}</td></tr>`).join('')}</tbody>
        </table>
        <div class="dialog-actions">${memberButton('Free Spins', 'promo-spins')}${memberButton('Deposit Now', 'member-deposit', 'primary')}</div>`}
    </details>`).join('')}
  </section>
  <section class="card member-stack"><h2>Terms &amp; Conditions</h2>
    <p>Ends ${promoDeadline}.</p>
    <p>Eligible rewards are credited within one hour of each successful deposit. A 5× wagering requirement applies to the bonus and 2× turnover applies to the deposit principal. Wagering applies to Slots. Free Spin winnings have no wagering requirement.</p>
  </section>`;
}

const spinEmpty = tab => ({ Available: 'No Free Spins available', 'In Use': 'No Free Spins in use', Ended: 'No ended Free Spins' })[tab];

const coinBalance = 70;
const formatCoins = amount => amount.toLocaleString('en-PH');
const slotTiers = [[100, 30], [500, 80], [1000, 180]];
const coinTasks = [
  ['Wager ₱300 on Live Casino', 300, 50, 'Live', 'cards'],
  ['Spin 31 times at ₱2 on Jili Super Ace', 31, 10, 'Slot', 'slots'],
  ['Spin 51 times at ₱6.60 on FaChai Lucky Fortunes', 51, 30, 'Slot', 'slots'],
  ['Spin 101 times at ₱10 on Pragmatic Play slots', 101, 100, 'Slot', 'slots'],
  ['Win ₱100 in a single game', 1, 100, 'Slot', 'game'],
  ['Win 100× your bet in a single game', 1, 500, 'Slot', 'game'],
  ['Win a total of ₱200', 200, 100, 'Slot', 'game'],
  ['Share once on Facebook', 1, 10, '', 'chat'],
  ['Win 3 times in a row on Baccarat', 1, 100, 'Live', 'cards'],
];
const dailyCoinTotal = [...slotTiers.map(([, reward]) => reward), ...coinTasks.map(([, , reward]) => reward)]
  .reduce((sum, reward) => sum + reward, 0);
const coinProducts = [
  ['iPhone 17 Pro Max', '1 TB · Random color', 999, 14038800, 'phone-pro-max'],
  ['iPhone 17 Pro', '512 GB · Random color', 999, 11398800, 'phone-pro'],
  ['iPhone 17', '256 GB · Random color', 999, 6958800, 'phone'],
  ['iPhone 17 Air', '512 GB · Random color', 999, 10558800, 'phone-air'],
  ['₱10,000 Game Credits', '', 974, 1000000],
  ['₱1,000 Game Credits', '', 98663, 100000],
  ['₱100 Game Credits', '', 30220, 10000],
  ['₱50 Game Credits', '', 41372, 5000],
].map(([name, variant, stock, cost, art], id) => ({ name, variant, stock, cost, art, id }));
const coinOrders = ['Popular', 'Low to high filcoins', 'High to low filcoins'];
const coinRanges = [
  ['All Filcoins', 0, Infinity], ['≤10,000', 0, 10000], ['10,001–50,000', 10001, 50000],
  ['50,001–100,000', 50001, 100000], ['>100,000', 100001, Infinity],
];
const coinSubpageTitles = { coinFaq: 'Filcoins FAQ', coinHistory: 'Details' };

function filcoinPage(mall = false) {
  const tab = (key, label, selected) => `<a href="#${paths[key]}"${selected ? ' aria-current="page"' : ''}>${label}</a>`;
  return `<h1 class="sr-only">Filcoin</h1>
    <div class="coin-toolbar">
      <nav class="coin-tabs" aria-label="Filcoin views">
        ${tab('filcoin', 'Earn Filcoins', !mall)}${tab('coinMall', 'Filcoins Mall', mall)}
      </nav>
      ${link('coinFaq', `${icon('help')} FAQ`, 'coin-faq-link')}
    </div>
    <section class="coin-hero" aria-label="Filcoin balance">
      ${link('coinHistory', `<span>My Filcoins</span><strong>${formatCoins(coinBalance)} ${icon('next')}</strong>`, 'coin-balance')}
      <img class="coin-medal" src="./assets/filcoin/${mall ? 'mall' : 'earn'}.png" alt="" decoding="async" fetchpriority="high">
    </section>
    ${mall ? coinMallPage() : coinEarnPage()}`;
}

function coinEarnPage() {
  const go = (label, destination) => `<button class="coin-go" type="button" data-coin-task="${destination}">Go<span class="sr-only"> · ${label}</span></button>`;
  return `<section class="card coin-summary">
    <div><h2>Today’s task rewards</h2><strong>${formatCoins(dailyCoinTotal)} <span>Points</span></strong></div>
    <img class="coin-summary-art" src="./assets/filcoin/calendar.png" alt="" decoding="async">
  </section>
  <section class="card coin-tasks" aria-labelledby="coin-tasks-title">
    <h2 id="coin-tasks-title">Daily Tasks</h2>
    <article class="coin-task coin-task--tiers">
      <span class="coin-task-icon coin-task-icon--slots">${icon('slots')}</span><h3>Wager on Slot Games</h3>${go('Wager on Slot Games', 'Slot')}
      <div class="coin-tiers">${slotTiers.map(([threshold, reward]) =>
        `<div><span>₱${formatCoins(threshold)}</span><strong>${icon('filcoin')} +${reward}</strong></div>`).join('')}</div>
    </article>
    ${coinTasks.map(([label, target, reward, destination, symbol]) => `<article class="coin-task">
      <span class="coin-task-icon coin-task-icon--${symbol}">${icon(symbol)}</span>
      <div><h3>${label}</h3><div class="coin-progress">
        <span>0 / ${target}</span><strong>${icon('filcoin')} +${reward}</strong>
        <progress value="0" max="${target}" aria-label="${label} progress"></progress>
      </div></div>
      ${go(label, destination || 'share')}
    </article>`).join('')}
  </section>`;
}

function coinProductArt({ art }, loading = 'lazy') {
  return `<span class="coin-product-art${art ? '' : ' coin-product-art--credit'}">
    <img src="./assets/filcoin/${art ? art + '.jpg' : 'credits.png'}" alt="" loading="${loading}" decoding="async">
  </span>`;
}

function coinMallResults() {
  const [, min, max] = coinRanges[coinRange];
  const products = coinProducts.filter(({ cost }) => cost >= min && cost <= max);
  if (coinOrder) products.sort((a, b) => coinOrder === 1 ? a.cost - b.cost : b.cost - a.cost);
  if (!products.length) return '<p class="empty">No items match this Filcoins range.</p>';
  return `<div class="coin-products">${products.map(product => `<button type="button" class="coin-product" data-coin-product="${product.id}">
    ${coinProductArt(product)}<span class="coin-product-info"><strong>${product.name}</strong>
    ${product.variant ? `<small>${product.variant}</small>` : ''}
    <small>${formatCoins(product.stock)} in stock</small></span>
    <span class="coin-cost">${icon('filcoin')} ${formatCoins(product.cost)} <span class="sr-only">Filcoins</span></span>
  </button>`).join('')}</div>`;
}

function coinMallPage() {
  const select = (name, label, options, current) => `<label><span class="sr-only">${label}</span>
    <select data-coin-filter="${name}">${options.map((option, index) =>
      `<option value="${index}"${current === index ? ' selected' : ''}>${option}</option>`).join('')}</select>${icon('next')}</label>`;
  return `<section class="card coin-mall" aria-label="Filcoins Mall products">
    <div class="coin-filters">
      ${select('order', 'Sort by', coinOrders, coinOrder)}
      ${select('range', 'Filcoins range', coinRanges.map(([label]) => label), coinRange)}
    </div>
    <div id="coin-products" aria-live="polite">${coinMallResults()}</div>
  </section>`;
}

function coinFaqPage() {
  return `<section class="card coin-faq member-stack">
    <div><h2>What are Filcoins?</h2><p>Filcoins are reward points you can earn by completing activities on Filbet. Use them to redeem game credits, gift cards or electronics.</p></div>
    <div><h2>How do I claim Filcoins?</h2><p>Complete the requirements shown under Daily Tasks to earn Filcoins.</p></div>
    <div><h2>How do I use Filcoins?</h2><p>Pick a reward in the Filcoins Mall. Game credits require 1× turnover before withdrawal. Taxes may apply to physical rewards.</p></div>
    <div><h2>Terms and Conditions</h2><p>Valid through ${promoDeadline}. Fraudulent activity can result in disqualification. Contact customer support for help.</p></div>
  </section>`;
}

function coinHistoryPage() {
  return `<section class="card coin-history" aria-label="Filcoin records">
    <div class="underline-tabs" role="group" aria-label="Filcoin record type">${['Earn Filcoins', 'Redeem Filcoins'].map(label =>
      `<button type="button" data-coin-history="${label}" aria-pressed="${coinHistoryTab === label}">${label}</button>`).join('')}</div>
    <div class="coin-history-empty"><span class="coin-task-icon coin-task-icon--chat">${icon('history')}</span>
      <p id="coin-records" aria-live="polite">${coinHistoryEmpty()}</p></div>
  </section>`;
}

const coinHistoryEmpty = () => coinHistoryTab === 'Earn Filcoins' ? 'No earning records yet.' : 'No redemption records yet.';

const memberTitles = {
  responsible: 'Responsible Gaming', vip: 'VIP Center', verification: 'KYC Verification',
  transaction: 'Transaction', bets: 'Bet History', bonus: 'Bonus', accounts: 'Found Accounts',
  news: 'News', about: 'About Filbet', feedback: 'Feedback', skins: 'Skins',
};
const accountRows = [['list','news'],['spark','about'],['chat','feedback'],['my','skins'],['shield','responsible']];
const shortcuts = [['list','transaction','Transaction'],['history','bets','Bet History'],['promos','bonus','Bonus'],['wallet','accounts','Account']];
const memberStorage = 'fb-mobile:member:v1';
const member = { balance: 0, transactions: [], accounts: [], feedback: [], verification: '', frame: 'Default', theme: 'Classic White', signedIn: true };
try { Object.assign(member, JSON.parse(localStorage.getItem(memberStorage))); } catch {}
const walletTypes = ['GCash', 'Maya', 'Bank'];
const dates = ['Today', 'Yesterday', 'Last 7 days', 'Last 15 days', 'Last 30 days'];
const statuses = ['All Status', 'Pending', 'Completed', 'Canceled'];
const bonusTypes = ['All Type', 'Mystery Box', 'Level Up Bonus', 'Birthday Bonus', 'CQ9 Daily Rebate', 'TPG Daily Loss Rebate', 'Slot Betting Ranking', 'APP Bonus', 'Deposit Bonus', 'Daily Deposit & Betting Bonus', 'APP 1.0.8 Version Bonus', 'Spin Bonus', 'First Deposit Bonus', 'Restore Deposit', 'Daily Deposit', 'FIL Ace Daily Deposit', 'Invite Friend Basic Reward', 'Invite Friend Milestone', 'Invite Friend Commission', 'Daily Cashback', 'Semi-Monthly Bonus：Milestone Reward', 'Semi-Monthly Bonus：Tier Up Reward', 'VIP Sign-in Bonus', 'Rebate Bonus', 'Leaderboard Challenge Bonus', 'CashBack Bonus'];
const tiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'];
const vipBenefits = ['Level Up Bonus', 'Birthday Bonus', 'Semi-Monthly Bonus'];
const skinOptions = { 'Avatar Frame': ['Default', 'Princess', 'Prince', 'Queen'], 'Theme Skin': ['Classic White', 'Classic Gray'] };
let recordTab = 'Deposit';
let walletTab = 'GCash';
let skinTab = 'Avatar Frame';
let vipTier = 'Bronze';
let vipLevel = 0;
const memberMoney = cents => pesoAmount.format(cents / 100);
const escapeText = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const memberDate = new Intl.DateTimeFormat('en-PH', { dateStyle: 'medium', timeZone: 'Asia/Manila' });
const accountLabel = account => `${account.type} · ${account.name} · •••• ${account.lastFour}`;
const memberButton = (label, action, classes = 'secondary') => `<button type="button" class="${classes}" data-action="${action}">${label}</button>`;
const settingContent = (symbol, label) => `<span class="row-icon">${icon(symbol)}</span><span>${label}</span><span class="setting-arrow">${icon('next')}</span>`;
const accountTabs = (options, current, key, label) => `<div class="scroll-row underline-tabs member-tabs" role="group" aria-label="${label}">${options.map(option => `<button type="button" data-${key}="${option}" aria-pressed="${option === current}">${option}</button>`).join('')}</div>`;
const selectOptions = options => options.map(label => `<option>${label}</option>`).join('');
const emptyMember = message => `<p class="empty" role="status">${message}</p>`;
const external = (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;

function applyMemberTheme() {
  document.documentElement.dataset.theme = member.theme === 'Classic Gray' ? 'dark' : 'light';
}
applyMemberTheme();

function storeMember() {
  try { localStorage.setItem(memberStorage, JSON.stringify(member)); }
  catch { return false; }
  return true;
}

function myPage() {
  if (!member.signedIn) return `<section class="card member-stack"><h2>Member Account</h2>${memberButton('Log In', 'member-login', 'primary')}</section>`;
  return `<section class="profile row" aria-label="Member profile">
    <span class="avatar member-avatar" data-frame="${member.frame}">${icon('my')}</span>
    <div><strong>Member</strong><small>Member ID · 000001</small></div>
  </section>
  <section class="vip card"><div class="row"><h2>Bronze <span>VIP 0</span></h2>${link('vip', 'VIP Center ' + icon('next'), 'text-button member-link')}</div>
    <div class="vip-progress"><progress value="0" max="1500" aria-label="VIP upgrade progress"></progress><small>0 / 1,500 XP</small></div>
  </section>
  <section class="wallet" aria-labelledby="wallet-title">
    <div class="row wallet-heading"><span class="wallet-symbol">${icon('filcoin')}</span><h2 id="wallet-title">Total Balance</h2>
      <strong>${memberMoney(member.balance)}</strong>${iconButton('history','Refresh balance','balance')}
    </div>
    <div class="card wallet-panel">
      <div class="wallet-actions">${memberButton(icon('plus') + 'Deposit', 'member-deposit', 'primary')}${memberButton(icon('wallet') + 'Withdraw', 'member-withdraw')}</div>
      <div class="shortcuts">${shortcuts.map(([symbol,key,label]) => link(key, icon(symbol) + `<span>${label}</span>`)).join('')}</div>
    </div>
  </section>
  <section class="card settings-list" aria-label="Account settings">
    ${link('verification', `<span class="row-icon">${icon('shield')}</span><span>KYC Verification</span><span class="row-action">${member.verification || 'Verify now'}</span><span class="setting-arrow">${icon('next')}</span>`, 'setting-row verify')}
    ${accountRows.map(([symbol,key]) => link(key, settingContent(symbol, memberTitles[key]), 'setting-row')).join('')}
  </section>
  <section class="card member-stack">
    <h2>Join Filbet Community</h2>
    <div class="member-links">${external('https://www.facebook.com/FilbetPHofficial/', 'Facebook')}${external('https://www.instagram.com/filbetphofficial', 'Instagram')}${external('https://t.me/+bzBAYe2phTczYTg1', 'Telegram')}</div>
    <div class="member-links">${external('https://www.pagcor.ph/', 'PAGCOR')}${external('https://www.npgh.ph/', 'NPGH')}</div>
    <small>21 and above only. Gamble responsibly.</small>
  </section>
  ${memberButton('Log Out', 'member-logout', 'secondary member-wide')}`;
}

function recordPage(kind) {
  const types = kind === 'bonus' ? bonusTypes : kind === 'transaction' ? [...statuses, 'Timeout'] : statuses;
  return `<section class="member-stack">
    ${kind === 'transaction' ? accountTabs(['Deposit', 'Withdraw', 'Balance'], recordTab, 'record-tab', 'Transaction type') : ''}
    <div class="member-columns member-filters">
      <label>${kind === 'bonus' ? 'Type' : 'Status'}<select id="record-filter">${selectOptions(types)}</select></label>
      <label>Period<select id="record-period">${selectOptions(dates)}</select></label>
    </div>
    ${kind === 'bets' ? '<div class="card member-columns"><div><small>Total Bet</small><strong>₱0.00</strong></div><div><small>Total Wins</small><strong>₱0.00</strong></div></div>' : ''}
    <div id="member-records">${recordRows(kind, types[0], dates[0])}</div>
  </section>`;
}

function recordRows(kind, filter, period) {
  if (kind !== 'transaction') return emptyMember(kind === 'bets' ? 'No search results found' : 'There is no data yet.');
  const midnight = nextMidnight(Date.now()) - dayLength;
  const days = [0, 1, 6, 14, 29][dates.indexOf(period)];
  const start = midnight - days * dayLength;
  const end = midnight + (period === 'Yesterday' ? 0 : dayLength);
  const rows = member.transactions.filter(entry => (recordTab === 'Balance' || entry.type === recordTab) &&
    (filter === 'All Status' || filter === 'Completed') && entry.date >= start && entry.date < end);
  return rows.length ? `<ul class="member-record-list">${rows.map(entry => `<li class="card">
    <div><strong>${entry.type}</strong><small>${memberDate.format(entry.date)} · ${entry.method}</small></div>
    <div><strong>${entry.type === 'Deposit' ? '+' : '−'}${memberMoney(entry.amount)}</strong><small>${recordTab === 'Balance' ? `Balance ${memberMoney(entry.balance)}` : 'Completed'}</small></div>
  </li>`).join('')}</ul>` : emptyMember('There is no data yet.');
}

function accountsPage() {
  return `<section class="member-stack">
    ${accountTabs(walletTypes, walletTab, 'wallet-tab', 'Account type')}
    <div id="wallet-accounts">${walletAccounts()}</div>
  </section>`;
}

function walletAccounts() {
  const accounts = member.accounts.filter(account => account.type === walletTab);
  return `<div class="member-stack"><p>You can add up to 5 ${walletTab} accounts.</p>
    ${accounts.length ? `<ul class="member-record-list">${accounts.map(account => `<li class="card">
      <div><strong>${escapeText(account.name)}</strong><small>•••• ${account.lastFour}</small></div>
      <button type="button" class="secondary" data-remove-account="${account.id}">Remove</button>
    </li>`).join('')}</ul>` : emptyMember(`Add your ${walletTab} accounts`)}
    <button type="button" class="primary member-wide" data-action="member-add-account" ${accounts.length >= 5 ? 'disabled' : ''}>Add ${walletTab} Account</button>
  </div>`;
}

function vipPage() {
  return `<section class="member-stack">
    <div class="card row"><span class="avatar">${icon('spark')}</span><div><h2>Member · VIP 0</h2><small>Current tier · Bronze</small></div></div>
    ${accountTabs(tiers, vipTier, 'vip-tier', 'VIP tier')}
    <div id="vip-tier-content" class="member-stack">${vipTierContent()}</div>
  </section>`;
}

function vipTierContent() {
  return `<div class="card member-stack">
    <div class="row member-heading"><h2>${vipTier}</h2>${memberButton('Level details', 'member-vip-details', 'text-button')}</div>
    ${vipTier === 'Bronze' ? accountTabs(['0','1','2','3','4','5','6'].map(level => `L${level}`), `L${vipLevel}`, 'vip-level', 'VIP level') : ''}
    <div id="vip-progress-details" class="member-columns">${vipProgress()}</div>
  </div>
  <div class="card member-stack"><h2>VIP Benefits</h2>${vipBenefits.map(benefit => `<button type="button" class="setting-row" data-vip-rule="${benefit}">${settingContent('promos', benefit)}</button>`).join('')}</div>
  <div class="card row member-heading"><div><h2>Rewards Available</h2><small>₱0.00</small></div><button type="button" class="secondary" disabled>Claim</button></div>`;
}

function vipProgress() {
  return `<div><small>Upgrade Progress</small><strong>${vipTier === 'Bronze' && vipLevel === 0 ? '0 / 1,500 XP' : 'Locked'}</strong></div><div><small>Retention Progress</small><strong>—</strong></div>`;
}

function skinsPage() {
  return `<section class="member-stack">${accountTabs(Object.keys(skinOptions), skinTab, 'skin-tab', 'Skin category')}
    <div id="skin-options">${skinChoices()}</div></section>`;
}

function skinChoices() {
  const active = skinTab === 'Avatar Frame' ? member.frame : member.theme;
  return `<div class="member-skins" role="group" aria-label="${skinTab}">${skinOptions[skinTab].map(option =>
    `<button type="button" class="card" data-skin="${option}" aria-pressed="${option === active}">
      ${skinTab === 'Avatar Frame' ? `<span class="avatar member-avatar" data-frame="${option}">${icon('my')}</span>` : `<span class="theme-swatch" data-choice="${option}" aria-hidden="true"></span>`}
      <strong>${option}</strong>
    </button>`).join('')}</div>`;
}

function feedbackPage() {
  return `<section class="member-stack">
    ${memberButton('History', 'member-feedback-history', 'secondary member-wide')}
    <form class="card member-stack member-form" data-member-form="feedback">
      <label>Describe <textarea name="message" rows="5" maxlength="1000" required placeholder="What can we improve?"></textarea></label>
      <small id="feedback-count">0/1000</small>
      <label>Picture <input type="file" name="pictures" accept="image/png,image/jpeg,image/webp,image/gif" multiple></label>
      <p class="error" data-form-error role="alert" hidden></p>
      <button type="submit" class="primary">Submit</button>
    </form>
  </section>`;
}

function verificationPage() {
  return member.verification ? `<div class="card member-stack"><h2>Verification status</h2><p>${member.verification}</p></div>` :
    `<form class="card member-stack member-form" data-member-form="verification">
      <label>Document type <select name="document">${selectOptions(['National ID', 'Passport', 'Driver’s License'])}</select></label>
      <p>Sample verification uses the selected document type.</p>
      <button type="submit" class="primary">Submit for Review</button>
    </form>`;
}

function aboutPage() {
  return `<section class="card member-stack">
    <details><summary>Brand Introduction</summary><p>Filbet is a Philippine gaming brand operated by Gotech Entertainment Inc.</p></details>
    <div class="member-links">${external('https://www.filbet.com/s-docs/terms-of-use', 'Terms of use')}${external('https://www.filbet.com/s-docs/privacy-policy', 'Privacy policy')}</div>
  </section>`;
}

function timeLabel(value) {
  const [hour, minute] = value.split(':').map(Number);
  return `${String(hour % 12 || 12).padStart(2,'0')}:${String(minute).padStart(2,'0')} ${hour < 12 ? 'AM' : 'PM'}`;
}

function timeRange(values, inDialog = false) {
  return `<div class="time-range${inDialog ? ' time-range--editor' : ''}">${['start','end'].map(side => {
    const label = side === 'start' ? 'Start time' : 'End time';
    const value = timeLabel(values[side]);
    return `${!inDialog && side === 'end' ? '<span>to</span>' : ''}
      <button type="button" class="time-button" ${inDialog ? `data-side="${side}" aria-pressed="${scheduleSide === side}"` : `data-schedule="${side}"`} aria-label="${label}, ${value}">
        ${inDialog ? `<span class="time-button-value"><small>${label}</small><strong>${value}</strong></span>` : `<span>${value}</span>`}
        ${icon('clock')}
      </button>`;
  }).join('')}</div>`;
}

function limitCard(key, title, content) {
  return `<section class="card limit-card" aria-labelledby="${key}-title">
  <div class="row limit-heading"><h2 id="${key}-title">${title}</h2>
    <button type="button" class="switch-hit" data-limit="${key}" role="switch" aria-labelledby="${key}-title" aria-checked="${draft[key]}"><span></span></button></div>
  ${draft[key] ? content : ''}</section>`;
}

function responsiblePage() {
  return `<div class="limit-stack">
  ${limitCard('durationOn','Daily Gaming Duration',`
    <div class="field stepper">
      <button type="button" data-step="-1" aria-label="Decrease duration" ${draft.hours <= 1 ? 'disabled' : ''}>${icon('minus')}</button>
      <input id="hours" inputmode="numeric" aria-label="Daily duration in hours" aria-describedby="hours-error" value="${draft.hours}" maxlength="2">
      <button type="button" data-step="1" aria-label="Increase duration" ${draft.hours >= 24 ? 'disabled' : ''}>${icon('plus')}</button>
      <span class="unit" id="hours-unit">${draft.hours === 1 ? 'Hour' : 'Hours'}</span>
    </div><p class="error" id="hours-error" aria-live="polite" hidden></p>`)}
  ${limitCard('scheduleOn','Daily Gaming Schedule',timeRange(draft))}
  ${bettingCard()}
  <div class="settings-actions">
    <button type="button" class="secondary" data-action="cancel-settings">Cancel</button>
    <button type="button" class="primary" data-action="save-settings">Save</button>
  </div>
  </div>`;
}

const pages = {
  home: homePage, daily: dailyPage, game: gamePage, promos: promosPage, newbie: newbiePage, filcoin: filcoinPage, coinMall: () => filcoinPage(true),
  coinFaq: coinFaqPage, coinHistory: coinHistoryPage, my: myPage, responsible: responsiblePage,
  vip: vipPage, verification: verificationPage, transaction: () => recordPage('transaction'),
  bets: () => recordPage('bets'), bonus: () => recordPage('bonus'), accounts: accountsPage,
  news: () => emptyMember('No announcements yet.'), about: aboutPage, feedback: feedbackPage, skins: skinsPage,
};
nav.innerHTML = navigation.map(([key,label]) => `<a href="#${paths[key]}" data-route="${key}"><span>${icon(key)}</span>${label}</a>`).join('');
history.scrollRestoration = 'manual';

function render(moveFocus = false) {
  const current = route();
  const memberTitle = memberTitles[current];
  const coinTitle = coinSubpageTitles[current];
  const active = current === 'coinMall' || coinTitle ? 'filcoin' : current === 'daily' ? 'home' : current === 'newbie' ? 'promos' : memberTitle ? 'my' : current;
  document.title = `FB_Mobile · ${(current === 'daily' ? 'Daily Rewards' : current === 'newbie' ? 'Newbie Rewards' : coinTitle || memberTitle) || navigation.find(([key]) => key === active)[1]}`;
  header.className = current === 'daily' || current === 'my' || current === 'newbie' || memberTitle || coinTitle ? 'topbar subbar' : 'topbar';
  clearTimeout(heroTimer);
  if (current === 'daily') {
    header.innerHTML = `${link('home', icon('back') + '<span class="sr-only">Back to Home</span>', 'icon-button back')}<h1>Daily Rewards</h1>`;
  } else if (current === 'newbie') {
    header.innerHTML = `${link('promos', icon('back') + '<span class="sr-only">Back to Promos</span>', 'icon-button back')}<h1>Newbie Rewards</h1>`;
  } else if (coinTitle) {
    header.innerHTML = `${link(coinReturn, icon('back') + '<span class="sr-only">Back to Filcoin</span>', 'icon-button back')}<h1>${coinTitle}</h1>`;
  } else if (memberTitle) {
    header.innerHTML = `${link('my',icon('back') + '<span class="sr-only">Back to My</span>','icon-button back')}<h1>${memberTitle}</h1>`;
  } else if (current === 'my') {
    header.innerHTML = `${iconButton('menu','Menu','menu')}<h1>My</h1>
      <div class="top-actions">${iconButton('search','Search games','search')}${iconButton('support','Support','support')}</div>`;
  } else {
    header.innerHTML = `${iconButton('menu','Menu','menu')}${link('home','<span class="brand-mark" aria-hidden="true">F</span><span>FB<span class="brand-name"> Mobile</span></span>','brand')}
      <div class="top-actions"><button type="button" class="balance" data-action="member-deposit" aria-label="Deposit · ${memberMoney(member.balance)}">${icon('wallet')} <span>${memberMoney(member.balance)}</span></button>
      ${iconButton('search','Search games','search')}${iconButton('support','Support','support')}</div>`;
  }
  main.dataset.page = current;
  if (memberTitle && current !== 'responsible' && !member.signedIn) {
    main.innerHTML = `<section class="card member-stack"><h2>Log in to continue</h2>${link('my', 'Go to My', 'primary member-link')}</section>`;
  } else if (current === 'responsible') {
    draft = { ...limits };
    renderSettings();
  } else main.innerHTML = pages[current]();
  if (current === 'home') bindHomeCarousel();
  for (const item of nav.querySelectorAll('[data-route]')) {
    if (item.dataset.route === active) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  }
  if (moveFocus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
}

function openDialog(title, content, opener, { symbol, tone = 'neutral', description, drawer = false } = {}) {
  trigger = opener;
  dialog.classList.toggle('home-drawer', drawer);
  clearTimeout(heroTimer);
  if (description) dialog.setAttribute('aria-describedby', 'dialog-description');
  else dialog.removeAttribute('aria-describedby');
  dialog.innerHTML = `<div class="dialog-top">
    ${symbol ? `<span class="dialog-symbol dialog-symbol--${tone}">${icon(symbol)}</span>` : ''}
    <h2 id="dialog-title">${title}</h2>
    ${iconButton('close','Close','close')}
  </div>
  ${description ? `<p class="dialog-note" id="dialog-description">${description}</p>` : ''}
  ${content}`;
  dialog.showModal();
}

function bettingDialogDetails(amount) {
  return `<dl class="dialog-details">
    <div><dt>Limit</dt><dd>${pesoAmount.format(amount)}</dd></div>
    <div><dt>Period</dt><dd>Daily</dd></div>
    <div><dt>Resets at</dt><dd>12:00 AM Manila time</dd></div>
  </dl>`;
}

function scheduleFields() {
  const [hour, minute] = scheduleDraft[scheduleSide].split(':').map(Number);
  const select = (key, label, values, current) => `<label>${label}<select data-time-part="${key}">${values.map(([value,text]) => `<option value="${value}" ${current === value ? 'selected' : ''}>${text}</option>`).join('')}</select></label>`;
  return `${timeRange(scheduleDraft,true)}<div class="time-fields" role="group" aria-label="Edit ${scheduleSide} time">
    ${select('hour','Hour',Array.from({length:12},(_,i) => [i+1,String(i+1).padStart(2,'0')]),hour % 12 || 12)}
    ${select('minute','Minute',Array.from({length:60},(_,i) => [i,String(i).padStart(2,'0')]),minute)}
    ${select('period','Period',[[0,'AM'],[1,'PM']],Number(hour >= 12))}
  </div><p id="schedule-error" class="error" role="alert" hidden></p>`;
}

function updateScheduleFields(focusSide = false) {
  dialog.querySelector('#schedule-fields').innerHTML = scheduleFields();
  if (focusSide) dialog.querySelector(`[data-side="${scheduleSide}"]`).focus();
}

function openSchedule(side, opener) {
  scheduleDraft = { start: draft.start, end: draft.end };
  scheduleSide = side;
  openDialog('Daily Gaming Schedule',`
    <div id="schedule-fields">${scheduleFields()}</div>
    <div class="dialog-actions"><button type="button" class="secondary" data-action="close">Cancel</button><button type="button" class="primary" data-action="confirm-schedule">Confirm</button></div>`, opener, { symbol: 'clock' });
  dialog.querySelector(`[data-side="${side}"]`).focus();
}

function choice(button, key) {
  const selector = `[data-${key}]`;
  document.querySelectorAll(selector).forEach(item => item.setAttribute('aria-pressed',String(item === button)));
}

function syncHours() {
  document.querySelectorAll('[data-step]').forEach(button => {
    button.disabled = Number(button.dataset.step) < 0 ? draft.hours <= 1 : draft.hours >= 24;
  });
  document.querySelector('#hours-unit').textContent = draft.hours === 1 ? 'Hour' : 'Hours';
}

function validate(input) {
  const error = document.querySelector(`#${input.id}-error`);
  const isHours = input.id === 'hours';
  const raw = input.value.trim();
  const value = Number(raw);
  const valid = isHours ? /^\d+$/.test(raw) && value >= 1 && value <= 24 : /^\d+(\.\d{1,2})?$/.test(raw);
  input.setAttribute('aria-invalid', String(!valid));
  error.hidden = valid;
  error.textContent = valid ? '' : isHours ? 'Enter a whole number from 1 to 24.' : 'Enter a valid amount with up to two decimal places.';
  if (!valid) return false;
  if (isHours) {
    draft.hours = value;
    input.value = value;
    syncHours();
  } else {
    draft.betting = raw.replace(/^0+(?=\d)/, '');
    input.value = draft.betting;
  }
  return true;
}

function commitSettings() {
  if (draft.bettingOn && !limits.bettingOn) {
    draft.bettingSetAt = Date.now();
    draft.reachedUntil = null;
  }
  save(draft);
  renderSettings();
  main.querySelector('[data-action="save-settings"]').focus();
}

function clearPendingGame() {
  clearTimeout(pendingGame?.timer);
  pendingGame = undefined;
}

function showGameDialog(button, renderContent) {
  if (!button.isConnected) return;
  const opener = dialog.open ? trigger : button;
  if (dialog.open) dialog.close();
  renderContent(opener);
}

function playGame(button) {
  const now = Date.now();
  const index = Number(button.dataset.game);
  const showDetails = () => showGameDialog(button, opener => gameDetails(index, opener));
  if (!limits.bettingOn) {
    showDetails();
    return;
  }
  const count = pendingGame?.button === button ? pendingGame.count + 1 : 1;
  clearPendingGame();
  if (count === 3 || limits.reachedUntil > now) {
    limits.reachedUntil = nextMidnight(now);
    try { localStorage.setItem(storageKey, JSON.stringify(limits)); } catch {}
    showGameDialog(button, opener => openDialog('Daily betting limit reached', `
      ${bettingDialogDetails(limits.betting)}
      <div class="dialog-actions">
        <button type="button" class="secondary" data-action="close">OK</button>
        ${link('responsible', 'View Settings', 'primary settings-link')}
      </div>`, opener, { symbol: 'clock', tone: 'warning' }));
    return;
  }
  pendingGame = { button, count, timer: setTimeout(() => {
    clearPendingGame();
    showDetails();
  }, 500) };
}

function gameDetails(index, opener) {
  const game = games[index];
  const [name, studio] = game;
  openDialog(name, `${gameCover(game, 'detail-art')}<small class="detail-meta">${studio}</small>`, opener);
}

function memberForm(kind, fields, submitLabel) {
  return `<form class="member-stack member-form" data-member-form="${kind}">${fields}
    <p class="error" data-form-error role="alert" hidden></p>
    <div class="dialog-actions"><button type="button" class="secondary" data-action="close">Cancel</button>
    <button type="submit" class="primary">${submitLabel}</button></div></form>`;
}

function openWallet(kind, button) {
  if (!member.signedIn) {
    location.hash = paths.my;
    return;
  }
  const deposit = kind === 'deposit';
  if (!deposit && (!member.balance || !member.accounts.length)) {
    openDialog('Withdraw', `<div class="member-stack"><p>Available balance · ${memberMoney(member.balance)}</p>
      ${!member.accounts.length ? link('accounts', 'Manage Accounts', 'secondary member-link') : ''}
      ${!member.balance ? '<p>Your balance is insufficient.</p>' : ''}</div>`, button);
    return;
  }
  const accountOptions = member.accounts.map(account => `<option value="${account.id}">${escapeText(accountLabel(account))}</option>`).join('');
  const max = deposit ? 50000 : member.balance / 100;
  const fields = `<label>${deposit ? 'Payment Method' : 'Withdrawal Account'}
      <select name="method">${deposit ? selectOptions(walletTypes.slice(0, 2)) : accountOptions}</select></label>
    ${!deposit ? `<p>Available balance · ${memberMoney(member.balance)}</p>` : ''}
    <label>${deposit ? 'Deposit' : 'Withdrawal'} Amount (PHP)
      <input name="amount" type="number" inputmode="decimal" required min="${deposit ? 500 : 0.01}" max="${max}" step="0.01"></label>
    ${deposit ? '<small>Amount range · ₱500.00–₱50,000.00</small>' : ''}`;
  openDialog(deposit ? 'Deposit' : 'Withdraw', memberForm(kind, fields, deposit ? 'Deposit Now' : 'Withdraw Now'), button,
    { description: 'Sample wallet. Transactions use a local balance.' });
}

function refreshMemberRecords() {
  document.querySelector('#member-records').innerHTML = recordRows(route(), document.querySelector('#record-filter').value, document.querySelector('#record-period').value);
}

function finishMemberAction(message, focusSelector) {
  if (dialog.open) dialog.close();
  if (focusSelector) {
    render();
    (main.querySelector(focusSelector) || main).focus();
  }
  announce(storeMember() ? message : `${message} for this session`);
}

function formError(form, message) {
  const error = form.querySelector('[data-form-error]');
  error.textContent = message;
  error.hidden = false;
}

const memberSubmissions = {
  deposit: submitWallet,
  withdraw: submitWallet,
  account(form, fields) {
    const name = fields.get('name').trim();
    const lastFour = fields.get('lastFour');
    const type = form.dataset.accountType;
    const accounts = member.accounts.filter(account => account.type === type);
    if (!name) return formError(form, 'Enter an account label.');
    if (accounts.length >= 5) return formError(form, 'This account type already has five entries.');
    if (accounts.some(account => account.lastFour === lastFour && account.name === name)) return formError(form, 'This account already exists.');
    member.accounts.push({ id: crypto.randomUUID(), type, name, lastFour });
    finishMemberAction('Account added', '[data-action="member-add-account"]');
  },
  async feedback(form, fields) {
    const message = fields.get('message').trim();
    const pictures = fields.getAll('pictures').filter(file => file.size > 0);
    if (!message) return formError(form, 'Enter your feedback.');
    if (pictures.length > 3 || pictures.some(file => !/^image\/(png|jpeg|webp|gif)$/.test(file.type)) ||
        pictures.reduce((size, file) => size + file.size, 0) > 1024 * 1024) {
      return formError(form, 'Choose up to three PNG, JPEG, WebP or GIF files, up to 1 MB total.');
    }
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    try {
      const images = await Promise.all(pictures.map(file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result), { once: true });
        reader.addEventListener('error', reject, { once: true });
        reader.readAsDataURL(file);
      })));
      member.feedback.unshift({ message, images, date: Date.now() });
      form.reset();
      const count = form.querySelector('#feedback-count');
      count.textContent = '0/1000';
      finishMemberAction('Feedback saved');
    } catch {
      formError(form, 'Could not read the selected pictures.');
    } finally {
      submit.disabled = false;
    }
  },
  verification() {
    member.verification = 'Pending review';
    finishMemberAction('Verification submitted', 'main');
  },
};

function submitWallet(form, fields) {
  const deposit = form.dataset.memberForm === 'deposit';
  const amount = Math.round(Number(fields.get('amount')) * 100);
  const account = member.accounts.find(item => item.id === fields.get('method'));
  if (!deposit && (!account || amount > member.balance)) return formError(form, 'Check your withdrawal account and available balance.');
  const method = deposit ? fields.get('method') : account.type;
  member.balance += deposit ? amount : -amount;
  member.transactions.unshift({ type: deposit ? 'Deposit' : 'Withdraw', amount, method, date: Date.now(), balance: member.balance });
  finishMemberAction(deposit ? 'Deposit completed' : 'Withdrawal completed', route() === 'my' ? `[data-action="member-${form.dataset.memberForm}"]` : 'main');
}

const actions = {
  close: () => dialog.close(),
  'member-deposit': button => openWallet('deposit', button),
  'member-withdraw': button => openWallet('withdraw', button),
  'member-add-account': button => {
    openDialog(`Add ${walletTab} Account`, memberForm('account', `
      <label>Account label <input name="name" maxlength="32" required placeholder="e.g. My sample account"></label>
      <label>Last 4 digits <input name="lastFour" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" required></label>`,
      'Save'), button, { description: 'Use sample account details.' });
    dialog.querySelector('form').dataset.accountType = walletTab;
  },
  'member-feedback-history': button => openDialog('Feedback History', member.feedback.length ?
    `<ul class="member-stack member-feedback-list">${member.feedback.map(entry => `<li class="card">
      <small>${memberDate.format(entry.date)}</small><p>${escapeText(entry.message)}</p>
      ${entry.images.map(image => `<img src="${image}" alt="Feedback attachment">`).join('')}
    </li>`).join('')}</ul>` : emptyMember('No feedback yet.'), button),
  'member-vip-details': button => openDialog('Level Details', `<dl class="dialog-details">
    <div><dt>Tier</dt><dd>${vipTier}</dd></div><div><dt>Level</dt><dd>${vipTier === 'Bronze' ? `L${vipLevel}` : 'Locked'}</dd></div>
    <div><dt>Current tier</dt><dd>Bronze</dd></div></dl>`, button),
  'member-logout': button => openDialog('Log Out', `<div class="dialog-actions">
    ${memberButton('Cancel', 'close')}${memberButton('Log Out', 'member-confirm-logout', 'primary')}</div>`, button),
  'member-confirm-logout': () => {
    member.signedIn = false;
    finishMemberAction('Logged out', '[data-action="member-login"]');
  },
  'member-login': () => {
    member.signedIn = true;
    finishMemberAction('Logged in', '.member-link');
  },
  'member-confirm-remove-account': button => {
    member.accounts = member.accounts.filter(account => account.id !== button.dataset.accountId);
    finishMemberAction('Account removed', '[data-action="member-add-account"]');
  },
  menu: button => openDialog('Menu',`<div class="dialog-menu">${navigation.map(([key,label]) => link(key,icon(key) + label)).join('')}${link('responsible',icon('shield') + 'Responsible Gaming')}</div>`,button, { drawer: route() === 'home' }),
  search: button => {
    openDialog('Search games','<label class="search-field">Game name<input type="search" id="search-games" placeholder="Search games"></label><div id="search-results"></div>',button);
    document.querySelector('#search-games').focus();
  },
  support: button => openDialog('Support',`<div class="dialog-menu">${link('responsible',icon('shield') + 'Responsible Gaming')}</div>`,button),
  'promo-spins': button => openDialog('My Free Spins', `
    <dl class="dialog-details"><div><dt>Available for use</dt><dd>0</dd></div><div><dt>Total winnings</dt><dd>₱0.00</dd></div></dl>
    ${accountTabs(spinTabs, spinTabs[0], 'spin-tab', 'Free Spin status')}
    <div class="empty" id="spin-content" aria-live="polite">${spinEmpty(spinTabs[0])}</div>`, button),
  balance: () => announce('Balance refreshed'),
  'clear-betting': () => {
    const input = document.querySelector('#betting');
    input.value = '0';
    validate(input);
    input.focus();
  },
  'cancel-settings': () => {
    draft = { ...limits };
    renderSettings();
    main.querySelector('[data-action="cancel-settings"]').focus();
  },
  'save-settings': button => {
    for (const input of main.querySelectorAll('#hours, #betting')) {
      if (validate(input)) continue;
      input.focus();
      return;
    }
    if (draft.bettingOn && !limits.bettingOn) {
      openDialog('Set daily betting limit', `
        ${bettingDialogDetails(draft.betting)}
        <div class="dialog-actions">
          <button type="button" class="secondary" data-action="close">Cancel</button>
          <button type="button" class="primary" data-action="confirm-settings">Confirm</button>
        </div>`, button, { symbol: 'shield', tone: 'accent', description: 'You can’t remove this limit until tomorrow.' });
    } else commitSettings();
  },
  'confirm-settings': () => {
    dialog.close();
    commitSettings();
  },
  'remove-betting': () => {
    if (!limits.bettingOn || Date.now() - limits.bettingSetAt < removalDelay) return;
    const update = { bettingOn: false, bettingSetAt: null, reachedUntil: null };
    save(update);
    Object.assign(draft, update);
    renderSettings();
    main.querySelector('[data-limit="bettingOn"]').focus();
  },
  'confirm-schedule': () => {
    if (scheduleDraft.start === scheduleDraft.end) {
      const error = document.querySelector('#schedule-error');
      error.textContent = 'Choose two different times.';
      error.hidden = false;
      return;
    }
    Object.assign(draft, scheduleDraft);
    const side = trigger.dataset.schedule;
    dialog.close();
    main.querySelector('.time-range').outerHTML = timeRange(draft);
    main.querySelector(`[data-schedule="${side}"]`).focus();
  },
};

document.addEventListener('click', event => {
  if (!event.target.closest('[data-game]')) clearPendingGame();
  if (event.target === dialog) {
    const { left, right, top, bottom } = dialog.getBoundingClientRect();
    if (event.clientX < left || event.clientX >= right || event.clientY < top || event.clientY >= bottom) dialog.close();
    return;
  }
  const button = event.target.closest('button, a[href^="#"]');
  if (!button) return;
  if (button.tagName === 'A') {
    if (button.matches('.coin-faq-link, .coin-balance')) coinReturn = route();
    if (dialog.open) dialog.close();
    return;
  }
  const data = button.dataset;
  if (data.action) { actions[data.action](button); return; }
  if (data.recordTab) {
    recordTab = data.recordTab;
    choice(button, 'record-tab');
    refreshMemberRecords();
  }
  if (data.walletTab) {
    walletTab = data.walletTab;
    choice(button, 'wallet-tab');
    document.querySelector('#wallet-accounts').innerHTML = walletAccounts();
  }
  if (data.removeAccount) {
    openDialog('Remove Account?', `<div class="dialog-actions">
      ${memberButton('Cancel', 'close')}${memberButton('Remove', 'member-confirm-remove-account', 'primary')}</div>`, button);
    dialog.querySelector('[data-action="member-confirm-remove-account"]').dataset.accountId = data.removeAccount;
  }
  if (data.vipTier) {
    vipTier = data.vipTier;
    vipLevel = 0;
    choice(button, 'vip-tier');
    document.querySelector('#vip-tier-content').innerHTML = vipTierContent();
  }
  if (data.vipLevel) {
    vipLevel = Number(data.vipLevel.slice(1));
    choice(button, 'vip-level');
    document.querySelector('#vip-progress-details').innerHTML = vipProgress();
  }
  if (data.vipRule) {
    const descriptions = {
      'Level Up Bonus': 'Available when you reach an eligible new VIP level.',
      'Birthday Bonus': 'Available to eligible members around their birthday.',
      'Semi-Monthly Bonus': 'Eligibility and rewards depend on your VIP tier and activity during each period.',
    };
    openDialog(data.vipRule, `<p class="dialog-note">${descriptions[data.vipRule]}</p>`, button);
  }
  if (data.skinTab) {
    skinTab = data.skinTab;
    choice(button, 'skin-tab');
    document.querySelector('#skin-options').innerHTML = skinChoices();
  }
  if (data.skin) {
    if (skinTab === 'Avatar Frame') member.frame = data.skin;
    else member.theme = data.skin;
    applyMemberTheme();
    choice(button, 'skin');
    finishMemberAction('Skin applied');
  }
  if (data.game !== undefined) { playGame(button); return; }
  if (data.promo !== undefined) {
    const offer = offers[Number(data.promo)];
    const [title, , , description, destination, label] = offer;
    openDialog(title, `${offerArt(offer)}<p class="dialog-note">${description}</p>
      <dl class="dialog-details"><div><dt>Ends</dt><dd>${promoDeadline}</dd></div></dl>
      <div class="dialog-actions">${link(destination, label, 'primary member-link')}</div>`, button);
  }
  if (data.depositSlide !== undefined) {
    depositSlide = Number(data.depositSlide);
    choice(button, 'deposit-slide');
    document.querySelector('#deposit-slide').innerHTML = depositBanner();
  }
  if (data.spinTab) {
    choice(button, 'spin-tab');
    document.querySelector('#spin-content').textContent = spinEmpty(data.spinTab);
  }
  if (data.hero !== undefined) showHero(Number(data.hero));
  if (data.ranking !== undefined && rankingTab !== Number(data.ranking)) {
    rankingTab = Number(data.ranking);
    choice(button, 'ranking');
    document.querySelector('#home-ranking-results').innerHTML = rankingResults();
  }
  if (data.homeCategory) {
    category = data.homeCategory;
    vendor = 'All';
    location.hash = paths.game;
  }
  if (data.category || data.vendor) {
    if (data.category && category !== data.category) {
      category = data.category;
      vendor = 'All';
      choice(button, 'category');
      const filters = main.querySelector('.filters');
      filters.innerHTML = gameVendors();
      filters.scrollLeft = 0;
    }
    if (data.vendor) {
      vendor = data.vendor;
      choice(button, 'vendor');
    }
    document.querySelector('#game-results').innerHTML = gameResults();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  if (data.coinTask === 'share') {
    openDialog('Share on Facebook', `<div class="dialog-actions"><a class="primary member-link"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.filbet.com%2Fs-points-v2"
      target="_blank" rel="noopener noreferrer">Open Facebook</a></div>`, button);
  } else if (data.coinTask) {
    category = data.coinTask;
    vendor = 'All';
    location.hash = paths.game;
  }
  if (data.coinHistory) {
    coinHistoryTab = data.coinHistory;
    choice(button, 'coin-history');
    main.querySelector('#coin-records').textContent = coinHistoryEmpty();
  }
  if (data.coinProduct !== undefined) {
    const product = coinProducts[Number(data.coinProduct)];
    openDialog(product.name, `<div class="coin-product-detail">${coinProductArt(product, 'eager')}
      <dl class="dialog-details">
        ${product.variant ? `<div><dt>Variant</dt><dd>${product.variant}</dd></div>` : ''}
        <div><dt>Cost</dt><dd>${formatCoins(product.cost)} Filcoins</dd></div>
        <div><dt>In stock</dt><dd>${formatCoins(product.stock)}</dd></div>
      </dl>
      <p class="dialog-note">${product.variant
        ? 'Physical rewards require shipping details and may be subject to taxes. Approved orders are processed within 30 working days.'
        : 'Game credits require 1× turnover before withdrawal.'}</p>
      <div class="dialog-actions"><button type="button" class="primary" disabled>Insufficient Points</button></div></div>`, button);
  }
  if (data.limit) {
    draft[data.limit] = !draft[data.limit];
    const card = button.closest('.limit-card');
    const updated = document.createRange().createContextualFragment(responsiblePage());
    card.replaceWith(updated.querySelector(`[aria-labelledby="${data.limit}-title"]`));
    main.querySelector(`[data-limit="${data.limit}"]`).focus();
  }
  if (data.step) {
    draft.hours = Math.max(1, Math.min(24, draft.hours + Number(data.step)));
    const input = document.querySelector('#hours');
    input.value = draft.hours;
    validate(input);
    if (button.disabled) input.focus();
  }
  if (data.schedule) openSchedule(data.schedule,button);
  if (data.side) {
    scheduleSide = data.side;
    updateScheduleFields(true);
  }
});

document.addEventListener('focusout', ({ target }) => {
  if (['hours', 'betting'].includes(target.id)) validate(target);
});

document.addEventListener('submit', event => {
  const form = event.target;
  const handler = memberSubmissions[form.dataset.memberForm];
  if (!handler) return;
  event.preventDefault();
  const error = form.querySelector('[data-form-error]');
  if (error) error.hidden = true;
  handler(form, new FormData(form));
});

document.addEventListener('change', ({ target }) => {
  if (target.id === 'record-filter' || target.id === 'record-period') refreshMemberRecords();
  if (target.dataset.coinFilter) {
    if (target.dataset.coinFilter === 'order') coinOrder = Number(target.value);
    else coinRange = Number(target.value);
    main.querySelector('#coin-products').innerHTML = coinMallResults();
    return;
  }
  if (target.dataset.timePart) {
    const part = name => Number(dialog.querySelector(`[data-time-part="${name}"]`).value);
    const pair = [part('hour') % 12 + part('period') * 12, part('minute')];
    scheduleDraft[scheduleSide] = pair.map(value => String(value).padStart(2,'0')).join(':');
    dialog.querySelector('.time-range').outerHTML = timeRange(scheduleDraft,true);
    dialog.querySelector('#schedule-error').hidden = true;
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && ['hours','betting'].includes(event.target.id)) event.target.blur();
});
document.addEventListener('input', ({ target }) => {
  if (target.name === 'message' && target.form?.dataset.memberForm === 'feedback') {
    document.querySelector('#feedback-count').textContent = `${target.value.length}/1000`;
  }
  if (target.id !== 'search-games') return;
  const query = target.value.trim().toLowerCase();
  const results = games.filter(([name]) => name.toLowerCase().includes(query));
  document.querySelector('#search-results').innerHTML = query ? (results.length ? tiles(results) : '<p>No matching games.</p>') : '';
});
reducedMotion.addEventListener('change', scheduleHero);
document.addEventListener('visibilitychange', scheduleHero);
dialog.addEventListener('close', () => {
  scheduleHero();
  if (!dialog.open && dialog.contains(document.activeElement)) trigger?.focus({ preventScroll: true });
});
window.addEventListener('hashchange', () => {
  clearPendingGame();
  if (dialog.open) dialog.close();
  render(true);
});
setInterval(refreshBettingStatus, 250);
render();
