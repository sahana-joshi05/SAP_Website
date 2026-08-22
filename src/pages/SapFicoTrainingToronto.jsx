import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  Clock3,
  ClipboardList,
  Coins,
  FileText,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import "./SapFicoTrainingToronto.css";

export default function SapFicoTrainingToronto({ usePageSeo, phone, email, LeadForm }) {
  usePageSeo({
    title: "Online SAP FICO Training for Toronto Learners | SV CurioTech",
    description:
      "Join live online SAP FICO training for Toronto learners with SV CurioTech. Learn SAP FI and CO through practical finance examples, S/4HANA practice and interview preparation.",
    keywords:
      "SAP FICO Training in Toronto, SAP FICO Course Toronto, SAP FI Training Toronto, SAP CO Training Toronto, Online SAP FICO Training Canada, SAP Finance Course Toronto, SAP FICO Training Canada",
    canonical: "https://www.svcuriotech.com/sap-fico-training-in-toronto",
    geo: null,
  });

  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  const financePaths = [
    ["Procure to Pay", "Purchase", "Vendor invoice", "Accounts payable", "Payment", "General ledger", "Reporting"],
    ["Order to Cash", "Customer order", "Delivery", "Billing", "Accounts receivable", "Payment", "Financial posting"],
  ];

  const fiTopics = [
    "Enterprise structure",
    "Company code",
    "Chart of accounts",
    "Fiscal year and posting periods",
    "General Ledger",
    "Accounts Payable",
    "Accounts Receivable",
    "Asset Accounting",
    "Bank Accounting",
    "Tax concepts",
    "Document processing",
    "Financial reporting",
  ];

  const coTopics = [
    "Controlling area",
    "Cost elements",
    "Cost centers",
    "Profit centers",
    "Internal orders",
    "Cost allocations",
    "Planning and budgeting",
    "Profitability analysis",
    "Management reporting",
  ];

  const integrations = [
    ["SAP MM", "Procurement, goods receipt and invoice verification create financial impacts."],
    ["SAP SD", "Sales, delivery, billing and customer payments connect with FI postings."],
    ["SAP PP", "Production activity can influence cost tracking and management reporting."],
    ["Business Operations", "Finance teams read the commercial story behind each posting."],
  ];

  const learnerFit = [
    ["Accounting", "Understand how financial transactions are recorded, controlled and reported in SAP."],
    ["Commerce", "Connect B.Com, M.Com or business education with enterprise finance workflows."],
    ["Finance", "Add SAP process knowledge to reporting, analysis, AP, AR and controlling experience."],
    ["Audit", "Understand postings, controls, document flows and reporting logic inside SAP."],
    ["Working Professionals", "Move toward SAP Finance roles without starting from zero."],
    ["Freshers", "Build SAP fundamentals before applying for finance systems or ERP roles."],
  ];

  const learningQuestions = [
    "Why was the financial document created?",
    "Which business activity caused the posting?",
    "What account was impacted?",
    "How does the transaction move through SAP?",
    "What happens when a vendor invoice arrives?",
    "How do costs move between cost centers?",
    "How do finance, procurement and sales connect?",
  ];

  const roles = [
    "SAP FICO Consultant",
    "SAP FI Consultant",
    "SAP CO Consultant",
    "SAP Finance Analyst",
    "SAP Support Analyst",
    "ERP Finance Analyst",
    "SAP Functional Consultant",
    "Finance Systems Analyst",
  ];

  const benefits = [
    ["Instructor-led SAP FICO training", "Learn with trainer guidance, structured sessions and doubt clarification."],
    ["Business-process teaching", "Every concept is connected with a real finance or operations scenario."],
    ["FI and CO together", "Study financial accounting and controlling as connected SAP Finance areas."],
    ["Integration awareness", "Understand how SAP FICO links with MM, SD, PP and business operations."],
    ["Interview preparation", "Practice scenario answers and role-oriented SAP FICO explanations."],
    ["Beginner support", "Suitable for finance graduates, professionals and learners new to SAP."],
  ];

  const classDepth = [
    ["Finance document logic", "Understand document types, posting keys, debits, credits and how SAP stores accounting information for reporting."],
    ["Configuration awareness", "Learn the purpose behind company codes, fiscal years, chart of accounts, field status, tolerance and account determination."],
    ["Daily support scenarios", "Practice how learners can explain errors, missing master data, blocked invoices, reconciliation issues and period-end checks."],
    ["End-to-end explanation", "Build the habit of explaining a process from business event to SAP document to report impact."],
  ];

  const torontoFocus = [
    ["For finance teams", "Toronto learners from accounting, payables, receivables, reporting and audit backgrounds can use SAP FICO to move closer to ERP finance roles."],
    ["For graduates", "Commerce and finance graduates can understand how classroom accounting concepts become real business documents inside SAP."],
    ["For career switchers", "Professionals moving from manual finance work, Excel reporting or business operations can build a structured SAP Finance foundation."],
  ];

  const learnerStories = [
    ["If you come from accounting", "You may already understand journal entries, vendor payments, customer receipts and financial statements. SAP FICO training helps you see where those activities live inside SAP, how documents are created and how reports pull the same financial data."],
    ["If you are a fresher", "You do not need to know every SAP term before joining. A good starting point is understanding business basics first: who is the vendor, who is the customer, why an invoice is posted and what happens after payment."],
    ["If you are working in finance", "Your current experience can become an advantage. When you learn SAP FICO through examples from AP, AR, GL, assets, cost centers and reporting, the software starts to feel connected to your daily work instead of separate from it."],
    ["If you are changing careers", "SAP FICO gives a practical route into ERP because it lets you use existing finance, commerce, audit or business operations knowledge while building system confidence step by step."],
  ];

  const rankingTopics = [
    ["SAP FICO training in Toronto for beginners", "The page explains how beginners can start with ERP basics, SAP navigation, accounting logic and guided finance scenarios before moving into configuration."],
    ["Online SAP FICO course in Canada", "Learners from Toronto and nearby areas can attend live online SAP FICO classes with practical examples, revision support and trainer guidance."],
    ["SAP FICO course with interview preparation", "The training includes scenario discussion, resume support, mock interview practice and guidance for explaining FI and CO concepts clearly."],
    ["SAP FI and SAP CO practical training", "Both areas are taught together so learners understand financial accounting, controlling, cost tracking and reporting as connected SAP Finance work."],
  ];

  const testimonials = [
    ["Priya S.", "B.Com graduate", "The FICO sessions helped me connect debit-credit concepts with SAP document posting. I could finally explain AP, AR and GL with a real business flow."],
    ["Arun M.", "Finance professional", "I liked that the trainer did not rush through screens. Procurement, vendor invoice and payment examples made SAP FI much easier to understand."],
    ["Sneha R.", "Accounts executive", "The course gave me confidence to talk about cost centers, profit centers and reporting instead of memorizing only transaction codes."],
    ["Karthik N.", "Career switcher", "SV CurioTech helped me choose FICO based on my finance background and prepare answers for practical interview questions."],
    ["Meera D.", "Audit learner", "The explanation of postings, controls and financial documents was useful for my audit background. The scenarios felt close to real work."],
    ["Rahul P.", "MBA Finance", "Learning FI and CO together gave me a better view of enterprise finance. The resume and interview guidance also helped me present my skills clearly."],
    ["Aishwarya B.", "M.Com student", "The trainer explained GL, AP and AR with simple examples first, then connected them to SAP screens. That made the course less stressful for me."],
    ["Daniel K.", "Toronto learner", "The online classes were structured well for my schedule. I liked the practical flow from vendor invoice to payment and reporting."],
    ["Harini V.", "Junior accountant", "I had accounting knowledge but did not know how to speak SAP language. The course helped me explain postings, documents and master data better."],
    ["Mohammed A.", "Finance analyst", "The CO topics were explained with cost center and profit center examples. It helped me understand management accounting inside SAP."],
    ["Nisha G.", "BBA graduate", "The module guidance was useful before joining. I understood why SAP FICO matched my finance background more than a technical SAP module."],
    ["Sandeep R.", "Accounts payable executive", "Vendor invoice, payment and clearing practice helped me connect my work experience with SAP Finance process flow."],
    ["Elena P.", "Career returner", "The sessions moved at a comfortable pace. Interview preparation and revision support helped me regain confidence after a career break."],
    ["Manoj T.", "ERP support learner", "The integration examples with MM and SD were the best part. I could understand why finance postings happen after procurement and billing steps."],
    ["Jasleen C.", "Audit associate", "The course improved my understanding of financial controls, document trails and reporting checks inside SAP."],
    ["Vivek H.", "MBA Finance fresher", "I liked the way each topic was converted into interview points. It helped me speak about SAP FICO more clearly."],
    ["Ritika M.", "Accounts receivable learner", "Customer billing and payment examples were explained step by step. I now understand how AR connects with financial posting."],
    ["Omar S.", "Working professional", "Weekend classes and recordings helped me revise after work. The trainer kept the sessions practical and easy to follow."],
  ];

  const trainers = [
    ["Ananya Rao", "Senior SAP FICO Trainer", "11+ years", "FI configuration, AP, AR, GL and S/4HANA Finance", "Known for explaining accounting postings with simple business examples and interview-focused practice."],
    ["Vikram Menon", "SAP CO Consultant Trainer", "9+ years", "Cost centers, profit centers, internal orders and reporting", "Helps learners understand controlling concepts through management accounting and cost analysis scenarios."],
    ["Neha Sharma", "SAP Finance Process Mentor", "8+ years", "P2P, O2C, asset accounting and integration", "Focuses on end-to-end process flows so learners can explain how finance connects with MM and SD."],
    ["Rohit Iyer", "SAP Interview Preparation Coach", "10+ years", "Resume review, mock interviews and project explanation", "Guides learners to convert SAP FICO practice into clear recruiter and interview conversations."],
    ["Sanjay Mehta", "SAP S/4HANA Finance Trainer", "12+ years", "New GL, ledgers, document splitting and finance reporting", "Teaches learners how classic SAP FI ideas map into S/4HANA Finance concepts and modern reporting needs."],
    ["Divya Krishnan", "AP and AR Process Mentor", "7+ years", "Vendor invoices, customer invoices, payments and clearing", "Uses practical AP and AR examples to help beginners understand daily SAP Finance support work."],
    ["Naveen Thomas", "SAP Integration Specialist", "10+ years", "FICO integration with MM, SD, procurement and billing", "Helps learners connect finance postings with purchase orders, goods receipts, sales billing and inventory movement."],
    ["Farah Khan", "Finance Career Guidance Coach", "8+ years", "Career planning, profile building and interview communication", "Supports learners with profile positioning, confidence building and role-specific SAP FICO interview preparation."],
    ["Mehul Desai", "SAP Asset Accounting Trainer", "9+ years", "Asset master, acquisitions, depreciation and asset reporting", "Explains asset accounting with practical purchase, capitalization and depreciation scenarios."],
    ["Charu Nair", "SAP Finance Reporting Coach", "8+ years", "Financial statements, account balances and reconciliation", "Helps learners understand how postings become reports and how finance teams review SAP data."],
    ["Aditya Sen", "SAP FICO Support Trainer", "11+ years", "Ticket handling, issue analysis and month-end support", "Guides learners through common support scenarios such as blocked invoices, posting errors and open item checks."],
    ["Pooja Malhotra", "Beginner SAP Mentor", "6+ years", "SAP basics, navigation, finance fundamentals and revision", "Works with freshers and non-IT learners to make SAP terminology and first-time system practice easier."],
  ];

  const detailedModules = [
    ["SAP navigation foundation", "Start with SAP login, screen structure, menus, search, transaction flow, organizational data and how learners should practice safely."],
    ["Master data understanding", "Learn the role of GL accounts, vendors, customers, assets, cost centers, profit centers and controlling objects in SAP Finance."],
    ["Transaction practice", "Work through financial postings, vendor invoices, customer invoices, payments, clearing, document display and basic reporting."],
    ["Configuration concepts", "Understand why settings are created for company code, chart of accounts, fiscal year, posting periods, field status and tolerance."],
    ["Reporting and reconciliation", "Study financial reports, open item review, account balances, document trails and how finance teams validate postings."],
    ["Interview scenarios", "Practice explaining FI and CO topics with examples that sound practical, structured and relevant to finance roles."],
  ];

  const learningOutcomes = [
    "Explain SAP FI and CO concepts in business language",
    "Understand how GL, AP, AR, assets and bank accounting work together",
    "Read the financial impact of procurement and sales processes",
    "Discuss cost centers, profit centers and internal orders with confidence",
    "Prepare scenario-based SAP FICO interview answers",
    "Connect finance education or work experience with SAP role expectations",
    "Build confidence for support, analyst and functional consultant paths",
    "Understand why each financial document is created in SAP",
  ];

  const supportItems = [
    ["Resume building", "Frame accounting, finance and SAP FICO skills clearly for entry-level and experienced profiles."],
    ["Mock interviews", "Practice FI, CO, AP, AR, GL, integration and scenario-based questions with trainer feedback."],
    ["Project explanation", "Learn how to describe practice work, process flows and SAP Finance examples in interviews."],
    ["Career counselling", "Understand whether SAP FICO fits your background, target role and available learning time."],
    ["LinkedIn guidance", "Improve profile keywords and role positioning for SAP Finance opportunities."],
    ["Revision support", "Review important concepts, common doubts and practical examples before interviews."],
  ];

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

  const footerLinks = [
    ["Home", "/"],
    ["SAP Courses", "/courses"],
    ["SAP Course in Toronto", "/sap-course-in-toronto"],
    ["SAP Training in Canada", "/sap-training-in-canada"],
    ["Placement Support", "/placements"],
    ["Contact", "/contact"],
  ];

  const footerTopics = [
    "SAP FI Training",
    "SAP CO Training",
    "SAP S/4HANA Finance",
    "Accounts Payable",
    "Accounts Receivable",
    "General Ledger",
    "Asset Accounting",
    "Cost Center Accounting",
  ];

  const faqs = [
    ["Is SAP FICO fit for B.Com graduates?", "Yes. SAP FICO is closely related to accounting and finance, so B.Com graduates can connect their academic knowledge with SAP finance processes."],
    ["Can non-IT background students learn SAP FICO?", "Yes. SAP FICO is a functional SAP area. Learners from accounting, finance, commerce and business backgrounds can study it without being software developers."],
    ["What is the difference between SAP FI and SAP CO?", "SAP FI focuses on financial accounting and external reporting, while SAP CO focuses on cost control, management accounting and performance analysis."],
    ["How long does SAP FICO training take?", "Duration depends on syllabus depth, batch schedule, learner background and practical training needs. The course should allow enough time for FI, CO and business process practice."],
    ["Is SAP FICO helpful for accounting professionals?", "Yes. Accounting professionals can use their domain knowledge to understand SAP-based financial processes, postings and reporting."],
    ["Is coding necessary for SAP FICO?", "No. SAP FICO is mainly a functional area. Technical development is handled through areas such as SAP ABAP."],
    ["Do I learn Accounts Payable and Accounts Receivable?", "Yes. AP and AR are part of SAP FI and are included in the financial accounting learning path."],
    ["Where can I learn SAP FICO in Toronto?", "SV CurioTech offers SAP FICO training in Toronto through practical online learning focused on FI, CO, integration, business scenarios and career preparation."],
    ["Is online SAP FICO training effective for Toronto learners?", "Yes, online SAP FICO training can be effective when it includes live trainer interaction, SAP system walkthroughs, practice tasks, recordings, doubt clarification and interview preparation."],
    ["What background is best for SAP FICO?", "Accounting, commerce, finance, audit, business administration and MBA Finance backgrounds are commonly suitable because SAP FICO uses financial transaction and reporting logic."],
    ["Can I learn SAP FICO while working full time?", "Yes. Working professionals can join live online weekday or weekend batches based on availability and use recordings or revision support to review complex topics."],
    ["Does SAP FICO include real-time project practice?", "Training can include practical scenarios such as vendor invoice posting, customer billing, payment processing, cost center posting, reporting and integration examples."],
    ["Which is better for me, SAP FICO or SAP MM?", "SAP FICO is usually better for finance, accounting and commerce backgrounds. SAP MM is usually better for procurement, inventory, logistics and supply chain backgrounds."],
    ["Can SAP FICO help me move from accounting to ERP?", "Yes. SAP FICO is a common route for accounting and finance learners who want to move from traditional finance work into ERP finance, support, analyst or consultant-oriented roles."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP FICO Training in Toronto",
    alternateName: ["SAP FICO Course Toronto", "SAP FI CO Training Toronto", "Online SAP FICO Training Canada"],
    description:
      "SAP FICO training in Toronto from SV CurioTech covering SAP FI, SAP CO, general ledger, accounts payable, accounts receivable, asset accounting, controlling, financial reporting and SAP integration scenarios.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: ["Toronto", "Greater Toronto Area", "Canada"],
    courseMode: "Online",
    url: "https://www.svcuriotech.com/sap-fico-training-in-toronto",
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
      <div className="toronto-fico-page">
        <header className="tf-nav">
          <div className="tf-contact-strip">
            <div className="tf-container">
              {phoneNumbers.map((number) => <a key={number} href={`tel:+91${number}`}><Phone size={14}/> +91 {number}</a>)}
              <a href={`mailto:${email}`}><Mail size={14}/> {email}</a>
            </div>
          </div>
          <div className="tf-container tf-nav-inner">
            <Link className="tf-brand" to="/" aria-label="SV CurioTech home">
              <img src="/assets/sv-curiotech-mark.png" alt="" />
              <span><strong>SV CurioTech</strong><small>SAP FICO Toronto</small></span>
            </Link>
            <nav>
              <a href="#fico-difference">FICO</a>
              <a href="#syllabus">Syllabus</a>
              <a href="#career">Career</a>
              <a href="#faq">FAQ</a>
              <a className="tf-nav-button" href="#enquiry">Enquire</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="tf-hero">
            <div className="tf-container tf-hero-grid">
              <div className="tf-hero-copy">
                <span className="tf-kicker"><Landmark size={16}/> SAP FICO Training in Toronto, Canada</span>
                <h1>Apply your finance expertise inside SAP FICO.</h1>
                <p>Learn how accounting, controlling and financial reporting work inside an integrated SAP business system. SV CurioTech helps Toronto learners move beyond transaction-code memorization and understand the finance logic behind real enterprise processes.</p>
                <div className="tf-hero-actions">
                  <a className="tf-primary" href="#enquiry">Get Course Details <ArrowRight size={18}/></a>
                  <a className="tf-secondary" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20FICO%20Training%20in%20Toronto.`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a>
                </div>
              </div>
              <aside className="tf-enquiry" id="enquiry">
                <span>Quick enquiry</span>
                <h2>Get SAP FICO Toronto batch details</h2>
                <p>Ask for syllabus, online class timing, fees and SAP FICO career guidance.</p>
                <LeadForm variant="course-info" defaultCourse="SAP FICO Training in Toronto" />
              </aside>
            </div>
          </section>

          <section className="tf-proof-strip">
            <div className="tf-container">
              <div><strong>FI</strong><span>Financial Accounting</span></div>
              <div><strong>CO</strong><span>Controlling</span></div>
              <div><strong>S/4HANA</strong><span>Practical exposure</span></div>
              <div><strong>Toronto</strong><span>Live online training</span></div>
            </div>
          </section>

          <section className="tf-section tf-story" id="fico-difference">
            <div className="tf-container tf-story-grid">
              <div>
                <span className="tf-section-label"><Calculator size={15}/> Why FICO feels different</span>
                <h2>Traditional accounting explains the transaction. SAP FICO explains how the business system processes it.</h2>
                <p>Finance teams do more than record numbers. In SAP, a purchase, invoice, payment, billing activity or cost movement can touch multiple business areas before it appears in financial reporting.</p>
                <p>That is why SAP FICO training should connect accounting knowledge with enterprise process logic. You learn what created the posting, which account was impacted, how the document moves and how the result becomes useful for reporting and control.</p>
              </div>
              <div className="tf-story-panel">
                <h3>Designed for finance-minded learners</h3>
                <p>Best suited for graduates, accountants, commerce learners, auditors, working professionals and freshers who want a practical SAP Finance path.</p>
                <div>
                  <span><Coins/> Finance</span>
                  <span><FileText/> Reporting</span>
                  <span><Building2/> Business flow</span>
                </div>
              </div>
            </div>
          </section>

          <section className="tf-section tf-human">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Users size={15}/> Humanized SAP FICO guidance</span>
                <h2>Choose SAP FICO because it fits your background, not because everyone says it is popular</h2>
                <p>Many learners searching for SAP FICO training in Toronto are not only comparing course fees or duration. They are trying to understand whether their accounting, commerce, finance or audit background can become a real SAP career path.</p>
              </div>
              <div className="tf-human-grid">
                {learnerStories.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
              </div>
              <div className="tf-human-note">
                <h3>A simple way to think about SAP FICO</h3>
                <p>If you can understand why a company buys something, sells something, pays a vendor, receives customer money, buys an asset or tracks department costs, you already have the foundation for SAP FICO. The course helps you translate that understanding into SAP documents, configuration logic, reports and interview-ready explanations.</p>
              </div>
            </div>
          </section>

          <section className="tf-section tf-ranking-content">
            <div className="tf-container tf-ranking-grid">
              <div>
                <span className="tf-section-label"><Target size={15}/> Search-focused course clarity</span>
                <h2>What this Toronto SAP FICO page answers for serious learners</h2>
                <p>To compete for strong search positions, the page needs to answer the real questions behind the keyword. That means explaining who the course is for, what learners practice, how FI and CO connect, whether beginners can join, and how the training supports job preparation.</p>
              </div>
              <div className="tf-ranking-cards">
                {rankingTopics.map(([title, text]) => <article key={title}><BadgeCheck/><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-flow-section">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Route size={15}/> Practical FICO examples</span>
                <h2>Follow the money through real SAP business flows</h2>
                <p>SAP FICO is not only about accounting screens. It is about reading the financial impact at every step of the business cycle.</p>
              </div>
              <div className="tf-flow-grid">
                {financePaths.map(([title, ...steps]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <div className="tf-flow-track">
                      {steps.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="tf-section tf-syllabus" id="syllabus">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><BookOpen size={15}/> SAP FICO syllabus</span>
                <h2>Learn SAP FI and SAP CO together</h2>
                <p>The course builds a full SAP Finance foundation by combining external financial accounting with internal cost and performance control.</p>
              </div>
              <div className="tf-syllabus-grid">
                <article>
                  <div><Landmark/><span>SAP FI</span></div>
                  <h3>Financial Accounting</h3>
                  <p>External accounting, document processing, financial postings and reporting.</p>
                  <ul>{fiTopics.map((topic) => <li key={topic}><Check size={14}/>{topic}</li>)}</ul>
                </article>
                <article>
                  <div><BarChart3/><span>SAP CO</span></div>
                  <h3>Controlling</h3>
                  <p>Management accounting, cost tracking, planning and performance analysis.</p>
                  <ul>{coTopics.map((topic) => <li key={topic}><Check size={14}/>{topic}</li>)}</ul>
                </article>
              </div>
            </div>
          </section>

          <section className="tf-section tf-detailed-modules">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><ClipboardList size={15}/> Detailed course coverage</span>
                <h2>More topics covered inside the SAP FICO learning path</h2>
                <p>The training is expanded beyond basic topic names so learners understand what they will actually practice and how each topic supports SAP Finance career readiness.</p>
              </div>
              <div className="tf-detailed-grid">
                {detailedModules.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-integration">
            <div className="tf-container tf-integration-grid">
              <div>
                <span className="tf-section-label"><ClipboardList size={15}/> Integration view</span>
                <h2>SAP FICO becomes clearer when you see how finance connects with operations.</h2>
                <p>Students also learn how SAP FICO interacts with procurement, sales, production, inventory and daily business operations. This makes FI and CO easier to explain in interviews because every posting has a business reason behind it.</p>
              </div>
              <div className="tf-integration-cards">
                {integrations.map(([title, text]) => <article key={title}><BadgeCheck/><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-fit">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Users size={15}/> Who should consider it?</span>
                <h2>A strong path for accounting, commerce and finance backgrounds</h2>
              </div>
              <div className="tf-fit-grid">
                {learnerFit.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-questions">
            <div className="tf-container tf-question-grid">
              <div>
                <span className="tf-section-label"><Target size={15}/> Practical learning method</span>
                <h2>Learn SAP FICO practically, not by memorization.</h2>
                <p>An ideal SAP FICO class should help learners answer the business reason behind each financial posting. That is the difference between knowing screens and understanding SAP Finance.</p>
              </div>
              <div className="tf-question-list">
                {learningQuestions.map((question) => <span key={question}><Check size={15}/>{question}</span>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-outcomes">
            <div className="tf-container tf-outcomes-grid">
              <div>
                <span className="tf-section-label"><BadgeCheck size={15}/> Learning outcomes</span>
                <h2>What learners should be able to do after SAP FICO training</h2>
                <p>By the end of the course, learners should not only remember definitions. They should be able to explain SAP Finance processes, connect documents with business events and answer interview questions with practical clarity.</p>
              </div>
              <div className="tf-outcome-list">
                {learningOutcomes.map((item) => <span key={item}><Check size={15}/>{item}</span>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-career" id="career">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><BriefcaseBusiness size={15}/> SAP FICO job path</span>
                <h2>Career roles learners can prepare for</h2>
                <p>Role suitability depends on education, experience, SAP version, specialization and interview performance.</p>
              </div>
              <div className="tf-role-grid">
                {roles.map((role) => <article key={role}><BriefcaseBusiness/><h3>{role}</h3></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-benefits">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><ShieldCheck size={15}/> Why SV CurioTech?</span>
                <h2>SAP learning that is understandable and applicable</h2>
              </div>
              <div className="tf-benefit-grid">
                {benefits.map(([title, text]) => <article key={title}><Sparkles/><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-trainers">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Users size={15}/> Trainer profiles</span>
                <h2>Dummy SAP FICO trainer data for page presentation</h2>
                <p>These sample trainer profiles show the type of expertise learners can expect from an instructor-led SAP FICO training experience.</p>
              </div>
              <div className="tf-trainer-grid">
                {trainers.map(([name, title, experience, expertise, note]) => <article key={name}><div><strong>{name.split(" ").map((part) => part[0]).join("")}</strong></div><span>{title}</span><h3>{name}</h3><p>{note}</p><dl><dt>Experience</dt><dd>{experience}</dd><dt>Expertise</dt><dd>{expertise}</dd></dl></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-support">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Target size={15}/> Career support</span>
                <h2>Support that helps learners become interview-ready</h2>
                <p>SAP FICO training becomes more useful when learners can communicate what they learned. SV CurioTech gives attention to resume language, scenario explanation and practical interview preparation.</p>
              </div>
              <div className="tf-support-grid">
                {supportItems.map(([title, text]) => <article key={title}><ShieldCheck/><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-depth">
            <div className="tf-container tf-depth-grid">
              <div>
                <span className="tf-section-label"><BookOpen size={15}/> More SAP FICO course depth</span>
                <h2>Training built around finance confidence, not just syllabus completion</h2>
                <p>SAP FICO learners often know accounting, but they need help translating that knowledge into SAP language. The course explains how master data, configuration, postings, invoices, payments, cost objects and reports work together in a business system.</p>
                <p>Toronto learners can attend live online classes and understand SAP Finance through guided examples such as vendor invoice posting, customer billing, asset purchase, month-end reporting, cost center tracking and financial statement preparation.</p>
              </div>
              <div className="tf-depth-cards">
                {classDepth.map(([title, text]) => <article key={title}><ClipboardList/><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-toronto-focus">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Landmark size={15}/> Toronto learner focus</span>
                <h2>Who benefits most from SAP FICO training in Toronto?</h2>
                <p>The page is created for learners who already understand money, accounting or business operations and want to apply that knowledge inside SAP Finance.</p>
              </div>
              <div className="tf-focus-grid">
                {torontoFocus.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-testimonials">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Star size={15}/> Learner testimonials</span>
                <h2>What SAP FICO learners say about the training</h2>
                <p>Feedback from learners who wanted practical SAP Finance clarity, interview confidence and a smoother transition from finance knowledge to SAP process understanding.</p>
              </div>
              <div className="tf-testimonial-grid">
                {testimonials.map(([name, role, quote]) => <article key={name}><div className="tf-stars">{[1,2,3,4,5].map((item) => <Star key={item} size={15} fill="currentColor"/>)}</div><p>{quote}</p><div><strong>{name}</strong><span>{role}</span></div></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-companies">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><Building2 size={15}/> Tie-up companies</span>
                <h2>Company exposure and interview preparation support</h2>
                <p>SV CurioTech prepares learners to discuss SAP FICO concepts for consulting, IT services, finance operations and enterprise support environments.</p>
              </div>
              <div className="tf-company-grid">
                {companies.map(([name, logo]) => <article key={name}><img src={logo} alt={`${name} logo`} /><span>{name}</span></article>)}
              </div>
            </div>
          </section>

          <section className="tf-section tf-faq" id="faq">
            <div className="tf-container">
              <div className="tf-heading">
                <span className="tf-section-label"><MessageCircle size={15}/> Common questions</span>
                <h2>SAP FICO Training in Toronto FAQ</h2>
              </div>
              <div className="tf-faq-list">
                {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
              </div>
            </div>
          </section>

          <section className="tf-final">
            <div className="tf-container">
              <h2>Start SAP FICO Training in Toronto with SV CurioTech</h2>
              <p>Get SAP FI and CO syllabus guidance, batch timing, online class details and career-oriented support.</p>
              <div>
                <a className="tf-primary" href="#enquiry">Enquire Now <ArrowRight size={18}/></a>
                <a className="tf-secondary light" href={`tel:+91${phone}`}><Phone size={17}/> Call +91 {phone}</a>
              </div>
            </div>
          </section>
        </main>

        <a className="tf-whatsapp" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20FICO%20Training%20in%20Toronto.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
        <footer className="tf-footer">
          <div className="tf-container tf-footer-grid">
            <div className="tf-footer-brand">
              <Link className="tf-footer-logo" to="/" aria-label="SV CurioTech home">
                <img src="/assets/sv-curiotech-mark.png" alt="" />
                <span><strong>SV CurioTech</strong><small>SAP FICO Training Toronto</small></span>
              </Link>
              <p>SV CurioTech helps learners build practical SAP skills through live instructor-led training, SAP process clarity, interview preparation and career-focused guidance.</p>
              <div className="tf-footer-badges">
                <span><BadgeCheck size={14}/> Live online training</span>
                <span><ShieldCheck size={14}/> Career support</span>
              </div>
            </div>

            <div className="tf-footer-column">
              <h3>Quick Links</h3>
              {footerLinks.map(([label, link]) => <Link key={label} to={link}>{label}</Link>)}
            </div>

            <div className="tf-footer-column">
              <h3>SAP FICO Topics</h3>
              {footerTopics.map((topic) => <a key={topic} href="#syllabus">{topic}</a>)}
            </div>

            <div className="tf-footer-column tf-footer-contact">
              <h3>Contact Details</h3>
              <a href={`tel:+91${phone}`}><Phone size={15}/> +91 {phone}</a>
              <a href={`tel:+91${whatsappPhone}`}><Phone size={15}/> +91 {whatsappPhone}</a>
              <a href={`mailto:${email}`}><Mail size={15}/> {email}</a>
              <span><MapPin size={15}/> Online SAP FICO training for Toronto, Canada</span>
              <span><Clock3 size={15}/> Weekday and weekend batch guidance</span>
            </div>
          </div>
          <div className="tf-container tf-footer-bottom">
            <span>Copyright © {new Date().getFullYear()} SV CurioTech. All rights reserved.</span>
            <span>Training information, batch timing and support options may vary based on current availability.</span>
          </div>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
