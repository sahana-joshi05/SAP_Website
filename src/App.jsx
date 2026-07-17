import React, { useEffect, useState } from "react";
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

const phone = "6361702540";
const email = "svcuriotech@gmail.com";
const leadEmail = "svcuriotech@gmail.com";
const leadCopyEmail = "sidramareddy432@gmail.com";

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
        <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/courses">SAP courses</Link><Link to="/sap-training-in-yeshwanthpur">SAP training in Yeshwanthpur</Link><Link to="/placements">Placement support</Link><Link to="/contact">Contact us</Link></div>
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
const submissionTimeoutMs = 15000;

function submitFormSubmit(action, fields) {
  return new Promise((resolve, reject) => {
    const frameName = `formsubmit-frame-${Date.now()}`;
    const iframe = document.createElement("iframe");
    const formElement = document.createElement("form");
    let settled = false;
    let timeout;

    const cleanup = () => {
      window.clearTimeout(timeout);
      iframe.remove();
      formElement.remove();
    };

    const finish = () => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve({ ok: true });
    };

    iframe.name = frameName;
    iframe.style.display = "none";
    iframe.addEventListener("load", finish);

    formElement.method = "POST";
    formElement.action = action.replace("/ajax/", "/");
    formElement.target = frameName;
    formElement.style.display = "none";

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value || "");
      formElement.appendChild(input);
    });

    timeout = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new DOMException("FormSubmit timed out", "AbortError"));
    }, submissionTimeoutMs);

    document.body.append(iframe, formElement);
    formElement.submit();
  });
}

