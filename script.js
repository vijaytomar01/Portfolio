/* ── Custom Cursor ─────────── */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  cur.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animCursor);
}
animCursor();

/* ── Typed Effect ──────────── */
const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'AI Integrations Dev', 'Problem Solver 💻'];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');
function type() {
  const word = roles[ri];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 95);
}
setTimeout(type, 1200);

/* ── Scroll Reveal ─────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Navbar scroll ─────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
  // Active nav link
  const sections = ['about','skills','experience','projects','education','certifications','contact'];
  let current = '';
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (sec && scrollY >= sec.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ── Hamburger ─────────────── */
document.getElementById('ham').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

/* ── Project Card Glow ─────── */
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

/* ── Contact Form ──────────── */
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('form-btn');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#00D4FF';
  btn.style.boxShadow = '0 0 32px rgba(0,212,255,0.5)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = 'var(--accent)';
    btn.style.boxShadow = '';
    e.target.reset();
  }, 3000);
}

/* ── Stagger reveal delays ─── */
document.querySelectorAll('.skills-grid .skill-cat').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});
document.querySelectorAll('.cert-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.07) + 's';
});