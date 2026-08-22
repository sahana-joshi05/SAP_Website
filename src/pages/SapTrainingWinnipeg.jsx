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

export default function SapTrainingWinnipeg({ usePageSeo, phone, email, LeadForm }) {
  usePageSeo({
    title: "Online SAP Training for Winnipeg Learners | SV CurioTech",
    description:
      "Join live online SAP training from Winnipeg with SV CurioTech. Learn SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and BW/HANA.",
    keywords:
      "SAP Training in Winnipeg, SAP Course in Winnipeg, Online SAP Training Winnipeg, SAP FICO Training Winnipeg, SAP MM Training Winnipeg, SAP SD Training Winnipeg, SAP Ariba Training Winnipeg, SAP SuccessFactors Training Winnipeg, SAP S/4HANA Training Winnipeg, SAP Course Canada",
    canonical: "https://www.svcuriotech.com/sap-training-in-winnipeg",
    geo: null,
  });

  const whatsappPhone = "7022624629";
  const phoneNumbers = [phone, whatsappPhone];

  const courseModules = [
    ["SAP FICO Training in Winnipeg", "Financial accounting, management accounting, controlling, reporting, general ledger, payables, receivables and finance process examples.", "/courses/sap-fico", "Best suited for accounting, commerce, finance and MBA learners."],
    ["SAP MM Training in Winnipeg", "Procurement activities, vendor processes, inventory processes, material master, purchase orders and procurement transaction flow.", "/courses/sap-mm", "Best suited for purchasing, procurement, logistics and supply chain backgrounds."],
    ["SAP SD Training in Winnipeg", "Customer order processes, deliveries, shipping, invoicing and sales process integration with other business activities.", "/courses/sap-sd", "Best suited for sales, distribution, operations and customer process learners."],
    ["SAP PP Training in Winnipeg", "Production planning, manufacturing processes, planning, scheduling, BOM, routing and shop-floor process understanding.", "/courses/sap-pp", "Best suited for production, manufacturing, engineering and operations learners."],
    ["SAP Ariba Training", "Digital procurement, sourcing, supplier management, buying processes, procurement collaboration and Ariba process awareness.", "/courses/sap-ariba", "Best suited for procurement, sourcing and supplier management interests."],
    ["SAP ABAP, HCM, SuccessFactors, Basis and S/4HANA", "Explore technical development, HR systems, cloud HCM, SAP administration, S/4HANA, BW/HANA and related SAP technologies.", "/courses", "Best suited for learners comparing technical, HR and platform SAP roles."],
  ];

  const practicalLearning = [
    ["Business process first", "Understand why an SAP transaction exists before learning how to perform it on the screen."],
    ["Connected SAP workflows", "See how finance, purchasing, sales, materials, production and HR activities interact inside an enterprise system."],
    ["Practical examples", "Work through situations similar to professional business environments instead of studying topics in isolation."],
    ["Trainer interaction", "Ask questions, clarify concepts and discuss scenarios during live learning sessions."],
    ["Module-based learning", "Choose a specialization based on education, professional experience and career ambition."],
    ["Flexible online format", "Join training from Winnipeg without being limited to a fixed physical classroom schedule."],
  ];

  const learners = [
    "Fresh graduates",
    "B.Com graduates",
    "BBA graduates",
    "MBA learners",
    "Finance professionals",
    "Accounting professionals",
    "Procurement professionals",
    "Purchasing professionals",
    "Supply chain professionals",
    "Logistics professionals",
    "Sales professionals",
    "Operations professionals",
    "IT professionals",
    "Career switchers",
    "Current SAP users",
  ];

  const moduleGuidance = [
    ["Finance or accounting background", "SAP FICO can suit learners who want to connect accounting, reporting and controlling knowledge with enterprise systems."],
    ["Procurement or purchasing background", "SAP MM and SAP Ariba can help learners understand vendor processes, materials, inventory and digital procurement."],
    ["Sales or operations background", "SAP SD can help learners understand customer orders, shipping, billing and order-to-cash process flow."],
    ["Manufacturing or planning background", "SAP PP supports learners interested in production planning, scheduling and manufacturing operations."],
    ["HR background", "SAP HCM and SuccessFactors can fit learners interested in employee data, HR processes and cloud human capital management."],
    ["Technology background", "SAP ABAP, Basis, S/4HANA and BW/HANA can suit learners looking for technical or platform-oriented SAP roles."],
  ];

  const winnipegIndustries = [
    ["Business services", "SAP process knowledge helps learners understand structured finance, sales, procurement and reporting operations."],
    ["Manufacturing", "SAP PP, MM and FICO concepts connect planning, materials, production and financial posting flows."],
    ["Healthcare", "Enterprise systems support data, finance, procurement, HR and operational processes in large organizations."],
    ["Transport and logistics", "SAP MM, SD and Ariba concepts support procurement, inventory, vendor and order management understanding."],
    ["Finance and retail", "SAP FICO, SD and materials processes are useful for learners with reporting, sales and business operations interests."],
    ["Technology teams", "ABAP, Basis, S/4HANA and BW/HANA awareness can support ERP support, analytics and enterprise technology roles."],
  ];

  const faqs = [
    ["Can I do SAP training from Winnipeg?", "Yes. You can attend live online classes offered by SV CurioTech and take part in SAP training remotely from Winnipeg."],
    ["What is the best SAP module for beginners?", "The right module depends on your background. Finance learners may choose SAP FICO, procurement learners may choose SAP MM or Ariba, and sales learners may choose SAP SD."],
    ["Do I need an IT background to study SAP?", "No. Many SAP functional modules are based on business processes, so graduates and professionals from finance, procurement, sales, supply chain and other fields can learn SAP."],
    ["Are working professionals eligible for SAP training?", "Yes. Online learning can help working professionals attend SAP training while managing job schedules."],
    ["What SAP modules does SV CurioTech offer?", "SV CurioTech offers modules such as SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and other SAP technologies based on current program availability."],
    ["How can I select the SAP module?", "Start with your background. Education and experience in finance, procurement, sales, supply chain, HR, technology or another business area can guide the SAP specialization."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SAP Training in Winnipeg",
    alternateName: [
      "SAP Course in Winnipeg",
      "Online SAP Training Winnipeg",
      "SAP FICO Training Winnipeg",
      "SAP MM Training Winnipeg",
      "SAP Ariba Training Winnipeg",
    ],
    description:
      "Online SAP training in Winnipeg from SV CurioTech covering SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and BW/HANA with practical learning and career guidance.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: ["Winnipeg", "Manitoba", "Canada"],
    courseMode: "Online",
    url: "https://www.svcuriotech.com/sap-training-in-winnipeg",
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
              <span><strong>SV CurioTech</strong><small>SAP Online Training Winnipeg</small></span>
            </Link>
            <nav>
              <a href="#training">Training</a>
              <a href="#sap-modules">SAP Modules</a>
              <a href="#learners">Who Can Join</a>
              <a href="#faq">FAQ</a>
              <a className="placement-nav-call" href={`tel:+91${phone}`}><Phone size={15}/> Call Now</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="placement-hero-v2">
            <div className="container placement-hero-v2-grid">
              <div className="placement-hero-v2-copy">
                <span className="placement-pill"><GraduationCap size={16}/> SAP Training in Winnipeg, Canada</span>
                <h1>SAP Training in Winnipeg</h1>
                <p>SAP training is far beyond learning software screens and transaction codes. With SV CurioTech, Winnipeg learners build practical understanding of enterprise workflows across finance, purchasing, sales, materials management, production, human resources and related SAP domains.</p>
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
                <h2>Get Winnipeg SAP course details</h2>
                <p>Share your details to get module guidance, batch timing, fees, syllabus and online learning information.</p>
                <LeadForm variant="course-info" defaultCourse="SAP Training in Winnipeg" />
              </aside>
            </div>
          </section>

          <section className="placement-stats-strip">
            <div className="container">
              <div><strong>Live</strong><span>Online training</span></div>
              <div><strong>12+</strong><span>SAP learning paths</span></div>
              <div><strong>1:1</strong><span>Module guidance</span></div>
              <div><strong>Career</strong><span>Focused learning</span></div>
            </div>
          </section>

          <section className="placement-about-section" id="training">
            <div className="container placement-about-grid">
              <div className="placement-section-heading left">
                <span><Sparkles size={15}/> Practical SAP Learning</span>
                <h2>Learn SAP through business activities, not isolated topics</h2>
                <p>Many students look for SAP courses because they want to move from general IT or business knowledge into a more specific enterprise skill. Others already work in finance, purchasing, supply chain, sales, operations or technology and want SAP knowledge that connects with their current background.</p>
                <p>During training, SV CurioTech pays attention to the connection between concepts and practical examples. Instead of treating each SAP topic as a separate lesson, learners understand how activities are interconnected in the SAP environment.</p>
                <p>This approach helps beginners start with clarity and helps experienced professionals improve their SAP understanding with better business context.</p>
              </div>
              <div className="placement-about-points">
                {practicalLearning.slice(0, 3).map(([title, text]) => <div key={title}><BadgeCheck/><strong>{title}</strong><span>{text}</span></div>)}
              </div>
            </div>
          </section>

          <section className="placement-why-section">
            <div className="container placement-section-heading">
              <span><BadgeCheck size={15}/> Learning approach</span>
              <h2>From SAP modules to real business processes</h2>
              <p>For example, in procurement it is useful to know not only how to create a purchase order, but why the purchase is made, how the vendor is involved, how materials are received and how finance interacts with the transaction.</p>
            </div>
            <div className="container placement-benefit-grid">
              {practicalLearning.map(([title, text]) => <article key={title}><BadgeCheck/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="placement-modules-v2" id="sap-modules">
            <div className="container placement-section-heading">
              <span><GraduationCap size={15}/> SAP training programs</span>
              <h2>Choose a SAP module based on your knowledge and future plans</h2>
              <p>SV CurioTech offers SAP training across functional and technical domains so learners can choose a program that matches their background.</p>
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
              <span><Target size={15}/> Module selection</span>
              <h2>Which SAP specialization should you choose?</h2>
              <p>The main question is not only whether SAP is popular. The better question is which SAP specialization is relevant to your skills and ambitions.</p>
            </div>
            <div className="container placement-benefit-grid">
              {moduleGuidance.map(([title, text]) => <article key={title}><Target/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="placement-testimonial-section" id="learners">
            <div className="container placement-section-heading">
              <span><Users size={15}/> Who can join?</span>
              <h2>SAP training for Winnipeg students, graduates and professionals</h2>
              <p>Learning SAP does not require a specific computer science background. Previous experience helps decide which module is most suitable.</p>
            </div>
            <div className="container placement-review-grid">
              {learners.slice(0, 6).map((item) => <article key={item}><div className="review-stars"><Check size={16}/></div><p>{item} can explore a suitable SAP learning path with practical examples and online trainer guidance.</p><div><strong>{item}</strong><span>Eligible learner</span></div></article>)}
            </div>
          </section>

          <section className="placement-about-section">
            <div className="container placement-about-grid">
              <div className="placement-section-heading left">
                <span><ShieldCheck size={15}/> Why Winnipeg professionals learn SAP</span>
                <h2>Useful for structured business processes and large information flows</h2>
                <p>Winnipeg has a diverse business environment across business services, manufacturing, healthcare, transport, finance, retail and technology. Enterprise application knowledge can benefit professionals whose work involves structured processes and large amounts of information.</p>
                <p>Online SAP learning can fit into the life of a busy professional while still keeping trainer interaction, doubt clearing and practical exercises part of the learning process.</p>
              </div>
              <div className="placement-about-points">
                {winnipegIndustries.slice(0, 4).map(([title, text]) => <div key={title}><BriefcaseBusiness/><strong>{title}</strong><span>{text}</span></div>)}
              </div>
            </div>
          </section>

          <section className="placement-companies-section">
            <div className="container placement-section-heading">
              <span><BriefcaseBusiness size={15}/> Winnipeg business context</span>
              <h2>SAP skills across Winnipeg industries</h2>
              <p>SAP skills can support conversations across finance, procurement, sales, HR, manufacturing, logistics, analytics and enterprise support teams.</p>
            </div>
            <div className="container placement-benefit-grid placement-company-level-grid">
              {winnipegIndustries.map(([title, text]) => <article key={title}><BriefcaseBusiness/><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </section>

          <section className="placement-faq-v2" id="faq">
            <div className="container placement-section-heading">
              <span><MessageCircle size={15}/> FAQ</span>
              <h2>SAP Training in Winnipeg questions</h2>
            </div>
            <div className="container placement-faq-list-v2">
              {faqs.map(([question, answer], index) => <article key={question}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}
            </div>
          </section>

          <section className="placement-final-cta">
            <div className="container">
              <h2>Start your SAP learning path from Winnipeg</h2>
              <p>Discover SAP training with SV CurioTech and find a learning path that corresponds to your career aspirations.</p>
              <div><a className="button" href="#enquiry">Enquire Now <ArrowRight size={18}/></a><a href={`mailto:${email}`}><Mail size={16}/> {email}</a></div>
            </div>
          </section>
        </main>

        <a className="placement-whatsapp" href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20Training%20in%20Winnipeg.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/><span>WhatsApp</span></a>
        <footer className="placement-contact-footer">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="placement-contact-list">
              <a href={`tel:+91${phone}`}><Phone size={17}/> Phone: +91 {phone}</a>
              <a href={`mailto:${email}`}><Mail size={17}/> Email: {email}</a>
              <a href="https://www.svcuriotech.com" target="_blank" rel="noreferrer">Website: www.svcuriotech.com</a>
              <span>Online SAP Training for Winnipeg, Canada</span>
            </div>
            <p>Join SV CurioTech for SAP training in Winnipeg with practical learning, module guidance and career-oriented support.</p>
          </div>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
