import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock3,
  Download,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
  X,
} from "lucide-react";
import { courses, testimonials } from "./data";
import SapCoursePlacementBangalore from "./pages/SapCoursePlacementBangalore";
import SapTrainingCanada from "./pages/SapTrainingCanada";
import SapCourseToronto from "./pages/SapCourseToronto";
import SapFicoTrainingBangalore from "./pages/SapFicoTrainingBangalore";

const phone = "6361702540";
const email = "svcuriotech@gmail.com";

function registrationLink(course = "") {
  return course ? `/contact?course=${encodeURIComponent(course)}#registration` : "/contact#registration";
}

function upsertMeta(selector, create, apply) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  apply(element);
}

function usePageSeo({ title, description, keywords, canonical, image = "https://www.svcuriotech.com/assets/sap-training-hero.png" }) {
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
  }, [canonical, description, image, keywords, title]);
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
            <NavLink to="/about">About</NavLink>
            <div className="nav-dropdown">
              <NavLink to="/courses">Courses <ChevronDown size={15} /></NavLink>
              <div className="dropdown-menu">
                {courses.map((course) => <Link key={course.slug} to={`/courses/${course.slug}`}>{course.title}</Link>)}
              </div>
            </div>
            <NavLink to="/placements">Placements</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link className="button button-sm" to="/contact#registration">Demo Request <ArrowRight size={16} /></Link>
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
        </div>
        <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/courses">SAP courses</Link><Link to="/sap-fico-training-in-bangalore">SAP FICO training in Bangalore</Link><Link to="/sap-course-in-toronto">SAP course in Toronto</Link><Link to="/sap-training-in-canada">SAP course in Canada</Link><Link to="/sap-training-in-coimbatore">SAP training in Coimbatore</Link><Link to="/sap-training-in-belagavi">SAP training in Belagavi</Link><Link to="/sap-training-in-yeshwanthpur">SAP training in Yeshwanthpur</Link><Link to="/sap-training-in-electronic-city">SAP training in Electronic City</Link><Link to="/sap-training-in-nagarbhavi">SAP training in Nagarbhavi</Link><Link to="/sap-course-in-jayanagar">SAP course in Jayanagar</Link><Link to="/placements">Placement support</Link><Link to="/contact">Contact us</Link></div>
        <div><h4>Popular courses</h4>{courses.slice(0, 5).map(c => <Link key={c.slug} to={`/courses/${c.slug}`}>{c.title}</Link>)}</div>
        <div><h4>Visit us</h4><p className="address"><MapPin size={18} /> No. 25, 1st Floor, MG Road, Bengaluru, Karnataka 560001, India</p><a className="map-link" href="https://maps.google.com/?q=MG+Road+Bengaluru+560001" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15} /></a></div>
      </div>
      <div className="container copyright"><span>© {new Date().getFullYear()} SV CurioTech. All rights reserved.</span><span>Designed for ambitious careers.</span></div>
    </footer>
  );
}

function Layout({ children }) {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" }), 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <a className="whatsapp" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20to%20know%20about%20SAP%20training.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /><span>Chat with us</span></a>
      <Footer />
    </>
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
          <h1>SAP Training<br /><span>in Banglore.</span></h1>
          <p>Move beyond theory with expert-led training, live business scenarios, and career support designed to make you industry-ready.</p>
          <div className="hero-actions"><Link className="button" to="/contact#registration">Get More Information <ArrowRight size={18} /></Link><Link className="button button-ghost" to="/courses"><Play size={17} fill="currentColor" /> Explore courses</Link></div>
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
    return <Link className="course-card" to={`/courses/${course.slug}`} key={course.slug} style={{"--course": course.color}}>
      <div className="course-icon"><Icon /></div><span className="course-label">SAP MODULE</span><h3>{course.title}</h3><h4>{course.subtitle}</h4><p>{course.description}</p>
      <div className="course-meta"><span><Clock3 size={15} /> {course.duration}</span><span>{course.level}</span></div>
      <div className="course-link">Explore course <ArrowRight size={17} /></div>
    </Link>;
  })}</div>;
}

