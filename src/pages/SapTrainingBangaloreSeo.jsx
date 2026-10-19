import React from "react";

const modules = [
  ["SAP FICO Training", "Finance and Controlling", "For commerce graduates, accountants, CA/CMA aspirants and finance professionals. Learn general ledger, AP/AR, asset and bank accounting, cost and profit centres, internal orders and period-end closing.", "/sap-fico-training-in-bangalore"],
  ["SAP MM Training", "Materials Management", "For supply chain, procurement and inventory careers. Cover purchase requisitions and orders, goods receipt, invoice verification, inventory and vendor management.", "/best-sap-mm-course-in-bangalore/"],
  ["SAP SD Training", "Sales and Distribution", "For sales operations, logistics and order-management roles. Cover pricing, order-to-cash, delivery, billing, credit management and availability checks.", "/sap-sd-training-in-bangalore/"],
  ["SAP ABAP Training", "Technical development", "For programmers and engineering graduates. Cover ABAP reports, dialog programming, forms, enhancements, the data dictionary, ABAP on HANA and CDS views.", "/courses/sap-abap"],
  ["SAP S/4HANA Training", "Modern ERP transition", "For SAP users moving to the latest platform. Understand new architecture, simplified data models, Fiori apps and the consultant-facing changes from ECC.", "/courses/sap-fico"],
  ["SAP HCM / SuccessFactors Training", "Cloud HR", "For HR professionals. Learn organisational management, personnel administration, time management, payroll foundations and cloud HR concepts.", "/courses/successfactors"],
  ["SAP BTP and Analytics", "Integration, extension and reporting", "For learners interested in SAP Business Technology Platform, integration, extensions and reporting. Ask us about Basis, PP or SAP Analytics Cloud batches.", "/contact?course=SAP%20BTP%20and%20Analytics#registration"],
];

const faqItems = [
  ["What SAP module should one learn in Bangalore?", "It depends on your background. Finance graduates generally choose SAP FICO; supply chain and procurement professionals often prefer MM or SD; and programmers select ABAP. A brief counselling session can match your profile to a realistic path."],
  ["Can a fresher learn SAP and get a job?", "Yes. Many new entrants begin through training, a strong project portfolio and certification preparation. Companies do hire trainees and junior consultants, but consistent practice and good interview preparation are essential."],
  ["Is coding necessary for SAP training?", "Functional modules such as FICO, MM, SD and HCM do not require coding. Technical tracks such as ABAP require programming knowledge."],
  ["How long does SAP training last?", "Most modules take around 2.5 to 3 months, depending on the batch type. Fast-track and weekend options can affect the timeline."],
  ["How much is SAP training in Bangalore at SV CurioTech?", "Fees depend on the chosen module and training mode. Contact us for the current fee structure and available payment-instalment options."],
  ["Do you provide SAP online training?", "Yes. We provide live online classes for learners outside Bangalore and for those who prefer to study from home."],
  ["Is SAP still worth learning?", "Yes. Large organisations continue to run vital finance, supply chain and HR operations on SAP. The ongoing move to S/4HANA maintains demand for trained professionals."],
  ["Will I get hands-on practice?", "Yes. Each module includes practical work in an SAP environment as well as a final project or case study."],
  ["Can I attend a demo class before joining?", "Yes. Book a free demo to meet the trainer, understand the teaching style and ask questions before deciding."],
];

const advantages = [
  ["01", "Working project experience", "Our trainers bring consulting and support experience into every session, including the context behind real project and production issues."],
  ["02", "Real system access", "Practise in an actual SAP environment and build the muscle memory useful for interviews and your first job. Three months of server access is included."],
  ["03", "Business processes before transactions", "Learn why a business does something before learning how SAP records it, so you can think and speak like a consultant."],
  ["04", "Scenario assignments and a capstone", "Finish with a complete case study that you can discuss in interviews and include on your resume."],
  ["05", "Small, interactive batches", "Ask questions, receive feedback and work through difficult concepts with meaningful trainer attention."],
  ["06", "Flexible learning modes", "Attend live online weekday or weekend batches, with recordings available for revision when needed."],
];

