/* ============================================================
   BRIXEN CONSULTANCY LLC — Centralized content data
   US-based BIM modeling & CAD drafting partner (Austin, TX)
   for general contractors, MEP firms and architecture studios.
   Single source of truth — pages/components import from here.
   ============================================================ */

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Credentials", href: "/certifications" },
  { label: "Tools", href: "/equipment" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  emailInfo: "Info@brixenconsultancy.com",
  emailSales: "Sales@brixenconsultancy.com",
  phone: "+1 (229) 210-3506",
  address: "5900 Balcones Drive, STE 100, Austin, TX 78731, USA",
  website: "www.brixenconsultancy.com",
  domain: "brixenconsultancy.com",
};

/* ---------- Marquee capabilities ---------- */
export const MARQUEE = [
  "BIM Modeling",
  "CAD Drafting",
  "Autodesk Revit",
  "AutoCAD",
  "Navisworks",
  "Clash Detection",
  "Shop Drawings",
  "Structural & MEP",
  "Mechanical CAE",
  "GD&T & FEA",
  "LOD 100–500",
];

/* ---------- Experience across (home logo strip) ---------- */
export const AUTHORITIES = [
  "LAUSD",
  "Santa Monica College",
  "LA Metro",
  "Pasadena City College",
  "U.S. Army Corps of Engineers",
  "USGBC · LEED",
  "CMAA",
  "L3HARRIS",
];

/* ---------- Capability highlights (home) ---------- */
export const HIGHLIGHTS = [
  {
    no: "01",
    title: "Engineer, don't just draft",
    desc: "Every model is backed by engineering judgment — civil, structural, MEP and mechanical leaders who have planned, managed and delivered real built work, not only drawn it.",
    points: ["Civil, structural & MEP judgment", "Precision mechanical detailing", "Field-tested experience"],
  },
  {
    no: "02",
    title: "Model to your standards",
    desc: "Autodesk Revit, AutoCAD and Navisworks across LOD 100–500 — delivered in DWG, RVT, IFC and PDF, to your title-block standards and US codes.",
    points: ["LOD 100–500 coverage", "DWG · RVT · IFC · PDF", "Your title blocks & codes"],
  },
  {
    no: "03",
    title: "A remote extension of your team",
    desc: "We plug into general contractors, MEP firms and architecture studios as a responsive drafting partner — aligned to your workflow and turnaround.",
    points: ["One accountable partner", "Responsive turnaround", "Aligned to US standards"],
  },
];

/* ---------- "By the numbers" metric cards (home) ---------- */
export const METRICS = [
  { n: "28", l: "Years", sub: "Infrastructure delivery leadership" },
  { n: "14+", l: "Years", sub: "Mechanical design — aerospace & defense" },
  { n: "$2.7B+", l: "Managed", sub: "Construction — CCM & LEED AP lead" },
  { n: "4", l: "Markets", sub: "USA · UK · UAE · Pakistan" },
  { n: "500", l: "Max LOD", sub: "BIM detail, LOD 100–500" },
  { n: "3", l: "Disciplines", sub: "Civil · mechanical · construction mgmt" },
];

/* ---------- Home hero stats ---------- */
export const STATS = [
  { n: "4", l: "Global Markets" },
  { n: "$2.7B+", l: "Construction Managed" },
  { n: "28", l: "Years of Leadership" },
  { n: "3", l: "Group Companies" },
];

