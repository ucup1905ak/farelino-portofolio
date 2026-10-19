// Edit this file only — every word on the site comes from here.
// Sources: your LinkedIn profile (linkedin.com/in/farelinoalexander), your public Instagram
// @farelino_alexander, your NXU application essay and admission notice, the UAJY recommendation
// letter, your UAJY certificates, and the repos in github.com/ucup1905ak.
// Deliberately NOT included: passport number, phone numbers, date of birth, home address,
// student ID, KTP/KK, medical records, connection counts, or anyone else's handles.

export const profile = {
  name: 'Farelino Alexander Kim',
  goesBy: 'Farel',
  chinese: '金卫天',
  pinyin: 'Jīn Wèitiān',
  role: 'Software Engineering · Nanjing Xiaozhuang University',
  headline: 'President of HIMAFORKA 2025–2026 · Teaching Assistant in C',
  tagline: 'From Tasikmalaya to Nanjing — building software, studying how minds work.',
  bioLine: 'Servant of the King', // your own Instagram bio
  email: 'alexanderkimf@gmail.com',
  links: [
    { label: 'Email', href: 'mailto:alexanderkimf@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farelinoalexander' },
    { label: 'Instagram', href: 'https://www.instagram.com/farelino_alexander/' },
    { label: 'GitHub', href: 'https://github.com/ucup1905ak' },
  ],
};

// From your 2+2 application essay (Nanjing Xiaozhuang University, 2026).
export const quote = {
  text: 'Humans grow as much as their environment allows. Growth stops when comfort begins.',
  source: 'From my self-introduction, Nanjing Xiaozhuang University, October 2026',
};

export const about = [
  'I was born in Tangerang and grew up in Tasikmalaya, West Java. My grandfather came from Korea; he met my grandmother in Bangka Belitung, and the family put down roots in West Java. As a child I was fascinated by physics and electrical systems — how machines work, how a calculator adds, how a switch turns on a light.',
  'The first thing I ever led was a room of thirteen-year-olds: chair of the student council and leader of the scout troop in junior high school. Yogyakarta is where that instinct found a discipline. I studied Informatics at Universitas Atma Jaya Yogyakarta, finishing with a GPA of 3.92 across 86 credit hours, and in October 2025 I was elected President of HIMAFORKA, the Informatics Students\u2019 Association — leading its organisational transformation, its partnerships, and the programmes it runs for students. In 2026 I taught as well: a teaching assistant for the first programming course, in C, from the opening lecture to the last.',
  'In September 2026 the road continued in China: a 2+2 double degree in Software Engineering at Nanjing Xiaozhuang University, with my tuition covered by the NXZU Scholarship Program for International Students.',
  'Music and production run along the same line for me. I am a Christian, and from 2020 to 2024 I was the technical and production director at my church in Tasikmalaya — live sound on digital consoles, LED walls, camera systems and streaming — while learning piano, guitar, drums and bass along the way. In Nanjing I have no instruments with me, so I beatbox instead.',
  'What music and code share, for me, is the point I care about: many systems running at once, and none of them allowed to fail.',
];

export const education = [
  {
    school: 'SMAK BPK PENABUR Tasikmalaya',
    where: 'Tasikmalaya, Indonesia',
    detail: 'Science track · graduated 2024',
    years: 'until 2024',
  },
  {
    school: 'Universitas Atma Jaya Yogyakarta',
    where: 'Yogyakarta, Indonesia',
    detail: 'Informatics · IPK 3.92 / 4.00 (86 SKS) · President of HIMAFORKA · Teaching assistant',
    years: '2024 – 2026',
  },
  {
    school: 'Nanjing Xiaozhuang University',
    where: 'Nanjing, China',
    detail: 'Software Engineering, School of Information Engineering · taught in English · NXZU Scholarship',
    years: '2026 – 2028',
  },
];

