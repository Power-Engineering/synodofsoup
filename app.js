// ============================================================
//  CREED & CONTROVERSY — App Logic
// ============================================================

// ── Supabase init ─────────────────────────────────────────
const CONFIGURED = SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE';
let sb = null;
if (CONFIGURED) {
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  document.getElementById('config-banner').classList.add('hidden');
}

// ── Topic data ────────────────────────────────────────────
const TOPICS = [
  {
    id: 'tongues', icon: '🔥', name: 'Speaking in tongues',
    controversy: 92,
    desc: 'Whether the charismatic gift of glossolalia is a sign of Spirit baptism, an ongoing gift for today, or a closed apostolic phenomenon.',
    denominations: [
      { name: 'Pentecostal', stance: 'affirm', badge: 'Essential sign', position: 'Initial physical evidence of Spirit baptism. Every believer can and should speak in tongues as a normative experience.' },
      { name: 'Charismatic / Renewal', stance: 'affirm', badge: 'Ongoing gift', position: 'A valid and desirable gift available today, but not required as the sole sign of Spirit baptism.' },
      { name: 'Baptist (SBC)', stance: 'nuanced', badge: 'Cessationist', position: 'Most hold that tongues ceased with the apostolic age. A minority are open to the gift but emphasise order and discernment.' },
      { name: 'Presbyterian / Reformed', stance: 'deny', badge: 'Cessationist', position: 'The Westminster Confession holds extraordinary gifts have ceased. Tongues are not normative for the church today.' },
      { name: 'Roman Catholic', stance: 'nuanced', badge: 'Permitted, cautious', position: 'Officially open to charismatic gifts within the Church, but tongues are not required and must be exercised under pastoral oversight.' },
      { name: 'Eastern Orthodox', stance: 'nuanced', badge: 'Historical, rare', position: 'Tongues are acknowledged in patristic sources but not regarded as an expected ordinary gift. Emphasis is on liturgical worship.' },
      { name: 'Lutheran (LCMS)', stance: 'deny', badge: 'Cessationist', position: 'Extraordinary sign gifts served the apostolic era to confirm the gospel. They are not promised to the ongoing Church.' },
      { name: 'Anglican / Episcopal', stance: 'varies', badge: 'Divided', position: 'Wide spectrum — conservative Anglicans are cessationist; charismatic Anglicans actively practice tongues.' },
    ]
  },
  {
    id: 'baptism', icon: '💧', name: 'Baptism',
    controversy: 95,
    desc: 'Who should be baptised, how, and what it effects — one of the oldest and most divisive questions in Christian history.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Sacrament / regeneration', position: 'Baptism is necessary for salvation (ordinarily). It removes original sin and regenerates the soul. Infants are baptised.' },
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'Sacrament / triple immersion', position: 'Baptism by triple immersion is the norm. It unites the believer to Christ\'s death and resurrection and is necessary for salvation.' },
      { name: 'Lutheran', stance: 'affirm', badge: 'Sacrament / infant included', position: 'Baptism is a means of grace that conveys forgiveness and regeneration. Infant baptism is practiced and defended.' },
      { name: 'Anglican / Episcopal', stance: 'affirm', badge: 'Sacrament, varied mode', position: 'Baptism is a sacrament initiating the believer into the Church. Infant baptism is standard; sprinkling and pouring are accepted.' },
      { name: 'Presbyterian / Reformed', stance: 'nuanced', badge: 'Covenant sign', position: 'Baptism is the covenant sign replacing circumcision. It does not automatically regenerate. Infants of believers are baptised.' },
      { name: 'Baptist', stance: 'deny', badge: 'Believer\'s baptism only', position: 'Only professing believers should be baptised, by full immersion. Baptism is an ordinance symbolising death and resurrection with Christ.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Believer\'s, by immersion', position: 'Believer\'s baptism by immersion. Some Oneness Pentecostals baptise "in Jesus\'s name only" and hold baptism essential for salvation.' },
      { name: 'Anabaptist / Mennonite', stance: 'deny', badge: 'Believers only, symbolic', position: 'Rejected infant baptism as the core conviction of the Radical Reformation. Baptism follows personal faith.' },
    ]
  },
  {
    id: 'eucharist', icon: '🍞', name: 'The Eucharist',
    controversy: 93,
    desc: 'Whether Christ is truly present in the bread and wine, and if so, how — from transubstantiation to bare memorial.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Transubstantiation', position: 'The substance of bread and wine is wholly converted into Christ\'s body and blood. The Real Presence is corporeal. The Mass is a sacrifice.' },
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'Real presence / mystery', position: 'The bread and wine truly become Christ\'s body and blood through the epiclesis. The exact mechanics are a holy mystery.' },
      { name: 'Lutheran', stance: 'affirm', badge: 'Sacramental union', position: 'Christ\'s body and blood are truly present "in, with, and under" the bread and wine (not instead of them).' },
      { name: 'Anglican / Episcopal', stance: 'varies', badge: 'Broad — real to memorial', position: 'High-church Anglicans affirm real presence; evangelicals affirm spiritual presence or memorialism. Deliberately ambiguous.' },
      { name: 'Presbyterian / Reformed', stance: 'nuanced', badge: 'Spiritual real presence', position: 'Christ is spiritually and truly present to faith in the Supper (Calvin\'s view), but not bodily. Elements remain bread and wine.' },
      { name: 'Baptist', stance: 'deny', badge: 'Memorial ordinance', position: 'The Lord\'s Supper is a memorial commemorating Christ\'s death. No change occurs in the elements. It is not a sacrament.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Memorial / symbolic', position: 'Communion is symbolic and memorial. Focus is on personal remembrance and spiritual renewal.' },
      { name: 'Anabaptist / Mennonite', stance: 'deny', badge: 'Community memorial', position: 'A communal act of remembrance and pledge of mutual accountability. The meaning is relational and ethical.' },
    ]
  },
  {
    id: 'salvation', icon: '✝️', name: 'Salvation & election',
    controversy: 90,
    desc: 'Whether God unconditionally predestines individuals to salvation, or whether human free will cooperates with grace — the Reformed vs. Arminian fault line.',
    denominations: [
      { name: 'Presbyterian / Reformed', stance: 'affirm', badge: 'Calvinist / TULIP', position: 'God unconditionally elects individuals for salvation apart from foreseen faith. Irresistible grace and perseverance of the saints follow.' },
      { name: 'Lutheran', stance: 'nuanced', badge: 'Single predestination', position: 'God elects the saved but does not predestine the damned. Salvation is by grace through faith alone; the Lutheran tradition resists double predestination.' },
      { name: 'Roman Catholic', stance: 'nuanced', badge: 'Synergism', position: 'Salvation requires both divine grace and human cooperation. The Council of Trent rejected Luther\'s sola fide and affirmed merit.' },
      { name: 'Eastern Orthodox', stance: 'nuanced', badge: 'Theosis / synergism', position: 'Salvation (theosis — participation in divine life) is a lifelong cooperative process. Penal substitution is de-emphasised.' },
      { name: 'Baptist (General)', stance: 'deny', badge: 'Arminian', position: 'God foreknew but did not unconditionally predestine. Christ died for all. Humans can resist grace and lose salvation.' },
      { name: 'Methodist / Wesleyan', stance: 'deny', badge: 'Arminian / prevenient grace', position: 'Prevenient grace enables all people to respond. Election is conditional on foreseen faith. Believers can apostatise.' },
      { name: 'Anglican / Episcopal', stance: 'varies', badge: 'Divided tradition', position: 'The 39 Articles lean Calvinist, but Arminian and Wesleyan streams are strong. No enforced position.' },
      { name: 'Pentecostal', stance: 'varies', badge: 'Mostly Arminian', position: 'Most Pentecostals are Arminian — salvation available to all, can be lost. Some Calvinist Pentecostals exist.' },
    ]
  },
  {
    id: 'papacy', icon: '👑', name: 'Papal authority',
    controversy: 89,
    desc: 'Whether the Bishop of Rome holds universal jurisdiction and can speak infallibly on matters of faith and morals.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Full primacy & infallibility', position: 'The Pope is the Vicar of Christ with supreme jurisdiction. Ex cathedra definitions on faith and morals are infallible (defined 1870).' },
      { name: 'Eastern Orthodox', stance: 'deny', badge: 'Rejects jurisdiction', position: 'The Bishop of Rome has primacy of honor (first among equals) but no universal jurisdiction. Infallibility is rejected.' },
      { name: 'Anglican / Episcopal', stance: 'deny', badge: 'Rejects papal jurisdiction', position: 'The break with Rome under Henry VIII rejected papal authority. The monarch is the symbolic head of the national church.' },
      { name: 'Lutheran', stance: 'deny', badge: 'Antichrist (historical)', position: 'The Lutheran confessions identify the papacy as the Antichrist — a doctrinal claim. The office is seen as unscriptural.' },
      { name: 'Presbyterian / Reformed', stance: 'deny', badge: 'Strongly rejected', position: 'Reformed theology rejects all claims of a human head of the Church. Christ alone is Head. Papacy usurps His authority.' },
      { name: 'Baptist', stance: 'deny', badge: 'Rejected', position: 'No human office or institution holds authority over the local church or individual conscience. Baptist polity is congregational.' },
      { name: 'Methodist', stance: 'deny', badge: 'Rejected', position: 'Methodism rejects papal primacy and infallibility, remaining committed to Scripture and conciliar authority.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Rejected', position: 'Pentecostals universally reject papal authority. Many early Pentecostals saw Catholicism as part of apostate Christendom.' },
    ]
  },
  {
    id: 'icons', icon: '🖼️', name: 'Icons & images',
    controversy: 88,
    desc: 'Whether the veneration of icons, statues, and sacred images is legitimate devotion or a violation of the Second Commandment.',
    denominations: [
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'Theologically required', position: 'Icons are windows into heaven. Veneration was dogmatically defined at the Seventh Ecumenical Council (787 AD). Iconoclasm is heresy.' },
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Permitted & encouraged', position: 'Statues and images are aids to devotion. A distinction is drawn between latria (worship, for God alone) and dulia (veneration, for saints).' },
      { name: 'Lutheran', stance: 'nuanced', badge: 'Permitted, not venerated', position: 'Luther retained images as didactic tools but rejected veneration. Images may be used; they must not become objects of devotion.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'Varies by tradition', position: 'High-church Anglicans permit imagery; low-church and Reformed Anglicans are suspicious of images in worship.' },
      { name: 'Presbyterian / Reformed', stance: 'deny', badge: 'Strongly rejected', position: 'The Regulative Principle holds that only what Scripture commands is permitted. Images of Christ and the Trinity are forbidden.' },
      { name: 'Baptist', stance: 'deny', badge: 'Rejected', position: 'Images in worship are rejected as temptations toward idolatry. Churches are typically plain to emphasise Scripture alone.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Generally rejected', position: 'Emphasis on Spirit and Word. Physical images are seen as distracting from genuine spiritual encounter.' },
      { name: 'Anabaptist / Mennonite', stance: 'deny', badge: 'Rejected', position: 'Plain tradition rejects all religious imagery. Worship is simple, focused on Scripture, community, and the Spirit.' },
    ]
  },
  {
    id: 'saints', icon: '🙏', name: 'Praying to saints',
    controversy: 84,
    desc: 'Whether deceased saints in heaven can intercede for the living, and whether it is appropriate to address prayers to them.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Encouraged', position: 'Saints intercede before God. Asking for their intercession is not "worshipping" them but asking fellow members of the Church to pray.' },
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'Central to devotion', position: 'Veneration of saints and seeking their intercessions is a core feature of Orthodox piety. The saints are part of the living Church.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'Divided', position: 'High-church Anglicans retain prayers for saints; evangelical/low-church Anglicans reject this as unscriptural.' },
      { name: 'Lutheran', stance: 'deny', badge: 'Rejected as intercessors', position: 'Saints may be honoured as examples of faith, but Scripture provides no basis for addressing prayers to them.' },
      { name: 'Presbyterian / Reformed', stance: 'deny', badge: 'Firmly rejected', position: 'Prayer to saints obscures Christ\'s sole mediatorship. The Heidelberg Catechism explicitly condemns it.' },
      { name: 'Baptist', stance: 'deny', badge: 'Rejected', position: 'No warrant in Scripture for praying to the dead. Christ is the sole mediator.' },
      { name: 'Methodist', stance: 'deny', badge: 'Generally rejected', position: 'Methodism honours saints as models but does not practice invocation. Christ\'s mediation is considered sufficient.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Firmly rejected', position: 'Praying to saints is seen as spiritually dangerous — equivalent to seeking communication with the dead.' },
    ]
  },
  {
    id: 'scripture', icon: '📖', name: 'Scripture & tradition',
    controversy: 87,
    desc: 'Whether the Bible alone (sola scriptura) is the supreme authority, or whether Church tradition carries independent authority.',
    denominations: [
      { name: 'Roman Catholic', stance: 'deny', badge: 'Scripture + Tradition + Magisterium', position: 'Scripture, Sacred Tradition, and the Magisterium form a single source of divine revelation. The Church\'s interpretation is authoritative.' },
      { name: 'Eastern Orthodox', stance: 'deny', badge: 'Holy Tradition encompasses Scripture', position: 'Scripture is part of Holy Tradition, not above it. The Church produced and interprets Scripture. The seven Councils are binding.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'Scripture primary, tradition secondary', position: 'The Chicago-Lambeth Quadrilateral affirms Scripture as the ultimate rule of faith. Tradition and reason are honoured but subordinate.' },
      { name: 'Lutheran', stance: 'affirm', badge: 'Sola scriptura', position: 'Scripture alone is the norma normans of all doctrine. Tradition and confessions have authority only insofar as they accord with Scripture.' },
      { name: 'Presbyterian / Reformed', stance: 'affirm', badge: 'Sola scriptura, strict form', position: 'The Westminster Confession affirms the Bible as the only infallible rule of faith. The Regulative Principle applies this to worship.' },
      { name: 'Baptist', stance: 'affirm', badge: 'Bible alone', position: 'Most Baptists affirm sola scriptura strongly. Many are wary even of confessions. "No creed but the Bible" is a common slogan.' },
      { name: 'Pentecostal', stance: 'affirm', badge: 'Sola scriptura + Spirit', position: 'The Bible is the final authority. Pentecostals also emphasise the Spirit\'s illumination as a live, present voice.' },
      { name: 'Methodist', stance: 'nuanced', badge: 'Wesleyan Quadrilateral', position: 'Scripture is primary, but interpreted through tradition, reason, and experience (the Wesleyan Quadrilateral).' },
    ]
  },
  {
    id: 'purgatory', icon: '⏳', name: 'Purgatory',
    controversy: 82,
    desc: 'Whether there is an intermediate state of purification after death for those who die in God\'s grace but are not yet fully purified.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Defined doctrine', position: 'Purgatory is an intermediate state where temporal punishments for sin are purged. Defined at Florence (1439) and Trent (1563).' },
      { name: 'Eastern Orthodox', stance: 'nuanced', badge: 'Prayers for dead, no purgatory', position: 'Orthodoxy prays for the faithful departed but rejects the Western juridical concept of purgatory and treasury of merits.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'Prayers allowed, purgatory rejected', position: 'The 39 Articles reject the "Romish doctrine of Purgatory." Some Anglicans pray for the dead.' },
      { name: 'Lutheran', stance: 'deny', badge: 'Rejected', position: 'Luther attacked indulgences (tied to purgatory) as his opening salvo in the Reformation. No purgatory — the dead await resurrection.' },
      { name: 'Presbyterian / Reformed', stance: 'deny', badge: 'Firmly rejected', position: 'Justification is by faith alone. There is no need for post-mortem purification. At death, the believer goes directly to God\'s presence.' },
      { name: 'Baptist', stance: 'deny', badge: 'Rejected', position: 'No biblical basis for purgatory. Salvation is complete; the believer goes to be with Christ at death.' },
      { name: 'Methodist', stance: 'deny', badge: 'Generally rejected', position: 'Methodist theology holds that sanctification is completed at death. Purgatory as a place of punishment is rejected.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Rejected', position: 'Purgatory is regarded as a Catholic tradition without scriptural support.' },
    ]
  },
  {
    id: 'hell', icon: '⚠️', name: 'Hell & eternal punishment',
    controversy: 83,
    desc: 'Whether hell involves eternal conscious torment, annihilation, or whether universal reconciliation is possible.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Eternal conscious separation', position: 'Hell is a state of eternal separation from God, chosen freely by those who die in grave sin. The Catechism affirms eternal punishment.' },
      { name: 'Eastern Orthodox', stance: 'nuanced', badge: 'Eternal, varied views', position: 'Orthodox affirm eternal consequences. Some theologians hold hope for universal salvation (apocatastasis) — a minority but respected position.' },
      { name: 'Lutheran', stance: 'affirm', badge: 'Eternal conscious torment', position: 'The Lutheran confessions affirm eternal punishment for the unrepentant. Hell is real and involves separation from God.' },
      { name: 'Presbyterian / Reformed', stance: 'affirm', badge: 'Eternal conscious torment', position: 'The Westminster Confession affirms the wicked are cast into eternal torment. Double predestination is confessionally affirmed.' },
      { name: 'Anglican / Episcopal', stance: 'varies', badge: 'Wide range of views', position: 'Anglican theology permits annihilationism alongside eternal torment. Some Anglicans hold universalist hopes. No binding definition.' },
      { name: 'Baptist', stance: 'affirm', badge: 'Eternal conscious torment', position: 'Traditional Baptist theology strongly affirms eternal conscious punishment. Annihilationism is a minority view among progressive Baptists.' },
      { name: 'Methodist', stance: 'nuanced', badge: 'Eternal, hopeful tone', position: 'Wesley affirmed hell but emphasised God\'s desire for all to be saved. Some Methodist theologians hold annihilationist or universalist views.' },
      { name: 'Pentecostal', stance: 'affirm', badge: 'Eternal conscious torment', position: 'Hell is real, eternal, and involves conscious suffering. Urgency of evangelism in Pentecostalism is driven partly by this conviction.' },
    ]
  },
  {
    id: 'mary', icon: '❤️', name: 'The Virgin Mary',
    controversy: 86,
    desc: 'Mary\'s perpetual virginity, Immaculate Conception, bodily Assumption, and her role as intercessor.',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'Four Marian dogmas', position: 'Theotokos (431), Perpetual Virginity, Immaculate Conception (1854), and Bodily Assumption (1950) are defined dogmas.' },
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'Theotokos, perpetual virgin', position: 'Mary is the Theotokos and the greatest of saints. The Immaculate Conception is rejected as a Western innovation.' },
      { name: 'Lutheran', stance: 'nuanced', badge: 'Theotokos, honored example', position: 'Luther honoured Mary and held to perpetual virginity. Modern Lutheranism typically stops at Theotokos.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'Theotokos affirmed, dogmas disputed', position: 'Mary as Theotokos is affirmed. The Immaculate Conception and Assumption are not required beliefs.' },
      { name: 'Presbyterian / Reformed', stance: 'deny', badge: 'Theotokos only', position: 'Mary is honoured as the mother of the incarnate Christ. All further Marian dogmas are rejected as unscriptural.' },
      { name: 'Baptist', stance: 'deny', badge: 'Mother of Jesus, no special status', position: 'Mary is respected as the mother of Jesus but holds no special intercessory role. The Marian dogmas are rejected.' },
      { name: 'Methodist', stance: 'deny', badge: 'Honored, not venerated', position: 'Mary is a model of faith but not venerated. The Marian dogmas are not affirmed.' },
      { name: 'Pentecostal', stance: 'deny', badge: 'Mother of Jesus, no veneration', position: 'Mary is the mother of Jesus and a believer, but holds no special status. Marian devotion is typically viewed as idolatrous.' },
    ]
  },
  {
    id: 'church_state', icon: '🏛️', name: 'Church & state',
    controversy: 78,
    desc: 'Whether the church should have a formal relationship with civil government, from established churches to strict separation.',
    denominations: [
      { name: 'Roman Catholic', stance: 'nuanced', badge: 'Social teaching / subsidiarity', position: 'Catholic social teaching engages the state through natural law arguments. Modern popes affirm religious freedom.' },
      { name: 'Eastern Orthodox', stance: 'nuanced', badge: 'Symphonia ideal', position: 'The Byzantine ideal of symphonia — harmonious cooperation between church and state — remains influential.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'Established church (UK)', position: 'The Church of England is legally established. The Episcopal Church (USA) supports separation of church and state.' },
      { name: 'Lutheran', stance: 'nuanced', badge: 'Two-kingdoms doctrine', position: 'Luther\'s two-kingdoms doctrine distinguishes the spiritual kingdom (church) from the temporal kingdom (state).' },
      { name: 'Presbyterian / Reformed', stance: 'nuanced', badge: 'Transformationalist / Kuyperian', position: 'Kuyper\'s neo-Calvinism holds every sphere of life belongs to Christ. The state must acknowledge God\'s lordship.' },
      { name: 'Baptist', stance: 'affirm', badge: 'Strict separation', position: 'Baptists historically championed soul liberty and separation of church and state (Roger Williams, John Leland).' },
      { name: 'Anabaptist / Mennonite', stance: 'deny', badge: 'Radical separation', position: 'The church is a voluntary counter-cultural community. Anabaptists reject state establishment and have refused military service.' },
      { name: 'Pentecostal', stance: 'varies', badge: 'Varies widely', position: 'Historically apolitical. Since the 1970s–80s many Pentecostals (especially in the US) became politically active.' },
    ]
  },
];

