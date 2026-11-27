const paths = {
  home: '/', game: '/game', promos: '/promos', filcoin: '/filcoin',
  my: '/my', responsible: '/my/responsible-gaming',
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
  spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>',
};
const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
const link = (name, text, classes = '') => `<a class="${classes}" href="#${paths[name]}">${text}</a>`;
const iconButton = (symbol, label, action) => `<button type="button" class="icon-button" aria-label="${label}" data-action="${action}">${icon(symbol)}</button>`;
const games = [
  ['Orbit Gold','Studio A','Slot'], ['Paper Phoenix','Studio B','Slot'], ['Amethyst Vault','Studio C','Slot'], ['Jade Current','Studio B','Fishing'],
  ['Temple Bell','Studio A','Live'], ['Aurora Circuit','Studio C','Table'], ['Pocket Arcade','Studio B','Arcade'], ['Blue Lantern','Studio A','Bingo'],
  ['Orbit Gold II','Studio A','Slot',0], ['Crimson Flight','Studio B','Slot',1], ['Violet Vault','Studio C','Slot',2], ['Jade Fortune','Studio B','Slot',3],
  ['Golden Echo','Studio A','Slot',4], ['Aurora Shift','Studio C','Slot',5], ['Neon Pocket','Studio B','Slot',6], ['Lantern Nights','Studio A','Slot',7],
  ['Aurora League','Studio C','Sport',5],
];
const promos = [
  ['Featured Rewards', 0, 'Daily'],
  ['Welcome Rewards', 1, 'Welcome'],
  ['VIP Rewards', 4, 'VIP'],
];
const promoFilters = ['All', 'Daily', 'Welcome', 'VIP'];
const categories = ['Slot','Live','Table','Arcade','Bingo','Fishing','Sport'];
const categoryIcons = ['spark','filcoin','list','game','promos','spark','game'];
const vendors = ['All','Studio A','Studio B','Studio C'];
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
let coinTab = 'Earn Filcoins';
let promoFilter = 'All';
let heroIndex = 0;
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

function tiles(entries) {
  return `<div class="game-grid">${entries.map(entry => {
    const [name, studio, , art = games.indexOf(entry)] = entry;
    return `<button type="button" class="game-tile" data-game="${games.indexOf(entry)}">
      <span class="game-cover art art-${art}" aria-hidden="true"></span><strong>${name}</strong><small>${studio}</small>
    </button>`;
  }).join('')}</div>`;
}

function homePage() {
  const [title, , group] = promos[heroIndex];
  return `<div class="hero" data-feature="${group}">
    <div class="hero-copy"><h1>${title}</h1>${link('promos','View promos ' + icon('next'),'primary hero-link')}</div>
    <div class="hero-dots" role="group" aria-label="Featured promos">${promos.map(([label], index) => `<button type="button" data-hero="${index}" aria-label="${label}" aria-pressed="${index === heroIndex}"></button>`).join('')}</div>
  </div>
  <section class="featured-strip"><div class="section-heading"><h2>Featured Games</h2>${link('game','View all ' + icon('next'))}</div>${tiles(games.slice(0,8))}</section>
  <div class="destination-grid">
    ${[['game','Game'], ['promos','Promos']].map(([key,label]) => link(key,
      `<span>${icon(key)} ${label}</span><span class="destination-art" aria-hidden="true">${icon(key)}</span>`,
      'destination-card')).join('')}
  </div>
  <section class="card reward-card"><h2>${icon('promos')} Daily Rewards</h2>
    <div class="reward-grid">${[[1,2],[5,5],[20,10]].map(([credit,spin]) => `<div><strong>${credit} <span>${credit === 1 ? 'Credit' : 'Credits'}</span></strong><small>${spin} Free Spins</small></div>`).join('')}</div>
  </section>
  <section><div class="section-heading"><h2>Hot Games</h2></div>${tiles(games.slice(4,8))}</section>
  <section class="card"><h2>Leaderboard</h2><ol class="ranking">
    <li><span>Player 014</span><strong>13,900</strong></li><li><span>Player 028</span><strong>9,870</strong></li><li><span>Player 052</span><strong>5,550</strong></li>
  </ol></section>`;
}

function gameResults() {
  const entries = games.filter(entry => entry[2] === category && (vendor === 'All' || entry[1] === vendor));
  return `<div class="section-heading"><h2>${category}</h2><small>${entries.length} ${entries.length === 1 ? 'game' : 'games'}</small></div>
  ${entries.length ? tiles(entries) : '<div class="empty">No games match these filters.</div>'}`;
}

function gamePage() {
  return `<div class="hero catalog-hero"><div class="hero-copy"><h1>Game</h1></div></div>
  <button type="button" class="catalog-search" data-action="search">${icon('search')} Search games</button>
  <div class="scroll-row categories" role="group" aria-label="Game categories">${categories.map((name,index) => `<button type="button" data-category="${name}" aria-pressed="${category === name}">${icon(categoryIcons[index])}${name}</button>`).join('')}</div>
  <div class="scroll-row filters" role="group" aria-label="Game studios">${vendors.map(name => `<button type="button" data-vendor="${name}" aria-pressed="${vendor === name}">${name}</button>`).join('')}</div>
  <section id="game-results" aria-live="polite">${gameResults()}</section>`;
}

