// Content + the depth field.
// Sections are plain HTML; this file fills them from data.js and drives both
// the WebGL layers behind the page and the per-section 2D→3D tilt (--p).

import * as THREE from './assets/three.module.js';
import { profile, quote, about, education, roles, focus, now, languages, stack, projects } from './data.js';

const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- content ---------------- */

$('bar-name').textContent = `${profile.name} — ${profile.goesBy}`;
$('hero-kicker').textContent = profile.role;
$('hero-headline').textContent = profile.headline;
$('hero-name').textContent = profile.name;
$('hero-cn').textContent = `${profile.chinese} · ${profile.pinyin}`;
$('hero-tagline').textContent = profile.tagline;
$('about-body').innerHTML = about.map((p) => `<p>${p}</p>`).join('');
$('hero-caption').textContent = profile.bioLine;
$('quote').innerHTML = `${quote.text}<cite>${quote.source}</cite>`;
$('study-list').innerHTML = education.map((e) => `<li>
    <span class="school">${e.school}</span>
    <span class="years">${e.years}</span>
    <span class="where">${e.where}</span>
    <span class="detail">${e.detail}</span>
  </li>`).join('');
$('stack-list').innerHTML = stack.map((s) => `<li>${s}</li>`).join('');
$('lang-list').innerHTML = languages.map((l) => `<li>${l}</li>`).join('');
$('role-list').innerHTML = roles.map((r) => `<li><strong>${r.title}</strong><span>${r.body}${
  r.link ? ` <a class="ext" href="${r.link}" target="_blank" rel="noopener">${r.linkLabel}</a>` : ''} <em>${r.when}</em></span></li>`).join('');
$('focus-list').innerHTML = focus.map((f) => `<li><strong>${f.title}</strong><span>${f.body}</span></li>`).join('');
$('now-list').innerHTML = now.map((n) => `<li>${n}</li>`).join('');
$('project-list').innerHTML = projects.map((p) => `<li><strong>${p.title}</strong><span>${p.body}${
  p.href ? ` <a class="ext" href="${p.href}" target="_blank" rel="noopener">open</a>` : ''}</span></li>`).join('');
$('foot-name').textContent = `${profile.name} · ${profile.chinese}`;
$('year').textContent = new Date().getFullYear();

const linkHtml = (l) => (l.href
  ? `<li><a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a></li>`
  : `<li><span class="pending">${l.label} — TODO</span></li>`);

$('hero-links').innerHTML = profile.links.map(linkHtml).join('');
$('contact-links').innerHTML = profile.links.map(linkHtml).join('');

/* ---------------- the 2D → 3D tilt ---------------- */

const panels = [...document.querySelectorAll('.panel')];
const vh = () => innerHeight;
let ticking = false;

function layout() {
  const h = vh();
  for (const panel of panels) {
    const card = panel.querySelector('.card');
    const r = card.getBoundingClientRect();
    const centre = r.top + r.height / 2;
    const dist = Math.abs(centre - h / 2) / (h * 0.8);
    const p = Math.max(0, Math.min(1, 1 - dist));
    const dx = Math.max(-1, Math.min(1, (r.left + r.width / 2 - innerWidth / 2) / innerWidth));
    card.style.setProperty('--p', p.toFixed(3));
    card.style.setProperty('--dx', dx.toFixed(3));
  }
  ticking = false;
}

function onScroll() {
  if (!ticking) { ticking = true; requestAnimationFrame(layout); }
}

addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
layout();

/* ---------------- WebGL depth field ---------------- */

const canvas = $('depth');

// Aurora: seven drifting curtains of light in fog, plus slow motes.
// Curtains are cheap plane meshes with a horizontal gradient texture, additive-blended.
function startDepth() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight, false);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x07110f, 22, 110);

  const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 400);
  camera.position.set(0, 0, 8);

  const curtain = (a, b) => {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 4;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 512, 0);
    grd.addColorStop(0, 'rgba(0,0,0,0)');
    grd.addColorStop(0.45, a);
    grd.addColorStop(0.62, b);
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 512, 4);
    return new THREE.CanvasTexture(c);
  };

  const palette = [
    ['rgba(111,220,191,0.85)', 'rgba(60,150,210,0.5)'],
    ['rgba(120,200,255,0.7)', 'rgba(111,220,191,0.45)'],
    ['rgba(232,245,240,0.45)', 'rgba(111,220,191,0.2)'],
  ];

  // 12 curtains so the field never runs out: the camera flies to z ≈ -76 at the page end
  const curtains = [];
  for (let i = 0; i < 12; i++) {
    const geo = new THREE.PlaneGeometry(34 + i * 6, 26 + i * 4);
    const mat = new THREE.MeshBasicMaterial({
      map: curtain(...palette[i % palette.length]),
      transparent: true,
      opacity: Math.max(0.1, 0.5 - i * 0.045),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((i % 2 ? 1 : -1) * (2 + i * 1.1), -2 + (i % 3) * 1.6, -8 - i * 9);
    mesh.rotation.z = (i % 2 ? -1 : 1) * (0.1 + i * 0.02);
    scene.add(mesh);
    curtains.push(mesh);
  }

  // slow motes so the field breathes even without scrolling
  const count = 900;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 70;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 46;
    pos[i * 3 + 2] = -Math.random() * 90;
  }
  const motesGeo = new THREE.BufferGeometry();
  motesGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const motes = new THREE.Points(motesGeo, new THREE.PointsMaterial({
    color: 0xa8f0d8, size: 0.075, transparent: true, opacity: 0.55, depthWrite: false,
  }));
  scene.add(motes);

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', (e) => {
    pointer.tx = (e.clientX / innerWidth - 0.5) * 2;
    pointer.ty = (e.clientY / innerHeight - 0.5) * 2;
  }, { passive: true });

  const progress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
  };

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
  });

  const clock = new THREE.Timer();
  const speed = reduce ? 0 : 1;

  function frame() {
    clock.update();
    const t = clock.getElapsed() * speed;
    const p = progress();

    camera.position.z = 8 - p * 84;
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    camera.position.x = pointer.x * 2.4;
    camera.position.y = -pointer.y * 1.4;
    camera.rotation.y = -pointer.x * 0.05;

    curtains.forEach((m, i) => {
      m.rotation.z += (i % 2 ? 1 : -1) * 0.0004 * speed;
      m.position.y += Math.sin(t * 0.28 + i * 1.3) * 0.0025 * speed;
      m.position.x += Math.cos(t * 0.2 + i) * 0.0015 * speed;
    });
    motes.rotation.z = t * 0.01;
    motes.position.y = Math.sin(t * 0.14) * 0.8;

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  frame();
}

try {
  startDepth();
} catch (err) {
  // no WebGL (old browser, blocked, headless without GPU): the site stays readable.
  document.body.classList.add('no3d');
  console.warn('depth field off:', err);
}
