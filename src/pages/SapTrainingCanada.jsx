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
    title: "Online SAP Training for Canada Learners | SV CurioTech",
    description: "Join live online SAP training from Canada with SV CurioTech. Learn SAP FICO, MM, SD, PP, ABAP, BASIS, HCM, SuccessFactors and S/4HANA with hands-on practice.",
    keywords: "SAP Training in Canada, SAP Course in Canada, Online SAP Training Canada, SAP Certification Course Canada, SAP FICO Training Canada, SAP MM Training Canada, SAP SD Training Canada, SAP ABAP Training Canada, SAP S/4HANA Training Canada, SAP Course with Placement Canada",
    canonical: "https://www.svcuriotech.com/sap-training-in-canada",
    geo: null,
  });

  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  const courseModules = [
    ["SAP FICO Training in Canada", "Financial Accounting, Controlling, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Center Accounting, profit center concepts and finance reporting.", "/courses/sap-fico", "Best suited for B.Com, M.Com, MBA Finance, CAs and accounting professionals."],
    ["SAP MM Training in Canada", "Procurement, purchasing, inventory management, material master, vendor management, goods movement, invoice verification and warehousing operations.", "/courses/sap-mm", "Best suited for supply chain, procurement and logistics professionals."],
    ["SAP SD Training in Canada", "Sales order processing, customer master data, shipping, billing, pricing, credit management and customer management through the order-to-cash cycle.", "/courses/sap-sd", "Best suited for marketing, sales and customer service professionals."],
    ["SAP PP Training in Canada", "Production planning, manufacturing execution, MRP, BOM, routing, work centers, capacity planning and shop floor management.", "/courses/sap-pp", "Best suited for engineering, industrial and production professionals."],
    ["SAP ABAP Training in Canada", "Custom SAP applications, reports, debugging, data dictionary, interfaces, enhancements, forms, workflows and technical development foundations.", "/courses/sap-abap", "Best suited for IT learners and professionals who want a technical SAP path."],
    ["SAP SuccessFactors Training", "Cloud HCM concepts including Employee Central, Performance Management, Recruitment, Onboarding, Workforce Planning and Payroll process understanding.", "/courses/successfactors", "Best suited for HR professionals and learners targeting cloud HCM careers."],
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

  const canadaSeoTopics = [
    ["SAP certification preparation in Canada", "Learners get topic-wise revision, scenario questions and exam-oriented guidance that supports SAP certification preparation after completing module training."],
    ["Online SAP course for working professionals", "Flexible live online batches help learners continue training while managing work, college, family time or job search plans in Canada."],
    ["SAP S/4HANA practical training", "The course includes S/4HANA process exposure, hands-on transaction practice and configuration-focused explanations for modern enterprise environments."],
    ["SAP course with placement assistance", "Career support includes resume building, LinkedIn profile improvement, mock interviews, interview question practice and job-readiness mentoring."],
  ];

  const canadaCities = [
    "Toronto",
    "Vancouver",
    "Calgary",
    "Ottawa",
    "Montreal",
    "Edmonton",
    "Mississauga",
    "Brampton",
    "Winnipeg",
    "Halifax",
  ];

  const canadaRoles = [
    "SAP Functional Consultant",
    "SAP FICO Consultant",
    "SAP MM Consultant",
    "SAP SD Consultant",
    "SAP ABAP Developer",
    "SAP SuccessFactors Consultant",
    "SAP Support Consultant",
    "SAP Business Analyst",
    "SAP Application Analyst",
    "SAP End User Support Executive",
  ];

  const canadaCompanyLevels = [
    ["MNC consulting companies", "Accenture, Deloitte, IBM, Capgemini and global consulting teams that hire SAP functional and technical talent."],
    ["Global IT services companies", "TCS, Infosys, Cognizant, Wipro, HCLTech, Tech Mahindra, LTIMindtree and enterprise support partners."],
    ["Canadian enterprise employers", "Finance, retail, manufacturing, logistics, health care, public sector and utility companies using SAP for daily operations."],
    ["Mid-level and growing companies", "ERP support teams, SAP partner firms, implementation vendors and fast-growing businesses moving to S/4HANA."],
  ];

  const placementCompanies = [
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
    ["Is this a beginner's course?", "Yes. The course starts with SAP basics, ERP concepts and business process fundamentals before moving into module-specific topics and practical scenarios."],
    ["Will I get SAP server access?", "Yes. Students receive SAP server access for hands-on practice during training."],
    ["Are the sessions live?", "Yes. Classes are live online instructor-led sessions with flexible weekday and weekend batch options."],
    ["Will I get a certification on completion?", "Yes. A course completion certificate is awarded after successful completion of the training."],
    ["Do you have placement facilities?", "Yes. SV CurioTech offers resume guidance, mock interviews, interview preparation and placement assistance."],
    ["Can I join SAP training from Toronto, Vancouver or other Canadian cities?", "Yes. Since the course is live online, learners can join from Toronto, Vancouver, Calgary, Ottawa, Montreal, Edmonton, Mississauga, Brampton and other locations in Canada."],
    ["Which SAP module is best for Canada jobs?", "The right SAP module depends on your background. Finance learners usually prefer SAP FICO, supply chain learners choose SAP MM, sales learners choose SAP SD, IT learners choose SAP ABAP and HR learners choose SuccessFactors."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in Canada",
    alternateName: [
      "SAP Course in Canada",
      "Online SAP Training Canada",
      "SAP Certification Course Canada",
      "SAP Course with Placement Canada",
    ],
    description: "Online SAP training in Canada from SV CurioTech covering SAP FICO, MM, SD, ABAP, BASIS, PP, SuccessFactors and S/4HANA with hands-on practice, certification guidance and placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: "Canada",
    courseMode: "Online",
    url: "https://www.svcuriotech.com/sap-training-in-canada",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
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
              <h1>SAP Training in Canada</h1>
              <p>Build a career in SAP with live online training from SV CurioTech. Our SAP course in Canada helps learners understand SAP S/4HANA, module configuration, business process flows, hands-on system practice, interview preparation and placement assistance in a clear, practical way.</p>
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
              <p>Many learners search for a SAP certification course in Canada but still need practical confidence before interviews. That is why our training explains the concept, shows the SAP screen flow, connects it with business usage and then helps learners practice until they can speak about the process naturally.</p>
              <p>If you are planning to move into SAP functional consulting, SAP technical development, SAP support, business analyst work or ERP end-user roles, this Canada SAP training path gives you a structured starting point with module guidance and career preparation.</p>
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

        <section className="placement-why-section">
          <div className="container placement-section-heading">
            <span><Target size={15}/> Canada SAP career path</span>
            <h2>Built for SAP learning, certification preparation and job readiness</h2>
            <p>Learners usually want more than a syllabus. They want to know whether the training includes SAP certification preparation, real system practice, flexible online classes and career support after the course.</p>
          </div>
          <div className="container placement-benefit-grid">
            {canadaSeoTopics.map(([title, text]) => <article key={title}><Target/><h3>{title}</h3><p>{text}</p></article>)}
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
            <span><Landmark size={15}/> Canada city coverage</span>
            <h2>Online SAP training across Canada</h2>
            <p>SV CurioTech supports learners from major Canadian cities through live online SAP classes, recordings, SAP server practice and placement-focused mentoring.</p>
          </div>
          <div className="container placement-review-grid">
            {canadaCities.slice(0, 6).map((city) => <article key={city}><div className="review-stars"><Check size={16}/></div><p>Join SAP training from {city} with live instructor-led classes, module guidance, SAP S/4HANA practice and interview preparation.</p><div><strong>SAP Training in {city}</strong><span>Canada online batch</span></div></article>)}
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
            <p>Based on your selected SAP module and previous background, our career support helps you prepare for common SAP job titles and interview discussions in Canada and global delivery teams.</p>
          </div>
          <div className="container placement-benefit-grid">
            {careerSupport.map((item) => <article key={item}><BriefcaseBusiness/><h3>{item}</h3><p>Career support helps learners prepare profiles, interviews and job conversations with confidence.</p></article>)}
          </div>
        </section>

        <section className="placement-modules-v2">
          <div className="container placement-section-heading">
            <span><Users size={15}/> SAP roles after training</span>
            <h2>Common roles learners prepare for</h2>
            <p>Role suitability depends on education, domain experience, SAP module choice and interview performance, but these are the kinds of paths learners commonly target after SAP training.</p>
          </div>
          <div className="container placement-benefit-grid">
            {canadaRoles.map((role) => <article key={role}><BriefcaseBusiness/><h3>{role}</h3><p>Our practical exercises, project explanation and mock interview support help learners talk about this role with better clarity.</p></article>)}
          </div>
        </section>

        <section className="placement-companies-section">
          <div className="container placement-section-heading">
            <span><BriefcaseBusiness size={15}/> Companies across all levels</span>
            <h2>Prepare for SAP opportunities across Canada and global delivery teams</h2>
            <p>SAP skills are valued by enterprise consulting companies, global IT services firms, Canadian end-user organizations, ERP support teams and growing technology companies.</p>
          </div>
          <div className="container placement-benefit-grid placement-company-level-grid">
            {canadaCompanyLevels.map(([title, text]) => <article key={title}><BriefcaseBusiness/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="container placement-company-marquee" aria-label="Companies where SAP skills are valued">
            <div className="placement-company-track">
              {[...placementCompanies, ...placementCompanies].map((company, index) => <span key={`${company.name}-${index}`} style={{ "--brand": company.color }} aria-label={company.name}><PlacementCompanyLogo company={company} /></span>)}
            </div>
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </>;
}

function PlacementCompanyLogo({ company }) {
  return (
    <span className={`placement-company-logo placement-company-logo-${company.logo}`} aria-hidden="true">
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