/* ---------- Services (combined capabilities) ---------- */
export type Service = {
  no: string;
  slug: string;
  title: string;
  desc: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    no: "01",
    slug: "bim-cad",
    title: "BIM & CAD Production",
    desc: "Autodesk Revit, AutoCAD and Navisworks across LOD 100–500 — delivered in DWG, RVT, IFC and PDF to your standards.",
    points: [
      "Revit modeling · LOD 100–500",
      "AutoCAD drafting & detailing",
      "Navisworks coordination",
      "DWG · RVT · IFC · PDF deliverables",
    ],
  },
  {
    no: "02",
    slug: "structural-mep",
    title: "Structural, MEP & HVAC",
    desc: "Structural systems and building services — HVAC, medical gases and power — with experience drawn from hospitals and complex facilities.",
    points: [
      "Structural systems modeling",
      "Mechanical, electrical & plumbing",
      "HVAC & medical-gas systems",
      "Power & critical facilities",
    ],
  },
  {
    no: "03",
    slug: "civil-infrastructure",
    title: "Civil & Infrastructure Engineering",
    desc: "Roads, highways, flyovers, underpasses, dams and retaining structures — designed and built, not just drafted.",
    points: [
      "Roads, highways & flyovers",
      "Underpasses & retaining structures",
      "Dams & water-control works",
      "Large-scale civil packages",
    ],
  },
  {
    no: "04",
    slug: "mechanical-cae",
    title: "Mechanical Design & CAE",
    desc: "SolidWorks, CATIA V5 and Siemens NX modeling with GD&T, tolerance stack-up and FEA (thermal, structural, vibrational) validation.",
    points: [
      "SolidWorks · CATIA V5 · Siemens NX",
      "GD&T & tolerance stack-up",
      "FEA validation & simulation",
      "Precision fixtures & tooling",
    ],
  },
  {
    no: "05",
    slug: "construction-management",
    title: "Project & Construction Management",
    desc: "Planning, scheduling and delivery oversight from leaders who have run multi-storey, infrastructure and institutional projects end to end.",
    points: [
      "Primavera P6 scheduling & EVM",
      "FIDIC / AIA contract administration",
      "Value engineering",
      "QA / QC & risk management",
    ],
  },
  {
    no: "06",
    slug: "sustainability-quality",
    title: "Sustainability & Quality",
    desc: "LEED-accredited green-building input alongside Lean Six Sigma, FMEA and process discipline carried over from precision manufacturing.",
    points: [
      "LEED certification input",
      "Lean Six Sigma & FMEA",
      "Process & QA discipline",
      "BIM / Revit QA coordination",
    ],
  },
];

/* ---------- Projects (US first, then international) ---------- */
export type Project = {
  name: string;
  loc: string;
  client: string;
  cost: string;
  year: string;
  cat: string;
  country: string;
  pid: string;
};

export const PROJECTS: Project[] = [
  // ---- United States (leadership track record) ----
  { name: "LAUSD Augustus F. Hawkins High School", loc: "Los Angeles, CA", client: "LAUSD", cost: "$260M", year: "", cat: "Education", country: "USA", pid: "us1" },
  { name: "LA Metro — Center Street Project", loc: "Los Angeles, CA", client: "LA Metro", cost: "$130M", year: "", cat: "Transit", country: "USA", pid: "us2" },
  { name: "Santa Monica College — Math & Science Building", loc: "Santa Monica, CA", client: "Santa Monica College", cost: "$120M", year: "", cat: "Higher Ed", country: "USA", pid: "us3" },
  { name: "SMC Malibu Campus & Sheriff's Substation", loc: "Malibu, CA", client: "Santa Monica College", cost: "$60M", year: "", cat: "Higher Ed", country: "USA", pid: "us4" },
  { name: "LAUSD Porter Ranch Community School (K–8)", loc: "Porter Ranch, CA", client: "LAUSD", cost: "$54M", year: "", cat: "Education", country: "USA", pid: "us5" },
  { name: "LAUSD Richard Byrd Middle School", loc: "Sun Valley, CA", client: "LAUSD", cost: "$54M", year: "", cat: "Education", country: "USA", pid: "us6" },
  { name: "LAUSD Enadia Way Elementary School", loc: "Canoga Park, CA", client: "LAUSD", cost: "$18M", year: "", cat: "Education", country: "USA", pid: "us7" },
  { name: "LAUSD Polytechnic HS — Interim Housing", loc: "Sun Valley, CA", client: "LAUSD", cost: "$12M", year: "", cat: "Education", country: "USA", pid: "us8" },
  { name: "LAX Terminal Modernization — Support Package", loc: "Los Angeles, CA", client: "LAWA", cost: "$140M", year: "", cat: "Aviation", country: "USA", pid: "us9" },
  { name: "LA Metro — Regional Connector Support", loc: "Los Angeles, CA", client: "LA Metro", cost: "$95M", year: "", cat: "Transit", country: "USA", pid: "us10" },
  { name: "LAUSD Downtown Career & Technical Education Center", loc: "Los Angeles, CA", client: "LAUSD", cost: "$86M", year: "", cat: "Education", country: "USA", pid: "us11" },
  { name: "Santa Monica College — Student Services Center", loc: "Santa Monica, CA", client: "Santa Monica College", cost: "$72M", year: "", cat: "Higher Ed", country: "USA", pid: "us12" },
  { name: "Long Beach Unified — STEM Academy", loc: "Long Beach, CA", client: "LBUSD", cost: "$58M", year: "", cat: "Education", country: "USA", pid: "us13" },
  { name: "Pasadena City College — Campus Center Renovation", loc: "Pasadena, CA", client: "Pasadena City College", cost: "$40M", year: "", cat: "Higher Ed", country: "USA", pid: "us14" },

  // ---- Pakistan (Brixen Associates — civil delivery) ----
  { name: "Maintenance of the Karakoram Highway", loc: "Gilgit–Baltistan", client: "National Highway Authority", cost: "—", year: "", cat: "Highways", country: "Pakistan", pid: "pk1" },
  { name: "DI Khan – Chashma Road (64 km) & DI Khan – Tank Road (149 km)", loc: "KP", client: "Highway Department", cost: "—", year: "", cat: "Highways", country: "Pakistan", pid: "pk2" },
  { name: "Flyovers — Kacha Jail Road & Aziz Cross", loc: "Lahore · Gujranwala", client: "TEPA · LDA", cost: "—", year: "", cat: "Structures", country: "Pakistan", pid: "pk3" },
  { name: "Gomal Dam — retaining & water-control structures", loc: "KP", client: "Development Authority", cost: "—", year: "", cat: "Infrastructure", country: "Pakistan", pid: "pk4" },
  { name: "Civil Infrastructure, Sector F", loc: "DHA Bahawalpur", client: "DHA Bahawalpur", cost: "$2.3M", year: "", cat: "Infrastructure", country: "Pakistan", pid: "pk5" },
  { name: "DHA Grand Rohi Club — Banquet Hall", loc: "Bahawalpur", client: "DHA Bahawalpur", cost: "$1.4M", year: "", cat: "Buildings", country: "Pakistan", pid: "pk6" },

  // ---- UAE (Spirit Brixen Building Contracting LLC) ----
  { name: "Building Contracting & Fit-out Works", loc: "Dubai, UAE", client: "Spirit Brixen", cost: "—", year: "", cat: "Buildings", country: "UAE", pid: "ae1" },
  { name: "Joinery & Interior Manufacturing", loc: "Umm Al Quwain, UAE", client: "Spirit Brixen", cost: "—", year: "", cat: "Joinery", country: "UAE", pid: "ae2" },
];

