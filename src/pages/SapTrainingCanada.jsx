import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  GraduationCap,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import "./SapCoursePlacementBangalore.css";

export default function SapTrainingCanada({ usePageSeo, phone, email, LeadForm }) {
  usePageSeo({
    title: "SAP Training in Canada | Online SAP Courses | SV CurioTech",
    description: "Join the best SAP Training in Canada with SV CurioTech. Learn SAP FICO, MM, SD, ABAP, BASIS, PP, SuccessFactors & S/4HANA with placement assistance.",
    keywords: "SAP Training in Canada, SAP Course in Canada, SAP Online Training Canada, SAP FICO Training Canada, SAP MM Training Canada, SAP SD Training Canada, SAP ABAP Training Canada, SAP S/4HANA Training Canada",
    canonical: "https://www.svcuriotech.com/sap-training-in-canada",
  });

  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  const courseModules = [
    ["SAP FICO Training", "Financial Accounting, Controlling, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Center Accounting and reporting.", "/courses/sap-fico", "Best suited for B.Com, M.Com, MBA Finance, CAs and accounting professionals."],
    ["SAP MM Training", "Procurement, purchasing, inventory management, material master, vendor management and warehousing operations.", "/courses/sap-mm", "Best suited for supply chain, procurement and logistics professionals."],
    ["SAP SD Training", "Sales order processing, shipping, billing, pricing and customer management through the order-to-cash cycle.", "/courses/sap-sd", "Best suited for marketing, sales and customer service professionals."],
    ["SAP PP Training", "Production planning, manufacturing execution, MRP, BOM, routing and shop floor management.", "/courses/sap-pp", "Best suited for engineering, industrial and production professionals."],
    ["SAP ABAP Training", "Custom SAP applications, reports, interfaces, enhancements, forms and workflows.", "/courses/sap-abap", "Best suited for IT learners and professionals who want a technical SAP path."],
    ["SAP SuccessFactors", "Cloud HCM concepts including Employee Central, Performance Management, Recruitment, Workforce Planning and Payroll processes.", "/courses/successfactors", "Best suited for HR professionals and learners targeting cloud HCM careers."],
  ];

  const trainingIncludes = [
    ["Live online instructor-led courses", "Attend interactive SAP classes from Canada with trainer guidance, doubt clearing and structured module-wise learning."],
    ["SAP S/4HANA server access", "Practice transactions, configuration steps and business flows on a real SAP system instead of only watching theory."],
    ["Real-time business scenarios", "Understand how SAP is used in finance, procurement, sales, production, HR and enterprise support teams."],
    ["Practical hands-on exercises", "Work through assignments that help you remember the process and explain it clearly in interviews."],
    ["End-to-end business process training", "Learn how modules connect across procure-to-pay, order-to-cash, record-to-report and manufacturing workflows."],
    ["Interview preparation", "Prepare for functional, technical, scenario-based and HR questions with guided practice."],
    ["Resume help", "Present SAP skills, projects and domain background in a recruiter-friendly format."],
    ["Practice interviews", "Build confidence through mock interviews and feedback before applying for SAP roles."],
    ["Placement support", "Get job search guidance, profile improvement support and role-readiness mentoring."],
    ["Flexible weekend and weekday batches", "Choose learning schedules designed for students, freshers and working professionals in Canada."],
    ["Past recordings for revision", "Revise important topics after class and revisit complex concepts at your own pace."],
  ];

  const aboutHighlights = [
    ["Started in 2020", "SV CurioTech has been helping learners build practical SAP skills since 2020."],
    ["Career-first training", "Courses are designed around skills learners can use in projects, interviews and real SAP work."],
    ["Beginner-friendly mentoring", "We guide learners from fundamentals to practical confidence with patient, step-by-step support."],
    ["Real project exposure", "Learners practice business flows, assignments and project explanations that are useful during interviews."],
    ["Online learning support", "Canada learners can attend live classes, revise recordings and ask doubts without relocating."],
    ["Module guidance", "Our team helps learners choose suitable SAP modules based on education, experience and career goals."],
  ];

  const learningApproach = [
    "Interactive live classes",
    "Practical assignments",
    "Business case studies",
    "SAP system practice",
    "Module integration concepts",
    "Project-based learning",
    "Mentorship program",
    "Placement program",
  ];

  const careerSupport = [
    "Resume optimization",
    "LinkedIn profile creation",
    "Mock interviews",
    "Technical interview questions",
    "HR interview preparation",
    "Career counselling",
    "Job assistance",
  ];

  const eligibleLearners = [
    "Students",
    "Recent college graduates",
    "Working professionals",
    "Accountants",
    "Supply chain experts",
    "HR professionals",
    "Engineers",
    "MBA graduates",
    "Career change professionals",
    "IT professionals",
  ];

  const faqs = [
    ["Is this a beginner's course?", "Yes. The course starts with basics and then moves into more advanced SAP topics and business scenarios."],
    ["Will I get SAP server access?", "Yes. Students receive SAP server access for hands-on practice during training."],
    ["Are the sessions live?", "Yes. Classes are live online instructor-led sessions with flexible weekday and weekend batch options."],
    ["Will I get a certification on completion?", "Yes. A course completion certificate is awarded after successful completion of the training."],
    ["Do you have placement facilities?", "Yes. SV CurioTech offers resume guidance, mock interviews, interview preparation and placement assistance."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in Canada",
    description: "Online SAP training in Canada from SV CurioTech covering SAP FICO, MM, SD, ABAP, BASIS, PP, SuccessFactors and S/4HANA with placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: "Canada",
    courseMode: "Online",
  };

  return <>
    <div className="placement-page">
      <header className="placement-nav">
        <div className="placement-top-contact">
          <div className="container placement-top-contact-inner">
            <div className="placement-top-links">
              {phoneNumbers.map((number) => <a key={number} href={`tel:+91${number}`}><Phone size={14}/> +91 {number}</a>)}
              <a href={`mailto:${email}`}><Mail size={14}/> {email}</a>
            </div>
          </div>
        </div>
        <div className="container placement-nav-inner">
          <Link className="placement-brand" to="/" aria-label="SV CurioTech home">
            <img src="/assets/sv-curiotech-mark.png" alt="" />
            <span><strong>SV CurioTech</strong><small>SAP Online Training Canada</small></span>
          </Link>
          <nav>
            <a href="#about-us">About Us</a>
            <a href="#why-canada">Why Canada</a>
            <a href="#sap-modules">SAP Courses</a>
            <a href="#support">Placement Help</a>
            <a href="#faq">FAQ</a>
            <a className="placement-nav-call" href={`tel:+91${phone}`}><Phone size={15}/> Call Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="placement-hero-v2">
          <div className="container placement-hero-v2-grid">
            <div className="placement-hero-v2-copy">
              <span className="placement-pill"><GraduationCap size={16}/> SAP Training in Canada</span>
              <h1>SAP Course in Canada</h1>
              <p>Build a career in SAP with live online training from SV CurioTech. Learn on an actual SAP server through hands-on practice, real-world business cases, interview preparation and placement assistance.</p>
              <div className="placement-trust-row">
                <span><Star size={15} fill="currentColor"/> Live online classes</span>
                <span><Users size={15}/> Beginner-friendly</span>
                <span><BriefcaseBusiness size={15}/> Placement assistance</span>
                <span><CalendarCheck size={15}/> Weekend & weekday batches</span>
              </div>
              <div className="placement-hero-actions">
                <a className="button" href="#enquiry">Enquire Now <ArrowRight size={18}/></a>
                <a className="placement-outline-btn" href={`tel:+91${phone}`}><Phone size={17}/> Talk to Advisor</a>
              </div>
            </div>
            <aside className="placement-enquiry-panel" id="enquiry">
              <span className="panel-label">Quick enquiry</span>
              <h2>Get Canada SAP course details</h2>
              <p>Share your details to get course guidance, batch timing, fees, syllabus and placement support information.</p>
              <LeadForm variant="course-info" defaultCourse="SAP Training in Canada" />
            </aside>
          </div>
        </section>

        <section className="placement-stats-strip">
          <div className="container">
            <div><strong>Live</strong><span>Online training</span></div>
            <div><strong>S/4HANA</strong><span>Server practice</span></div>
            <div><strong>8+</strong><span>SAP modules</span></div>
            <div><strong>1:1</strong><span>Career guidance</span></div>
          </div>
        </section>

        <section className="placement-about-section" id="about-us">
          <div className="container placement-about-grid">
            <div className="placement-section-heading left">
              <span><Sparkles size={15}/> About Us</span>
              <h2>SV CurioTech started in 2020 to make SAP learning practical</h2>
              <p>SV CurioTech is a career-focused SAP training institute started in 2020 with the goal of helping students, graduates and working professionals learn SAP through real business examples, live mentoring and hands-on system practice.</p>
              <p>Our courses are built for learners who want more than recorded lessons. We focus on SAP concepts, configuration practice, business process understanding, interview preparation and placement guidance so every learner can move toward SAP roles with confidence.</p>
              <p>From the beginning, our training approach has been simple: teach SAP the way it is used in companies. Learners work with practical examples from finance, procurement, sales, production, HR and enterprise support so they understand not only the screen steps, but also the business reason behind each process.</p>
              <p>For learners in Canada, SV CurioTech offers flexible online SAP training with live instructor-led sessions, SAP server access, recordings for revision and personal guidance. Whether you are a fresher, a working professional, a career changer or someone restarting after a gap, our team helps you select the right SAP module and prepare steadily for opportunities.</p>
            </div>
            <div className="placement-about-points">
              {aboutHighlights.map(([title, text]) => <div key={title}><BadgeCheck/><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </section>

        <section className="placement-about-section" id="why-canada">
          <div className="container placement-about-grid">
            <div className="placement-section-heading left">
              <span><Sparkles size={15}/> SAP Online Training & Placement Help</span>
              <h2>Practical SAP training for learners in Canada</h2>
              <p>At SV CurioTech, our SAP online training courses in Canada are tailored for students, recent graduates and professionals who want practical SAP skills for enterprise careers.</p>
              <p>Canadian companies use SAP S/4HANA for finance, procurement, manufacturing, supply chain and HR processes. That creates steady demand for SAP consultants who understand both configuration and business workflows.</p>
            </div>
            <div className="placement-about-points">
              <div><GraduationCap/><strong>Experienced SAP consultants</strong><span>Training is led by mentors with real implementation and support project experience.</span></div>
              <div><BookOpen/><strong>Hands-on SAP learning</strong><span>Practice on SAP systems with assignments, case studies and end-to-end process training.</span></div>
              <div><ShieldCheck/><strong>Career-focused support</strong><span>Get interview preparation, resume help, mock interviews and placement support.</span></div>
            </div>
          </div>
        </section>

        <section className="placement-why-section">
          <div className="container placement-section-heading">
            <span><BadgeCheck size={15}/> Why choose SV CurioTech</span>
            <h2>Why join our SAP courses</h2>
            <p>Our courses are designed to help learners in Canada gain practical SAP knowledge, build confidence with business scenarios and prepare for SAP job opportunities.</p>
          </div>
          <div className="container placement-benefit-grid">
            {trainingIncludes.map(([title, text]) => <article key={title}><BadgeCheck/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="placement-modules-v2" id="sap-modules">
          <div className="container placement-section-heading">
            <span><GraduationCap size={15}/> SAP courses we offer</span>
            <h2>Choose the SAP course that suits your career plan</h2>
          </div>
          <div className="container placement-module-card-grid">
            {courseModules.map(([title, text, link, fit]) => <Link className="placement-module-card-v2" key={title} to={link}><span>{title.includes("FICO") ? <Landmark/> : title.includes("MM") ? <Boxes/> : <BookOpen/>}</span><h3>{title}</h3><p>{text}</p><small>{fit}</small><b>View course <ArrowRight size={15}/></b></Link>)}
          </div>
        </section>

        <section className="placement-roadmap-v2" id="support">
          <div className="container placement-roadmap-v2-grid">
            <div className="placement-section-heading left">
              <span><Target size={15}/> Our learning approach</span>
              <h2>Exposure, practice and career preparation</h2>
              <p>SV CurioTech keeps the learning practical with live classes, SAP system practice, business case studies, mentorship and placement guidance.</p>
            </div>
            <div className="placement-step-list">
              {learningApproach.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item}</h3><p>Each step helps learners connect SAP module concepts with real-world business usage.</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="placement-testimonial-section">
          <div className="container placement-section-heading">
            <span><Users size={15}/> Who can attend</span>
            <h2>Designed for students, graduates and working professionals</h2>
          </div>
          <div className="container placement-review-grid">
            {eligibleLearners.slice(0, 6).map((item) => <article key={item}><div className="review-stars"><Check size={16}/></div><p>{item} can start with suitable beginner-level SAP modules. Previous SAP experience is not needed for many foundation courses.</p><div><strong>{item}</strong><span>Eligible learner</span></div></article>)}
          </div>
        </section>

        <section className="placement-why-section">
          <div className="container placement-section-heading">
            <span><BriefcaseBusiness size={15}/> Placement program</span>
            <h2>SAP career support after training</h2>
          </div>
          <div className="container placement-benefit-grid">
            {careerSupport.map((item) => <article key={item}><BriefcaseBusiness/><h3>{item}</h3><p>Career support helps learners prepare profiles, interviews and job conversations with confidence.</p></article>)}
          </div>
        </section>

        <section className="placement-faq-v2" id="faq">
          <div className="container placement-section-heading">
            <span><MessageCircle size={15}/> FAQ</span>
            <h2>SAP Training in Canada questions</h2>
          </div>
          <div className="container placement-faq-list-v2">
            {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
          </div>
        </section>

        <section className="placement-final-cta">
          <div className="container">
            <h2>Start SAP Training in Canada with SV CurioTech</h2>
            <p>Get module guidance, online batch timing, SAP server access details, fees and placement assistance information.</p>
            <div><a className="button" href="#enquiry">Enquire Now <ArrowRight size={18}/></a><a href={`mailto:${email}`}><Mail size={16}/> {email}</a></div>
          </div>
        </section>
      </main>

      <a className="placement-whatsapp" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20Training%20in%20Canada.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
      <footer className="placement-contact-footer">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="placement-contact-list">
            <a href={`tel:+91${phone}`}><Phone size={17}/> Phone: +91 {phone}</a>
            <a href={`mailto:${email}`}><Mail size={17}/> Email: {email}</a>
            <a href="https://www.svcuriotech.com" target="_blank" rel="noreferrer">Website: www.svcuriotech.com</a>
            <span>Online SAP Training for Canada</span>
          </div>
          <p>Join SV CurioTech for SAP online training in Canada with practical learning and placement help.</p>
        </div>
      </footer>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