function promoResults() {
  return promos.map(([title, art, group], index) => promoFilter === 'All' || promoFilter === group ? `
    <button type="button" class="promo-card" data-promo="${index}">
      <strong>${title}</strong><span class="promo-cover art art-${art}" aria-hidden="true"></span>${icon('next')}
    </button>` : '').join('');
}

function promosPage() {
  return `<h1 class="page-title">Promos</h1>
  <div class="scroll-row underline-tabs" role="group" aria-label="Promo categories">${promoFilters.map(label => `<button type="button" data-promo-filter="${label}" aria-pressed="${promoFilter === label}">${label}</button>`).join('')}</div>
  <section class="promo-list" id="promo-results" aria-label="Offers" aria-live="polite">${promoResults()}</section>
  <div class="summary"><div><small>My Filcoin</small><strong>70</strong></div><div><small>My Free Spin</small><strong>0</strong></div>${link('filcoin',icon('next') + '<span class="sr-only">Open Filcoin</span>','icon-button summary-link')}</div>`;
}

function filcoinPage() {
  return `<h1 class="page-title">Filcoin</h1>
  <div class="segmented" role="group" aria-label="Filcoin view">${['Earn Filcoins','Filcoins Mall'].map(label => `<button type="button" data-coin="${label}" aria-pressed="${coinTab === label}">${label}</button>`).join('')}</div>
  <div class="coin-hero"><div><small>My Filcoins</small><strong>70</strong></div><span class="coin-medal">${icon('filcoin')}</span></div>
  <section class="card" id="coin-content">${coinContent()}</section>`;
}

function coinContent() {
  if (coinTab === 'Filcoins Mall') {
    return `${[['Reward Pack',100],['Spin Pack',250]].map(([label,amount]) => `<div class="task row"><span class="row-icon">${icon('promos')}</span><div><strong>${label}</strong><small>${amount} Filcoins</small></div><button type="button" class="secondary" disabled>Redeem</button></div>`).join('')}`;
  }
  return `<div class="section-heading"><h2>Daily Tasks</h2><small class="points">1,290 points available</small></div>
  ${[['Explore Slot Games','0 / 3'],['Explore Live Games','0 / 1'],['View daily rewards','0 / 1']].map(([label,progress],index) => `<div class="task row"><span class="row-icon">${icon(index === 2 ? 'promos' : 'game')}</span><div><strong>${label}</strong><small>${progress}</small></div><button type="button" class="secondary" data-task="${index}">Go<span class="sr-only"> to ${label}</span></button></div>`).join('')}`;
}

const accountRows = [['list','News'],['spark','About Filbet'],['chat','Feedback'],['my','Skins'],['shield','Responsible Gaming']];