export const PROJECT_STATS = [
  { n: "$2.7B+", l: "US Programs Supported" },
  { n: "$90M+", l: "Value across Pakistan" },
  { n: "$18M+", l: "Value across Dubai & UAE" },
  { n: "$10M+", l: "Value across KSA & UK" },
];

/* Combined project value across all four markets (~$2.7B+) */
export const PROJECT_VALUE_TOTAL = "$2.7B+";

/* Group companies (used on Projects + Team pages) */
export const GROUP = [
  { title: "Brixen Consultancy LLC", scope: "BIM & CAD drafting services", region: "Austin, TX · USA" },
  { title: "Brixen Associates", scope: "Civil construction & project delivery", region: "Pakistan" },
  { title: "Spirit Brixen Building Contracting LLC", scope: "Building contracting & joinery", region: "UAE" },
];

/* ---------- Process ---------- */
export const PROCESS = [
  { no: "01", title: "Scope & Standards", desc: "We align on codes, title blocks, LOD targets and the exact deliverables you need." },
  { no: "02", title: "Model & Draft", desc: "Revit, AutoCAD and Navisworks production by an engineering-led team." },
  { no: "03", title: "Coordinate", desc: "Clash detection and structural / MEP coordination across every trade." },
  { no: "04", title: "QA / QC", desc: "Engineering review, GD&T and FEA validation where accuracy is critical." },
  { no: "05", title: "Deliver", desc: "DWG, RVT, IFC and PDF handed over to your standards, on schedule." },
];

/* ---------- Values ---------- */
export const VALUES = [
  { no: "01", title: "Engineering Judgment", desc: "Leaders who have planned, managed and built major work — so the drawings reflect how the field and the front office actually think." },
  { no: "02", title: "Precision", desc: "Manufacturing-grade accuracy carried into every model: GD&T, tolerance stack-up, FEA validation and Lean Six Sigma discipline." },
  { no: "03", title: "US-Aligned", desc: "Aligned to US codes and your title-block standards, operating as a responsive remote extension of your team." },
  { no: "04", title: "Integrity", desc: "A reliable partner — honest, fair and accountable on scope, standards and turnaround." },
];

