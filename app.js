// ============================================================
// CREED & CONTROVERSY — app.js
// ============================================================

// ── Topic data ──────────────────────────────────────────────
const TOPICS = [
  {
    id: 'sola-scriptura',
    name: 'Sola Scriptura',
    icon: '📖',
    controversy: 88,
    desc: 'Is Scripture the sole infallible authority for Christian faith and practice, or does Sacred Tradition carry equal authority alongside it?',
    denominations: [
      { name: 'Roman Catholic', stance: 'deny', badge: 'deny', position: 'Scripture and Sacred Tradition together constitute the single deposit of the Word of God, interpreted by the Magisterium.' },
      { name: 'Eastern Orthodox', stance: 'deny', badge: 'deny', position: 'Holy Tradition, of which Scripture is a part, is the living witness of the Church and the proper context for interpretation.' },
      { name: 'Lutheran', stance: 'affirm', badge: 'affirm', position: 'Scripture alone is the norma normans — the norming norm — that judges all doctrine, councils, and tradition.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm', badge: 'affirm', position: 'The Westminster Confession declares Scripture the supreme judge by which all controversies are to be determined.' },
      { name: 'Anglican / Episcopal', stance: 'nuanced', badge: 'nuanced', position: 'The Chicago-Lambeth Quadrilateral affirms Scripture as containing all things necessary for salvation, but tradition and reason inform interpretation.' },
      { name: 'Baptist', stance: 'affirm', badge: 'affirm', position: 'Scripture is sufficient and the final authority; the priesthood of all believers enables individual interpretation under the Spirit.' },
    ]
  },
  {
    id: 'real-presence',
    name: 'Real Presence in Eucharist',
    icon: '🍞',
    controversy: 95,
    desc: 'Does Christ\'s body and blood become truly, substantially present in the bread and wine of the Eucharist, or is the Lord\'s Supper a memorial ordinance?',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'affirm', position: 'Transubstantiation: the substance of bread and wine are wholly converted into the Body and Blood of Christ.' },
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'affirm', position: 'A real change (metousiosis) occurs; Christ is truly present, though the manner transcends human understanding.' },
      { name: 'Lutheran', stance: 'nuanced', badge: 'nuanced', position: 'Sacramental union: Christ\'s body and blood are truly present "in, with, and under" the bread and wine (consubstantiation).' },
      { name: 'Reformed / Presbyterian', stance: 'nuanced', badge: 'nuanced', position: 'Spiritual real presence: Christ is genuinely present to faith, but his body remains in heaven (virtualism).' },
      { name: 'Baptist', stance: 'deny', badge: 'deny', position: 'The Lord\'s Supper is a memorial ordinance commemorating Christ\'s sacrifice; no change occurs in the elements.' },
      { name: 'Zwinglian', stance: 'deny', badge: 'deny', position: 'The bread and cup are purely symbolic signs of spiritual truths already accomplished.' },
    ]
  },
  {
    id: 'predestination',
    name: 'Predestination',
    icon: '🔮',
    controversy: 92,
    desc: 'Does God unconditionally elect individuals to salvation before creation, or does election depend on God\'s foreknowledge of human faith?',
    denominations: [
      { name: 'Reformed / Presbyterian', stance: 'affirm', badge: 'affirm', position: 'Double predestination (TULIP): God sovereignly elects the reprobate and the elect without respect to foreseen works or faith.' },
      { name: 'Lutheran', stance: 'nuanced', badge: 'nuanced', position: 'Single predestination: election to salvation is unconditional, but reprobation results from human rejection, not divine decree.' },
      { name: 'Roman Catholic', stance: 'nuanced', badge: 'nuanced', position: 'God\'s election is certain but compatible with free will; the Molinist tradition explores middle knowledge as a reconciliation.' },
      { name: 'Methodist / Arminian', stance: 'deny', badge: 'deny', position: 'Election is conditional on foreknown faith; God desires all to be saved and provides prevenient grace enabling free response.' },
      { name: 'Eastern Orthodox', stance: 'deny', badge: 'deny', position: 'Emphasises theosis and synergy; divine foreknowledge does not determine human choices, preserving genuine freedom.' },
      { name: 'Open Theist', stance: 'deny', badge: 'deny', position: 'God does not foreordain individual salvation; the future is genuinely open, and election is corporate in Christ.' },
    ]
  },
  {
    id: 'baptism',
    name: 'Infant Baptism',
    icon: '💧',
    controversy: 85,
    desc: 'Should infants be baptised as members of the covenant community, or should baptism be reserved for professing believers only?',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'affirm', position: 'Baptism regenerates, removes original sin, and incorporates into the Church; infants should receive it without delay.' },
      { name: 'Eastern Orthodox', stance: 'affirm', badge: 'affirm', position: 'Baptism, chrismation, and Eucharist are administered together to infants as full initiation into the Body of Christ.' },
      { name: 'Lutheran', stance: 'affirm', badge: 'affirm', position: 'Baptism works forgiveness of sins and new birth by the power of the Word; infants receive faith as a gift.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm', badge: 'affirm', position: 'Infant baptism is the New Covenant counterpart to circumcision, signing and sealing covenant membership.' },
      { name: 'Baptist', stance: 'deny', badge: 'deny', position: 'Believer\'s baptism by immersion alone is valid; infants cannot yet repent and believe, the prerequisites for baptism.' },
      { name: 'Anabaptist / Mennonite', stance: 'deny', badge: 'deny', position: 'The gathered church of committed disciples; baptism marks voluntary covenant entry and follows personal confession of faith.' },
    ]
  },
  {
    id: 'papacy',
    name: 'Papal Authority',
    icon: '⛪',
    controversy: 97,
    desc: 'Does the Bishop of Rome hold universal jurisdiction and the charism of infallibility when defining doctrine on faith and morals?',
    denominations: [
      { name: 'Roman Catholic', stance: 'affirm', badge: 'affirm', position: 'Vatican I defined papal primacy of jurisdiction and infallibility ex cathedra; Vatican II affirmed this within collegial episcopate.' },
      { name: 'Eastern Orthodox', stance: 'deny', badge: 'deny', position: 'The Pope is "first among equals" (primus inter pares) with honorary primacy only; infallibility belongs to Ecumenical Councils.' },
      { name: 'Anglican / Episcopal', stance: 'deny', badge: 'deny', position: 'The 39 Articles reject the Pope\'s jurisdiction in England; primacy of honour without universal jurisdiction is theoretically discussable.' },
      { name: 'Lutheran', stance: 'deny', badge: 'deny', position: 'Luther identified the papacy with the Antichrist; the Augsburg Confession rejects universal papal jurisdiction as unscriptural.' },
      { name: 'Reformed / Presbyterian', stance: 'deny', badge: 'deny', position: 'Christ alone is head of the Church; no bishop or council may bind conscience beyond Scripture.' },
      { name: 'Old Catholic', stance: 'nuanced', badge: 'nuanced', position: 'Accepts early episcopal succession but rejects Vatican I\'s definitions of papal infallibility and universal jurisdiction.' },
    ]
  },
  {
    id: 'tongues',
    name: 'Cessationism vs Continuationism',
    icon: '🔥',
    controversy: 78,
    desc: 'Have the miraculous gifts of the Spirit — tongues, prophecy, healing — ceased with the apostolic age, or do they continue today?',
    denominations: [
      { name: 'Cessationist (Reformed)', stance: 'deny', badge: 'deny', position: 'The sign gifts authenticated the apostles and closed with the completion of the canon; they are not normative today.' },
      { name: 'Pentecostal', stance: 'affirm', badge: 'affirm', position: 'Speaking in tongues is the initial physical evidence of Spirit baptism; all New Testament gifts are operative today.' },
      { name: 'Charismatic (Catholic)', stance: 'affirm', badge: 'affirm', position: 'Charismatic Renewal affirms all gifts for today within Catholic sacramental life; tongues is a gift, not a requirement.' },
      { name: 'Open but Cautious', stance: 'nuanced', badge: 'nuanced', position: 'Gifts have not ceased but must be tested carefully; experiences of tongues and prophecy exist alongside sober theological discernment.' },
      { name: 'Anglican / Episcopal', stance: 'varies', badge: 'varies', position: 'Wide internal diversity; charismatic Anglicanism (New Wine, SOMA) coexists with more cessationist evangelicalism.' },
      { name: 'Baptist', stance: 'varies', badge: 'varies', position: 'Southern Baptists are largely cessationist; other Baptist traditions vary, with some embracing charismatic renewal.' },
    ]
  },
  {
    id: 'salvation-works',
    name: 'Faith & Works in Salvation',
    icon: '⚖️',
    controversy: 90,
    desc: 'Is justification by faith alone (sola fide), or do works of charity and the sacraments cooperate in achieving final salvation?',
    denominations: [
      { name: 'Lutheran', stance: 'affirm', badge: 'affirm', position: 'Justification is forensic: God declares the sinner righteous for Christ\'s sake, received through faith alone, apart from works.' },
      { name: 'Reformed / Presbyterian', stance: 'affirm', badge: 'affirm', position: 'Justification by imputed righteousness, received through faith alone; good works are the fruit, never the ground, of salvation.' },
      { name: 'Roman Catholic', stance: 'nuanced', badge: 'nuanced', position: 'Trent: justification increases through cooperation with grace; the sacraments, charity, and perseverance contribute to final salvation.' },
      { name: 'Eastern Orthodox', stance: 'nuanced', badge: 'nuanced', position: 'Salvation as theosis (deification); synergy between divine grace and human will; legal categories are considered inadequate.' },
      { name: 'Methodist / Wesleyan', stance: 'nuanced', badge: 'nuanced', position: 'Initial justification by faith; entire sanctification as a second work of grace; final salvation requires perseverance in holiness.' },
      { name: 'Moralism / Pelagianism', stance: 'deny', badge: 'deny', position: 'Historic Pelagianism taught unaided human will can choose good; condemned as heresy at Carthage (418) and Orange (529).' },
    ]
  },
  {
    id: 'womens-ordination',
    name: 'Women\'s Ordination',
    icon: '✝️',
    controversy: 93,
    desc: 'May women be ordained as priests, elders, or bishops, or does Scripture reserve the ordained ministry to men?',
    denominations: [
      { name: 'Roman Catholic', stance: 'deny', badge: 'deny', position: 'Ordinatio Sacerdotalis (1994): the Church has no authority to ordain women to the priesthood; this teaching is to be held definitively.' },
      { name: 'Eastern Orthodox', stance: 'deny', badge: 'deny', position: 'The all-male priesthood reflects the incarnation and is bound to Tradition; the diaconate for women is under historical discussion.' },
      { name: 'Anglican / Episcopal', stance: 'varies', badge: 'varies', position: 'The Episcopal Church and many provinces ordain women to all orders; conservative Anglican bodies (GAFCON) do not.' },
      { name: 'Lutheran (ELCA)', stance: 'affirm', badge: 'affirm', position: 'The ELCA has ordained women since 1970; equality of ministry is considered consistent with the gospel.' },
      { name: 'Reformed / Presbyterian (PCA)', stance: 'deny', badge: 'deny', position: 'The PCA holds complementarianism: the offices of elder and pastor are restricted to qualified men per 1 Timothy 2.' },
      { name: 'Methodist / Wesleyan', stance: 'affirm', badge: 'affirm', position: 'The UMC has ordained women since 1956; Methodist ecclesiology emphasises gifts discerned by the community over gender restriction.' },
    ]
  },
];

