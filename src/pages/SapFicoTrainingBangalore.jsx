import React, { useMemo, useState } from "react";
import SampleTestimonials from "../components/SampleTestimonials";
import StudentFeedbackVideos from "../components/StudentFeedbackVideos";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Landmark,
  Layers3,
  Mail,
  PhoneCall,
  Route,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import "./SapFicoTrainingBangalore.css";

function WhatsAppIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M16.01 3.2c-7.06 0-12.8 5.63-12.8 12.56 0 2.39.69 4.72 1.99 6.73L3.08 28.8l6.52-2.06a12.99 12.99 0 0 0 6.41 1.66c7.06 0 12.8-5.63 12.8-12.56S23.07 3.2 16.01 3.2Zm0 22.93c-2.03 0-4.01-.58-5.72-1.68l-.42-.27-3.77 1.19 1.22-3.63-.28-.44a10.17 10.17 0 0 1-1.56-5.39c0-5.68 4.72-10.3 10.53-10.3s10.53 4.62 10.53 10.3-4.72 10.22-10.53 10.22Zm5.78-7.67c-.31-.15-1.85-.89-2.14-.99-.29-.11-.5-.15-.71.15-.21.31-.81.99-.99 1.19-.18.21-.37.23-.68.08-.31-.15-1.32-.48-2.51-1.51-.93-.81-1.56-1.82-1.74-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.71-1.68-.97-2.3-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.58s1.13 3 1.29 3.2c.16.21 2.23 3.34 5.41 4.68.76.32 1.35.51 1.81.65.76.24 1.45.21 2 .13.61-.09 1.85-.74 2.11-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.21-.6-.36Z" />
    </svg>
  );
}

