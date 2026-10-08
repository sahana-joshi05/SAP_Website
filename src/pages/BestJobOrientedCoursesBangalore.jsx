import React from "react";
import { Link } from "react-router-dom";
import StudentFeedbackVideos from "../components/StudentFeedbackVideos";
import { testimonials } from "../data";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Grid3X3,
  GraduationCap,
  Instagram,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import "./BestJobOrientedCoursesBangalore.css";

const instagramUrl = "https://www.instagram.com/sv_curiotech?stkn=MW96eG5sNWpla3h3cQ==";
const linkedinUrl = "https://www.linkedin.com/in/sv-curiotech-7764a0419?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const branchAddresses = [
  {
    city: "Bangalore",
    address: "Unit 101, Oxford Towers, 139, Kodihalli, H.A.L II Stage, H A L II Stage Police Station, Bangalore North, Bangalore - 560008",
    mapQuery: "Unit 101 Oxford Towers 139 Kodihalli HAL II Stage Bangalore 560008",
  },
  {
    city: "Kalaburagi",
    address: "Bhagya Nagar 1st Right, near ESIC Hospital, Kalaburagi - 585106",
    mapQuery: "Bhagya Nagar 1st Right near ESIC Hospital Kalaburagi 585106",
  },
];
const serviceLocations = ["Bangalore", "Kalaburagi", "Mysore", "Mangalore", "Belagavi", "Hubballi-Dharwad", "Bellary", "Online"];

const categories = [
  ["SAP Training", "8 Courses", "FICO, MM, SD, ABAP, SuccessFactors, Ariba and ERP business process training."],
  ["Data & Analytics", "6 Courses", "Excel, SQL, Power BI, Python, dashboards, reporting and analytics projects."],
  ["Programming", "4 Courses", "Python, Java, full stack foundations, logic building and practical assignments."],
  ["Full Stack", "5 Courses", "Java full stack, Python full stack, MERN stack and web application projects."],
  ["AI/ML & Emerging Tech", "4 Courses", "AI/ML foundations, data science direction and modern IT career pathways."],
  ["Corporate & College", "Custom", "Training programs for teams, campuses, freshers and working learners."],
];

const courseCards = [
  ["SAP Training", "ERP careers", "2 to 3 months", BriefcaseBusiness, "SAP modules, configuration basics, business process flow, SAP server practice", "Commerce, MBA, supply chain, HR, engineering and working professionals", "SAP Consultant, SAP Support, SAP Analyst"],
  ["Data Analytics", "Reporting careers", "10 to 12 weeks", BarChart3, "Excel, SQL, Power BI, dashboards, reports and data storytelling", "Graduates, analysts, operations teams and career switchers", "Data Analyst, MIS Analyst, BI Analyst"],
  ["Java / Java Full Stack", "Developer track", "3 to 4 months", Code2, "Core Java, OOP, Spring Boot, APIs, frontend basics and projects", "Engineering, BCA, MCA and learners interested in backend development", "Java Developer, Full Stack Developer"],
  ["Python / Python Full Stack", "Programming track", "3 to 4 months", Laptop, "Python, logic, Django or Flask basics, databases, frontend and projects", "Beginners, graduates, automation learners and web development aspirants", "Python Developer, Full Stack Developer"],
  ["MERN Full Stack", "Modern web apps", "3 to 4 months", Database, "MongoDB, Express, React, Node.js, REST APIs and deployment basics", "Learners who want to build modern web applications", "MERN Developer, Frontend or Backend Developer"],
  ["Data Science, AI/ML & Cyber Security", "Advanced IT", "Based on track", ShieldCheck, "Python, statistics, ML basics, security concepts and practical labs", "Learners ready for advanced data, AI or digital security pathways", "Data Science, AI/ML or Cyber Security roles"],
];

const recruiterCompanies = [
  ["Accenture", "#7b3ff2"],
  ["IBM", "#1f70c1"],
  ["Deloitte", "#79a900"],
  ["TCS", "#345ee8"],
  ["Infosys", "#007cc3"],
  ["Capgemini", "#00a3e0"],
  ["Cognizant", "#0033a0"],
  ["Wipro", "#6c2eb9"],
  ["HCLTech", "#006bb6"],
  ["Tech Mahindra", "#dd052b"],
  ["LTIMindtree", "#672f92"],
  ["Mphasis", "#ef3e42"],
  ["Persistent", "#f47b20"],
  ["Coforge", "#087f7a"],
  ["Hexaware", "#169bd5"],
  ["Birlasoft", "#d71920"],
  ["Happiest Minds", "#f58220"],
  ["Zensar", "#0c76bc"],
];