/* ---------- Goals ---------- */
export const GOALS = [
  { title: "Quality Excellence", desc: "Deliver BIM and CAD output that meets US and international standards, first time." },
  { title: "Engineering-Led Output", desc: "Keep real engineering judgment behind every model and drawing set we produce." },
  { title: "Client Partnership", desc: "Operate as a seamless remote extension of contractors, MEP firms and studios." },
  { title: "Technology", desc: "Advance continuously across Revit, CATIA, NX, FEA and BIM coordination tooling." },
  { title: "Sustainability", desc: "Bring LEED-accredited green-building input to projects that want to build responsibly." },
  { title: "Global Coverage", desc: "Serve four markets — USA, UK, UAE and Pakistan — under one delivery standard." },
];

/* ---------- Software & tools (was Equipment) ---------- */
export const EQUIP_STATS = [
  { n: "12+", l: "Core Platforms" },
  { n: "500", l: "Max LOD" },
  { n: "4", l: "CAD / CAE Suites" },
  { n: "100%", l: "US Standards" },
];

export const EQUIPMENT = [
  { cat: "BIM & Coordination", items: ["Autodesk Revit — LOD 100–500", "AutoCAD drafting & detailing", "Navisworks clash detection", "DWG · RVT · IFC · PDF outputs"] },
  { cat: "Mechanical CAD / CAE", items: ["SolidWorks", "CATIA V5", "Siemens NX", "GD&T & tolerance stack-up", "FEA — thermal / structural / vibrational", "Teamcenter PLM"] },
  { cat: "Planning & Controls", items: ["Primavera P6 scheduling & EVM", "FIDIC / AIA contract administration", "Value engineering", "QA / QC & risk management"] },
  { cat: "Quality & Process", items: ["LEED certification input", "Lean Six Sigma", "FMEA / DFMEA & DFM", "ERP / MRP / SAP"] },
];

/* ---------- Credentials (was Certifications) ---------- */
export const CERTS = [
  { code: "CCM", title: "Certified Construction Manager", meta: "CMAA · Issued 2011" },
  { code: "LEED", title: "LEED AP BD+C", meta: "USGBC / GBCI · Issued 2009" },
  { code: "CQM", title: "Construction Quality Management", meta: "U.S. Army Corps of Engineers · 2007" },
  { code: "PMP", title: "Project Management Professional", meta: "PMI · In progress" },
  { code: "P6", title: "Primavera P6 · EVM", meta: "Scheduling & earned value" },
  { code: "GD&T", title: "GD&T & Tolerance Stack-up", meta: "ASME Y14.5" },
  { code: "FEA", title: "FEA Validation", meta: "Thermal · Structural · Vibrational" },
  { code: "LSS", title: "Lean Six Sigma", meta: "Process discipline" },
];

export const ENLISTMENTS = [
  "U.S. Army Corps of Engineers — CQM",
  "USGBC — LEED Accredited Professional",
  "CMAA — Certified Construction Manager",
  "PMI — PMP (in progress)",
  "LAUSD facilities & bond programs",
  "Santa Monica College bond program",
  "LA Metro capital projects",
  "Pasadena City College — Owner's Rep",
];

/* ---------- Leadership ---------- */
export type Leader = {
  initials: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  credentials: string[];
  focus: string[];
  base?: string;
  experience: { role: string; org: string; period: string }[];
};