// ── State ────────────────────────────────────────────────────
let supabaseClient = null;
let currentUser = null;
let currentUserProfile = null;
let currentTopic = null;
let allComments = [];
let userVotes = new Set();

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  renderTopics();
  setupCharCount();
});

function initSupabase() {
  if (typeof SUPABASE_CONFIGURED === 'undefined' || !SUPABASE_CONFIGURED) {
    document.getElementById('config-banner').classList.remove('hidden');
    showOfflineMode();
    return;
  }
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    document.getElementById('config-banner').classList.add('hidden');
    checkSession();
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user ?? null;
      if (currentUser) loadUserProfile();
      updateAuthUI();
      if (currentTopic) updateCommentFormVisibility();
    });
  } catch (e) {
    console.error('Supabase init failed:', e);
    showOfflineMode();
  }
}

function showOfflineMode() {
  // App still renders topics and denomination positions; comments just disabled
  updateAuthUI();
}

async function checkSession() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  currentUser = session?.user ?? null;
  if (currentUser) await loadUserProfile();
  updateAuthUI();
}

async function loadUserProfile() {
  if (!supabaseClient || !currentUser) return;
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', currentUser.id)
    .single();
  currentUserProfile = data;
}

// ── Auth UI ──────────────────────────────────────────────────
function updateAuthUI() {
  const authArea = document.getElementById('header-auth');
  if (currentUser && currentUserProfile) {
    const initials = (currentUserProfile.display_name || 'U')
      .split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    authArea.innerHTML = `
      <div class="user-pill">
        <div class="user-avatar">${initials}</div>
        <span>${currentUserProfile.display_name}</span>
        ${currentUserProfile.denomination
          ? `<span class="comment-denom-tag">${currentUserProfile.denomination}</span>`
          : ''}
      </div>
      <button class="btn btn-ghost" onclick="handleLogout()">Sign out</button>
    `;
  } else {
    authArea.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('login')">Sign in</button>
      <button class="btn btn-gold" onclick="openModal('signup')">Join the discussion</button>
    `;
  }
  if (currentTopic) updateCommentFormVisibility();
}

function updateCommentFormVisibility() {
  const loggedOut = document.getElementById('logged-out-prompt');
  const loggedIn = document.getElementById('logged-in-form');
  if (!loggedOut || !loggedIn) return;
  const hasDB = supabaseClient && SUPABASE_CONFIGURED;
  if (!hasDB) {
    loggedOut.style.display = 'block';
    loggedOut.innerHTML = '⚙️ Comments are disabled until Supabase is configured in <code>config.js</code>.';
    loggedIn.style.display = 'none';
  } else if (currentUser) {
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'block';
  } else {
    loggedOut.style.display = 'block';
    loggedOut.innerHTML = '<a onclick="openModal(\'login\')">Sign in</a> or <a onclick="openModal(\'signup\')">create a free account</a> to share your perspective.';
    loggedIn.style.display = 'none';
  }
}

// ── Topic rendering ──────────────────────────────────────────
function renderTopics() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = TOPICS.map(t => `
    <div class="topic-card" onclick="showTopic('${t.id}')" id="tc-${t.id}">
      <div class="topic-icon">${t.icon}</div>
      <div>
        <div class="topic-name">${t.name}</div>
        <div class="topic-count">${t.controversy}% controversial</div>
      </div>
    </div>
  `).join('');
}

function showHome() {
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('detail-view').style.display = 'none';
  currentTopic = null;
  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('active'));
}

async function showTopic(id) {
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) return;
  currentTopic = topic;

  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'block';

  document.getElementById('detail-title').textContent = topic.name;
  document.getElementById('detail-desc').textContent = topic.desc;
  document.getElementById('controversy-fill').style.width = topic.controversy + '%';
  document.getElementById('controversy-text').textContent =
    topic.controversy + '% controversy rating';

  // Render denomination cards
  const denomGrid = document.getElementById('denom-grid');
  denomGrid.innerHTML = topic.denominations.map(d => `
    <div class="denom-card">
      <div class="denom-card-top">
        <div class="denom-name">${d.name}</div>
        <div class="stance-badge badge-${d.badge}">${stanceLabel(d.stance)}</div>
      </div>
      <div class="denom-position">${d.position}</div>
    </div>
  `).join('');

  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('tc-' + id);
  if (card) card.classList.add('active');

  updateCommentFormVisibility();
  await loadComments(topic.id);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function stanceLabel(stance) {
  return { affirm: 'Affirms', deny: 'Denies', nuanced: 'Nuanced', varies: 'Varies' }[stance] || stance;
}

// ── Comments ─────────────────────────────────────────────────
async function loadComments(topicId) {
  const list = document.getElementById('comment-list');
  const countLabel = document.getElementById('comment-count-label');

  if (!supabaseClient || !SUPABASE_CONFIGURED) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⚙️</div>Configure Supabase to enable live comments.</div>';
    countLabel.textContent = 'Comments disabled';
    return;
  }

  list.innerHTML = '<div class="loading-spinner">Loading comments…</div>';

  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('topic_id', topicId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    allComments = data || [];

    // Load user's votes
    if (currentUser && allComments.length > 0) {
      const ids = allComments.map(c => c.id);
      const { data: votes } = await supabase
        .from('upvotes')
        .select('comment_id')
        .eq('user_id', currentUser.id)
        .in('comment_id', ids);
      userVotes = new Set((votes || []).map(v => v.comment_id));
    } else {
      userVotes = new Set();
    }

    countLabel.textContent = allComments.length === 0
      ? 'No comments yet — be the first!'
      : `${allComments.length} comment${allComments.length !== 1 ? 's' : ''}`;

    renderComments(allComments);
  } catch (err) {
    console.error(err);
    list.innerHTML = `<div class="error-msg">Failed to load comments: ${err.message}</div>`;
  }
}

function renderComments(comments) {
  const list = document.getElementById('comment-list');
  if (comments.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🕊️</div>
        No comments yet on this topic.<br>Be the first to share your perspective.
      </div>`;
    return;
  }
  list.innerHTML = comments.map(c => {
    const initials = (c.display_name || 'A')
      .split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const voted = userVotes.has(c.id);
    const date = new Date(c.created_at).toLocaleDateString('en-AU', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
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
            <button class="upvote-btn ${voted ? 'voted' : ''}"
              onclick="toggleUpvote(${c.id})"
              id="upvote-${c.id}"
              ${!currentUser ? 'title="Sign in to upvote"' : ''}>
              ${voted ? '▲' : '△'} <span id="upvote-count-${c.id}">${c.upvotes}</span>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function filterComments() {
  const val = document.getElementById('denom-filter').value;
  const filtered = val ? allComments.filter(c => c.denomination === val) : allComments;
  renderComments(filtered);
}

// ── Submit comment ───────────────────────────────────────────
async function submitComment() {
  const body = document.getElementById('comment-text').value.trim();
  const msgEl = document.getElementById('form-message');
  const btn = document.getElementById('submit-btn');

  if (!body) { showFormMsg('error', 'Please write something before posting.'); return; }
  if (body.length > 600) { showFormMsg('error', 'Keep it under 600 characters.'); return; }
  if (!currentUser || !currentUserProfile) { showFormMsg('error', 'Please sign in first.'); return; }

  btn.disabled = true;
  btn.textContent = 'Posting…';

  try {
    const { error } = await supabaseClient.from('comments').insert({
      topic_id: currentTopic.id,
      user_id: currentUser.id,
      display_name: currentUserProfile.display_name,
      denomination: currentUserProfile.denomination || null,
      body,
      upvotes: 0,
    });
    if (error) throw error;

    document.getElementById('comment-text').value = '';
    document.getElementById('char-count').textContent = '0 / 600';
    showFormMsg('success', 'Comment posted!');
    await loadComments(currentTopic.id);
  } catch (err) {
    showFormMsg('error', err.message || 'Failed to post. Try again.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Post comment';
  }
}

function showFormMsg(type, text) {
  const el = document.getElementById('form-message');
  el.innerHTML = `<div class="${type}-msg">${text}</div>`;
  setTimeout(() => { el.innerHTML = ''; }, 4000);
}

// ── Upvotes ──────────────────────────────────────────────────
async function toggleUpvote(commentId) {
  if (!currentUser) { openModal('login'); return; }
  if (!supabaseClient) return;

  const btn = document.getElementById(`upvote-${commentId}`);
  const countEl = document.getElementById(`upvote-count-${commentId}`);
  const wasVoted = userVotes.has(commentId);

  // Optimistic update
  const current = parseInt(countEl.textContent) || 0;
  if (wasVoted) {
    userVotes.delete(commentId);
    countEl.textContent = current - 1;
    btn.classList.remove('voted');
    btn.querySelector('span') || (btn.childNodes[0].textContent = '△ ');
  } else {
    userVotes.add(commentId);
    countEl.textContent = current + 1;
    btn.classList.add('voted');
  }

  try {
    if (wasVoted) {
      // Remove upvote
      await supabaseClient.from('upvotes')
        .delete()
        .eq('user_id', currentUser.id)
        .eq('comment_id', commentId);
      await supabaseClient.from('comments')
        .update({ upvotes: Math.max(0, current - 1) })
        .eq('id', commentId);
    } else {
      // Add upvote
      await supabaseClient.from('upvotes')
        .insert({ user_id: currentUser.id, comment_id: commentId });
      await supabaseClient.from('comments')
        .update({ upvotes: current + 1 })
        .eq('id', commentId);
    }
    // Sync actual count from DB
    const { data } = await supabase
      .from('comments').select('upvotes').eq('id', commentId).single();
    if (data) countEl.textContent = data.upvotes;
  } catch (err) {
    console.error('Upvote error:', err);
    // Revert optimistic update on error
    countEl.textContent = current;
    if (wasVoted) { userVotes.add(commentId); btn.classList.add('voted'); }
    else { userVotes.delete(commentId); btn.classList.remove('voted'); }
  }
}

// ── Auth modal ───────────────────────────────────────────────
function openModal(mode) {
  document.getElementById('auth-modal').classList.add('open');
  switchModal(mode);
}

function closeModal() {
  document.getElementById('auth-modal').classList.remove('open');
  clearModalErrors();
}

function switchModal(mode) {
  document.getElementById('modal-login').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('modal-signup').style.display = mode === 'signup' ? 'block' : 'none';
  clearModalErrors();
}

function clearModalErrors() {
  ['modal-error', 'signup-error', 'signup-success'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
}

document.getElementById('auth-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('auth-modal')) closeModal();
});

async function handleLogin() {
  if (!supabaseClient) return;
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('modal-error');

  if (!email || !password) {
    errEl.textContent = 'Please fill in both fields.';
    errEl.style.display = 'block';
    return;
  }

  const btn = document.querySelector('#modal-login .btn-gold');
  btn.textContent = 'Signing in…';
  btn.disabled = true;

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  btn.textContent = 'Sign in';
  btn.disabled = false;

  if (error) {
    errEl.textContent = error.message;
    errEl.style.display = 'block';
  } else {
    closeModal();
  }
}

async function handleSignup() {
  if (!supabaseClient) return;
  const name = document.getElementById('signup-name').value.trim();
  const denom = document.getElementById('signup-denom').value;
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const errEl = document.getElementById('signup-error');
  const successEl = document.getElementById('signup-success');

  if (!name || !email || !password) {
    errEl.textContent = 'Please fill in your name, email, and password.';
    errEl.style.display = 'block';
    return;
  }
  if (password.length < 6) {
    errEl.textContent = 'Password must be at least 6 characters.';
    errEl.style.display = 'block';
    return;
  }

  const btn = document.querySelector('#modal-signup .btn-gold');
  btn.textContent = 'Creating account…';
  btn.disabled = true;

  const { error } = await supabaseClient.auth.signUp({
    email, password,
    options: { data: { display_name: name, denomination: denom || null } }
  });

  btn.textContent = 'Create account';
  btn.disabled = false;

  if (error) {
    errEl.textContent = error.message;
    errEl.style.display = 'block';
  } else {
    errEl.style.display = 'none';
    successEl.textContent = '✓ Check your email to confirm your account, then sign in!';
    successEl.style.display = 'block';
  }
}

async function handleLogout() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  currentUser = null;
  currentUserProfile = null;
  userVotes = new Set();
  updateAuthUI();
}

// ── Helpers ──────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setupCharCount() {
  const ta = document.getElementById('comment-text');
  if (!ta) return;
  ta.addEventListener('input', () => {
    document.getElementById('char-count').textContent = `${ta.value.length} / 600`;
  });
}

function toggleSetup() {
  const el = document.getElementById('setup-guide');
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
