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
  Code2,
  Factory,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import SampleTestimonials from "../components/SampleTestimonials";
import StudentFeedbackVideos from "../components/StudentFeedbackVideos";
import "./SapTrainingCanada.css";

export default function SapTrainingCanada({ usePageSeo, phone, email, LeadForm }) {
  const canonical = "https://www.svcuriotech.com/sap-course-in-canada";
  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  usePageSeo({
    title: "SAP Course in Canada | Online SAP Training & Certification Guidance",
    description:
      "Learn SAP in Canada with live online SAP training, S/4HANA practice, real-time projects, expert guidance, interview preparation and career-focused SAP modules.",
    keywords:
      "SAP Course in Canada, SAP Training in Canada, SAP Courses in Canada, SAP Certification in Canada, SAP S/4HANA Course in Canada, SAP Online Course Canada, SAP FICO Course in Canada, SAP MM Course in Canada, SAP SD Course in Canada, SAP ABAP Course in Canada",
    canonical,
    geo: null,
  });

  const modules = [
    {
      icon: Landmark,
      title: "SAP FICO Course in Canada",
      fit: "Accounting, finance, commerce and MBA finance learners",
      href: "/courses/sap-fico",
      text: "Learn financial accounting, controlling, general ledger, accounts payable, accounts receivable, asset accounting, cost centers, profit centers and reporting with business examples.",
    },
    {
      icon: Boxes,
      title: "SAP MM Course in Canada",
      fit: "Procurement, logistics, inventory and supply chain backgrounds",
      href: "/courses/sap-mm",
      text: "Study procure-to-pay, purchasing, vendor master, material master, goods movement, inventory management, invoice verification and materials planning.",
    },
    {
      icon: BookOpen,
      title: "SAP SD Course in Canada",
      fit: "Sales operations, logistics, distribution and customer process roles",
      href: "/courses/sap-sd",
      text: "Understand order-to-cash, sales orders, pricing, delivery, shipping, billing, customer master data and sales integration with finance and materials.",
    },
    {
      icon: Factory,
      title: "SAP PP Course in Canada",
      fit: "Manufacturing, engineering, plant and production professionals",
      href: "/courses/sap-pp",
      text: "Build clarity on production planning, MRP, BOM, routing, work centers, capacity planning, production orders and shop-floor business processes.",
    },
    {
      icon: Code2,
      title: "SAP ABAP Course in Canada",
      fit: "IT learners, developers and technical SAP career paths",
      href: "/courses/sap-abap",
      text: "Learn ABAP programming, data dictionary, reports, debugging, enhancements, forms, interfaces and development concepts used in SAP environments.",
    },
    {
      icon: Users,
      title: "SAP SuccessFactors Course",
      fit: "HR graduates, recruiters and HR operations professionals",
      href: "/courses/successfactors",
      text: "Explore Employee Central, recruitment, onboarding, performance, compensation, workforce data and cloud HCM process understanding.",
    },
  ];

  const outcomes = [
    ["SAP basics and navigation", "Start with ERP concepts, SAP terminology, screen flow and business process fundamentals."],
    ["SAP S/4HANA awareness", "Understand how modern SAP landscapes support finance, procurement, sales, HR and operations."],
    ["Module configuration concepts", "Learn module-specific setup ideas and how they connect with real business requirements."],
    ["Master data and transactions", "Practice the core records and daily activities used by SAP users and consultants."],
    ["Integration between modules", "See how FICO, MM, SD, PP, HR and technical areas exchange data inside enterprise workflows."],
    ["Real-time project scenarios", "Prepare to explain practical examples, testing steps, support issues and implementation-style work."],
  ];

  const industries = [
    "Manufacturing",
    "Retail",
    "Banking",
    "Healthcare",
    "Logistics",
    "Consulting",
    "Technology",
    "Public sector",
  ];

  const learners = [
    "Fresh graduates",
    "IT professionals",
    "Non-IT professionals",
    "Business analysts",
    "Finance professionals",
    "Supply chain professionals",
    "HR professionals",
    "Developers",
    "Current SAP users",
    "Career switchers",
  ];

  const decisionPoints = [
    ["Curriculum depth", "Check whether the syllabus includes SAP S/4HANA concepts, business process flow, practical tasks and module integration."],
    ["Trainer experience", "An experienced trainer can explain not only the menu path, but also the business reason behind the process."],
    ["Hands-on practice", "SAP server practice, assignments and guided exercises help learners move beyond definitions and theory."],
    ["Project exposure", "Realistic project scenarios make it easier to discuss SAP knowledge during interviews."],
    ["Learning format", "Live online classes and recordings can support students and working professionals across Canadian time zones."],
    ["Career support", "Resume guidance, mock interviews, LinkedIn profile help and module counselling improve job readiness."],
  ];

  const cities = [
    ["Toronto", "/sap-course-in-toronto"],
    ["Vancouver", "/sap-training-in-vancouver"],
    ["Winnipeg", "/sap-training-in-winnipeg"],
    ["Calgary", "/sap-fico-training-in-calgary"],
    ["Ottawa", "#enquiry"],
    ["Montreal", "#enquiry"],
    ["Edmonton", "#enquiry"],
    ["Mississauga", "#enquiry"],
    ["Brampton", "#enquiry"],
    ["Halifax", "#enquiry"],
  ];

  const faqs = [
    ["Which is the best SAP course in Canada?", "The best SAP course depends on your background and career goal. Finance learners often choose SAP FICO, procurement learners choose SAP MM or Ariba, sales learners choose SAP SD, technical learners choose SAP ABAP or Basis, and HR learners choose SuccessFactors."],
    ["Can beginners join SAP training in Canada?", "Yes. Beginners can start with SAP basics, ERP concepts and module guidance before moving into configuration, transactions and practical business scenarios."],
    ["Is this SAP course available online for Canada learners?", "Yes. SV CurioTech offers live online SAP training for learners in Canada with trainer-led classes, practical assignments, recordings for revision and career guidance."],
    ["Will I get SAP S/4HANA practical exposure?", "Training includes SAP S/4HANA awareness, process explanation, hands-on practice and module-specific examples based on the selected SAP course."],
    ["Does SV CurioTech provide SAP certification guidance?", "Yes. Learners receive topic-wise revision and certification preparation guidance. Official SAP certification is separate from course completion and depends on SAP's current exam process."],
    ["Is placement guaranteed after SAP training?", "No genuine training provider should promise a job guarantee. SV CurioTech provides resume support, LinkedIn guidance, mock interviews and placement assistance to improve readiness."],
    ["Can working professionals attend the course?", "Yes. Live online weekday and weekend batch options help working professionals continue SAP training while managing their job schedule."],
  ];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Course in Canada",
    alternateName: [
      "SAP Training in Canada",
      "SAP Courses in Canada",
      "SAP Certification Training Canada",
      "SAP Online Course Canada",
      "SAP S/4HANA Course in Canada",
    ],
    description:
      "Live online SAP course in Canada from SV CurioTech covering SAP FICO, MM, SD, PP, ABAP, Ariba, SuccessFactors and S/4HANA with practical training, project scenarios, certification guidance and career support.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
      email,
      telephone: `+91${phone}`,
    },
    areaServed: "Canada",
    courseMode: "Online",
    url: canonical,
    offers: {
      "@type": "Offer",
      category: "SAP training",
      availability: "https://schema.org/InStock",
      url: canonical,
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

  return (
    <>
      <div className="canada-seo-page">
        <header className="canada-nav">
          <div className="canada-topbar">
            <div className="container canada-topbar-inner">
              <span>Live online SAP training for Canada learners</span>
              <div>
                {phoneNumbers.map((number) => <a key={number} href={`tel:+91${number}`}><Phone size={14}/> +91 {number}</a>)}
                <a href={`mailto:${email}`}><Mail size={14}/> {email}</a>
              </div>
            </div>
          </div>
          <div className="container canada-nav-inner">
            <Link className="canada-brand" to="/" aria-label="SV CurioTech home">
              <img src="/assets/sv-curiotech-mark.png" alt="" />
              <span><strong>SV CurioTech</strong><small>SAP Course Canada</small></span>
            </Link>
            <nav>
              <a href="#modules">Modules</a>
              <a href="#s4hana">S/4HANA</a>
              <a href="#choose">Choose Course</a>
              <a href="#cities">Canada Cities</a>
              <a href="#faq">FAQ</a>
              <a className="canada-nav-cta" href="#enquiry">Enquire</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="canada-hero">
            <div className="container canada-hero-grid">
              <div className="canada-hero-copy">
                <span className="canada-pill"><Sparkles size={16}/> SAP Course in Canada</span>
                <h1>SAP Course in Canada for Practical ERP Career Skills</h1>
                <p>
                  Learn SAP online from Canada with trainer-led classes, SAP S/4HANA practice, business process examples, module guidance, real-time project exposure and career-focused interview preparation.
                </p>
                <div className="canada-hero-actions">
                  <a className="canada-primary-btn" href="#enquiry">Get Course Details <ArrowRight size={18}/></a>
                  <a className="canada-secondary-btn" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20Course%20in%20Canada.`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a>
                </div>
                <div className="canada-trust-row" aria-label="Course highlights">
                  <span><Check/> Live online classes</span>
                  <span><Check/> SAP server practice</span>
                  <span><Check/> Project scenarios</span>
                  <span><Check/> Career guidance</span>
                </div>
                <div className="canada-hero-course-grid" aria-label="SAP course highlights">
                  <article>
                    <span><CalendarCheck size={17}/> Training format</span>
                    <strong>Live online weekday and weekend batches</strong>
                    <p>Attend from Canada with trainer interaction, recordings for revision and guided doubt clearing.</p>
                  </article>
                  <article>
                    <span><Target size={17}/> Course focus</span>
                    <strong>SAP S/4HANA, module practice and real scenarios</strong>
                    <p>Learn business process flow, master data, transactions, configuration concepts and integration.</p>
                  </article>
                  <article>
                    <span><BriefcaseBusiness size={17}/> Career preparation</span>
                    <strong>Resume, interviews and project explanation</strong>
                    <p>Build confidence to discuss SAP skills for functional, technical, analyst and support roles.</p>
                  </article>
                </div>
              </div>
              <aside className="canada-hero-panel" id="enquiry">
                <div className="canada-hero-image">
                  <img src="/assets/sap-training-hero.jpg" alt="SAP training session for online learners" />
                </div>
                <div className="canada-form-wrap">
                  <span>Quick enquiry</span>
                  <h2>Ask for Canada SAP batch details</h2>
                  <p>Get syllabus, course fees, timing, module guidance and certification preparation details.</p>
                  <LeadForm variant="course-info" defaultCourse="SAP Course in Canada" />
                </div>
              </aside>
            </div>
          </section>

          <section className="canada-metrics">
            <div className="container">
              <div><strong>FICO</strong><span>Finance and controlling</span></div>
              <div><strong>MM</strong><span>Procurement and inventory</span></div>
              <div><strong>SD</strong><span>Sales and distribution</span></div>
              <div><strong>S/4HANA</strong><span>Modern SAP practice</span></div>
            </div>
          </section>

          <section className="canada-section canada-intro">
            <div className="container canada-split">
              <div>
                <span className="canada-eyebrow"><MapPin size={15}/> SAP Training in Canada</span>
                <h2>Build SAP skills for enterprise teams across Canada</h2>
                <p>Organizations in Canada use SAP to manage finance, purchasing, sales, supply chain, human resources, manufacturing and reporting. As more businesses work with SAP S/4HANA and cloud-based SAP solutions, learners need practical knowledge that connects software screens with real business workflows.</p>
                <p>A strong SAP course should help you understand how departments work together through shared enterprise data. SV CurioTech focuses on practical training, guided exercises and examples from workplace situations so learners can explain SAP concepts with confidence.</p>
              </div>
              <div className="canada-industry-panel">
                <h3>Industries where SAP skills matter</h3>
                <div>
                  {industries.map((industry) => <span key={industry}><BriefcaseBusiness size={15}/> {industry}</span>)}
                </div>
              </div>
            </div>
          </section>

          <section className="canada-section canada-soft" id="modules">
            <div className="container canada-heading">
              <span className="canada-eyebrow"><GraduationCap size={15}/> Popular SAP Modules in Canada</span>
              <h2>Choose a module that fits your education and work experience</h2>
              <p>Each SAP module maps to a different business area. The right choice depends on your background, comfort level and target role.</p>
            </div>
            <div className="container canada-module-grid">
              {modules.map(({ icon: Icon, title, text, fit, href }) => (
                <Link className="canada-module-card" to={href} key={title}>
                  <span><Icon/></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <small>{fit}</small>
                  <b>View course <ArrowRight size={15}/></b>
                </Link>
              ))}
            </div>
          </section>

          <section className="canada-section" id="s4hana">
            <div className="container canada-split reverse">
              <div className="canada-roadmap">
                {outcomes.map(([title, text], index) => (
                  <article key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>
              <div>
                <span className="canada-eyebrow"><Target size={15}/> What You Can Learn</span>
                <h2>SAP S/4HANA training with hands-on business practice</h2>
                <p>Career-oriented SAP training should include more than definitions. Learners need SAP navigation, master data, transactions, configuration concepts, troubleshooting awareness, reporting and integration practice.</p>
                <p>SV CurioTech connects SAP S/4HANA concepts with practical module learning so students can understand how modern ERP systems support better data handling, automation, process control and decision-making.</p>
                <a className="canada-text-link" href="#enquiry">Ask for the detailed syllabus <ArrowRight size={16}/></a>
              </div>
            </div>
          </section>

          <section className="canada-section canada-learners">
            <div className="container canada-heading">
              <span className="canada-eyebrow"><Users size={15}/> Who Can Learn SAP?</span>
              <h2>Beginner-friendly SAP courses for students and professionals</h2>
              <p>You do not need to be an experienced SAP consultant before joining. The best starting point depends on your education, current work and future career direction.</p>
            </div>
            <div className="container canada-chip-grid">
              {learners.map((learner) => <span key={learner}><Check size={15}/> {learner}</span>)}
            </div>
          </section>

          <section className="canada-section canada-soft" id="choose">
            <div className="container canada-heading">
              <span className="canada-eyebrow"><ShieldCheck size={15}/> How to Select the Right SAP Course</span>
              <h2>Compare training by practical value, not only by module name</h2>
              <p>Before joining a SAP course in Canada, check whether the program gives clear guidance, real practice and career preparation.</p>
            </div>
            <div className="container canada-decision-grid">
              {decisionPoints.map(([title, text]) => <article key={title}><BadgeCheck/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="canada-section canada-cities" id="cities">
            <div className="container canada-split">
              <div>
                <span className="canada-eyebrow"><MapPin size={15}/> Online SAP Course Canada</span>
                <h2>Join live SAP training from major Canadian cities</h2>
                <p>Because classes are online, learners can attend from Toronto, Vancouver, Calgary, Ottawa, Montreal, Edmonton, Mississauga, Brampton, Winnipeg, Halifax and other locations across Canada.</p>
                <p>City-specific pages help learners find the most relevant SAP course information while this page gives the full Canada-level overview.</p>
              </div>
              <div className="canada-city-links">
                {cities.map(([city, href]) => href.startsWith("/")
                  ? <Link key={city} to={href}>{city}<ArrowRight size={15}/></Link>
                  : <a key={city} href={href}>{city}<ArrowRight size={15}/></a>
                )}
              </div>
            </div>
          </section>

          <section className="canada-section canada-career">
            <div className="container canada-career-grid">
              <div>
                <span className="canada-eyebrow"><BriefcaseBusiness size={15}/> Certification and Career Support</span>
                <h2>Launch your SAP career path from Canada with clearer preparation</h2>
                <p>Choosing an SAP course is a career decision. The right path should match your background, help you build practical confidence and prepare you to discuss projects, scenarios and business process knowledge in interviews.</p>
              </div>
              <div className="canada-career-list">
                {["Certification preparation guidance", "Resume and LinkedIn profile support", "Technical and HR interview practice", "Project explanation preparation", "Module selection counselling", "Job assistance and role-readiness mentoring"].map((item) => <span key={item}><Check/> {item}</span>)}
              </div>
            </div>
          </section>

          <StudentFeedbackVideos />
          <SampleTestimonials />

          <section className="canada-section canada-faq" id="faq">
            <div className="container canada-heading">
              <span className="canada-eyebrow"><MessageCircle size={15}/> FAQ</span>
              <h2>SAP Course in Canada questions</h2>
            </div>
            <div className="container canada-faq-list">
              {faqs.map(([question, answer], index) => (
                <article key={question}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{question}</h3><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="canada-final-cta">
            <div className="container">
              <h2>Ready to learn SAP from Canada?</h2>
              <p>Ask SV CurioTech for the right SAP module, syllabus, batch timing, fees, SAP server access and career preparation details.</p>
              <div>
                <a className="canada-primary-btn" href="#enquiry">Enquire Now <ArrowRight size={18}/></a>
                <a href={`mailto:${email}`}><Mail size={16}/> {email}</a>
              </div>
            </div>
          </section>
        </main>

        <a className="canada-whatsapp" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20SAP%20Course%20in%20Canada%20details.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
        <footer className="canada-footer">
          <div className="container">
            <div>
              <strong>SV CurioTech</strong>
              <span>Online SAP Training for Canada</span>
            </div>
            <a href={`tel:+91${phone}`}><Phone size={16}/> +91 {phone}</a>
            <a href={`mailto:${email}`}><Mail size={16}/> {email}</a>
            <a href="https://www.svcuriotech.com" target="_blank" rel="noreferrer">www.svcuriotech.com</a>
          </div>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
