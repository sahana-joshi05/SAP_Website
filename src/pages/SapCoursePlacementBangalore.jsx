import React from "react";
import SampleTestimonials from "../components/SampleTestimonials";
import StudentFeedbackVideos from "../components/StudentFeedbackVideos";
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
  Headphones,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import "./SapCoursePlacementBangalore.css";

export default function SapCoursePlacementBangalore({ usePageSeo, registrationLink, phone, email, LeadForm }) {
  usePageSeo({
    title: "Best SAP Course with Placement in Bangalore | SV CurioTech",
    description: "Join SV CurioTech for SAP course with placement in Bangalore. Learn SAP FICO, MM, SD, ABAP, PP & SuccessFactors with practical SAP training and placement support.",
    keywords: "SAP course with placement in Bangalore, best SAP course in Bangalore, SAP training institute in Bangalore, SAP training and placement in Bangalore, SAP FICO course in Bangalore, SAP MM course in Bangalore, SAP FICO training Bangalore, SAP MM training Bangalore, online SAP training in Bangalore, SAP course in Bangalore with placement",
    canonical: "https://www.svcuriotech.com/sap-course-with-placement-bangalore",
  });

  const sapModules = [
    ["SAP FICO Course in Bangalore", "Choose SAP FICO training in Bangalore to learn Financial Accounting, Controlling, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Cost Center Accounting and reporting.", "/courses/sap-fico"],
    ["SAP MM Course in Bangalore", "Choose a SAP MM course in Bangalore to master procurement, purchasing, inventory management, vendor management, material master, valuation and supply chain processes.", "/courses/sap-mm"],
    ["SAP SD Course in Bangalore", "Learn SAP SD training in Bangalore covering sales order processing, pricing, billing, shipping, delivery, customer master data and the order-to-cash process.", "/courses/sap-sd"],
    ["SAP PP Course in Bangalore", "Build knowledge of SAP PP training in Bangalore with production planning, material requirement planning, capacity planning, manufacturing processes and shop floor control.", "/courses/sap-pp"],
    ["SAP ABAP Course in Bangalore", "Create SAP applications with SAP ABAP training in Bangalore using reports, forms, enhancements, ALV reports, Smart Forms, Adobe Forms, interfaces and object-oriented ABAP.", "/courses/sap-abap"],
    ["SAP SuccessFactors Course in Bangalore", "Learn SAP SuccessFactors training in Bangalore for Employee Central, recruitment, performance management, payroll integration and talent management.", "/courses/successfactors"],
  ];

  const faqs = [
    ["Which is the best SAP course in Bangalore with placement?", "The best SAP course in Bangalore depends on your education, work experience and career goal. SV CurioTech helps you choose a suitable module such as SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP PP or SuccessFactors with placement assistance."],
    ["Which SAP training institute in Bangalore offers placement support?", "SV CurioTech is a SAP training institute in Bangalore offering SAP training and placement support through practical classes, resume preparation, mock interviews, technical interview practice, career guidance and job referrals."],
    ["Can non-IT students learn SAP?", "Yes. Commerce, MBA, BBA, engineering and non-IT learners can build careers in functional SAP modules. Coding is not required for most functional SAP courses."],
    ["Do you provide SAP course with placement assistance in Bangalore?", "Yes. Learners receive resume preparation, LinkedIn profile guidance, mock HR interviews, technical interview practice, career guidance, job referrals and placement assistance for SAP jobs in Bangalore and other locations."],
    ["Which is better: SAP FICO course in Bangalore or SAP MM course in Bangalore?", "SAP FICO course is better for commerce, finance and accounting profiles. SAP MM course is better for procurement, logistics, inventory and supply chain profiles. Our advisors help you choose the right SAP course in Bangalore based on your background."],
    ["Do you offer online SAP training in Bangalore?", "Yes. SV CurioTech offers online SAP training in Bangalore and classroom SAP training with flexible weekday and weekend batch options based on current availability."],
    ["Is the SAP training hands-on?", "Yes. Courses include real-time business scenarios, configuration exercises, live project exposure, business documentation, SAP workflows and interview-based assignments."],
    ["What are the popular SAP courses with placement in Bangalore?", "Popular SAP courses with placement support include SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP PP and SAP SuccessFactors. SV CurioTech provides module guidance before enrollment."],
    ["Who can join SAP training and placement courses?", "Students, freshers, commerce graduates, MBA graduates, engineers, IT professionals, non-IT learners and working professionals can join SAP training and placement courses after choosing a suitable module."],
  ];

  const placementSteps = [
    ["01", "Profile review", "We understand your education, work history and target SAP roles before recommending the right course path."],
    ["02", "Resume and LinkedIn", "Your SAP course projects, module skills and business process knowledge are shaped into a recruiter-ready profile."],
    ["03", "Mock interviews", "Practice HR, technical and scenario-based questions for SAP FICO, SAP MM and other SAP module interviews."],
    ["04", "Job guidance", "Get job referrals, opening updates and practical guidance on applying for SAP fresher, support and consultant roles."],
  ];

  const supportItems = [
    "Resume rewriting",
    "LinkedIn profile setup",
    "Mock HR interview",
    "Technical interview practice",
    "Project explanation",
    "Job referral guidance",
  ];
  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  const aboutHighlights = [
    ["Started in 2020", "SV CurioTech has guided learners toward practical SAP careers since 2020."],
    ["Placement-focused SAP training", "Training is planned around course learning, projects, interviews and job-readiness."],
    ["Practical business scenarios", "Learners practice SAP concepts with examples from finance, procurement, sales, production and HR."],
    ["Profile building support", "We help learners present SAP skills, projects and domain knowledge clearly in resumes and LinkedIn profiles."],
    ["Mock interview practice", "Students prepare for HR, technical, functional and scenario-based SAP interview questions."],
    ["Personal career guidance", "Our advisors help learners choose modules based on education, background and career goals."],
  ];

  const studentReviews = [
    ["Priya S.", "SAP FICO", "The resume support and mock interviews helped me explain SAP FICO concepts clearly."],
    ["Karthik R.", "SAP MM", "The procurement scenarios and project discussions made interviews much easier."],
    ["Sneha P.", "SuccessFactors", "The team guided me from course selection to interview preparation with patience."],
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Course with Placement in Bangalore",
    alternateName: [
      "Best SAP Course in Bangalore",
      "SAP Training and Placement in Bangalore",
      "SAP Training Institute in Bangalore",
      "SAP FICO Course in Bangalore",
      "SAP MM Course in Bangalore",
    ],
    description: "Best SAP course with placement in Bangalore from SV CurioTech, covering SAP FICO course, SAP MM course, SAP SD, SAP ABAP, practical SAP training and placement support.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: "Bangalore",
    courseMode: ["Classroom", "Online"],
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
            <span><strong>SV CurioTech</strong><small>SAP Placement Program</small></span>
          </Link>
          <nav>
            <a href="#placement-support">Placement Support</a>
            <a href="#about">About Us</a>
            <a href="#sap-modules">SAP Modules</a>
            <a href="#faq">FAQ</a>
            <a className="placement-nav-call" href={`tel:+91${phone}`}><Phone size={15}/> Call Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="placement-hero-v2">
          <div className="container placement-hero-v2-grid">
            <div className="placement-hero-v2-copy">
              <span className="placement-pill"><BriefcaseBusiness size={16}/> SAP course with placement in Bangalore</span>
              <h1>Best SAP Course with Placement in Bangalore</h1>
              <p>Join SV CurioTech, a practical SAP training institute in Bangalore for SAP FICO course, SAP MM course, SAP SD, SAP ABAP, SAP PP and SuccessFactors training with live projects, resume building, mock interviews and placement assistance.</p>
              <div className="placement-trust-row">
                <span><Star size={15} fill="currentColor"/> 4.9 rating</span>
                <span><Users size={15}/> 5000+ students guided</span>
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
              <h2>Get SAP course details</h2>
              <p>Share your details to get SAP course fees, syllabus, batch timing, module guidance and placement support information.</p>
              <LeadForm variant="course-info" defaultCourse="SAP Course with Placement in Bangalore" />
            </aside>
          </div>
        </section>

        <section className="placement-stats-strip">
          <div className="container">
            <div><strong>5000+</strong><span>Students guided</span></div>
            <div><strong>95%</strong><span>Placement support</span></div>
            <div><strong>12+</strong><span>SAP modules</span></div>
            <div><strong>10+</strong><span>Years expertise</span></div>
          </div>
        </section>

        <section className="placement-about-section" id="about">
          <div className="container placement-about-grid">
            <div className="placement-section-heading left">
              <span><Sparkles size={15}/> About SV CurioTech</span>
              <h2>SV CurioTech started in 2020 to build job-ready SAP learners</h2>
              <p>SV CurioTech is a career-focused SAP training institute in Bangalore started in 2020 to help students, freshers, working professionals and career switchers build practical SAP skills with proper placement preparation.</p>
              <p>We focus on practical SAP classes in Bangalore, real-time business scenarios, live project exposure, SAP server practice and mentor-led guidance. Our goal is to make SAP learning clear, hands-on and career useful, so learners can confidently discuss SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP PP, SuccessFactors and other modules during interviews.</p>
              <p>Our placement support is not treated as a last step after the course. From the beginning, learners are guided on module selection, resume preparation, LinkedIn profile improvement, project explanation, technical questions, HR interview preparation and suitable SAP career paths.</p>
              <p>We work with learners from commerce, MBA, engineering, supply chain, HR, IT and non-IT backgrounds. The training is designed for learners searching for SAP course in Bangalore, SAP course with placement, SAP FICO training, SAP MM training and online SAP training in Bangalore.</p>
            </div>
            <div className="placement-about-points">
              {aboutHighlights.map(([title, text]) => <div key={title}><GraduationCap/><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </section>

        <section className="placement-why-section" id="placement-support">
          <div className="container placement-section-heading">
            <span><Sparkles size={15}/> Why choose SV CurioTech</span>
            <h2>SAP training and placement in Bangalore built for interviews, projects and jobs</h2>
            <p>SV CurioTech combines practical SAP training with placement support so learners can prepare for SAP consultant, SAP support, SAP analyst and fresher roles.</p>
          </div>
          <div className="container placement-benefit-grid">
            {supportItems.map((item) => <article key={item}><BadgeCheck/><h3>{item}</h3><p>Structured guidance that helps you prepare for SAP consultant, support and analyst opportunities.</p></article>)}
          </div>
        </section>

        <section className="placement-roadmap-v2">
          <div className="container placement-roadmap-v2-grid">
            <div className="placement-section-heading left">
              <span><Target size={15}/> Placement roadmap</span>
              <h2>From SAP course selection to interview preparation</h2>
              <p>A clean process for learners who want SAP training and placement support in Bangalore without confusion.</p>
            </div>
            <div className="placement-step-list">
              {placementSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="placement-modules-v2" id="sap-modules">
          <div className="container placement-section-heading">
            <span><GraduationCap size={15}/> SAP modules</span>
            <h2>Choose the best SAP course in Bangalore for your career goal</h2>
            <p>Compare SAP FICO course, SAP MM course, SAP SD course, SAP ABAP course, SAP PP course and SuccessFactors training before choosing your learning path.</p>
          </div>
          <div className="container placement-module-card-grid">
            {sapModules.map(([title, text, link]) => <Link className="placement-module-card-v2" key={title} to={link}><span>{title.includes("FICO") ? <Landmark/> : title.includes("MM") ? <Boxes/> : <BookOpen/>}</span><h3>{title}</h3><p>{text}</p><b>View course <ArrowRight size={15}/></b></Link>)}
          </div>
        </section>

        <section className="placement-testimonial-section">
          <div className="container placement-section-heading">
            <span><Users size={15}/> Student outcomes</span>
            <h2>Trust signals for career-focused learners</h2>
          </div>
          <div className="container placement-review-grid">
            {studentReviews.map(([name, module, quote]) => <article key={name}><div className="review-stars">{[1,2,3,4,5].map((item) => <Star key={item} size={14} fill="currentColor"/>)}</div><p>{quote}</p><div><strong>{name}</strong><span>{module} learner</span></div></article>)}
          </div>
        </section>

        <section className="placement-companies-section">
          <div className="container placement-section-heading">
            <span><BriefcaseBusiness size={15}/> Placement companies</span>
            <h2>Companies where SAP training and placement skills are valued</h2>
            <p>Our SAP placement support prepares learners for opportunities across IT services, consulting, ERP support, finance, procurement, supply chain and enterprise technology teams.</p>
          </div>
          <div className="container placement-company-marquee" aria-label="Placement company logos">
            <div className="placement-company-track">
              {[...placementCompanies, ...placementCompanies].map((company, index) => <span key={`${company.name}-${index}`} style={{ "--brand": company.color }} aria-label={company.name}><PlacementCompanyLogo company={company} /></span>)}
            </div>
          </div>
        </section>

        <section className="placement-faq-v2" id="faq">
          <div className="container placement-section-heading">
            <span><MessageCircle size={15}/> FAQ</span>
            <h2>SAP course with placement in Bangalore questions</h2>
          </div>
          <div className="container placement-faq-list-v2">
            {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
          </div>
        </section>

        <section className="placement-final-cta">
          <div className="container">
            <h2>Start your SAP course with placement support in Bangalore</h2>
            <p>Get SAP course guidance, batch timing, fees, syllabus, module selection and placement support details from SV CurioTech.</p>
            <div><a className="button" href="#enquiry">Enquire Now <ArrowRight size={18}/></a><a href={`mailto:${email}`}><Mail size={16}/> {email}</a></div>
          </div>
        </section>
        <StudentFeedbackVideos />
        <SampleTestimonials />
      </main>

      <a className="placement-whatsapp" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20course%20with%20placement.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
      <footer className="placement-contact-footer">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="placement-contact-list">
            <a href={`tel:+91${phone}`}><Phone size={17}/> Phone: +91 {phone}</a>
            <a href={`mailto:${email}`}><Mail size={17}/> Email: {email}</a>
            <a href="https://www.svcuriotech.com" target="_blank" rel="noreferrer">Website: www.svcuriotech.com</a>
            <span>Bengaluru, Karnataka</span>
          </div>
          <p>Join SV CurioTech for the best SAP course with placement in Bangalore and start building a successful SAP career.</p>
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
