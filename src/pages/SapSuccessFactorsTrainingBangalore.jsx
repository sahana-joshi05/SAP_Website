import React, { useEffect, useRef } from "react";
import { ArrowRight, BriefcaseBusiness, Check, CircleHelp, Compass, GraduationCap, Layers3, MessageCircle, Phone, Sparkles, UsersRound } from "lucide-react";
import LearnerAchievementCarousel from "../components/LearnerAchievementCarousel";
import "./SapSuccessFactorsTrainingBangalore.css";
import "./SapSuccessFactorsTopbar.css";
import "./SapSuccessFactorsPlacement.css";
import "./SapSuccessFactorsVisualPolish.css";

const modules = [
  ["01", "Employee Central", "Core employee data, organisational structures, jobs, workflows, role-based permissions and lifecycle changes."],
  ["02", "Recruiting", "Job requisitions, candidate applications, recruiting stages and the hand-off to onboarding."],
  ["03", "Onboarding", "Pre-boarding tasks, documents, responsibilities and a more structured new-hire journey."],
  ["04", "Performance & Goals", "Goal plans, performance cycles, feedback, evaluation conversations and manager participation."],
  ["05", "Learning", "Learning assignments, programmes, completion records and administrator or learner responsibilities."],
  ["06", "Compensation & Career", "Compensation planning, development goals, succession concepts and talent-planning awareness."],
];

const routes = [
  ["HR operations", "Employee Central", "Learn how core HR information, structures and approvals connect."],
  ["Recruitment", "Recruiting", "Explore the flow from requisition to candidate selection."],
  ["Employee experience", "Onboarding", "Understand coordinated tasks for new hires, HR teams and managers."],
  ["Performance management", "Performance & Goals", "Study goal setting, reviews and the people involved in each cycle."],
  ["Learning coordination", "Learning", "See how assignments and learning records can be managed."],
  ["Talent planning", "Compensation & Career", "Explore development, succession and compensation concepts."],
];

const faqs = [
  ["What is SAP SuccessFactors training?", "SAP SuccessFactors training introduces cloud HR processes and the platform areas that support employee data, recruiting, onboarding, performance and learning. The exact module coverage depends on the current course offering."],
  ["Can a fresher learn SAP SuccessFactors?", "Yes. A beginner can start with HR process fundamentals and a selected module such as Employee Central. The most useful learning path depends on your background, practice time and the batch syllabus."],
  ["Do I need coding knowledge?", "Most functional SuccessFactors learning focuses on HR processes, system configuration concepts, data and workflow logic rather than conventional programming. Integration, reporting and technical roles can require additional skills."],
  ["Which SuccessFactors module should I choose?", "Employee Central is often a helpful starting point for core HR. Recruiting, Onboarding, Learning and Performance & Goals may suit specific HR interests. Discuss your profile and current module availability before enrolling."],
  ["Is online SAP SuccessFactors training available?", "Contact SV CurioTech to confirm the currently available learning format, instructor-led sessions, practical elements, recordings and upcoming batch schedule."],
  ["What are the course fees and duration?", "Fees and duration depend on the selected module, batch format and current syllabus. Contact SV CurioTech for the latest fee structure, total learning hours and weekday or weekend schedule."],
  ["What is included in the SAP SuccessFactors syllabus?", "The syllabus can include HR process fundamentals and module topics such as Employee Central, Recruiting, Onboarding, Performance and Goals, Learning, and Compensation awareness. Confirm the exact current module coverage before enrolling."],
  ["Is placement support available after training?", "Ask the team about current resume guidance, mock interviews, project-explanation practice and career support. These services can support readiness but do not guarantee employment."],
  ["Will this course guarantee a job?", "No course can guarantee employment. Training can help build relevant knowledge, scenario-thinking and interview readiness; opportunities depend on your prior experience, module skills and employer requirements."],
];