const advantageItems = [
  ["Expert Trainers", "Industry-aligned mentors with practical SAP, analytics and development experience."],
  ["Live Projects", "Business cases, dashboards, coding tasks and guided project explanation practice."],
  ["Placement Support", "Resume, LinkedIn, mock interviews, referrals and career direction."],
  ["Flexible Batches", "Weekday, weekend, online and classroom options based on current availability."],
];

const consultHighlights = [
  ["Course fit", "Choose SAP, analytics, coding or full stack based on your background."],
  ["Batch clarity", "Know duration, weekday or weekend options and available training mode."],
  ["Career support", "Understand project work, resume preparation and placement assistance."],
];

const serviceTiles = [
  ["SAP Training", BriefcaseBusiness],
  ["Data Analytics", BarChart3],
  ["Python Training", Code2],
  ["Java Training", Laptop],
  ["Full Stack Development", Database],
  ["AI/ML Courses", Sparkles],
  ["Corporate Training", Users],
  ["College Programs", GraduationCap],
  ["Cyber Security", ShieldCheck],
];

const comparisonRows = [
  ["SAP", "Business/ERP", "SAP modules, business processes", "SAP careers"],
  ["Data Analytics", "Data & reporting", "Excel, SQL, Power BI", "Data Analyst"],
  ["Java", "Programming", "Java, OOP", "Java Developer"],
  ["Java Full Stack", "Web development", "Java + frontend + backend", "Full Stack Developer"],
  ["MERN Full Stack", "Modern web apps", "MongoDB, Express, React, Node", "MERN Developer"],
  ["Python", "Programming", "Python, programming logic", "Python Developer"],
  ["Python Full Stack", "Web development", "Python + frontend + backend", "Full Stack Developer"],
  ["Data Science", "Advanced data", "Python, statistics, ML", "Data Science"],
  ["Digital Marketing", "Online marketing", "SEO, social media, ads", "Digital Marketer"],
  ["Cyber Security", "Digital security", "Security, networks", "Cyber Security"],
];

const faqs = [
  ["Which are the best job oriented courses in Bangalore?", "SAP, Data Analytics, Java Full Stack, Python Full Stack, MERN Full Stack, Data Science, Digital Marketing and Cyber Security are strong options. The right choice depends on your education, interest, time availability and target role."],
  ["Which IT course in Bangalore is best for career growth?", "A good IT course in Bangalore should match your background and career goal. At SV CurioTech, learners can compare Data Analytics, Python, Java, Full Stack, AI/ML, Digital Marketing, Cyber Security and SAP training before choosing a practical course path."],
  ["Is SV CurioTech only an SAP training institute?", "No. SV CurioTech offers SAP training along with IT courses such as Data Analytics, Python, Java, Full Stack, AI/ML and other career-focused programs."],
  ["Do these courses include practical projects?", "Yes. Training is planned with hands-on assignments, business scenarios, live or guided projects, tool practice and interview preparation."],
  ["Do you provide placement support?", "Yes. Learners receive resume guidance, LinkedIn improvement, mock interviews, project explanation support, career direction and placement assistance."],
  ["Can freshers join these courses?", "Yes. Students, fresh graduates, non-IT learners and working professionals can join after counselling helps them choose the right course path."],
  ["Do you provide corporate or college training?", "Yes. SV CurioTech supports corporate training, college training programs, practical workshops and customized training for teams or campuses."],
];

