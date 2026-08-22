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

export default function SapTrainingVancouver({ usePageSeo, phone, email, LeadForm }) {
  usePageSeo({
    title: "Online SAP Training for Vancouver Learners | SV CurioTech",
    description:
      "Join live online SAP training from Vancouver with SV CurioTech. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, S/4HANA, Basis, BW/HANA and BTP.",
    keywords:
      "SAP Training in Vancouver, SAP Course in Vancouver, Online SAP Training Vancouver, SAP FICO Training Vancouver, SAP MM Training Vancouver, SAP SD Training Vancouver, SAP ABAP Training Vancouver, SAP SuccessFactors Training Vancouver, SAP S/4HANA Training Vancouver, SAP Course Canada",
    canonical: "https://www.svcuriotech.com/sap-training-in-vancouver",
    geo: null,
  });

  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  const courseModules = [
    ["SAP FICO Training in Vancouver", "General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, Cost Center Accounting, Profit Center Accounting and financial reporting.", "/courses/sap-fico", "Best suited for accounting, commerce, B.Com, M.Com and MBA Finance learners."],
    ["SAP MM Training in Vancouver", "Procurement, purchase requisitions, purchase orders, goods receipt, invoice verification, vendor management, inventory management and material master.", "/courses/sap-mm", "Best suited for procurement, inventory, logistics and supply chain backgrounds."],
    ["SAP SD Training in Vancouver", "Customer master, sales orders, delivery, shipping, billing, pricing, sales process flow and order-to-cash integration with finance and materials management.", "/courses/sap-sd", "Best suited for sales, distribution, customer service and business process learners."],
    ["SAP SuccessFactors and HCM Training", "Employee data, recruitment, Employee Central, performance management, learning management, compensation and HR process integration.", "/courses/successfactors", "Best suited for HR professionals, recruiters and HR graduates."],
    ["SAP ABAP Training in Vancouver", "ABAP programming, data dictionary, internal tables, reports, modularisation, Open SQL, debugging, forms, enhancements and real development scenarios.", "/courses/sap-abap", "Best suited for IT learners, developers and technical SAP career paths."],
    ["SAP S/4HANA, Basis, BW/HANA and BTP", "Build awareness of modern SAP platforms, system administration, analytics concepts, cloud extension ideas and enterprise technology foundations.", "/courses", "Best suited for learners exploring technical, platform and upgrade-oriented SAP roles."],
  ];

  const practicalLearning = [
    ["SAP navigation and system concepts", "Understand the SAP screen flow, terminology, master data and core system behavior before going deeper into module practice."],
    ["Process flows", "Learn how business processes move across finance, procurement, sales, HR, production and technical teams."],
    ["Configuration concepts", "Study module-specific configuration ideas with practical examples, not isolated theory."],
    ["Real-life business cases", "Discuss common business situations so SAP concepts feel connected to workplace needs."],
    ["Project-based learning", "Use guided assignments and project explanations to prepare for interviews and resume discussions."],
    ["Career preparation", "Get interview preparation, resume direction, SAP job description awareness and role guidance."],
  ];

  const moduleGuidance = [
    ["Finance and commerce learners", "SAP FICO is a useful path for learners from accounting, B.Com, M.Com, MBA Finance, commerce and financial reporting backgrounds."],
    ["Procurement and supply chain learners", "SAP MM and SAP Ariba help learners understand purchasing, inventory, vendors, materials and procure-to-pay workflows."],
    ["Sales and business process learners", "SAP SD helps learners understand customer orders, pricing, delivery, billing and the order-to-cash cycle."],
    ["HR learners", "SAP HCM and SuccessFactors are strong options for HR graduates, recruiters and professionals interested in HR technology."],
    ["IT and developer learners", "SAP ABAP, SAP Basis, SAP BTP and other technical tracks can suit learners with programming, support or enterprise technology interests."],
    ["Manufacturing and operations learners", "SAP PP helps learners connect production planning, manufacturing, MRP, BOM, routing and shop-floor concepts."],
  ];

  const trainingBenefits = [
    ["Small-batch training", "Batch sizes may range from 1 to 4 learners depending on the program, giving learners more room to ask questions and interact with the trainer."],
    ["Online SAP training for Vancouver", "Learners can attend live online SAP classes from Vancouver without relocating or commuting."],
    ["Flexible for working professionals", "Online batches help students, full-time employees, career changers and busy professionals continue learning with better flexibility."],
    ["Business-context teaching", "The course explains why a process is needed and how different SAP functions interact in practical business scenarios."],
    ["Interview and resume support", "Learners receive guidance for interviews, resumes, project discussions, common questions and suitable SAP job directions."],
    ["Module selection help", "SV CurioTech helps learners compare SAP modules and choose a suitable path based on education, experience and career goals."],
  ];

  const vancouverIndustries = [
    ["Technology and consulting", "SAP technical, functional and business analyst knowledge can support enterprise technology, implementation and support conversations."],
    ["Logistics and supply chain", "SAP MM, SD, Ariba and related process knowledge helps learners understand procurement, inventory, vendors and order management."],
    ["Retail and manufacturing", "SAP connects finance, inventory, production, sales and reporting processes used in large business operations."],
    ["Finance and professional services", "SAP FICO and S/4HANA Finance concepts are useful for learners with accounting, commerce and reporting interests."],
    ["Healthcare and public services", "SAP skills can help learners understand structured enterprise processes, data, HR and finance workflows."],
    ["Human resources", "SAP HCM and SuccessFactors training supports learners interested in recruitment, employee data, performance and modern HR systems."],
  ];

  const learners = [
    "Freshers",
    "Students",
    "B.Com graduates",
    "BBA graduates",
    "MBA professionals",
    "Finance professionals",
    "HR professionals",
    "Supply chain professionals",
    "Procurement professionals",
    "IT professionals",
    "Software developers",
    "Business analysts",
  ];

  const careerPreparation = [
    "SAP career tracks",
    "Interview preparation",
    "Resume positioning",
    "Project explanation practice",
    "Common interview questions",
    "SAP job description awareness",
    "Suitable SAP job guidance",
    "Interview confidence building",
  ];

  const areas = [
    "Downtown Vancouver",
    "Burnaby",
    "Richmond",
    "Surrey",
    "Coquitlam",
    "North Vancouver",
  ];

  const faqs = [
    ["Is SAP training offered in Vancouver for students?", "Yes. Students and graduates from Vancouver can take online SAP training based on their educational qualification and selected SAP module."],
    ["Which is the best SAP training course?", "There is no single best SAP course for everyone. Finance learners may choose SAP FICO, procurement learners may choose SAP MM or Ariba, HR professionals may choose SuccessFactors, and technical learners may choose ABAP, Basis or BTP."],
    ["Can working professionals enroll for SAP training?", "Yes. Online SAP training is suitable for working professionals who want to gain SAP skills while managing job schedules."],
    ["Is SAP experience necessary?", "SAP experience is not required for many beginner-level SAP courses. The right starting point depends on your background and module choice."],
    ["Are SAP training courses in Vancouver available online?", "Yes. SV CurioTech offers live online training so learners from Vancouver and nearby areas can attend remotely."],
    ["Does SV CurioTech offer interview preparation?", "Yes. Career counselling and interview preparation may be offered based on the selected training program."],
    ["What is the size of the training batches?", "SV CurioTech follows a small-batch training model. Batch size may range from 1 to 4 learners depending on the program."],
    ["How do I choose my SAP module?", "Consider your education, work experience, technical comfort and career goals. SV CurioTech can help compare suitable SAP module options."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in Vancouver",
    alternateName: [
      "SAP Course in Vancouver",
      "Online SAP Training Vancouver",
      "SAP FICO Training Vancouver",
      "SAP MM Training Vancouver",
      "SAP S/4HANA Training Vancouver",
    ],
    description:
      "Online SAP training in Vancouver from SV CurioTech covering SAP FICO, MM, SD, PP, HCM, SuccessFactors, ABAP, Ariba, S/4HANA, Basis, BW/HANA and BTP with practical learning, interview preparation and career guidance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: ["Vancouver", "British Columbia", "Canada"],
    courseMode: "Online",
    url: "https://www.svcuriotech.com/sap-training-in-vancouver",
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

  return (
    <>
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
              <span><strong>SV CurioTech</strong><small>SAP Online Training Vancouver</small></span>
            </Link>
            <nav>
              <a href="#training">Training</a>
              <a href="#sap-modules">SAP Modules</a>
              <a href="#career">Career Prep</a>
              <a href="#faq">FAQ</a>
              <a className="placement-nav-call" href={`tel:+91${phone}`}><Phone size={15}/> Call Now</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="placement-hero-v2">
            <div className="container placement-hero-v2-grid">
              <div className="placement-hero-v2-copy">
                <span className="placement-pill"><GraduationCap size={16}/> SAP Training in Vancouver, Canada</span>
                <h1>SAP Training in Vancouver</h1>
                <p>Build practical SAP skills with SV CurioTech through career-oriented online SAP training for learners in Vancouver, British Columbia. Learn SAP through business context, system concepts, module practice, interview preparation and small-batch guidance.</p>
                <div className="placement-trust-row">
                  <span><Star size={15} fill="currentColor"/> Live online classes</span>
                  <span><Users size={15}/> Small batches</span>
                  <span><BriefcaseBusiness size={15}/> Career guidance</span>
                  <span><CalendarCheck size={15}/> Flexible learning</span>
                </div>
                <div className="placement-hero-actions">
                  <a className="button" href="#enquiry">Enquire Now <ArrowRight size={18}/></a>
                  <a className="placement-outline-btn" href={`tel:+91${phone}`}><Phone size={17}/> Talk to Advisor</a>
                  <Link className="placement-outline-btn" to="/sap-training-in-canada">Canada Page <ArrowRight size={17}/></Link>
                </div>
              </div>
              <aside className="placement-enquiry-panel" id="enquiry">
                <span className="panel-label">Quick enquiry</span>
                <h2>Get Vancouver SAP course details</h2>
                <p>Share your details to get module guidance, batch timing, fees, syllabus and career preparation information.</p>
                <LeadForm variant="course-info" defaultCourse="SAP Training in Vancouver" />
              </aside>
            </div>
          </section>

          <section className="placement-stats-strip">
            <div className="container">
              <div><strong>Live</strong><span>Online training</span></div>
              <div><strong>1-4</strong><span>Small batch size</span></div>
              <div><strong>12+</strong><span>SAP learning paths</span></div>
              <div><strong>1:1</strong><span>Career guidance</span></div>
            </div>
          </section>

          <section className="placement-about-section" id="training">
            <div className="container placement-about-grid">
              <div className="placement-section-heading left">
                <span><Sparkles size={15}/> Practical SAP Training</span>
                <h2>Career-oriented SAP training for Vancouver learners</h2>
                <p>Vancouver has a growing mix of technology, logistics, manufacturing, retail, consulting and professional services firms. SAP skills can help learners connect business process knowledge with enterprise technology across finance, procurement, supply chain, sales, HR, data and IT roles.</p>
                <p>At SV CurioTech, SAP training goes beyond covering course material. Learners are guided to understand how SAP applications are used in business context, why each process matters and how different functions interact inside an enterprise system.</p>
                <p>The course is suitable for students, working professionals, career switchers and professionals who want to enhance their ERP skills through practical, mentor-led online learning.</p>
              </div>
              <div className="placement-about-points">
                {trainingBenefits.slice(0, 3).map(([title, text]) => <div key={title}><BadgeCheck/><strong>{title}</strong><span>{text}</span></div>)}
              </div>
            </div>
          </section>

          <section className="placement-why-section">
            <div className="container placement-section-heading">
              <span><BadgeCheck size={15}/> What learners practice</span>
              <h2>Practical SAP learning instead of theory alone</h2>
              <p>Training focuses on understanding SAP terminology, process flows, configuration concepts and real business use cases.</p>
            </div>
            <div className="container placement-benefit-grid">
              {practicalLearning.map(([title, text]) => <article key={title}><BadgeCheck/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="placement-modules-v2" id="sap-modules">
            <div className="container placement-section-heading">
              <span><GraduationCap size={15}/> SAP course offerings</span>
              <h2>Choose the SAP module that fits your background</h2>
              <p>SV CurioTech helps Vancouver learners compare SAP modules and select a suitable path based on education, experience and career goals.</p>
            </div>
            <div className="container placement-module-card-grid">
              {courseModules.map(([title, text, link, fit]) => (
                <Link className="placement-module-card-v2" key={title} to={link}>
                  <span>{title.includes("FICO") ? <Landmark/> : title.includes("MM") ? <Boxes/> : <BookOpen/>}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <small>{fit}</small>
                  <b>View course <ArrowRight size={15}/></b>
                </Link>
              ))}
            </div>
          </section>

          <section className="placement-why-section">
            <div className="container placement-section-heading">
              <span><Target size={15}/> Module guidance</span>
              <h2>Which SAP course should you choose?</h2>
              <p>The right SAP course depends on your prior field, interests and target role. These examples help learners start the comparison.</p>
            </div>
            <div className="container placement-benefit-grid">
              {moduleGuidance.map(([title, text]) => <article key={title}><Target/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="placement-about-section">
            <div className="container placement-about-grid">
              <div className="placement-section-heading left">
                <span><ShieldCheck size={15}/> Why Vancouver learners choose us</span>
                <h2>Small batches, flexible online learning and practical career support</h2>
                <p>Enterprise software can be difficult to learn in crowded classes. SV CurioTech uses a small-batch model so learners have more opportunity to interact with the trainer, clarify doubts and move through topics at a practical pace.</p>
                <p>Vancouver learners can attend online training without relocating. This helps students, full-time professionals, career changers and learners who prefer flexible study options continue their SAP learning with live guidance.</p>
              </div>
              <div className="placement-about-points">
                {trainingBenefits.slice(3).map(([title, text]) => <div key={title}><ShieldCheck/><strong>{title}</strong><span>{text}</span></div>)}
              </div>
            </div>
          </section>

          <section className="placement-roadmap-v2" id="career">
            <div className="container placement-roadmap-v2-grid">
              <div className="placement-section-heading left">
                <span><BriefcaseBusiness size={15}/> Career preparation</span>
                <h2>SAP training with interview and resume guidance</h2>
                <p>Completing an SAP course is only one part of preparing for SAP careers. Learners also need to explain concepts, talk about project work, understand SAP job descriptions and position their background clearly.</p>
                <p>SV CurioTech supports learners with career track guidance, interview preparation, resume direction and confidence-building practice based on the chosen SAP module.</p>
              </div>
              <div className="placement-step-list">
                {careerPreparation.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item}</h3><p>Guidance that helps Vancouver learners connect SAP training with practical job-readiness.</p></div></article>)}
              </div>
            </div>
          </section>

          <section className="placement-testimonial-section">
            <div className="container placement-section-heading">
              <span><Users size={15}/> Who can enroll?</span>
              <h2>SAP training for students, graduates and professionals</h2>
              <p>You do not need to be an SAP expert before joining. Your starting point depends on your education, experience and selected SAP module.</p>
            </div>
            <div className="container placement-review-grid">
              {learners.slice(0, 6).map((item) => <article key={item}><div className="review-stars"><Check size={16}/></div><p>{item} can explore a suitable SAP course path with beginner-friendly guidance and practical examples.</p><div><strong>{item}</strong><span>Eligible learner</span></div></article>)}
            </div>
          </section>

          <section className="placement-companies-section">
            <div className="container placement-section-heading">
              <span><BriefcaseBusiness size={15}/> Vancouver business context</span>
              <h2>SAP skills across Vancouver industries</h2>
              <p>SAP professionals are not limited to one business function. Skills can apply across finance, procurement, supply chain, HR, sales, consulting, technology and enterprise support teams.</p>
            </div>
            <div className="container placement-benefit-grid placement-company-level-grid">
              {vancouverIndustries.map(([title, text]) => <article key={title}><BriefcaseBusiness/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="placement-testimonial-section">
            <div className="container placement-section-heading">
              <span><Landmark size={15}/> Vancouver area coverage</span>
              <h2>Online SAP training for Vancouver and nearby areas</h2>
              <p>Because classes are online, learners from Vancouver and nearby British Columbia locations can attend live SAP training with trainer support.</p>
            </div>
            <div className="container placement-review-grid">
              {areas.map((area) => <article key={area}><div className="review-stars"><Check size={16}/></div><p>Join SAP training from {area} with module guidance, practical learning and interview preparation.</p><div><strong>SAP Training in {area}</strong><span>Vancouver online batch</span></div></article>)}
            </div>
          </section>

          <section className="placement-faq-v2" id="faq">
            <div className="container placement-section-heading">
              <span><MessageCircle size={15}/> FAQ</span>
              <h2>SAP Training in Vancouver questions</h2>
            </div>
            <div className="container placement-faq-list-v2">
              {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
            </div>
          </section>

          <section className="placement-final-cta">
            <div className="container">
              <h2>Start SAP Training in Vancouver with SV CurioTech</h2>
              <p>Get SAP module guidance, online batch timing, course fees, syllabus details and career preparation information.</p>
              <div><a className="button" href="#enquiry">Enquire Now <ArrowRight size={18}/></a><a href={`mailto:${email}`}><Mail size={16}/> {email}</a></div>
            </div>
          </section>
        </main>

        <a className="placement-whatsapp" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20Training%20in%20Vancouver.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
        <footer className="placement-contact-footer">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="placement-contact-list">
              <a href={`tel:+91${phone}`}><Phone size={17}/> Phone: +91 {phone}</a>
              <a href={`mailto:${email}`}><Mail size={17}/> Email: {email}</a>
              <a href="https://www.svcuriotech.com" target="_blank" rel="noreferrer">Website: www.svcuriotech.com</a>
              <span>Online SAP Training for Vancouver, Canada</span>
            </div>
            <p>Join SV CurioTech for SAP training in Vancouver with practical learning, small-batch guidance and career-oriented support.</p>
          </div>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