function SectionTitle({ eyebrow, title, text }) {
  return <div className="sf-section-title"><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function SapSuccessFactorsTrainingBangalore({ usePageSeo, phone, email, LeadForm, Layout, StudentFeedbackVideos, SampleTestimonials, officialCompanyLogos }) {
  const motionRoot = useRef(null);

  useEffect(() => {
    const root = motionRoot.current;
    if (!root || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const targets = root.querySelectorAll([
      ".sf-hero-copy",
      ".sf-orbit",
      ".sf-section-title",
      ".sf-lifecycle",
      ".sf-module-grid article",
      ".sf-practice-feature",
      ".sf-scenarios article",
      ".sf-path-list article",
      ".sf-audience-cards span",
      ".sf-career-grid article",
      ".sf-placement-points span",
      ".sf-faq details",
      ".sf-company-grid article",
      ".student-feedback-video-head",
      ".student-feedback-video-card",
      ".testimonials-section .section-title",
      ".testimonial-grid .testimonial",
    ].join(","));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sf-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    root.classList.add("sf-motion-ready");
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("sf-motion-ready");
    };
  }, []);

  usePageSeo({
    title: "SAP SuccessFactors Training in Bangalore | SV CurioTech",
    description: "Learn SAP SuccessFactors in Bangalore with practical, module-focused training. Explore HR technology, hands-on learning and career opportunities.",
    keywords: "SAP SuccessFactors training in Bangalore, SAP SuccessFactors online training, SAP HR training, SAP SuccessFactors modules, SAP SuccessFactors course in Bangalore, SAP SuccessFactors career opportunities, SAP SuccessFactors Employee Central training",
    canonical: "https://www.svcuriotech.com/sap-successfactors-training-in-bangalore/",
    image: "https://www.svcuriotech.com/assets/corporate-sap-meeting-hero.png",
    openGraphTitle: "SAP SuccessFactors Training in Bangalore | SV CurioTech",
  });

  const courseSchema = { "@context": "https://schema.org", "@type": "Course", name: "SAP SuccessFactors Training in Bangalore", description: "Module-focused SAP SuccessFactors training covering HR technology concepts, Employee Central, Recruiting, Onboarding, Performance & Goals, Learning and Compensation awareness.", provider: { "@type": "EducationalOrganization", name: "SV CurioTech", url: "https://www.svcuriotech.com/", telephone: `+91${phone}`, email }, areaServed: "Bangalore", courseMode: "Ask for current classroom or live online availability", url: "https://www.svcuriotech.com/sap-successfactors-training-in-bangalore/" };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };

  return <Layout><div className="sf-page" id="top" ref={motionRoot}>
    <section className="sf-hero"><div className="container sf-hero-grid"><div className="sf-hero-copy"><p className="sf-kicker"><Sparkles size={15}/> CLOUD HR · BANGALORE</p><h1>SAP SuccessFactors Training in Bangalore</h1><p className="sf-lead">Build a practical understanding of modern HR technology—from employee data and recruiting to learning, performance and people processes.</p><p className="sf-subcopy">This SAP SuccessFactors course at SV CurioTech is designed to help you connect HR requirements with system thinking. Explore the modules, ask about the current syllabus and choose a learning path that fits your background.</p><div className="sf-actions"><a className="sf-primary" href="#enquiry">Get course details <ArrowRight size={18}/></a><a className="sf-phone" href={`tel:+91${phone}`}><Phone size={17}/> +91 {phone}</a></div><div className="sf-pills"><span><Check size={15}/> Module-focused learning</span><span><Check size={15}/> HR process context</span><span><Check size={15}/> Career-path guidance</span></div></div><div className="sf-hero-visual"><aside className="sf-orbit" aria-label="SAP SuccessFactors employee lifecycle visual"><div className="sf-orbit-core"><span>SAP</span><strong>Success<br/>Factors</strong><small>Human experience management</small></div><div className="sf-orbit-node node-one">Recruit</div><div className="sf-orbit-node node-two">Onboard</div><div className="sf-orbit-node node-three">Grow</div><div className="sf-orbit-node node-four">Perform</div></aside><div className="sf-hero-visual-note"><span>CONNECTED HR JOURNEY</span><div><b>01</b><strong>Core HR</strong><i/><b>02</b><strong>Talent</strong><i/><b>03</b><strong>Growth</strong></div></div></div></div></section>

    <section className="sf-trust"><div className="container"><span>Explore</span><b>HR process fundamentals</b><i/> <b>Module awareness</b><i/> <b>Business scenarios</b><i/> <b>Career direction</b></div></section>

    <section className="sf-section sf-intro" id="about"><div className="container sf-intro-grid"><div><SectionTitle eyebrow="ABOUT SVCURIO TECH" title="A clearer view of the employee lifecycle." text="SVCURIO Tech helps learners explore HR technology through structured, module-focused SAP SuccessFactors training in Bangalore."/><p>Organisations use different SuccessFactors solutions to manage employee information, talent acquisition, onboarding, performance, learning and compensation. Learning the platform means more than memorising module names—it means understanding the HR process, data, workflow and permissions behind each activity.</p><p>Whether you are new to SAP, work in HR, or are considering a move into enterprise applications, discuss the available learning path with our team before choosing a batch.</p></div><div className="sf-lifecycle"><span>Employee lifecycle</span><div><b>01</b><p>Capture employee information</p></div><div><b>02</b><p>Recruit and onboard talent</p></div><div><b>03</b><p>Set goals, learn and grow</p></div><div><b>04</b><p>Support people decisions</p></div></div></div></section>

    <section className="sf-section sf-modules" id="course"><div className="container"><SectionTitle eyebrow="SAP SUCCESSFACTORS COURSE" title="Discover the SAP SuccessFactors modules." text="The course is designed around HR process fundamentals, module-based learning, business-process understanding and career preparation. Confirm the modules included in the current batch before enrolling."/><div className="sf-module-grid">{modules.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><em>Explore module <ArrowRight size={15}/></em></article>)}</div></div></section>

    <section className="sf-section sf-practice" id="learning"><div className="container sf-practice-grid"><div className="sf-sticky-title"><SectionTitle eyebrow="LEARN THROUGH SCENARIOS" title="Turn HR requirements into structured thinking." text="Practical learning is strongest when you can explain how a business process becomes a system activity."/><a href="#enquiry" className="sf-text-link">Ask about practical learning <ArrowRight size={16}/></a><figure className="sf-practice-feature"><img src="/assets/corporate-sap-meeting-hero.png" alt="An instructor guiding learners through an enterprise HR technology process" loading="lazy" decoding="async"/><figcaption>People. Processes. Platforms.</figcaption></figure></div><div className="sf-scenarios"><article><span>Scenario 01</span><h3>Employee data update</h3><p>Consider which employee details must change, who approves the request and how accurate data supports the HR process.</p></article><article><span>Scenario 02</span><h3>Recruitment to onboarding</h3><p>Map the stages from an open role and candidate review through to joining tasks and a completed employee record.</p></article><article><span>Scenario 03</span><h3>Performance cycle</h3><p>Analyse how employees and managers participate in goal setting, feedback and review activities.</p></article><article><span>Scenario 04</span><h3>HR process issue</h3><p>Identify questions, stakeholders and next steps when a record, workflow or process outcome appears incorrect.</p></article></div></div></section>

    <section className="sf-section sf-paths"><div className="container"><SectionTitle eyebrow="CHOOSE YOUR DIRECTION" title="Start with the area closest to your experience."/><div className="sf-path-list">{routes.map(([background, module, text]) => <article key={background}><span>{background}</span><h3>{module}</h3><p>{text}</p><Compass size={19}/></article>)}</div></div></section>

    <section className="sf-section sf-audience"><div className="container sf-audience-grid"><div><SectionTitle eyebrow="WHO CAN JOIN?" title="A course for HR-minded problem solvers." text="Whether you are entering HR technology or extending experience you already have, your route can be matched to the relevant modules."/></div><div className="sf-audience-cards"><span><UsersRound/> HR professionals & graduates</span><span><Layers3/> SAP HR / HCM professionals</span><span><GraduationCap/> Fresh graduates</span><span><BriefcaseBusiness/> Working professionals & career switchers</span></div></div></section>

    <section className="sf-section sf-career" id="career"><div className="container sf-career-grid"><div><p className="sf-kicker"><BriefcaseBusiness size={15}/> CAREER CONTEXT</p><h2>Understand where your learning can lead.</h2><p>SuccessFactors knowledge can support conversations about HR systems, enterprise applications and functional processes. Roles depend on your experience, selected module, practical skills and the requirements of each employer.</p></div><div><article><b>SAP SuccessFactors Functional Consultant</b><span>Translate HR requirements into an appropriate system approach.</span></article><article><b>HRIS / HR Systems Analyst</b><span>Support HR applications, information needs, reporting and process improvement.</span></article><article><b>Application Support Analyst</b><span>Investigate issues and help users work reliably with HR application processes.</span></article><article><b>HR Technology Project Team Member</b><span>Contribute to requirements, testing, documentation and implementation support.</span></article></div></div></section>

    <section className="sf-section sf-placement" id="placements">
      <div className="container sf-placement-intro">
        <SectionTitle eyebrow="PLACEMENT PREPARATION" title="See the learning experience and career support." text="Explore direct learner feedback, Google reviews and the organisations represented in our career-focused learning community." />
        <div className="sf-placement-points">
          <span><Check size={16} /> Resume and LinkedIn guidance</span>
          <span><Check size={16} /> Project explanation practice</span>
          <span><Check size={16} /> Technical and HR interview preparation</span>
        </div>
      </div>
      <LearnerAchievementCarousel />
      {StudentFeedbackVideos && <StudentFeedbackVideos />}
      {SampleTestimonials && <SampleTestimonials limit={6} />}
      <div className="container sf-company-wrap">
        <p>Official company logos</p>
        <div className="sf-company-grid">{(officialCompanyLogos || []).map(([name, src]) => <article key={name}><img src={src} alt={`${name} logo`} loading="lazy" /><span>{name}</span></article>)}</div>
      </div>
    </section>

    <section className="sf-section sf-faq" id="faq"><div className="container"><SectionTitle eyebrow="FAQ" title="Questions before you choose a course."/><div className="sf-faq-grid">{faqs.map(([question, answer]) => <details key={question}><summary><CircleHelp size={18}/>{question}</summary><p>{answer}</p></details>)}</div></div></section>

    <section className="sf-enquiry" id="enquiry"><div className="container sf-enquiry-grid"><div><p className="sf-kicker"><MessageCircle size={15}/> NEXT STEP</p><h2>Ask for the current SAP SuccessFactors batch details.</h2><p>Discuss module availability, learning format, practical exercises, schedule, course fees and any career-preparation support available for your chosen path.</p><a href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20SAP%20SuccessFactors%20Training%20in%20Bangalore.`} target="_blank" rel="noreferrer" className="sf-whatsapp"><MessageCircle size={18}/> WhatsApp our team</a></div><aside><h3>Request course information</h3><LeadForm variant="course-info" defaultCourse="SAP SuccessFactors Training in Bangalore"/></aside></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </div></Layout>;
}