// ── State ─────────────────────────────────────────────────
let currentUser = null;
let currentTopic = null;
let allComments = [];
let userUpvotes = new Set();

// ── Auth helpers ──────────────────────────────────────────
async function initAuth() {
  if (!sb) return;
  const { data: { session } } = await sb.auth.getSession();
  if (session) await setUser(session.user);
  sb.auth.onAuthStateChange(async (_event, session) => {
    if (session) await setUser(session.user);
    else clearUser();
  });
}

async function setUser(user) {
  const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
  currentUser = { ...user, profile };
  renderHeader();
  if (currentTopic) {
    await loadUserUpvotes();
    renderComments();
    showCommentForm();
  }
}

function clearUser() {
  currentUser = null;
  renderHeader();
  showCommentForm();
}

function renderHeader() {
  const el = document.getElementById('header-auth');
  if (currentUser) {
    const initials = (currentUser.profile?.display_name || 'A').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
    el.innerHTML = `
      <div class="user-pill">
        <div class="user-avatar">${initials}</div>
        <span>${currentUser.profile?.display_name || 'You'}</span>
      </div>
      <button class="btn btn-ghost" onclick="handleLogout()">Sign out</button>
    `;
  } else {
    el.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login')">Sign in</button>
      <button class="btn btn-gold" onclick="openModal('signup')">Join the discussion</button>
    `;
  }
}

// ── Modal ─────────────────────────────────────────────────
function openModal(type) {
  document.getElementById('auth-modal').classList.add('open');
  switchModal(type);
}
function closeModal() {
  document.getElementById('auth-modal').classList.remove('open');
  clearModalErrors();
}
function switchModal(type) {
  document.getElementById('modal-login').style.display  = type === 'login'  ? '' : 'none';
  document.getElementById('modal-signup').style.display = type === 'signup' ? '' : 'none';
  clearModalErrors();
}
function clearModalErrors() {
  ['modal-error','signup-error','signup-success'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
}
document.getElementById('auth-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('auth-modal')) closeModal();
});

async function handleLogin() {
  if (!sb) { alert('Supabase not configured yet — see config.js'); return; }
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('modal-error');
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    errEl.textContent = error.message;
    errEl.style.display = '';
  } else {
    closeModal();
  }
}

async function handleSignup() {
  if (!sb) { alert('Supabase not configured yet — see config.js'); return; }
  const name  = document.getElementById('signup-name').value.trim() || 'Anonymous';
  const denom = document.getElementById('signup-denom').value;
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const errEl  = document.getElementById('signup-error');
  const succEl = document.getElementById('signup-success');
  const { error } = await sb.auth.signUp({
    email, password,
    options: { data: { display_name: name, denomination: denom } }
  });
  if (error) {
    errEl.textContent = error.message;
    errEl.style.display = '';
  } else {
    succEl.textContent = 'Account created! Check your email to confirm, then sign in.';
    succEl.style.display = '';
  }
}

async function handleLogout() {
  if (sb) await sb.auth.signOut();
}

// ── Topic rendering ────────────────────────────────────────
function renderTopicGrid() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = TOPICS.map(t => `
    <div class="topic-card" onclick="showTopic('${t.id}')" id="tc-${t.id}">
      <div class="topic-icon">${t.icon}</div>
      <div>
        <div class="topic-name">${t.name}</div>
        <div class="topic-count" id="tc-count-${t.id}">Loading…</div>
      </div>
    </div>
  `).join('');
  loadCommentCounts();
}

async function loadCommentCounts() {
  if (!sb) {
    TOPICS.forEach(t => {
      const el = document.getElementById(`tc-count-${t.id}`);
      if (el) el.textContent = 'Comments disabled';
    });
    return;
  }
  const { data } = await sb.from('comments').select('topic_id');
  const counts = {};
  (data || []).forEach(r => counts[r.topic_id] = (counts[r.topic_id] || 0) + 1);
  TOPICS.forEach(t => {
    const el = document.getElementById(`tc-count-${t.id}`);
    const n = counts[t.id] || 0;
    if (el) el.textContent = n === 0 ? 'No comments yet' : `${n} comment${n !== 1 ? 's' : ''}`;
  });
}

function showHome() {
  currentTopic = null;
  document.getElementById('home-view').style.display = '';
  document.getElementById('detail-view').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  loadCommentCounts();
}

async function showTopic(id) {
  currentTopic = TOPICS.find(t => t.id === id);
  if (!currentTopic) return;

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('detail-title').textContent = currentTopic.name;
  document.getElementById('detail-desc').textContent  = currentTopic.desc;
  document.getElementById('controversy-fill').style.width = currentTopic.controversy + '%';
  document.getElementById('controversy-text').textContent = `Controversy level: ${currentTopic.controversy}/100`;

  renderDenomCards();
  showCommentForm();
  await loadComments();
}

function renderDenomCards() {
  const badgeClass = { affirm: 'badge-affirm', deny: 'badge-deny', nuanced: 'badge-nuanced', varies: 'badge-varies' };
  document.getElementById('denom-grid').innerHTML = currentTopic.denominations.map(d => `
    <div class="denom-card">
      <div class="denom-card-top">
        <div class="denom-name">${d.name}</div>
        <span class="stance-badge ${badgeClass[d.stance] || ''}">${d.badge}</span>
      </div>
      <div class="denom-position">${d.position}</div>
    </div>
  `).join('');
}

// ── Comments ──────────────────────────────────────────────
function showCommentForm() {
  const loggedOut = document.getElementById('logged-out-prompt');
  const loggedIn  = document.getElementById('logged-in-form');
  if (!sb) {
    loggedOut.style.display = '';
    loggedOut.innerHTML = '<em>Enable Supabase in config.js to join the discussion.</em>';
    loggedIn.style.display = 'none';
  } else if (currentUser) {
    loggedOut.style.display = 'none';
    loggedIn.style.display = '';
  } else {
    loggedOut.style.display = '';
    loggedOut.innerHTML = '<a onclick="openModal(\'login\')">Sign in</a> or <a onclick="openModal(\'signup\')">create a free account</a> to share your perspective.';
    loggedIn.style.display = 'none';
  }
}

const textarea = document.getElementById('comment-text');
if (textarea) {
  textarea.addEventListener('input', () => {
    document.getElementById('char-count').textContent = `${textarea.value.length} / 600`;
  });
}

async function loadComments() {
  if (!currentTopic) return;
  const listEl = document.getElementById('comment-list');
  listEl.innerHTML = '<div class="loading-spinner">Loading comments…</div>';
  document.getElementById('comment-count-label').textContent = 'Loading…';

  if (!sb) {
    listEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">💬</div>Configure Supabase in config.js to see comments.</div>`;
    document.getElementById('comment-count-label').textContent = 'Comments require setup';
    return;
  }

  const { data, error } = await sb
    .from('comments')
    .select('*')
    .eq('topic_id', currentTopic.id)
    .order('upvotes', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    listEl.innerHTML = `<div class="error-msg">Error loading comments: ${error.message}</div>`;
    return;
  }
  allComments = data || [];
  await loadUserUpvotes();
  const n = allComments.length;
  document.getElementById('comment-count-label').textContent = n === 0 ? 'Be the first to comment' : `${n} comment${n !== 1 ? 's' : ''}`;
  renderComments();
}