export const roles = [
  {
    title: 'President — HIMAFORKA UAJY',
    body: 'Led the Informatics Students\u2019 Association: organisational transformation and governance, sponsorships and partnerships with university stakeholders, mentoring student leaders, and academic, outreach and student-development programmes.',
    when: 'Oct 2025 – Jul 2026',
    link: 'https://www.instagram.com/himaforka.uajy/',
    linkLabel: '@himaforka.uajy',
  },
  {
    title: 'Teaching Assistant — Universitas Atma Jaya Yogyakarta',
    body: 'Assisted in delivering foundational programming in C — lecture support, coding exercises and practical assignments, from the beginning of the course to its completion.',
    when: 'Feb – Jul 2026',
  },
  {
    title: 'Informatics Festival #14 — Steering Committee',
    body: 'Steering committee for a national-level festival held across 11 April, 9 May and 22 May 2026, under the theme \u201cFrom Limited to Limitless: Restrictions Spark Greater Innovation\u201d — after designing the festival\u2019s visual identity in its first half.',
    when: 'Jan 2025 – Jul 2026',
  },
  {
    title: 'Bebras trainer',
    body: 'Computational thinking training for primary, middle and high school students across Yogyakarta and Central Java, with Bebras Indonesia, Google.org, PANDI and AI Ready ASEAN.',
    when: 'Nov 2025',
  },
  {
    title: 'Graphic Design Specialist — HIMAFORKA UAJY',
    body: 'Visual communication for the association: branding assets, posters, banners, presentations, social media and digital campaigns.',
    when: 'Oct 2024 – Oct 2025',
  },
  {
    title: 'Group mentor — Inisiasi FTI 2025',
    body: 'Faculty of Industrial Technology orientation, mentoring a group of incoming students.',
    when: 'Nov 2025',
  },
  {
    title: 'Dialektika Ruang Berisik UAJY',
    body: 'Participant in the public discussion \u201cKontroversi dan Tumpang Tindih Kebijakan\u201d, Auditorium Kampus 4 UAJY.',
    when: 'Jun 2026',
  },
  {
    title: 'Technical & Production Director — Gereja Bethel Tabernakel Keluarga Kristus',
    body: 'Four years running the church\u2019s live production in Tasikmalaya: sound engineering on digital consoles, LED walls, camera systems, live switching and streaming, RF for microphones and in-ear monitors — and the teams that ran all of it.',
    when: 'May 2020 – Aug 2024',
  },
];

// Real repos under github.com/ucup1905ak. The source repos are private, so only the site is linked.
export const projects = [
  {
    title: 'cordis — behavioral AGI in pure numpy',
    body: 'My own architecture for a mind that can feel: a global workspace, complementary learning systems, hippocampal replay and a higher-order self-model, written in numpy so every part stays inspectable. This is the code behind the question I actually care about.',
    href: '',
  },
  {
    title: 'cordis-worm — a learning agent in a simulated world',
    body: 'The same architecture under pressure: a worm in a 100 × 100 world with a polar view, hunger as a drive, and a DQN trained from a replay buffer on CUDA. Perception, interpretation, workspace, cortex, world-model planning, and a GUI I can poke food and danger into.',
    href: '',
  },
  {
    title: 'mdview — Markdown in the terminal',
    body: 'A small Windows tool that renders Markdown where it is actually opened, wired into shell shims and the .md file association, with a test suite to keep it honest.',
    href: '',
  },
  {
    title: 'vpnac-cli — a VPN client with no GUI',
    body: 'A scriptable VPN.AC client for Windows: it drives the bundled OpenVPN binary from the command line and PowerShell, keeps the tunnel alive on networks that fight back, and reports its own state.',
    href: '',
  },
  {
    title: 'This site',
    body: 'Hand-written HTML, CSS and JavaScript — no framework, no build step — with a WebGL depth field behind the page and a per-section 2D → 3D tilt. Served from GitHub Pages at farelino.cloud.',
    href: 'https://farelino.cloud',
  },
];

export const focus = [
  {
    title: 'Software engineering',
    body: 'The craft I am training in Nanjing: designing and building systems that hold up outside the classroom.',
  },
  {
    title: 'Artificial consciousness',
    body: 'The question underneath everything I build — what would it take for a mind to actually feel something?',
  },
  {
    title: 'How people decide',
    body: 'How human beings choose when logic is not the whole story: love, hatred, wanting to be approved of.',
  },
];

export const now = [
  'Settling into Nanjing — Software Engineering at NXU, taught in English, with the semester under way.',
  'Daily Mandarin practice, from zero. Nouns and measure words are winning so far; I like the uphill.',
  'Writing cordis, and running an always-on agent with persistent memory to help me do it.',
  'Music whenever a keyboard is within reach. Beatboxing when one is not.',
];

export const languages = ['Indonesian — native', 'English — TOEFL certified', 'Mandarin — learning'];

export const stack = ['Python', 'PyTorch', 'Java', 'C', 'JavaScript', 'Node.js', 'SQL', 'HTML/CSS', 'Git', 'Linux'];