const emptyRegistration = { name: "", email: "", phone: "" };
const submissionTimeoutMs = 60000;
const fallbackSubmissionMessage = "We couldn't submit the form right now. Please call us at +91 6361702540 or use WhatsApp.";

function LeadForm({ compact = false, variant = "registration", defaultCourse = "" }) {
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
      _subject: variant === "course-info" ? `Course information request - ${form.name}` : `New website registration - ${form.name}`,
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
      setForm(initialForm);
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
  if (sent) return <div className="form-success"><span><Check /></span><h3>{variant === "course-info" ? "Request received!" : "Thank you for registering!"}</h3><p>{localOnly ? "Saved locally for testing. Add SMTP email settings to send real emails." : "We have emailed you a confirmation. Our admissions team will contact you shortly."}</p><button className="text-button" onClick={() => setSent(false)}>{variant === "course-info" ? "Submit another request" : "Submit another registration"}</button></div>;

  return <form className="lead-form" onSubmit={submit}>
    <label><span>Full name *</span><input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your full name" /></label>
    <label><span>Email address *</span><input name="email" value={form.email} onChange={update} required type="email" autoComplete="email" placeholder="you@email.com" /></label>
    <label><span>Phone number *</span><input name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" placeholder="+91 98765 43210" /></label>
    {variant === "course-info" && <label><span>Course interested in *</span><input name="course" value={form.course} onChange={update} required autoComplete="off" placeholder="Enter SAP course" /></label>}
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
        <LeadForm variant="course-info" defaultCourse={course.title} />
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
    ["Canada + Major City Pages", "View Canada and Toronto SAP training pages for international learners.", "/sap-training-in-canada"],
    ["Course-Specific FAQs", "Compare modules, duration, training mode, topics, and enquiry options from each course page.", "/courses"],
    ["Student Reviews & Testimonials", "Read learner feedback about practical classes, trainer support, and interview preparation.", "/#student-reviews"],
    ["SAP Career Guide", "Get guidance for choosing SAP modules based on finance, supply chain, HR, technical, or procurement goals.", "/contact#registration"],
    ["SEO Blog Section", "Plan SAP learning articles around high-search questions from freshers and working professionals.", "/contact#registration"],
    ["Trainer Profiles", "Show trainer experience, module expertise, and project background for stronger trust.", "/about"],
    ["Corporate Training Page", "Discuss SAP upskilling programs for colleges, teams, and companies.", "/contact#registration"],
    ["Projects / Internship Details", "Ask about project-style practice, assignments, and internship-oriented SAP learning support.", "/contact#registration"],
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
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: ["https://www.svcuriotech.com/"],
  };

  usePageSeo({
    title: "Best SAP Training in Bangalore | SV CurioTech",
    description: "Join SV CurioTech for industry-oriented SAP training in Bangalore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, practical projects, interview preparation and career guidance.",
    keywords: "SAP training in Bangalore, best SAP training institute in Bangalore, SAP FICO training, SAP MM training, SAP SD training, SAP ABAP training, SAP SuccessFactors training, SAP Ariba training",
    canonical: "https://www.svcuriotech.com/",
  });

  return (
    <Layout>
      <Hero />
      <section className="logo-strip"><div className="container"><span>Skills built for careers at leading enterprises</span><div><b>accenture</b><b>IBM</b><b>Capgemini</b><b>cognizant</b><b>Infosys</b><b>TCS</b></div></div></section>
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
      <section className="section soft-section home-module-section">
        <div className="container">
          <SectionTitle eyebrow="Popular SAP modules" title="SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba and more" text="Explore individual SAP course pages and speak with our team if you need help choosing the right functional, technical, HR, procurement, or finance track." />
          <div className="home-module-grid">
            {moduleLinks.map((course) => <Link className="home-module-card" to={`/courses/${course.slug}`} key={course.slug} style={{"--course": course.color}}><strong>{course.title}</strong><small>{course.subtitle}</small><p>{course.description}</p><span>View course page <ArrowRight size={15}/></span></Link>)}
            <Link className="home-module-card" to={registrationLink("SAP HCM")} style={{"--course": "#0f8d7d"}}><strong>SAP HCM</strong><small>Human Capital Management</small><p>Get guidance for SAP HR and HCM learning paths, core HR processes, payroll concepts, and career direction.</p><span>Enquire for HCM <ArrowRight size={15}/></span></Link>
          </div>
          <div className="module-guidance-panel">
            <div className="module-guidance-copy">
              <span className="eyebrow"><Target size={14}/> Choose the right SAP module</span>
              <h3>Ranking improves when the page answers the learner's real search intent.</h3>
              <p>A person searching for SAP training is not only looking for a course list. They want to know which module fits their background, whether the training is practical, how long it takes, and whether it can lead to interviews. This section helps them compare SAP modules in plain language.</p>
            </div>
            <div className="module-guidance-grid">
              {moduleGuidance.map(([background, module, text]) => <article key={background}><small>{background}</small><h4>{module}</h4><p>{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>
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
      <section className="section home-priority-section">
        <div className="container">
          <SectionTitle eyebrow="Learner resources" title="Everything a SAP learner needs before joining" text="The homepage now points learners toward the high-priority SEO and trust areas: individual SAP course pages, Bangalore locations, Canada pages, FAQs, reviews, career guidance, blogs, trainer profiles, corporate training, and project support." />
          <div className="home-priority-grid">
            {homePriorityLinks.map(([title, text, link], index) => <Link className="home-priority-card" to={link} key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><strong>Explore <ArrowRight size={14}/></strong></Link>)}
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
      <section className="section testimonials-section" id="student-reviews"><div className="container"><SectionTitle eyebrow="Student reviews" title="Testimonials and Google review-ready trust signals" text="Learners look for proof before joining. This section highlights student feedback, practical training outcomes, and clear next steps for checking reviews or speaking with admissions." /><div className="review-summary"><div><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={17} fill="currentColor"/>)}</div><strong>Practical SAP training feedback</strong><p>Students mention live examples, flexible batches, resume guidance, interview preparation, and patient trainer support.</p></div><a className="button button-outline" href="https://www.google.com/search?q=SV+CurioTech+reviews" target="_blank" rel="noreferrer">Check Google Reviews <ArrowRight size={17}/></a></div><div className="testimonial-grid">{testimonials.slice(0, 6).map(t=><article className="testimonial" key={t.name}><div className="quote-mark">“</div><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div><p>{t.quote}</p><div className="student"><span>{t.initials}</span><div><strong>{t.name}</strong><small>{t.role} • {t.company}</small></div></div></article>)}</div></div></section>
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

function PageHero({ eyebrow, title, text }) {
  return <section className="page-hero"><div className="hero-grid"/><div className="container"><span className="eyebrow light"><Sparkles size={15}/>{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function About() {
  return <Layout><PageHero eyebrow="About SV CurioTech" title="Serious SAP skills. Human learning." text="We help ambitious learners build practical expertise with patient mentorship, realistic projects, and a career-first mindset."/>
    <section className="section"><div className="container split about-split"><div><SectionTitle eyebrow="Our purpose" title="Make enterprise learning clear, practical, and empowering" /><p className="large-copy">SAP can feel complex from the outside. Our job is to make the path understandable—connecting each concept to a business reason and each lesson to a real career skill.</p><p>Based in the heart of Bengaluru, SV CurioTech brings experienced professionals and motivated learners together in an environment where questions are welcome and practice is central.</p></div><div className="value-panel"><span>WHAT WE BELIEVE</span>{[["Clarity over jargon","Complex ideas should be taught in ways people can confidently use."],["Practice over memorization","Skill grows when learners solve realistic problems themselves."],["Progress over pressure","Strong careers are built through consistent, supported learning."]].map(x=><div key={x[0]}><Check/><p><strong>{x[0]}</strong>{x[1]}</p></div>)}</div></div></section>
    <section className="section soft-section"><div className="container"><SectionTitle eyebrow="The SV difference" title="Everything is designed around your progress"/><div className="benefit-grid">{[[GraduationCap,"Expert mentors","Learn from professionals who understand implementation realities."],[Target,"Live projects","Turn theory into skill through assignments and end-to-end cases."],[Users,"Small-group attention","Ask questions, get feedback, and learn without getting lost."],[Clock3,"Flexible learning","Choose practical weekday, weekend, online, or classroom options."],[BriefcaseBusiness,"Career preparation","Strengthen your CV, interviews, and professional confidence."],[Headphones,"Continued support","Stay supported beyond class as you revise and prepare."]].map(([I,t,p])=><div className="benefit-card" key={t}><span><I/></span><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
  </Layout>;
}

function Courses() {
  return <Layout><PageHero eyebrow="SAP training programs" title="Choose the expertise you want to own" text="Focused programs for finance, supply chain, development, HR, and procurement careers."/><section className="section"><div className="container"><CourseCards/></div></section><CtaBand/></Layout>;
}

const sapLocationPages = {
  yeshwanthpur: {
    location: "Yeshwanthpur",
    area: "Yeshwanthpur, Bangalore",
    slug: "sap-training-in-yeshwanthpur",
    title: "Best SAP Training in Yeshwanthpur | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Yeshwanthpur, Bangalore with live projects, practical SAP modules, flexible batches and placement assistance.",
    keywords: "SAP training in Yeshwanthpur, best SAP training institute in Yeshwanthpur, SAP course Bangalore, SAP MM training Yeshwanthpur, SAP FICO training Yeshwanthpur",
    heroText: "Build practical SAP skills with SV CurioTech through instructor-led classes, live business examples, module-focused learning and career support for SAP roles in Bangalore and beyond.",
    introLead: "If you are searching for SAP training in Yeshwanthpur, SV CurioTech helps you move beyond theory and understand how SAP is used in real business processes.",
    localParagraphs: [
      "Yeshwanthpur is well connected to several education, business and residential areas in Bangalore, which makes it a practical location for learners who want SAP training without losing time in long travel or unclear course choices.",
      "Many students and working professionals come with the same concern: SAP looks powerful, but it also looks difficult from the outside. Our classes break that fear by explaining each topic through simple business examples before moving into SAP screens, configuration and interview questions.",
    ],
    focusTitle: "Yeshwanthpur-focused SAP course guidance",
    focusText: "Local learners in and around Yeshwanthpur can access SAP guidance with a Bangalore career focus.",
    benefitIntro: "The training is built for learners who want steady guidance, practical examples and confidence before they attend SAP interviews.",
  },
  electronicCity: {
    location: "Electronic City",
    area: "Electronic City, Bangalore",
    slug: "sap-training-in-electronic-city",
    title: "Best SAP Training in Electronic City | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Electronic City, Bangalore with live projects, practical SAP modules, flexible batches and placement assistance.",
    keywords: "SAP training in Electronic City, best SAP training institute in Electronic City, SAP course Bangalore, SAP MM training Electronic City, SAP FICO training Electronic City",
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
    title: "SAP Course in Jayanagar, Bangalore | SV CurioTech",
    description: "Join SV CurioTech for SAP course in Jayanagar, Bangalore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, practical training, projects, flexible batches and interview preparation.",
    keywords: "SAP course in Jayanagar, SAP training in Jayanagar, best SAP training institute in Jayanagar, SAP FICO training Jayanagar, SAP MM training Jayanagar, SAP ABAP course Jayanagar",
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
  nagarbhavi: {
    location: "Nagarbhavi",
    area: "Nagarbhavi, Bangalore",
    slug: "sap-training-in-nagarbhavi",
    title: "Best SAP Training in Nagarbhavi | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Nagarbhavi, Bangalore with live projects, practical SAP modules, flexible batches and placement assistance.",
    keywords: "SAP training in Nagarbhavi, best SAP training institute in Nagarbhavi, SAP course Bangalore, SAP MM training Nagarbhavi, SAP FICO training Nagarbhavi",
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
    title: "SAP Training Institute in Coimbatore with Placement | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Coimbatore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC, live S/4HANA practice and placement assistance.",
    keywords: "SAP training in Coimbatore, SAP training institute in Coimbatore, SAP course in Coimbatore, SAP FICO training Coimbatore, SAP MM training Coimbatore, SAP ABAP course Coimbatore, SAP course with placement Coimbatore",
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
  belagavi: {
    location: "Belagavi",
    area: "Belagavi, Karnataka",
    slug: "sap-training-in-belagavi",
    title: "SAP Training Institute in Belagavi with Placement | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Belagavi with hands-on SAP FICO, MM, SD, PP, HCM, ABAP, SuccessFactors, Ariba, Security and GRC training plus placement support.",
    keywords: "SAP training in Belagavi, SAP training institute in Belagavi, SAP course in Belagavi, SAP FICO training Belagavi, SAP MM training Belagavi, SAP ABAP course Belagavi, SAP placement support Belagavi",
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

function SapTrainingYeshwanthpur() {
  return <SapLocationTrainingPage page={sapLocationPages.yeshwanthpur} />;
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

  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `https://www.svcuriotech.com/${slug}`,
  });

  const locationModules = [
    ["SAP MM", "Materials Management training for procurement, inventory, purchase orders, vendor master and material master processes.", "/courses/sap-mm"],
    ["SAP FICO", "Finance and controlling training for accounting, reporting, cost centers, profit centers and financial business processes.", "/courses/sap-fico"],
    ["SAP SD", "Sales and Distribution training focused on order-to-cash, pricing, billing, customer master and delivery processes.", "/courses/sap-sd"],
    ["SAP ABAP", "Technical SAP programming training covering reports, forms, debugging, data dictionary and development basics.", "/courses/sap-abap"],
    ["SAP PP", "Production Planning training for manufacturing, planning, MRP, capacity and shop floor business scenarios.", "/courses/sap-pp"],
    ["SAP Ariba", "Procurement and supplier collaboration training for sourcing, buying, invoicing and modern supply chain workflows.", "/courses/sap-ariba"],
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
  const faqs = page.extendedSeo ? [...baseFaqs, ...jayanagarFaqs] : baseFaqs;

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
  const jayanagarLocalAreas = ["Jayanagar", "JP Nagar", "Basavanagudi", "Banashankari", "BTM Layout", "Wilson Garden", "Lalbagh Road", "South End Circle", "J P Nagar Metro side", "Vijaya Bank Layout"];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `SAP Training in ${location}`,
    description: `Practical SAP training in ${area} with live projects, module-focused learning and placement assistance.`,
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: area,
    courseMode: ["Classroom", "Online"],
  };

  return <Layout>
    <section className="seo-hero">
      <div className="container seo-hero-grid">
        <div className="seo-hero-copy">
          <span className="eyebrow light"><MapPin size={15}/> {location} SAP academy</span>
          <h1>Best SAP Training in {location}</h1>
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
          <SectionTitle eyebrow="Practical SAP course" title="Industry-oriented SAP training for real career growth" />
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
            <h3>SAP training for freshers in Jayanagar</h3>
            <p>Freshers often ask whether SAP is hard, which module they should select, and what they should study before applying for SAP jobs. These are the right questions to ask before joining. At SV CurioTech, learners can understand the module, syllabus, learning approach, practical expectations and interview direction before choosing a program.</p>
          </article>
          <article>
            <span className="eyebrow"><BriefcaseBusiness size={14}/> Working professionals</span>
            <h3>SAP training for working professionals</h3>
            <p>Working professionals usually need training that connects existing business experience with SAP processes. Finance, procurement, sales, operations, HR and IT professionals can discuss flexible batch options, current availability, practical learning needs and the SAP module that fits their next career move.</p>
          </article>
        </div>
        <div className="jayanagar-story-panel">
          <div>
            <span className="eyebrow"><Users size={14}/> Learner situations</span>
            <h3>Different learners need different SAP paths.</h3>
            <p>A good SAP course page should not speak to everyone in the same way. A commerce graduate, a procurement executive, an engineering fresher and an HR professional may all search for SAP training in Jayanagar, but each person needs a different explanation of module fit, practice style and career direction.</p>
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
            <h3>Useful for learners around south Bengaluru</h3>
            <p>Jayanagar is convenient for learners who want SAP course guidance near residential, college and business areas in south Bengaluru. Many learners compare training options from nearby locations before choosing a module and batch timing.</p>
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
          <p>SAP course availability may vary according to the module and trainer schedule. Learners can enquire about weekday batches, weekend batches, online training, classroom training where available, current batch start dates, course duration, practical or server access and individual module availability.</p>
          <p>Instead of choosing only by short duration or low fee, compare whether the important concepts, business scenarios and practical sessions are actually included.</p>
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
          <p>After completing SAP training, a learner should be able to explain the basic purpose of the selected module, important master data, common transactions, business process flow, integration touchpoints and the kind of work expected in an SAP support or consultant role.</p>
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
        <SectionTitle eyebrow="Student reviews" title="Practical SAP training feedback and trust signals" text="Learners comparing SAP course options near Jayanagar should look for trainer clarity, practical exposure, interview preparation, batch support and honest course guidance." />
        <div className="review-summary">
          <div>
            <div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={17} fill="currentColor"/>)}</div>
            <strong>Student-focused SAP learning</strong>
            <p>SV CurioTech highlights practical business scenarios, module guidance, resume support, interview preparation and flexible learning options for freshers and working professionals.</p>
          </div>
          <a className="button button-outline" href="https://www.google.com/search?q=SV+CurioTech+reviews" target="_blank" rel="noreferrer">Check Google Reviews <ArrowRight size={17}/></a>
        </div>
        <div className="testimonial-grid">
          {testimonials.slice(0, 3).map(t=><article className="testimonial" key={t.name}><div className="quote-mark">“</div><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div><p>{t.quote}</p><div className="student"><span>{t.initials}</span><div><strong>{t.name}</strong><small>{t.role} • {t.company}</small></div></div></article>)}
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
  </Layout>;
}

const yeshwanthpurCoursePages = [
  {
    slug: "sap-abap-training-in-yeshwanthpur",
    module: "SAP ABAP",
    h1: "Best SAP ABAP Training in Yeshwanthpur",
    title: "Best SAP ABAP Training in Yeshwanthpur | SV CurioTech",
    description: "Learn SAP ABAP in Yeshwanthpur with technical programming practice, SAP server access, live projects and placement support at SV CurioTech.",
    keywords: "best SAP ABAP training in Yeshwanthpur, SAP ABAP course Bangalore, SAP technical training",
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
    h1: "Best SAP Ariba Training in Yeshwanthpur",
    title: "Best SAP Ariba Training in Yeshwanthpur | SV CurioTech",
    description: "Join SAP Ariba training in Yeshwanthpur at SV CurioTech. Learn procurement concepts with practical sessions, projects and placement support.",
    keywords: "best SAP Ariba training in Yeshwanthpur, SAP Ariba course Bangalore, SAP procurement training",
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
    h1: "Best SAP BASIS Training in Yeshwanthpur",
    title: "Best SAP BASIS Training in Yeshwanthpur | SV CurioTech",
    description: "Join SAP BASIS training in Yeshwanthpur at SV CurioTech. Learn SAP administration concepts with practical sessions and placement support.",
    keywords: "best SAP BASIS training in Yeshwanthpur, SAP BASIS course Bangalore, SAP administration training",
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
    h1: "Best SAP EWM Training in Yeshwanthpur",
    title: "Best SAP EWM Training in Yeshwanthpur | SV CurioTech",
    description: "Learn SAP EWM in Yeshwanthpur with warehouse management training, SAP server access, real-time projects and placement support.",
    keywords: "best SAP EWM training in Yeshwanthpur, SAP EWM course Bangalore, SAP warehouse management training",
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
    h1: "Best SAP FICO Training in Yeshwanthpur",
    title: "Best SAP FICO Training in Yeshwanthpur | SV CurioTech",
    description: "Learn SAP FICO in Yeshwanthpur with practical finance and controlling training, live projects, interview preparation and placement support at SV CurioTech.",
    keywords: "best SAP FICO training in Yeshwanthpur, SAP FICO course Bangalore, SAP finance training",
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
    h1: "Best SAP HCM Training in Yeshwanthpur",
    title: "Best SAP HCM Training in Yeshwanthpur | SV CurioTech",
    description: "Join SAP HCM training in Yeshwanthpur at SV CurioTech. Learn human capital management with practical sessions and placement support.",
    keywords: "best SAP HCM training in Yeshwanthpur, SAP HCM course Bangalore, SAP HR training",
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
    h1: "Best SAP MM Training in Yeshwanthpur, Bangalore",
    title: "Best SAP MM Training in Yeshwanthpur | SAP MM Course Bangalore",
    description: "Join SAP MM training in Yeshwanthpur at SV CurioTech. Learn materials management with practical sessions, SAP server access, real-time projects and placement support.",
    keywords: "best SAP MM training in Yeshwanthpur, SAP MM course Yeshwanthpur, SAP MM training Bangalore, SAP materials management training",
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
    h1: "Best SAP PM Training in Yeshwanthpur",
    title: "Best SAP PM Training in Yeshwanthpur | SV CurioTech",
    description: "Join SAP PM training in Yeshwanthpur at SV CurioTech. Learn plant maintenance concepts with practical sessions, projects and career support.",
    keywords: "best SAP PM training in Yeshwanthpur, SAP PM course Bangalore, SAP plant maintenance training",
    intro: "SV CurioTech offers SAP PM training for learners who want to understand plant maintenance, equipment management and maintenance process workflows.",
    highlights: ["Plant maintenance concepts", "Equipment and notification process training", "Assignments and assessments", "Career guidance"],
    fitTitle: "For maintenance and engineering career paths",
    fit: ["Mechanical and engineering graduates", "Maintenance and plant operations professionals", "Freshers interested in SAP functional roles"],
    supportTitle: "Practical SAP PM learning",
    support: ["Maintenance order examples", "Equipment and functional location concepts", "Resume preparation", "Interview support"],
    overview: "SAP PM supports plant maintenance activities such as equipment management, notifications, maintenance orders and preventive maintenance. This page was created in the main site because the requested PM HTML source was not present in the SAP-YESH folder.",
    outcomes: ["SAP PM Consultant", "Maintenance Process Analyst", "SAP Functional Support Consultant", "Plant Operations Associate"],
    color: "#b7791f",
  },
  {
    slug: "sap-pp-training-in-yeshwanthpur",
    module: "SAP PP",
    h1: "Best SAP PP Training in Yeshwanthpur",
    title: "Best SAP PP Training in Yeshwanthpur | SV CurioTech",
    description: "Learn SAP PP in Yeshwanthpur with practical production planning training, live projects and placement support from SV CurioTech.",
    keywords: "best SAP PP training in Yeshwanthpur, SAP PP course Bangalore, SAP production planning training",
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
    h1: "Best SAP SD Training in Yeshwanthpur",
    title: "Best SAP SD Training in Yeshwanthpur | SV CurioTech",
    description: "Join SAP SD training in Yeshwanthpur at SV CurioTech. Learn sales and distribution with practical classes, live projects and placement support.",
    keywords: "best SAP SD training in Yeshwanthpur, SAP SD course Bangalore, SAP sales and distribution training",
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

function YeshwanthpurCoursePage({ page }) {
  usePageSeo({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `https://www.svcuriotech.com/${page.slug}`,
  });

  const relatedPages = yeshwanthpurCoursePages.filter((item) => item.slug !== page.slug).slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: page.h1,
    description: page.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: "Yeshwanthpur, Bangalore",
    courseMode: ["Classroom", "Online"],
  };

  return <Layout>
    <section className="module-seo-hero" style={{ "--course": page.color }}>
      <div className="container module-seo-hero-grid">
        <div>
          <span className="eyebrow light"><MapPin size={15}/> {page.module} Training in Yeshwanthpur</span>
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
          <div className="hero-actions"><Link className="button" to={registrationLink(`${page.module} Training in Yeshwanthpur`)}>Enquire for {page.module} <ArrowRight size={18}/></Link><a className="button button-ghost light-ghost" href={`tel:+91${phone}`}><Phone size={17}/> Call Now</a></div>
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
        <SectionTitle eyebrow="Related SAP courses" title="Explore more Yeshwanthpur SAP training pages" text="Internal links help learners compare modules and help search engines understand the course structure of the website." />
        <div className="seo-module-grid">
          {relatedPages.map((item) => <Link className="seo-module-card" key={item.slug} to={`/${item.slug}`}><strong>{item.module}</strong><p>{item.description}</p><span>View SEO page <ArrowRight size={15}/></span></Link>)}
        </div>
      </div>
    </section>

    <section className="cta-band">
      <div className="container">
        <div><span className="eyebrow light"><Sparkles size={15}/> Join now</span><h2>Start {page.module} training in Yeshwanthpur</h2><p>Contact SV CurioTech for batch timing, fees and course guidance.</p></div>
        <Link className="button" to={registrationLink(`${page.module} Training in Yeshwanthpur`)}>Register for course guidance <ArrowRight size={18}/></Link>
      </div>
    </section>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

function CourseDetail() {
  const { slug } = useParams();
  const [brochureFormOpen, setBrochureFormOpen] = useState(false);
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
        <a href="https://maps.google.com/?q=MG+Road+Bengaluru+560001" target="_blank" rel="noreferrer"><span><MapPin/></span><div><small>VISIT OUR CENTER</small><strong>MG Road, Bengaluru 560001</strong></div></a>
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

function CtaBand() {
  return <section className="cta-band"><div className="container"><div><span className="eyebrow light"><Sparkles size={15}/> Start learning with confidence</span><h2>Not sure which SAP module fits you?</h2><p>Talk to an advisor and get a practical recommendation based on your education, experience, and goals.</p></div><Link className="button" to="/contact">Get free career guidance <ArrowRight size={18}/></Link></div></section>;
}

export default function App() {
  return <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/courses" element={<Courses/>}/><Route path="/courses/:slug" element={<CourseDetail/>}/><Route path="/sap-training-in-yeshwanthpur" element={<SapTrainingYeshwanthpur/>}/><Route path="/sap-training-in-yeshwanthpur.html" element={<SapTrainingYeshwanthpur/>}/><Route path="/sap-training-in-electronic-city" element={<SapLocationTrainingPage page={sapLocationPages.electronicCity}/>}/><Route path="/sap-training-in-electronic-city.html" element={<SapLocationTrainingPage page={sapLocationPages.electronicCity}/>}/><Route path="/sap-training-in-nagarbhavi" element={<SapLocationTrainingPage page={sapLocationPages.nagarbhavi}/>}/><Route path="/sap-training-in-nagarbhavi.html" element={<SapLocationTrainingPage page={sapLocationPages.nagarbhavi}/>}/><Route path="/sap-course-in-jayanagar" element={<SapLocationTrainingPage page={sapLocationPages.jayanagar}/>}/><Route path="/sap-course-in-jayanagar.html" element={<SapLocationTrainingPage page={sapLocationPages.jayanagar}/>}/><Route path="/sap-training-in-coimbatore" element={<SapTrainingCoimbatore/>}/><Route path="/sap-training-in-coimbatore.html" element={<SapTrainingCoimbatore/>}/><Route path="/sap-training-in-belagavi" element={<SapTrainingBelagavi/>}/><Route path="/sap-training-in-belagavi.html" element={<SapTrainingBelagavi/>}/><Route path="/sap-course-with-placement-bangalore" element={<SapCoursePlacementBangalore usePageSeo={usePageSeo} registrationLink={registrationLink} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-with-placement-bangalore.html" element={<SapCoursePlacementBangalore usePageSeo={usePageSeo} registrationLink={registrationLink} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-fico-training-in-bangalore" element={<SapFicoTrainingBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-fico-training-in-bangalore.html" element={<SapFicoTrainingBangalore usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-canada" element={<SapTrainingCanada usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-training-in-canada.html" element={<SapTrainingCanada usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-in-toronto" element={<SapCourseToronto usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/><Route path="/sap-course-in-toronto.html" element={<SapCourseToronto usePageSeo={usePageSeo} phone={phone} email={email} LeadForm={LeadForm}/>}/>{yeshwanthpurCoursePages.map((page) => <Route key={page.slug} path={`/${page.slug}`} element={<YeshwanthpurCoursePage page={page}/>}/>) }<Route path="/placements" element={<Placements/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes>;
}
