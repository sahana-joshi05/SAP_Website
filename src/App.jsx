import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock3,
  Download,
  GraduationCap,
  Headphones,
  Instagram,
  KeyRound,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
  X,
} from "lucide-react";
import { courses, testimonials } from "./data";
import SampleTestimonials from "./components/SampleTestimonials";
import StudentFeedbackVideos from "./components/StudentFeedbackVideos";
import SapCoursePlacementBangalore from "./pages/SapCoursePlacementBangalore";
import SapTrainingCanada from "./pages/SapTrainingCanada";
import SapCourseToronto from "./pages/SapCourseToronto";
import SapTrainingVancouver from "./pages/SapTrainingVancouver";
import SapTrainingWinnipeg from "./pages/SapTrainingWinnipeg";
import SapFicoTrainingBangalore from "./pages/SapFicoTrainingBangalore";
import SapFicoTrainingToronto from "./pages/SapFicoTrainingToronto";
import DataAnalyticsBellary from "./pages/DataAnalyticsBellary";
import DataAnalyticsHubballiDharwad from "./pages/DataAnalyticsHubballiDharwad";
import BestJobOrientedCoursesBangalore from "./pages/BestJobOrientedCoursesBangalore";

const phone = "6361702540";
const email = "svcuriotech@gmail.com";
const instagramUrl = "https://www.instagram.com/sv_curiotech?stkn=MW96eG5sNWpla3h3cQ==";
const linkedinUrl = "https://www.linkedin.com/in/sv-curiotech-7764a0419?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const officialCompanyLogos = [
  ["Accenture", "/assets/sap-fico-page/accenture.png"],
  ["IBM", "/assets/sap-fico-page/ibm.png"],
  ["Deloitte", "/assets/sap-fico-page/deloitte.png"],
  ["TCS", "/assets/sap-fico-page/tcs.png"],
  ["Infosys", "/assets/sap-fico-page/infosys.png"],
  ["Capgemini", "/assets/sap-fico-page/capgemini.png"],
  ["Cognizant", "/assets/sap-fico-page/cognizant.png"],
  ["Wipro", "/assets/sap-fico-page/wipro.png"],
  ["HCLTech", "/assets/sap-fico-page/hcltech.png"],
  ["Tech Mahindra", "/assets/sap-fico-page/techmahindra.png"],
  ["EY", "/assets/sap-fico-page/ey.png"],
  ["KPMG", "/assets/sap-fico-page/kpmg.png"],
];
const branchAddresses = [
  {
    city: "Bangalore",
    address: "Unit 101, Oxford Towers, 139, Kodihalli, H.A.L II Stage, H A L II Stage Police Station, Bangalore North, Bangalore - 560008",
    mapQuery: "Unit 101 Oxford Towers 139 Kodihalli HAL II Stage Bangalore 560008",
  },
  {
    city: "Kalaburagi",
    address: "Bhagya Nagar 1st Right, near ESIC Hospital, Kalaburagi - 585106",
    mapQuery: "Bhagya Nagar 1st Right near ESIC Hospital Kalaburagi 585106",
  },
];

function trackConversion(eventName, details = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    event_category: "lead_generation",
    page_path: window.location.pathname,
    ...details,
  });
}

function registrationLink(course = "") {
  return course ? `/contact?course=${encodeURIComponent(course)}#registration` : "/contact#registration";
}

function courseDetailPath(course) {
  const slug = typeof course === "string" ? course : course?.slug;
  if (slug === "sap-mm") return "/best-sap-mm-course-in-bangalore/";
  if (slug === "sap-sd") return "/sap-sd-training-in-bangalore/";
  return slug === "sap-fico" ? "/best-sap-fico-course-in-Bangalore/" : `/courses/${slug}`;
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M16.01 3.2c-7.06 0-12.8 5.63-12.8 12.56 0 2.39.69 4.72 1.99 6.73L3.08 28.8l6.52-2.06a12.99 12.99 0 0 0 6.41 1.66c7.06 0 12.8-5.63 12.8-12.56S23.07 3.2 16.01 3.2Zm0 22.93c-2.03 0-4.01-.58-5.72-1.68l-.42-.27-3.77 1.19 1.22-3.63-.28-.44a10.17 10.17 0 0 1-1.56-5.39c0-5.68 4.72-10.3 10.53-10.3s10.53 4.62 10.53 10.3-4.72 10.22-10.53 10.22Zm5.78-7.67c-.31-.15-1.85-.89-2.14-.99-.29-.11-.5-.15-.71.15-.21.31-.81.99-.99 1.19-.18.21-.37.23-.68.08-.31-.15-1.32-.48-2.51-1.51-.93-.81-1.56-1.82-1.74-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.71-1.68-.97-2.3-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.58s1.13 3 1.29 3.2c.16.21 2.23 3.34 5.41 4.68.76.32 1.35.51 1.81.65.76.24 1.45.21 2 .13.61-.09 1.85-.74 2.11-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.21-.6-.36Z" />
    </svg>
  );
}

function upsertMeta(selector, create, apply) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  apply(element);
}

function removeHeadTag(selector) {
  document.head.querySelector(selector)?.remove();
}

function usePageSeo({
  title,
  description,
  keywords,
  canonical,
  image = "https://www.svcuriotech.com/assets/sap-training-hero.jpg",
  geo = { region: "IN-KA", placename: "Bangalore" },
}) {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      return tag;
    }, (tag) => tag.setAttribute("content", description));
    upsertMeta('meta[name="keywords"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "keywords");
      return tag;
    }, (tag) => tag.setAttribute("content", keywords));
    upsertMeta('link[rel="canonical"]', () => {
      const tag = document.createElement("link");
      tag.setAttribute("rel", "canonical");
      return tag;
    }, (tag) => tag.setAttribute("href", canonical));
    upsertMeta('meta[property="og:title"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:title");
      return tag;
    }, (tag) => tag.setAttribute("content", title));
    upsertMeta('meta[property="og:description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:description");
      return tag;
    }, (tag) => tag.setAttribute("content", description));
    upsertMeta('meta[property="og:image"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:image");
      return tag;
    }, (tag) => tag.setAttribute("content", image));
    upsertMeta('meta[property="og:url"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:url");
      return tag;
    }, (tag) => tag.setAttribute("content", canonical));
    upsertMeta('meta[property="og:type"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:type");
      return tag;
    }, (tag) => tag.setAttribute("content", "website"));
    upsertMeta('meta[name="twitter:card"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:card");
      return tag;
    }, (tag) => tag.setAttribute("content", "summary_large_image"));
    upsertMeta('meta[name="twitter:title"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:title");
      return tag;
    }, (tag) => tag.setAttribute("content", title));
    upsertMeta('meta[name="twitter:description"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:description");
      return tag;
    }, (tag) => tag.setAttribute("content", description));
    upsertMeta('meta[name="twitter:image"]', () => {
      const tag = document.createElement("meta");
      tag.setAttribute("name", "twitter:image");
      return tag;
    }, (tag) => tag.setAttribute("content", image));
    if (geo) {
      upsertMeta('meta[name="geo.region"]', () => {
        const tag = document.createElement("meta");
        tag.setAttribute("name", "geo.region");
        return tag;
      }, (tag) => tag.setAttribute("content", geo.region));
      upsertMeta('meta[name="geo.placename"]', () => {
        const tag = document.createElement("meta");
        tag.setAttribute("name", "geo.placename");
        return tag;
      }, (tag) => tag.setAttribute("content", geo.placename));
    } else {
      removeHeadTag('meta[name="geo.region"]');
      removeHeadTag('meta[name="geo.placename"]');
    }
  }, [canonical, description, geo, image, keywords, title]);
}

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="SV CurioTech home">
      <span className="logo-mark"><img src="/assets/sv-curiotech-mark.png" alt="" /></span>
      <span className="logo-copy"><strong>SV <span>CURIO</span>TECH</strong><small>Innovating education through technology</small></span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><BadgeCheck size={15} /> Admissions open for upcoming weekday & weekend batches</span>
          <div><a href={`tel:+91${phone}`}><Phone size={14} /> +91 {phone}</a><a href={`mailto:${email}`}><Mail size={14} /> {email}</a></div>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <Logo />
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
          <nav className={open ? "nav open" : "nav"}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <div className="nav-dropdown">
              <NavLink to="/courses">Courses <ChevronDown size={15} /></NavLink>
              <div className="dropdown-menu">
                {courses.map((course) => <Link key={course.slug} to={courseDetailPath(course)}>{course.title}</Link>)}
              </div>
            </div>
            <NavLink to="/placements">Placements</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link className="button button-sm" to="/contact#registration">Free Counselling <ArrowRight size={16} /></Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Building confident, industry-ready SAP professionals through expert instruction and hands-on practice.</p>
          <div className="footer-contact"><a href={`tel:+91${phone}`}><Phone size={17} /> +91 {phone}</a><a href={`mailto:${email}`}><Mail size={17} /> {email}</a></div>
          <div className="footer-social" aria-label="SV CurioTech social links">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="SV CurioTech Instagram"><Instagram size={17} /> Instagram</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="SV CurioTech LinkedIn"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </div>
        <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/courses">SAP courses</Link><Link to="/sap-server-access">SAP server access</Link><Link to="/blog/sap-fico-training-bangalore-career-guide">SAP FICO career guide</Link><Link to="/sap-fico-training-in-bangalore">SAP FICO training in Bangalore</Link><Link to="/sap-fico-training-in-toronto">SAP FICO training in Toronto</Link><Link to="/sap-course-in-toronto">SAP course in Toronto</Link><Link to="/sap-training-in-vancouver">SAP training in Vancouver</Link><Link to="/sap-training-in-winnipeg">SAP training in Winnipeg</Link><Link to="/sap-course-in-canada">SAP course in Canada</Link><Link to="/sap-training-in-coimbatore">SAP training in Coimbatore</Link><Link to="/sap-training-in-mysore">SAP training in Mysore</Link><Link to="/sap-training-in-mangalore">SAP training in Mangalore</Link><Link to="/sap-training-in-kalaburagi">SAP training in Kalaburagi</Link><Link to="/sap-training-in-belagavi">SAP training in Belagavi</Link><Link to="/sap-training-in-jp-nagar">SAP training in JP Nagar</Link><Link to="/sap-training-in-marathahalli">SAP training in Marathahalli</Link><Link to="/sap-training-in-hsr-layout">SAP training in HSR Layout</Link><Link to="/sap-training-in-yeshwanthpur">SAP training in Yeshwanthpur</Link><Link to="/sap-training-in-electronic-city">SAP training in Electronic City</Link><Link to="/sap-training-in-nagarbhavi">SAP training in Nagarbhavi</Link><Link to="/sap-course-in-jayanagar">SAP course in Jayanagar</Link><Link to="/placements">Placement support</Link><Link to="/contact">Contact us</Link></div>
        <div><h4>Popular links</h4><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms & Conditions</Link><Link to="/placements">Placement Support</Link>{courses.slice(0, 3).map(c => <Link key={c.slug} to={courseDetailPath(c)}>{c.title}</Link>)}</div>
        <div className="footer-locations"><h4>Visit us</h4>{branchAddresses.map((branch) => <div className="footer-location" key={branch.city}><h5>{branch.city}</h5><p className="address"><MapPin size={18} /> {branch.address}</p><a className="map-link" href={`https://maps.google.com/?q=${encodeURIComponent(branch.mapQuery)}`} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15} /></a></div>)}</div>
      </div>
      <div className="container copyright"><span>© {new Date().getFullYear()} SV CurioTech. All rights reserved.</span><span>Designed for ambitious careers.</span></div>
    </footer>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const hideSharedTestimonials = ["/privacy-policy", "/privacy-policy.html", "/terms-and-conditions", "/terms-and-conditions.html"].includes(location.pathname);
  const isSapMmPage = location.pathname === "/best-sap-mm-course-in-bangalore" || location.pathname === "/best-sap-mm-course-in-bangalore/";
  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" }), 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return (
    <div className={isSapMmPage ? "mm-page-shell" : undefined}>
      <Header />
      <main>
        {children}
        {location.pathname !== "/" && !hideSharedTestimonials && !isSapMmPage && <SampleTestimonials />}
      </main>
      <a className="floating-call" href={`tel:+91${phone}`} aria-label="Call SV CurioTech"><Phone size={20} /><span>Call</span></a>
      <a className="whatsapp" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20to%20know%20about%20SAP%20training.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
      <Footer />
    </div>
  );
}

function SapMmPageShell({ children }) {
  return (
    <div className="mm-page-shell" id="top">
      <SapMmHeader />
      <main>{children}</main>
      <a className="floating-call" href={`tel:+91${phone}`} aria-label="Call SV CurioTech"><Phone size={20} /><span>Call</span></a>
      <a className="whatsapp" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20to%20know%20about%20SAP%20MM%20training.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
      <div id="footer-contact">
        <Footer />
      </div>
    </div>
  );
}

function SapMmHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><BadgeCheck size={15} /> Admissions open for SAP MM weekday & weekend batches</span>
          <div><a href={`tel:+91${phone}`}><Phone size={14} /> +91 {phone}</a><a href={`mailto:${email}`}><Mail size={14} /> {email}</a></div>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <a className="logo" href="#top" aria-label="SV CurioTech SAP MM page top" onClick={close}>
            <span className="logo-mark"><img src="/assets/sv-curiotech-mark.png" alt="" /></span>
            <span className="logo-copy"><strong>SV <span>CURIO</span>TECH</strong><small>Innovating education through technology</small></span>
          </a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
          <nav className={open ? "nav open" : "nav"}>
            <a href="#top" onClick={close}>Home</a>
            <a href="#about" onClick={close}>About Us</a>
            <a href="#course" onClick={close}>Course</a>
            <a href="#placements" onClick={close}>Placements</a>
            <a href="#faq" onClick={close}>FAQ</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a className="button button-sm" href="#contact" onClick={close}>Free Counselling <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>
    </>
  );
}

function SapSdPageShell({ children }) {
  return (
    <div className="sd-page-shell" id="top">
      <SapSdHeader />
      <main>{children}</main>
      <a className="floating-call sd-floating-call" href={`tel:+91${phone}`} aria-label="Call SV CurioTech"><Phone size={20} /><span>Call</span></a>
      <a className="whatsapp sd-whatsapp" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20SD%20training%20details.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
      <div id="footer-contact"><Footer /></div>
    </div>
  );
}

function SapSdHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sd-header">
      <div className="sd-contact-ribbon">
        <div className="container">
          <span><BadgeCheck size={15} /> SAP SD weekday, weekend and fast-track batches</span>
          <div>
            <a href={`tel:+91${phone}`}><Phone size={14} /> +91 {phone}</a>
            <a href={`mailto:${email}`}><Mail size={14} /> {email}</a>
          </div>
        </div>
      </div>
      <div className="container sd-nav-panel">
        <a className="sd-brand" href="#top" onClick={close} aria-label="SV CurioTech SAP SD page top">
          <img src="/assets/sv-curiotech-mark.png" alt="" />
          <span><strong>SV CurioTech</strong><small>Sales & Distribution career training</small></span>
        </a>
        <button className="menu-btn sd-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        <nav className={open ? "sd-nav open" : "sd-nav"}>
          <a href="#top" onClick={close}>Home</a>
          <a href="#course" onClick={close}>Course</a>
          <a href="#syllabus" onClick={close}>Syllabus</a>
          <a href="#placements" onClick={close}>Placements</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="sd-nav-cta" href="#contact" onClick={close}>Free Demo <ArrowRight size={16} /></a>
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return <div className={`section-title ${light ? "light" : ""}`}><span className="eyebrow"><Sparkles size={15} /> {eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-grid" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-pill"><span>●</span> Bengaluru career-focused SAP academy</span>
          <h1>SAP Training<br /><span>in Bangalore.</span></h1>
          <p>Learn SAP FICO, MM, SD, ABAP, PP, SuccessFactors, Ariba, Security and GRC with practical system exposure, real business scenarios, interview preparation and guidance that fits your background.</p>
          <div className="hero-actions"><Link className="button" to="/contact#registration">Get Free SAP Counselling <ArrowRight size={18} /></Link><a className="button button-ghost" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20course%20guidance.`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Now</a></div>
          <div className="trust-row"><div className="avatars"><span>PS</span><span>KR</span><span>AM</span><span>+</span></div><div><div className="stars">{[1,2,3,4,5].map(x => <Star key={x} size={15} fill="currentColor" />)}</div><small>Loved by aspiring SAP professionals</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <HeroCourseInfoCard />
          <div className="sap-badge">SAP<span>SKILLS</span></div>
        </div>
      </div>
      <div className="container hero-stats">
        <div><strong>9</strong><span>Career-focused<br />SAP programs</span></div>
        <div><strong>10+</strong><span>Years of trainer<br />experience</span></div>
        <div><strong>100%</strong><span>Hands-on practical<br />learning</span></div>
        <div><strong>1:1</strong><span>Career & interview<br />mentoring</span></div>
      </div>
    </section>
  );
}

function CourseCards({ limit }) {
  const shown = limit ? courses.slice(0, limit) : courses;
  return <div className="course-grid">{shown.map((course) => {
    const Icon = course.icon;
    return <Link className="course-card" to={courseDetailPath(course)} key={course.slug} style={{"--course": course.color}}>
      <div className="course-icon"><Icon /></div><span className="course-label">SAP MODULE</span><h3>{course.title}</h3><h4>{course.subtitle}</h4><p>{course.description}</p>
      <div className="course-meta"><span><Clock3 size={15} /> {course.duration}</span><span>{course.level}</span></div>
      <div className="course-link">Explore course <ArrowRight size={17} /></div>
    </Link>;
  })}</div>;
}

const emptyRegistration = { name: "", email: "", phone: "", course: "" };
const submissionTimeoutMs = 60000;
const fallbackSubmissionMessage = "We couldn't submit the form right now. Please call us at +91 6361702540 or use WhatsApp.";

function LeadForm({ compact = false, variant = "registration", defaultCourse = "", onSuccess, trimAfterCourse = false }) {
  const location = useLocation();
  const [sent, setSent] = useState(false);
  const [localOnly, setLocalOnly] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const requestedCourse = new URLSearchParams(location.search).get("course") || defaultCourse;
  const initialForm = requestedCourse ? { ...emptyRegistration, course: requestedCourse } : emptyRegistration;
  const [form, setForm] = useState(initialForm);
  const submissionUrl = import.meta.env.VITE_LEAD_API_URL || "/api/lead";

  useEffect(() => {
    setForm(requestedCourse ? { ...emptyRegistration, course: requestedCourse } : emptyRegistration);
  }, [requestedCourse]);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLocalOnly(false);
    setSending(true);
    const payload = {
      ...form,
      variant,
      _replyto: form.email,
      _subject: variant === "course-info" || variant === "analytics-top" ? `Course information request - ${form.name}` : `New website registration - ${form.name}`,
      _template: "table",
      _autoresponse: `Dear ${form.name},

Thank you for contacting SV CurioTech.

We have received your details successfully. A member of our admissions team will contact you shortly to understand your learning goals and guide you through the suitable SAP course, schedule, and admission process.

If you need immediate assistance, please call us at +91 ${phone} or email ${email}.

Warm regards,
Admissions Team
SV CurioTech
Innovating Education Through Technology`,
      source: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    let requestTimeout;
    try {
      const controller = new AbortController();
      requestTimeout = window.setTimeout(() => controller.abort(), submissionTimeoutMs);
      const response = await fetch(submissionUrl, {
        method: "POST",
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok === false) {
        const error = new Error(result.error || fallbackSubmissionMessage);
        error.code = result.code || "";
        error.status = response.status;
        throw error;
      }
      setLocalOnly(Boolean(result.local));
      setSent(true);

      trackConversion("generate_lead", {
        lead_type: variant,
        course: form.course || requestedCourse || defaultCourse || "",
        submission_method: "website_form",
      });

      setForm(initialForm);
      onSuccess?.();
    } catch (submissionError) {
      console.error("Lead submission failed", submissionError);
      const message = submissionError instanceof Error ? submissionError.message : "";
      const isServiceConfigError =
        submissionError?.code === "mail_config_missing" ||
        /smtp|SMTP|configured|SMTP_HOST|SMTP_PORT|SMTP_USER|SMTP_PASS/i.test(message);
      setError(
        submissionError.name === "AbortError"
          ? "The form is taking too long. Please call us at +91 6361702540 or use WhatsApp."
          : isServiceConfigError
            ? fallbackSubmissionMessage
            : message || fallbackSubmissionMessage
      );
    } finally {
      if (requestTimeout) window.clearTimeout(requestTimeout);
      setSending(false);
    }
  };

  if (compact) return <Link className="button form-button" to={registrationLink()}>Register Here <ArrowRight size={18} /></Link>;
  if (sent) return <div className="form-success"><span><Check /></span><h3>{variant === "course-info" || variant === "analytics-top" ? "Request received!" : "Thank you for registering!"}</h3><p>{localOnly ? "Saved locally for testing. Add SMTP email settings to send real emails." : "We have emailed you a confirmation. Our admissions team will contact you shortly."}</p><button className="text-button" onClick={() => setSent(false)}>{variant === "course-info" || variant === "analytics-top" ? "Submit another request" : "Submit another registration"}</button></div>;

  if (variant === "server-access") return <form className="lead-form" onSubmit={submit}>
    <label><span>Full name *</span><input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your full name" /></label>
    <label><span>Phone number *</span><input name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" placeholder="+91 98765 43210" /></label>
    <label><span>Email address *</span><input name="email" value={form.email} onChange={update} required type="email" autoComplete="email" placeholder="you@email.com" /></label>
    <label><span>Which server? *</span><select name="course" value={form.course || ""} onChange={update} required>
      <option value="">Select SAP server</option>
      <option>SAP FICO Server Access</option>
      <option>SAP MM Server Access</option>
      <option>SAP SD Server Access</option>
      <option>SAP PP Server Access</option>
      <option>SAP ABAP Server Access</option>
      <option>SAP HANA / S/4HANA Server Access</option>
      <option>Need guidance choosing server</option>
    </select></label>
    {error && <div className="form-error">{error}</div>}
    <button className="button form-button" disabled={sending}>{sending ? "Submitting..." : "Submit Request"} {!sending && <ArrowRight size={18} />}</button>
    <small><Check size={13} /> We will contact you only about SAP server access.</small>
  </form>;

  if (variant === "analytics-top") return <form className="lead-form analytics-lead-form" onSubmit={submit}>
    <label><span>Full name *</span><input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your full name" /></label>
    <label><span>Phone number *</span><input name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" placeholder="+91 98765 43210" /></label>
    <label><span>Email address *</span><input name="email" value={form.email} onChange={update} required type="email" autoComplete="email" placeholder="you@email.com" /></label>
    <label><span>Which course *</span><input name="course" value={form.course || ""} onChange={update} required autoComplete="off" placeholder="Which course?" /></label>
    {error && <div className="form-error">{error}</div>}
    <button className="button form-button" disabled={sending}>{sending ? "Submitting..." : "Submit Request"} {!sending && <ArrowRight size={18} />}</button>
    <small><Check size={13} /> We will contact you only about this course enquiry.</small>
  </form>;

  return <form className="lead-form" onSubmit={submit}>
    <label><span>Full name *</span><input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your full name" /></label>
    <label><span>Email address *</span><input name="email" value={form.email} onChange={update} required type="email" autoComplete="email" placeholder="you@email.com" /></label>
    <label><span>Phone number *</span><input name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" placeholder="+91 98765 43210" /></label>
    {variant === "course-info" && <label><span>Course interested in *</span><input name="course" value={form.course} onChange={update} required autoComplete="off" placeholder="Enter SAP course" /></label>}
    {variant !== "course-info" && <label><span>Course interested in</span><input name="course" value={form.course || ""} onChange={update} autoComplete="off" placeholder="SAP FICO, MM, SD, ABAP..." /></label>}
    {error && <div className="form-error">{error}</div>}
    <button className="button form-button" disabled={sending}>{sending ? "Submitting..." : variant === "course-info" ? "Submit Request" : "Submit Registration"} {!sending && <ArrowRight size={18} />}</button>
    <small><Check size={13} /> We’ll use these details only to contact you about admission.</small>
  </form>;
}

function HeroCourseInfoCard() {
  return (
    <div className="hero-course-card">
      <div className="hero-course-head">
        <span><BookOpen size={15} /> Course enquiry</span>
        <strong>Request for Course Information</strong>
      </div>
      <LeadForm variant="course-info" />
      <div className="hero-course-trust">
        <span><CalendarCheck /> Flexible batches</span>
        <span><BadgeCheck /> Placement assistance</span>
      </div>
    </div>
  );
}

function BrochureRequestModal({ course, onClose }) {
  const [brochureReady, setBrochureReady] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="brochure-modal-title" onMouseDown={onClose}>
      <div className="brochure-modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close form"><X size={18} /></button>
        <div className="hero-course-head">
          <span><BookOpen size={15} /> Download brochure</span>
          <strong id="brochure-modal-title">Register to Get Course Brochure</strong>
        </div>
        <LeadForm variant="course-info" defaultCourse={course.title} onSuccess={() => setBrochureReady(true)} />
        {brochureReady && course.brochureUrl && (
          <a className="brochure-download-link" href={course.brochureUrl} target="_blank" rel="noreferrer">
            <Download size={17} /> Download Brochure
          </a>
        )}
        <div className="hero-course-trust">
          <span><CalendarCheck /> Flexible batches</span>
          <span><BadgeCheck /> Placement assistance</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const trainingHighlights = [
    [BriefcaseBusiness, "Industry-oriented SAP Training", "Learn SAP through business process flows, live examples, configuration practice, and job-focused assignments."],
    [GraduationCap, "Experienced Trainers", "Sessions are guided by trainers who explain SAP concepts with project and interview context."],
    [Target, "Real-time Project Training", "Work through practical scenarios, process documents, master data, transactions, and end-to-end project discussions."],
    [BookOpen, "Practical Training", "Every module is taught with hands-on practice so learners understand how SAP is used in companies."],
    [Users, "Interview Preparation", "Get resume guidance, mock interview support, common SAP questions, and project explanation practice."],
    [Headphones, "Career Guidance", "Speak with our team to choose the right SAP module based on your education, experience, and goals."],
  ];
  const moduleLinks = courses.slice(0, 7);
  const homePriorityLinks = [
    ["Individual SAP Course Pages", "Explore dedicated pages for SAP FICO, MM, SD, PP, ABAP, SuccessFactors, Ariba, Security and GRC.", "/courses"],
    ["Bangalore Location Pages", "Find SAP training pages for Nagarbhavi, Electronic City, Yeshwanthpur and nearby Bangalore learners.", "/sap-training-in-nagarbhavi"],
    ["Canada + Major City Pages", "View Canada and Toronto SAP training pages for international learners.", "/sap-course-in-canada"],
    ["SAP FICO Training in Calgary", "Explore online SAP Finance and Controlling training for learners in Calgary, Alberta.", "/sap-fico-training-in-calgary"],
    ["Course-Specific FAQs", "Compare modules, duration, training mode, topics, and enquiry options from each course page.", "/courses"],
    ["Student Reviews & Testimonials", "Read learner feedback about practical classes, trainer support, and interview preparation.", "/#student-reviews"],
    ["SAP FICO Career Guide", "Read the SAP FICO syllabus, career paths, hands-on practice and interview preparation guide.", "/blog/sap-fico-training-bangalore-career-guide"],
    ["Career Guidance", "Talk to a counsellor before choosing a SAP module, batch, or training mode.", "/contact#registration"],
    ["Trainer-Led Learning", "Understand the trainer experience, module expertise, and project-style teaching approach.", "/about"],
    ["Corporate Training", "Discuss SAP upskilling programs for colleges, teams, and companies.", "/contact#registration"],
    ["Project Practice", "Ask about assignments, SAP system practice, and project-style learning support.", "/contact#registration"],
  ];
  const learnerQuestions = [
    ["I am a fresher. Can I learn SAP?", "Yes. Freshers can start with SAP if the module matches their background. Commerce and MBA learners often explore SAP FICO, supply chain learners may prefer SAP MM or SD, technical learners can look at SAP ABAP, and HR learners can consider SuccessFactors or HCM."],
    ["I am working. Can I manage SAP classes?", "Many learners join while working, so weekday evening and weekend batches are important. Our team explains current batch timing, expected weekly practice, and the module workload before you enrol."],
    ["Will I get practical SAP system exposure?", "The training is designed around business examples, process flows, SAP screens, assignments, and project-style practice so you can explain both the concept and the real use case in interviews."],
  ];
  const moduleGuidance = [
    ["Finance / Commerce", "SAP FICO", "Best suited for accounting, finance, B.Com, M.Com, MBA finance, and professionals who want finance process roles."],
    ["Procurement / Supply Chain", "SAP MM or SAP Ariba", "Useful for purchase, inventory, vendor management, sourcing, procurement, and supply chain career paths."],
    ["Sales / Business Operations", "SAP SD", "Good for learners interested in order-to-cash, pricing, billing, customer master, sales support, and distribution processes."],
    ["Technical / Coding", "SAP ABAP", "Suitable for learners with programming interest who want SAP development, reports, forms, debugging, and technical support roles."],
    ["HR Background", "SAP HCM or SuccessFactors", "Relevant for HR operations, employee central, payroll concepts, performance, recruiting, and cloud HR career paths."],
    ["Manufacturing / Production", "SAP PP", "Useful for production planning, MRP, shop floor processes, capacity planning, and manufacturing support roles."],
  ];
  const homeFaqs = [
    ["Which is the best SAP training institute in Bangalore?", "The best SAP training institute is the one that gives practical SAP system exposure, experienced trainers, real-time project examples, interview preparation, and guidance for choosing the right module. SV CurioTech focuses on these areas for Bangalore learners."],
    ["Which SAP course is best for freshers?", "Freshers should choose based on their education and career goal. SAP FICO suits finance learners, SAP MM suits procurement and supply chain, SAP SD suits sales operations, SAP ABAP suits technical learners, and SuccessFactors or HCM suits HR learners."],
    ["Do you provide online and offline SAP training?", "Yes. Learners can enquire for live online SAP training and classroom training options. Batch mode depends on current schedule and module availability."],
    ["Do you provide placement support after SAP training?", "Learners receive resume guidance, interview preparation, project explanation support, and career opportunity guidance as part of the training support."],
    ["How long does SAP training take?", "Most SAP modules take around 8 to 12 weeks depending on the course, learner schedule, weekday or weekend batch, and practice requirements."],
  ];
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SV CurioTech",
    url: "https://www.svcuriotech.com/",
    email,
    telephone: `+91${phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: branchAddresses[0].address,
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560008",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91${phone}`,
      contactType: "admissions",
      areaServed: ["IN", "CA"],
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SAP training courses",
      itemListElement: courses.map((course) => ({
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "EducationalOrganization",
          name: "SV CurioTech",
          sameAs: "https://www.svcuriotech.com/",
        },
      })),
    },
    sameAs: ["https://www.svcuriotech.com/"],
  };

  usePageSeo({
    title: "SAP Training in Bangalore | Practical SAP Courses | SV CurioTech",
    description: "Get practical SAP training in Bangalore with SAP FICO, MM, SD, PP, ABAP, SuccessFactors, Ariba, Security and GRC. Live online or classroom batches, projects, interview preparation and free counselling.",
    keywords: "SAP training in Bangalore, SAP training institute in Bangalore, SAP courses in Bangalore, SAP classes in Bangalore, practical SAP training Bangalore",
    canonical: "https://www.svcuriotech.com/",
  });

  return (
    <Layout>
      <Hero />
      <StudentFeedbackVideos />
      <section className="logo-strip official-logo-strip">
        <div className="container">
          <span>Skills built for careers at leading enterprises</span>
          <div className="official-logo-row">
            {officialCompanyLogos.map(([name, logo]) => (
              <figure className="official-logo-tile" key={name}>
                <img src={logo} alt={`${name} logo`} />
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section home-training-section">
        <div className="container">
          <SectionTitle eyebrow="SAP training in Bangalore" title="Industry-oriented SAP training with practical career support" text="SV CurioTech covers online and offline SAP training, real-time project practice, trainer guidance, interview preparation, and free career counselling for learners who want a clear path into SAP roles." />
          <div className="home-highlight-grid">
            {trainingHighlights.map(([Icon, title, text]) => <article className="home-highlight-card" key={title}><span><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="home-mode-panel">
            <div><span className="eyebrow"><CalendarCheck size={14}/> Course duration and batches</span><h3>Online and offline SAP batches for weekday and weekend learners</h3><p>Course duration depends on the module. Most functional modules run around 8 to 12 weeks, with weekday, weekend, live online, and classroom options based on current batch availability.</p></div>
            <ul className="check-list">
              <li><Check/> Live instructor-led online training</li>
              <li><Check/> Classroom training support in Bangalore</li>
              <li><Check/> Flexible weekday and weekend batches</li>
              <li><Check/> Free career counselling before enrolment</li>
            </ul>
          </div>
          <div className="human-content-panel">
            <span className="eyebrow"><MessageCircle size={14}/> Learner questions</span>
            <h3>Before joining a SAP course, most learners want honest answers.</h3>
            <p>Many students come to us after feeling confused by too many SAP module names. Some are freshers trying to choose a career path. Some are working professionals who want a better role but cannot pause their job. Some have already watched videos online but still do not know how SAP is used inside a company. Our counselling starts from that point: your background, your time, your comfort with finance, logistics, HR or coding, and the type of SAP role you want to prepare for.</p>
            <div className="learner-question-grid">
              {learnerQuestions.map(([question, answer]) => <article key={question}><h4>{question}</h4><p>{answer}</p></article>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section courses-section"><div className="container"><SectionTitle eyebrow="Find your path" title={<>SAP expertise that moves <span className="gradient-text">careers forward</span></>} text="Choose a focused learning path built around real enterprise workflows, practical assignments, and the skills hiring teams expect." /><CourseCards limit={6} /><div className="center-action"><Link className="button button-outline" to="/courses">View all SAP courses <ArrowRight size={17} /></Link></div></div></section>
      <section className="section why-section">
        <div className="container split">
          <div className="why-visual"><div className="visual-window"><div className="window-bar"><i/><i/><i/><span>Live learning session</span></div><div className="trainer-area"><div className="trainer-graphic"><GraduationCap /></div><span className="session-tag">LIVE • SAP FICO</span><div className="lesson-card"><small>TODAY'S TOPIC</small><strong>Accounts Payable Process</strong><div><i style={{width:"78%"}} /></div></div></div></div><div className="experience-badge"><strong>10+</strong><span>Years of<br />expertise</span></div></div>
          <div className="why-copy"><SectionTitle eyebrow="Why SV CurioTech" title="Training that feels like the real world" text="We combine clear instruction with practical consulting scenarios—so you understand not only what to configure, but why businesses use it." />
            <div className="feature-list">
              <div><span><GraduationCap /></span><div><h3>Learn from working professionals</h3><p>Trainers bring real implementation knowledge into every session.</p></div></div>
              <div><span><Target /></span><div><h3>Practice with business scenarios</h3><p>Assignments, case studies, and guided projects turn concepts into skill.</p></div></div>
              <div><span><BriefcaseBusiness /></span><div><h3>Prepare for the opportunity</h3><p>CV guidance, mock interviews, and placement support help you show your value.</p></div></div>
            </div>
            <Link className="text-link" to="/about">Discover our approach <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="section local-proof-section">
        <div className="container local-proof-grid">
          <div>
            <span className="eyebrow"><MapPin size={14}/> Bangalore SAP learners</span>
            <h2>Built for learners from Nagarbhavi, Yeshwanthpur, Electronic City and across Bangalore.</h2>
            <p>Local SAP searches usually need more than a city name. A learner wants to know whether the institute understands their schedule, commute, background, and job goals. SV CurioTech supports learners from west Bangalore, north Bangalore, Electronic City, nearby colleges, IT corridors, finance teams, procurement teams, HR teams and career-switching backgrounds.</p>
            <p>Whether you are comparing SAP FICO training in Bangalore, SAP MM training near your area, SAP ABAP classes with practical coding, or SuccessFactors training for HR roles, our counsellor helps you understand the module before you join.</p>
          </div>
          <div className="local-proof-card">
            <h3>What makes the content useful for ranking?</h3>
            <ul className="check-list">
              <li><Check/> Clear explanation of who each SAP module is for</li>
              <li><Check/> Bangalore location relevance without keyword stuffing</li>
              <li><Check/> Practical training, projects, interviews and batch details</li>
              <li><Check/> Internal links to course, location and Canada pages</li>
              <li><Check/> Student trust signals, reviews and enquiry options</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section journey-section"><div className="container"><SectionTitle light eyebrow="Your learning journey" title="From curious beginner to confident consultant" text="A structured path that keeps you moving—with guidance at every important step." /><div className="journey-grid">
        {[["01","Discover","Choose the right SAP path with a free career consultation."],["02","Learn","Build strong foundations through expert-led interactive sessions."],["03","Apply","Solve assignments and complete realistic end-to-end projects."],["04","Launch","Sharpen your profile, practice interviews, and pursue opportunities."]].map((x,i)=><div key={x[0]} className="journey-card"><span>{x[0]}</span><div className="journey-icon">{[<MessageCircle/>,<BookOpen/>,<Target/>,<Rocket/>][i]}</div><h3>{x[1]}</h3><p>{x[2]}</p>{i<3 && <ArrowRight className="journey-arrow"/>}</div>)}
      </div></div></section>
      <SampleTestimonials limit={18} />
      <section className="section home-faq-section">
        <div className="container">
          <SectionTitle eyebrow="SAP training FAQs" title="Answers that help learners decide with confidence" text="These FAQs are written for real search questions from students, freshers, working professionals and career switchers comparing SAP training options." />
          <div className="home-faq-grid">
            {homeFaqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section demo-section"><div className="container demo-wrap"><div className="demo-copy"><span className="eyebrow light"><Sparkles size={15}/> Free career counselling</span><h2>Ask about courses, batches, fees, and career path.</h2><p>Share your details and our admissions team will contact you with SAP module guidance, course duration, batch information, interview preparation support, and online or offline training options.</p><div className="demo-points"><span><Check/> WhatsApp and call support</span><span><Check/> Course guidance</span><span><Check/> Enquiry CTA</span></div><div className="home-cta-row"><a className="button button-ghost light-ghost" href={`tel:+91${phone}`}><Phone size={17}/> Call Now</a><a className="button button-ghost light-ghost" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20free%20SAP%20career%20counselling.`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></div></div><div className="demo-form-card"><h3>Ready to learn SAP?</h3><p>Register now and our admissions team will contact you.</p><LeadForm compact /></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </Layout>
  );
}

function SapTrainingBangalorePage() {
  const moduleCards = [
    ["SAP FICO", "Finance, accounting, controlling, GST, assets and reporting", "/sap-fico-training-in-bangalore"],
    ["SAP MM", "Procurement, inventory, vendor process and procure-to-pay", "/best-sap-mm-course-in-bangalore/"],
    ["SAP SD", "Sales, pricing, delivery, billing and order-to-cash", "/sap-sd-training-in-bangalore/"],
    ["SAP ABAP", "Reports, debugging, forms, exits and technical development", "/courses/sap-abap"],
    ["SAP SuccessFactors", "HR cloud, employee central, recruitment and performance", "/courses/successfactors"],
    ["SAP S/4HANA", "Modern ERP concepts, Fiori awareness and migration basics", "/courses"],
    ["SAP PP", "Production planning, MRP, BOM, routing and shop floor process", "/courses/sap-pp"],
    ["SAP Ariba", "Sourcing, supplier collaboration and procurement cloud basics", "/courses/sap-ariba"],
  ];

  const proofStats = [
    ["10+", "years training experience"],
    ["3", "months free SAP server access"],
    ["Live", "online and classroom batches"],
    ["100%", "practical process-focused training"],
  ];

  const syllabusSteps = [
    ["SAP foundations", "ERP basics, SAP navigation, master data, transactions, organizational structure and how businesses use SAP every day."],
    ["Module deep dive", "Choose FICO, MM, SD, ABAP, PP, HCM, SuccessFactors, Ariba or another SAP path based on your background and career goal."],
    ["Configuration and process practice", "Work through guided scenarios, transaction flows, business documents, testing points and common support issues."],
    ["Integration learning", "Understand how finance, procurement, sales, inventory, production, HR and reporting connect inside SAP projects."],
    ["Project and assignments", "Complete a practical capstone, explain business scenarios clearly and build confidence for interviews."],
    ["Career preparation", "Resume polishing, mock interviews, profile guidance, job search support and module-specific interview questions."],
  ];

  const differenceCards = [
    ["Consultant-led classes", "Learn from trainers who explain SAP through project-style examples, not only screen navigation."],
    ["Live SAP practice", "Get hands-on exposure with SAP server access so every concept becomes something you can actually perform."],
    ["Small interactive batches", "Ask questions, revise difficult topics and practice at a pace that works for students and working professionals."],
    ["Placement assistance", "Get resume guidance, mock interviews, interview questions and job opening support after training."],
  ];

  const audience = [
    "B.Com, M.Com, MBA and finance graduates",
    "BE, B.Tech, BCA, MCA and technical learners",
    "Procurement, sales, logistics and operations professionals",
    "HR professionals exploring SuccessFactors or HCM",
    "Freshers looking for job-oriented SAP training",
    "Working professionals planning a career switch",
  ];

  const faqs = [
    ["Which is the best SAP training institute in Bangalore?", "The best SAP training institute should provide practical SAP system exposure, experienced trainers, clear module guidance, project-style assignments, interview preparation and placement assistance. SV CurioTech focuses on all these areas for Bangalore learners."],
    ["Which SAP course is best for freshers?", "Freshers should choose based on their education and comfort area. SAP FICO suits finance learners, SAP MM suits procurement and supply chain, SAP SD suits sales operations, SAP ABAP suits technical learners, and SuccessFactors suits HR learners."],
    ["Do you provide classroom and online SAP training in Bangalore?", "Yes. Learners can enquire for live online SAP training, classroom batches, weekday batches, weekend batches and fast-track options based on current schedule and module availability."],
    ["Will I get SAP server access for practice?", "Yes. The training path includes hands-on SAP practice. Learners can also explore dedicated SAP server access support for FICO, MM, SD, ABAP, PP, HCM and other modules."],
    ["How long does SAP training take?", "Most SAP modules take around 8 to 12 weeks depending on the module, batch type, learner practice and trainer schedule."],
    ["Do you provide placement support after SAP training?", "Yes. SV CurioTech provides resume guidance, interview preparation, mock interview support, project explanation practice and job opportunity guidance. Final selection depends on learner skills and company hiring process."],
    ["Can non-technical students learn SAP?", "Yes. Many SAP functional modules do not require coding. Finance, procurement, sales, HR and operations learners can choose functional modules, while technical learners can explore SAP ABAP."],
    ["Do you help with SAP certification?", "Yes. We provide course completion support and guidance for SAP certification preparation. Official SAP certification is conducted separately by SAP."],
  ];

  const internalLinks = [
    ["SAP FICO Training in Bangalore", "/sap-fico-training-in-bangalore"],
    ["Best SAP MM Course in Bangalore", "/best-sap-mm-course-in-bangalore/"],
    ["SAP SD Training in Bangalore", "/sap-sd-training-in-bangalore/"],
    ["SAP Server Access", "/sap-server-access"],
    ["SAP Course with Placement", "/sap-course-with-placement-bangalore"],
    ["All SAP Courses", "/courses"],
  ];

  usePageSeo({
    title: "SAP Training in Bangalore | Practical SAP Courses with Placement Support",
    description: "Join SAP training in Bangalore at SV CurioTech. Learn SAP FICO, MM, SD, ABAP, S/4HANA, SuccessFactors and more with live SAP practice, projects, certification guidance and placement assistance.",
    keywords: "SAP training in Bangalore, SAP course in Bangalore, SAP institute in Bangalore, SAP classes in Bangalore, SAP FICO training Bangalore, SAP MM training Bangalore, SAP SD training Bangalore, SAP S/4HANA training Bangalore",
    canonical: "https://www.svcuriotech.com/sap-training-in-bangalore/",
    image: "https://www.svcuriotech.com/assets/corporate-sap-meeting-hero.png",
    geo: {
      locality: "Bangalore",
      region: "Karnataka",
      country: "IN",
    },
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in Bangalore",
    description: "Practical SAP training in Bangalore covering SAP FICO, MM, SD, ABAP, S/4HANA, SuccessFactors, live SAP practice, projects, interview preparation and placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
      telephone: `+91${phone}`,
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: branchAddresses[0].address,
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560008",
        addressCountry: "IN",
      },
    },
    courseMode: ["Classroom", "Online"],
    educationalLevel: "Beginner to Advanced",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite"],
      location: {
        "@type": "Place",
        name: "SV CurioTech Bangalore",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.svcuriotech.com/" },
      { "@type": "ListItem", position: 2, name: "SAP Training in Bangalore", item: "https://www.svcuriotech.com/sap-training-in-bangalore/" },
    ],
  };

  return (
    <Layout>
      <main className="sapblr-page">
        <section className="sapblr-hero">
          <div className="container sapblr-hero-grid">
            <div className="sapblr-hero-copy">
              <span className="sapblr-kicker"><Sparkles size={16} /> SAP training in Bangalore</span>
              <h1>SAP Training in Bangalore for Practical ERP Careers</h1>
              <p>Learn SAP the way companies actually use it: finance postings, procurement flows, sales billing, HR processes, technical development, S/4HANA awareness and project-style problem solving.</p>
              <div className="sapblr-actions">
                <a className="sapblr-primary" href="#sapblr-enquiry">Book Free Demo <ArrowRight size={18} /></a>
                <a className="sapblr-secondary" href={`tel:+91${phone}`}><Phone size={17} /> Talk to Advisor</a>
                <a className="sapblr-link" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20training%20in%20Bangalore%20details.`} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> WhatsApp</a>
              </div>
              <div className="sapblr-trust-row">
                <span><BadgeCheck size={16} /> Live SAP practice</span>
                <span><CalendarCheck size={16} /> Weekday and weekend batches</span>
                <span><BriefcaseBusiness size={16} /> Placement assistance</span>
              </div>
            </div>
            <aside className="sapblr-hero-card" aria-label="SAP training highlights">
              <figure>
                <img src="/assets/corporate-sap-meeting-hero.png" alt="SAP training classroom discussion with enterprise dashboard" />
              </figure>
              <div className="sapblr-card-meter">
                <strong>Choose your SAP path</strong>
                <span>FICO, MM, SD, ABAP, SuccessFactors, S/4HANA and more</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="sapblr-proof">
          <div className="container">
            {proofStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="section sapblr-intro">
          <div className="container sapblr-split">
            <div>
              <span className="sapblr-label">Why SAP in Bangalore</span>
              <h2>Bangalore is one of India's strongest places to begin a SAP career.</h2>
              <p>Bangalore has IT service companies, consulting firms, captive centers, manufacturing teams, finance shared services, procurement teams and HR operations using SAP. That means learners need more than a certificate. They need module clarity, practical system exposure and confidence to explain business scenarios.</p>
              <p>SV CurioTech helps you choose the right SAP module based on your education, work experience and target job role. The training is built around live examples, assignments, interview questions and project explanation practice.</p>
            </div>
            <div className="sapblr-note">
              <h3>What makes this page different?</h3>
              <p>This course page is written for real learners searching for SAP training in Bangalore: freshers, working professionals, finance learners, supply chain teams, sales operations teams, HR professionals and technical graduates.</p>
              <a href="#sapblr-modules">Compare SAP modules <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section sapblr-modules" id="sapblr-modules">
          <div className="container">
            <SectionTitle eyebrow="SAP course options" title="Choose the SAP module that fits your background" text="Every learner does not need the same SAP module. Compare the most requested SAP courses in Bangalore and speak to a counsellor before choosing." />
            <div className="sapblr-module-grid">
              {moduleCards.map(([title, text, href], index) => (
                <Link className="sapblr-module-card" to={href} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <b>Explore course <ArrowRight size={15} /></b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section sapblr-difference">
          <div className="container sapblr-difference-grid">
            <div>
              <span className="sapblr-label light">SV CurioTech advantage</span>
              <h2>Training built for practical confidence, not only syllabus completion.</h2>
              <p>Our SAP classes connect concepts with real business decisions. You learn why a company creates master data, why a purchase order matters, how billing reaches finance, and how support teams analyze tickets.</p>
            </div>
            <div className="sapblr-difference-cards">
              {differenceCards.map(([title, text]) => <article key={title}><ShieldCheck size={22} /><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section sapblr-path">
          <div className="container">
            <SectionTitle eyebrow="Learning path" title="A structured SAP syllabus from basics to interview readiness" text="The exact topics depend on the SAP module you select, but the learning journey follows a clear career-focused structure." />
            <div className="sapblr-path-grid">
              {syllabusSteps.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sapblr-career">
          <div className="container sapblr-career-grid">
            <div>
              <span className="sapblr-label">Who can join?</span>
              <h2>SAP training is suitable for freshers and professionals from many backgrounds.</h2>
              <div className="sapblr-audience">
                {audience.map((item) => <span key={item}><Check size={15} /> {item}</span>)}
              </div>
            </div>
            <div>
              <span className="sapblr-label">Career support</span>
              <h2>Prepare for real SAP job conversations.</h2>
              <p>Placement assistance includes resume guidance, project explanation practice, common interview questions, mock interview support and job opening guidance for eligible learners.</p>
              <div className="sapblr-role-cloud">
                {["SAP Functional Consultant", "SAP Support Analyst", "SAP End User", "SAP ABAP Developer", "SAP Business Analyst", "S/4HANA Associate", "SAP Key User", "ERP Process Analyst"].map((role) => <span key={role}>{role}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section sapblr-placement" id="placements">
          <div className="container">
            <SectionTitle eyebrow="Reviews and placement trust" title="Student feedback, Google-style reviews and company exposure" text="Watch learner feedback, read testimonials and see the kind of enterprise ecosystem where SAP skills are valued." />
            <div className="sapblr-review-strip">
              {["Practical trainers", "Clear module guidance", "Interview preparation", "Hands-on SAP practice"].map((item) => <span key={item}><Star size={15} /> {item}</span>)}
            </div>
          </div>
        </section>
        <StudentFeedbackVideos />
        <SampleTestimonials limit={8} />

        <section className="logo-strip official-logo-strip sapblr-company-strip">
          <div className="container">
            <span>SAP skills are useful across global consulting and enterprise teams</span>
            <div className="official-logo-row">
              {officialCompanyLogos.map(([name, logo]) => (
                <figure className="official-logo-tile" key={`sapblr-${name}`}>
                  <img src={logo} alt={`${name} official logo`} />
                  <figcaption>{name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section sapblr-links">
          <div className="container sapblr-links-grid">
            <div>
              <span className="sapblr-label">Internal SAP paths</span>
              <h2>Explore related SAP pages before you join.</h2>
              <p>These pages help learners compare module-specific syllabus, server access, placement-focused SAP training and individual course details.</p>
            </div>
            <div className="sapblr-link-list">
              {internalLinks.map(([label, href]) => <Link key={href} to={href}>{label} <ArrowRight size={15} /></Link>)}
            </div>
          </div>
        </section>

        <section className="section sapblr-faq" id="faq">
          <div className="container">
            <SectionTitle eyebrow="SAP training FAQs" title="Questions students ask before joining SAP classes in Bangalore" />
            <div className="sapblr-faq-grid">
              {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section sapblr-enquiry" id="sapblr-enquiry">
          <div className="container sapblr-enquiry-grid">
            <div>
              <span className="sapblr-label light">Free demo and counselling</span>
              <h2>Start with one call. Choose the right SAP module with confidence.</h2>
              <p>Share your details and our admissions team will contact you with SAP course options, batch timing, fees, demo class information, certification guidance and placement support details.</p>
              <div className="sapblr-contact-row">
                <a href={`tel:+91${phone}`}><Phone size={17} /> +91 {phone}</a>
                <a href={`mailto:${email}`}><Mail size={17} /> {email}</a>
                <a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20training%20in%20Bangalore.`} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> WhatsApp</a>
              </div>
            </div>
            <aside className="sapblr-form-card">
              <h3>Book SAP Training Demo</h3>
              <p>Fill the form and we will call you shortly.</p>
              <LeadForm variant="course-info" defaultCourse="SAP Training in Bangalore" />
            </aside>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </main>
    </Layout>
  );
}

function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="hero-grid"/><div className="container"><span className="eyebrow light"><Sparkles size={15}/>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function LegalPage({ type }) {
  const isPrivacy = type === "privacy";
  const page = isPrivacy
    ? {
        eyebrow: "Website policy",
        title: "Privacy Policy",
        description: "Read how SV CurioTech collects, uses, protects and manages enquiry information submitted through this website.",
        keywords: "SV CurioTech privacy policy, privacy policy SAP training, website privacy policy Bangalore",
        canonical: "https://www.svcuriotech.com/privacy-policy",
        intro: "This Privacy Policy explains how SV CurioTech collects and uses information when you visit our website, submit an enquiry form, call us, email us, or contact us through WhatsApp or social media.",
        sections: [
          ["Information we collect", "We may collect your name, phone number, email address, course interest, preferred training mode, enquiry message and any details you voluntarily share while requesting course information."],
          ["How we use your information", "We use enquiry information to contact you about courses, batches, fees, counselling, placement support, training schedules and related admission communication."],
          ["Marketing and ads", "If you contact us through ads or website forms, we may use your submitted details to respond to your enquiry. We do not sell your personal information to third parties."],
          ["Data sharing", "Information may be shared internally with SV CurioTech admissions or counselling team members. We may also use trusted service providers for website hosting, email delivery, analytics or lead handling."],
          ["Cookies and analytics", "Our website may use analytics, advertising pixels or similar tools to understand visits, improve campaigns and measure enquiry performance."],
          ["Your choices", "You can ask us to correct, update or delete your enquiry details by contacting us at svcuriotech@gmail.com."],
          ["Contact", "For privacy-related questions, contact SV CurioTech at svcuriotech@gmail.com or call +91 6361702540."],
        ],
      }
    : {
        eyebrow: "Website terms",
        title: "Terms & Conditions",
        description: "Read the terms for using the SV CurioTech website, course enquiry forms and training information pages.",
        keywords: "SV CurioTech terms and conditions, SAP training terms, website terms Bangalore",
        canonical: "https://www.svcuriotech.com/terms-and-conditions",
        intro: "These Terms & Conditions apply when you use the SV CurioTech website, submit enquiry forms, contact our team, or rely on information published on our course pages.",
        sections: [
          ["Website information", "Course details, duration, batch timing, fees, syllabus and placement support information may change based on trainer availability, batch plan and current institute policy."],
          ["Enquiries and counselling", "Submitting a form does not confirm admission. Our team will contact you to explain course details, availability and next steps."],
          ["Training and placement support", "SV CurioTech provides training guidance, practical learning support, resume help, mock interview preparation and placement assistance. We do not promise guaranteed employment."],
          ["User responsibility", "Learners are responsible for attending classes, practising regularly, completing assignments and following trainer guidance to improve career readiness."],
          ["Intellectual property", "Website content, course structure, materials, branding and page design belong to SV CurioTech unless otherwise stated. Do not copy or reuse them without permission."],
          ["External links", "Our website may link to WhatsApp, social media, maps, payment or external resources. Those websites have their own terms and policies."],
          ["Contact", "For questions about these terms, contact SV CurioTech at svcuriotech@gmail.com or call +91 6361702540."],
        ],
      };

  usePageSeo({
    title: `${page.title} | SV CurioTech`,
    description: page.description,
    keywords: page.keywords,
    canonical: page.canonical,
  });

  return <Layout>
    <PageHero eyebrow={page.eyebrow} title={page.title} text={page.description} />
    <section className="section legal-section">
      <div className="container legal-wrap">
        <p className="legal-updated">Last updated: October 7, 2026</p>
        <p className="legal-intro">{page.intro}</p>
        <div className="legal-grid">
          {page.sections.map(([heading, text]) => <article key={heading}><h2>{heading}</h2><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  </Layout>;
}

function About() {
  return <Layout><PageHero eyebrow="About SV CurioTech" title="Serious SAP skills. Human learning." text="We help ambitious learners build practical expertise with patient mentorship, realistic projects, and a career-first mindset."/>
    <section className="section"><div className="container split about-split"><div><SectionTitle eyebrow="Our purpose" title="Make enterprise learning clear, practical, and empowering" /><p className="large-copy">SAP can feel complex from the outside. Our job is to make the path understandable—connecting each concept to a business reason and each lesson to a real career skill.</p><p>Based in the heart of Bengaluru, SV CurioTech brings experienced professionals and motivated learners together in an environment where questions are welcome and practice is central.</p></div><div className="value-panel"><span>WHAT WE BELIEVE</span>{[["Clarity over jargon","Complex ideas should be taught in ways people can confidently use."],["Practice over memorization","Skill grows when learners solve realistic problems themselves."],["Progress over pressure","Strong careers are built through consistent, supported learning."]].map(x=><div key={x[0]}><Check/><p><strong>{x[0]}</strong>{x[1]}</p></div>)}</div></div></section>
    <section className="section soft-section"><div className="container"><SectionTitle eyebrow="The SV difference" title="Everything is designed around your progress"/><div className="benefit-grid">{[[GraduationCap,"Expert mentors","Learn from professionals who understand implementation realities."],[Target,"Live projects","Turn theory into skill through assignments and end-to-end cases."],[Users,"Small-group attention","Ask questions, get feedback, and learn without getting lost."],[Clock3,"Flexible learning","Choose practical weekday, weekend, online, or classroom options."],[BriefcaseBusiness,"Career preparation","Strengthen your CV, interviews, and professional confidence."],[Headphones,"Continued support","Stay supported beyond class as you revise and prepare."]].map(([I,t,p])=><div className="benefit-card" key={t}><span><I/></span><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
  </Layout>;
}

function AboutCompany() {
  return <Layout><PageHero eyebrow="About SV CurioTech" title="Learn practical skills. Build professional confidence." text="SV CurioTech sets students on a career path with practical, industry-oriented training and placement-focused support."/>
    <section className="section"><div className="container split about-split"><div><SectionTitle eyebrow="About SV Curiotech" title="Career-focused education from training to opportunity" /><p className="large-copy">SV Curiotech's mission is clear: to set students on a career path. Since 2022, we have supported 5,000+ students to build job-oriented skills that fulfil industry requirements.</p><p>We do not just teach in the classroom. We help our students become ready for the workplace and move toward their desired careers.</p><p>We know that going through a course is only the start. Knowing how to put a skill into use, communicate your strengths, and feel confident in a professional setting is what turns learning into employability.</p><p>That is why our training emphasises practical, industry-oriented learning, enabling students to connect concepts with real industry requirements. Whether you are a fresher, working professional, or career changer, our aim is to ensure your learning is tailored to the career you wish to pursue.</p></div><div className="value-panel"><span>WHAT WE STAND FOR</span>{[["Practical skill building","Hands-on learning helps students apply concepts, not only complete a course."],["Professional confidence","Resume preparation, mock interviews, and interview preparation help learners present themselves clearly."],["Placement-focused support","Our 100% placement support focuses on the road after training and connects learners with real opportunities."]].map(x=><div key={x[0]}><Check/><p><strong>{x[0]}</strong>{x[1]}</p></div>)}</div></div></section>
    <section className="section soft-section"><div className="container"><SectionTitle eyebrow="The SV difference" title="End-to-end support for real career moves" text="Our approach combines hands-on learning, organised preparation, and placement assistance so students are better prepared for the workplace."/><div className="benefit-grid">{[[GraduationCap,"Hands-on learning","Develop practical skills through concepts connected to industry needs."],[Target,"Career alignment","Get learning guidance based on your background and the career you want to pursue."],[Users,"Interview readiness","Build confidence through mock interviews, interview preparation, and communication support."],[Clock3,"Flexible learning","Choose practical weekday, weekend, online, or classroom options."],[BriefcaseBusiness,"Placement support","Receive career support focused on opportunities after training."],[Headphones,"MNC opportunity focus","Prepare for roles in leading MNCs and reputed companies with structured guidance."]].map(([I,t,p])=><div className="benefit-card" key={t}><span><I/></span><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
    <section className="cta-band"><div className="container"><div><span className="eyebrow light"><Sparkles size={15}/> Grow with SV CurioTech</span><h2>Prepare for real opportunities.</h2><p>Learn practical skills, build professional confidence, and take your next career move with structured support.</p></div><Link className="button" to="/contact">Talk to an advisor <ArrowRight size={18}/></Link></div></section>
  </Layout>;
}

function Courses() {
  usePageSeo({
    title: "SAP Courses in Bangalore | FICO, MM, SD, ABAP, PP | SV CurioTech",
    description: "Explore SAP courses at SV CurioTech including SAP FICO, MM, SD, PP, ABAP, SuccessFactors, Ariba, Security and GRC with practical training and placement support.",
    keywords: "SAP courses in Bangalore, SAP FICO course Bangalore, SAP MM course Bangalore, SAP SD course Bangalore, SAP ABAP course Bangalore, SAP PP course Bangalore, SAP certification courses Bangalore",
    canonical: "https://www.svcuriotech.com/courses",
  });

  return <Layout><PageHero eyebrow="SAP training programs" title="Choose the expertise you want to own" text="Focused programs for finance, supply chain, development, HR, and procurement careers."/><section className="section"><div className="container"><CourseCards/></div></section><CtaBand/></Layout>;
}

function SapFicoBlogArticle() {
  const canonical = "https://www.svcuriotech.com/blog/sap-fico-training-bangalore-career-guide";
  const publishedDate = "2026-09-04";
  const articleSections = [
    ["What exactly is SAP FICO?", "SAP FICO stands for Financial Accounting and Controlling. SAP FI supports external financial accounting such as ledgers, accounts payable, accounts receivable, asset accounting, tax and reporting. SAP CO supports internal cost control through cost centers, internal orders, profit centers, budgeting, planning and profitability analysis. Together, these areas help organizations record, analyze and control financial performance inside SAP."],
    ["Why Bangalore is a strong place to learn SAP FICO", "Bangalore has multinational companies, consulting firms, shared service centers, finance operations teams, technology companies and global capability centers. This creates strong demand for learners who understand both accounting concepts and enterprise SAP process flow. Freshers, commerce graduates, accountants, finance professionals and career switchers can use SAP FICO training to move toward ERP support, functional consulting and finance systems roles."],
    ["How a beginner-friendly SAP FICO course should progress", "A good learning path starts with accounting basics and SAP navigation before moving into enterprise structure, FI configuration, CO concepts, cross-module integration, real-time project scenarios and interview preparation. This step-by-step approach helps learners avoid confusion and build confidence before advanced topics."],
    ["What a comprehensive SAP FICO syllabus should include", "SAP FI topics commonly include company code, chart of accounts, General Ledger, Accounts Payable, Accounts Receivable, asset accounting, bank accounting, tax configuration, automatic payments and financial reporting. SAP CO topics include cost centers, profit centers, internal orders, planning, budgeting, allocations and profitability analysis. Learners should also understand how FICO connects with SAP MM, SAP SD and SAP PP."],
    ["Why hands-on practice matters", "Reading about SAP is useful, but practical system work builds real confidence. Learners should practise creating master data, posting transactions, checking document flow, reviewing reports and explaining why each step matters. Hands-on SAP server access is especially useful for assignments, interview preparation and project-style explanation."],
    ["SAP S/4HANA Finance and modern SAP careers", "SAP S/4HANA Finance is now central to many SAP transformation projects. Learners do not need to ignore classic FI and CO concepts, but they should understand how those finance processes appear in modern SAP environments and how businesses use S/4HANA for faster reporting, streamlined data models and integrated finance operations."],
    ["Skills beyond configuration", "Strong SAP FICO consultants need more than transaction-code memory. They need accounting understanding, business process clarity, problem-solving, communication, documentation and the ability to explain requirements to users, technical teams and managers. These skills help learners perform better in interviews and real project discussions."],
    ["Choosing the right SAP FICO training institute", "When comparing SAP FICO training in Bangalore, do not choose only by price. Check trainer experience, practical SAP access, syllabus depth, project exposure, interview preparation, resume guidance and honest placement assistance. Good training should help learners understand finance processes, not simply memorize screens."],
  ];
  const quickFacts = [
    ["Best suited for", "Commerce, finance, accounting, banking, auditing, MBA Finance and ERP learners"],
    ["Core modules", "SAP FI, SAP CO and S/4HANA Finance concepts"],
    ["Practice focus", "Posting flow, master data, reports, integration and project scenarios"],
    ["Career direction", "SAP FICO consultant, finance consultant, support consultant, ERP analyst"],
  ];
  const takeaways = [
    "SAP FICO combines Financial Accounting and Controlling, so learners should understand both external reporting and internal cost control.",
    "A strong SAP FICO course should include FI, CO, S/4HANA Finance concepts, integration, server practice and interview preparation.",
    "Hands-on SAP access helps learners explain transaction flow, master data, document posting and reporting with more confidence.",
    "Placement assistance should mean resume guidance, mock interviews and job-search direction, not unrealistic job guarantees.",
  ];
  const comparisonRows = [
    ["SAP FI", "External financial accounting, statutory reporting and finance document postings.", "GL, AP, AR, assets, bank, tax and financial statements."],
    ["SAP CO", "Internal cost tracking, planning, control and management reporting.", "Cost centers, profit centers, internal orders, budgeting and allocations."],
    ["S/4HANA Finance", "Modern SAP finance platform concepts used in current enterprise transformation projects.", "Universal Journal concepts, faster reporting, streamlined data and modern finance processes."],
  ];
  const syllabusGroups = [
    ["SAP FI Topics", ["Company code", "Chart of accounts", "General Ledger", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Bank accounting", "Tax and automatic payments"]],
    ["SAP CO Topics", ["Cost centers", "Profit centers", "Internal orders", "Planning and budgeting", "Allocations", "Profitability analysis", "Management reporting"]],
    ["Integration Topics", ["FICO with MM", "FICO with SD", "FICO with PP", "Procure-to-pay finance impact", "Order-to-cash finance impact"]],
    ["Interview Topics", ["Business process explanation", "Configuration basics", "Real-time scenarios", "Error discussion", "Project explanation", "Resume preparation"]],
  ];
  const relatedArticles = [
    ["What is SAP Server Access?", "/sap-server-access", "Understand how SAP practice access helps learners build screen confidence."],
    ["SAP FICO Training in Bangalore", "/sap-fico-training-in-bangalore", "Explore the SAP FICO course page, batches and enquiry options."],
    ["SAP Course with Placement", "/sap-course-with-placement-bangalore", "Learn what genuine placement assistance should include."],
  ];
  const faqs = [
    ["Can freshers learn SAP FICO?", "Yes. Freshers can learn SAP FICO if they start with accounting basics, SAP navigation and structured FI/CO concepts before moving into configuration and projects."],
    ["Is SAP FICO useful for finance professionals?", "Yes. Finance and accounting professionals can connect their existing business knowledge with SAP processes, reporting, postings and controlling concepts."],
    ["Does SAP FICO require coding?", "SAP FICO is mainly a functional module, so coding is not the primary requirement. Understanding business processes, accounting and configuration is more important."],
    ["Why is SAP server practice important for FICO?", "Server practice helps learners understand real screens, transaction flow, document postings, reports and integration points instead of learning only from notes."],
    ["Is placement guaranteed after SAP FICO training?", "No genuine institute should promise a job guarantee only because a learner joined a course. Training, practice, interview preparation and learner effort together improve readiness."],
    ["How long does SAP FICO training take?", "Duration depends on the learner's background, batch mode and course depth. A practical course should allow enough time for FI, CO, integration, S/4HANA concepts, assignments and interview preparation."],
    ["Is SAP FICO good for B.Com students?", "Yes. B.Com and commerce learners often have a useful foundation for SAP FICO because the module connects strongly with accounting, finance reporting and business transactions."],
    ["Is SAP FICO better than SAP MM?", "Neither is automatically better. SAP FICO is usually stronger for finance and accounting learners, while SAP MM is better suited for procurement, inventory and supply-chain interests."],
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best SAP FICO Training in Bangalore - Practical Course, Syllabus and Career Guide",
    description: "A practical SAP FICO training guide for Bangalore learners covering FI, CO, S/4HANA Finance, hands-on practice, syllabus, skills and career paths.",
    author: { "@type": "Organization", name: "SV CurioTech" },
    publisher: { "@type": "Organization", name: "SV CurioTech", logo: { "@type": "ImageObject", url: "https://www.svcuriotech.com/assets/sv-curiotech-logo.jpg" } },
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: canonical,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };

  usePageSeo({
    title: "Best SAP FICO Training in Bangalore | Course, Syllabus & Career Guide",
    description: "Read this SAP FICO training guide for Bangalore learners. Understand FI, CO, S/4HANA Finance, syllabus, hands-on practice, career paths and institute selection tips.",
    keywords: "SAP FICO training in Bangalore, SAP FICO course Bangalore, best SAP FICO training institute Bangalore, SAP FI CO syllabus, SAP S/4HANA Finance training, SAP FICO career guide, SAP FICO for freshers",
    canonical,
  });

  return <div className="fico-journal-shell">
    <header className="fico-journal-mast">
      <div className="container">
        <Link to="/" className="fico-journal-brand"><img src="/assets/sv-curiotech-mark.png" alt="" /><span>SV CurioTech Journal</span></Link>
        <nav className="fico-journal-nav">
          <a href="#fico-key-takeaways">Key Takeaways</a>
          <a href="#fico-syllabus">Syllabus</a>
          <a href="#fico-careers">Career Paths</a>
          <a href="#fico-faqs">FAQs</a>
        </nav>
        <a className="fico-journal-phone" href={`tel:+91${phone}`}><Phone size={15}/> +91 {phone}</a>
      </div>
    </header>
    <main>
      <article>
        <section className="fico-cover">
          <div className="container fico-cover-image-wrap">
            <img src="/assets/blog/sap-fico-training-bangalore-hero.png" alt="Finance learner practising enterprise reporting and SAP FICO-style dashboards" />
          </div>
          <div className="container fico-cover-grid">
            <div className="fico-cover-copy">
              <div className="fico-cover-rubric"><span>SAP FICO</span><span>Career Guide</span><span>{publishedDate}</span></div>
              <h1>Best SAP FICO Training in Bangalore: Practical Course, Syllabus and Career Guide</h1>
              <p>If you want to build a career in finance and enterprise ERP, SAP FICO is one of the strongest skills to learn. This guide explains what SAP FICO is, who should learn it, what the course should include and how hands-on practice supports real career readiness.</p>
              <div className="fico-byline">
                <strong>SV CurioTech Editorial</strong>
                <span>8 min read</span>
                <span>Bangalore SAP training insight</span>
              </div>
            </div>
            <aside className="fico-listen-panel">
              <Headphones />
              <span>Audio Article</span>
              <h2>Listen while you review the guide</h2>
              <audio controls preload="metadata" src="/assets/blog/sap-fico-career-guide-audio.mpeg">
                Your browser does not support the audio element.
              </audio>
              <a href="#fico-audio-summary">Read audio summary</a>
            </aside>
          </div>
        </section>

        <section className="fico-brief-strip">
          <div className="container">
            {quickFacts.map(([label, text]) => <div key={label}><span>{label}</span><strong>{text}</strong></div>)}
          </div>
        </section>

        <section className="fico-reading-room">
          <div className="container fico-reading-grid">
            <aside className="fico-side-index">
              <span>Contents</span>
              <a href="#fico-key-takeaways">Key takeaways</a>
              <a href="#fico-comparison">FI vs CO vs S/4HANA</a>
              <a href="#fico-syllabus">Detailed syllabus</a>
              {articleSections.map(([title], index) => <a key={title} href={`#fico-blog-${index + 1}`}>{String(index + 1).padStart(2, "0")} {title}</a>)}
              <a href="#fico-careers">Career paths</a>
              <a href="#fico-audio-summary">Audio summary</a>
              <a href="#fico-faqs">FAQs</a>
            </aside>
            <div className="fico-article-flow">
              <p className="fico-drop-intro">This week, let us look at SAP FICO training from a practical learner’s view: what the module means, why Bangalore is a useful learning market, what a course should cover, and how practice changes interview confidence.</p>
              <section className="fico-key-takeaways" id="fico-key-takeaways">
                <h2>Key takeaways</h2>
                <div className="fico-takeaway-grid">
                  {takeaways.map((item, index) => <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>)}
                </div>
              </section>
              <section className="fico-comparison-panel" id="fico-comparison">
                <h2>SAP FI vs SAP CO vs S/4HANA Finance</h2>
                <div className="fico-comparison-table">
                  <div><strong>Area</strong><strong>Main purpose</strong><strong>What learners practise</strong></div>
                  {comparisonRows.map(([area, purpose, practice]) => <div key={area}>
                    <span>{area}</span>
                    <p>{purpose}</p>
                    <p>{practice}</p>
                  </div>)}
                </div>
              </section>
              <section className="fico-syllabus-board" id="fico-syllabus">
                <h2>Detailed SAP FICO syllabus focus</h2>
                <div className="fico-syllabus-grid">
                  {syllabusGroups.map(([title, items]) => <article key={title}>
                    <h3>{title}</h3>
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </article>)}
                </div>
              </section>
              {articleSections.map(([title, text], index) => <section id={`fico-blog-${index + 1}`} key={title}>
                <div className="fico-section-mark">{String(index + 1).padStart(2, "0")}</div>
                <h2>{title}</h2>
                <p>{text}</p>
                {index === 3 && <figure className="fico-article-image">
                  <img src="/assets/blog/sap-fico-process-integration.png" alt="SAP FICO integration concept connecting finance, controlling, procurement, sales and reporting" />
                  <figcaption>SAP FICO learning becomes stronger when FI, CO, procurement, sales, reporting and S/4HANA concepts are understood as connected business flows.</figcaption>
                </figure>}
                {index === 4 && <figure className="fico-article-image">
                  <img src="/assets/blog/sap-fico-finance-configuration-practice.png" alt="SAP FICO finance configuration practice with ledger accounting and enterprise reporting materials" />
                  <figcaption>Hands-on SAP FICO practice helps learners connect ledger accounting, financial configuration, reconciliation and reporting with real business process thinking.</figcaption>
                </figure>}
              </section>)}
              <section className="fico-career-paths" id="fico-careers">
                <h2>Career paths after SAP FICO training</h2>
                <p>SAP FICO training can support finance and ERP career paths when learners combine accounting knowledge, process understanding, system practice and interview communication.</p>
                <div className="fico-career-grid">
                  {["SAP FICO Consultant", "SAP Finance Consultant", "S/4HANA Finance Consultant", "ERP Support Consultant", "Finance Analyst", "Functional Consultant"].map((role) => <span key={role}>{role}</span>)}
                </div>
              </section>
              <section className="fico-audio-summary" id="fico-audio-summary">
                <h2>Audio transcript summary</h2>
                <p>The audio article supports the same practical message as this guide: SAP FICO learners should focus on FI and CO fundamentals, hands-on server practice, real business scenarios, interview explanation and honest career preparation. This written version is a clear summary of the audio and article points, not a word-for-word transcription.</p>
              </section>
              <section className="fico-author-box">
                <div>
                  <span>Written by</span>
                  <h2>SV CurioTech Editorial Team</h2>
                </div>
                <p>This guide is prepared for Bangalore SAP learners who want practical course clarity before choosing SAP FICO training, server practice or interview preparation support.</p>
              </section>
              <aside className="fico-pullquote">
                <strong>Practical SAP FICO learning is not about memorising screens.</strong>
                <span>It is about understanding how finance, controlling, procurement, sales and reporting connect inside a real enterprise system.</span>
              </aside>
              <section className="fico-action-box">
                <h2>Ready to start your SAP FICO journey?</h2>
                <p>SV CurioTech helps learners understand SAP FICO through practical finance examples, SAP server practice, interview preparation and career guidance.</p>
                <div>
                  <a href={`tel:+91${phone}`}><Phone size={16}/> +91 {phone}</a>
                  <a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20read%20the%20SAP%20FICO%20blog%20and%20need%20course%20details.`} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a>
                </div>
              </section>
              <section className="fico-question-deck" id="fico-faqs">
                <h2>SAP FICO training FAQs</h2>
                {faqs.map(([question, answer]) => <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>)}
              </section>
              <section className="fico-related-deck">
                <h2>Related SAP learning pages</h2>
                <div>
                  {relatedArticles.map(([title, href, text]) => <Link to={href} key={title}>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </Link>)}
                </div>
              </section>
            </div>
          </div>
        </section>
      </article>
    </main>
    <footer className="fico-journal-footer">
      <div className="container">
        <span>SV CurioTech Journal</span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </div>;
}

function SapServerAccess() {
  const canonical = "https://www.svcuriotech.com/sap-server-access";
  const accessPlans = [
    ["1 Month", "Revision sprint", "Best when you need focused SAP server access for interview practice, assignment completion or quick module revision."],
    ["3 Months", "Learning track", "A practical window for learners who want repeated SAP FICO, MM, SD, PP, ABAP or S/4HANA practice while studying."],
    ["6 Months", "Scenario build", "Useful when you want more time to repeat end-to-end processes, prepare project explanations and practise across topics."],
    ["1 Year", "Trainer lab", "For trainers, consultants and serious learners who need longer access for demos, exercises and continuous revision."],
  ];
  const systems = [
    ["FICO Practice System", "FI/CO", "General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, cost center basics and finance posting flow."],
    ["MM Practice System", "P2P", "Material master, vendor or business partner data, purchase requisition, purchase order, goods receipt and invoice verification."],
    ["SD Practice System", "O2C", "Customer master, sales order, pricing, delivery, goods issue, billing and order-to-cash document flow."],
    ["PP Practice System", "MRP", "BOM, routing, work center, material planning, production order and manufacturing process examples."],
    ["ABAP Practice System", "CODE", "Data dictionary, reports, internal tables, Open SQL, debugging, ALV and enhancement basics."],
    ["HANA / S/4HANA Access", "S/4", "Modern SAP navigation, Fiori-style exposure, business roles and S/4HANA-oriented practice where available."],
  ];
  const labFlow = [
    ["01", "Select practice goal", "Tell us whether you need SAP server access for FICO, MM, SD, PP, ABAP, HANA, S/4HANA, assignments, interviews or trainer demos."],
    ["02", "Confirm availability", "We confirm the currently available SAP environment, module scope, access duration, setup method and support details before you proceed."],
    ["03", "Connect and practise", "Use the shared instructions to log in, navigate the SAP system and start practising transactions, master data and process flows."],
    ["04", "Extend if needed", "If your learning plan needs more time, you can enquire about extending access based on current availability."],
  ];
  const proofPoints = [
    ["Real usage", "Practice inside a SAP environment instead of only watching screenshots or videos."],
    ["Module clarity", "Check whether the exact module you need is available before payment."],
    ["Access guidance", "Receive login and setup direction so you are not left with a confusing credential alone."],
    ["Honest scope", "Server access improves practice confidence; it does not by itself guarantee a job or certification."],
  ];
  const useCases = [
    ["Students and freshers", "Move from SAP notes to practical confidence by repeating transactions and explaining what happens on screen."],
    ["Working professionals", "Refresh old SAP knowledge, practise a new module and prepare for internal movement or interviews."],
    ["Certification learners", "Use practical familiarity alongside official SAP learning and exam resources."],
    ["Trainers and consultants", "Run demonstrations, assignments and module walkthroughs without depending only on client project access."],
  ];
  const faqs = [
    ["What is SAP server access?", "SAP server access lets learners connect to a SAP practice environment and work on transactions, master data, reports, business processes and assignments."],
    ["Is this the same as SAP Learning practice systems?", "No. SAP Learning practice systems are SAP's own official learning environments. SV CurioTech provides independent SAP access guidance and training support based on available practice environments."],
    ["Can I practise SAP FICO, MM and SD?", "Module availability depends on the current SAP environment. You can enquire for SAP FICO, MM, SD, PP, ABAP, HANA, S/4HANA and other available modules before payment."],
    ["Is SAP server access useful for interviews?", "Yes. Repeated practice helps learners explain SAP screens, transaction flow, master data, integration and project-style scenarios with more confidence."],
    ["Do I need training before buying access?", "Basic module knowledge helps because access is most useful when you know what to practise. Beginners can ask for training plus access guidance."],
    ["How long can I use SAP server access?", "Access duration depends on the selected plan. Common options include 1 month, 3 months, 6 months and 1 year, subject to current availability."],
    ["Does server access guarantee a job?", "No. Server access helps practical learning and interview readiness, but job outcomes depend on skill, practice, communication, market conditions and learner effort."],
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SAP Server Access for Hands-On Practice",
    serviceType: "SAP practice server access",
    description: "Independent SAP server access guidance for hands-on practice, assignments, interview preparation, trainer demos and module revision across available SAP environments.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
      telephone: `+91${phone}`,
      email,
    },
    areaServed: ["India", "Bangalore", "Online"],
    offers: accessPlans.map(([duration, name, description]) => ({
      "@type": "Offer",
      name: `${duration} SAP server access`,
      category: "SAP server access",
      description: `${name}: ${description}`,
      availability: "https://schema.org/InStock",
      url: canonical,
    })),
  };

  usePageSeo({
    title: "SAP Server Access for Practice | FICO, MM, SD, ABAP, S/4HANA | SV CurioTech",
    description: "Request SAP server access for hands-on practice with FICO, MM, SD, PP, ABAP, HANA and S/4HANA scenarios. Access plans, setup guidance, module availability and honest support details.",
    keywords: "SAP server access, SAP practice system access, SAP access for practice, SAP IDES server access, SAP FICO server access, SAP MM server access, SAP SD server access, SAP ABAP practice server, SAP S/4HANA server access, SAP server access Bangalore, SAP practice server India",
    canonical,
  });

  return <div className="server-page-shell">
    <header className="server-access-header">
      <div className="container server-access-nav">
        <div className="server-access-brand">
          <img src="/assets/sv-curiotech-mark.png" alt="" />
          <div>
            <strong>SV SAP Access Lab</strong>
            <span>Hands-on SAP practice systems</span>
          </div>
        </div>
        <div className="server-access-contact">
          <a href={`tel:+91${phone}`}><Phone size={15} /> +91 {phone}</a>
          <a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20need%20SAP%20server%20access%20details.`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a>
        </div>
      </div>
    </header>
    <main>
    <section className="server-product-hero">
      <div className="container server-product-grid">
        <div className="server-hero-copy">
          <span className="server-kicker"><Server size={16}/> Practice systems access</span>
          <h1>SAP Server Access for Real Hands-On Practice</h1>
          <p>Get SAP practice system access for transaction practice, module exercises, interview revision, trainer demos and project-style learning. Choose access only after confirming the SAP environment, available modules, duration and setup support.</p>
          <div className="server-hero-actions">
            <a className="server-primary-btn" href="#server-access-enquiry">Check Access Plans <ArrowRight size={18}/></a>
            <a className="server-secondary-btn" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20need%20SAP%20server%20access%20for%20practice.`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
          </div>
          <div className="server-trust-row">
            <span><KeyRound size={15}/> Login and setup guidance</span>
            <span><Laptop size={15}/> Online SAP practice</span>
            <span><ShieldCheck size={15}/> Availability confirmed first</span>
          </div>
        </div>
        <aside className="server-hero-form" id="server-access-enquiry">
          <span><KeyRound size={15}/> Request access details</span>
          <h2>Need SAP access for practice?</h2>
          <p>Share your contact details and the SAP server you need. Our team will contact you with current availability, pricing, login guidance and setup details.</p>
          <LeadForm variant="server-access" />
        </aside>
      </div>
    </section>

    <section className="server-lab-showcase">
      <div className="container server-lab-showcase-grid">
        <div>
          <span className="server-section-label"><Laptop size={15}/> Practice environment</span>
          <h2>Know what you are requesting before you buy access</h2>
          <p>A useful SAP practice system page should help you check module availability, access period, login method, setup support and the type of exercises you can practise. This keeps the enquiry clear and avoids confusion after payment.</p>
        </div>
        <div className="server-lab-frame" aria-hidden="true">
          <div className="lab-frame-rail"><span/><span/><span/><span/></div>
          <div className="lab-frame-main">
            <div className="lab-frame-top"><strong>Practice Systems</strong><small>module catalogue</small></div>
            <div className="lab-status-card">
              <span>Access enquiry</span>
              <strong>Confirm environment before payment</strong>
              <p>Module, duration, login method and support scope are checked first.</p>
            </div>
            <div className="lab-mini-systems">
              {systems.slice(0, 4).map(([name, code]) => <div key={name}><b>{code}</b><span>{name}</span></div>)}
            </div>
            <div className="lab-command-line">request --sap-access --module FICO/MM/SD/ABAP --duration 1-12 months</div>
          </div>
        </div>
      </div>
    </section>

    <section className="server-system-catalog">
      <div className="container">
        <div className="server-catalog-title">
          <span>Available on enquiry</span>
          <h2>SAP practice systems learners usually ask for</h2>
          <p>Availability changes by environment, so the right first step is to confirm your required module and practice purpose.</p>
        </div>
        <div className="server-catalog-grid">
          {systems.map(([name, code, text]) => <article key={name}><strong>{code}</strong><h3>{name}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="server-lab-workflow">
      <div className="container server-workflow-grid">
        <div className="server-workflow-copy">
          <span className="server-section-label"><Rocket size={15}/> Access workflow</span>
          <h2>From enquiry to practice session without confusion</h2>
          <p>A good SAP server access page should not simply sell a login. It should explain what system is available, what you can practise, how setup works and where the access is useful.</p>
        </div>
        <div className="server-timeline">
          {labFlow.map(([number, title, text]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="server-plan-lane">
      <div className="container">
        <div className="server-catalog-title light">
          <span>Access duration</span>
          <h2>Pick the time window based on your practice goal</h2>
        </div>
        <div className="server-plan-grid">
          {accessPlans.map(([period, name, text]) => <article key={period}><strong>{period}</strong><h3>{name}</h3><p>{text}</p><a href="#server-access-enquiry">Ask price <ArrowRight size={15}/></a></article>)}
        </div>
      </div>
    </section>

    <section className="server-proof-matrix">
      <div className="container">
        <div className="server-catalog-title">
          <span>What to check</span>
          <h2>Choose SAP access with clear expectations</h2>
        </div>
        <div className="server-proof-grid">
          {proofPoints.map(([title, text]) => <article key={title}><ShieldCheck/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="server-use-panel">
      <div className="container">
        <div className="server-use-copy">
          <span className="server-section-label"><Users size={15}/> Practice use cases</span>
          <h2>Built for learners who need SAP screen confidence</h2>
          <p>Use the access for exercises, repeated process practice, assignment work, trainer demonstrations and interview preparation. It is practical support, not a shortcut or unrealistic job promise.</p>
        </div>
        <div className="server-use-grid">
          {useCases.map(([name, text]) => <article key={name}><Check/><h3>{name}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="server-enquiry-zone">
      <div className="container server-enquiry-grid">
        <div>
          <span className="server-section-label"><KeyRound size={15}/> Request access details</span>
          <h2>Ask for current SAP server availability</h2>
          <p>Share your module, access duration and purpose. We will contact you with current availability, pricing, login guidance and setup details.</p>
          <div className="server-enquiry-list">
            <span>Confirm FICO, MM, SD, PP, ABAP, HANA or S/4HANA availability</span>
            <span>Choose 1 month, 3 months, 6 months or 1 year</span>
            <span>Understand setup, access scope and support before payment</span>
          </div>
        </div>
        <aside className="server-enquiry-card server-contact-card">
          <span><Phone size={15}/> Quick contact</span>
          <h3>Want faster confirmation?</h3>
          <p>Call or WhatsApp us with your required SAP module, preferred duration and practice purpose.</p>
          <a href={`tel:+91${phone}`}><Phone size={16}/> +91 {phone}</a>
          <a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20need%20SAP%20server%20access%20details.`} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp access team</a>
        </aside>
      </div>
    </section>

    <section className="server-faq-zone">
      <div className="container">
        <div className="server-catalog-title">
          <span className="server-section-label"><MessageCircle size={15}/> FAQ</span>
          <h2>SAP server access questions</h2>
        </div>
        <div className="server-faq-grid">
          {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>

    <section className="server-final-cta">
      <div className="container">
        <h2>Start SAP hands-on practice with SV CurioTech</h2>
        <p>Ask for current SAP server access availability, module list, duration, price and setup details.</p>
        <a className="server-primary-btn" href="#server-access-enquiry">Get SAP Server Access Details <ArrowRight size={18}/></a>
      </div>
    </section>
    </main>

    <a className="server-floating-chat" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20need%20SAP%20server%20access%20details.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /><span>Chat with us</span></a>
    <footer className="server-access-footer">
      <div className="container server-footer-grid">
        <div className="server-footer-brand">
          <div className="server-access-brand">
            <img src="/assets/sv-curiotech-mark.png" alt="" />
            <div>
              <strong>SV SAP Access Lab</strong>
              <span>Hands-on SAP practice systems</span>
            </div>
          </div>
          <p>Independent SAP server access guidance for learners, trainers and professionals who want real SAP screen practice before interviews, assignments or demos.</p>
        </div>
        <div>
          <h3>Server Options</h3>
          <a href="#server-access-enquiry">SAP FICO server access</a>
          <a href="#server-access-enquiry">SAP MM server access</a>
          <a href="#server-access-enquiry">SAP SD server access</a>
          <a href="#server-access-enquiry">SAP ABAP server access</a>
        </div>
        <div>
          <h3>Access Notes</h3>
          <span>Module availability is confirmed before payment.</span>
          <span>Access duration and setup method depend on current system availability.</span>
          <span>SV CurioTech is not SAP Learning or SAP SE.</span>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:+91${phone}`}><Phone size={15}/> +91 {phone}</a>
          <a href={`mailto:${email}`}><Mail size={15}/> {email}</a>
          <a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20need%20SAP%20server%20access%20details.`} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp access team</a>
        </div>
      </div>
      <div className="container server-footer-bottom">
        <span>Copyright {new Date().getFullYear()} SV CurioTech. All rights reserved.</span>
        <a href="#server-access-enquiry">Request SAP server access details</a>
      </div>
    </footer>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </div>;
}

function SapFicoTrainingCalgary() {
  const canonical = "https://www.svcuriotech.com/sap-fico-training-in-calgary";
  const faqs = [
    ["Is SAP FICO still relevant with companies moving to SAP S/4HANA?", "Yes. Core FI and CO knowledge remains relevant, while learners should also understand how those processes are represented in SAP S/4HANA Finance."],
    ["Can an accountant in Calgary move into an SAP FICO career?", "Yes. Accounting experience provides a useful foundation in ledgers, receivables, payables, assets, costs and financial reporting. SAP training adds ERP process and system knowledge."],
    ["What is the difference between SAP FICO and SAP S/4HANA Finance?", "SAP FICO describes the Finance and Controlling functional areas. SAP S/4HANA Finance is the modern SAP environment in which these processes operate."],
    ["How does SAP FICO integrate with SAP MM and SAP SD?", "Procurement activity in SAP MM can create financial postings in FI, while sales and billing activity in SAP SD can create revenue and accounts-receivable postings."],
    ["Do I need an accounting degree to learn SAP FICO?", "No. A finance or accounting background helps, but learners from commerce, business, operations and ERP roles can also study FICO if they are prepared to learn financial processes."],
    ["What practical skills should I gain during SAP FICO training?", "Focus on business processes, organizational structure, master data, transaction flows, financial postings, integration, reporting and troubleshooting through guided practice."],
    ["Why is integration knowledge important for an SAP FICO consultant?", "Business processes cross departments. Integration knowledge helps a consultant understand how procurement, sales, inventory, tax and finance affect one another."],
    ["What is the relationship between SAP FI and SAP CO?", "FI focuses on external financial accounting and reporting, while CO focuses on internal cost and management information. Together they provide a connected financial view."],
  ];
  const fiTopics = ["General Ledger", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Bank processes", "Tax accounting concepts", "Document processing", "Periodic activities", "Financial reporting"];
  const coTopics = ["Cost centers", "Profit centers", "Internal orders", "Cost allocations", "Planning", "Profitability analysis", "Management reporting", "FI and CO integration"];
  const suitableFor = ["Accounting and finance graduates", "B.Com, commerce and MBA Finance learners", "Accounts Payable and Accounts Receivable professionals", "Financial and business analysts", "ERP professionals and experienced SAP users", "Career changers interested in SAP consulting"];
  const approach = [
    ["Clear explanations", "Learn complex finance concepts in practical, approachable language."],
    ["Process understanding", "See how transactions connect across finance and the wider organization."],
    ["Practical exposure", "Use demonstrations, exercises and realistic business examples."],
    ["Trainer interaction", "Ask questions and clarify concepts during instructor-led sessions."],
    ["Online access from Calgary", "Join remotely from home, work or another convenient location."],
    ["Career-focused direction", "Understand SAP FICO work and how your existing experience can transfer."],
  ];
  const schema = {"@context":"https://schema.org","@type":"Course",name:"Online SAP FICO Training for Calgary Learners",description:"Practical online SAP FICO training for Calgary learners covering FI, CO, S/4HANA Finance, integration and reporting.",provider:{"@type":"EducationalOrganization",name:"SV CurioTech",url:"https://www.svcuriotech.com/"},areaServed:["Calgary","Alberta","Canada"],courseMode:"Online",url:canonical};
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};

  usePageSeo({
    title: "SAP FICO Training in Calgary, Alberta | SV CurioTech",
    description: "Join live online SAP FICO training for Calgary learners. Study SAP FI, CO, S/4HANA Finance, accounting processes, integration and reporting with practical guidance.",
    keywords: "SAP FICO training Calgary, SAP FICO course Calgary, SAP FI training Alberta, SAP CO training Calgary, SAP S/4HANA Finance course Calgary, online SAP training Calgary",
    canonical,
    geo: { region: "CA-AB", placename: "Calgary, Alberta" },
  });

  return <Layout>
    <PageHero eyebrow="Online SAP Finance training • Calgary, Alberta" title="SAP FICO Training in Calgary, Alberta" text="Build a practical understanding of how financial transactions connect with purchasing, sales, assets, reporting and management decisions inside SAP." />
    <section className="section"><div className="container split calgary-intro"><div><SectionTitle eyebrow="Business-first learning" title="Learn SAP Finance from a business perspective"/><p className="large-copy">SV CurioTech helps Calgary learners understand financial processes in SAP—not simply memorise a list of transactions.</p><p>When an organization receives a supplier invoice, the process can connect purchasing, goods receipt, accounts payable, payment processing, the general ledger and financial reporting. The training explains that whole picture so each SAP action has a clear business reason.</p></div><aside className="enquiry-card"><span className="eyebrow"><Sparkles size={14}/> Calgary online batches</span><h3>Explore the SAP FICO learning path</h3><p>Ask about course scope, live online schedules, practical sessions and the right starting point for your background.</p><LeadForm compact/></aside></div></section>
    <section className="section soft-section"><div className="container"><SectionTitle eyebrow="FI and CO curriculum" title="What you can explore in SAP FICO" text="SAP FICO brings together external financial accounting and internal cost-management information."/><div className="calgary-topic-grid"><article><span>FI</span><h3>Financial Accounting</h3><p>Understand how organizations record, process and report financial data.</p><ul className="check-list">{fiTopics.map(x=><li key={x}><Check/> {x}</li>)}</ul></article><article><span>CO</span><h3>Controlling</h3><p>Explore internal management information, cost activities and performance analysis.</p><ul className="check-list">{coTopics.map(x=><li key={x}><Check/> {x}</li>)}</ul></article></div></div></section>
    <section className="section"><div className="container split"><div><SectionTitle eyebrow="For Calgary professionals" title="Finance skills for an enterprise environment"/><p>Calgary professionals work across energy, engineering, financial services, construction, logistics, technology and professional services. SAP knowledge can support people working in accounting, finance, procurement, business operations and reporting where enterprise systems connect departments.</p><p>Live online classes let Calgary learners participate remotely, communicate with the instructor and practise without travelling to a training centre for every class.</p></div><div><h3>Who can enrol?</h3><ul className="check-list calgary-join-list">{suitableFor.map(x=><li key={x}><Check/> {x}</li>)}</ul><p>A finance background can help, but the essential prerequisite is a willingness to understand accounting processes and how an ERP system represents them.</p></div></div></section>
    <section className="section journey-section"><div className="container"><SectionTitle eyebrow="Practical learning" title="From accounting knowledge to SAP skills" text="Learn business processes as connected system flows rather than isolated screens or transaction codes." light/><div className="calgary-question-grid">{["What is happening in the company?","Why is the transaction necessary?","Which SAP module handles it?","What happens after it is posted?","How does it affect financial reporting?"].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><SectionTitle eyebrow="Why SV CurioTech" title="Training built around comprehension and practical use"/><div className="benefit-grid">{approach.map(([title,text])=><article className="benefit-card" key={title}><span><BadgeCheck/></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section soft-section"><div className="container split"><div><SectionTitle eyebrow="SAP S/4HANA Finance" title="Connect classic FICO concepts with the modern SAP platform"/><p>SAP Finance learning increasingly emphasizes S/4HANA. Learners benefit from understanding how established FI and CO concepts relate to the current platform, including General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, controlling and integration.</p></div><div className="value-panel"><span>IS SAP FICO A GOOD FIT?</span><div><Check/><p><strong>Finance background</strong>Build on accounting, reporting, cost and control knowledge.</p></div><div><Check/><p><strong>Business systems interest</strong>Learn how financial work moves through an ERP environment.</p></div><div><Check/><p><strong>Career transition</strong>Explore how existing experience can support an SAP Finance path.</p></div></div></div></section>
    <section className="section"><div className="container"><SectionTitle eyebrow="Calgary SAP FICO FAQs" title="Questions learners commonly ask"/><div className="faq-grid">{faqs.map(([q,a],i)=><article key={q}><span>{String(i+1).padStart(2,"0")}</span><h3>{q}</h3><p>{a}</p></article>)}</div></div></section>
    <CtaBand/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </Layout>;
}

function SapTrainingHsrLayout() {
  const canonical = "https://www.svcuriotech.com/sap-training-in-hsr-layout";
  const hsrCoursePages = allLocationCoursePages.filter((item) => item.location === "HSR Layout");
  const moduleLink = (module) => hsrCoursePages.find((page) => page.module === module)?.slug || "";
  const modules = [
    ["SAP FICO", "Finance and controlling for commerce, accounting, MBA Finance and analyst careers.", "GL, AP, AR, assets, cost centers and S/4HANA finance flow"],
    ["SAP MM", "Materials Management for procurement, inventory, vendor and supply-chain learners.", "Purchase orders, goods movement, invoice verification and P2P"],
    ["SAP SD", "Sales and Distribution for sales operations, billing and logistics-oriented roles.", "Order-to-cash, pricing, delivery, billing and customer master"],
    ["SAP PP", "Production Planning for manufacturing, engineering and operations backgrounds.", "BOM, routing, MRP, production orders and shop-floor scenarios"],
    ["SAP ABAP", "Technical SAP development path for programmers, IT graduates and developers.", "Data dictionary, reports, debugging, module pool and enhancements"],
    ["SAP HCM", "HR process training for HR professionals and MBA HR learners.", "Personnel administration, organization management, time and payroll basics"],
  ];
  const outcomes = [
    ["01", "Module selection", "Choose SAP FICO, MM, SD, PP, ABAP, HCM or related modules based on your background."],
    ["02", "System practice", "Learn with SAP process walkthroughs, assignments and practical business scenarios."],
    ["03", "Project clarity", "Understand how to explain end-to-end flows in interviews and project discussions."],
    ["04", "Career support", "Get resume guidance, mock interviews and placement assistance for SAP roles."],
  ];
  const nearbyAreas = ["HSR Layout", "Koramangala", "BTM Layout", "Electronic City", "Sarjapur Road", "Bellandur", "Bommanahalli", "Silk Board"];
  const fit = [
    "Commerce, finance, B.Com, M.Com and MBA learners",
    "Engineering graduates interested in SAP MM, PP, ABAP or BASIS",
    "HR professionals exploring SAP HCM or SuccessFactors",
    "Working professionals from finance, procurement, sales, operations and IT",
    "Career switchers who want practical SAP online training or classroom guidance",
  ];
  const faqs = [
    ["Do I need IT experience to join SAP Training in HSR Layout?", "No. Many SAP functional modules are suitable for non-IT learners. The right module depends on your education, work experience and career goal."],
    ["Which SAP course in HSR Layout is best for freshers?", "Freshers from finance often choose SAP FICO, supply-chain learners choose SAP MM, sales learners choose SAP SD, technical learners choose SAP ABAP, and manufacturing learners may choose SAP PP."],
    ["Do you provide SAP online training?", "Yes. Learners can ask about SAP online training as well as classroom-oriented guidance, depending on current batch and module availability."],
    ["Is placement assistance included?", "Learners receive resume guidance, mock interview support, project explanation practice and placement assistance as part of the career preparation process."],
    ["How long does SAP training take?", "Most functional SAP courses usually run for around 2 to 3 months depending on the module, batch mode, learner pace and current schedule."],
    ["Can I get SAP FICO, SAP MM, SAP SD, SAP PP and SAP ABAP training from HSR Layout?", "Yes. SV CurioTech supports popular SAP modules including FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba and other modules based on current availability."],
  ];
  const courseSchema = {"@context":"https://schema.org","@type":"Course",name:"SAP Training in HSR Layout",description:"SAP Training in HSR Layout, Bangalore covering SAP FICO, MM, SD, PP, ABAP, online training, practical projects, certification guidance and placement assistance.",provider:{"@type":"EducationalOrganization",name:"SV CurioTech",url:"https://www.svcuriotech.com/",telephone:"+916361702540",email:"svcuriotech@gmail.com"},areaServed:["HSR Layout","Bengaluru","Bangalore","Karnataka"],courseMode:["Classroom","Online"],url:canonical};
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};

  usePageSeo({
    title: "SAP Training in HSR Layout | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in HSR Layout with practical SAP courses, business scenarios, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP training in HSR Layout, SAP course in HSR Layout, SAP classes in HSR Layout, SAP training institute in HSR Layout, SAP courses with placement in HSR Layout",
    canonical,
    geo: { region: "IN-KA", placename: "HSR Layout, Bengaluru" },
  });

  return <Layout>
    <section className="hsr-hero">
      <div className="container hsr-hero-grid">
        <div className="hsr-hero-copy">
          <span className="hsr-kicker"><MapPin size={15}/> HSR Layout SAP learning hub</span>
          <h1>SAP Training in HSR Layout</h1>
          <p>Join SAP training in HSR Layout with practical business scenarios, SAP system exposure, module guidance, interview preparation and placement-focused support.</p>
          <div className="hsr-actions">
            <Link className="button" to="/contact?course=SAP%20Training%20in%20HSR%20Layout#registration">Book free demo <ArrowRight size={18}/></Link>
            <a className="hsr-call" href={`tel:+91${phone}`}><Phone size={17}/> +91 {phone}</a>
          </div>
        </div>
        <div className="hsr-hero-panel" aria-label="SAP training highlights">
          <div><strong>90</strong><span>Day job-ready learning direction</span></div>
          <div><strong>6+</strong><span>Popular SAP modules</span></div>
          <div><strong>Live</strong><span>Online and flexible batches</span></div>
          <div><strong>1:1</strong><span>Module and career guidance</span></div>
        </div>
      </div>
    </section>
    <section className="hsr-strip"><div className="container">{nearbyAreas.map((area)=><span key={area}>{area}</span>)}</div></section>
    <section className="hsr-section">
      <div className="container hsr-intro-grid">
        <div>
          <span className="hsr-kicker dark"><BookOpen size={15}/> Practical SAP classes</span>
          <h2>SAP training in HSR Layout for Bangalore career corridors.</h2>
          <p>HSR Layout connects quickly with Koramangala, BTM, Electronic City, Bellandur and Sarjapur Road. That makes SAP training in HSR Layout a practical option for students and working professionals who want SAP classes without losing momentum to long commutes.</p>
          <p>SV CurioTech keeps the training practical. You learn why a business process exists, how the SAP module handles it, what master data is involved, where integration happens and how to explain that clearly in interviews.</p>
        </div>
        <aside className="hsr-advisor">
          <span><Headphones size={18}/> Course advisor</span>
          <h3>Not sure which SAP course fits you?</h3>
          <p>Share your background and get guidance on SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP or SAP online training options.</p>
          <LeadForm compact/>
        </aside>
      </div>
    </section>
    <section className="hsr-section hsr-soft">
      <div className="container">
        <div className="hsr-heading"><span className="hsr-kicker dark"><Laptop size={15}/> SAP courses in HSR Layout</span><h2>Choose a module that matches your background.</h2></div>
        <div className="hsr-module-grid">{modules.map(([title, text, scope]) => {
          const slug = moduleLink(title);
          const content = <><h3>{title}</h3><p>{text}</p><strong>{scope}</strong>{slug && <b>View {title} page <ArrowRight size={14}/></b>}</>;
          return slug ? <Link to={`/${slug}`} key={title}>{content}</Link> : <article key={title}>{content}</article>;
        })}</div>
      </div>
    </section>
    <section className="hsr-section">
      <div className="container hsr-flow">
        <div className="hsr-heading"><span className="hsr-kicker dark"><Target size={15}/> Training path</span><h2>From SAP basics to interview-ready confidence.</h2></div>
        <div className="hsr-flow-grid">{outcomes.map(([step,title,text])=><article key={step}><span>{step}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div>
    </section>
    <section className="hsr-section hsr-night">
      <div className="container hsr-fit-grid">
        <div><span className="hsr-kicker light"><Users size={15}/> Who should join</span><h2>SAP training for freshers, professionals and career switchers.</h2><p>The program is useful for learners who want real SAP process understanding instead of only theory, old slides or transaction-code memorization.</p></div>
        <ul>{fit.map((item)=><li key={item}><Check/> {item}</li>)}</ul>
      </div>
    </section>
    <section className="hsr-section">
      <div className="container">
        <div className="hsr-heading"><span className="hsr-kicker dark"><CalendarCheck size={15}/> Flexible learning</span><h2>Built for HSR Layout learners with busy schedules.</h2></div>
        <div className="hsr-schedule">
          <article><strong>Weekday batches</strong><p>Structured sessions for learners who can study steadily through the week.</p></article>
          <article><strong>Weekend batches</strong><p>Useful for working professionals balancing office hours and SAP practice.</p></article>
          <article><strong>Fast-track guidance</strong><p>Focused learning direction for learners who need quicker revision and interview preparation.</p></article>
        </div>
      </div>
    </section>
    <section className="hsr-section hsr-soft">
      <div className="container"><div className="hsr-heading"><span className="hsr-kicker dark"><MessageCircle size={15}/> FAQs</span><h2>Common questions about SAP Training in HSR Layout.</h2></div><div className="hsr-faq-grid">{faqs.map(([q,a])=><article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></div>
    </section>
    <CtaBand/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(courseSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </Layout>;
}

function SapTrainingKalaburagi() {
  const canonical = "https://www.svcuriotech.com/sap-training-in-kalaburagi";
  const kalaburagiModules = allLocationCoursePages.filter((item) => item.location === "Kalaburagi");
  const industries = ["Manufacturing", "Logistics", "Agri-trade", "Back-office operations", "Retail", "Finance teams"];
  const pathways = [
    ["SAP FICO", "Commerce, finance, accounting and MBA learners", "General ledger, AP, AR, assets, cost centers and profitability"],
    ["SAP MM", "Purchase, warehouse, logistics and supply-chain learners", "Procurement, inventory, vendor evaluation and material valuation"],
    ["SAP SD", "Sales, CRM, billing and business development professionals", "Order-to-cash, pricing, billing and delivery management"],
    ["SAP HCM", "HR executives, admin teams and MBA HR learners", "Employee lifecycle, organization management, time and payroll concepts"],
    ["SAP ABAP", "Engineering, programming and technical graduates", "Reports, module pool programming, debugging and enhancements"],
  ];
  const delivery = [
    ["Small batches", "Trainers can answer questions and keep practical work visible."],
    ["Real-time projects", "Case studies connect manufacturing, retail and logistics examples."],
    ["Flexible schedule", "Weekday, weekend and working-professional friendly batches."],
    ["Career preparation", "SAP resumes, mock interviews and scenario explanation practice."],
    ["Certification guidance", "Direction for learners planning official SAP certification exams."],
  ];
  const faqs = [
    ["Is SAP training in Kalaburagi useful compared with Bengaluru or Hyderabad?", "Yes. SAP business processes are standard globally. Trainer experience, practical system access and consistent practice matter more than the city where you learn."],
    ["Do I need a technical background to learn SAP?", "No for functional modules such as FICO, MM, SD and HCM. Programming exposure mainly helps for SAP ABAP and other technical tracks."],
    ["How long does SAP training take?", "Most functional SAP courses run for 2 to 3 months depending on module, weekday or weekend schedule, assignments and certification preparation needs."],
    ["Will I get placement support?", "Learners receive resume preparation, mock interviews, project explanation support and placement assistance. Genuine training providers should not promise unrealistic guaranteed jobs."],
    ["Can working professionals join?", "Yes. Evening, weekend and online-oriented batch guidance helps working learners complete a course alongside a full-time job."],
  ];
  const courseSchema = {"@context":"https://schema.org","@type":"Course",name:"SAP Training in Kalaburagi",description:"SAP Training in Kalaburagi with hands-on SAP FICO, MM, SD, HCM and ABAP classes, weekday and weekend batches, certification guidance and placement support.",provider:{"@type":"EducationalOrganization",name:"SV CurioTech",url:"https://www.svcuriotech.com/",telephone:"+916361702540",email:"svcuriotech@gmail.com"},areaServed:["Kalaburagi","Gulbarga","Karnataka"],courseMode:["Classroom","Online"],url:canonical};
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};

  usePageSeo({
    title: "SAP Training in Kalaburagi | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Kalaburagi with practical SAP FICO, MM, SD, HCM and ABAP classes, flexible batches, interview preparation and placement support.",
    keywords: "SAP training in Kalaburagi, SAP course in Kalaburagi, SAP classes in Kalaburagi, SAP training institute in Kalaburagi, SAP courses with placement in Kalaburagi",
    canonical,
    geo: { region: "IN-KA", placename: "Kalaburagi, Karnataka" },
  });

  return <Layout>
    <section className="kala-hero">
      <div className="container kala-hero-grid">
        <div className="kala-hero-copy">
          <span className="kala-label"><MapPin size={15}/> Kalaburagi SAP institute</span>
          <h1>SAP Training in Kalaburagi</h1>
          <p>Join SAP training in Kalaburagi with live SAP system practice, practical business scenarios, module guidance, interview preparation and placement support.</p>
          <div className="kala-actions">
            <Link className="kala-primary" to="/contact?course=SAP%20Training%20in%20Kalaburagi#registration">Book free demo <ArrowRight size={18}/></Link>
            <a className="kala-secondary" href={`tel:+91${phone}`}><Phone size={17}/> +91 {phone}</a>
          </div>
        </div>
        <div className="kala-ledger">
          <span>2026 SAP career map</span>
          <div><strong>FICO</strong><p>Finance graduates</p></div>
          <div><strong>MM + SD</strong><p>Supply chain and sales operations</p></div>
          <div><strong>HCM + ABAP</strong><p>HR and technical roles</p></div>
        </div>
      </div>
    </section>
    <section className="kala-industries"><div className="container">{industries.map((item)=><span key={item}>{item}</span>)}</div></section>
    <section className="kala-section">
      <div className="container kala-story-grid">
        <div><span className="kala-label dark"><Sparkles size={15}/> Why now</span><h2>SAP training in Kalaburagi for practical ERP career skills.</h2></div>
        <div><p>Kalaburagi has a growing mix of manufacturing units, logistics hubs, agri-trade businesses and back-office operations connected to larger companies in Bengaluru, Pune and Hyderabad. SAP skills help learners step into finance, supply chain, HR, sales and technical ERP roles without waiting to relocate first.</p><p>The training is built around what matters in interviews: business process clarity, SAP screens, hands-on practice, project examples and the confidence to explain your module properly.</p></div>
      </div>
    </section>
    <section className="kala-section kala-cream">
      <div className="container">
        <div className="kala-heading"><span className="kala-label dark"><BookOpen size={15}/> Courses offered</span><h2>Choose the SAP course that fits your background.</h2></div>
        <div className="kala-path-grid">{pathways.map(([title, fit, scope])=><article key={title}><span>{title.replace("SAP ","")}</span><h3>{title}</h3><p>{fit}</p><strong>{scope}</strong></article>)}</div>
      </div>
    </section>
    <section className="kala-section">
      <div className="container kala-course-link-panel">
        <div><span className="kala-label dark"><Laptop size={15}/> Kalaburagi course pages</span><h2>Dedicated SEO pages for each SAP course in Kalaburagi.</h2><p>Each module page focuses on its own learner profile, syllabus direction, practical scope and career outcomes.</p></div>
        <div className="kala-course-links">{kalaburagiModules.map((page)=><Link key={page.slug} to={`/${page.slug}`}><strong>{page.module}</strong><span>View course <ArrowRight size={14}/></span></Link>)}</div>
      </div>
    </section>
    <section className="kala-section kala-charcoal">
      <div className="container">
        <div className="kala-heading light"><span className="kala-label light"><Server size={15}/> Training delivery</span><h2>Not a PDF-and-login course.</h2><p>Training is delivered through guided classes, SAP practice and industry-style scenarios.</p></div>
        <div className="kala-delivery-grid">{delivery.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
    <section className="kala-section">
      <div className="container kala-fit-grid">
        <div><span className="kala-label dark"><Users size={15}/> Who should join</span><h2>For graduates, professionals and business owners who want practical ERP understanding.</h2></div>
        <ul>
          <li><Check/> B.Com, M.Com and MBA Finance graduates wanting corporate-ready skills</li>
          <li><Check/> Accounts, sales, HR and supply-chain professionals moving into ERP roles</li>
          <li><Check/> Engineering graduates entering SAP technical or ABAP roles</li>
          <li><Check/> Business owners and family-business successors who want to understand ERP systems</li>
        </ul>
      </div>
    </section>
    <section className="kala-section kala-cream">
      <div className="container"><div className="kala-heading"><span className="kala-label dark"><MessageCircle size={15}/> FAQs</span><h2>Common questions about SAP Training in Kalaburagi.</h2></div><div className="kala-faq-grid">{faqs.map(([q,a])=><article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></div>
    </section>
    <CtaBand/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(courseSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </Layout>;
}

function KalaburagiCoursePage({ page }) {
  const relatedPages = allLocationCoursePages.filter((item) => item.location === "Kalaburagi" && item.slug !== page.slug).slice(0, 6);
  const beats = [
    ["Learn the process", "Understand why the business activity exists before memorizing any screen."],
    ["Practise in SAP", "Work through transactions, master data, examples and assignments."],
    ["Explain the work", "Prepare for interviews with project-style and scenario-style answers."],
  ];
  const schema = {"@context":"https://schema.org","@type":"Course",name:`${page.module} Training in Kalaburagi`,description:page.description,provider:{"@type":"EducationalOrganization",name:"SV CurioTech",url:"https://www.svcuriotech.com/"},areaServed:"Kalaburagi, Karnataka",courseMode:["Classroom","Online"],url:`https://www.svcuriotech.com/${page.slug}`};

  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `https://www.svcuriotech.com/${page.slug}`,
    geo: { region: "IN-KA", placename: "Kalaburagi, Karnataka" },
  });

  return <Layout>
    <section className="kala-course-hero" style={{"--module":page.color}}>
      <div className="container kala-course-hero-grid">
        <div>
          <span className="kala-label light"><MapPin size={15}/> Kalaburagi course page</span>
          <h1>{page.module} Training in Kalaburagi</h1>
          <p>{page.intro}</p>
          <div className="kala-actions"><Link className="kala-primary" to={registrationLink(`${page.module} Training in Kalaburagi`)}>Request syllabus <ArrowRight size={18}/></Link><a className="kala-secondary light" href={`tel:+91${phone}`}><Phone size={17}/> Call advisor</a></div>
        </div>
        <aside><strong>{page.module}</strong><span>Live SAP practice</span><span>Interview preparation</span><span>Placement assistance</span></aside>
      </div>
    </section>
    <section className="kala-section">
      <div className="container kala-course-split">
        <article><span className="kala-label dark"><Users size={15}/> Best fit</span><h2>{page.fitTitle}</h2><ul>{page.fit.map((item)=><li key={item}><Check/> {item}</li>)}</ul></article>
        <article><span className="kala-label dark"><BadgeCheck size={15}/> Support</span><h2>{page.supportTitle}</h2><ul>{page.support.map((item)=><li key={item}><Check/> {item}</li>)}</ul></article>
      </div>
    </section>
    <section className="kala-section kala-cream">
      <div className="container kala-course-overview">
        <div><span className="kala-label dark"><BookOpen size={15}/> Course overview</span><h2>Practical {page.module} learning for Kalaburagi learners.</h2><p>{page.overview}</p><p>Classes connect SAP topics with business situations from finance, procurement, sales, HR, logistics, manufacturing or technical development depending on the selected module.</p></div>
        <div className="kala-course-beats">{beats.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
    <section className="kala-section kala-charcoal">
      <div className="container kala-course-career">
        <div><span className="kala-label light"><BriefcaseBusiness size={15}/> Career outcomes</span><h2>Roles learners can prepare for after {page.module}.</h2></div>
        <div>{page.outcomes.map((item)=><span key={item}>{item}</span>)}</div>
      </div>
    </section>
    <section className="kala-section">
      <div className="container"><div className="kala-heading"><span className="kala-label dark"><ArrowRight size={15}/> More Kalaburagi pages</span><h2>Compare other SAP modules in Kalaburagi.</h2></div><div className="kala-related-grid">{relatedPages.map((item)=><Link key={item.slug} to={`/${item.slug}`}><strong>{item.module}</strong><p>{item.fitTitle}</p><span>Open page <ArrowRight size={14}/></span></Link>)}</div></div>
    </section>
    <CtaBand/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </Layout>;
}

const sapLocationPages = {
  yeshwanthpur: {
    location: "Yeshwanthpur",
    area: "Yeshwanthpur, Bangalore",
    slug: "sap-training-in-yeshwanthpur",
    primaryTopic: "SAP Training in Yeshwanthpur",
    title: "SAP Training in Yeshwanthpur | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Yeshwanthpur with practical SAP modules, live business examples, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP training in Yeshwanthpur, SAP course in Yeshwanthpur, SAP classes in Yeshwanthpur, SAP training institute in Yeshwanthpur, SAP courses with placement in Yeshwanthpur",
    heroText: "Build practical SAP skills through SAP training in Yeshwanthpur with instructor-led classes, live business examples, module-focused learning and career support for SAP roles in Bangalore and beyond.",
    introLead: "If you are searching for SAP training in Yeshwanthpur, SV CurioTech helps you move beyond theory and understand how SAP is used in real business processes.",
    localParagraphs: [
      "Yeshwanthpur is well connected to several education, business and residential areas in Bangalore, which makes it a practical location for learners who want SAP training without losing time in long travel or unclear course choices.",
      "Many students and working professionals come with the same concern: SAP looks powerful, but it also looks difficult from the outside. Our classes break that fear by explaining each topic through simple business examples before moving into SAP screens, configuration and interview questions.",
    ],
    focusTitle: "SAP training in Yeshwanthpur with local guidance",
    focusText: "Local learners in and around Yeshwanthpur can access SAP course guidance with a Bangalore career focus.",
    benefitIntro: "The training is built for learners who want steady guidance, practical examples and confidence before they attend SAP interviews.",
  },
  marathahalli: {
    location: "Marathahalli",
    area: "Marathahalli, Bangalore",
    slug: "sap-training-in-marathahalli",
    primaryTopic: "SAP Training in Marathahalli",
    title: "SAP Training in Marathahalli | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Marathahalli with practical SAP courses, business scenarios, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP training in Marathahalli, SAP course in Marathahalli, SAP classes in Marathahalli, SAP training institute in Marathahalli, SAP courses with placement in Marathahalli",
    heroText: "Build job-oriented SAP skills from Marathahalli with SV CurioTech. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba and S/4HANA concepts through trainer-led sessions, business scenarios, assignments, project discussion and interview preparation.",
    introLead: "If you are searching for SAP training in Marathahalli, Bangalore, the better course is the one that helps you understand business processes clearly instead of only memorizing transaction codes.",
    localParagraphs: [
      "Marathahalli is a practical learning location for students and working professionals from Brookefield, Kundalahalli, AECS Layout, Munnekollal, Doddanekundi, Whitefield, Bellandur, Kadubeesanahalli, Varthur, Hoodi and Mahadevapura. Many learners in this belt are close to IT parks, finance operations, support teams, procurement teams and corporate back-office roles where SAP skills can become useful.",
      "SV CurioTech keeps SAP training career-focused and realistic. Learners are guided through the reason behind each process, the master data involved, the SAP transaction flow, the output created and the way different modules connect. This makes SAP feel like a business system, not a collection of difficult screens.",
      "Freshers can compare modules such as SAP FICO, SAP MM, SAP SD, SAP PP and SAP ABAP based on education and interest. Working professionals can connect their current finance, purchasing, sales, HR, production, warehouse, IT or support experience with a suitable SAP learning path.",
    ],
    focusTitle: "Marathahalli SAP training for East Bangalore learners",
    focusText: "Learners around Marathahalli can choose online or classroom-oriented SAP guidance based on module fit, trainer availability, batch timing, practical access and placement-focused preparation.",
    benefitIntro: "The course is useful for learners who want practical SAP exposure, trainer guidance, project understanding, resume support, mock interview preparation and a clear module-selection discussion before admission.",
    extendedSeo: true,
    extendedCopy: {
      courseLocation: "Marathahalli",
      fullLocation: "Marathahalli, Bangalore",
      nearByTitle: "Useful for learners around East Bangalore",
      nearByText: "Marathahalli is convenient for learners who travel from IT parks, residential areas and business corridors across East Bangalore. Many learners compare SAP courses from nearby areas before finalizing a module, batch mode and trainer schedule.",
      localAreas: ["Marathahalli", "Brookefield", "Kundalahalli", "AECS Layout", "Munnekollal", "Doddanekundi", "Whitefield", "Bellandur", "Kadubeesanahalli", "Varthur", "Hoodi", "Mahadevapura"],
      fresherTitle: "SAP training for freshers in Marathahalli",
      fresherText: "Freshers often need patient guidance before choosing an SAP course. A B.Com learner may naturally compare SAP FICO, a supply-chain learner may look at SAP MM, a sales-oriented learner may explore SAP SD, and a technical graduate may consider SAP ABAP or BASIS. SV CurioTech helps learners understand these differences before enrolment.",
      professionalTitle: "SAP training for working professionals in Marathahalli",
      professionalText: "Working professionals usually bring real business exposure from finance, procurement, sales, HR, manufacturing, warehouse operations, IT support or development. Training connects that existing experience with SAP process flows, configuration discussion, practical tasks and interview preparation.",
      learnerIntroTitle: "Different East Bangalore learners need different SAP paths.",
      learnerIntroText: "A commerce graduate, a procurement executive, an engineering fresher, an HR professional and an existing SAP end user may all search for SAP training in Marathahalli, but each person needs a different course recommendation and practice plan.",
      batchText: "SAP course duration, weekday or weekend batches, online training, classroom availability and practical access can vary by module and trainer schedule. Learners can enquire for current SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, BASIS, EWM and PM batch details.",
      afterTrainingText: "After completing SAP training, a learner should be able to explain the module purpose, important master data, process flow, integration points, business scenarios and role expectations. SV CurioTech focuses on helping learners explain SAP clearly in interviews and project discussions.",
      searchTopics: [
        ["SAP training institute in Marathahalli", "Compare the institute by trainer guidance, practical SAP exposure, module clarity, batch timing, interview support and the exact meaning of placement assistance."],
        ["SAP course near Marathahalli", "Learners from Brookefield, Kundalahalli, Whitefield, Bellandur, Varthur and Mahadevapura can enquire for online or classroom-oriented SAP training options."],
        ["SAP course fees and duration", "Fees and duration can vary by module, batch mode and current schedule. Ask what is included: syllabus depth, practical access, assignments, projects, recordings where available and interview preparation."],
        ["SAP certification training guidance", "Certification can support a profile, but it should come after strong module understanding. Learners can ask for guidance on official SAP learning paths and exam preparation direction."],
        ["SAP course with placement assistance", "Placement support should mean resume guidance, mock interviews, project explanation practice and job-search direction, not unrealistic job guarantees."],
        ["Best SAP module for your background", "FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, BASIS, EWM and PM each fit different education and work profiles."],
      ],
      faqs: [
        ["Is SAP training in Marathahalli suitable for freshers?", "Yes. Freshers can start SAP training when they choose a module that matches their education and interest. SV CurioTech guides learners before enrolment so they can compare FICO, MM, SD, PP, ABAP and other SAP paths sensibly."],
        ["Which SAP course is best in Marathahalli?", "There is no single best SAP course for everyone. SAP FICO suits finance and accounting learners, SAP MM suits procurement and supply-chain learners, SAP SD suits sales and logistics learners, SAP PP suits manufacturing profiles, and SAP ABAP suits technical learners."],
        ["Does SV CurioTech provide SAP FICO training in Marathahalli?", "Yes, learners can enquire for SAP FICO training along with other SAP modules such as MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, BASIS, EWM and PM depending on current batch availability."],
        ["Can working professionals attend weekend SAP batches?", "Working professionals can ask about weekday, weekend and online batch options. The current schedule depends on module, trainer availability and batch status."],
        ["Does SAP training include interview preparation?", "Training includes interview-oriented discussion, project explanation practice, resume guidance and support for explaining module concepts with business scenarios."],
        ["Is SAP course placement guaranteed after training?", "No genuine SAP training institute should promise a guaranteed job only because a learner completed a course. SV CurioTech focuses on practical skill building, resume support, mock interviews and placement assistance."],
        ["Can I learn SAP online from Marathahalli?", "Yes. Learners can ask about live online SAP training as well as classroom-oriented options depending on the current batch schedule and selected module."],
      ],
    },
  },
  electronicCity: {
    location: "Electronic City",
    area: "Electronic City, Bangalore",
    slug: "sap-training-in-electronic-city",
    primaryTopic: "SAP Training in Electronic City",
    title: "SAP Training in Electronic City | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Electronic City with practical SAP modules, business scenarios, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP training in Electronic City, SAP course in Electronic City, SAP classes in Electronic City, SAP training institute in Electronic City, SAP courses with placement in Electronic City",
    heroText: "Learn SAP in a way that fits the pace of Electronic City. SV CurioTech helps IT professionals, fresh graduates and career changers build practical SAP skills through live classes, SAP system practice, business scenarios and placement-focused support.",
    introLead: "If you are looking for SAP training in Electronic City, you may already be close to Bangalore's technology and corporate work culture. Our training helps you turn that environment into a career advantage by learning SAP with practical business process clarity.",
    localParagraphs: [
      "Electronic City has many learners who are already exposed to IT services, software teams, support roles, finance operations, supply chain work or corporate back-office processes. For them, SAP is not just another course name. It is a path into enterprise technology, consulting support, functional analysis and business process roles.",
      "At SV CurioTech, we keep the course grounded. You do not simply watch a trainer click through screens. You learn why a company creates a purchase order, how a sales order moves to billing, how finance entries connect with business events, and how technical SAP work supports real requirements.",
      "This page is written for learners from Electronic City, Bommasandra, HSR Layout, Begur, BTM Layout, Koramangala and nearby areas who want flexible SAP online or classroom guidance with a practical Bangalore career focus.",
    ],
    focusTitle: "Electronic City SAP training for IT and corporate learners",
    focusText: "Learners in and around Electronic City can choose SAP modules that match IT services, finance operations, procurement, logistics, HR, development and enterprise support career goals.",
    benefitIntro: "The course is useful for learners who want practical SAP exposure while managing a job, college schedule, job search or career switch.",
  },
  jayanagar: {
    location: "Jayanagar",
    area: "Jayanagar, Bangalore",
    slug: "sap-course-in-jayanagar",
    primaryTopic: "SAP Course in Jayanagar",
    title: "SAP Course in Jayanagar, Bangalore | SV CurioTech",
    description: "Join SV CurioTech for SAP course in Jayanagar with practical SAP training, module guidance, projects, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP course in Jayanagar, SAP training in Jayanagar, SAP classes in Jayanagar, SAP training institute in Jayanagar, SAP courses with placement in Jayanagar",
    heroText: "Choose an SAP course in Jayanagar that fits your background, career goal and practical learning needs. SV CurioTech helps freshers, graduates and working professionals learn SAP through business process examples, module guidance, project-style practice and interview preparation.",
    introLead: "If you want to take an SAP course in Jayanagar, Bangalore, the first thing to check is not only the course name or topic count, but whether the training suits your education, career objective and the practical exposure you need.",
    localParagraphs: [
      "SV CurioTech offers SAP training for graduates, working professionals and learners who want to build knowledge in SAP functional and technical fields. Learners can ask about SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP HCM, SuccessFactors, Ariba, S/4HANA and other SAP-related courses depending on current batch availability.",
      "The training approach is built to help learners understand how SAP is used in real business processes instead of only memorising transaction codes or theoretical definitions. Classes connect finance, procurement, sales, inventory, production, HR and technical concepts with practical business situations.",
      "Jayanagar is a well-established south Bengaluru location with residential, educational and commercial access. Learners from Jayanagar, JP Nagar, Basavanagudi, Banashankari, BTM Layout, Wilson Garden and nearby areas can enquire for online or classroom SAP training options.",
    ],
    focusTitle: "Jayanagar SAP course guidance",
    focusText: "Learners around Jayanagar can compare SAP modules based on background, trainer guidance, practical exposure, batch timing and career support.",
    benefitIntro: "The course is useful for freshers, commerce graduates, engineering graduates, finance professionals, procurement teams, sales operations learners, business owners, existing SAP users and working professionals planning a career change.",
    extendedSeo: true,
  },
  jpNagar: {
    location: "JP Nagar",
    area: "JP Nagar, Bangalore",
    slug: "sap-training-in-jp-nagar",
    primaryTopic: "SAP Training in JP Nagar",
    title: "SAP Training in JP Nagar | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in JP Nagar with practical SAP courses, live SAP practice, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP training in JP Nagar, SAP course in JP Nagar, SAP classes in JP Nagar, SAP training institute in JP Nagar, SAP courses with placement in JP Nagar",
    heroText: "Choose practical SAP training in JP Nagar with live SAP server practice, certified trainer guidance, flexible weekday, weekend and fast-track batches, course completion support, certification guidance and placement assistance.",
    introLead: "If you are looking for SAP training in JP Nagar, SV CurioTech helps freshers, graduates and working professionals choose the right SAP module and learn it through real-time examples, practical projects and interview-focused mentoring.",
    localParagraphs: [
      "JP Nagar is one of South Bangalore's convenient learning locations for students and working professionals because it connects well with Jayanagar, BTM Layout, Banashankari, Electronic City, Bannerghatta Road and nearby residential and business areas.",
      "Our SAP training institute supports learners who want more than theory. Classes combine concept explanation, live SAP practice, real business scenarios, doubt clearing, resume guidance, mock interviews and certification direction.",
      "Learners can enquire for SAP FICO, SAP MM, SAP SD, SAP HCM/HR, SAP ABAP, SAP BASIS, SAP SuccessFactors, SAP S/4HANA and SAP Business One based on current batch availability and career goals.",
    ],
    focusTitle: "JP Nagar SAP training with practical projects",
    focusText: "Learners near JP Nagar can choose online or classroom-oriented SAP guidance with small batches, flexible schedules, practical assignments and placement assistance.",
    benefitIntro: "The training is useful for B.Com, BBA, MBA and engineering freshers, finance professionals, supply chain learners, HR professionals, IT graduates and working professionals planning a career change.",
    extendedSeo: true,
  },
  nagarbhavi: {
    location: "Nagarbhavi",
    area: "Nagarbhavi, Bangalore",
    slug: "sap-training-in-nagarbhavi",
    primaryTopic: "SAP Training in Nagarbhavi",
    title: "SAP Training in Nagarbhavi | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Nagarbhavi with practical SAP modules, live business examples, flexible batches, interview preparation and placement assistance.",
    keywords: "SAP training in Nagarbhavi, SAP course in Nagarbhavi, SAP classes in Nagarbhavi, SAP training institute in Nagarbhavi, SAP courses with placement in Nagarbhavi",
    heroText: "Start SAP training from Nagarbhavi with a learning path that feels clear, practical and career-focused. SV CurioTech helps students, graduates and working professionals understand SAP modules through live examples, guided practice and interview preparation.",
    introLead: "If you are searching for SAP training in Nagarbhavi, SV CurioTech helps you choose the right SAP module and learn it with patience, practical examples and real business process understanding.",
    localParagraphs: [
      "Nagarbhavi has a strong student and working-professional crowd, so many learners here look for a course that can genuinely improve their career direction. Some are fresh graduates, some are from commerce or MBA backgrounds, some are engineers, and some are already working but want to move into SAP roles.",
      "Our training is designed for that mixed learner group. We explain SAP from the ground level, connect every topic with business use and help you practice until you can explain the process in your own words. That matters because interviews are not only about remembering menu paths; they are about showing that you understand how companies work.",
      "Learners from Nagarbhavi, Vijayanagar, Rajajinagar, Kengeri, Jnanabharathi, Basaveshwaranagar and nearby west Bangalore areas can attend flexible SAP training with module guidance, SAP server practice and placement-oriented mentoring.",
    ],
    focusTitle: "Nagarbhavi SAP training for students and job seekers",
    focusText: "Local learners in and around Nagarbhavi can start with beginner-friendly SAP guidance and move toward finance, logistics, HR, technical or business analyst career paths.",
    benefitIntro: "The course is helpful for learners who want a practical career skill, not just another certificate to add to the resume.",
  },
  coimbatore: {
    location: "Coimbatore",
    area: "Coimbatore, Tamil Nadu",
    slug: "sap-training-in-coimbatore",
    primaryTopic: "SAP Training in Coimbatore",
    title: "SAP Training in Coimbatore | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Coimbatore with practical SAP courses, live S/4HANA practice, business scenarios, interview preparation and placement assistance.",
    keywords: "SAP training in Coimbatore, SAP course in Coimbatore, SAP classes in Coimbatore, SAP training institute in Coimbatore, SAP courses with placement in Coimbatore",
    heroText: "Learn SAP the way consultants actually use it. SV CurioTech trains students, graduates and working professionals in Coimbatore with live S/4HANA practice, real business scenarios, flexible batches and placement support.",
    introLead: "If you are searching for a SAP training institute in Coimbatore, the right first step is choosing a program that teaches SAP through live business process practice instead of only exam-style theory.",
    localParagraphs: [
      "Coimbatore has strong manufacturing, textile, engineering, finance, logistics and IT services activity, so SAP learning becomes more useful when training connects directly with production planning, procurement, finance, sales and enterprise support scenarios.",
      "SV CurioTech keeps the learning practical. Learners work through module-specific business cases, SAP S/4HANA system practice, configuration discussions, documentation habits, interview questions and project explanations they can confidently discuss with recruiters.",
      "The Coimbatore SAP training page is built for freshers, B.Com, BBA, MBA, M.Com, engineering graduates, working professionals, supply chain teams, finance professionals, manufacturing learners and career changers who want a clear SAP career path.",
    ],
    focusTitle: "Coimbatore SAP training with live S/4HANA practice",
    focusText: "Learners in Coimbatore can ask about SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC with weekday, weekend, online and placement-focused options.",
    benefitIntro: "The training is useful for learners who want practical SAP skills, a real project to explain during interviews, resume support, LinkedIn guidance, mock interviews and continued placement assistance.",
    extendedSeo: true,
  },
  mysore: {
    location: "Mysore",
    area: "Mysore, Karnataka",
    slug: "sap-training-in-mysore",
    primaryTopic: "SAP Training in Mysore",
    title: "SAP Training in Mysore | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Mysore with practical SAP courses, live S/4HANA practice, business scenarios, interview preparation and placement assistance.",
    keywords: "SAP training in Mysore, SAP course in Mysore, SAP classes in Mysore, SAP training institute in Mysore, SAP courses with placement in Mysore",
    heroText: "Learn SAP with practical business scenarios, live S/4HANA practice and placement-focused support. SV CurioTech trains students, graduates and working professionals in Mysore for future-ready SAP careers.",
    introLead: "If you are searching for a SAP training institute in Mysore, choose a program that connects SAP concepts with real enterprise processes instead of only theory or transaction-code memorization.",
    localParagraphs: [
      "Mysore has a strong education base, growing IT services activity, manufacturing support, finance operations and business-service roles, so SAP learning becomes more valuable when training connects with procurement, finance, sales, production, HR and enterprise support scenarios.",
      "SV CurioTech keeps the learning practical. Learners work through module-specific business cases, SAP S/4HANA system practice, configuration discussions, documentation habits, interview questions and project explanations they can confidently discuss with recruiters.",
      "The Mysore SAP training page is built for freshers, B.Com, BBA, MBA, M.Com, engineering graduates, working professionals, supply chain teams, finance professionals, manufacturing learners and career changers who want a clear SAP career path.",
    ],
    focusTitle: "Mysore SAP training with live S/4HANA practice",
    focusText: "Learners in Mysore can ask about SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC with weekday, weekend, online and placement-focused options.",
    benefitIntro: "The training is useful for learners who want practical SAP skills, a real project to explain during interviews, resume support, LinkedIn guidance, mock interviews and continued placement assistance.",
    extendedSeo: true,
  },
  mangalore: {
    location: "Mangalore",
    area: "Mangalore, Karnataka",
    slug: "sap-training-in-mangalore",
    primaryTopic: "SAP Training in Mangalore",
    title: "SAP Training in Mangalore | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Mangalore with practical SAP courses, live S/4HANA practice, business examples, interview preparation and placement assistance.",
    keywords: "SAP training in Mangalore, SAP course in Mangalore, SAP classes in Mangalore, SAP training institute in Mangalore, SAP courses with placement in Mangalore",
    heroText: "Build practical SAP skills with live S/4HANA practice, real business examples, flexible batches and placement assistance. SV CurioTech supports students, graduates and working professionals in Mangalore.",
    introLead: "If you are looking for a SAP training institute in Mangalore, the right course should help you understand business processes, SAP module fit, practical work and interview preparation together.",
    localParagraphs: [
      "Mangalore has learners from commerce, engineering, management, logistics, banking, healthcare, education and growing IT-service backgrounds. SAP training becomes stronger when examples reflect finance, procurement, inventory, sales, HR, production and enterprise operations.",
      "SV CurioTech teaches SAP through practical scenarios, guided assignments, S/4HANA practice, project-style discussions, resume guidance, LinkedIn support, mock interviews and continued placement assistance.",
      "The Mangalore SAP training page is useful for freshers, B.Com, BBA, MBA, M.Com, engineering graduates, working professionals, supply chain learners, finance teams, HR learners and career changers who want a structured SAP career path.",
    ],
    focusTitle: "Mangalore SAP course guidance with placement assistance",
    focusText: "Learners in Mangalore can compare SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC based on their background, target role and batch timing.",
    benefitIntro: "The program focuses on live server practice, one-to-one guidance, project explanation, resume building, LinkedIn support, mock interviews and placement assistance.",
    extendedSeo: true,
  },
  belagavi: {
    location: "Belagavi",
    area: "Belagavi, Karnataka",
    slug: "sap-training-in-belagavi",
    primaryTopic: "SAP Training in Belagavi",
    title: "SAP Training in Belagavi | Practical SAP Courses | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Belagavi with practical SAP courses, S/4HANA practice, business scenarios, interview preparation and placement assistance.",
    keywords: "SAP training in Belagavi, SAP course in Belagavi, SAP classes in Belagavi, SAP training institute in Belagavi, SAP courses with placement in Belagavi",
    heroText: "Belagavi learners can build practical SAP skills with training shaped around manufacturing, finance, supply chain, HR and IT support scenarios. SV CurioTech combines live S/4HANA practice, mentoring and placement support.",
    introLead: "If you want SAP training in Belagavi, local context matters. Learners from commerce, engineering, management and working-professional backgrounds need training that connects SAP screens with real business data, not only PDF theory.",
    localParagraphs: [
      "Belagavi has a strong industrial and education base, with manufacturing units, foundries, auto ancillary companies, sugar industries, finance teams and a growing IT corridor around North Karnataka. SAP training becomes stronger when examples reflect that world.",
      "SV CurioTech teaches SAP through practical scenarios such as production orders, material movements, payroll cycles, procurement flows, finance postings and sales documents. Learners practice on SAP S/4HANA instead of only watching screenshots.",
      "The Belagavi SAP course is suitable for learners from KLE, VTU-affiliated colleges, Rani Channamma University, commerce backgrounds, engineering backgrounds, MBA learners, fresh graduates and professionals planning a move into SAP roles.",
    ],
    focusTitle: "Belagavi SAP course guidance for North Karnataka learners",
    focusText: "Learners in Belagavi can compare SAP FICO, MM, SD, PP, HCM, ABAP, SuccessFactors, Ariba, Security and GRC based on their education, target role and placement plan.",
    benefitIntro: "The program focuses on live server practice, small-batch mentoring, project explanation, resume building, LinkedIn profile support, mock interviews and placement assistance.",
    extendedSeo: true,
  },
};

const locationTrainerProfiles = [
  {
    name: "Senior FICO Mentor",
    modules: "SAP FICO, S/4HANA Finance",
    experience: "11+ years",
    focus: "Finance postings, GL, AP, AR, asset accounting, controlling and interview scenario practice.",
  },
  {
    name: "Logistics Functional Mentor",
    modules: "SAP MM, SD, EWM",
    experience: "10+ years",
    focus: "Procure-to-pay, order-to-cash, inventory movement, warehouse flow and cross-module integration.",
  },
  {
    name: "Technical SAP Mentor",
    modules: "SAP ABAP, BASIS, Security",
    experience: "9+ years",
    focus: "Reports, debugging, data dictionary, user administration, role concepts and technical support cases.",
  },
  {
    name: "Manufacturing & HR Mentor",
    modules: "SAP PP, PM, HCM, SuccessFactors",
    experience: "8+ years",
    focus: "Production planning, plant maintenance, employee data, HR process flow and cloud HR module guidance.",
  },
];

const locationStudentStories = testimonials.map((review) => [
  review.name,
  review.role,
  review.company,
  review.quote,
  review.sourceUrl,
]);

function SapTrainingYeshwanthpur() {
  return <SapLocationTrainingPage page={sapLocationPages.yeshwanthpur} />;
}

function SapTrainingMarathahalli() {
  return <SapLocationTrainingPage page={sapLocationPages.marathahalli} />;
}

function OriginalSeoLanding({ page }) {
  const hostRef = useRef(null);
  const [loadError, setLoadError] = useState("");
  const requestCourse = page.location === "Coimbatore" ? "SAP Training in Coimbatore" : "SAP Training in Belagavi";

  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `https://www.svcuriotech.com/${page.slug}`,
  });

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return undefined;

    const shadow = host.shadowRoot || host.attachShadow({ mode: "open" });
    shadow.innerHTML = "<style>:host{display:block}.original-seo-loading{padding:60px 20px;text-align:center;font:600 14px sans-serif;color:#52617c}</style><div class=\"original-seo-loading\">Loading page...</div>";

    async function loadOriginalPage() {
      try {
        const [htmlResponse, cssResponse] = await Promise.all([
          fetch(page.originalHtml),
          fetch(page.originalCss),
        ]);
        if (!htmlResponse.ok || !cssResponse.ok) throw new Error("Original page assets could not be loaded.");

        const [htmlText, cssText] = await Promise.all([htmlResponse.text(), cssResponse.text()]);
        if (cancelled) return;

        const doc = new DOMParser().parseFromString(htmlText, "text/html");
        doc.querySelectorAll("header, footer, script, link, #introOverlay, #scrollProgress, #emberField, .whatsapp-btn, .btn-whatsapp").forEach((node) => node.remove());
        page.removeSelectors?.forEach((selector) => doc.querySelectorAll(selector).forEach((node) => node.remove()));
        const formTarget = doc.querySelector(page.formReplaceSelector);
        if (formTarget) {
          formTarget.outerHTML = `
            <aside class="original-hero-form" id="request-information">
              <span class="original-form-kicker">Quick enquiry</span>
              <h2>Request for Course Information</h2>
              <p>Share your details to get course modules, fees, syllabus, batch timing and placement support information.</p>
              <form class="original-lead-form">
                <input type="text" name="name" placeholder="Enter your full name" autocomplete="name" required>
                <input type="email" name="email" placeholder="you@email.com" autocomplete="email" required>
                <input type="tel" name="phone" placeholder="+91 98765 43210" autocomplete="tel" required>
                <input type="text" name="course" value="${requestCourse}" readonly>
                <div class="original-form-message" aria-live="polite"></div>
                <button type="submit">Submit Request <span aria-hidden="true">→</span></button>
                <small>We will use these details only to contact you about admission.</small>
              </form>
            </aside>
          `;
        }
        doc.querySelectorAll("[id]").forEach((node) => {
          const id = node.getAttribute("id");
          if (id) node.setAttribute("id", `${page.assetBase.replaceAll("/", "-")}-${id}`);
        });
        doc.querySelectorAll("a[href^='#']").forEach((link) => {
          const hash = link.getAttribute("href")?.slice(1);
          if (hash) link.setAttribute("href", `#${page.assetBase.replaceAll("/", "-")}-${hash}`);
        });
        doc.querySelectorAll("[src]").forEach((node) => {
          const value = node.getAttribute("src");
          if (value?.startsWith("images/")) node.setAttribute("src", `${page.assetBase}/${value}`);
        });

        const scopedCss = cssText
          .replaceAll(":root", ":host")
          .replace(/(^|[}\s,])body(?=[\s,{.#[:>])/g, "$1.original-seo-shell")
          .replaceAll("url('../images/", `url('${page.assetBase}/images/`)
          .replaceAll("url(\"../images/", `url(\"${page.assetBase}/images/`)
          .replaceAll("url(images/", `url(${page.assetBase}/images/`);

        shadow.innerHTML = `
          <style>
            :host{display:block}
            .original-seo-shell{display:block;min-width:320px}
            .original-hero-form{background:#fff;color:#182b45;border-radius:8px;padding:30px;box-shadow:0 35px 90px rgba(0,0,0,.34);border:1px solid rgba(255,255,255,.72);align-self:center}
            .original-form-kicker{display:inline-flex;align-items:center;gap:7px;color:#087f7a;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:800;margin-bottom:14px}
            .original-hero-form h2{font:800 28px/1.18 "Space Grotesk","Manrope",Arial,sans-serif;color:#182b45;margin:0 0 10px}
            .original-hero-form p{color:#60707d;font-size:13px;line-height:1.6;margin:0 0 20px}
            .original-lead-form{display:grid;gap:13px}
            .original-lead-form input{width:100%;border:1px solid #d0d7df;border-radius:0;padding:13px 14px;background:#fff;color:#182b45;font:500 13px "Inter","DM Sans",Arial,sans-serif;outline:none}
            .original-lead-form input:focus{border-color:#087f7a;box-shadow:0 0 0 3px #dff3ef}
            .original-lead-form input[readonly]{background:#f5f8f8;color:#52646c}
            .original-lead-form button{justify-self:center;border:0;border-radius:4px;background:linear-gradient(135deg,#0a8f83,#12af97);color:#fff;padding:13px 28px;font:800 15px "Inter","DM Sans",Arial,sans-serif;cursor:pointer;box-shadow:0 14px 32px rgba(8,143,131,.22)}
            .original-lead-form button:disabled{opacity:.72;cursor:not-allowed}
            .original-lead-form small{color:#7f8d9c;text-align:center;font-size:9px}
            .original-form-message{display:none;border-radius:6px;padding:10px 12px;font:700 12px "Inter","DM Sans",Arial,sans-serif}
            .original-form-message.show{display:block}
            .original-form-message.ok{background:#e4faf3;color:#087f7a}
            .original-form-message.error{background:#fff1f1;color:#b42318}
            @media(max-width:820px){.original-hero-form{max-width:560px;width:100%;margin:20px auto 0;padding:24px 20px}.original-hero-form h2{font-size:23px}}
            ${scopedCss}
          </style>
          <div class="original-seo-shell">${doc.body.innerHTML}</div>
        `;

        const form = shadow.querySelector(".original-lead-form");
        form?.addEventListener("submit", async (event) => {
          event.preventDefault();
          const submitButton = form.querySelector("button");
          const message = form.querySelector(".original-form-message");
          const values = Object.fromEntries(new FormData(form).entries());
          submitButton.disabled = true;
          submitButton.textContent = "Submitting...";
          message.className = "original-form-message";
          message.textContent = "";
          try {
            const response = await fetch(import.meta.env.VITE_LEAD_API_URL || "/api/lead", {
              method: "POST",
              headers: { Accept: "application/json", "Content-Type": "application/json" },
              body: JSON.stringify({
                ...values,
                variant: "course-info",
                _replyto: values.email,
                _subject: `New ${requestCourse} enquiry - ${values.name}`,
                source: window.location.href,
                submittedAt: new Date().toISOString(),
              }),
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok || result.ok === false) throw new Error(result.error || "Unable to submit now. Please call or WhatsApp us.");
            form.reset();
            const courseInput = form.querySelector('input[name="course"]');
            if (courseInput) courseInput.value = requestCourse;
            message.className = "original-form-message show ok";
            message.textContent = "Request received. Our admissions team will contact you shortly.";
          } catch (submissionError) {
            message.className = "original-form-message show error";
            message.textContent = submissionError instanceof Error ? submissionError.message : "Unable to submit now. Please call or WhatsApp us.";
          } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit Request <span aria-hidden="true">→</span>';
          }
        });
      } catch (error) {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : "Original page could not be loaded.");
        }
      }
    }

    loadOriginalPage();
    return () => {
      cancelled = true;
    };
  }, [page]);

  return <Layout>
    {loadError && <section className="section"><div className="container"><p className="form-error">{loadError}</p></div></section>}
    <div ref={hostRef} />
  </Layout>;
}

function SapTrainingCoimbatore() {
  return <OriginalSeoLanding page={{
    ...sapLocationPages.coimbatore,
    originalHtml: "/assets/original-seo-pages/coimbatore/index.html",
    originalCss: "/assets/original-seo-pages/coimbatore/style.css",
    assetBase: "/assets/original-seo-pages/coimbatore",
    formReplaceSelector: ".hero .ledger",
    removeSelectors: ["#contact"],
  }} />;
}

function SapTrainingBelagavi() {
  return <SapLocationTrainingPage page={sapLocationPages.belagavi} />;
}

function SapLocationTrainingPage({ page }) {
  const { location, area, slug } = page;
  const primaryTopic = page.primaryTopic || (slug.includes("sap-course-in-") ? `SAP Course in ${location}` : `SAP Training in ${location}`);

  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `https://www.svcuriotech.com/${slug}`,
  });

  const pageCourseLinks = allLocationCoursePages.filter((item) => item.location === location);
  const moduleLink = (module, fallback) => {
    const coursePage = pageCourseLinks.find((item) => item.module === module);
    return coursePage ? `/${coursePage.slug}` : fallback;
  };
  const locationModules = [
    ["SAP ABAP", "Technical SAP programming training covering reports, forms, debugging, data dictionary and development basics.", moduleLink("SAP ABAP", "/courses/sap-abap")],
    ["SAP Ariba", "Procurement and supplier collaboration training for sourcing, buying, invoicing and modern supply chain workflows.", moduleLink("SAP Ariba", "/courses/sap-ariba")],
    ["SAP BASIS", "SAP administration training covering user management, monitoring, transport basics and system support concepts.", moduleLink("SAP BASIS", "/courses")],
    ["SAP EWM", "Warehouse management training for inbound, outbound, stock movement, storage and logistics execution scenarios.", moduleLink("SAP EWM", "/courses")],
    ["SAP FICO", "Finance and controlling training for accounting, reporting, cost centers, profit centers and financial business processes.", moduleLink("SAP FICO", "/best-sap-fico-course-in-Bangalore/")],
    ["SAP HCM", "Human capital management training for employee data, personnel administration and HR process understanding.", moduleLink("SAP HCM", "/courses")],
    ["SAP MM", "Materials Management training for procurement, inventory, purchase orders, vendor master and material master processes.", moduleLink("SAP MM", "/best-sap-mm-course-in-bangalore/")],
    ["SAP PM", "Plant maintenance training for equipment, notifications, maintenance orders and preventive maintenance processes.", moduleLink("SAP PM", "/courses")],
    ["SAP PP", "Production Planning training for manufacturing, planning, MRP, capacity and shop floor business scenarios.", moduleLink("SAP PP", "/courses/sap-pp")],
    ["SAP SD", "Sales and Distribution training focused on order-to-cash, pricing, billing, customer master and delivery processes.", moduleLink("SAP SD", "/sap-sd-training-in-bangalore/")],
  ];

  const baseFaqs = [
    [`Who can join SAP training in ${location}?`, "Freshers, graduates, MBA students, commerce students, engineers and working professionals can join. Our team helps you choose a module based on your background and career goal."],
    [`Which SAP module is best for learners in ${location}?`, "The best module depends on your profile. Finance learners often choose SAP FICO, procurement and supply chain learners choose SAP MM, sales learners choose SAP SD, technical learners choose SAP ABAP or BASIS, and HR learners choose SAP HCM or SuccessFactors."],
    ["Do you provide practical SAP training?", "Yes. Classes include business scenarios, assignments, case discussions, guided practice and project-style learning so you understand how SAP is used in companies."],
    ["Is placement assistance included?", "Learners receive CV guidance, interview preparation, project explanation support and career opportunity guidance as part of the program."],
    ["Are weekday and weekend batches available?", "Yes. Batch options depend on current availability, and our admissions team can guide you on weekday, weekend, online and classroom schedules."],
  ];
  const jayanagarFaqs = [
    ["What SAP course is best suited for a commerce graduate?", "SAP FICO is commonly suitable for learners from finance, accounting, B.Com, M.Com and MBA finance backgrounds. Your final choice should also consider your career goal, comfort with accounting concepts and interview direction."],
    ["Can a fresher learn SAP in Jayanagar?", "Yes. Freshers can learn SAP when the course starts with business process basics before moving into SAP screens, configuration and interview scenarios."],
    ["Do you offer SAP FICO training in Jayanagar?", "SV CurioTech provides SAP FICO and other SAP modules depending on current batch availability. Contact the team to check the latest schedule, mode and training approach."],
    ["Do you provide SAP server or practical access?", "Practical or server access may depend on the course and current training arrangement. Learners should confirm access period and practice expectations before enrolling."],
    ["Where can I learn SAP near Jayanagar?", "Learners from Jayanagar and nearby areas should compare SAP courses based on trainer experience, syllabus depth, practical exposure, batch size, timing, interview support and post-course guidance instead of choosing only by distance."],
  ];
  const extendedCopy = {
    courseLocation: "Jayanagar",
    fullLocation: "Jayanagar, Bangalore",
    nearByTitle: "Useful for learners around south Bengaluru",
    nearByText: "Jayanagar is convenient for learners who want SAP course guidance near residential, college and business areas in south Bengaluru. Many learners compare training options from nearby locations before choosing a module and batch timing.",
    localAreas: ["Jayanagar", "JP Nagar", "Basavanagudi", "Banashankari", "BTM Layout", "Wilson Garden", "Lalbagh Road", "South End Circle", "J P Nagar Metro side", "Vijaya Bank Layout"],
    fresherTitle: "SAP training for freshers in Jayanagar",
    fresherText: "Freshers often ask whether SAP is hard, which module they should select, and what they should study before applying for SAP jobs. These are the right questions to ask before joining. At SV CurioTech, learners can understand the module, syllabus, learning approach, practical expectations and interview direction before choosing a program.",
    professionalTitle: "SAP training for working professionals",
    professionalText: "Working professionals usually need training that connects existing business experience with SAP processes. Finance, procurement, sales, operations, HR and IT professionals can discuss flexible batch options, current availability, practical learning needs and the SAP module that fits their next career move.",
    learnerIntroTitle: "Different learners need different SAP paths.",
    learnerIntroText: "A good SAP course page should not speak to everyone in the same way. A commerce graduate, a procurement executive, an engineering fresher and an HR professional may all search for SAP training in Jayanagar, but each person needs a different explanation of module fit, practice style and career direction.",
    batchText: "SAP course availability may vary according to the module and trainer schedule. Learners can enquire about weekday batches, weekend batches, online training, classroom training where available, current batch start dates, course duration, practical or server access and individual module availability.",
    batchCompareText: "Instead of choosing only by short duration or low fee, compare whether the important concepts, business scenarios and practical sessions are actually included.",
    afterTrainingText: "After completing SAP training, a learner should be able to explain the basic purpose of the selected module, important master data, common transactions, business process flow, integration touchpoints and the kind of work expected in an SAP support or consultant role.",
    searchTopics: [
      ["SAP training institute near you", "Compare trainer experience, practical access, syllabus depth, batch size, timing, interview support and post-course guidance before choosing a course."],
      ["SAP course fees and duration", "Ask what is included in the quoted fee, how long the batch runs, how much practice is expected and whether assignments or project discussion are part of the course."],
      ["Online and classroom SAP training", "Choose a learning mode based on commute, job schedule, practice time and access to trainer support."],
      ["SAP course with placement assistance", "Look for resume help, mock interviews, project explanation, career guidance and realistic role direction instead of vague job promises."],
    ],
    faqs: jayanagarFaqs,
  };
  Object.assign(extendedCopy, page.extendedCopy || {});
  const faqs = page.extendedSeo ? [...baseFaqs, ...extendedCopy.faqs] : baseFaqs;

  const jayanagarModuleGuidance = [
    ["SAP FICO", "For finance, accounting, commerce and MBA finance learners who want to understand financial accounting, controlling and business process scenarios."],
    ["SAP MM", "For procurement and supply-chain learners interested in purchasing, vendor master, inventory processes and integration with other SAP functions."],
    ["SAP SD", "For sales and operations learners who want to understand sales orders, delivery, billing, customer master and order-to-cash scenarios."],
    ["SAP PP", "For manufacturing and production planning learners who want to understand MRP, production planning and shop floor process flow."],
    ["SAP ABAP", "For technical learners interested in programming, reports, debugging, data dictionary and SAP development basics."],
    ["SAP HCM, SuccessFactors and Ariba", "For HR, cloud HR and procurement learners who want to ask about current batch availability and module fit."],
  ];
  const jayanagarChecklist = [
    "Who will conduct the training?",
    "What exactly is included in the syllabus?",
    "Does the course include practical SAP training?",
    "Will SAP system or server access be available?",
    "How many learners are in each batch?",
    "What are the class timings and current batch dates?",
    "Is the course suitable for your education or work background?",
    "How much self-practice is expected outside class?",
    "Is interview preparation part of the training?",
    "What support is available after course completion?",
  ];
  const jayanagarLearnerSituations = [
    ["Commerce graduate unsure about SAP FICO", "You may know accounting entries, but SAP connects those entries to company processes such as vendor invoices, customer payments, asset accounting and cost tracking. The course should help you speak about finance flow, not only screens."],
    ["Working professional from procurement or stores", "If you already handle purchase requests, vendors, stock or inventory, SAP MM can help you understand how those tasks are managed in an enterprise system from purchase order to invoice verification."],
    ["Engineering graduate looking for an ERP career", "Engineering learners often compare SAP ABAP, SAP PP, SAP MM and SAP BASIS depending on whether they prefer programming, manufacturing, process consulting or system administration."],
    ["HR learner comparing HCM and SuccessFactors", "HR learners should understand the difference between traditional SAP HCM concepts and cloud HR processes such as employee central, recruiting, onboarding and performance management."],
  ];
  const jayanagarClassFlow = [
    ["Business context first", "The trainer explains why a company uses the process before moving into SAP screens."],
    ["SAP screen practice", "Learners see relevant transactions, master data, configuration points and process steps where applicable."],
    ["Scenario discussion", "Each topic is connected to examples such as purchase-to-pay, order-to-cash, finance posting or HR process flow."],
    ["Interview preparation", "Learners practise explaining the process, project work, common questions and role-specific answers."],
  ];
  const jayanagarLocalAreas = extendedCopy.localAreas;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: primaryTopic,
    description: `Practical SAP training in ${area} with live projects, module-focused learning and placement assistance.`,
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: area,
    courseMode: ["Classroom", "Online"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${primaryTopic} course options`,
    itemListElement: locationModules.slice(0, 10).map(([name, description, link], index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: `${name} Training in ${location}`,
        description,
        provider: {
          "@type": "EducationalOrganization",
          name: "SV CurioTech",
          url: "https://www.svcuriotech.com/",
        },
        url: `https://www.svcuriotech.com${link}`,
      },
    })),
  };

  return <Layout>
    <section className="seo-hero">
      <div className="container seo-hero-grid">
        <div className="seo-hero-copy">
          <span className="eyebrow light"><MapPin size={15}/> {location} SAP academy</span>
          <h1>{primaryTopic}</h1>
          <p>{page.heroText}</p>
          <div className="hero-actions"><Link className="button" to={registrationLink(`SAP Training in ${location}`)}>Get More Information <ArrowRight size={18}/></Link><Link className="button button-ghost light-ghost" to="/courses">Explore SAP Courses</Link></div>
        </div>
        <div className="seo-hero-form hero-course-card">
          <div className="hero-course-head">
            <span><BookOpen size={15} /> Quick enquiry</span>
            <strong>Get {location} SAP course details</strong>
          </div>
          <LeadForm variant="course-info" defaultCourse={`SAP Training in ${location}`} />
          <div className="hero-course-trust">
            <span><CalendarCheck /> Flexible batches</span>
            <span><BadgeCheck /> Placement assistance</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section seo-intro">
      <div className="container split">
        <div>
          <SectionTitle eyebrow="Practical SAP course" title={`${primaryTopic} with practical career support`} />
          <p className="large-copy">{page.introLead}</p>
        </div>
        <div className="seo-rich-text">
          {page.localParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="Popular SAP modules" title="Choose the SAP module that matches your career path" text="Start with the right module, then build skills through examples, assignments and guided project discussions." />
        <div className="seo-module-grid">
          {locationModules.map(([title, text, link]) => <Link className="seo-module-card" key={title} to={link}><strong>{title}</strong><p>{text}</p><span>View course <ArrowRight size={15}/></span></Link>)}
        </div>
      </div>
    </section>

    {page.extendedSeo && <section className="section jayanagar-depth-section">
      <div className="container">
        <SectionTitle eyebrow="SAP courses available" title="SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba and S/4HANA guidance" text="Learners can ask about different SAP modules according to education, work experience and career objective. The right course depends on your background, not only on which module is popular." />
        <div className="module-guidance-grid">
          {jayanagarModuleGuidance.map(([title, text]) => <article key={title}><small>SAP module</small><h4>{title}</h4><p>{text}</p></article>)}
        </div>
        <div className="jayanagar-human-copy">
          <article>
            <span className="eyebrow"><GraduationCap size={14}/> Freshers</span>
            <h3>{extendedCopy.fresherTitle}</h3>
            <p>{extendedCopy.fresherText}</p>
          </article>
          <article>
            <span className="eyebrow"><BriefcaseBusiness size={14}/> Working professionals</span>
            <h3>{extendedCopy.professionalTitle}</h3>
            <p>{extendedCopy.professionalText}</p>
          </article>
        </div>
        <div className="jayanagar-story-panel">
          <div>
            <span className="eyebrow"><Users size={14}/> Learner situations</span>
            <h3>{extendedCopy.learnerIntroTitle}</h3>
            <p>{extendedCopy.learnerIntroText}</p>
          </div>
          <div className="jayanagar-situation-grid">
            {jayanagarLearnerSituations.map(([title, text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}
          </div>
        </div>
      </div>
    </section>}

    {page.extendedSeo && <section className="section jayanagar-class-section">
      <div className="container">
        <SectionTitle eyebrow="How training works" title="What a practical SAP class should feel like" text="The goal is not to rush through transaction codes. Learners should understand why a process exists, how SAP supports it, where the data comes from, and how to explain it during interviews." />
        <div className="jayanagar-flow-grid">
          {jayanagarClassFlow.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="jayanagar-local-panel">
          <div>
            <h3>{extendedCopy.nearByTitle}</h3>
            <p>{extendedCopy.nearByText}</p>
          </div>
          <div className="role-row module-role-row">
            {jayanagarLocalAreas.map((areaName) => <span key={areaName}>{areaName}</span>)}
          </div>
        </div>
      </div>
    </section>}

    {page.extendedSeo && <section className="section soft-section">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow"><CalendarCheck size={14}/> Batch information</span>
          <h2>Course duration, batch timings and training mode</h2>
          <p>{extendedCopy.batchText}</p>
          <p>{extendedCopy.batchCompareText}</p>
        </article>
        <article>
          <span className="eyebrow"><ShieldCheck size={14}/> Before enrolling</span>
          <h2>What should you check before joining?</h2>
          <ul className="check-list">
            {jayanagarChecklist.map((item) => <li key={item}><Check/> {item}</li>)}
          </ul>
        </article>
      </div>
    </section>}

    {page.extendedSeo && <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Course search guidance" title={`SAP course details learners compare in ${location}`} text="A strong SAP page should answer the practical questions learners ask before submitting an enquiry." />
        <div className="module-guidance-grid">
          {extendedCopy.searchTopics.map(([title, text]) => <article key={title}><small>Important query</small><h4>{title}</h4><p>{text}</p></article>)}
        </div>
      </div>
    </section>}

    <section className="section">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow"><BookOpen size={14}/> Course overview</span>
          <h2>Learn SAP with business process clarity</h2>
          <p>SV CurioTech focuses on practical SAP learning. In each module, learners understand the purpose of the process, the master data involved, the transaction flow and the type of questions that appear in interviews. This helps students connect concepts to real work instead of memorizing isolated steps.</p>
          <p>{page.benefitIntro} Our trainers explain topics patiently, connect them to industry examples and help learners practice consistently.</p>
        </article>
        <article>
          <span className="eyebrow"><Target size={14}/> What you gain</span>
          <h2>Benefits of SAP training at SV CurioTech</h2>
          <ul className="check-list">
            <li><Check/> Instructor-led sessions with practical business examples</li>
            <li><Check/> Hands-on assignments and project-style discussions</li>
            <li><Check/> Flexible weekday and weekend batch options</li>
            <li><Check/> Interview preparation, resume guidance and placement support</li>
            <li><Check/> Course guidance for freshers and working professionals</li>
          </ul>
        </article>
      </div>
    </section>

    {page.extendedSeo && <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="Trainer guidance" title={`SAP trainers for ${location} learners`} text="Learners get module guidance from mentors who explain SAP with business context, project-style practice and interview preparation." />
        <div className="trainer-grid">
          {locationTrainerProfiles.map((trainer) => <article className="trainer-card" key={trainer.name}>
            <span><GraduationCap /></span>
            <small>{trainer.experience} practical exposure</small>
            <h3>{trainer.name}</h3>
            <strong>{trainer.modules}</strong>
            <p>{trainer.focus}</p>
          </article>)}
        </div>
      </div>
    </section>}

    <section className="section seo-band">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow light"><GraduationCap size={14}/> Eligibility</span>
          <h2>Who can join this SAP course?</h2>
          <p>Students from B.Com, BBA, BCA, BE, B.Tech, MBA, M.Com and similar backgrounds can join SAP training based on their career direction. Working professionals from finance, procurement, sales, logistics, HR, production, IT support and development backgrounds can also choose SAP modules that match their experience.</p>
          <p>If you are unsure which SAP module is right for you, our admissions team can guide you. For example, commerce and finance learners often explore SAP FICO, supply chain learners may choose SAP MM or SAP SD, technical learners may prefer SAP ABAP, and manufacturing profiles may consider SAP PP.</p>
        </article>
        <article>
          <span className="eyebrow light"><BriefcaseBusiness size={14}/> Career roles</span>
          <h2>Career paths after SAP training</h2>
          <div className="role-row seo-role-row">
            <span>SAP Functional Consultant</span>
            <span>SAP Technical Consultant</span>
            <span>SAP Support Consultant</span>
            <span>SAP End User</span>
            <span>SAP Analyst</span>
            <span>SAP Implementation Associate</span>
          </div>
        </article>
      </div>
    </section>

    {page.extendedSeo && <section className="section jayanagar-outcome-section">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow"><Rocket size={14}/> After training</span>
          <h2>What should you be able to explain after the course?</h2>
          <p>{extendedCopy.afterTrainingText}</p>
          <p>This is why SV CurioTech gives importance to practical examples, revision, interview questions and project-style discussion. The goal is to help learners speak with confidence, not simply say that they completed a course.</p>
        </article>
        <article>
          <span className="eyebrow"><Target size={14}/> Interview readiness</span>
          <h2>How interview preparation is handled</h2>
          <ul className="check-list">
            <li><Check/> Module-wise process explanation practice</li>
            <li><Check/> Resume and profile discussion based on your background</li>
            <li><Check/> Common fresher and experienced interview questions</li>
            <li><Check/> Project or scenario explanation support</li>
            <li><Check/> Guidance on realistic entry-level SAP role expectations</li>
          </ul>
        </article>
      </div>
    </section>}

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Why choose us" title="A learning experience built around practice and confidence" />
        <div className="benefit-grid">
          <div className="benefit-card"><span><Users/></span><h3>Experienced trainers</h3><p>Learn from mentors who explain SAP concepts with real business context and interview-focused clarity.</p></div>
          <div className="benefit-card"><span><BriefcaseBusiness/></span><h3>Live project approach</h3><p>Understand process flows through assignments, scenarios and guided project-style learning.</p></div>
          <div className="benefit-card"><span><CalendarCheck/></span><h3>Flexible batches</h3><p>Choose practical weekday, weekend, online or classroom options based on current batch availability.</p></div>
          <div className="benefit-card"><span><ShieldCheck/></span><h3>Career support</h3><p>Get help with resumes, mock interviews, project explanation and opportunity guidance.</p></div>
          <div className="benefit-card"><span><MapPin/></span><h3>{page.focusTitle}</h3><p>{page.focusText}</p></div>
          <div className="benefit-card"><span><Headphones/></span><h3>Admission guidance</h3><p>Talk to us before enrolling so you can choose a module that fits your education and goals.</p></div>
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title={`Questions about SAP training in ${location}`} />
        <div className="faq-grid">
          {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>

    {page.extendedSeo && <section className="section testimonials-section">
      <div className="container">
        <SectionTitle eyebrow="Learner feedback" title={`SAP learner stories from ${location} course enquiries`} text="These learner-style stories show the kind of practical clarity students usually look for: trainer support, module fit, assignments, project explanation and interview preparation." />
        <div className="review-summary">
          <div>
            <div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={17} fill="currentColor"/>)}</div>
            <strong>Student-focused SAP learning</strong>
            <p>SV CurioTech highlights practical business scenarios, module guidance, resume support, interview preparation and flexible learning options for freshers and working professionals.</p>
          </div>
          <a className="button button-outline" href="https://www.google.com/search?q=SV+CurioTech+reviews" target="_blank" rel="noreferrer">Check Google Reviews <ArrowRight size={17}/></a>
        </div>
        <div className="testimonial-grid">
          {locationStudentStories.map(([name, role, company, quote, sourceUrl]) => <article className="testimonial" key={`${location}-${name}`}><div className="quote-mark">"</div><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div><p>{quote}</p><div className="student"><span>{name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><div><strong>{name}</strong><small>{role} - {company}</small>{sourceUrl && <a className="google-review-link" href={sourceUrl} target="_blank" rel="noreferrer">View Google review <ArrowRight size={12}/></a>}</div></div></article>)}
        </div>
      </div>
    </section>}

    <section className="cta-band" id={`${slug}-contact`}>
      <div className="container">
        <div><span className="eyebrow light"><Sparkles size={15}/> Start learning SAP</span><h2>Enquire for SAP training in {location}</h2><p>Speak with SV CurioTech to choose the right SAP module, batch timing and career path.</p></div>
        <Link className="button" to={registrationLink(`SAP Training in ${location}`)}>Register for course guidance <ArrowRight size={18}/></Link>
      </div>
    </section>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    {page.extendedSeo && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    {page.extendedSeo && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }} />}
  </Layout>;
}

const yeshwanthpurCoursePages = [
  {
    slug: "sap-abap-training-in-yeshwanthpur",
    module: "SAP ABAP",
    h1: "SAP ABAP Training in Yeshwanthpur",
    title: "SAP ABAP Training in Yeshwanthpur | Practical SAP ABAP Course",
    description: "Learn SAP ABAP in Yeshwanthpur with technical programming practice, SAP server access, live projects and placement support at SV CurioTech.",
    keywords: "SAP ABAP training in Yeshwanthpur, SAP ABAP course Bangalore, SAP technical training",
    intro: "SV CurioTech offers SAP ABAP technical training for learners who want to build programming and development careers in SAP.",
    highlights: ["Technical SAP practice", "Programming assignments", "Live project exposure", "Interview support"],
    fitTitle: "For technical graduates and career changers",
    fit: ["BCA, BE, B.Tech and MCA learners", "Developers moving into SAP", "Freshers looking for technical consultant roles"],
    supportTitle: "Hands-on ABAP learning",
    support: ["SAP server access", "Assignments and assessments", "Resume preparation", "Placement assistance"],
    overview: "SAP ABAP is the technical foundation for many SAP development careers. The course focuses on reports, forms, debugging, data dictionary concepts and development practice so learners can understand how business requirements are converted into SAP programs.",
    outcomes: ["ABAP Developer", "SAP Technical Consultant", "SAP Support Developer", "SAP Implementation Associate"],
    color: "#e64d86",
  },
  {
    slug: "sap-ariba-training-in-yeshwanthpur",
    module: "SAP Ariba",
    h1: "SAP Ariba Training in Yeshwanthpur",
    title: "SAP Ariba Training in Yeshwanthpur | Practical SAP Ariba Course",
    description: "Join SAP Ariba training in Yeshwanthpur at SV CurioTech. Learn procurement concepts with practical sessions, projects and placement support.",
    keywords: "SAP Ariba training in Yeshwanthpur, SAP Ariba course Bangalore, SAP procurement training",
    intro: "SV CurioTech offers SAP Ariba training for learners who want to understand procurement, sourcing and supplier collaboration workflows.",
    highlights: ["Procurement process training", "Practical SAP learning", "Assignments and assessments", "Placement assistance"],
    fitTitle: "For procurement and supply chain learners",
    fit: ["Freshers interested in procurement careers", "Purchase and sourcing professionals", "Supply chain learners moving into SAP"],
    supportTitle: "Practical Ariba training support",
    support: ["Sourcing and buying process examples", "Supplier collaboration concepts", "Resume preparation", "Interview guidance"],
    overview: "SAP Ariba helps companies manage sourcing, supplier collaboration, procurement and spend management. This course introduces the practical flow of procurement activities and helps learners connect Ariba concepts with real business scenarios.",
    outcomes: ["SAP Ariba Consultant", "Procurement Analyst", "Supplier Collaboration Associate", "SAP Functional Support Consultant"],
    color: "#0aa3b5",
  },
  {
    slug: "sap-basis-training-in-yeshwanthpur",
    module: "SAP BASIS",
    h1: "SAP BASIS Training in Yeshwanthpur",
    title: "SAP BASIS Training in Yeshwanthpur | Practical SAP BASIS Course",
    description: "Join SAP BASIS training in Yeshwanthpur at SV CurioTech. Learn SAP administration concepts with practical sessions and placement support.",
    keywords: "SAP BASIS training in Yeshwanthpur, SAP BASIS course Bangalore, SAP administration training",
    intro: "SV CurioTech offers SAP BASIS training for learners who want to understand SAP system administration and technical operations.",
    highlights: ["SAP administration basics", "Server access practice", "Real-time case studies", "Career guidance"],
    fitTitle: "For technical learners and IT professionals",
    fit: ["IT support professionals", "Freshers interested in SAP administration", "System administrators moving into SAP"],
    supportTitle: "Administration-focused practice",
    support: ["User and system concepts", "Transport and monitoring basics", "Assignments and assessments", "Placement assistance"],
    overview: "SAP BASIS is the administration layer that keeps SAP systems available, secure and reliable. Training covers system concepts, user administration, monitoring, transport basics and the practical responsibilities of an SAP administrator.",
    outcomes: ["SAP BASIS Administrator", "SAP Technical Support Consultant", "SAP System Analyst", "SAP Operations Associate"],
    color: "#0f766e",
  },
  {
    slug: "sap-ewm-training-in-yeshwanthpur",
    module: "SAP EWM",
    h1: "SAP EWM Training in Yeshwanthpur",
    title: "SAP EWM Training in Yeshwanthpur | Practical SAP EWM Course",
    description: "Learn SAP EWM in Yeshwanthpur with warehouse management training, SAP server access, real-time projects and placement support.",
    keywords: "SAP EWM training in Yeshwanthpur, SAP EWM course Bangalore, SAP warehouse management training",
    intro: "SV CurioTech offers SAP EWM training for learners who want to work with warehouse operations and advanced logistics processes.",
    highlights: ["Warehouse process training", "Hands-on SAP server access", "Live project exposure", "Career support"],
    fitTitle: "For warehouse and logistics career paths",
    fit: ["Logistics and warehouse professionals", "Supply chain learners", "Freshers interested in SAP logistics roles"],
    supportTitle: "Warehouse process learning",
    support: ["Inbound and outbound process examples", "Inventory and warehouse concepts", "Case studies", "Interview preparation"],
    overview: "SAP EWM supports advanced warehouse management, stock movement and logistics execution. This course helps learners understand warehouse process flows and how SAP supports inventory handling, storage and fulfillment activities.",
    outcomes: ["SAP EWM Consultant", "Warehouse Process Analyst", "SAP Logistics Support Consultant", "Supply Chain Associate"],
    color: "#1689dd",
  },
  {
    slug: "sap-fico-training-in-yeshwanthpur",
    module: "SAP FICO",
    h1: "SAP FICO Training in Yeshwanthpur",
    title: "SAP FICO Training in Yeshwanthpur | Practical SAP FICO Course",
    description: "Learn SAP FICO in Yeshwanthpur with practical finance and controlling training, live projects, interview preparation and placement support at SV CurioTech.",
    keywords: "SAP FICO training in Yeshwanthpur, SAP FICO course Bangalore, SAP finance training",
    intro: "SV CurioTech offers SAP FICO training for learners who want to build practical finance and controlling skills for SAP careers.",
    highlights: ["Financial accounting concepts", "Controlling process basics", "Real-time case studies", "Interview preparation"],
    fitTitle: "Ideal for commerce, finance and MBA learners",
    fit: ["B.Com, M.Com, BBA and MBA graduates", "Finance and accounting professionals", "Freshers looking for SAP functional consultant roles"],
    supportTitle: "Training focused on practical SAP use",
    support: ["Instructor-led classroom training", "Assignments and assessments", "Resume and interview preparation", "Placement assistance"],
    overview: "SAP FICO connects accounting, reporting and controlling processes inside enterprise finance. Learners practice financial accounting and controlling concepts with business examples so they can discuss real finance flows during interviews.",
    outcomes: ["SAP FICO Consultant", "Finance Process Analyst", "SAP Support Consultant", "Accounts and Controlling Associate"],
    color: "#635bff",
  },
  {
    slug: "sap-hcm-training-in-yeshwanthpur",
    module: "SAP HCM",
    h1: "SAP HCM Training in Yeshwanthpur",
    title: "SAP HCM Training in Yeshwanthpur | Practical SAP HCM Course",
    description: "Join SAP HCM training in Yeshwanthpur at SV CurioTech. Learn human capital management with practical sessions and placement support.",
    keywords: "SAP HCM training in Yeshwanthpur, SAP HCM course Bangalore, SAP HR training",
    intro: "SV CurioTech offers SAP HCM training for learners who want to understand HR processes inside SAP.",
    highlights: ["HR process training", "Hands-on SAP practice", "Real-time case studies", "Interview preparation"],
    fitTitle: "For HR learners and professionals",
    fit: ["MBA HR graduates", "HR executives and recruiters", "Freshers interested in SAP HR roles"],
    supportTitle: "Practical HCM learning",
    support: ["Personnel administration concepts", "Organizational management examples", "Assignments and assessments", "Placement assistance"],
    overview: "SAP HCM focuses on human resource processes such as employee data, organizational structures, payroll-related concepts and HR operations. The training helps learners understand how companies manage people processes using SAP.",
    outcomes: ["SAP HCM Consultant", "HR Process Analyst", "SAP HR Support Consultant", "HR Operations Associate"],
    color: "#8b5cf6",
  },
  {
    slug: "sap-mm-training-in-yeshwanthpur",
    module: "SAP MM",
    h1: "SAP MM Training in Yeshwanthpur",
    title: "SAP MM Training in Yeshwanthpur | Practical SAP MM Course",
    description: "Join SAP MM training in Yeshwanthpur at SV CurioTech. Learn materials management with practical sessions, SAP server access, real-time projects and placement support.",
    keywords: "SAP MM training in Yeshwanthpur, SAP MM course Yeshwanthpur, SAP MM training Bangalore, SAP materials management training",
    intro: "Build practical skills in SAP Materials Management with instructor-led classes, SAP server access, live projects, interview preparation and placement support from SV CurioTech.",
    highlights: ["Procurement process training", "Inventory and material master practice", "Real-time case studies", "Weekday and weekend batches"],
    fitTitle: "SAP MM course for freshers and professionals",
    fit: ["Fresh graduates from B.Com, BBA, BCA, BE, B.Tech, MBA and M.Com", "Working professionals in purchase, inventory, logistics and supply chain", "Job seekers who want to start an SAP consultant career"],
    supportTitle: "Practical SAP MM training with job support",
    support: ["Experienced industry trainers", "Hands-on SAP server access", "Assignments, assessments and resume preparation", "Interview practice and placement assistance"],
    overview: "SAP MM covers procurement, material master, vendor master, purchase orders, inventory management and invoice verification. This course helps learners understand the procure-to-pay flow with practical examples used in companies.",
    outcomes: ["SAP MM Consultant", "Procurement Analyst", "Inventory Process Associate", "SAP Supply Chain Support Consultant"],
    color: "#08a88a",
  },
  {
    slug: "sap-pm-training-in-yeshwanthpur",
    module: "SAP PM",
    h1: "SAP PM Training in Yeshwanthpur",
    title: "SAP PM Training in Yeshwanthpur | Practical SAP PM Course",
    description: "Join SAP PM training in Yeshwanthpur at SV CurioTech. Learn plant maintenance concepts with practical sessions, projects and career support.",
    keywords: "SAP PM training in Yeshwanthpur, SAP PM course Bangalore, SAP plant maintenance training",
    intro: "SV CurioTech offers SAP PM training for learners who want to understand plant maintenance, equipment management and maintenance process workflows.",
    highlights: ["Plant maintenance concepts", "Equipment and notification process training", "Assignments and assessments", "Career guidance"],
    fitTitle: "For maintenance and engineering career paths",
    fit: ["Mechanical and engineering graduates", "Maintenance and plant operations professionals", "Freshers interested in SAP functional roles"],
    supportTitle: "Practical SAP PM learning",
    support: ["Maintenance order examples", "Equipment and functional location concepts", "Resume preparation", "Interview support"],
    overview: "SAP PM supports plant maintenance activities such as equipment management, notifications, maintenance orders and preventive maintenance. The course helps learners understand maintenance process flows with practical examples used in plant and operations teams.",
    outcomes: ["SAP PM Consultant", "Maintenance Process Analyst", "SAP Functional Support Consultant", "Plant Operations Associate"],
    color: "#b7791f",
  },
  {
    slug: "sap-pp-training-in-yeshwanthpur",
    module: "SAP PP",
    h1: "SAP PP Training in Yeshwanthpur",
    title: "SAP PP Training in Yeshwanthpur | Practical SAP PP Course",
    description: "Learn SAP PP in Yeshwanthpur with practical production planning training, live projects and placement support from SV CurioTech.",
    keywords: "SAP PP training in Yeshwanthpur, SAP PP course Bangalore, SAP production planning training",
    intro: "SV CurioTech offers SAP PP training for learners who want to understand production planning and manufacturing process flows.",
    highlights: ["Production planning concepts", "Manufacturing process examples", "Assignments and assessments", "Job assistance"],
    fitTitle: "For manufacturing and planning learners",
    fit: ["Engineering and production graduates", "Manufacturing professionals", "Freshers interested in SAP planning roles"],
    supportTitle: "Production planning training support",
    support: ["MRP and planning examples", "Shop floor process discussion", "Resume preparation", "Interview guidance"],
    overview: "SAP PP helps companies plan production, manage manufacturing requirements and connect planning with material and cost processes. This training explains planning concepts with practical business examples for manufacturing careers.",
    outcomes: ["SAP PP Consultant", "Production Planning Analyst", "SAP Manufacturing Support Consultant", "Planning Associate"],
    color: "#1689dd",
  },
  {
    slug: "sap-sd-training-in-yeshwanthpur",
    module: "SAP SD",
    h1: "SAP SD Training in Yeshwanthpur",
    title: "SAP SD Training in Yeshwanthpur | Practical SAP SD Course",
    description: "Join SAP SD training in Yeshwanthpur at SV CurioTech. Learn sales and distribution with practical classes, live projects and placement support.",
    keywords: "SAP SD training in Yeshwanthpur, SAP SD course Bangalore, SAP sales and distribution training",
    intro: "SV CurioTech offers SAP SD training for learners who want to understand sales, distribution, billing and order-to-cash processes.",
    highlights: ["Sales process training", "Order to cash concepts", "Projects and assessments", "Placement support"],
    fitTitle: "For freshers, graduates and professionals",
    fit: ["BBA, MBA, B.Com, BE and B.Tech graduates", "Sales, logistics and operations professionals", "Job seekers moving into SAP functional roles"],
    supportTitle: "Practical SAP SD training in Yeshwanthpur",
    support: ["Experienced trainers", "Hands-on SAP practice", "Interview guidance", "Affordable fees"],
    overview: "SAP SD covers the order-to-cash process, including customer master, sales orders, pricing, delivery, shipping and billing. Learners practice how companies manage sales and distribution activities through SAP.",
    outcomes: ["SAP SD Consultant", "Sales Process Analyst", "SAP Functional Support Consultant", "Order-to-Cash Associate"],
    color: "#ef7c35",
  },
];

function localizeCoursePages(coursePages, location, area, slugLocation) {
  const replacePlace = (value) => {
    if (typeof value === "string") return value
      .replaceAll("Yeshwanthpur, Bangalore", area)
      .replaceAll("Yeshwanthpur", location)
      .replaceAll("Course Bangalore", `Course ${location}`)
      .replaceAll("course Bangalore", `course ${location}`)
      .replaceAll("Training Bangalore", `Training ${location}`)
      .replaceAll("training Bangalore", `training ${location}`);
    if (Array.isArray(value)) return value.map(replacePlace);
    return value;
  };

  return coursePages.map((page) => Object.fromEntries(
    Object.entries({
      ...page,
      slug: page.slug.replace("yeshwanthpur", slugLocation),
      location,
      area,
    }).map(([key, value]) => [key, replacePlace(value)])
  ));
}

const mysoreCoursePages = localizeCoursePages(yeshwanthpurCoursePages, "Mysore", "Mysore, Karnataka", "mysore");
const mangaloreCoursePages = localizeCoursePages(yeshwanthpurCoursePages, "Mangalore", "Mangalore, Karnataka", "mangalore");
const marathahalliCoursePages = localizeCoursePages(yeshwanthpurCoursePages, "Marathahalli", "Marathahalli, Bangalore", "marathahalli");
const hsrLayoutCoursePages = localizeCoursePages(yeshwanthpurCoursePages, "HSR Layout", "HSR Layout, Bangalore", "hsr-layout").map((page) => ({
  ...page,
  title: page.title.replace("Best ", "").replace(" | SAP MM Course HSR Layout", " | SV CurioTech"),
  description: page.description.replace("at SV CurioTech.", "at SV CurioTech near Koramangala, BTM Layout, Electronic City and Sarjapur Road."),
  keywords: `${page.keywords}, SAP course in HSR Layout, SAP training institute in HSR Layout, SAP classes in HSR Layout, SAP online training HSR Layout`,
}));
const kalaburagiCoursePages = localizeCoursePages(yeshwanthpurCoursePages, "Kalaburagi", "Kalaburagi, Karnataka", "kalaburagi").map((page) => ({
  ...page,
  title: page.title.replace("Best ", "").replace(" | SAP MM Course Kalaburagi", " | SV CurioTech"),
  description: page.description.replace("at SV CurioTech.", "at SV CurioTech with weekday and weekend batches, certification guidance and placement support."),
  keywords: `${page.keywords}, SAP course in Kalaburagi, SAP institute in Kalaburagi, SAP training near me Kalaburagi`,
}));
const jpNagarCoursePages = localizeCoursePages(yeshwanthpurCoursePages, "JP Nagar", "JP Nagar, Bangalore", "jp-nagar").map((page) => ({
  ...page,
  title: page.title.replace(" | SAP MM Course JP Nagar", " | SV CurioTech"),
  description: page.description.replace("at SV CurioTech.", "at SV CurioTech near Jayanagar, BTM Layout and Banashankari."),
  keywords: `${page.keywords}, SAP course in JP Nagar, SAP training institute JP Nagar`,
}));
const allLocationCoursePages = [
  ...yeshwanthpurCoursePages.map((page) => ({ ...page, location: "Yeshwanthpur", area: "Yeshwanthpur, Bangalore" })),
  ...marathahalliCoursePages,
  ...hsrLayoutCoursePages,
  ...jpNagarCoursePages,
  ...mysoreCoursePages,
  ...mangaloreCoursePages,
  ...kalaburagiCoursePages,
];

function SapTrainingJpNagar() {
  const page = sapLocationPages.jpNagar;
  const jpModules = allLocationCoursePages.filter((item) => item.location === "JP Nagar");
  const nearbyAreas = ["Jayanagar", "BTM Layout", "Banashankari", "Electronic City", "Bannerghatta Road", "Basavanagudi"];
  const benefits = [
    "Real-time training on latest SAP servers",
    "SAP-certified and experienced faculty",
    "Weekend, weekday and fast-track batches",
    "Small batch size for better doubt clearing",
    "100% placement assistance with expert guidance",
    "Certification assistance for SAP modules",
    "Affordable fee structure and flexible payment options",
    "Live projects, resume building and mock interviews",
  ];
  const learners = [
    "B.Com, BBA, MBA and engineering freshers",
    "Working professionals planning a career change",
    "Finance, procurement and supply chain professionals",
    "Learners near JP Nagar, Jayanagar, BTM Layout and Banashankari",
  ];
  const process = [
    ["01", "Counselling", "Choose the right SAP module based on your education, experience and career target."],
    ["02", "Live Training", "Understand concepts with real-time examples and practise on SAP server access."],
    ["03", "Projects", "Work through practical business scenarios so you can explain process flow clearly."],
    ["04", "Placement Prep", "Prepare resumes, LinkedIn profiles, technical rounds and mock interviews."],
  ];
  const faqs = [
    ["Do I need technical skills to learn SAP?", "Functional SAP modules like FICO, MM, SD and HCM/HR do not require core programming skills. Technical modules such as ABAP and BASIS are better for learners with IT, engineering or computer science backgrounds."],
    ["How long is the SAP training course?", "Most SAP training courses run for 6 to 12 weeks depending on the module, weekday or weekend schedule and current batch plan."],
    ["Will I get SAP certification?", "SV CurioTech provides certification guidance and course completion support. Official SAP certification exam fees are paid separately to SAP as per the current exam process."],
    ["Can I join SAP training online?", "Yes. Learners can enquire for live online SAP training along with regular classroom-oriented batch options for JP Nagar learners."],
  ];

  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: "https://www.svcuriotech.com/sap-training-in-jp-nagar",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in JP Nagar",
    description: page.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: "JP Nagar, Bangalore",
    courseMode: ["Classroom", "Online"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <Layout>
    <section className="jp-hero">
      <div className="container jp-hero-grid">
        <div className="jp-hero-copy">
          <span className="jp-chip"><MapPin size={15}/> JP Nagar, Bangalore</span>
          <h1>SAP Training in JP Nagar, Bangalore</h1>
          <p>{page.heroText}</p>
          <div className="jp-hero-actions">
            <Link className="button" to={registrationLink("SAP Training in JP Nagar")}>Book Free Demo <ArrowRight size={18}/></Link>
            <a className="jp-call-button" href={`tel:+91${phone}`}><Phone size={17}/> Call Now</a>
          </div>
          <div className="jp-route-row">
            {nearbyAreas.slice(0, 4).map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
        <aside className="jp-demo-card" id="jp-enquiry">
          <span>Free demo request</span>
          <h2>Get SAP course fees, syllabus and batch timing</h2>
          <LeadForm variant="course-info" defaultCourse="SAP Training in JP Nagar" />
        </aside>
      </div>
    </section>

    <section className="jp-stat-band">
      <div className="container">
        <div><strong>6-12</strong><span>Week course duration</span></div>
        <div><strong>100%</strong><span>Placement assistance</span></div>
        <div><strong>9+</strong><span>SAP modules covered</span></div>
        <div><strong>Live</strong><span>SAP server practice</span></div>
      </div>
    </section>

    <section className="section jp-intro-section">
      <div className="container jp-intro-grid">
        <div>
          <span className="eyebrow"><Sparkles size={14}/> Hands-on SAP certification courses near JP Nagar</span>
          <h2>Practical SAP classes for South Bangalore learners</h2>
          {page.localParagraphs.map((text) => <p key={text}>{text}</p>)}
        </div>
        <div className="jp-benefit-wall">
          {benefits.map((item) => <div key={item}><Check size={16}/><span>{item}</span></div>)}
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="SAP modules in JP Nagar" title="Create a JP Nagar page for every SAP course" text="Each module has a dedicated SEO page so learners can compare course fit, syllabus focus, support and career outcomes." />
        <div className="jp-course-grid">
          {jpModules.map((module) => <Link className="jp-course-card" key={module.slug} to={`/${module.slug}`} style={{ "--course": module.color }}>
            <span>{module.module.replace("SAP ", "")}</span>
            <h3>{module.module} Training in JP Nagar</h3>
            <p>{module.overview}</p>
            <b>View course page <ArrowRight size={15}/></b>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="section jp-process-section">
      <div className="container jp-process-grid">
        <div>
          <span className="eyebrow"><Target size={14}/> Key benefits</span>
          <h2>{page.focusTitle}</h2>
          <p>{page.focusText}</p>
          <ul className="check-list">{learners.map((item) => <li key={item}><Check/> {item}</li>)}</ul>
        </div>
        <div className="jp-process-list">
          {process.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container jp-placement-grid">
        <div className="jp-placement-card">
          <BriefcaseBusiness/>
          <h2>What about placement after SAP training?</h2>
          <p>SV CurioTech provides placement assistance through resume building, LinkedIn guidance, mock interviews, technical round preparation, project explanation support and recruiter-oriented SAP career guidance.</p>
        </div>
        <div className="jp-area-card">
          <h3>Convenient for nearby areas</h3>
          <div>{nearbyAreas.map((area) => <span key={area}>{area}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="FAQs" title="SAP training in JP Nagar questions" />
        <div className="jp-faq-list">
          {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="jp-final-cta">
      <div className="container">
        <h2>Book a free SAP demo class in JP Nagar</h2>
        <p>Call or WhatsApp SV CurioTech for SAP course fee details, batch timing, module guidance and placement assistance.</p>
        <div><Link className="button" to={registrationLink("SAP Training in JP Nagar")}>Enquire Now <ArrowRight size={18}/></Link><a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20training%20details%20in%20JP%20Nagar.`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></div>
      </div>
    </section>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </Layout>;
}

const locationModuleContent = {
  "SAP FICO": {
    audience: "finance, accounting, B.Com, M.Com, MBA Finance and working professionals",
    topics: ["Financial Accounting", "Controlling", "General Ledger", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Bank Accounting", "Cost Center Accounting", "Profit Center Accounting", "Internal Orders", "SAP S/4HANA Finance"],
    practical: "Practice financial postings, master data, reporting, cost-center scenarios and integration points with procurement and sales processes.",
  },
  "SAP MM": {
    audience: "procurement, inventory, supply-chain, logistics and operations learners",
    topics: ["Enterprise Structure", "Material Master", "Business Partner and Vendor Concepts", "Purchase Requisition", "Purchase Order", "Inventory Management", "Goods Receipt", "Invoice Verification", "Pricing", "MM-FI Integration", "SAP S/4HANA Procurement"],
    practical: "Work through procure-to-pay scenarios including purchasing, material movements, inventory handling and invoice verification.",
  },
  "SAP SD": {
    audience: "sales, logistics, customer-service and business-process learners",
    topics: ["Enterprise Structure", "Business Partner and Customer Concepts", "Sales Orders", "Pricing", "Delivery", "Shipping", "Billing", "Credit Management", "Order-to-Cash", "SD-FI Integration"],
    practical: "Practice sales-order processing, pricing, delivery, billing and customer-focused order-to-cash scenarios.",
  },
  "SAP ABAP": {
    audience: "BCA, MCA, BE, B.Tech, developers and technical SAP learners",
    topics: ["ABAP Fundamentals", "Data Dictionary", "Reports", "Debugging", "Forms", "Function Modules", "BAPIs", "BADIs", "Enhancements", "OData Concepts"],
    practical: "Build coding exercises, reports and debugging scenarios while learning how SAP development supports business requirements.",
  },
  "SAP PP": {
    audience: "manufacturing, production, mechanical engineering and operations learners",
    topics: ["Material Requirements Planning", "Bill of Materials", "Work Centers", "Routings", "Capacity Planning", "Production Orders", "Shop Floor Control"],
    practical: "Practice MRP, BOM, routing and production-order scenarios based on manufacturing processes.",
  },
  "SAP HCM": {
    audience: "HR graduates, MBA HR learners, recruiters and payroll professionals",
    topics: ["Organizational Management", "Personnel Administration", "Employee Master Data", "Time Management", "Payroll Concepts", "HR Business Processes"],
    practical: "Understand employee lifecycle scenarios, organizational structures and personnel-management workflows.",
  },
  "SAP BASIS": {
    audience: "IT graduates, administrators, infrastructure professionals and technical SAP learners",
    topics: ["SAP System Administration", "User Management", "Client Concepts", "Transports", "System Monitoring", "Background Jobs", "System Support"],
    practical: "Practice user administration, monitoring, transport concepts and common SAP system-support activities.",
  },
  "SAP EWM": {
    audience: "warehouse, logistics, inventory and supply-chain professionals",
    topics: ["Warehouse Structure", "Inbound Processing", "Outbound Processing", "Putaway", "Picking", "Stock Movements", "Storage Processes", "Warehouse Execution"],
    practical: "Work through inbound, outbound, putaway, picking and warehouse stock-movement scenarios.",
  },
  "SAP PM": {
    audience: "maintenance, plant, manufacturing and mechanical engineering professionals",
    topics: ["Technical Objects", "Equipment", "Functional Locations", "Notifications", "Maintenance Orders", "Preventive Maintenance", "Maintenance Planning"],
    practical: "Practice equipment management, maintenance notifications, orders and preventive-maintenance scenarios.",
  },
  "SAP Ariba": {
    audience: "procurement, sourcing, purchasing and supply-chain professionals",
    topics: ["Strategic Sourcing", "Contracts", "Buying", "Invoicing", "Supplier Management", "Ariba Network", "Procurement Collaboration"],
    practical: "Understand sourcing, supplier collaboration, buying and invoicing through practical procurement scenarios.",
  },
};

function buildLocationModuleFaqs(page, location, moduleContent) {
  const module = page.module;

  return [
    {
      question: `Who can join ${module} training in ${location}?`,
      answer: moduleContent
        ? `${module} training is suitable for ${moduleContent.audience}. Learners should choose the course based on their education, work experience and career direction.`
        : `Freshers and working professionals can enquire about ${module} training based on their background and career goals.`,
    },
    {
      question: `What will I learn in ${module} training in ${location}?`,
      answer: moduleContent
        ? `The training covers ${moduleContent.topics.slice(0, 6).join(", ")} and other important ${module} concepts through guided learning and practical scenarios.`
        : `The course covers important ${module} concepts, business processes and practical SAP scenarios.`,
    },
    {
      question: `Is ${module} training practical?`,
      answer: moduleContent
        ? moduleContent.practical
        : "Training includes guided SAP practice, assignments and business-process scenarios.",
    },
    {
      question: `Is ${module} training available online for ${location} learners?`,
      answer: `Training mode and batch availability can vary. Learners from ${location} can contact SV CurioTech to check current online, classroom, weekday and weekend options.`,
    },
    {
      question: `Does ${module} training include interview preparation?`,
      answer: "Learners can receive resume guidance, interview preparation, project explanation support and career guidance as part of the training support.",
    },
    {
      question: `How can I enquire about ${module} training in ${location}?`,
      answer: "Use the course enquiry form or contact SV CurioTech to ask about the current syllabus, batch timing, training mode, fees and registration process.",
    },
  ];
}

function LocationCoursePage({ page }) {
  if (page.location === "Kalaburagi") return <KalaburagiCoursePage page={page} />;

  const location = page.location || "Yeshwanthpur";
  const area = page.area || "Yeshwanthpur, Bangalore";
  const moduleContent = locationModuleContent[page.module];
  const courseLeadName = `${page.module} Training in ${location}`;
  const whatsappMessage = encodeURIComponent(
    `Hi SV CurioTech, I'm interested in ${page.module} training in ${location}. Please share the syllabus, fees and upcoming batch details.`
  );
  const whatsappUrl = `https://wa.me/91${phone}?text=${whatsappMessage}`;
  const moduleFaqs = buildLocationModuleFaqs(page, location, moduleContent);
  const courseStories = locationStudentStories
    .filter(([, role]) => role.includes(page.module.split(" ")[1]) || role.includes(page.module))
    .slice(0, 2);
  const shownStories = courseStories.length ? courseStories : locationStudentStories.slice(0, 3);
  const relatedTrainers = locationTrainerProfiles.filter((trainer) => trainer.modules.includes(page.module) || trainer.focus.includes(page.module.split(" ")[1]));
  const shownTrainers = relatedTrainers.length ? relatedTrainers : locationTrainerProfiles.slice(0, 2);

  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `https://www.svcuriotech.com/${page.slug}`,
  });

  const relatedPages = allLocationCoursePages.filter((item) => item.location === location && item.slug !== page.slug).slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${page.module} Training in ${location}`,
    description: page.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: area,
    courseMode: ["Classroom", "Online"],
  };
  const moduleFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: moduleFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <Layout>
    <section className="module-seo-hero" style={{ "--course": page.color }}>
      <div className="container module-seo-hero-grid">
        <div>
          <span className="eyebrow light"><MapPin size={15}/> {page.module} Training in {location}</span>
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
          <div className="hero-actions">
            <Link
              className="button"
              to={registrationLink(courseLeadName)}
              onClick={() => trackConversion("begin_lead", {
                lead_type: "module-location",
                course: courseLeadName,
                submission_method: "registration",
              })}
            >
              Enquire for {page.module} <ArrowRight size={18}/>
            </Link>
            <a
              className="button button-ghost light-ghost"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion("contact_whatsapp", {
                lead_type: "module-location",
                course: courseLeadName,
                submission_method: "whatsapp",
              })}
            >
              <MessageCircle size={17}/> WhatsApp
            </a>
            <a
              className="button button-ghost light-ghost"
              href={`tel:+91${phone}`}
              onClick={() => trackConversion("contact_phone", {
                lead_type: "module-location",
                course: courseLeadName,
                submission_method: "phone",
              })}
            >
              <Phone size={17}/> Call Now
            </a>
          </div>
        </div>
        <aside className="module-quick-card">
          <strong>Course Highlights</strong>
          <ul>{page.highlights.map((item) => <li key={item}><Check size={15}/>{item}</li>)}</ul>
        </aside>
      </div>
    </section>

    <section className="section">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow"><Users size={14}/> Best fit</span>
          <h2>{page.fitTitle}</h2>
          <ul className="check-list">{page.fit.map((item) => <li key={item}><Check/> {item}</li>)}</ul>
        </article>
        <article>
          <span className="eyebrow"><BookOpen size={14}/> Training support</span>
          <h2>{page.supportTitle}</h2>
          <ul className="check-list">{page.support.map((item) => <li key={item}><Check/> {item}</li>)}</ul>
        </article>
      </div>
    </section>

    {moduleContent && (
      <section className="section soft-section">
        <div className="container">
          <SectionTitle
            eyebrow={`${page.module} curriculum`}
            title={`What you will learn in ${page.module} training in ${location}`}
            text={`Build practical ${page.module} knowledge through important concepts, business processes and guided SAP practice.`}
          />

          <div className="value-panel" style={{ marginBottom: "32px" }}>
            <span className="eyebrow"><Users size={14}/> Who should learn</span>
            <h3>Is {page.module} suitable for you?</h3>
            <p>This learning path is suitable for {moduleContent.audience}. Learners from {location} can enquire about the current training mode, batch schedule and practical-learning options before registering.</p>
          </div>

          <div className="topic-grid">
            {moduleContent.topics.map((topic, index) => (
              <div key={`${page.slug}-${topic}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{topic}</strong>
                <Check />
              </div>
            ))}
          </div>

          <div className="project-callout">
            <span><BriefcaseBusiness /></span>
            <div>
              <small>PRACTICAL LEARNING</small>
              <h3>Hands-on {page.module} practice</h3>
              <p>{moduleContent.practical}</p>
            </div>
          </div>
        </div>
      </section>
    )}

    <section className="section soft-section">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow"><Sparkles size={14}/> Course overview</span>
          <h2>Practical {page.module} course for career growth</h2>
          <p>{page.overview}</p>
          <p>SV CurioTech keeps the training focused on practical learning, assignments, interview preparation and placement assistance. Learners get guidance on how to explain concepts clearly and connect SAP topics with business scenarios.</p>
        </article>
        <article>
          <span className="eyebrow"><BriefcaseBusiness size={14}/> Career roles</span>
          <h2>After completing {page.module} training</h2>
          <div className="role-row module-role-row">{page.outcomes.map((item) => <span key={item}>{item}</span>)}</div>
        </article>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Trainer-led learning" title={`${page.module} trainer guidance in ${location}`} text="The course is shaped around practical explanation, assignments, revision support and interview-style scenario discussion." />
        <div className="trainer-grid compact-trainer-grid">
          {shownTrainers.map((trainer) => <article className="trainer-card" key={`${page.slug}-${trainer.name}`}>
            <span><GraduationCap /></span>
            <small>{trainer.experience} practical exposure</small>
            <h3>{trainer.name}</h3>
            <strong>{trainer.modules}</strong>
            <p>{trainer.focus}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="Learner feedback" title={`${page.module} learner stories from ${location}`} text="Short learner-style notes that show how practical classes, examples and interview support help different backgrounds understand SAP." />
        <div className="testimonial-grid">
          {shownStories.map(([name, role, company, quote, sourceUrl]) => <article className="testimonial" key={`${page.slug}-${name}`}><div className="quote-mark">"</div><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div><p>{quote}</p><div className="student"><span>{name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><div><strong>{name}</strong><small>{role} - {company}</small>{sourceUrl && <a className="google-review-link" href={sourceUrl} target="_blank" rel="noreferrer">View Google review <ArrowRight size={12}/></a>}</div></div></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Related SAP courses" title={`Explore more ${location} SAP training pages`} text="Internal links help learners compare modules and help search engines understand the course structure of the website." />
        <div className="seo-module-grid">
          {relatedPages.map((item) => <Link className="seo-module-card" key={item.slug} to={`/${item.slug}`}><strong>{item.module}</strong><p>{item.description}</p><span>View SEO page <ArrowRight size={15}/></span></Link>)}
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle
          eyebrow="Frequently asked questions"
          title={`${page.module} training in ${location} FAQs`}
          text={`Common questions learners ask before joining ${page.module} training.`}
        />
        <div className="faq-grid">
          {moduleFaqs.map((faq, index) => (
            <article key={`${page.slug}-faq-${index}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-band" id="contact">
      <div className="container">
        <div><span className="eyebrow light"><Sparkles size={15}/> Join now</span><h2>Start {page.module} training in {location}</h2><p>Contact SV CurioTech for batch timing, fees and course guidance.</p></div>
        <div className="hero-actions">
          <Link
            className="button"
            to={registrationLink(courseLeadName)}
            onClick={() => trackConversion("begin_lead", {
              lead_type: "module-location",
              course: courseLeadName,
              submission_method: "registration",
            })}
          >
            Register for course guidance <ArrowRight size={18}/>
          </Link>
          <a
            className="button button-ghost light-ghost"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackConversion("contact_whatsapp", {
              lead_type: "module-location",
              course: courseLeadName,
              submission_method: "whatsapp",
            })}
          >
            <MessageCircle size={17}/> WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Mobile conversion bar */}
    <div
      className="course-mobile-conversion-bar"
      aria-label={`${page.module} enquiry actions`}
    >
      <a
        href={`tel:+91${phone}`}
        className="course-mobile-conversion-action"
        onClick={() =>
          trackConversion("contact_phone", {
            course: courseLeadName,
            location,
            placement: "mobile_sticky",
          })
        }
      >
        Call
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="course-mobile-conversion-action"
        onClick={() =>
          trackConversion("contact_whatsapp", {
            course: courseLeadName,
            location,
            placement: "mobile_sticky",
          })
        }
      >
        WhatsApp
      </a>

      <a
        href={registrationLink(courseLeadName)}
        className="course-mobile-conversion-action course-mobile-conversion-primary"
        onClick={() =>
          trackConversion("begin_lead", {
            course: courseLeadName,
            location,
            placement: "mobile_sticky",
          })
        }
      >
        Enquire
      </a>
    </div>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(moduleFaqSchema) }} />
  </Layout>;
}

function CourseSchedule({ course }) {
  const tracks = [
    { label: "Weekday track", note: "Steady daily learning", data: course.schedule.weekdays },
    { label: "Weekend track", note: "Focused weekend sessions", data: course.schedule.weekends },
  ];

  return <section className="course-schedule-section" style={{"--course": course.color}}>
    <div className="container">
      <div className="schedule-heading">
        <div><span className="eyebrow"><CalendarCheck size={14}/> Flexible learning tracks</span><h2>{course.title} course duration</h2><p>Choose a pace that works around your job, studies, and personal schedule.</p></div>
        <span className="schedule-mode"><GraduationCap/> Instructor-led training</span>
      </div>
      <div className="schedule-track-grid">
        {tracks.map((track, index) => <article className="schedule-track" key={track.label}>
          <div className="track-top">
            <span className="track-number">0{index + 1}</span>
            <div><h3>{track.label}</h3><p>{track.note}</p></div>
            <span className="track-dot"/>
          </div>
          <div className="track-facts">
            <div><span><CalendarCheck/> Course duration</span><strong>{track.data.duration}</strong></div>
            <div><span><Clock3/> Daily hours</span><strong>{track.data.hours}</strong></div>
            <div><span><GraduationCap/> Training mode</span><strong>{course.schedule.mode}</strong></div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

function SapMmCoursePage() {
  const mmHighlights = [
    ["Procure-to-Pay", "Purchase requisition, vendor selection, purchase order, goods receipt, invoice verification and financial impact."],
    ["Master Data", "Material master, vendor or supplier master, purchasing data, material types, valuation and inventory views."],
    ["Inventory Management", "Goods receipt, goods issue, stock transfer, transfer posting, reservations and physical inventory scenarios."],
    ["Placement Preparation", "Resume guidance, scenario questions, mock interviews and SAP MM project explanation practice."],
  ];

  const mmSyllabus = [
    ["SAP MM fundamentals", ["SAP ERP and S/4HANA basics", "SAP MM overview", "Procure-to-pay process", "Company code, plant, storage location", "Purchasing organization and purchasing group"]],
    ["Material master", ["Material types and material groups", "Material master views", "Purchasing and inventory data", "Accounting-related information", "Material classification basics"]],
    ["Vendor and supplier master", ["Supplier master concepts", "Purchasing information", "Payment-related information", "Business Partner concepts in S/4HANA"]],
    ["Purchasing process", ["Purchase requisition", "Request for quotation", "Vendor quotation", "Purchase order processing", "Source list, info records and release strategy"]],
    ["Inventory management", ["Goods receipt", "Goods issue", "Stock transfer", "Transfer posting", "Stock overview, reservations and physical inventory"]],
    ["Invoice verification", ["PO-based invoice verification", "Goods receipt and invoice relation", "Three-way matching", "Invoice variance and blocked invoices", "MM-FI integration"]],
    ["Valuation and account determination", ["Material valuation", "Valuation area", "Standard price and moving average price", "Valuation class", "Automatic account determination concepts"]],
    ["MRP and integration", ["MRP fundamentals", "Planning process", "Procurement proposals", "Integration with FI, SD and PP", "Project and interview preparation"]],
  ];

  const learningPoints = [
    "SAP MM fundamentals and organizational structure",
    "Material master and vendor/supplier master",
    "Purchase requisition, RFQ, quotation and purchase order",
    "Pricing, purchasing conditions and release procedures",
    "Goods receipt, goods issue, stock transfer and physical inventory",
    "Invoice verification, valuation and automatic account determination",
    "MRP basics and procurement planning",
    "Integration with SAP FI, SD, PP and other SAP modules",
    "Real-time project scenarios and practical assignments",
    "Resume guidance, mock interviews and placement assistance",
  ];

  const projectScenarios = [
    ["Procurement process project", "Complete a procurement cycle from material requirement to vendor selection, purchase order, goods receipt and invoice verification."],
    ["Inventory management scenario", "Understand how goods movement changes stock and how different movement types support business situations."],
    ["Purchase-to-pay case study", "Connect business requirement, purchasing, inventory and finance impact in one end-to-end process."],
    ["MRP and procurement scenario", "See how material requirements planning creates procurement proposals and supports business operations."],
  ];

  const mmFlow = [
    ["01", "Requirement", "Material need is identified"],
    ["02", "PR & sourcing", "Purchase requisition and vendor selection"],
    ["03", "PO", "Purchase order and pricing conditions"],
    ["04", "GR", "Goods receipt and inventory update"],
    ["05", "Invoice", "Verification and finance impact"],
  ];

  const mmHeroBullets = [
    "Join our SAP MM training in Bangalore to start a procurement-focused SAP career.",
    "Learn material master, vendor master, purchase order, inventory and invoice verification.",
    "Practice procure-to-pay scenarios with trainer guidance and SAP process explanation.",
    "Prepare for interviews with resume support, mock questions and placement assistance.",
  ];

  const audiences = [
    "Fresh graduates",
    "B.Com and M.Com graduates",
    "MBA and operations learners",
    "Procurement professionals",
    "Purchase executives",
    "Inventory and warehouse professionals",
    "Supply chain and logistics professionals",
    "ERP end users",
    "Working professionals",
    "Career switchers",
  ];

  const careerRoles = [
    "SAP MM Consultant",
    "SAP MM Functional Consultant",
    "SAP Procurement Consultant",
    "SAP MM End User",
    "Procurement Executive",
    "Materials Executive",
    "Supply Chain Associate",
    "Inventory Management Professional",
    "ERP Support Professional",
  ];

  const faqs = [
    ["What is SAP MM?", "SAP MM stands for SAP Materials Management. It supports procurement, purchasing, inventory management, material master data, supplier management, goods movements and invoice verification."],
    ["Can beginners learn SAP MM?", "Yes. SAP MM is beginner-friendly when concepts are taught from organizational structure, master data, procurement and inventory basics."],
    ["Do I need programming skills for SAP MM?", "No. SAP MM is a functional module. Business process understanding and basic computer skills are more important than coding for the core module."],
    ["Who should join SAP MM training?", "Graduates, procurement professionals, supply chain professionals, purchase executives, inventory professionals, logistics professionals, ERP users and career switchers can join."],
    ["Does the course include practical projects?", "Yes. The training includes guided SAP practice, assignments, business scenarios and project-style discussions around procurement, inventory, invoice verification and integration."],
    ["Does SV CurioTech provide placement support?", "Yes. SV CurioTech provides placement assistance through resume guidance, interview preparation, mock interviews, career guidance and job opportunity updates. It is not an employment guarantee."],
    ["What is covered in the SAP MM syllabus?", "The SAP MM syllabus covers SAP navigation, organizational structure, material master, vendor or supplier master, purchasing, purchase requisition, purchase order, inventory management, goods receipt, invoice verification, valuation, MRP and integration with SAP FI, SD and PP."],
    ["How long is the SAP MM course in Bangalore?", "The SAP MM course is usually completed in 8 to 10 weeks depending on the selected weekday, weekend or fast-track batch schedule."],
    ["Is SAP MM available online and classroom?", "Yes. SV CurioTech supports SAP MM classroom training in Bangalore and live online SAP MM training depending on current batch availability."],
    ["Will SAP MM help freshers get a job?", "SAP MM can help freshers build procurement, inventory and ERP process knowledge. Job outcomes depend on practice, communication, interview performance, market openings and employer requirements."],
    ["Is SAP MM useful for procurement and supply chain professionals?", "Yes. SAP MM is especially relevant for procurement, purchase, stores, inventory, warehouse, logistics, supply chain and ERP end-user backgrounds."],
    ["Does SAP MM include S/4HANA concepts?", "The training introduces SAP ERP and SAP S/4HANA concepts, including Business Partner awareness and process changes learners should understand before interviews."],
  ];

  const mmQuickAnswers = [
    ["SAP MM course duration", "8-10 weeks with weekday, weekend and fast-track batch options depending on current schedule."],
    ["SAP MM syllabus", "Procure-to-pay, material master, supplier master, purchase order, goods receipt, invoice verification, valuation, MRP and integration."],
    ["Training mode", "Classroom SAP MM training in Bangalore and live online SAP MM classes are available based on batch timing."],
    ["Who can join", "Freshers, B.Com, M.Com, MBA, procurement, inventory, logistics, warehouse, supply-chain and ERP users."],
    ["Career roles", "SAP MM Consultant, SAP Procurement Consultant, SAP MM Support Consultant, ERP Support and Supply Chain Associate."],
    ["Placement support", "Resume guidance, mock interviews, SAP MM scenario questions, profile positioning and job opportunity updates."],
  ];

  const mmInternalLinks = [
    ["SAP Course with Placement in Bangalore", "/sap-course-with-placement-bangalore"],
    ["SAP FICO Training in Bangalore", "/sap-fico-training-in-bangalore"],
    ["SAP SD Training in Bangalore", "/sap-sd-training-in-bangalore/"],
    ["SAP Server Access for Practice", "/sap-server-access"],
    ["SAP Training in Marathahalli", "/sap-training-in-marathahalli"],
    ["SAP Training in JP Nagar", "/sap-training-in-jp-nagar"],
  ];

  const fullMmContentSections = [
    {
      title: "Best SAP MM Course in Bangalore",
      paragraphs: [
        "Learn industry-relevant SAP MM with hands-on training at SV CurioTech. Understand SAP procurement, real life project exposure, material master, inventory management, invoice verification, MRP and integration with SAP.",
        "When you are looking to pursue an SAP career, selecting the right SAP MM training can mean the difference between good and bad. SV CurioTech is an SAP MM training institute in Bangalore, which brings a SAP MM course for students, freshers, working professionals, procurement professionals and career changers to understand the working of SAP MM in real business scenarios.",
        "The training focuses on more than learning transaction codes or completing theoretical modules. Practical tasks, procurement processes, inventory activities and project activities will be covered, and confidence will be developed for interviews and SAP MM roles in the business.",
        "From experienced trainers to real-time projects, using a blend of practical learning, resume mentorship, mock interviews and 100% placement support with a 360-degree approach, SV CurioTech guides learners from the classroom to the industry.",
        "For a top-notch SAP MM course in Bangalore that offers hands-on experience and career-oriented learning, consider joining the course at SV CurioTech and schedule a free demo.",
      ],
    },
    {
      title: "SAP MM Course in Bangalore - Course Overview",
      paragraphs: [
        "In this SAP MM course in Bangalore, students will learn the basics of SAP MM.",
        "SAP Materials Management, or SAP MM, is a key functional area of SAP ERP and SAP S/4HANA. It facilitates key business activities including materials, purchases, stock management, suppliers, goods movement and invoice verification.",
        "A common procurement process might start when a company determines that they need a specific material for a job and that they need it now, and they make a purchase requisition. This requirement will then pass through vendor selection, purchase order, goods receipt, inventory system and invoice verification.",
        "It is crucial to have a clear idea of this entire business flow if someone wishes to create a career in SAP MM.",
        "The course at SV CurioTech will take learners the whole way from SAP concepts to practical business scenarios, so that they will not only understand what a transaction is, but why and when it is used.",
      ],
    },
    {
      title: "What You Will Learn",
      bullets: [
        "SAP MM fundamentals and organizational structure",
        "Material Master and Vendor/Supplier Master",
        "Procurement processes",
        "Purchase requisition and purchase order",
        "Request for quotation and quotation management",
        "Source determination",
        "Purchase information records",
        "Inventory management",
        "Goods receipt and goods issue",
        "Stock transfer processes",
        "Physical inventory",
        "Invoice verification",
        "Material valuation",
        "Automatic account determination concepts",
        "MRP fundamentals",
        "Release procedures",
        "Pricing and purchasing conditions",
        "Batch and material-related processes",
        "Integration with FI, SD, PP and other SAP functions",
        "Practical assignments and business scenarios",
        "Real-time project-based learning",
      ],
    },
    {
      title: "Why Choose SV CurioTech for SAP MM Training in Bangalore?",
      paragraphs: [
        "Choosing a SAP MM training institute in Bangalore is not just a choice of picking up a course which covers the syllabus. Practical exposure, trainer guidance, project experience and career preparation can have a significant impact on the learning outcome.",
        "SV CurioTech specializes in developing hands-on knowledge, not theory in the classroom.",
      ],
      points: [
        ["Practical, Industry-Oriented Learning", "The concepts of SAP MM are learnt practically with demonstrations, guided exercises, business scenarios and assignments. This method will enable you to gain insight into the procurement and inventory system in an organisation."],
        ["Experienced Trainers", "The training is provided by experts who take the help of real-life scenarios and business workflow to explain the concept of SAP MM. The topics are presented in a way that is easily understood by both newcomers and experts."],
        ["SAP MM Real-Time Projects", "By using project exposure, learners will get the idea of how SAP MM concepts are used beyond the transactional level. You will experience authentic procurement and inventory scenarios and understand the interdependent nature of various phases of the business process."],
        ["Interview-Focused Preparation", "Knowing SAP MM is half the battle to getting to work. The course also emphasizes interview preparation, functional points, scenario questions, resume presentation and mock interviews."],
        ["100% Placement Assistance", "SV CurioTech provides 100% placement assistance to guide learners during the process of looking for jobs. This includes resumes, interview preparation, job opportunities, mock interviews and career assistance. Placement assistance aims to increase job readiness and interview ability; it is not a promise of employment."],
      ],
    },
    {
      title: "SAP MM Course Syllabus",
      paragraphs: ["SV CurioTech has designed the SAP MM syllabus based on the major processes that are required for SAP MM professionals."],
      points: [
        ["1. Welcome to SAP MM Introduction and Fundamentals", "Start with an understanding of the concepts behind SAP Materials Management, and see how MM connects to the SAP environment of an organization. Topics include SAP ERP and SAP S/4HANA basics, SAP MM overview, procure-to-pay process, organizational structure, company code, plant, storage location, purchasing organization, purchasing group and the basics of master data."],
        ["2. Material Master", "Material Master is one of the most important data structures in SAP MM. You will learn material types, material groups, industry sectors, material master views, creating and maintaining materials, purchasing data, inventory-related information, accounting-related information and material classification concepts. The goal is to understand how material information is used in purchasing, inventory, valuation and other business processes."],
        ["3. Vendor and Supplier Master", "Understand the processes used to keep and apply supplier-related information in procurement. This module introduces vendor/supplier master concepts, supplier data, purchasing information, payment-related information, supplier-related procurement processes and Business Partner concepts in SAP S/4HANA."],
        ["4. Procurement and Purchasing", "Procurement is an integral part of SAP MM. You will learn purchase requisition, request for quotation, vendor quotation, source determination, purchase order, purchase order processing, purchase order changes, purchasing conditions, purchase information records, source lists and release procedures. You will be able to describe the business requirement purchase process."],
        ["5. Inventory Management", "Inventory management is the process of controlling and tracking inventory movement within an organization. Topics include goods receipt, goods issue, stock transfer, transfer posting, material documents, stock overview, reservation concepts, physical inventory, different stock categories and inventory movement scenarios."],
        ["6. Goods Receipt and Goods Movement", "Goods receipt is the link between purchasing and inventory. You will understand how received materials are recorded, how stock is maintained and how goods movement can generate accounting impacts. Practical exercises help learners understand the relationship between a purchase order, material document, stock quantity and accounting documents."],
        ["7. Invoice Verification", "Invoice verification is a crucial part of the procure-to-pay process. Training covers invoice verification concepts, purchase order-based invoices, goods receipt and invoice relationship, three-way matching, invoice variances, blocked invoices, credit and debit processes and integration with SAP FI."],
        ["8. Material Valuation and Account Determination", "Learn material valuation and accounting postings in SAP MM. Topics include material valuation, valuation areas, price control concepts, standard price, moving average price, valuation classes, automatic account determination concepts and MM-FI integration."],
        ["9. MRP Fundamentals", "Material Requirements Planning handles material requirement planning according to demand, supply, stock and procurement parameters. You will learn MRP concepts, planning processes, material requirements, procurement proposals, planned orders, purchase requisitions, MRP-related master data and integration with procurement and production."],
        ["10. SAP MM Integration", "SAP MM is not a stand-alone module. Procurement and inventory processes are connected with other SAP processes. The course introduces SAP FI integration for financial effects and accounting entries, SAP SD integration for material availability and logistics activities, and SAP PP integration for production planning, material availability, procurement, inventory and MRP. These connections help students build a holistic functional perspective."],
      ],
    },
    {
      title: "Practical SAP MM Training Methodology",
      paragraphs: [
        "SAP MM classes in Bangalore should not only cover the meaning of screens and transaction codes. Students should be familiar with the need for each process in a business.",
        "The approach of SV CurioTech to learning is practical and includes concept explanation, live trainer demonstrations, guided system practice, business scenarios, practical assignments, procurement case studies, inventory exercises, integration scenarios, real-time project exposure and interview-oriented discussions.",
        "For instance, learners can understand a purchase order as part of a full process rather than a standalone transaction: the business requirement can initiate a purchase requisition, which leads to vendor sourcing, purchase order, goods receipt, invoice verification and finally financial impact.",
        "This process-based learning method assists students in learning functional thinking.",
      ],
    },
    {
      title: "SAP MM Real-Time Projects",
      paragraphs: [
        "It is important to have real-time project exposure during practical SAP MM training.",
        "At SV CurioTech, exercises can simulate business scenarios and help fill the gap between classroom concepts and SAP MM implementation or support environments.",
      ],
      points: [
        ["Procurement Process Project", "Complete a procurement process for material from material requirement to invoice verification, including vendor selection, purchase order creation, goods receipt and invoice verification."],
        ["Inventory Management Scenario", "Know the relationship of material movement to stock, understand different goods movement situations and learn how they are treated."],
        ["Purchase-to-Pay Business Case", "Examine an end-to-end procure-to-pay process and how SAP MM integrates with finance and other business processes."],
        ["MRP and Procurement Scenario", "Recognize the impact that material needs may have on procurement planning, and the impact that procurement proposals may have on business operations."],
      ],
    },
    {
      title: "Who Can Enroll in the Best SAP MM Course in Bangalore?",
      paragraphs: [
        "SAP MM is one of the functional areas of SAP, so it does not require programming skills to begin your learning curve.",
        "The concepts of SAP MM might be easier for professionals having experience in buying and procurement, inventory, supply chain, finance, logistics or operations to relate with their present business knowledge.",
        "For candidates lacking SAP experience, getting started with the basics in a systematic manner is possible as well.",
      ],
      bullets: ["Fresh graduates", "B.Com and M.Com graduates", "MBA graduates", "Supply chain professionals", "Procurement professionals", "Purchase executives", "Inventory professionals", "Warehouse professionals", "Logistics professionals", "Working professionals", "ERP end users", "Career switchers", "SAP aspirants"],
    },
    {
      title: "Career Opportunities After SAP MM Training",
      paragraphs: [
        "The skills developed using SAP MM can align with career progression in procurement, supply chain, materials, logistics and ERP fields.",
        "Position, responsibilities and job growth will depend on experience, technical knowledge, interview performance, the employer and exposure to SAP projects.",
      ],
      bullets: ["SAP MM Consultant", "SAP MM Support Consultant", "SAP MM Functional Consultant", "SAP Procurement Consultant", "SAP MM End User", "Procurement Executive", "Materials Executive", "Supply Chain Associate", "Inventory Management Professional", "ERP Support Professional"],
    },
    {
      title: "SAP MM Certification and Career Preparation",
      paragraphs: [
        "While having the SAP MM certification can be beneficial as an added credential, it is not a substitute for hands-on knowledge.",
        "The best SAP career profiles will contain SAP knowledge, understanding of the business process, practical exposure, project experience and interview skills.",
        "SV CurioTech supports this by providing hands-on training, assignments, project exposure, resume preparation and interview preparation.",
        "Practical training can also be beneficial if you are working towards obtaining certification for SAP MM, as it will aid your understanding of the concepts you will face during preparation.",
      ],
    },
    {
      title: "SAP MM Placement Assistance",
      paragraphs: [
        "It can be difficult to get a head start in SAP without guidance. SV CurioTech offers 100% placement support to prepare students for the placement process.",
        "The goal is to equip learners with a more compelling and professional image when they face SAP MM opportunities.",
      ],
      bullets: ["Resume preparation and guidance", "SAP-focused profile positioning", "Interview preparation", "Functional interview questions", "Scenario-based interview discussions", "Mock interviews", "Career guidance", "Job opportunity updates", "Interview readiness support"],
    },
    {
      title: "Key Benefits of SAP MM Training at SV CurioTech",
      paragraphs: ["You can create a structured learning path with the help of the best SAP MM training institute in Bangalore."],
      bullets: ["Practical training in SAP MM", "Industry-oriented curriculum", "Experienced trainers", "Real-time project exposure", "Practical assignments", "Business process understanding", "Basic concepts of integration in SAP MM", "Interview preparation", "Resume guidance", "Mock interviews", "Career guidance", "100% placement assistance", "Learning support for beginners and professionals"],
    },
    {
      title: "Why Learn SAP MM in Bangalore?",
      paragraphs: [
        "Bangalore is a leading technology, consulting and business hub in India. The city has a wide spectrum of IT services, consulting companies, ERP projects, shared service centers, manufacturing companies and technology-driven companies.",
        "All entrepreneurs and professionals seeking to gain ERP skills will find Bangalore to be a good place to learn and explore various opportunities in technology and business functions.",
        "But even a training program in the same location as SAP is not automatically valuable. The quality of practical learning, trainer expertise, project exposure and career preparation matters.",
        "Hence, opting for a practical SAP MM course in Bangalore can be a crucial decision to acquire relevant SAP skills.",
      ],
    },
    {
      title: "Frequently Asked Questions About SAP MM Course in Bangalore",
      points: [
        ["What is SAP MM?", "SAP MM is an acronym for SAP Materials Management. It facilitates business processes in procurement, purchasing, inventory management, material master data, supplier management, goods movements and invoice verification."],
        ["Does SAP MM work for novices?", "Yes. SAP MM beginners can learn with a basic understanding of organizational structure, master data, procurement, purchasing, inventory and procure-to-pay."],
        ["Does one need to have programming skills for SAP MM?", "SAP MM is basically a functional area; hence, programming knowledge is not a prerequisite for learning the core module. Essential computer skills and interest in business processes are enough to begin."],
        ["Who should take SAP MM training?", "Graduates, procurement professionals, supply chain professionals, purchase executives, inventory professionals, logistics professionals, ERP users and people planning a career switch toward SAP can find SAP MM relevant."],
        ["What is covered in SAP MM training?", "The course includes SAP MM basics, organizational structure, material master, supplier/vendor master, procurement, purchasing, inventory management, goods receipt, invoice verification, valuation, MRP basics and integration with modules like SAP FI, SD and PP."],
        ["Are there real-time development projects with SAP MM at SV CurioTech?", "The training is structured to engage students in hands-on tasks, business scenarios and project-oriented learning in real-time scenarios, providing an understanding of how SAP MM processes work in the real world."],
        ["Is placement support provided by SV CurioTech?", "Yes. SV CurioTech offers 100% placement support, which includes resume guidance, interview preparation, mock interviews, career guidance and job opportunity support. Placement assistance is not an employment guarantee."],
        ["Should you get SAP MM certification?", "Certification can help enhance a professional profile, but practical application of SAP knowledge, business process understanding, project exposure and interview readiness are also important."],
        ["Which is the best SAP MM course in Bangalore?", "Look for institutes that offer trainer experience, access to practical systems, depth of syllabus, project exposure, business process training, interview preparation, learner support and placement support, not just course fees."],
      ],
    },
    {
      title: "Start Your SAP MM Career Journey with SV CurioTech",
      paragraphs: [
        "If you are searching for the best SAP MM course in Bangalore, choose training that helps you understand SAP MM as a business process, not simply a collection of transactions.",
        "SV CurioTech combines practical SAP MM training, real-time project exposure, industry-oriented learning, experienced trainers, interview preparation, resume guidance, mock interviews and 100% placement assistance to support your career preparation.",
        "Whether you are a fresh graduate exploring SAP for the first time, a procurement professional looking to upgrade your skills, a working professional planning a career transition, or an SAP aspirant seeking practical exposure, the right training can help you build a stronger foundation.",
        "Take the next step toward developing your SAP MM skills. Book a free demo class with SV CurioTech. Enquire now, talk to our SAP MM counsellor, and start your SAP MM training in Bangalore.",
      ],
    },
  ];

  usePageSeo({
    title: "SAP MM Training in Bangalore | Best SAP MM Course | SV CurioTech",
    description: "Join SAP MM training in Bangalore with practical procure-to-pay projects, SAP S/4HANA concepts, syllabus guidance, interview prep and placement assistance.",
    keywords: "SAP MM training in Bangalore, best SAP MM course in Bangalore, SAP MM course Bangalore, SAP MM classes Bangalore, SAP Materials Management training Bangalore, SAP MM syllabus, SAP MM course with placement, SAP MM online training Bangalore, SAP MM institute Bangalore",
    canonical: "https://www.svcuriotech.com/best-sap-mm-course-in-bangalore/",
    image: "https://www.svcuriotech.com/assets/sap-mm-page/sap-mm-hero-training.png",
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP MM Training in Bangalore",
    description: "Practical SAP MM course in Bangalore covering procurement, material master, vendor master, inventory management, invoice verification, MRP, SAP integration, projects and placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
      telephone: `+91 ${phone}`,
      email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    courseMode: ["Classroom", "Online"],
    educationalLevel: "Beginner to Advanced",
    teaches: [
      "SAP Materials Management",
      "Procure-to-pay",
      "Material master",
      "Supplier master",
      "Inventory management",
      "Invoice verification",
      "MRP",
      "SAP S/4HANA MM",
    ],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Classroom",
        location: {
          "@type": "Place",
          name: "SV CurioTech Bangalore",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
        },
      },
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        location: {
          "@type": "VirtualLocation",
          url: "https://www.svcuriotech.com/best-sap-mm-course-in-bangalore/",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.svcuriotech.com/" },
      { "@type": "ListItem", position: 2, name: "SAP Courses", item: "https://www.svcuriotech.com/courses" },
      { "@type": "ListItem", position: 3, name: "SAP MM Training in Bangalore", item: "https://www.svcuriotech.com/best-sap-mm-course-in-bangalore/" },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SV CurioTech",
    url: "https://www.svcuriotech.com/best-sap-mm-course-in-bangalore/",
    telephone: `+91 ${phone}`,
    email,
    image: "https://www.svcuriotech.com/assets/sv-curiotech-logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: ["Bangalore", "Marathahalli", "JP Nagar", "Yeshwanthpur", "HSR Layout", "Electronic City", "Karnataka"],
  };

  return <SapMmPageShell>
    <section className="mm-hero">
      <div className="container mm-hero-grid">
        <div className="mm-hero-copy">
          <span className="mm-kicker"><Boxes /> Best SAP MM Course in Bangalore</span>
          <h1>Best SAP MM Training in Bangalore</h1>
          <p>Build SAP Materials Management skills through hands-on procurement, inventory and invoice verification practice at SV CurioTech.</p>
          <ul className="mm-hero-bullets">
            {mmHeroBullets.map((item) => <li key={item}><Check size={18} /><span>{item}</span></li>)}
          </ul>
          <div className="mm-hero-metrics" aria-label="SAP MM course highlights">
            <span><strong>8-10</strong> weeks</span>
            <span><strong>100%</strong> practical</span>
            <span><strong>P2P</strong> projects</span>
          </div>
          <div className="mm-actions">
            <a className="button" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20to%20book%20a%20free%20demo%20for%20SAP%20MM%20course.`} target="_blank" rel="noreferrer">Book Free Demo <ArrowRight size={18} /></a>
            <a className="button button-ghost light-ghost" href={`tel:+91${phone}`}><Phone size={17} /> Call +91 {phone}</a>
          </div>
        </div>
        <figure className="mm-hero-image-card">
          <img src="/assets/sap-mm-page/sap-mm-hero-training.png" alt="SAP MM trainer explaining procurement and inventory workflow in a classroom" />
          <figcaption>
            <span>Live SAP MM Practice</span>
            <strong>Procurement, inventory, invoice verification and P2P scenarios</strong>
          </figcaption>
          <div className="mm-hero-mini-details">
            <span><b>8-10</b> weeks</span>
            <span><b>Classroom</b> & online</span>
            <span><b>Placement</b> support</span>
          </div>
        </figure>
      </div>
    </section>

    <section className="mm-flow-section" aria-label="SAP MM procurement process">
      <div className="container mm-flow-grid">
        {mmFlow.map(([step, title, text]) => (
          <article key={step}>
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="mm-highlight-band" id="course">
      <div className="container mm-highlight-grid">
        {mmHighlights.map(([title, text]) => <article key={title}><span><Check /></span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section mm-intro" id="about">
      <div className="container mm-intro-grid">
        <div>
          <span className="eyebrow"><Sparkles size={14} /> SAP MM course overview</span>
          <h2>SAP Materials Management training for real procurement work.</h2>
          <p>SAP MM is a key functional area of SAP ERP and SAP S/4HANA. It supports materials, purchasing, stock management, suppliers, goods movement and invoice verification inside an organization.</p>
          <p>A common procurement flow starts with a material requirement, moves into purchase requisition, vendor selection, purchase order, goods receipt, inventory update and invoice verification. This course helps learners understand both the SAP transaction and the business reason behind it.</p>
          <p>At SV CurioTech, the focus is not only on transaction codes. Learners practice procurement tasks, inventory activities, integration points and project scenarios so they can explain SAP MM confidently in interviews.</p>
        </div>
        <aside className="mm-enquiry-card">
          <span className="eyebrow"><CalendarCheck size={14} /> Upcoming batches</span>
          <h3>SAP MM course snapshot</h3>
          <p>Quick details for learners comparing SAP MM institutes in Bangalore.</p>
          <div className="mm-side-snapshot">
            <span><strong>Duration</strong><b>8-10 weeks</b></span>
            <span><strong>Mode</strong><b>Classroom & Online</b></span>
            <span><strong>Level</strong><b>Beginner friendly</b></span>
            <span><strong>Support</strong><b>Placement assistance</b></span>
          </div>
          <a className="button" href="#top">Enquire Now <ArrowRight size={18} /></a>
        </aside>
      </div>
    </section>

    <section className="section mm-seo-answers" id="sap-mm-training-bangalore">
      <div className="container">
        <SectionTitle
          eyebrow="SAP MM training in Bangalore"
          title="Quick answers for learners comparing SAP MM courses"
          text="Use this section to quickly compare SAP MM course duration, syllabus, class mode, eligibility, career roles and placement support before booking a demo."
        />
        <div className="mm-answer-grid">
          {mmQuickAnswers.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="mm-internal-link-panel">
          <div>
            <span className="eyebrow"><BookOpen size={14} /> Related SAP learning paths</span>
            <h2>Explore SAP courses connected with SAP MM.</h2>
            <p>Procurement work often connects with finance, sales, warehouse and SAP system practice. These related pages help learners compare SAP MM with other SAP course paths.</p>
          </div>
          <div className="mm-internal-links">
            {mmInternalLinks.map(([label, href]) => <a key={href} href={href}>{label} <ArrowRight size={14} /></a>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section mm-full-content" id="sap-mm-complete-guide">
      <div className="container">
        <SectionTitle eyebrow="Complete course details" title="Full SAP MM course content, explained paragraph-wise" text="This section includes the complete SAP MM course content, syllabus, placement support details, FAQs and career guidance shared for the page." />
        <figure className="mm-content-image-card">
          <img src="/assets/sap-mm-page/sap-mm-procurement-workflow.png" alt="SAP MM procurement to pay workflow with inventory documents and dashboard" />
          <figcaption>
            <span>Procure-to-pay learning path</span>
            <strong>Material requirement, purchase requisition, PO, goods receipt, invoice verification and payment flow.</strong>
          </figcaption>
        </figure>
        <div className="mm-content-stack">
          {fullMmContentSections.map((section, index) => (
            <article className="mm-content-card" key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul className="mm-content-bullets">{section.bullets.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>}
              {section.points && <div className="mm-content-points">
                {section.points.map(([heading, text]) => (
                  <div key={heading}>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>}
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="What you will learn" title="SAP MM topics covered from basics to business scenarios" text="The curriculum is structured around procurement, inventory, valuation, MRP and integration work that SAP MM professionals need to understand." />
        <div className="mm-learn-grid">
          {learningPoints.map((item) => <span key={item}><Check /> {item}</span>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Detailed syllabus" title="SAP MM syllabus designed around the procure-to-pay process" text="Each module connects concepts with practical SAP tasks and business explanations." />
        <div className="mm-syllabus-grid">
          {mmSyllabus.map(([title, topics], index) => <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section mm-projects">
      <div className="container mm-project-grid">
        <div>
          <span className="eyebrow light"><BriefcaseBusiness size={14} /> Real-time project exposure</span>
          <h2>Practice SAP MM the way business teams use it.</h2>
          <p>Practical training helps learners move beyond screen navigation. You will work through procurement case studies, inventory exercises, invoice verification examples and integration discussions that prepare you for job conversations.</p>
        </div>
        <div className="mm-project-list">
          {projectScenarios.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container mm-two-col">
        <div>
          <SectionTitle eyebrow="Who can join?" title="SAP MM is suitable for supply chain, procurement and operations backgrounds" text="Programming is not required to begin SAP MM because it is mainly a functional module." />
          <div className="mm-pill-grid">{audiences.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <SectionTitle eyebrow="Career roles" title="Career opportunities after SAP MM training" text="Your role depends on your background, practical skills, interview performance and employer requirements." />
          <div className="mm-role-grid">{careerRoles.map((item) => <span key={item}><BriefcaseBusiness size={14} /> {item}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container mm-choice-grid">
        <div>
          <span className="eyebrow"><ShieldCheck size={14} /> Why choose SV CurioTech?</span>
          <h2>Training, project practice and career preparation in one path.</h2>
          <p>Choosing an SAP MM training institute is not only about the syllabus. Practical exposure, trainer guidance, project experience and interview preparation can make a major difference in learning outcome.</p>
        </div>
        <div className="mm-benefit-list">
          {["Practical industry-oriented learning", "Experienced SAP trainers", "Real-time project exposure", "Interview-focused preparation", "Resume and profile guidance", "Placement assistance for eligible learners"].map((item) => <span key={item}><BadgeCheck size={16} /> {item}</span>)}
        </div>
      </div>
    </section>

    <section className="logo-strip official-logo-strip mm-company-section" id="placements">
      <div className="container">
        <span>SAP MM skills valued by leading companies</span>
        <div className="official-logo-row">
          {officialCompanyLogos.map(([name, logo]) => (
            <figure className="official-logo-tile" key={`mm-${name}`}>
              <img src={logo} alt={`${name} logo`} />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <StudentFeedbackVideos />

    <SampleTestimonials limit={8} />

    <section className="section mm-faq" id="faq">
      <div className="container">
        <SectionTitle eyebrow="FAQs" title="Frequently asked questions about SAP MM course in Bangalore" />
        <div className="mm-faq-grid">
          {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section mm-enquiry-section" id="contact">
      <div className="container mm-enquiry-panel">
        <div className="mm-enquiry-copy">
          <span className="eyebrow light"><MessageCircle size={15} /> SAP MM enquiry</span>
          <h2>Book your free SAP MM counselling call.</h2>
          <p>Share your details and our admissions team will call you with SAP MM syllabus, batch timing, fees, demo class and placement preparation details.</p>
          <div className="mm-enquiry-contact">
            <a href={`tel:+91${phone}`}><Phone size={17} /> +91 {phone}</a>
            <a href={`mailto:${email}`}><Mail size={17} /> {email}</a>
            <a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20MM%20course%20details.`} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp us</a>
          </div>
        </div>
        <div className="mm-enquiry-form-card">
          <span className="eyebrow"><Sparkles size={14} /> Free demo request</span>
          <h3>Register for SAP MM Course</h3>
          <p>Fill the enquiry form and we will contact you shortly.</p>
          <LeadForm variant="course-info" defaultCourse="Best SAP MM Course in Bangalore" />
        </div>
      </div>
    </section>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
  </SapMmPageShell>;
}

function SapSdTrainingBangalorePage() {
  const [brochureFormOpen, setBrochureFormOpen] = useState(false);
  const sdBrochureCourse = {
    title: "SAP SD Training in Bangalore",
    brochureUrl: "/assets/sv-curiotech-sap-sd-brochure.pdf",
  };

  const sdSyllabus = [
    ["Foundations and enterprise structure", ["SAP navigation and ERP basics", "Company code, sales organization, distribution channel and division", "Sales area, plants, storage locations and shipping points"]],
    ["Master data", ["Customer master data", "Material master from sales view", "Condition master data", "Customer-material information records and output master data"]],
    ["Sales document processing", ["Inquiry, quotation and sales order", "Item category, schedule line category and document type", "Copy control, text determination and partner determination", "Returns, free delivery, credit memo and debit memo"]],
    ["Pricing", ["Condition technique made simple", "Pricing procedure, access sequence and condition types", "Discounts, surcharge, tax and freight", "Rebate agreements"]],
    ["Availability and shipping", ["Availability checking and requirements transfer", "Delivery creation, picking, packing and goods issue", "Route determination and shipping point determination"]],
    ["Billing", ["Bill types, billing plan and credit memo process", "Account determination and accounting", "Billing blocks and cancel billing"]],
    ["Credit and special processes", ["Credit management setup and exposure", "Consignment sales", "Third-party sales", "Intra-company sales and stock transport orders"]],
    ["Integration and S/4HANA", ["SD interaction with MM, FI/CO and PP", "S/4HANA changes, Fiori apps and simplifications", "Output management and basic reporting"]],
    ["Testing, support and projects", ["Troubleshoot tickets", "Write functional specifications", "Unit testing, UAT and go-live basics", "Mock interviews and resume building"]],
  ];

  const sdModes = [
    ["Live online", "Working professionals and learners outside Bangalore"],
    ["Weekend and weekday batches", "Flexible schedules for students and employees"],
    ["Fast-track", "Learners who want to upskill quickly"],
  ];

  const consultantSteps = [
    "Take the free demo class and assess whether the teaching is right for you.",
    "Acquire SAP basics and become comfortable working in the system.",
    "Build the order-to-cash process yourself from enterprise structure to billing.",
    "Deliver a practice project similar to real-life work situations.",
    "Attend mock interviews before going to actual interviews.",
    "Apply for openings with a polished resume and confident project explanation.",
  ];

  const sdRoles = [
    "SAP SD Functional Consultant",
    "SAP SD Support Analyst",
    "SAP Business Analyst (Sales & Distribution)",
    "SAP Order-to-Cash Analyst",
    "SAP S/4HANA Sales Consultant",
    "SAP Key User / Super User",
  ];

  const sdFaqs = [
    ["Is SAP SD a good career option in 2026?", "Yes, if you acquire practical knowledge. Companies continue to run and upgrade SAP applications, migrate to S/4HANA and need people who understand sales and billing processes."],
    ["Should I have technical knowledge to join this course?", "No. SAP SD is a functional module, so business process understanding, computer basics and logical thinking are enough to begin."],
    ["How much time will it take me to learn SAP SD?", "Learners generally complete SAP SD training in 2.5-3 months depending on batch category. Regular practice makes you more confident."],
    ["Will I get a certificate?", "You will receive a completion certificate from SV CurioTech. We also help you prepare for SAP certification exams conducted independently by SAP."],
    ["Does your training include ECC or S/4HANA?", "The training covers core concepts applicable to both ECC and S/4HANA, along with key differences so you can understand current projects."],
    ["Can I come for a demo class before joining the actual batch?", "Certainly. Schedule a free demo class and decide for yourself."],
    ["Do you provide placement?", "We provide resume preparation, interview preparation and job referral support. We cannot assure a job because it also depends on learner performance, but we put our best efforts into helping you."],
  ];

  const sdAudience = [
    "BE, B.Tech, BCom, BBA, BSc and MBA graduates",
    "Sales, billing, logistics and supply chain professionals",
    "SAP MM, FI or PP users expanding cross-module knowledge",
    "Support, testing and non-IT career switchers",
    "Professionals returning from a career break",
  ];

  const sdLearningNarratives = [
    {
      title: "Foundations and structure of the enterprise",
      text: "You begin with SAP navigation, SAP ERP systems and the organizational structure used in SD. This includes company code, sales organization, distribution channel, division, sales area, plants, storage location, shipping point and how these elements connect in a real business setup.",
    },
    {
      title: "Master data and sales document processing",
      text: "The course covers customer master data, material master data from the sales point of view, condition master data, customer-material information records and output master data. You then practice inquiry, quotation, sales order, item category, schedule line category, document type, copy control, text determination and partner determination.",
    },
    {
      title: "Pricing, availability, shipping and billing",
      text: "You learn condition technique, pricing procedure, access sequence, condition types, discounts, surcharge, tax, freight charges and rebate agreements. The flow continues into availability checking, delivery creation, picking, packing, goods issue, route determination, shipping point determination, billing types, billing plans, credit memo process, account determination, billing blocks and cancellation.",
    },
    {
      title: "Credit management, integration and S/4HANA",
      text: "SAP SD training also includes credit exposure, consignment sales, third-party sales, intra-company sales and stock transport orders. You learn how Sales and Distribution interacts with MM, FI/CO and PP, plus what changes in SAP S/4HANA, Fiori apps, output management and basic reporting.",
    },
    {
      title: "Testing, support and practical consulting skills",
      text: "You practice reading and troubleshooting tickets, writing functional specifications, collaborating with teams, unit testing, UAT, go-live basics, resume building and mock interviews so that you can explain business scenarios clearly.",
    },
  ];

  const sdTrainingDetails = [
    ["Course duration", "2.5-3 months"],
    ["Course fee", "Contact us for current batch pricing"],
    ["Certificate", "SV CurioTech completion certificate with SAP certification guidance"],
    ["Revision", "Recorded sessions available for revision"],
  ];

  usePageSeo({
    title: "SAP SD Training in Bangalore | Live Projects & Placement Support",
    description: "Learn SAP SD (Sales & Distribution) in Bangalore with real-time projects, S/4HANA coverage and certification guidance. Book a free demo class today.",
    keywords: "SAP SD training in Bangalore, SAP SD course in Bangalore, SAP SD certification, SAP S/4HANA SD training, SAP Sales and Distribution course, SAP SD classes near me, SAP SD online and classroom training",
    canonical: "https://www.svcuriotech.com/sap-sd-training-in-bangalore/",
    image: "https://www.svcuriotech.com/assets/sap-training-hero.jpg",
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP SD Training in Bangalore",
    description: "SAP Sales and Distribution training in Bangalore covering order-to-cash, pricing, delivery, billing, S/4HANA, real-time projects, interview preparation and placement support.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
      telephone: `+91 ${phone}`,
      email,
      address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
    },
    courseMode: ["Classroom", "Online"],
    educationalLevel: "Beginner to Advanced",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sdFaqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <SapSdPageShell>
    <section className="sd-hero sd-hero-redesign">
      <div className="container">
        <div className="sd-hero-topline">
          <span className="sd-kicker"><Sparkles size={16} /> SAP SD Training in Bangalore</span>
          <div className="sd-mini-facts">
            <span>Live SAP system</span>
            <span>S/4HANA coverage</span>
            <span>Placement support</span>
          </div>
        </div>
        <div className="sd-hero-editorial">
          <h1>SAP SD Training in Bangalore: Learn How Businesses Actually Sell, Ship and Bill</h1>
          <div>
            <p>All goods leaving a warehouse, whether it is a phone, medicine pallet or auto parts truck, pass through the sales cycle before they reach the customer. SAP SD helps companies manage that cycle from inquiry to payment.</p>
            <p>At SV CurioTech, you learn configuration, problem-solving and order-to-cash analysis, not just T-codes. Build practical SAP SD skills for sales, logistics and finance-linked consulting roles.</p>
            <div className="sd-hero-actions">
              <a className="sd-primary-btn" href="#contact">Book a Free Demo Class <ArrowRight size={18} /></a>
              <button className="sd-outline-btn" type="button" onClick={() => setBrochureFormOpen(true)}><Download size={17} /> Download Brochure</button>
              <a className="sd-text-btn" href={`tel:+91${phone}`}><Phone size={17} /> Talk to a Counsellor</a>
            </div>
          </div>
        </div>
        <figure className="sd-hero-wide-image">
          <img src="/assets/sap-sd-page/sap-sd-classroom-training.png" alt="AI generated SAP SD classroom training with order to cash workflow dashboard" />
          <figcaption>
            <strong>Order-to-cash practice</strong>
            <span>Inquiry, quotation, sales order, delivery, billing and payment explained with business scenarios.</span>
          </figcaption>
        </figure>
        <div className="sd-pipeline-strip" aria-label="SAP SD order to cash flow">
          {["Inquiry", "Quotation", "Sales Order", "Delivery", "Billing", "Payment"].map((step, index) => (
            <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>
          ))}
        </div>
      </div>
    </section>

    <section className="sd-proof-strip" id="course">
      <div className="container">
        <div><strong>2.5-3</strong><span>months course duration</span></div>
        <div><strong>Live</strong><span>SAP system practice</span></div>
        <div><strong>S/4HANA</strong><span>coverage included</span></div>
        <div><strong>Mock</strong><span>interviews and resume support</span></div>
      </div>
    </section>

    <section className="section sd-intro-section">
      <div className="container sd-intro-grid">
        <article>
          <span className="sd-section-tag">Career module</span>
          <h2>What is SAP SD and why is it always a lucrative career?</h2>
          <p>SD is an abbreviation for Sales & Distribution. SAP SD is the ERP module that deals with every process between the moment a customer makes an inquiry and the moment the payment is completed.</p>
          <p>These processes include inquiries, quotations, sales orders, pricing, deliveries, shipping and billing. Bangalore has IT service providers, manufacturing units, retail companies, pharma teams and FMCG distributors using SAP, so SD consultants remain in demand because the module works directly with revenue streams.</p>
        </article>
        <article className="sd-audience-card">
          <h3>Who is this course for?</h3>
          <div>{sdAudience.map((item) => <span key={item}><Check size={15} /> {item}</span>)}</div>
          <p>Programming knowledge is not required. Anyone who can understand business logic can learn SAP SD step by step.</p>
        </article>
      </div>
    </section>

    <section className="section sd-content-journal">
      <div className="container">
        <div className="sd-centered-heading">
          <span className="sd-section-tag">Complete learning path</span>
          <h2>SAP SD course content explained paragraph-wise.</h2>
          <p>This section keeps the complete training direction from your content: enterprise structure, master data, sales processing, pricing, shipping, billing, integration, support and career preparation.</p>
        </div>
        <div className="sd-journal-grid">
          {sdLearningNarratives.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section sd-syllabus-section" id="syllabus">
      <div className="container">
        <div className="sd-centered-heading">
          <span className="sd-section-tag">Course contents</span>
          <h2>Learn SAP SD in the same order a real project moves.</h2>
          <p>The curriculum follows the order-to-cash cycle so every topic connects to a business situation.</p>
        </div>
        <div className="sd-syllabus-track">
          {sdSyllabus.map(([title, topics], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section sd-image-story-section">
      <div className="container sd-image-story-grid">
        <figure>
          <img src="/assets/sap-sd-page/sap-sd-order-to-cash-dashboard.png" alt="AI generated SAP SD sales order pricing delivery billing and payment dashboard training" />
        </figure>
        <article>
          <span className="sd-section-tag">Real business scenarios</span>
          <h2>Learn the complete sales cycle from sales order to delivery, billing and payment.</h2>
          <p>The SAP SD course is designed around practical situations. You understand how a customer inquiry becomes a quotation, how a quotation becomes a sales order, how pricing conditions are applied, how delivery and goods issue are handled, and how billing connects with finance.</p>
          <p>By practicing the flow visually and in the SAP system, you can explain scenarios in interviews instead of memorizing screens.</p>
          <div className="sd-detail-grid">
            {sdTrainingDetails.map(([label, value]) => <span key={label}><strong>{label}</strong>{value}</span>)}
          </div>
        </article>
      </div>
    </section>

    <section className="section sd-unique-section">
      <div className="container sd-unique-grid">
        <div>
          <span className="sd-section-tag dark">Why our training is unique</span>
          <h2>Practice on a live SAP system, with scenarios that sound like real client work.</h2>
          <p>Everybody can present slides. What matters is practice, experienced guidance, small batches, certification preparation and career support after the course.</p>
        </div>
        <div className="sd-unique-cards">
          {[
            ["Live SAP system", "Practice from the first week and build skills through guided execution."],
            ["Experienced trainers", "Learn from consultants with implementation and support experience."],
            ["Scenario-based learning", "Understand client cases such as multiple discounts on a single order."],
            ["Professional support", "Resume review, mock interviews, interview question bank and job referrals."],
          ].map(([title, text]) => <article key={title}><BadgeCheck size={20} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section sd-mode-section">
      <div className="container sd-mode-grid">
        <div>
          <span className="sd-section-tag">Training modes</span>
          <h2>Flexible SAP SD classes for Bangalore learners and working professionals.</h2>
          <p>All sessions are recorded for revision. Course duration is 2.5-3 months. Contact us for current batch pricing and fee details.</p>
        </div>
        <div className="sd-mode-list">
          {sdModes.map(([mode, best]) => <article key={mode}><strong>{mode}</strong><span>{best}</span></article>)}
        </div>
      </div>
    </section>

    <section className="section sd-bangalore-section">
      <div className="container sd-bangalore-grid">
        <div>
          <span className="sd-section-tag">Why Bangalore?</span>
          <h2>Bangalore is a strong place to start a SAP SD career.</h2>
          <p>Bangalore hosts one of the largest numbers of SAP service providers, captive centres and enterprise customers in India. That creates more interview opportunities, more networking at meet-ups and a wider range of projects to learn from.</p>
        </div>
        <div className="sd-bangalore-points">
          <span>IT service providers</span>
          <span>Manufacturing companies</span>
          <span>Retail and FMCG teams</span>
          <span>Pharma distributors</span>
          <span>Enterprise support roles</span>
          <span>S/4HANA migration projects</span>
        </div>
      </div>
    </section>

    <section className="section sd-career-section">
      <div className="container sd-career-grid">
        <div>
          <span className="sd-section-tag">Consultant path</span>
          <h2>How you become a consultant after SAP SD training.</h2>
          <ol>{consultantSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
        <div>
          <span className="sd-section-tag">Jobs after completion</span>
          <h2>SAP SD roles you can prepare for.</h2>
          <div className="sd-role-list">{sdRoles.map((role) => <span key={role}><BriefcaseBusiness size={15} /> {role}</span>)}</div>
          <p>Bangalore is one of India&apos;s strongest SAP markets, with service providers, captive centres and enterprise customers creating more interview opportunities and project exposure.</p>
        </div>
      </div>
    </section>

    <section className="logo-strip official-logo-strip sd-company-section" id="placements">
      <div className="container">
        <span>SAP SD skills are useful across sales, logistics, consulting and enterprise support teams</span>
        <div className="official-logo-row">
          {officialCompanyLogos.map(([name, logo]) => (
            <figure className="official-logo-tile" key={`sd-${name}`}>
              <img src={logo} alt={`${name} logo`} />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <StudentFeedbackVideos />
    <SampleTestimonials limit={8} />

    <section className="section sd-faq-section" id="faq">
      <div className="container">
        <div className="sd-centered-heading">
          <span className="sd-section-tag">SAP SD FAQ</span>
          <h2>Answers before you join the batch.</h2>
        </div>
        <div className="sd-faq-grid">
          {sdFaqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section sd-contact-section" id="contact">
      <div className="container sd-contact-grid">
        <div>
          <span className="sd-section-tag dark">Get ready for your SAP SD training now</span>
          <h2>Attend a demo class before committing to the course.</h2>
          <p>Share your details and our admissions team will guide you on SAP SD syllabus, batch timing, classroom or online mode, fee details and placement preparation.</p>
          <div className="sd-contact-links">
            <a href={`tel:+91${phone}`}><Phone size={17} /> +91 {phone}</a>
            <a href={`mailto:${email}`}><Mail size={17} /> {email}</a>
            <span><MapPin size={17} /> Bangalore</span>
          </div>
        </div>
        <aside className="sd-form-card">
          <span>Book My Free Demo</span>
          <h3>SAP SD course enquiry</h3>
          <LeadForm variant="course-info" defaultCourse="SAP SD Training in Bangalore" />
        </aside>
      </div>
    </section>

    {brochureFormOpen && <BrochureRequestModal course={sdBrochureCourse} onClose={() => setBrochureFormOpen(false)} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </SapSdPageShell>;
}

function CourseDetail() {
  const { slug } = useParams();
  const [brochureFormOpen, setBrochureFormOpen] = useState(false);
  if (slug === "sap-mm") return <Navigate to="/best-sap-mm-course-in-bangalore/" replace />;
  if (slug === "sap-sd") return <Navigate to="/sap-sd-training-in-bangalore/" replace />;
  const course = courses.find(c => c.slug === slug);
  if (!course) return <Layout><PageHero eyebrow="Course not found" title="Let's get you back on track" text="Explore our available SAP learning paths."/></Layout>;
  const Icon = course.icon;
  return <Layout>
    <section className="course-hero" style={{"--course":course.color}}><div className="container course-hero-grid"><div><span className="eyebrow light"><Icon size={15}/>{course.subtitle}</span><h1>Become confident in<br/><span>{course.title}</span></h1><p>{course.description}</p><div className="hero-actions"><Link className="button" to="/contact#registration">Register Here <ArrowRight size={18}/></Link>{course.brochureUrl && <button className="button button-ghost light-ghost" type="button" onClick={() => setBrochureFormOpen(true)}><Download size={17}/> Download Brochure</button>}</div></div><div className="course-summary"><div className="course-big-icon"><Icon/></div><h3>{course.title} Program</h3><div><span><Clock3/> Duration</span><strong>{course.duration}</strong></div><div><span><Users/> Level</span><strong>{course.level}</strong></div><div><span><GraduationCap/> Format</span><strong>Live instructor-led</strong></div></div></div></section>
    {brochureFormOpen && <BrochureRequestModal course={course} onClose={() => setBrochureFormOpen(false)} />}
    <CourseSchedule course={course}/>
    <section className="section"><div className="container detail-layout"><div><SectionTitle eyebrow="What you'll master" title="A practical, job-aligned curriculum" text="Build understanding step by step, then apply it to realistic enterprise scenarios."/><div className="topic-grid">{course.topics.map((t,i)=><div key={t}><span>{String(i+1).padStart(2,"0")}</span><strong>{t}</strong><Check/></div>)}</div><div className="project-callout"><span><BriefcaseBusiness/></span><div><small>CAPSTONE EXPERIENCE</small><h3>Complete an end-to-end business project</h3><p>Bring the module together through a guided project you can discuss confidently during interviews.</p></div></div></div><aside className="enquiry-card"><span className="eyebrow"><Sparkles size={14}/> Upcoming batches</span><h3>Ready to explore {course.title}?</h3><p>Share your details and we'll call you with batch schedules, syllabus, and fee information.</p><LeadForm compact/></aside></div></section>
  </Layout>;
}

const recruiterCompanies = [
  { name: "Accenture", logo: "accenture", color: "#a100ff" },
  { name: "IBM", logo: "ibm", color: "#1f70c1" },
  { name: "Deloitte", logo: "deloitte", color: "#86bc25" },
  { name: "TCS", logo: "tcs", color: "#345ee8" },
  { name: "Infosys", logo: "infosys", color: "#007cc3" },
  { name: "Capgemini", logo: "capgemini", color: "#00a3e0" },
  { name: "Cognizant", logo: "cognizant", color: "#0033a0" },
  { name: "Wipro", logo: "wipro", color: "#6c2eb9" },
  { name: "HCLTech", logo: "hcltech", color: "#006bb6" },
  { name: "Tech Mahindra", logo: "techmahindra", color: "#dd052b" },
  { name: "LTIMindtree", logo: "ltimindtree", color: "#672f92" },
  { name: "Mphasis", logo: "mphasis", color: "#ef3e42" },
  { name: "Persistent", logo: "persistent", color: "#f47b20" },
  { name: "Coforge", logo: "coforge", color: "#087f7a" },
  { name: "Hexaware", logo: "hexaware", color: "#169bd5" },
  { name: "Birlasoft", logo: "birlasoft", color: "#d71920" },
  { name: "Happiest Minds", logo: "happiestminds", color: "#f58220" },
  { name: "Zensar", logo: "zensar", color: "#0c76bc" },
  { name: "UST", logo: "ust", color: "#00a3ad" },
  { name: "Sonata Software", logo: "sonata", color: "#0060a8" },
];

function CompanyLogo({ company }) {
  return (
    <span className={`company-logo company-logo-${company.logo}`} aria-hidden="true">
      <svg viewBox="0 0 128 48" role="img" focusable="false">
        {company.logo === "accenture" && <><text x="4" y="32">accenture</text><path d="M70 5l25 10-25 10z" /></>}
        {company.logo === "ibm" && <><text x="13" y="34">IBM</text><path d="M8 11h112M8 18h112M8 25h112M8 32h112M8 39h112" /></>}
        {company.logo === "deloitte" && <><text x="3" y="31">Deloitte</text><circle cx="114" cy="31" r="5" /></>}
        {company.logo === "tcs" && <><text x="18" y="32">TCS</text><path d="M92 13h17v22H92z" /></>}
        {company.logo === "infosys" && <><text x="10" y="31">Infosys</text><path d="M10 37h86" /></>}
        {company.logo === "capgemini" && <><path d="M18 30c9-18 34-18 42-2 8-10 25-8 31 3" /><text x="15" y="39">Capgemini</text></>}
        {company.logo === "cognizant" && <><path d="M12 12h28v24H12zM20 20h46v16H20z" /><text x="51" y="31">Cognizant</text></>}
        {company.logo === "wipro" && <><circle cx="26" cy="24" r="15" /><path d="M26 9v30M11 24h30M16 14l20 20M36 14L16 34" /><text x="49" y="31">Wipro</text></>}
        {company.logo === "hcltech" && <><text x="8" y="29">HCL</text><text x="62" y="29">Tech</text></>}
        {company.logo === "techmahindra" && <><path d="M10 12h32l-16 24z" /><text x="49" y="22">Tech</text><text x="49" y="36">Mahindra</text></>}
        {company.logo === "ltimindtree" && <><text x="6" y="22">LTI</text><text x="6" y="36">Mindtree</text><path d="M89 12l28 12-28 12z" /></>}
        {company.logo === "mphasis" && <><path d="M12 36V12l17 18 17-18v24" /><text x="56" y="31">Mphasis</text></>}
        {company.logo === "persistent" && <><path d="M12 12h30c13 0 13 18 0 18H25v9" /><text x="54" y="31">Persistent</text></>}
        {company.logo === "coforge" && <><path d="M36 15a18 18 0 1 0 0 18" /><text x="52" y="31">Coforge</text></>}
        {company.logo === "hexaware" && <><path d="M16 24l12-13h23l12 13-12 13H28z" /><text x="70" y="31">Hexaware</text></>}
        {company.logo === "birlasoft" && <><path d="M12 12h23c13 0 13 12 1 13 15 1 14 14-2 14H12z" /><text x="50" y="31">Birlasoft</text></>}
        {company.logo === "happiestminds" && <><path d="M13 31c11-16 31-16 42 0" /><circle cx="24" cy="18" r="4" /><circle cx="44" cy="18" r="4" /><text x="67" y="22">Happiest</text><text x="67" y="36">Minds</text></>}
        {company.logo === "zensar" && <><path d="M13 13h54L20 36h51" /><text x="79" y="31">Zensar</text></>}
        {company.logo === "ust" && <><path d="M12 14c14 18 34 18 48 0" /><text x="70" y="31">UST</text></>}
        {company.logo === "sonata" && <><path d="M13 34c13-26 40-26 53 0" /><text x="76" y="22">Sonata</text><text x="76" y="36">Software</text></>}
      </svg>
    </span>
  );
}

function RecruiterMarquee() {
  const featuredCompanies = recruiterCompanies.slice(0, 10);
  return (
    <div className="recruiter-strip" aria-label="Recruiter companies">
      <div className="recruiter-heading">
        <span><BriefcaseBusiness size={14} /> Recruiters</span>
        <h3>Our Associates</h3>
        <p>MNCs, IT services firms, and growing technology companies where SAP skills are valued.</p>
      </div>
      <div className="recruiter-logo-grid">
        {featuredCompanies.map((company) => (
          <span key={company.name} style={{ "--brand": company.color }} aria-label={company.name}>
            <CompanyLogo company={company} />
          </span>
        ))}
      </div>
    </div>
  );
}

function Placements() {
  usePageSeo({
    title: "SAP Placement Assistance in Bangalore | SV CurioTech",
    description: "Get SAP placement assistance through resume preparation, mock interviews, project explanation practice, career guidance and opportunity direction at SV CurioTech.",
    keywords: "SAP placement assistance in Bangalore, SAP placement support Bangalore, SAP job assistance Bangalore, SAP interview preparation Bangalore, SAP career support Bangalore",
    canonical: "https://www.svcuriotech.com/placements",
  });

  return <Layout><PageHero eyebrow="Career support" title="Skills get you ready. Preparation gets you noticed." text="Structured support to help you communicate your SAP knowledge with clarity and pursue opportunities confidently."/>
    <section className="section"><div className="container"><SectionTitle eyebrow="Placement preparation" title="Support for every part of your job search"/><div className="placement-steps">{[["01","Profile building","Present your experience, projects, and SAP skills through a focused, recruiter-friendly CV."],["02","Interview preparation","Practice functional, technical, scenario-based, and HR questions with useful feedback."],["03","Opportunity guidance","Understand role expectations, suitable openings, and how to approach applications strategically."],["04","Continued mentoring","Get guidance as you revise concepts, attend interviews, and refine your approach."]].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div><RecruiterMarquee /></div></section>
    <section className="section soft-section"><div className="container split"><div><SectionTitle eyebrow="Interview confidence" title="Know how to explain what you know"/><p className="large-copy">Our preparation focuses on real understanding—not memorized answers.</p><ul className="check-list"><li><Check/> Module-specific question banks</li><li><Check/> Real business scenario discussions</li><li><Check/> One-to-one mock interviews</li><li><Check/> Project explanation practice</li><li><Check/> Communication and presentation feedback</li></ul></div><div className="interview-card"><div className="interview-top"><span><BriefcaseBusiness/></span><div><small>MOCK INTERVIEW</small><strong>SAP Consultant Role</strong></div><span className="ready">READY</span></div><div className="score-row"><span>Functional knowledge</span><div><i style={{width:"88%"}}/></div><b>88%</b></div><div className="score-row"><span>Scenario handling</span><div><i style={{width:"82%"}}/></div><b>82%</b></div><div className="score-row"><span>Communication</span><div><i style={{width:"91%"}}/></div><b>91%</b></div><div className="feedback"><BadgeCheck/><p><strong>Mentor feedback</strong>Strong explanation. Add one more practical example from your capstone project.</p></div></div></div></section><CtaBand/></Layout>;
}

function Contact() {
  return <Layout><PageHero eyebrow="Course registration" title="Take the first step toward your SAP career" text="Leave your contact details and our admissions team will personally guide you through the courses and next steps."/>
    <section className="section contact-section" id="registration"><div className="container contact-grid"><div className="contact-details">
      <span className="contact-kicker"><Sparkles size={15}/> Personal guidance. Zero pressure.</span>
      <h2>Let’s build a career path that fits <em>you.</em></h2>
      <p>Tell us where you are today and where you want to go. Our admissions team will recommend the right SAP track, explain the learning format, and answer your questions clearly.</p>
      <div className="contact-benefits">
        <div><span><Zap/></span><p><strong>Quick response</strong>Get a call back during working hours.</p></div>
        <div><span><ShieldCheck/></span><p><strong>Honest guidance</strong>No pressure, hidden promises, or spam.</p></div>
        <div><span><GraduationCap/></span><p><strong>Career-first advice</strong>Recommendations based on your background.</p></div>
      </div>
      <div className="contact-links">
        <a href={`tel:+91${phone}`}><span><Phone/></span><div><small>CALL AN ADVISOR</small><strong>+91 {phone}</strong></div></a>
        <a href={`mailto:${email}`}><span><Mail/></span><div><small>EMAIL US</small><strong>{email}</strong></div></a>
        <a href={`https://maps.google.com/?q=${encodeURIComponent(branchAddresses[0].mapQuery)}`} target="_blank" rel="noreferrer"><span><MapPin/></span><div><small>VISIT OUR CENTER</small><strong>Kodihalli, Bangalore 560008</strong></div></a>
      </div>
      <div className="hours"><Clock3/><p><strong>Learning center hours</strong>Monday–Saturday: 8:00 AM–8:00 PM<br/>Sunday: By appointment</p></div>
    </div><div className="contact-form-card"><span className="eyebrow"><Sparkles size={15}/> Quick registration</span><h2>Register Here</h2><p>Simply share your contact details. We’ll get in touch to discuss the admission details personally.</p><LeadForm/><div className="form-trust"><span><BadgeCheck/> Secure registration</span><span><Users/> Admissions guidance</span></div></div></div></section>
    <section className="contact-proof"><div className="container"><div><strong>10+</strong><span>Years of trainer expertise</span></div><div><strong>9</strong><span>Focused SAP career tracks</span></div><div><strong>Live</strong><span>Online & classroom batches</span></div><div><strong>1:1</strong><span>Career and interview mentoring</span></div></div></section>
    <section className="section contact-faq"><div className="container"><SectionTitle eyebrow="Before you begin" title="Everything you need to take the first step" text="A quick look at the questions learners usually ask before registration."/><div className="faq-grid">
      <article><span>01</span><h3>Can beginners learn SAP?</h3><p>Yes. We help you select a module that matches your education, experience, and career direction.</p></article>
      <article><span>02</span><h3>Are classes practical?</h3><p>Sessions include business scenarios, guided assignments, configuration practice, and a capstone project.</p></article>
      <article><span>03</span><h3>Do you offer flexible batches?</h3><p>Choose from weekday, weekend, online, and classroom options based on current batch availability.</p></article>
      <article><span>04</span><h3>Is career support included?</h3><p>Learners receive CV guidance, mock interviews, project explanation practice, and opportunity guidance.</p></article>
    </div></div></section>
  </Layout>;
}

function NotFound() {
  return <Layout><PageHero eyebrow="Page not found" title="This page is not available" text="Please use the main menu or contact SV CurioTech for course guidance."/></Layout>;
}

function CtaBand() {
  return <section className="cta-band"><div className="container"><div><span className="eyebrow light"><Sparkles size={15}/> Start learning with confidence</span><h2>Not sure which SAP module fits you?</h2><p>Talk to an advisor and get a practical recommendation based on your education, experience, and goals.</p></div><Link className="button" to="/contact">Get free career guidance <ArrowRight size={18}/></Link></div></section>;
}

export default function App() {
  const location = useLocation();
  if (location.pathname === "/sap-training-in-kalaburagi" || location.pathname === "/sap-training-in-kalaburagi.html") {
    return <SapTrainingKalaburagi/>;
  }
  if (location.pathname === "/sap-training-in-hsr-layout" || location.pathname === "/sap-training-in-hsr-layout.html") {
    return <SapTrainingHsrLayout/>;
  }
  if (location.pathname === "/sap-fico-training-in-calgary" || location.pathname === "/sap-fico-training-in-calgary.html") {
    return <SapFicoTrainingCalgary/>;
  }
  if (
    location.pathname === "/best-sap-fico-course-in-Bangalore" ||
    location.pathname === "/best-sap-fico-course-in-Bangalore/" ||
    location.pathname === "/best-sap-fico-course-in-bangalore" ||
    location.pathname === "/best-sap-fico-course-in-bangalore/"
  ) {
    return <SapFicoTrainingBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm} SharedFooter={Footer}/>;
  }
  return <Routes><Route path="/" element={<BestJobOrientedCoursesBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-bangalore" element={<SapTrainingBangalorePage/>}/><Route path="/sap-training-in-bangalore/" element={<SapTrainingBangalorePage/>}/><Route path="/sap-training-in-banglore" element={<SapTrainingBangalorePage/>}/><Route path="/sap-training-in-banglore/" element={<SapTrainingBangalorePage/>}/><Route path="/it-courses-in-bangalore" element={<BestJobOrientedCoursesBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/it-courses-in-banglore" element={<BestJobOrientedCoursesBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/it-training-in-bangalore" element={<BestJobOrientedCoursesBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/about" element={<AboutCompany/>}/><Route path="/courses" element={<Courses/>}/><Route path="/courses/:slug" element={<CourseDetail/>}/><Route path="/best-sap-mm-course-in-bangalore" element={<SapMmCoursePage/>}/><Route path="/best-sap-mm-course-in-bangalore/" element={<SapMmCoursePage/>}/><Route path="/sap-sd-training-in-bangalore" element={<SapSdTrainingBangalorePage/>}/><Route path="/sap-sd-training-in-bangalore/" element={<SapSdTrainingBangalorePage/>}/><Route path="/sap-sd-training-in-Bangalore" element={<SapSdTrainingBangalorePage/>}/><Route path="/sap-sd-training-in-Bangalore/" element={<SapSdTrainingBangalorePage/>}/><Route path="/blog/sap-fico-training-bangalore-career-guide" element={<SapFicoBlogArticle/>}/><Route path="/blog/sap-fico-training-bangalore-career-guide.html" element={<SapFicoBlogArticle/>}/><Route path="/sap-server-access" element={<SapServerAccess/>}/><Route path="/sap-server-access.html" element={<SapServerAccess/>}/><Route path="/sap-server-access-for-hands-on-practice" element={<SapServerAccess/>}/><Route path="/best-job-oriented-courses-in-bangalore" element={<BestJobOrientedCoursesBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/best-job-oriented-courses-in-bangalore/" element={<BestJobOrientedCoursesBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-yeshwanthpur" element={<SapTrainingYeshwanthpur/>}/><Route path="/sap-training-in-yeshwanthpur.html" element={<SapTrainingYeshwanthpur/>}/><Route path="/sap-training-in-marathahalli" element={<SapTrainingMarathahalli/>}/><Route path="/sap-training-in-marathahalli.html" element={<SapTrainingMarathahalli/>}/><Route path="/sap-training-in-jp-nagar" element={<SapTrainingJpNagar/>}/><Route path="/sap-training-in-jp-nagar.html" element={<SapTrainingJpNagar/>}/><Route path="/sap-training-in-electronic-city" element={<SapLocationTrainingPage page={sapLocationPages.electronicCity}/>}/><Route path="/sap-training-in-electronic-city.html" element={<SapLocationTrainingPage page={sapLocationPages.electronicCity}/>}/><Route path="/sap-training-in-nagarbhavi" element={<SapLocationTrainingPage page={sapLocationPages.nagarbhavi}/>}/><Route path="/sap-training-in-nagarbhavi.html" element={<SapLocationTrainingPage page={sapLocationPages.nagarbhavi}/>}/><Route path="/sap-course-in-jayanagar" element={<SapLocationTrainingPage page={sapLocationPages.jayanagar}/>}/><Route path="/sap-course-in-jayanagar.html" element={<SapLocationTrainingPage page={sapLocationPages.jayanagar}/>}/><Route path="/sap-training-in-coimbatore" element={<SapTrainingCoimbatore/>}/><Route path="/sap-training-in-coimbatore.html" element={<SapTrainingCoimbatore/>}/><Route path="/sap-training-in-mysore" element={<SapLocationTrainingPage page={sapLocationPages.mysore}/>}/><Route path="/sap-training-in-mysore.html" element={<SapLocationTrainingPage page={sapLocationPages.mysore}/>}/><Route path="/sap-training-in-mangalore" element={<SapLocationTrainingPage page={sapLocationPages.mangalore}/>}/><Route path="/sap-training-in-mangalore.html" element={<SapLocationTrainingPage page={sapLocationPages.mangalore}/>}/><Route path="/sap-training-in-belagavi" element={<SapTrainingBelagavi/>}/><Route path="/sap-training-in-belagavi.html" element={<SapTrainingBelagavi/>}/><Route path="/sap-course-with-placement-bangalore" element={<SapCoursePlacementBangalore usePageSeo={usePageSeo} registrationLink={registrationLink} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-with-placement-bangalore.html" element={<SapCoursePlacementBangalore usePageSeo={usePageSeo} registrationLink={registrationLink} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/data-analytics-course-in-Bellary" element={<DataAnalyticsBellary usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/data-analytics-course-in-Bellary.html" element={<DataAnalyticsBellary usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/data-analytics-course-Hubballi-Dharwad" element={<DataAnalyticsHubballiDharwad usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/data-analytics-course-Hubballi-Dharwad.html" element={<DataAnalyticsHubballiDharwad usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-fico-training-in-bangalore" element={<SapFicoTrainingBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm} SharedFooter={Footer}/>}/><Route path="/sap-fico-training-in-bangalore.html" element={<SapFicoTrainingBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm} SharedFooter={Footer}/>}/><Route path="/sap-fico-training-in-toronto" element={<SapFicoTrainingToronto usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-fico-training-in-toronto.html" element={<SapFicoTrainingToronto usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-in-canada" element={<SapTrainingCanada usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-in-canada.html" element={<SapTrainingCanada usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-canada" element={<SapTrainingCanada usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-canada.html" element={<SapTrainingCanada usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-in-toronto" element={<SapCourseToronto usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-in-toronto.html" element={<SapCourseToronto usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-vancouver" element={<SapTrainingVancouver usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-vancouver.html" element={<SapTrainingVancouver usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-winnipeg" element={<SapTrainingWinnipeg usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-winnipeg.html" element={<SapTrainingWinnipeg usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/>{allLocationCoursePages.map((page) => <Route key={page.slug} path={`/${page.slug}`} element={<LocationCoursePage page={page}/>}/>) }<Route path="/placements" element={<Placements/>}/><Route path="/privacy-policy" element={<LegalPage type="privacy"/>}/><Route path="/privacy-policy.html" element={<LegalPage type="privacy"/>}/><Route path="/terms-and-conditions" element={<LegalPage type="terms"/>}/><Route path="/terms-and-conditions.html" element={<LegalPage type="terms"/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes>;
}