export default function SapFicoTrainingBangalore({ usePageSeo, phone, email, LeadForm, SharedFooter }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const whatsappPhone = "7022624629";

  usePageSeo({
    title: "SAP FICO Course in Bangalore | S/4HANA Finance Training | SV CurioTech",
    description:
      "Join SAP FICO course in Bangalore at SV CurioTech. Learn SAP FI, SAP CO, S/4HANA Finance, live SAP practice, real-time projects and placement support.",
    keywords:
      "SAP FICO course in Bangalore, SAP FICO training in Bangalore, SAP FICO course Bangalore, SAP FI CO course Bangalore, SAP S/4HANA Finance training Bangalore, SAP FICO certification course Bangalore, SAP FICO placement assistance Bangalore",
    canonical: "https://www.svcuriotech.com/sap-fico-training-in-bangalore",
    image: "https://www.svcuriotech.com/assets/sv-curiotech-mark.png",
  });

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      const response = await fetch(import.meta.env.VITE_LEAD_API_URL || "/api/lead", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          course: "Best SAP FICO Course in Bangalore",
          variant: "course-info",
          _replyto: form.email,
          _subject: `New SAP FICO demo request - ${form.name}`,
          source: window.location.href,
          submittedAt: new Date().toISOString(),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok === false) throw new Error(result.error || "Unable to send enquiry. Please try again.");
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unable to send enquiry. Please call us directly.");
    } finally {
      setSending(false);
    }
  };

  const highlights = [
    ["SAP FI + SAP CO", "Learn Financial Accounting and Controlling from fundamentals to business process application."],
    ["S/4HANA Finance", "Understand modern finance concepts, universal journal, reporting flow and SAP navigation."],
    ["Live SAP practice", "Practice transactions, configuration steps, reports and guided business case exercises."],
    ["Placement support", "Prepare resumes, interview answers, project explanations and role-specific confidence."],
  ];

  const courseDetails = [
    "SAP FI and SAP CO concepts from basics to practical usage",
    "General Ledger, Accounts Payable, Accounts Receivable and Asset Accounting",
    "Cost Center, Profit Center, Internal Orders and controlling reports",
    "S/4HANA Finance flow, universal journal concepts and SAP navigation",
    "Integration understanding with MM, SD and real business transactions",
    "Resume preparation, mock interviews and placement-focused guidance",
  ];

  const courseSnapshot = [
    ["Duration", "8-12 weeks"],
    ["Mode", "Classroom & Online"],
    ["Level", "Beginner to Advanced"],
    ["Practice", "Live SAP system guidance"],
    ["Support", "Resume + mock interviews"],
    ["Best for", "Finance, commerce, MBA, freshers"],
  ];

  const whyChoose = [
    "Practical SAP FICO training",
    "Real-time business scenarios",
    "Experienced trainers",
    "Hands-on exercises",
    "Resume preparation",
    "Interview preparation",
    "Mock interviews",
    "Career guidance",
    "Placement support",
    "Weekday and weekend batches",
    "Online and classroom learning options",
  ];

  const fiTopics = ["General Ledger Accounting", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Bank Accounting", "GST and tax process basics", "Financial reporting", "Document posting and clearing", "Period-end closing"];
  const coTopics = ["Cost Center Accounting", "Profit Center Accounting", "Internal Orders", "Cost element concepts", "Product costing overview", "Profitability Analysis", "Planning and allocations", "Management reporting"];

  const curriculumModules = [
    ["SAP ERP and S/4HANA Basics", ["SAP overview and navigation", "ECC vs S/4HANA Finance", "Enterprise structure", "Company, company code, business area and chart of accounts"]],
    ["Financial Accounting - FI", ["G/L accounting and ledgers", "Document types and number ranges", "Posting periods and fiscal year variants", "Accounts payable and vendor payments", "Accounts receivable and customer payments"]],
    ["Asset, Bank and Tax Accounting", ["Asset master and depreciation concepts", "Asset acquisition, transfer and retirement", "House bank and bank accounting flow", "GST/TDS process orientation", "Financial statement version and reports"]],
    ["Controlling - CO", ["Cost center accounting", "Profit center accounting", "Internal orders", "Assessment and distribution basics", "CO reporting and business analysis"]],
    ["Integration Scenarios", ["FI-MM procure-to-pay flow", "FI-SD order-to-cash flow", "Inventory and billing accounting impact", "Business partner concept", "End-to-end project-style scenario discussion"]],
    ["Interview and Project Preparation", ["Resume points for SAP FICO", "Common SAP FICO interview questions", "Project explanation practice", "Functional consultant role preparation", "LinkedIn and career guidance"]],
  ];

  const practicalLabs = [
    "Create enterprise structure and finance master data",
    "Post G/L, vendor and customer transactions",
    "Practice payment, clearing and reporting scenarios",
    "Understand purchase invoice and sales billing accounting impact",
    "Prepare business-process explanations for interviews",
  ];

  const integrations = [
    ["SAP MM + SAP FICO", "Procurement -> Goods Receipt -> Invoice -> Financial Posting -> Vendor Payment"],
    ["SAP SD + SAP FICO", "Sales Order -> Delivery -> Billing -> Revenue Posting -> Customer Accounting"],
    ["SAP PP + SAP FICO", "Production Planning -> Production Activities -> Cost Collection -> Financial Analysis"],
  ];

  const eligible = [
    "B.Com Graduates",
    "M.Com Graduates",
    "MBA Finance Graduates",
    "Finance Professionals",
    "Accounting Professionals",
    "CA/CMA Aspirants",
    "Accountants",
    "Working Professionals",
    "Fresh Graduates",
    "Career Switchers",
    "SAP Beginners",
    "ERP Professionals",
  ];

  const careers = [
    "SAP FICO Consultant",
    "SAP FI Consultant",
    "SAP CO Consultant",
    "SAP Finance Analyst",
    "SAP Support Consultant",
    "SAP Functional Consultant",
    "SAP Finance Executive",
    "SAP Business Process Analyst",
    "ERP Finance Consultant",
  ];

  const svReasons = [
    ["Experienced Trainers", "Learn from SAP trainers with industry exposure who explain concepts using business examples."],
    ["Practical Learning", "Understand how SAP processes work instead of limiting your learning to theoretical explanations."],
    ["Real-Time Project Experience", "Work with business scenarios that link SAP concepts with organizational processes."],
    ["Interview Preparation", "Get help with SAP FICO interview questions, resume preparation and practice interviews."],
    ["Placement Assistance", "SV CURIOTECH provides placement assistance to eligible learners for job opportunities."],
    ["Flexible Learning Options", "Choose weekday, weekend, classroom or online learning options according to your schedule."],
  ];

  const journey = [
    ["Understand", "Lay a solid foundation in SAP Finance and Controlling."],
    ["Practice", "Perform SAP transactions, configuration processes and business scenarios."],
    ["Apply", "Learn end-to-end finance processes through guided business scenarios."],
    ["Prepare", "Prepare your resume and improve your interview skills."],
    ["Progress", "Use your SAP FICO knowledge for career opportunities."],
  ];

  const faqs = [
    ["What is the duration of SAP FICO course in Bangalore?", "The SAP FICO course usually runs for 8 to 12 weeks depending on the selected batch, learner pace, practice sessions and interview preparation plan."],
    ["Is SAP FICO a career option?", "SAP FICO can be a career path for people interested in finance, accounting, ERP systems and business processes. The suitability depends on your background, interests, skills and career goals."],
    ["Who should learn SAP FICO?", "SAP FICO is useful for finance and accounting graduates, accountants, MBA Finance professionals, finance professionals and people willing to become SAP consultants."],
    ["Is SAP FICO suitable for freshers?", "Yes. Freshers can begin with basics and develop SAP FICO knowledge gradually through structured training and project implementation."],
    ["Do I need programming skills for SAP FICO?", "SAP FICO is mostly a functional module, so deep programming skills are not needed initially. Accounting, finance, business process and SAP knowledge are more useful."],
    ["What is the difference between SAP FI and SAP CO?", "SAP FI deals mainly with accounting and reporting, while SAP CO deals with cost control and management analysis."],
    ["Does SV CURIOTECH provide placement assistance?", "Yes. SV CURIOTECH provides placement assistance including career guidance, resume preparation and interview coaching for SAP FICO job openings."],
    ["Can working professionals join SAP FICO training?", "Yes. Flexible batch options allow working professionals to learn SAP FICO without quitting their job."],
    ["Is SAP FICO training available online?", "Yes. SV CURIOTECH provides both classroom and online SAP FICO training options."],
  ];

  const HighlightIcon = [BookOpenCheck, BriefcaseBusiness, UserRoundCheck, CalendarDays];
  const ReasonIcon = [ShieldCheck, BookOpenCheck, Route, UserRoundCheck, BriefcaseBusiness, CalendarDays];
  const companies = [
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

  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP FICO Course in Bangalore",
    description: "Practical SAP FICO course in Bangalore covering SAP FI, SAP CO, SAP S/4HANA Finance, live SAP practice, business scenarios, interview preparation and placement assistance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CURIOTECH",
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
    areaServed: ["Bangalore", "Bengaluru", "Karnataka", "Online"],
    courseMode: ["Classroom", "Online"],
    educationalLevel: "Beginner to Advanced",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Classroom", "Online"],
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "Weekly",
      },
    },
  }), [email, phone]);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }), [faqs]);

  const fallbackForm = (
    <form className="bf-form" onSubmit={submit}>
      <input type="text" name="name" placeholder="Your name" value={form.name} onChange={update} required />
      <input type="email" name="email" placeholder="Email address" value={form.email} onChange={update} required />
      <input type="tel" name="phone" placeholder="Phone number" value={form.phone} onChange={update} required />
      {sent && <div className="bf-success">Enquiry sent. Our team will contact you shortly.</div>}
      {error && <div className="bf-error">{error}</div>}
      <button type="submit" disabled={sending}>{sending ? "Sending..." : "Book Free Demo Class"} <ArrowRight size={18} /></button>
    </form>
  );

  return (
    <div className="bf-page">
      <header className="bf-hero" id="top">
        <div className="bf-topbar">
          <span><Check size={15} /> Admissions open for SAP FICO batches</span>
          <span><Landmark size={15} /> Bangalore classroom and online training</span>
          <a href={`tel:+91${phone}`}><PhoneCall size={15} /> +91 {phone}</a>
          <a href={`mailto:${email}`}><Mail size={15} /> {email}</a>
        </div>
        <div className="bf-nav">
          <a className="bf-brand" href="/">
            <span><img src="/assets/sv-curiotech-mark.png" alt="" /></span>
            <strong>SV CurioTech<small>SAP and IT Training Institute</small></strong>
          </a>
          <nav aria-label="SAP FICO page navigation">
            <a href="#course">Course</a>
            <a href="#about-us">About Us</a>
            <a href="#placement">Placement</a>
            <a href="#faq">FAQ</a>
            <a href="#demo">Contact</a>
          </nav>
        </div>

        <div className="bf-hero-grid">
          <div className="bf-hero-copy">
            <div className="bf-crumbs">
              <a href="/">Home</a><span>/</span><a href="/courses">Courses</a><span>/</span><strong>SAP FICO Course</strong>
            </div>
            <span className="bf-branch-pill">Bangalore SAP FICO Training</span>
            <h1>SAP FICO Course in Bangalore with S/4HANA Finance Training</h1>
            <p>
              SV CURIOTECH offers practical SAP FICO training for freshers, finance graduates, accounting professionals,
              MBA learners and working professionals who want hands-on SAP FI, SAP CO, S/4HANA Finance, real-time business
              scenarios and placement-focused interview preparation.
            </p>
            <div className="bf-hero-stat-grid">
              {[
                ["Duration", "8-12 weeks", CalendarDays],
                ["Mode", "Classroom & Online", Building2],
                ["Support", "Placement Assistance", BriefcaseBusiness],
              ].map(([label, value, Icon]) => (
                <article key={label}>
                  <span><Icon size={18} /> {label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="bf-hero-actions">
              <a className="bf-primary" href="#demo">Book a Free SAP FICO Demo Class <ArrowRight size={18} /></a>
              <a className="bf-secondary" href={`tel:+91${phone}`}><PhoneCall size={17} /> +91 {phone}</a>
            </div>
          </div>
          <figure className="bf-hero-visual">
            <img src="/assets/sap-fico-ai-training-hero.png" alt="SAP FICO classroom training with finance analytics dashboard" />
            <figcaption>
              <strong>Live SAP FICO Practice</strong>
              <span>FI, CO, S/4HANA Finance and interview preparation</span>
            </figcaption>
          </figure>
        </div>
      </header>

      <main>
        <section className="bf-strip" aria-label="Course highlights">
          {highlights.map(([title, text], index) => {
            const Icon = HighlightIcon[index];
            return (
              <article key={title}>
                <Icon size={22} />
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            );
          })}
        </section>

        <section className="bf-section bf-detail-story">
          <div className="bf-detail-content">
            <span className="bf-label">SAP FICO training details</span>
            <h2>Build finance, controlling and S/4HANA skills with practical SAP training.</h2>
            <p>
              SV CURIOTECH's SAP FICO course in Bangalore is designed for learners who want a strong foundation
              in SAP Financial Accounting and Controlling. The training helps you understand how financial
              transactions, cost control, reporting and business processes are handled inside SAP systems.
            </p>
            <p>
              The course starts with SAP basics and accounting flow, then moves into FI, CO, S/4HANA Finance,
              live practice scenarios and interview preparation. This makes the program useful for freshers,
              finance graduates, accounting professionals, MBA learners and working professionals who want to
              move toward SAP finance roles.
            </p>
          </div>
          <aside className="bf-detail-card">
            <h3>What this SAP FICO training includes</h3>
            <div>
              {courseDetails.map((item) => (
                <span key={item}><Check size={16} /> {item}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="bf-section bf-choice" id="course">
          <div className="bf-section-head">
            <span>Why choose SV CURIOTECH?</span>
            <h2>Training that connects accounting basics with practical SAP FICO work.</h2>
            <p>
              Choosing an SAP FICO training institute is not just about finishing a topic list. Proper training helps
              you understand how finance processes operate in an ERP system and how SAP FICO professionals contribute to business.
            </p>
          </div>
          <div className="bf-check-grid">
            {whyChoose.map((item) => <span key={item}><Check size={16} /> {item}</span>)}
          </div>
        </section>

        <section className="bf-section bf-overview">
          <div>
            <span className="bf-label">Course overview</span>
            <h2>Learn SAP FI, SAP CO and S/4HANA Finance through real business examples.</h2>
            <p>
              This SAP FICO course in Bangalore is built for learners who want practical finance ERP skills.
              You start with SAP navigation and accounting foundations, then move into configuration concepts,
              finance transactions, controlling scenarios, integration with MM and SD, reporting and interview preparation.
            </p>
          </div>
          <div className="bf-overview-card">
            {["General Ledger", "Accounts Payable", "Accounts Receivable", "Asset Accounting", "Cost Center", "Profit Center", "Internal Orders", "S/4HANA Finance"].map((item) => (
              <span key={item}><Check size={15} /> {item}</span>
            ))}
          </div>
        </section>

        <section className="bf-contact bf-mid-enquiry" id="demo">
          <div className="bf-contact-copy bf-mid-enquiry-copy">
            <span>Book SAP FICO Demo</span>
            <h2>Talk to a trainer before choosing your batch.</h2>
            <p>
              Share your details and our team will guide you on SAP FICO syllabus, batch timing, classroom or online mode,
              practical SAP access and placement preparation.
            </p>
            <div className="bf-mid-enquiry-points">
              {["Free course counselling", "Weekday and weekend batches", "Placement-focused preparation"].map((item) => (
                <strong key={item}><Check size={16} /> {item}</strong>
              ))}
            </div>
          </div>
          <div className="bf-form-wrap bf-mid-form-card">
            <h3>Book Your Free Demo Class</h3>
            {LeadForm ? <LeadForm variant="course-info" defaultCourse="Best SAP FICO Course in Bangalore" /> : fallbackForm}
          </div>
        </section>

        <section className="bf-section bf-definition">
          <div>
            <span className="bf-label">What is SAP FICO?</span>
            <h2>SAP Financial Accounting and Controlling explained through business flow.</h2>
            <p>
              SAP FICO stands for SAP Financial Accounting (FI) and Controlling (CO). It is one of the most crucial
              functional modules of SAP ERP because it supports financial accounting, internal cost management,
              reporting and financial controlling processes.
            </p>
            <p>
              SAP FI focuses on external financial accounting processes. SAP CO helps analyze and control internal
              costs, profitability and performance. Together, FI and CO connect financial transactions with management
              reporting and decision-making.
            </p>
          </div>
          <div className="bf-two-lists">
            <article>
              <CircleDollarSign size={24} />
              <h3>SAP FI components</h3>
              {fiTopics.map((topic) => <span key={topic}>{topic}</span>)}
            </article>
            <article>
              <BarChart3 size={24} />
              <h3>SAP CO components</h3>
              {coTopics.map((topic) => <span key={topic}>{topic}</span>)}
            </article>
          </div>
        </section>

        <section className="bf-section bf-about" id="about-us">
          <div className="bf-about-copy">
            <span className="bf-label">About SV Curiotech</span>
            <h2>Career-focused education from training to opportunity.</h2>
            <p>
              SV Curiotech's mission is clear: to set students on a career path. Since 2022, we have supported
              5,000+ students to build job-oriented skills that fulfil industry requirements.
            </p>
            <p>
              We do not just teach in the classroom. We help our students become ready for the workplace and move
              toward their desired careers.
            </p>
            <p>
              We know that going through a course is only the start. Knowing how to put a skill into use,
              communicate your strengths, and feel confident in a professional setting is what turns learning into employability.
            </p>
            <p>
              That is why our training emphasises practical, industry-oriented learning, enabling students to connect
              concepts with real industry requirements. Whether you are a fresher, working professional, or career changer,
              our aim is to ensure your learning is tailored to the career you wish to pursue.
            </p>
          </div>
          <div className="bf-about-values">
            <span>What we stand for</span>
            {[
              ["Practical skill building", "Hands-on learning helps students apply concepts, not only complete a course."],
              ["Professional confidence", "Resume preparation, mock interviews, and interview preparation help learners present themselves clearly."],
              ["Placement-focused support", "Our placement support focuses on the road after training and connects learners with real opportunities."],
            ].map(([title, text]) => (
              <article key={title}>
                <Check size={18} />
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bf-section bf-co">
          <div className="bf-section-head">
            <span>SAP Controlling - CO training</span>
            <h2>Understand how organizations manage costs, profitability and decisions.</h2>
          </div>
          <div className="bf-co-grid">
            {["Cost Center Accounting", "Profit Center Accounting", "Internal Orders", "Profitability Analysis"].map((title) => (
              <article key={title}>
                <Banknote size={22} />
                <h3>{title}</h3>
                <p>{title === "Cost Center Accounting" ? "Manage expenses by department, function or business unit." : title === "Profit Center Accounting" ? "Measure financial performance of business units." : title === "Internal Orders" ? "Control costs related to specific internal orders and projects." : "Measure profitability of products, customers, markets and other business areas."}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bf-section bf-curriculum">
          <div className="bf-section-head">
            <span>Detailed SAP FICO syllabus</span>
            <h2>Structured curriculum from SAP basics to finance integration.</h2>
            <p>The syllabus is arranged so learners understand the business process first, then the SAP configuration and transaction impact.</p>
          </div>
          <div className="bf-curriculum-grid">
            {curriculumModules.map(([title, topics], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <ul>
                  {topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bf-section bf-practice">
          <div>
            <span className="bf-label">Live SAP practice</span>
            <h2>Practice the tasks you need to explain in interviews.</h2>
            <p>
              Practical training is not limited to watching a trainer. Learners work through guided finance scenarios,
              understand accounting impact and prepare clear project explanations for recruiter and technical discussions.
            </p>
          </div>
          <div className="bf-practice-list">
            {practicalLabs.map((item) => <span key={item}><Check size={16} /> {item}</span>)}
          </div>
        </section>

        <section className="bf-section bf-integration">
          <div className="bf-section-head">
            <span>Integration knowledge</span>
            <h2>SAP FICO does not work in isolation.</h2>
            <p>In real organizations, finance processes integrate with procurement, sales, production and other business processes.</p>
          </div>
          <div className="bf-flow-grid">
            {integrations.map(([title, flow]) => (
              <article key={title}>
                <Layers3 size={23} />
                <h3>{title}</h3>
                <p>{flow}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bf-section bf-audience">
          <div className="bf-section-head">
            <span>Who is eligible?</span>
            <h2>The best SAP FICO course in Bangalore should support different professional backgrounds.</h2>
            <p>A finance or accounting background is useful, but learners from other disciplines can also learn SAP FICO through structured training.</p>
          </div>
          <div className="bf-pill-grid">
            {eligible.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="bf-section bf-career">
          <div>
            <span className="bf-label">Career opportunities</span>
            <h2>Prepare for functional and finance technology roles.</h2>
            <p>
              Knowledge of SAP FICO can help you move toward different roles depending on your experience,
              practical skills, interview performance and employer requirements.
            </p>
          </div>
          <div className="bf-role-list">
            {careers.map((role) => <span key={role}><BriefcaseBusiness size={15} /> {role}</span>)}
          </div>
        </section>

        <section className="bf-section bf-bangalore">
          <Building2 size={34} />
          <h2>What is the advantage of learning SAP FICO in Bangalore?</h2>
          <p>
            Bangalore is a technology and business hub with IT service providers, consulting firms, startups,
            global delivery centers and enterprises. Learning SAP FICO in Bangalore helps you combine finance
            knowledge with enterprise business processes.
          </p>
        </section>

        <section className="bf-section bf-split-notes">
          <article>
            <h2>SAP FICO training for freshers</h2>
            <p>
              Freshers can find it difficult to start a career in SAP because employers prefer practical skills.
              SV CURIOTECH helps freshers move through Concepts - Practical Training - Business Scenarios
              - Resume Preparation - Interview Preparation.
            </p>
          </article>
          <article>
            <h2>SAP FICO training for working professionals</h2>
            <p>
              Finance and accounting professionals can use SAP FICO training to upgrade their profile, understand
              ERP-based accounting, acquire finance technology knowledge and approach functional consulting roles.
            </p>
          </article>
        </section>

        <section className="bf-section">
          <div className="bf-section-head">
            <span>Why SV CURIOTECH?</span>
            <h2>Focused support from training to career preparation.</h2>
          </div>
          <div className="bf-reason-grid">
            {svReasons.map(([title, text], index) => {
              const Icon = ReasonIcon[index];
              return (
                <article key={title}>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bf-section bf-journey">
          <div className="bf-section-head">
            <span>SAP FICO course learning journey</span>
            <h2>Five steps from foundation to career progress.</h2>
          </div>
          <div className="bf-timeline">
            {journey.map(([title, text], index) => (
              <article key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bf-section bf-difference">
          <h2>What makes our SAP FICO training different?</h2>
          <p>
            Many learners complete courses but still find it hard to explain SAP FICO in a real company. Our approach
            focuses on three questions: What is the business process? How is it implemented in SAP? What happens
            financially after the transaction? This helps learners understand SAP FICO instead of memorising transaction codes.
          </p>
        </section>

        <section className="bf-section bf-faq" id="faq">
          <div className="bf-section-head">
            <span>Frequently asked questions</span>
            <h2>Answers before you join the SAP FICO course.</h2>
          </div>
          <div className="bf-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? "active" : ""} key={question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{question}</span>
                  <ChevronDown size={19} />
                </button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="bf-proof-block" id="placement">
          <div className="bf-section bf-placement-intro">
            <div className="bf-section-head">
              <span>Placement support</span>
              <h2>Career preparation backed by learner feedback.</h2>
              <p>
                Placement support at SV CURIOTECH includes resume preparation, interview practice, career guidance,
                project explanation support and practical confidence. Watch learner feedback and read genuine Google reviews below.
              </p>
            </div>
            <div className="bf-placement-points">
              {["Resume preparation", "Mock interviews", "Career guidance", "Project explanation", "Interview confidence", "Placement assistance"].map((item) => <span key={item}><Check size={16} /> {item}</span>)}
            </div>
            <div className="bf-company-panel">
              <div className="bf-section-head">
                <span>Tie-up companies</span>
                <h2>Company logos learners commonly prepare for.</h2>
                <p>We help learners prepare SAP FICO profiles for interviews and opportunities across IT services, consulting and enterprise support companies.</p>
              </div>
              <div className="bf-company-grid">
                {companies.map(([name, logo]) => <article key={name}><img src={logo} alt={`${name} logo`} /><span>{name}</span></article>)}
              </div>
            </div>
          </div>
          <StudentFeedbackVideos />
          <SampleTestimonials limit={8} />
        </section>

      </main>

      {SharedFooter ? <SharedFooter /> : (
        <footer className="bf-footer">
          <strong>SV CURIOTECH</strong>
          <span>SAP Training Institute | SAP FICO | SAP MM | SAP SD | SAP PP | SAP ABAP | SAP HCM | SAP Ariba | SAP SuccessFactors</span>
        </footer>
      )}

      <a href={`tel:+91${phone}`} className="bf-floating-call" aria-label="Call SV CurioTech">
        <PhoneCall size={28} />
      </a>
      <a href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech,%20I%20want%20details%20about%20the%20Best%20SAP%20FICO%20Course%20in%20Bangalore`} className="bf-whatsapp" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