const audience = [
  "Fresh graduates: B.Com, BBA, MBA, B.E./B.Tech, BCA and MCA learners seeking a strong first career move.",
  "Working professionals in finance, HR, supply chain, sales or IT who want to move into an ERP role.",
  "Existing SAP users upskilling to S/4HANA or adding a second module.",
  "Career returners re-entering the workforce with an in-demand skill.",
  "Support and testing professionals shifting into functional or technical consulting.",
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="blr-section-heading"><span className="blr-eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function PlacementProof({ StudentFeedbackVideos, officialCompanyLogos }) {
  return <section className="blr-placement-proof section" id="placements"><div className="container"><div className="blr-proof-intro"><div><SectionHeading eyebrow="STUDENT AND EMPLOYER PROOF" title="Build a SAP story you can explain with confidence." text="Training is only the first step. The next step is showing recruiters what you practised, how you solved business scenarios and which role you are preparing for." /><div className="blr-proof-points"><span><b>01</b> Resume and LinkedIn guidance for SAP roles</span><span><b>02</b> Project explanation and mock-interview practice</span><span><b>03</b> Module guidance based on your background</span></div></div><aside className="blr-proof-board" aria-label="SAP career preparation roadmap"><span>CAREER PREPARATION</span><strong>Learn → Practise → Explain</strong><p>Turn module concepts, system tasks and business scenarios into a clear interview narrative.</p><div><i>Module</i><i>Project</i><i>Interview</i></div></aside></div>{StudentFeedbackVideos && <StudentFeedbackVideos />}<div className="blr-company-grid">{(officialCompanyLogos || []).map(([name, src]) => <div className="blr-company" key={name}><img src={src} alt={`${name} logo`} loading="lazy"/><span>{name}</span></div>)}</div></div></section>;
}