async function loadUserUpvotes() {
  userUpvotes = new Set();
  if (!sb || !currentUser) return;
  const ids = allComments.map(c => c.id);
  if (!ids.length) return;
  const { data } = await sb.from('upvotes').select('comment_id').eq('user_id', currentUser.id).in('comment_id', ids);
  (data || []).forEach(r => userUpvotes.add(r.comment_id));
}

function renderComments(filterDenom) {
  const listEl = document.getElementById('comment-list');
  let comments = allComments;
  if (filterDenom) comments = comments.filter(c => c.denomination === filterDenom);

  if (!comments.length) {
    listEl.innerHTML = `<div class="empty-state"><div class="empty-state-icon">✍️</div>${filterDenom ? 'No comments from this tradition yet.' : 'No comments yet — be the first to share your perspective!'}</div>`;
    return;
  }

  listEl.innerHTML = comments.map(c => {
    const initials = (c.display_name || 'A').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
    const voted = userUpvotes.has(c.id);
    const date = new Date(c.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
    return `
      <div class="comment-item" id="comment-${c.id}">
        <div class="comment-avatar">${initials}</div>
        <div class="comment-body">
          <div class="comment-meta">
            <span class="comment-author">${escHtml(c.display_name)}</span>
            ${c.denomination ? `<span class="comment-denom-tag">${escHtml(c.denomination)}</span>` : ''}
            <span class="comment-date">${date}</span>
          </div>
          <div class="comment-text">${escHtml(c.body)}</div>
          <div class="comment-actions">
            <button class="upvote-btn ${voted ? 'voted' : ''}" onclick="toggleUpvote(${c.id})" id="upvote-${c.id}">
              ▲ <span id="upvote-count-${c.id}">${c.upvotes}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterComments() {
  const val = document.getElementById('denom-filter').value;
  renderComments(val || null);
}

async function submitComment() {
  if (!sb || !currentUser || !currentTopic) return;
  const body = document.getElementById('comment-text').value.trim();
  if (!body) return;
  const btn = document.getElementById('submit-btn');
  const msgEl = document.getElementById('form-message');
  btn.disabled = true;
  btn.textContent = 'Posting…';
  msgEl.innerHTML = '';

  const { error } = await sb.from('comments').insert({
    topic_id: currentTopic.id,
    user_id: currentUser.id,
    display_name: currentUser.profile?.display_name || 'Anonymous',
    denomination: currentUser.profile?.denomination || null,
    body,
    upvotes: 0
  });

  btn.disabled = false;
  btn.textContent = 'Post comment';

  if (error) {
    msgEl.innerHTML = `<div class="error-msg">${error.message}</div>`;
  } else {
    document.getElementById('comment-text').value = '';
    document.getElementById('char-count').textContent = '0 / 600';
    msgEl.innerHTML = `<div class="success-msg">Comment posted!</div>`;
    setTimeout(() => msgEl.innerHTML = '', 3000);
    await loadComments();
  }
}

async function toggleUpvote(commentId) {
  if (!sb) { openModal('login'); return; }
  if (!currentUser) { openModal('login'); return; }

  const voted = userUpvotes.has(commentId);
  const comment = allComments.find(c => c.id === commentId);
  if (!comment) return;

  if (voted) {
    await sb.from('upvotes').delete().eq('user_id', currentUser.id).eq('comment_id', commentId);
    await sb.from('comments').update({ upvotes: comment.upvotes - 1 }).eq('id', commentId);
    userUpvotes.delete(commentId);
    comment.upvotes = Math.max(0, comment.upvotes - 1);
  } else {
    await sb.from('upvotes').insert({ user_id: currentUser.id, comment_id: commentId });
    await sb.from('comments').update({ upvotes: comment.upvotes + 1 }).eq('id', commentId);
    userUpvotes.add(commentId);
    comment.upvotes = comment.upvotes + 1;
  }

  const btn = document.getElementById(`upvote-${commentId}`);
  const cnt = document.getElementById(`upvote-count-${commentId}`);
  if (btn) btn.classList.toggle('voted', !voted);
  if (cnt) cnt.textContent = comment.upvotes;
}

// ── Utilities ─────────────────────────────────────────────
function escHtml(str) {
  return String(str || '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function toggleSetup() {
  const el = document.getElementById('setup-guide');
  el.style.display = el.style.display === 'none' ? '' : 'none';
}

// ── Init ──────────────────────────────────────────────────
renderTopicGrid();
initAuth();
