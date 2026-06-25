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
            <Link className="button button-sm" to="/contact#registration">Register Here <ArrowRight size={16} /></Link>
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
        <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/courses">SAP courses</Link><Link to="/placements">Placement support</Link><Link to="/contact">Contact us</Link></div>
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
          <span className="hero-pill"><span>●</span> Bengaluru's career-focused SAP academy</span>
          <h1>Bengaluru’s Best<br /><span>SAP Training.</span></h1>
          <p>Move beyond theory with expert-led training, live business scenarios, and career support designed to make you industry-ready.</p>
          <div className="hero-actions"><Link className="button" to="/contact#registration">Register Here <ArrowRight size={18} /></Link><Link className="button button-ghost" to="/courses"><Play size={17} fill="currentColor" /> Explore courses</Link></div>
          <div className="trust-row"><div className="avatars"><span>PS</span><span>KR</span><span>AM</span><span>+</span></div><div><div className="stars">{[1,2,3,4,5].map(x => <Star key={x} size={15} fill="currentColor" />)}</div><small>Loved by aspiring SAP professionals</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="hero-card main-card">
            <div className="card-top"><span>YOUR SAP CAREER PATH</span><span className="live-dot">LIVE</span></div>
            <div className="career-path">
              <div className="path-step active"><span><BookOpen /></span><div><small>STEP 01</small><strong>Learn with experts</strong></div><Check /></div>
              <div className="path-line" />
              <div className="path-step active"><span><BriefcaseBusiness /></span><div><small>STEP 02</small><strong>Practice live projects</strong></div><Check /></div>
              <div className="path-line" />
              <div className="path-step"><span><Rocket /></span><div><small>STEP 03</small><strong>Launch your career</strong></div><ArrowRight /></div>
            </div>
            <div className="progress-box"><div><span>Career readiness</span><strong>92%</strong></div><div className="progress"><i /></div></div>
          </div>
          <div className="float-card float-one"><span><Users /></span><div><strong>Mentor-led</strong><small>Personal guidance</small></div></div>
          <div className="float-card float-two"><span><CalendarCheck /></span><div><strong>Flexible batches</strong><small>Online & classroom</small></div></div>
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

function LeadForm({ compact = false }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyRegistration);
  const configuredWebhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
  const submissionUrl = configuredWebhookUrl || "https://formsubmit.co/ajax/svcuriotech@gmail.com";

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const isGoogleAppsScript = submissionUrl.includes("script.google.com");
      const response = await fetch(submissionUrl, {
        method: "POST",
        ...(isGoogleAppsScript ? { mode: "no-cors" } : {}),
        headers: {
          "Content-Type": isGoogleAppsScript ? "text/plain;charset=utf-8" : "application/json",
          ...(!isGoogleAppsScript ? { Accept: "application/json" } : {}),
        },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `New website registration - ${form.name}`,
          _template: "table",
          _autoresponse: `Dear ${form.name},

Thank you for registering with SV CurioTech.

We have received your details successfully. A member of our admissions team will contact you shortly to understand your learning goals and guide you through the suitable SAP course, schedule, and admission process.

If you need immediate assistance, please call us at +91 ${phone} or email ${email}.

Warm regards,
Admissions Team
SV CurioTech
Innovating Education Through Technology`,
          source: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!isGoogleAppsScript && !response.ok) throw new Error("Submission service rejected the request");
      setSent(true);
      setForm(emptyRegistration);
    } catch {
      setError("We couldn't send your registration. Please try again or contact us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  if (compact) return <Link className="button form-button" to="/contact#registration">Register Here <ArrowRight size={18} /></Link>;
  if (sent) return <div className="form-success"><span><Check /></span><h3>Thank you for registering!</h3><p>We have emailed you a confirmation. Our admissions team will contact you shortly.</p><button className="text-button" onClick={() => setSent(false)}>Submit another registration</button></div>;

  return <form className="lead-form" onSubmit={submit}>
    <label><span>Full name *</span><input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your full name" /></label>
    <label><span>Email address *</span><input name="email" value={form.email} onChange={update} required type="email" autoComplete="email" placeholder="you@email.com" /></label>
    <label><span>Phone number *</span><input name="phone" value={form.phone} onChange={update} required type="tel" autoComplete="tel" pattern="[0-9+() -]{10,18}" placeholder="+91 98765 43210" /></label>
    {error && <div className="form-error">{error}</div>}
    <button className="button form-button" disabled={sending}>{sending ? "Submitting..." : "Submit Registration"} {!sending && <ArrowRight size={18} />}</button>
    <small><Check size={13} /> We’ll use these details only to contact you about admission.</small>
  </form>;
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
  const course = courses.find(c => c.slug === slug);
  if (!course) return <Layout><PageHero eyebrow="Course not found" title="Let's get you back on track" text="Explore our available SAP learning paths."/></Layout>;
  const Icon = course.icon;
  return <Layout>
    <section className="course-hero" style={{"--course":course.color}}><div className="container course-hero-grid"><div><span className="eyebrow light"><Icon size={15}/>{course.subtitle}</span><h1>Become confident in<br/><span>{course.title}</span></h1><p>{course.description}</p><div className="hero-actions"><Link className="button" to="/contact#registration">Register Here <ArrowRight size={18}/></Link><a className="button button-ghost light-ghost" href={`tel:+91${phone}`}><Phone size={17}/> Talk to an advisor</a></div></div><div className="course-summary"><div className="course-big-icon"><Icon/></div><h3>{course.title} Program</h3><div><span><Clock3/> Duration</span><strong>{course.duration}</strong></div><div><span><Users/> Level</span><strong>{course.level}</strong></div><div><span><GraduationCap/> Format</span><strong>Live instructor-led</strong></div></div></div></section>
    <CourseSchedule course={course}/>
    <section className="section"><div className="container detail-layout"><div><SectionTitle eyebrow="What you'll master" title="A practical, job-aligned curriculum" text="Build understanding step by step, then apply it to realistic enterprise scenarios."/><div className="topic-grid">{course.topics.map((t,i)=><div key={t}><span>{String(i+1).padStart(2,"0")}</span><strong>{t}</strong><Check/></div>)}</div><div className="project-callout"><span><BriefcaseBusiness/></span><div><small>CAPSTONE EXPERIENCE</small><h3>Complete an end-to-end business project</h3><p>Bring the module together through a guided project you can discuss confidently during interviews.</p></div></div></div><aside className="enquiry-card"><span className="eyebrow"><Sparkles size={14}/> Upcoming batches</span><h3>Ready to explore {course.title}?</h3><p>Share your details and we'll call you with batch schedules, syllabus, and fee information.</p><LeadForm compact/></aside></div></section>
  </Layout>;
}

function Placements() {
  return <Layout><PageHero eyebrow="Career support" title="Skills get you ready. Preparation gets you noticed." text="Structured support to help you communicate your SAP knowledge with clarity and pursue opportunities confidently."/>
    <section className="section"><div className="container"><SectionTitle eyebrow="Placement preparation" title="Support for every part of your job search"/><div className="placement-steps">{[["01","Profile building","Present your experience, projects, and SAP skills through a focused, recruiter-friendly CV."],["02","Interview preparation","Practice functional, technical, scenario-based, and HR questions with useful feedback."],["03","Opportunity guidance","Understand role expectations, suitable openings, and how to approach applications strategically."],["04","Continued mentoring","Get guidance as you revise concepts, attend interviews, and refine your approach."]].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>
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
  return <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/courses" element={<Courses/>}/><Route path="/courses/:slug" element={<CourseDetail/>}/><Route path="/placements" element={<Placements/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes>;
}