function JobCourseReviews() {
  const featured = testimonials[0];
  const reviewList = testimonials.slice(1, 6);

  return (
    <section className="job-section job-reviews" id="student-reviews">
      <div className="container job-heading">
        <span className="job-section-label"><Star size={15} fill="currentColor" /> Student reviews</span>
        <h2>Learners speak about practical training and support</h2>
        <p>Real feedback shown in a cleaner story-led layout, so the section feels useful instead of another repeated card grid.</p>
      </div>
      <div className="container job-review-layout">
        <article className="job-review-featured">
          <div className="job-review-score">
            <strong>5.0</strong>
            <span>{[1, 2, 3, 4, 5].map((x) => <Star key={x} size={16} fill="currentColor" />)}</span>
            <small>Featured learner feedback</small>
          </div>
          <p>"{featured.quote}"</p>
          <div className="job-review-person">
            <b>{featured.initials}</b>
            <div><strong>{featured.name}</strong><span>{featured.role} - {featured.company}</span></div>
          </div>
        </article>
        <div className="job-review-list">
          {reviewList.map((review, index) => (
            <article key={`${review.name}-${index}`}>
              <div>
                <b>{review.initials}</b>
                <span>{[1, 2, 3, 4, 5].map((x) => <Star key={x} size={13} fill="currentColor" />)}</span>
              </div>
              <p>"{review.quote}"</p>
              <strong>{review.name}</strong>
              <small>{review.role} - {review.company}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BestJobOrientedCoursesBangalore({ usePageSeo, phone, email, LeadForm }) {
  usePageSeo({
    title: "IT Courses in Bangalore | Best Job Oriented Courses | SV CurioTech",
    description: "Looking for an IT course in Bangalore? Compare job oriented IT courses at SV CurioTech including SAP, Data Analytics, Python, Java, Full Stack, AI/ML, Digital Marketing and Cyber Security with practical projects and placement support.",
    keywords: "IT course in Bangalore, IT courses in Bangalore, best IT course Bangalore, job oriented IT courses Bangalore, best job oriented courses in Bangalore, job oriented courses Bangalore, SAP training Bangalore, data analytics course Bangalore, Python course Bangalore, Java full stack course Bangalore, full stack course Bangalore, AI ML course Bangalore, corporate training Bangalore",
    canonical: "https://www.svcuriotech.com/best-job-oriented-courses-in-bangalore/",
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Job Oriented Courses in Bangalore",
    itemListElement: comparisonRows.map(([name], index) => ({ "@type": "ListItem", position: index + 1, name })),
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
    <div className="job-page">
      <header className="job-nav">
        <div className="job-top-strip">
          <div className="container job-top-strip-inner">
            <span><BadgeCheck size={14} /> Admissions open for SAP and IT batches</span>
            <span><MapPin size={14} /> Bangalore classroom and online training</span>
            <div>
              <a href={`tel:+91${phone}`}><Phone size={14} /> +91 {phone}</a>
              <a href={`mailto:${email}`}><Mail size={14} /> {email}</a>
            </div>
          </div>
        </div>
        <div className="container job-nav-inner">
          <Link className="job-brand" to="/" aria-label="SV CurioTech home">
            <img src="/assets/sv-curiotech-mark.png" alt="" />
            <span><strong>SV CurioTech</strong><small>SAP and IT Training Institute</small></span>
          </Link>
          <nav>
            <a href="#courses">Courses</a>
            <a href="#comparison">Compare</a>
            <a href="#faq">FAQ</a>
            <a className="job-nav-cta" href={`tel:+91${phone}`}><Phone size={15} /> Call Now</a>
          </nav>
        </div>
        <div className="container job-course-toolbar">
          <div className="job-course-menu">
            <button type="button"><Grid3X3 size={18} /> Our Courses</button>
            <div className="job-course-dropdown">
              {categories.map(([title, count, text]) => <a key={title} href="#courses"><span>{title}</span><small>{count} - {text}</small></a>)}
            </div>
          </div>
          <label className="job-course-search">
            <input type="search" placeholder="Search Your Course Here!" aria-label="Search your course" />
            <button type="button" aria-label="Search"><Search size={22} /></button>
          </label>
          <a className="job-toolbar-btn" href="#courses">Explore All Courses</a>
          <a className="job-toolbar-btn" href="#comparison">Compare Courses</a>
        </div>
      </header>

      <main>
        <section className="job-hero">
          <div className="job-hero-pattern" />
          <div className="container job-hero-grid">
            <div className="job-hero-copy">
              <span className="job-kicker"><Sparkles size={15} /> IT courses in Bangalore for job growth</span>
              <h1>SAP and IT courses in Bangalore built for practical career growth</h1>
              <p>SV CurioTech helps learners choose the right IT course in Bangalore with career-focused training in SAP, Data Analytics, Python, Java, Full Stack, AI/ML, corporate training and college training programs.</p>
              <div className="job-hero-actions">
                <a className="job-primary-btn" href="#enquiry">Get Free Counselling <ArrowRight size={18} /></a>
                <a className="job-secondary-btn" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20guidance%20for%20job%20oriented%20courses%20in%20Bangalore.`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
              </div>
              <div className="job-trust">
                <span><Star size={15} fill="currentColor" /> Practical training</span>
                <span><BriefcaseBusiness size={15} /> Placement support</span>
                <span><Users size={15} /> Freshers and professionals</span>
              </div>
              <div className="job-hero-partners">
                <small>Professionals hired by</small>
                <div>
                  {recruiterCompanies.slice(0, 7).map(([company, color]) => (
                    <span key={company} style={{ "--brand": color }}>{company}</span>
                  ))}
                </div>
              </div>
            </div>
            <figure className="job-hero-image">
              <img src="/assets/corporate-sap-meeting-hero.png" alt="Corporate SAP training meeting with ERP workflow presentation" />
            </figure>
          </div>
        </section>

        <section className="job-proof-strip">
          <div className="container">
            <div><strong>SAP</strong><span>ERP training</span></div>
            <div><strong>IT</strong><span>Programming and full stack</span></div>
            <div><strong>Data</strong><span>Analytics and AI pathways</span></div>
            <div><strong>Career</strong><span>Projects and placement support</span></div>
          </div>
        </section>

        <section className="job-section job-consult" id="enquiry">
          <div className="container job-consult-grid">
            <div className="job-consult-copy">
              <span className="job-section-label"><MessageCircle size={15} /> Limited time guidance</span>
              <h2>Ready to choose the right job oriented course?</h2>
              <p>Share your details for personalized career consultation. We will help you compare SAP, Data Analytics, Python, Java, Full Stack, AI/ML and other IT courses in Bangalore based on your background.</p>
              <label className="job-inline-search">
                <input type="search" placeholder="e.g., SAP, Java, Data Analytics..." aria-label="Search courses" />
                <button type="button"><Search size={18} /> Search Courses</button>
              </label>
              <div className="job-consult-points">
                {consultHighlights.map(([title, text]) => <article key={title}><Check size={17} /><div><strong>{title}</strong><span>{text}</span></div></article>)}
              </div>
            </div>
            <aside className="job-consult-form">
              <h3>Get Free Consultation</h3>
              <p>Get syllabus, duration, fees, batch timing and placement support details.</p>
              <LeadForm variant="course-info" defaultCourse="Best Job Oriented Courses in Bangalore" trimAfterCourse />
            </aside>
          </div>
        </section>

        <section className="job-section job-intro">
          <div className="container job-split">
            <div>
              <span className="job-section-label"><GraduationCap size={15} /> SV CurioTech Bangalore</span>
              <h2>More than SAP: a wider training path for modern careers</h2>
              <p>Many learners first discover SV CurioTech through SAP training, but the institute also helps students and working professionals choose an IT course in Bangalore across Data Analytics, Python, Java, Full Stack, AI/ML, corporate training, college training, practical projects and placement support.</p>
              <p>This Bangalore page is structured to help visitors compare career paths, understand who each course is for, see the tools they will learn and submit an enquiry without confusion.</p>
            </div>
            <div className="job-outcome-card">
              <span>Career-ready learning includes</span>
              {["Course overview and counselling", "Syllabus and duration clarity", "Practical and live projects", "Tools and technology practice", "Career opportunities and interview preparation", "Strong enquiry CTA"].map((item) => <p key={item}><Check size={17} /> {item}</p>)}
            </div>
          </div>
        </section>

        <section className="job-section job-courses" id="courses">
          <div className="container job-heading">
            <span className="job-section-label"><BookOpen size={15} /> Courses</span>
            <h2>Find the best program for your career</h2>
            <p>Course categories on the left, job-ready program cards on the right. This is the same discovery flow visitors expect on a broad IT training website.</p>
          </div>
          <div className="container job-program-layout">
            <aside className="job-category-panel">
              <span>Categories</span>
              <h3>Course Categories</h3>
              {categories.map(([title, count]) => <a key={title} href="#courses"><strong>{title}</strong><small>{count}</small></a>)}
              <a className="job-all-course-link" href="#comparison">Browse All Courses <ArrowRight size={14} /></a>
            </aside>
            <div className="job-course-grid">
              {courseCards.map(([title, tag, duration, Icon, skills, bestFor, outcome]) => (
                <article className="job-course-card" key={title}>
                  <div className="job-card-top"><span><Icon /></span><small>{tag}</small></div>
                  <h3>{title}</h3>
                  <p>{skills}</p>
                  <dl>
                    <div><dt>Best for</dt><dd>{bestFor}</dd></div>
                    <div><dt>Duration</dt><dd>{duration}</dd></div>
                    <div><dt>Career direction</dt><dd>{outcome}</dd></div>
                  </dl>
                  <a href="#enquiry">View Program <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="job-section job-service-menu">
          <div className="container job-heading">
            <span className="job-section-label"><Grid3X3 size={15} /> Training paths</span>
            <h2>Explore SAP and IT courses in Bangalore</h2>
            <p>A compact service menu helps visitors immediately see that SV CurioTech covers SAP, IT, analytics, programming, full stack and training programs.</p>
          </div>
          <div className="container job-service-grid">
            {serviceTiles.map(([title, Icon]) => <a key={title} href="#courses"><Icon size={26} /><strong>{title}</strong><ArrowRight size={18} /></a>)}
          </div>
        </section>

        <section className="job-section job-featured">
          <div className="container job-featured-grid">
            <div>
              <span className="job-section-label"><Sparkles size={15} /> Featured Program</span>
              <h2>SAP and IT Career Master Program</h2>
              <p>A guided pathway for learners who want counselling before choosing between SAP, analytics, programming or full stack. The program direction is selected after checking your education, work experience, available time and target role.</p>
              <ul>
                <li><Check size={17} /> Qualification mapping for freshers and working professionals</li>
                <li><Check size={17} /> Practical projects and tool-based assignments</li>
                <li><Check size={17} /> Interview preparation and placement support</li>
              </ul>
              <a className="job-primary-btn" href="#enquiry">Explore Program <ArrowRight size={18} /></a>
            </div>
            <div className="job-featured-card">
              <strong>Job Oriented</strong>
              <span>Training</span>
              <p>Live classes, practical projects, mentor guidance and career support.</p>
            </div>
          </div>
        </section>

        <section className="job-section job-comparison" id="comparison">
          <div className="container job-heading">
            <span className="job-section-label"><Target size={15} /> Comparison</span>
            <h2>Comparison of the Best Job Oriented Courses in Bangalore</h2>
            <p>Use this table to quickly compare course direction before speaking with an advisor.</p>
          </div>
          <div className="container job-table-wrap">
            <table>
              <thead><tr><th>Course</th><th>Best For</th><th>Key Skills</th><th>Career Direction</th></tr></thead>
              <tbody>{comparisonRows.map(([course, bestFor, skills, direction]) => <tr key={course}><td>{course}</td><td>{bestFor}</td><td>{skills}</td><td>{direction}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="job-section job-training">
          <div className="container job-heading">
            <span className="job-section-label"><BadgeCheck size={15} /> Institution Advantage</span>
            <h2>Why learners choose SV CurioTech for career training</h2>
          </div>
          <div className="container job-training-grid">
            {advantageItems.map(([title, text]) => <article key={title}><BadgeCheck /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <JobCourseReviews />

        <section className="job-section job-recruiters">
          <div className="container job-heading">
            <span className="job-section-label"><BriefcaseBusiness size={15} /> Our Recruiters</span>
            <h2>Companies where SAP and IT skills are valued</h2>
            <p>Placement preparation at SV CurioTech helps learners present their projects, tools and interview answers clearly for IT services, consulting, analytics and enterprise roles.</p>
          </div>
          <div className="job-recruiter-marquee" aria-label="Recruiter companies">
            <div className="job-recruiter-track">
              {[...recruiterCompanies, ...recruiterCompanies].map(([company, color], index) => (
                <span key={`${company}-top-${index}`} style={{ "--brand": color }}><b>{company.slice(0, 2)}</b>{company}</span>
              ))}
            </div>
            <div className="job-recruiter-track job-recruiter-track-reverse">
              {[...recruiterCompanies.slice().reverse(), ...recruiterCompanies.slice().reverse()].map(([company, color], index) => (
                <span key={`${company}-bottom-${index}`} style={{ "--brand": color }}><b>{company.slice(0, 2)}</b>{company}</span>
              ))}
            </div>
          </div>
        </section>

        <StudentFeedbackVideos />

        <section className="job-section job-faq" id="faq">
          <div className="container job-heading">
            <span className="job-section-label"><MessageCircle size={15} /> FAQ</span>
            <h2>Questions about job oriented courses in Bangalore</h2>
          </div>
          <div className="container job-faq-grid">
            {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </div>
        </section>
      </main>

      <footer className="job-footer">
        <div className="container job-footer-grid">
          <div className="job-footer-brand">
            <strong>SV CurioTech</strong>
            <p>SAP and IT training institute in Bangalore with practical projects, live training and placement support.</p>
            <div className="job-footer-contact">
              <a href={`tel:+91${phone}`}><Phone size={17} /> +91 {phone}</a>
              <a href={`mailto:${email}`}><Mail size={17} /> {email}</a>
            </div>
          </div>
          <div className="job-footer-block">
            <h3>Address</h3>
            {branchAddresses.map((branch) => (
              <article className="job-footer-address" key={branch.city}>
                <h4>{branch.city}</h4>
                <p><MapPin size={17} /> {branch.address}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(branch.mapQuery)}`} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
          <div className="job-footer-block">
            <h3>Training Locations</h3>
            <div className="job-footer-locations">
              {serviceLocations.map((location) => <span key={location}>{location}</span>)}
            </div>
            <div className="job-socials">
              <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
