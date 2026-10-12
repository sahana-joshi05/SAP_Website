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
    title: "Best SAP FICO Course in Bangalore | Practical Training - SV CURIOTECH",
    description:
      "Join the Best SAP FICO Course in Bangalore at SV CURIOTECH. Learn SAP FI & CO with practical training, business scenarios, interview preparation and placement assistance.",
    keywords:
      "best SAP FICO course in Bangalore, SAP FICO course Bangalore, SAP FICO training in Bangalore, SAP FI CO course Bangalore, practical SAP FICO training, SAP FICO placement assistance Bangalore",
    canonical: "https://www.svcuriotech.com/best-sap-fico-course-in-Bangalore/",
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
    ["Practical SAP FICO training", "Learn finance and controlling through business scenarios, not only theory."],
    ["Business scenarios", "Practice procure-to-pay, order-to-cash, record-to-report and asset lifecycle flows."],
    ["Interview preparation", "Build resume points, project stories, mock interview confidence and role clarity."],
    ["Flexible learning", "Choose weekday, weekend, online or classroom batches based on your schedule."],
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

  const fiTopics = [
    "General Ledger Accounting",
    "Accounts Payable",
    "Accounts Receivable",
    "Asset Accounting",
    "Bank Accounting",
    "Tax-related processes",
    "Financial reporting",
    "Documentation process",
    "Financial closing processes",
  ];

  const coTopics = [
    "Cost Center Accounting",
    "Profit Center Accounting",
    "Internal Orders",
    "Cost element concepts",
    "Profitability Analysis",
    "Controlling and planning",
    "Management reporting",
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
    name: "Best SAP FICO Course in Bangalore",
    description: "Practical SAP FICO course in Bangalore with SAP FI, SAP CO, business scenarios, interview preparation, career guidance and placement assistance.",
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
  }), [email, phone]);

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
          <a href={`mailto:${email}`}>{email}</a>
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
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="bf-hero-grid">
          <div className="bf-hero-copy">
            <span className="bf-kicker"><Landmark size={16} /> Best SAP FICO Course in Bangalore</span>
            <h1>Build a job-ready career in SAP Finance and Controlling.</h1>
            <p>
              SV CURIOTECH offers industrial SAP FICO training for fresh graduates, finance professionals,
              accounting professionals, working professionals, career switchers and learners who want hands-on SAP skills.
            </p>
            <div className="bf-hero-actions">
              <a className="bf-primary" href="#contact">Book a Free SAP FICO Demo Class <ArrowRight size={18} /></a>
              <a className="bf-secondary" href={`tel:+91${phone}`}><PhoneCall size={17} /> +91 {phone}</a>
            </div>
          </div>

          <aside className="bf-command-panel" aria-label="SAP FICO learning path">
            <div className="bf-panel-top">
              <span>Training path</span>
              <strong>Concepts - Practice - Scenarios - Interview Readiness</strong>
            </div>
            <div className="bf-ledger-lines">
              {["SAP FI", "SAP CO", "Integration", "Placement Support"].map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <i />
                </div>
              ))}
            </div>
          </aside>
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

        <section className="bf-contact" id="contact">
          <div className="bf-contact-copy">
            <span>Start your SAP FICO career with SV CURIOTECH</span>
            <h2>Learn SAP FICO. Understand business. Build your career.</h2>
            <p>
              A SAP FICO career begins with more than certification. Gain practical SAP FICO skills, understand
              business processes, build interview confidence and take the first step toward your SAP career.
            </p>
            <div className="bf-contact-lines">
              <a href={`tel:+91${phone}`}><PhoneCall size={17} /> +91 {phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
              <a href="https://www.svcuriotech.com/">www.svcuriotech.com</a>
            </div>
          </div>
          <div className="bf-form-wrap">
            <h3>Book Your Free Demo Class Today</h3>
            {LeadForm ? <LeadForm variant="course-info" defaultCourse="Best SAP FICO Course in Bangalore" /> : fallbackForm}
          </div>
        </section>
      </main>

      {SharedFooter ? <SharedFooter /> : (
        <footer className="bf-footer">
          <strong>SV CURIOTECH</strong>
          <span>SAP Training Institute | SAP FICO | SAP MM | SAP SD | SAP PP | SAP ABAP | SAP HCM | SAP Ariba | SAP SuccessFactors</span>
        </footer>
      )}

      <a href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech,%20I%20want%20details%20about%20the%20Best%20SAP%20FICO%20Course%20in%20Bangalore`} className="bf-whatsapp" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