export default function SapTrainingBangaloreSeo({ usePageSeo, phone, email, LeadForm, Layout, StudentFeedbackVideos, officialCompanyLogos }) {
  usePageSeo({
    title: "SAP Training in Bangalore | Live Projects & Placement Help",
    description: "Join SAP training in Bangalore at SV CurioTech. Learn S/4HANA, FICO, MM, SD and ABAP from working consultants. Live projects, certification preparation and placement support.",
    keywords: "SAP training in Bangalore, SAP course in Bangalore, SAP training institute in Bangalore, SAP certification training Bangalore, SAP online training, SAP training with placement, SAP S/4HANA training, SAP FICO training, SAP MM training, SAP SD training, SAP ABAP training, SAP HCM training, SAP BTP training",
    canonical: "https://www.svcuriotech.com/sap-training-in-bangalore",
    openGraphTitle: "SAP Training in Bangalore – Learn from Working SAP Consultants",
    openGraphDescription: "Hands-on SAP courses in Bangalore with real project practice, certification guidance and career support. Book a free demo class.",
  });

  const courseSchema = { "@context": "https://schema.org", "@type": "Course", name: "SAP Training in Bangalore", description: "Hands-on SAP training with live projects, certification guidance and placement support.", provider: { "@type": "EducationalOrganization", name: "SV CurioTech", url: "https://www.svcuriotech.com/" }, hasCourseInstance: { "@type": "CourseInstance", courseMode: "Live online and classroom guidance", location: { "@type": "Place", name: "Bangalore" } } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const organizationSchema = { "@context": "https://schema.org", "@type": "EducationalOrganization", name: "SV CurioTech", url: "https://www.svcuriotech.com/", telephone: `+91${phone}`, email, address: { "@type": "PostalAddress", streetAddress: "Unit 101, Oxford Towers, 139, Kodihalli, H.A.L II Stage, Bangalore North", addressLocality: "Bangalore", addressRegion: "Karnataka", postalCode: "560008", addressCountry: "IN" } };

  return <Layout><div className="blr-seo-page" id="top">
    <section className="blr-hero"><div className="container blr-hero-grid"><div><span className="blr-eyebrow">SAP CAREER TRAINING · BANGALORE</span><h1>SAP Training in Bangalore — Build a Career That Companies Actually Hire For</h1><p>Bangalore runs on SAP across banks, manufacturers, retailers and IT services companies. At SV CurioTech, you build the confidence to discuss actual system work in an interview, not just recite textbook definitions. Learn in a live SAP environment, work through business scenarios and get guidance from trainers who have delivered client projects.</p><div className="blr-actions"><a className="button" href="#enquiry">Book a Free Demo Class</a><a className="blr-text-link" href={`tel:+91${phone}`}>Talk to a Course Advisor →</a></div><div className="blr-proof"><span><strong>2.5–3</strong> months</span><span><strong>Live</strong> SAP practice</span><span><strong>Weekday</strong> & weekend</span></div></div><aside className="blr-hero-card"><img className="blr-hero-photo" src="/assets/sap-training-hero.jpg" alt="SAP training classroom in Bangalore at SV CurioTech"/><div className="blr-hero-card-content"><span className="blr-card-label">YOUR SAP PATH</span><strong>Learn the process.<br/>Practise the system.<br/><em>Build the story.</em></strong><div className="blr-mini-flow"><span>Business case</span><i>→</i><span>SAP system</span><i>→</i><span>Interview confidence</span></div></div></aside></div></section>

    <section className="blr-intro section" id="about"><div className="container blr-two-col"><div className="blr-story-visual"><img src="/assets/corporate-sap-meeting-hero.png" alt="SAP trainer leading a hands-on business process session in Bangalore" loading="lazy"/><div><span>REAL-WORLD LEARNING</span><strong>Business process first.<br/>Configuration second.</strong></div><span className="blr-eyebrow">WHY LEARN SAP IN BANGALORE?</span><h2>A city where SAP skills meet real opportunity.</h2></div><div><p>Bangalore is one of the few Indian cities where SAP opportunities span almost every industry. Global capability centres, product companies, large IT services firms, manufacturers and fast-growing start-ups use SAP, with many moving from ECC to SAP S/4HANA.</p><p>This migration matters because companies need professionals who understand the newer platform, not only traditional ECC. Training in Bangalore also gives you access to interviews, meetups and hiring discussions happening across the city.</p><div className="blr-bullet-list"><span>A strong year-round market across consulting, enterprise IT and internal SAP support teams.</span><span>Specialised SAP skills can command stronger salaries than general IT roles at comparable experience levels.</span><span>Paths in consulting, support, implementation, analytics and technical development.</span><span>Globally used skills that can travel with your career.</span></div></div></div></section>

    <section className="blr-modules section" id="courses"><div className="container"><SectionHeading eyebrow="SAP COURSES WE OFFER" title="Choose the module that matches your background." text="If you are uncertain, our counsellors will help you make a decision in a brief, no-pressure conversation." /><div className="blr-course-showcase"><img src="/assets/sap-fico-ai-training-hero.png" alt="Trainer explaining SAP analytics and process flow to a classroom" loading="lazy"/><div><span>MODULE-BASED LEARNING</span><strong>One platform.<br/>Multiple career paths.</strong><p>Explore functional, technical, cloud and analytics tracks without guessing which direction fits you.</p></div></div><div className="blr-module-grid">{modules.map(([name, sub, copy, href], index) => <a className="blr-module" href={href} key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><small>{sub}</small><p>{copy}</p><b>Explore module →</b></a>)}</div></div></section>

    <section className="blr-difference section"><div className="container"><SectionHeading eyebrow="WHAT MAKES OUR SAP COURSE DIFFERENT" title="Practical by design, supportive by default." text="Many institutes make similar promises. These are the areas we focus on in day-to-day training." /><div className="blr-difference-grid">{advantages.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="blr-syllabus section"><div className="container blr-two-col"><div><span className="blr-eyebrow">SAP TRAINING SYLLABUS</span><h2>How a typical SAP course runs.</h2><p>Every module has its own detailed curriculum, but the learning path follows a clear practical sequence.</p><a className="blr-text-link" href="#enquiry">Request the detailed syllabus →</a></div><ol>{["SAP basics: ERP concepts, architecture, navigation, organisational structure and master data.", "Core configuration and processes for your module and its main business cycle.", "Integration: how your module connects to other SAP modules in real projects.", "Reporting and troubleshooting: standard reports, common errors and support-ticket handling.", "A live project or case study that brings the elements together.", "Career preparation: resume building, mock interviews, interview-question practice and certification guidance."].map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ol></div></section>

    <section className="blr-eligibility section"><div className="container"><span className="blr-eyebrow">ELIGIBILITY</span><h2>You do not need a computer science degree to get started.</h2><p>Typical learners include:</p><div className="blr-audience">{audience.map((item) => <span key={item}>✓ {item}</span>)}</div></div></section>

    <section className="blr-detail section"><div className="container blr-two-col"><div><span className="blr-eyebrow">SAP CERTIFICATION GUIDANCE</span><h2>Prepare with a clear certification plan.</h2></div><div><p>SAP certification can be a helpful signal to employers, especially for people new to the field. We help you identify the appropriate certification for your module, understand the exam structure and prepare effectively.</p><p>Our training aligns with the topics covered in official SAP certification examinations. Exams are conducted by SAP through its authorised channels.</p></div></div></section>

    <section className="blr-career section"><div className="container blr-two-col"><div><span className="blr-eyebrow">CAREER SUPPORT AND PLACEMENT ASSISTANCE</span><h2>Training should lead to a clearer next move.</h2><p>After your course, we support your job search with preparation, guidance and relevant opportunities. Your practical work and interview performance make the difference.</p></div><div className="blr-career-list"><span>Reviewing and polishing your SAP resume</span><span>Mock technical and HR interviews</span><span>Guidance on presenting your project work and certification</span><span>Relevant opening updates and referrals for suitable profiles</span><strong>Roles you can target: SAP Functional Consultant · SAP Support Analyst · SAP FICO Consultant · SAP MM Consultant · SAP SD Consultant · SAP ABAP Developer · SAP S/4HANA Analyst · SAP Business Analyst</strong></div></div></section>

    <section className="blr-facts section"><div className="container"><div className="blr-facts-grid"><div><b>Location</b><span>Bangalore</span></div><div><b>Training modes</b><span>Live online classes</span></div><div><b>Duration</b><span>2.5–3 months</span></div><div><b>Batch timings</b><span>Weekday, weekend</span></div><div><b>Demo class</b><span>Free</span></div><div><b>Certification</b><span>SV CurioTech completion certificate</span></div></div></div></section>

    <PlacementProof StudentFeedbackVideos={StudentFeedbackVideos} officialCompanyLogos={officialCompanyLogos} />

    <section className="blr-faq section" id="faq"><div className="container"><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title="Answers before you book your demo." /><div className="blr-faq-grid">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="blr-cta" id="enquiry"><div className="container"><div><span className="blr-eyebrow">KICK-START YOUR SAP CAREER JOURNEY</span><h2>Join a practical, career-focused SAP training institute in Bangalore.</h2><p>Book a free demo class, ask your questions and choose the course that fits your background and goals.</p><p><a href={`tel:+91${phone}`}>+91 {phone}</a><br/><a href={`mailto:${email}`}>{email}</a><br/>Bangalore · www.svcuriotech.com</p></div><aside className="blr-enquiry-card"><h3>Book your free demo class</h3><LeadForm variant="course-info" defaultCourse="SAP Training in Bangalore" /></aside></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
  </div></Layout>;
}
