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

function startDepth() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight, false);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0a0c11, 18, 70);

  const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(0, 0, 6);

  // soft gradient bands = the "layers" you fly through
  const band = (top, bottom) => {
    const c = document.createElement('canvas');
    c.width = 8; c.height = 256;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, top);
    grd.addColorStop(0.55, bottom);
    grd.addColorStop(1, 'rgba(10,12,17,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 8, 256);
    return new THREE.CanvasTexture(c);
  };

  const palette = [
    ['rgba(216,173,92,0.55)', 'rgba(216,173,92,0.06)'],
    ['rgba(90,150,190,0.5)', 'rgba(90,150,190,0.05)'],
    ['rgba(238,241,246,0.22)', 'rgba(238,241,246,0.02)'],
  ];

  const layers = [];
  for (let i = 0; i < 7; i++) {
    const far = i * 9;
    const geo = new THREE.PlaneGeometry(30 + far * 1.6, 18 + far * 1.1);
    const mat = new THREE.MeshBasicMaterial({
      map: band(...palette[i % palette.length]),
      transparent: true,
      opacity: 0.62 - i * 0.05,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((i % 2 ? 1 : -1) * (1.2 + i * 0.5), (i % 3 - 1) * 1.4, -6 - far);
    mesh.rotation.z = (i % 2 ? -1 : 1) * 0.06 * i;
    scene.add(mesh);
    layers.push(mesh);
  }

  // slow dust so the field breathes even without scrolling
  const count = 1200;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 70;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 42;
    pos[i * 3 + 2] = -Math.random() * 90;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    color: 0x9aa4b4, size: 0.07, transparent: true, opacity: 0.7, depthWrite: false,
  }));
  scene.add(dust);

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

    camera.position.z = 6 - p * 78;
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    camera.position.x = pointer.x * 2.2;
    camera.position.y = -pointer.y * 1.4;
    camera.rotation.y = -pointer.x * 0.05;
    camera.rotation.x = pointer.y * 0.03;

    layers.forEach((m, i) => {
      m.rotation.z += 0.0006 * (i % 2 ? 1 : -1) * speed;
      m.position.y += Math.sin(t * 0.32 + i) * 0.0022 * speed;
    });
    dust.rotation.z = t * 0.012;
    dust.position.y = Math.sin(t * 0.16) * 0.6;

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