function LeadForm({ compact = false, variant = "registration", defaultCourse = "" }) {
  const [sent, setSent] = useState(false);
  const [localOnly, setLocalOnly] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const initialForm = variant === "course-info" ? { ...emptyRegistration, course: defaultCourse } : emptyRegistration;
  const [form, setForm] = useState(initialForm);
  const configuredWebhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
  const submissionUrl = configuredWebhookUrl || `https://formsubmit.co/ajax/${leadEmail}`;

  useEffect(() => {
    setForm(variant === "course-info" ? { ...emptyRegistration, course: defaultCourse } : emptyRegistration);
  }, [defaultCourse, variant]);

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
      const isGoogleAppsScript = submissionUrl.includes("script.google.com");
      const isFormSubmit = submissionUrl.includes("formsubmit.co");
      const formSubmitPayload = new URLSearchParams({
        name: form.name,
        email: form.email,
        phone: form.phone,
        course: form.course || "",
        requestType: variant,
        source: window.location.href,
        _replyto: form.email,
        _subject: payload._subject,
        _template: "table",
        _captcha: "false",
        _cc: leadCopyEmail,
      });

      if (isFormSubmit) {
        await submitFormSubmit(submissionUrl, Object.fromEntries(formSubmitPayload));
        setSent(true);
        setForm(initialForm);
        return;
      }

      const controller = new AbortController();
      requestTimeout = window.setTimeout(() => controller.abort(), submissionTimeoutMs);
      const response = await fetch(submissionUrl, {
        method: "POST",
        ...(isGoogleAppsScript ? { mode: "no-cors" } : {}),
        signal: controller.signal,
        headers: isGoogleAppsScript
          ? { "Content-Type": "text/plain;charset=utf-8" }
          : { Accept: "application/json" },
        body: isFormSubmit ? formSubmitPayload : JSON.stringify(payload),
      });
      if (!isGoogleAppsScript) {
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.ok === false || result.success === false || result.success === "false") {
          throw new Error(result.error || "Submission service rejected the request");
        }
        setLocalOnly(Boolean(result.local));
      }
      setSent(true);
      setForm(initialForm);
    } catch (submissionError) {
      console.error("Lead submission failed", submissionError);
      setError(submissionError.name === "AbortError" ? "The mail service is taking too long. Please try again or contact us on WhatsApp." : "We couldn't send your registration. Please try again or contact us on WhatsApp.");
    } finally {
      if (requestTimeout) window.clearTimeout(requestTimeout);
      setSending(false);
    }
  };

  if (compact) return <Link className="button form-button" to="/contact#registration">Register Here <ArrowRight size={18} /></Link>;
  if (sent) return <div className="form-success"><span><Check /></span><h3>{variant === "course-info" ? "Request received!" : "Thank you for registering!"}</h3><p>{localOnly ? "Saved locally for testing. Add LEAD_WEBHOOK_URL to send real emails." : "We have emailed you a confirmation. Our admissions team will contact you shortly."}</p><button className="text-button" onClick={() => setSent(false)}>{variant === "course-info" ? "Submit another request" : "Submit another registration"}</button></div>;

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
  return (
    <Layout>
      <Hero />
      <section className="logo-strip"><div className="container"><span>Skills built for careers at leading enterprises</span><div><b>accenture</b><b>IBM</b><b>Capgemini</b><b>cognizant</b><b>Infosys</b><b>TCS</b></div></div></section>
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
      <section className="section journey-section"><div className="container"><SectionTitle light eyebrow="Your learning journey" title="From curious beginner to confident consultant" text="A structured path that keeps you moving—with guidance at every important step." /><div className="journey-grid">
        {[["01","Discover","Choose the right SAP path with a free career consultation."],["02","Learn","Build strong foundations through expert-led interactive sessions."],["03","Apply","Solve assignments and complete realistic end-to-end projects."],["04","Launch","Sharpen your profile, practice interviews, and pursue opportunities."]].map((x,i)=><div key={x[0]} className="journey-card"><span>{x[0]}</span><div className="journey-icon">{[<MessageCircle/>,<BookOpen/>,<Target/>,<Rocket/>][i]}</div><h3>{x[1]}</h3><p>{x[2]}</p>{i<3 && <ArrowRight className="journey-arrow"/>}</div>)}
      </div></div></section>
      <section className="section testimonials-section"><div className="container"><SectionTitle eyebrow="Student stories" title="Real learning. Real momentum." text="Meet professionals who used practical SAP skills to take the next step in their careers." /><div className="testimonial-grid">{testimonials.map(t=><article className="testimonial" key={t.name}><div className="quote-mark">“</div><div className="stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div><p>{t.quote}</p><div className="student"><span>{t.initials}</span><div><strong>{t.name}</strong><small>{t.role} • {t.company}</small></div></div></article>)}</div></div></section>
      <section className="section demo-section"><div className="container demo-wrap"><div className="demo-copy"><span className="eyebrow light"><Sparkles size={15}/> Your next move starts here</span><h2>Start with one<br />simple conversation.</h2><p>Share just your name, email, and phone number. Our admissions team will contact you to understand your goals and explain the right course, schedule, and admission process.</p><div className="demo-points"><span><Check/> Quick registration</span><span><Check/> Personal course guidance</span><span><Check/> Admission support</span></div></div><div className="demo-form-card"><h3>Ready to learn SAP?</h3><p>Register now and our admissions team will contact you.</p><LeadForm compact /></div></div></section>
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

function SapTrainingYeshwanthpur() {
  usePageSeo({
    title: "Best SAP Training in Yeshwanthpur | SV CurioTech",
    description: "Join SV CurioTech for SAP training in Yeshwanthpur, Bangalore with live projects, practical SAP modules, flexible batches and placement assistance.",
    keywords: "SAP training in Yeshwanthpur, best SAP training institute in Yeshwanthpur, SAP course Bangalore, SAP MM training Yeshwanthpur, SAP FICO training Yeshwanthpur",
    canonical: "https://www.svcuriotech.com/sap-training-in-yeshwanthpur",
  });

  const yeshModules = [
    ["SAP MM", "Materials Management training for procurement, inventory, purchase orders, vendor master and material master processes.", "/courses/sap-mm"],
    ["SAP FICO", "Finance and controlling training for accounting, reporting, cost centers, profit centers and financial business processes.", "/courses/sap-fico"],
    ["SAP SD", "Sales and Distribution training focused on order-to-cash, pricing, billing, customer master and delivery processes.", "/courses/sap-sd"],
    ["SAP ABAP", "Technical SAP programming training covering reports, forms, debugging, data dictionary and development basics.", "/courses/sap-abap"],
    ["SAP PP", "Production Planning training for manufacturing, planning, MRP, capacity and shop floor business scenarios.", "/courses/sap-pp"],
    ["SAP Ariba", "Procurement and supplier collaboration training for sourcing, buying, invoicing and modern supply chain workflows.", "/courses/sap-ariba"],
  ];

  const faqs = [
    ["Who can join SAP training in Yeshwanthpur?", "Freshers, graduates, MBA students, commerce students, engineers and working professionals can join. Our team helps you choose a module based on your background and career goal."],
    ["Do you provide practical SAP training?", "Yes. Classes include business scenarios, assignments, case discussions, guided practice and project-style learning so you understand how SAP is used in companies."],
    ["Is placement assistance included?", "Learners receive CV guidance, interview preparation, project explanation support and career opportunity guidance as part of the program."],
    ["Are weekday and weekend batches available?", "Yes. Batch options depend on current availability, and our admissions team can guide you on weekday, weekend, online and classroom schedules."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in Yeshwanthpur",
    description: "Practical SAP training in Yeshwanthpur, Bangalore with live projects, module-focused learning and placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: "Yeshwanthpur, Bangalore",
    courseMode: ["Classroom", "Online"],
  };

  return <Layout>
    <section className="seo-hero">
      <div className="container seo-hero-grid">
        <div className="seo-hero-copy">
          <span className="eyebrow light"><MapPin size={15}/> Yeshwanthpur SAP academy</span>
          <h1>Best SAP Training in Yeshwanthpur</h1>
          <p>Build practical SAP skills with SV CurioTech through instructor-led classes, live business examples, module-focused learning and career support for SAP roles in Bangalore and beyond.</p>
          <div className="hero-actions"><Link className="button" to="/contact#registration">Get More Information <ArrowRight size={18}/></Link><Link className="button button-ghost light-ghost" to="/courses">Explore SAP Courses</Link></div>
        </div>
        <div className="seo-hero-media">
          <img src="/assets/sap-training-hero.png" alt="SAP Training in Yeshwanthpur" />
        </div>
      </div>
    </section>

    <section className="section seo-intro">
      <div className="container split">
        <div>
          <SectionTitle eyebrow="Practical SAP course" title="Industry-oriented SAP training for real career growth" />
          <p className="large-copy">If you are searching for SAP training in Yeshwanthpur, SV CurioTech helps you move beyond theory and understand how SAP is used in real business processes.</p>
        </div>
        <div className="seo-rich-text">
          <p>SAP is used by companies across manufacturing, finance, logistics, retail, health care, IT services and enterprise consulting. That is why learners need more than definitions and menu paths. They need guided practice, process understanding and the confidence to explain business scenarios in interviews.</p>
          <p>Our SAP courses are designed for freshers, job seekers and working professionals who want structured training with practical examples. You can learn modules such as SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP PP, SAP Ariba and other career-focused SAP tracks based on your education and goals.</p>
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="Popular SAP modules" title="Choose the SAP module that matches your career path" text="Start with the right module, then build skills through examples, assignments and guided project discussions." />
        <div className="seo-module-grid">
          {yeshModules.map(([title, text, link]) => <Link className="seo-module-card" key={title} to={link}><strong>{title}</strong><p>{text}</p><span>View course <ArrowRight size={15}/></span></Link>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container seo-content-grid">
        <article>
          <span className="eyebrow"><BookOpen size={14}/> Course overview</span>
          <h2>Learn SAP with business process clarity</h2>
          <p>SV CurioTech focuses on practical SAP learning. In each module, learners understand the purpose of the process, the master data involved, the transaction flow and the type of questions that appear in interviews. This helps students connect concepts to real work instead of memorizing isolated steps.</p>
          <p>The training is suitable for beginners who need a clear foundation and for professionals who want to upskill into SAP consultant, support, end-user or analyst roles. Our trainers explain topics patiently, connect them to industry examples and help learners practice consistently.</p>
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

    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Why choose us" title="A learning experience built around practice and confidence" />
        <div className="benefit-grid">
          <div className="benefit-card"><span><Users/></span><h3>Experienced trainers</h3><p>Learn from mentors who explain SAP concepts with real business context and interview-focused clarity.</p></div>
          <div className="benefit-card"><span><BriefcaseBusiness/></span><h3>Live project approach</h3><p>Understand process flows through assignments, scenarios and guided project-style learning.</p></div>
          <div className="benefit-card"><span><CalendarCheck/></span><h3>Flexible batches</h3><p>Choose practical weekday, weekend, online or classroom options based on current batch availability.</p></div>
          <div className="benefit-card"><span><ShieldCheck/></span><h3>Career support</h3><p>Get help with resumes, mock interviews, project explanation and opportunity guidance.</p></div>
          <div className="benefit-card"><span><MapPin/></span><h3>Yeshwanthpur focus</h3><p>Local learners in and around Yeshwanthpur can access SAP guidance with a Bangalore career focus.</p></div>
          <div className="benefit-card"><span><Headphones/></span><h3>Admission guidance</h3><p>Talk to us before enrolling so you can choose a module that fits your education and goals.</p></div>
        </div>
      </div>
    </section>

    <section className="section soft-section">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title="Questions about SAP training in Yeshwanthpur" />
        <div className="faq-grid">
          {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>

    <section className="cta-band" id="yesh-contact">
      <div className="container">
        <div><span className="eyebrow light"><Sparkles size={15}/> Start learning SAP</span><h2>Enquire for SAP training in Yeshwanthpur</h2><p>Speak with SV CurioTech to choose the right SAP module, batch timing and career path.</p></div>
        <Link className="button" to="/contact#registration">Register for course guidance <ArrowRight size={18}/></Link>
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
          <div className="hero-actions"><Link className="button" to="/contact#registration">Enquire for {page.module} <ArrowRight size={18}/></Link><a className="button button-ghost light-ghost" href={`tel:+91${phone}`}><Phone size={17}/> Call Now</a></div>
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
        <Link className="button" to="/contact#registration">Register for course guidance <ArrowRight size={18}/></Link>
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
  return <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/courses" element={<Courses/>}/><Route path="/courses/:slug" element={<CourseDetail/>}/><Route path="/sap-training-in-yeshwanthpur" element={<SapTrainingYeshwanthpur/>}/><Route path="/sap-training-in-yeshwanthpur.html" element={<SapTrainingYeshwanthpur/>}/>{yeshwanthpurCoursePages.map((page) => <Route key={page.slug} path={`/${page.slug}`} element={<YeshwanthpurCoursePage page={page}/>}/>) }<Route path="/placements" element={<Placements/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes>;
}