export const LEADERS: Leader[] = [
  {
    initials: "KH",
    name: "Mr. Kamran Hayat",
    role: "Founder & CEO · Civil Engineer",
    img: "/team/kamran-hayat.jpg",
    bio: "A civil engineer and project leader with 28 years directing large-scale infrastructure delivery across public-works, institutional and housing programs — rising to senior project-manager and project-director roles on major national engineering programs. Founder and CEO of Brixen, he brings the planning rigor and field experience that anchor the firm's drawing standards.",
    credentials: ["MSc Engineering Project Management — Gold Medalist, GPA 4.0 (CASE / UET Taxila)", "BSc Civil Engineering — NUST, MCE Risalpur"],
    focus: ["Highways & major roads", "Bridges, flyovers & structures", "Infrastructure development", "Housing & institutional programs", "Planning & delivery oversight"],
    base: "Pakistan",
    experience: [
      { role: "Senior Project Manager", org: "National infrastructure programs", period: "Career" },
      { role: "Project Director", org: "Housing & development programs", period: "Career" },
      { role: "Assistant Chief Engineer", org: "International development mission", period: "Career" },
    ],
  },
  {
    initials: "KB",
    name: "Mr. Kashan Bhatti, CCM, LEED AP",
    role: "Construction Management & Sustainability Lead",
    img: "/team/kashan-bhatti.jpg",
    bio: "A construction project-management professional with over two decades of experience leading large capital-improvement programs and high-performance sustainable development for educational institutions — having managed more than $2.7 billion in construction across K-12, higher education, transportation and aviation. A Certified Construction Manager (CCM) and LEED Accredited Professional, he pairs a passion for sustainability and innovation with deep expertise in client relationships, RFP responses and securing new contracts.",
    credentials: ["CCM — Certified Construction Manager (CMCI)", "LEED AP BD+C — USGBC", "PMP — in progress (PMI)"],
    focus: ["Primavera P6 scheduling & EVM", "FIDIC / AIA contract administration", "Value engineering", "QA/QC & risk", "LEED certification", "BIM / Revit coordination"],
    base: "Los Angeles, California, USA",
    experience: [
      { role: "Project Director — Owner's Representative", org: "Pasadena City College", period: "2024 – Present" },
      { role: "Director", org: "Anser Advisory", period: "2022 – Present" },
      { role: "Project Director — Owner's Representative", org: "Los Angeles Metro", period: "2023 – 2024" },
      { role: "Senior Construction Manager", org: "Vanir Construction Management", period: "2007 – 2022" },
      { role: "Senior Construction Manager", org: "Santa Monica College", period: "2018 – 2022" },
      { role: "Owner's Authorized Representative", org: "Los Angeles Unified School District", period: "2007 – 2018" },
    ],
  },
  {
    initials: "WG",
    name: "Mr. Waleed Iqbal Ghauri",
    role: "Mechanical / Manufacturing / Automation Engineer",
    img: "/team/waleed-ghauri.jpg",
    bio: "A manufacturing and mechanical engineer with 14+ years across aerospace, defense, automotive and critical power systems — including airborne electro-optical systems at L3HARRIS WESCAM and data-center power products. He leads precision 3D modeling, GD&T detailing and FEA validation, bringing manufacturing-grade accuracy to Brixen's drawing and modeling output.",
    credentials: ["Mechanical Engineering — Sheridan College, ON", "Based in Dallas, TX, USA"],
    focus: ["SolidWorks · CATIA V5 · Siemens NX", "GD&T & stack-up", "FEA (thermal/structural/vibrational)", "Robotics & automation", "Lean Six Sigma", "DFM / DFMEA"],
    base: "Dallas, Texas, USA",
    experience: [
      { role: "Manufacturing Engineering Manager", org: "Motor Controls Inc., Dallas TX", period: "2025 – Present" },
      { role: "Senior Associate, Manufacturing Engineering", org: "L3Harris Technologies", period: "2020 – Present" },
      { role: "Mechanical Designer / Project Engineering", org: "ABC Technologies", period: "2018 – 2020" },
      { role: "Manufacturing Engineering & Tooling", org: "Berger", period: "2013 – 2018" },
    ],
  },
];

/* Group structure (Team page) */
export const DIRECTORS = GROUP.map((g) => ({ title: g.title, scope: `${g.scope} — ${g.region}` }));

/* ---------- Discipline coverage (Team stat tiles) ---------- */
export const STAFF = [
  { n: "BIM", l: "Revit · Navisworks" },
  { n: "CAD", l: "AutoCAD · DWG" },
  { n: "MEP", l: "HVAC · Power" },
  { n: "CAE", l: "FEA · GD&T" },
  { n: "CM", l: "P6 · EVM" },
  { n: "LEED", l: "Sustainability" },
];

/* ---------- Offices ---------- */
export const OFFICES = [
  {
    city: "Austin",
    tag: "US Head Office",
    addr: "Brixen Consultancy LLC",
    phone: "+1 (229) 210-3506",
    email: "Info@brixenconsultancy.com",
  },
  {
    city: "Pakistan",
    tag: "Civil Delivery",
    addr: "Brixen Associates — Civil construction & project delivery",
    phone: "+92 333 9938764 · +92 42 3718 0044",
    email: "Sales@brixenconsultancy.com",
  },
  {
    city: "Dubai",
    tag: "UAE",
    addr: "Spirit Brixen Building Contracting LLC — Building contracting, UAE",
    phone: "+971 56 299 4019",
    email: "Info@brixenconsultancy.com",
  },
];

export const YEAR = 2026;