function myPage() {
  return `<section class="profile row" aria-label="Member profile">
    <span class="avatar">${icon('my')}</span>
    <div><strong>Member</strong><small>Member ID · 000001</small></div>
  </section>
  <section class="vip card"><div class="row"><h2>Bronze <span>VIP 0</span></h2><button type="button" class="text-button" data-info="VIP Center">VIP Center ${icon('next')}</button></div>
    <div class="vip-progress"><progress value="0" max="1500" aria-label="VIP upgrade progress"></progress><small>0 / 1,500 XP</small></div>
  </section>
  <section class="wallet" aria-labelledby="wallet-title">
    <div class="row wallet-heading"><span class="wallet-symbol">${icon('filcoin')}</span><h2 id="wallet-title">Total Balance</h2>
      <strong>₱0.00</strong>${iconButton('history','Refresh balance','balance')}
    </div>
    <div class="card wallet-panel">
      <div class="wallet-actions"><button type="button" class="primary" data-info="Deposit">${icon('plus')}Deposit</button><button type="button" class="secondary" data-info="Withdraw">${icon('wallet')}Withdraw</button></div>
      <div class="shortcuts">${[['list','Transaction'],['history','Bet History'],['promos','Bonus'],['wallet','Account']].map(([symbol,label]) => `<button type="button" data-info="${label}">${icon(symbol)}<span>${label}</span></button>`).join('')}</div>
    </div>
  </section>
  <section class="card settings-list" aria-label="Account settings">
    <button type="button" class="setting-row verify" data-info="KYC Verification"><span class="row-icon">${icon('shield')}</span><span>KYC Verification</span><span class="row-action">Verify now</span><span class="setting-arrow">${icon('next')}</span></button>
    ${accountRows.map(([symbol,label]) => {
      const content = `<span class="row-icon">${icon(symbol)}</span><span>${label}</span><span class="setting-arrow">${icon('next')}</span>`;
      return label === 'Responsible Gaming' ? link('responsible',content,'setting-row') : `<button type="button" class="setting-row" data-info="${label}">${content}</button>`;
    }).join('')}
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

const pages = { home: homePage, game: gamePage, promos: promosPage, filcoin: filcoinPage, my: myPage, responsible: responsiblePage };
nav.innerHTML = navigation.map(([key,label]) => `<a href="#${paths[key]}" data-route="${key}"><span>${icon(key)}</span>${label}</a>`).join('');
history.scrollRestoration = 'manual';

function render(moveFocus = false) {
  const current = route();
  const active = current === 'responsible' ? 'my' : current;
  document.title = `FB_Mobile · ${current === 'responsible' ? 'Responsible Gaming' : navigation.find(([key]) => key === active)[1]}`;
  const accountPage = current === 'my' || current === 'responsible';
  header.className = accountPage ? 'topbar subbar' : 'topbar';
  if (current === 'responsible') {
    header.innerHTML = `${link('my',icon('back') + '<span class="sr-only">Back to My</span>','icon-button back')}<h1>Responsible Gaming</h1>`;
  } else if (current === 'my') {
    header.innerHTML = `${iconButton('menu','Menu','menu')}<h1>My</h1>
      <div class="top-actions">${iconButton('search','Search games','search')}${iconButton('support','Support','support')}</div>`;
  } else {
    header.innerHTML = `${iconButton('menu','Menu','menu')}${link('home','<span class="brand-mark" aria-hidden="true">F</span><span>FB<span class="brand-name"> Mobile</span></span>','brand')}
      <div class="top-actions"><button type="button" class="balance" data-info="Deposit" aria-label="Wallet balance, 0 pesos">${icon('wallet')} <span>₱0.00</span></button>
      ${iconButton('search','Search games','search')}${iconButton('support','Support','support')}</div>`;
  }
  main.dataset.page = current;
  if (current === 'responsible') {
    draft = { ...limits };
    renderSettings();
  } else main.innerHTML = pages[current]();
  for (const item of nav.querySelectorAll('[data-route]')) {
    if (item.dataset.route === active) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  }
  if (moveFocus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
}

function openDialog(title, content, opener, { symbol, tone = 'neutral', description } = {}) {
  trigger = opener;
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
  const [name, studio, , art = index] = games[index];
  openDialog(name,`<div class="detail-art art art-${art}"></div><small class="detail-meta">${studio}</small>`,opener);
}

const actions = {
  close: () => dialog.close(),
  menu: button => openDialog('Menu',`<div class="dialog-menu">${navigation.map(([key,label]) => link(key,icon(key) + label)).join('')}${link('responsible',icon('shield') + 'Responsible Gaming')}</div>`,button),
  search: button => {
    openDialog('Search games','<label class="search-field">Game name<input type="search" id="search-games" placeholder="Search games"></label><div id="search-results"></div>',button);
    document.querySelector('#search-games').focus();
  },
  support: button => openDialog('Support',`<div class="dialog-menu">${link('responsible',icon('shield') + 'Responsible Gaming')}</div>`,button),
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
    if (dialog.open) dialog.close();
    return;
  }
  const data = button.dataset;
  if (data.action) { actions[data.action](button); return; }
  if (data.info) openDialog(data.info,'<small>Unavailable</small>',button);
  if (data.game !== undefined) { playGame(button); return; }
  if (data.promo !== undefined) {
    const [title, art] = promos[Number(data.promo)];
    openDialog(title,`<div class="detail-art art art-${art}"></div>`,button);
  }
  if (data.hero !== undefined) {
    heroIndex = Number(data.hero);
    main.querySelector('.hero').dataset.feature = promos[heroIndex][2];
    main.querySelector('.hero h1').textContent = promos[heroIndex][0];
    choice(button, 'hero');
  }
  if (data.category || data.vendor) {
    if (data.category) { category = data.category; choice(button,'category'); }
    if (data.vendor) { vendor = data.vendor; choice(button,'vendor'); }
    document.querySelector('#game-results').innerHTML = gameResults();
  }
  if (data.promoFilter) {
    promoFilter = data.promoFilter;
    choice(button,'promo-filter');
    document.querySelector('#promo-results').innerHTML = promoResults();
  }
  if (data.coin) {
    coinTab = data.coin;
    choice(button,'coin');
    document.querySelector('#coin-content').innerHTML = coinContent();
  }
  if (data.task !== undefined) {
    category = data.task === '1' ? 'Live' : 'Slot';
    vendor = 'All';
    location.hash = data.task === '2' ? paths.home : paths.game;
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

document.addEventListener('change', ({ target }) => {
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
  if (target.id !== 'search-games') return;
  const query = target.value.trim().toLowerCase();
  const results = games.filter(([name]) => name.toLowerCase().includes(query));
  document.querySelector('#search-results').innerHTML = query ? (results.length ? tiles(results) : '<p>No matching games.</p>') : '';
});
dialog.addEventListener('close', () => {
  if (!dialog.open && dialog.contains(document.activeElement)) trigger?.focus({ preventScroll: true });
});
window.addEventListener('hashchange', () => {
  clearPendingGame();
  if (dialog.open) dialog.close();
  render(true);
});
setInterval(refreshBettingStatus, 250);
render();
