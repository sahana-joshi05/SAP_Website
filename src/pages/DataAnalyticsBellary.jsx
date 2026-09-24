import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Database,
  FileSpreadsheet,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PieChart,
  Presentation,
  Sparkles,
  Users,
} from "lucide-react";
import "./DataAnalyticsBellary.css";

const modules = [
  ["01", "Excel that goes past the basics", "Pivot tables, Power Query, INDEX-MATCH, XLOOKUP, conditional logic and dashboarding. Most interviewer panels open with an Excel test. We make sure you do not fail it.", FileSpreadsheet],
  ["02", "SQL and databases", "SELECT statements through joins, subqueries, window functions and CTEs. You query real datasets and practise the kind of questions companies ask in live coding rounds.", Database],
  ["03", "Python for data", "Python fundamentals, then Pandas and NumPy for cleaning and reshaping data, followed by Matplotlib and Seaborn for visualising it. No prior coding knowledge is expected.", BarChart3],
  ["04", "Power BI and Tableau", "Connect data sources, model data, write DAX and build dashboards that a manager can actually read. You finish with two dashboards in your portfolio.", Presentation],
  ["05", "Statistics and business thinking", "Descriptive statistics, distributions, correlation, hypothesis testing and A/B testing basics. Enough to interpret results honestly.", PieChart],
  ["06", "Capstone and interview prep", "Take a real dataset end to end: raw data in, insight out. Includes resume review, LinkedIn cleanup, mock interviews and guess estimate practice.", BriefcaseBusiness],
];

const audiences = [
  "Final year and recent graduates from BITM, VSKU-affiliated colleges and polytechnics across the district, from any stream.",
  "Working professionals in manufacturing, mining support services, banking, retail or logistics who want to move into an analyst role.",
  "Career restarters, including women returning after a break. The weekend batch is mostly for this group.",
  "Small business owners who want to understand their own numbers.",
];

const projectTracks = [
  ["Manufacturing dashboard", "Clean production, downtime and rejection data, then build a Power BI dashboard that compares line, shift and supervisor performance."],
  ["Retail sales analysis", "Use Excel, SQL and Python to understand seasonality, fast-moving products, customer segments and monthly revenue movement."],
  ["Inventory and dispatch report", "Model inward, stock and dispatch data to spot slow-moving material, delayed orders and warehouse pressure points."],
  ["Finance or MIS reporting", "Prepare analyst-style MIS reports with KPIs, variance checks, charts and a clear one-page business summary."],
];

const careerSkills = [
  "Excel dashboarding, Power Query and business reporting",
  "SQL classes in Bellary covering joins, CTEs and window functions",
  "Python for data analytics with Pandas, NumPy and visualisation",
  "Power BI training in Bellary with DAX, data modelling and dashboards",
  "Tableau basics for learners who want an additional BI tool",
  "Statistics, business interpretation and interview case questions",
  "Portfolio projects for data analyst course Bellary searches",
  "Resume, LinkedIn and mock interview support for analytics jobs",
];

const roadmap = [
  ["Weeks 1-2", "Excel, data cleaning and reporting basics", "Structured tables, lookup formulas, Power Query, pivot tables, chart choices and dashboard thinking using messy business files."],
  ["Weeks 3-4", "SQL for analyst interviews", "SELECT queries, filters, grouping, joins, subqueries, CTEs, window functions and business questions from customer, sales and operations data."],
  ["Weeks 5-6", "Python for data analytics", "Python basics, Pandas, NumPy, data cleaning, grouping, reshaping, missing values and charting with Matplotlib and Seaborn."],
  ["Weeks 7-8", "Power BI, Tableau and dashboard design", "Data connections, relationships, DAX measures, dashboard design and presenting insights in plain language."],
  ["Weeks 9-10", "Statistics, capstone and interview prep", "Statistics revision, capstone completion, resume work, mock interviews and portfolio explanation practice."],
];

const deliverables = [
  "Excel MIS report with pivots, Power Query and dashboard views",
  "SQL practice notebook with joins, CTEs and window function questions",
  "Python notebook showing data cleaning, analysis and visualisation",
  "Power BI dashboard with data model, DAX measures and insight notes",
  "Capstone project based on a real business dataset",
  "Resume, LinkedIn profile and project explanation script",
];

const localAreas = [
  "Ballari city",
  "Hospet",
  "Sandur",
  "Toranagallu",
  "Kudligi",
  "Siruguppa",
  "Kampli",
  "Hagaribommanahalli",
  "Hubballi",
  "Nearby rural taluks",
];

const comparisons = [
  ["Generic computer course", "Mostly basic Excel, typing, office tools and certificates.", "Good for first-time computer exposure, not enough for data analyst interviews."],
  ["Single-tool Power BI class", "Dashboard building without enough SQL, Python or statistics.", "Useful if you already know data cleaning and analysis, weak if you are starting from scratch."],
  ["This data analytics course", "Excel, SQL, Python, Power BI, Tableau, statistics, projects and placement support.", "Built for data analyst course Bellary learners who need a complete path and portfolio."],
];

const faqs = [
  ["Is there a good data analytics course in Bellary, or do I need to go to Bangalore?", "You do not need to relocate. This course runs live for Ballari learners, with the same syllabus depth you would expect from a Bengaluru programme. Since Bengaluru has more walk-in interviews, we focus heavily on remote-ready portfolios and referrals."],
  ["Do I need programming experience?", "No. Python starts from variables and loops. Roughly half of each batch has never written a line of code."],
  ["How long is the course?", "Two to three months part-time."],
  ["Can I do this alongside a full-time job?", "Yes. Most people do. Choose the weekend batch and plan for eight to ten hours a week including practice."],
  ["What jobs can I apply for after finishing?", "Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, Power BI Developer and operations analytics roles inside manufacturing and logistics firms."],
  ["Is a certificate provided?", "Yes, on completion of the capstone project. Certificates open very few doors on their own; your project portfolio is what gets you the interview."],
  ["Do you offer classes in Kannada?", "Course material is in English because that is the language of the tools and the job. Explanations and doubt-clearing sessions can be in Kannada, English or Telugu."],
  ["Is this useful if I am searching for a data analytics institute near me?", "Yes. The course is designed for learners in Bellary and nearby Ballari district locations who want live data analytics training without relocating for several months."],
  ["Do you cover Power BI training in Bellary separately?", "Power BI is a full module in the course. You learn data connection, cleaning, modelling, DAX, dashboard design and project presentation."],
  ["Will I learn SQL and Python from scratch?", "Yes. SQL starts with SELECT queries and moves into joins, subqueries, CTEs and window functions. Python starts from basics before Pandas, NumPy and visualisation."],
];

export default function DataAnalyticsBellary({ usePageSeo, phone, email, LeadForm }) {
  const canonical = "https://www.svcuriotech.com/data-analytics-course-in-Bellary";

  usePageSeo({
    title: "Data Analytics Course in Bellary | Live Classes + Placement",
    description: "Learn Excel, SQL, Python and Power BI with a data analytics course in Bellary. Weekend and evening batches, real projects, and placement support.",
    keywords: "data analytics course in Bellary, data analytics training in Ballari, data analyst course Bellary, data analytics institute in Bellary, data analytics classes Bellary, data analytics institute near me, Power BI training Bellary, SQL classes Bellary, Python for data analytics, Excel training for data analytics, business analyst course Bellary, MIS reporting course Bellary, data visualization course Bellary, Tableau training Bellary, data analytics course with placement Bellary",
    canonical,
    geo: { region: "IN-KA", placename: "Bellary, Karnataka" },
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Data Analytics Course in Bellary",
    description: "Live data analytics course in Bellary covering Excel, SQL, Python, Power BI, Tableau, statistics, MIS reporting, capstone projects, portfolio building and placement support.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: ["Bellary", "Ballari", "Hospet", "Sandur", "Kudligi", "Siruguppa", "Hubballi"],
    courseMode: ["Live Online", "Weekend", "Evening"],
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
      <div className="analytics-page">
        <header className="analytics-nav">
          <div className="analytics-container analytics-nav-inner">
            <Link className="analytics-brand" to="/" aria-label="SV CurioTech home">
              <img src="/assets/sv-curiotech-mark.png" alt="" />
              <span><strong>SV CurioTech</strong><small>Analytics Lab Bellary</small></span>
            </Link>
            <nav>
              <a href="#syllabus">Syllabus</a>
              <a href="#batches">Batches</a>
              <a href="#placement">Placement</a>
              <a href="#faq">FAQ</a>
              <a className="analytics-nav-cta" href={`tel:+91${phone}`}><Phone size={15} /> Call</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="analytics-hero">
            <div className="analytics-container analytics-hero-grid">
              <div className="analytics-hero-copy">
                <span className="analytics-kicker"><Sparkles size={15} /> Data analytics course in Bellary</span>
                <h1>Learn the four tools that get you hired.</h1>
                <p>Excel, SQL, Python and Power BI, taught live for Ballari learners by people who have done the job.</p>
                <div className="analytics-actions">
                  <a className="analytics-primary" href="#demo">Sit In On A Demo <ArrowRight size={18} /></a>
                  <a className="analytics-secondary" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20the%20data%20analytics%20course%20in%20Bellary.`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
                </div>
              </div>

              <aside className="analytics-command-board" aria-label="Course snapshot">
                <div className="analytics-board-header">
                  <span>ANALYST_STACK.CSV</span>
                  <b>LIVE</b>
                </div>
                <div className="analytics-tool-grid">
                  {["Excel", "SQL", "Python", "Power BI"].map((tool) => <span key={tool}>{tool}</span>)}
                </div>
                <div className="analytics-mini-chart">
                  <i style={{ height: "48%" }} />
                  <i style={{ height: "68%" }} />
                  <i style={{ height: "56%" }} />
                  <i style={{ height: "84%" }} />
                  <i style={{ height: "72%" }} />
                </div>
                <div className="analytics-board-note">
                  <strong>2 to 3 months</strong>
                  <span>Part-time, evening and weekend format</span>
                </div>
              </aside>
            </div>
          </section>

          <section className="analytics-problem">
            <div className="analytics-container analytics-problem-grid">
              <div>
                <span className="analytics-section-tag">Why this exists</span>
                <h2>A Bellary option between generic computer classes and moving to Bengaluru.</h2>
              </div>
              <div>
                <p>Most people in Bellary who want to move into analytics have the same problem. The good courses are in Bengaluru, three hundred odd kilometres away, and moving there for six months is not realistic when one has a family, an active job, or a final year backlog to clear.</p>
                <p>The local option is often a generic computer course, which ends with Excel formulas. This course is between them: live classes for Ballari learners, evenings and weekends, with the skills a hiring manager for an analyst role would actually test.</p>
              </div>
            </div>
          </section>

          <section className="analytics-industries">
            <div className="analytics-container">
              <span>Steel and mining</span>
              <span>Denim manufacturing</span>
              <span>Agriculture and irrigation</span>
              <span>Logistics</span>
              <span>Remote analyst roles</span>
            </div>
          </section>

          <section className="analytics-section analytics-local">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Why analytics, why here</span>
                <h2>Ballari is not a software town. It is a data-heavy district.</h2>
                <p>Steel and mining around Sandur and Toranagallu, one of India's largest denim manufacturing clusters, agriculture across the Tungabhadra belt, and the logistics that moves all of it all create production numbers, inventory ledgers, dispatch records and quality reports.</p>
                <p>That is why data analytics training in Ballari makes sense. The region already has operational data; what is missing is people who can convert it into dashboards, reports, forecasts and decisions.</p>
              </div>
              <div className="analytics-proof-stack">
                <article><strong>Power BI at the plant</strong><p>A supervisor who can build downtime dashboards by shift is more valuable than one who emails a spreadsheet.</p></article>
                <article><strong>Python in garments</strong><p>A merchandiser who can forecast fabric demand can save lakhs a season.</p></article>
                <article><strong>Remote-ready portfolio</strong><p>A strong project portfolio and interview can open Bengaluru or Hyderabad analyst roles while you stay in Ballari.</p></article>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-syllabus" id="syllabus">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">What you will learn</span>
                <h2>Syllabus built backwards from entry-level analyst job descriptions.</h2>
                <p>This is not a generic computer course. The data analyst course Bellary learners get here is built around Excel tests, SQL rounds, Python cleaning tasks, Power BI dashboard assignments and business case discussions.</p>
              </div>
              <div className="analytics-module-grid">
                {modules.map(([number, title, text, Icon]) => (
                  <article key={title}>
                    <div><span>{number}</span><Icon /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-keywords">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Tool-specific training</span>
                <h2>One course, but each tool is taught like it matters on the job.</h2>
                <p>Learners often search separately for Power BI training Bellary, SQL classes Bellary, Python for data analytics, Excel dashboard training or a data analytics institute near me. We combine these into one job-aligned pathway so your learning does not stay scattered across unrelated short courses.</p>
                <p>By the end, you should be able to clean messy files, query a database, write a basic Python analysis, build a Power BI report, explain charts clearly and defend your project decisions in an interview.</p>
              </div>
              <div className="analytics-skill-list">
                {careerSkills.map((skill) => <span key={skill}><Check size={16} /> {skill}</span>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-roadmap">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Course roadmap</span>
                <h2>A practical 10-week path from raw data to interview-ready portfolio.</h2>
                <p>The exact duration can stretch to three months depending on batch pace, holidays and capstone depth, but the learning journey is structured so every tool connects to the next one.</p>
              </div>
              <div className="analytics-roadmap-list">
                {roadmap.map(([week, title, text]) => <article key={week}><span>{week}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-projects">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Portfolio projects</span>
                <h2>Projects that sound like real work, not classroom decoration.</h2>
                <p>Your portfolio is the proof that you can do analyst work. These projects help you show Excel, SQL, Python and Power BI skills through business problems relevant to Bellary, Ballari and Karnataka employers.</p>
              </div>
              <div className="analytics-project-grid">
                {projectTracks.map(([title, text]) => <article key={title}><strong>{title}</strong><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-deliverables">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">What you leave with</span>
                <h2>Not just notes. A small body of work you can show.</h2>
                <p>When someone asks what you did in the course, you should not have to say only "I learned Excel, SQL, Python and Power BI." You should have files, dashboards, notebooks and stories that prove it.</p>
              </div>
              <div className="analytics-deliverable-grid">
                {deliverables.map((item) => <span key={item}><Check size={16} /> {item}</span>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-fit">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Who this is for</span>
                <h2>No coding background required. School-level maths and steady practice are enough.</h2>
                <p>If you can put in eight to ten hours a week, the course is built to take you from basics to a portfolio you can discuss in interviews.</p>
              </div>
              <ul>
                {audiences.map((item) => <li key={item}><Check size={18} /> {item}</li>)}
              </ul>
            </div>
          </section>

          <section className="analytics-section analytics-outcomes">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">What you can say after the course</span>
                <h2>You should be able to talk like a junior analyst, not just list tools on a resume.</h2>
              </div>
              <div className="analytics-outcome-list">
                <p><strong>In Excel:</strong> "I can clean data with Power Query, create pivots, build dashboard views and check reporting errors."</p>
                <p><strong>In SQL:</strong> "I can join tables, write CTEs, rank records with window functions and answer business questions from a database."</p>
                <p><strong>In Python:</strong> "I can use Pandas to clean, group and reshape data, then visualise trends with charts."</p>
                <p><strong>In Power BI:</strong> "I can connect sources, create relationships, write DAX measures and present a dashboard to a non-technical manager."</p>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-nearby">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Nearby learners</span>
                <h2>For learners searching data analytics institute near me across Ballari district.</h2>
                <p>The course is live online, so learners from Bellary and nearby towns can attend without daily travel. Doubt clearing can be handled in Kannada, English or Telugu depending on the learner group.</p>
              </div>
              <div className="analytics-area-tags">
                {localAreas.map((area) => <span key={area}>{area}</span>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-compare">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">How this differs</span>
                <h2>Why not just take a short Excel class or Power BI class?</h2>
                <p>Short courses can help, but analyst roles test the full workflow: cleaning data, querying databases, analysing in Python, visualising in Power BI and explaining the business meaning.</p>
              </div>
              <div className="analytics-compare-grid">
                {comparisons.map(([title, scope, note]) => <article key={title}><h3>{title}</h3><p>{scope}</p><strong>{note}</strong></article>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-batches" id="batches">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">How classes run</span>
                <h2>Live classes, recordings, small batches and real doubt clearing.</h2>
                <p>Each session includes concept explanation, trainer demonstration, guided practice and homework. Recorded sessions help working professionals revise SQL queries, Python notebooks and Power BI dashboard steps after office hours.</p>
              </div>
              <div className="analytics-batch-grid">
                <article><CalendarDays /><strong>Weekday batch</strong><span>Monday to Friday</span></article>
                <article><CalendarDays /><strong>Weekend batch</strong><span>Saturday and Sunday</span></article>
                <article><Users /><strong>Batch cap</strong><span>20 learners, because the twenty-first person stops asking questions</span></article>
                <article><MapPin /><strong>Online access</strong><span>For Hospet, Sandur, Kudligi, Siruguppa and Hubballi learners</span></article>
              </div>
              <p className="analytics-note">Doubt-clearing sessions run separately on Saturday evenings, because the question you have on Wednesday should not wait until next weekend.</p>
            </div>
          </section>

          <section className="analytics-section analytics-placement" id="placement">
            <div className="analytics-container analytics-placement-grid">
              <div>
                <span className="analytics-section-tag">Placement support</span>
                <h2>Straight talk: no honest institute can guarantee placement.</h2>
                <p>What we do provide is a structured push: resume and portfolio building, at least three mock interviews with written feedback, referrals into our hiring network, and access to the alumni group where openings get shared first.</p>
                <p>Interview preparation includes SQL query practice, Excel case tests, Power BI dashboard walkthroughs, Python project explanation, business analyst scenarios, MIS reporting questions and HR rounds for freshers and working professionals.</p>
                <p>Entry-level analyst salaries in Karnataka typically start between Rs. 3 and Rs. 6 lakh per annum depending on the company and interview performance. The people who get placed are the ones who finish the capstone properly.</p>
              </div>
              <div className="analytics-salary-panel">
                <span>Typical entry range</span>
                <strong>Rs. 3-6 LPA</strong>
                <p>Freshers from non-metro backgrounds usually start lower and move up fast, since the second job is easier than the first.</p>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-demo" id="demo">
            <div className="analytics-container analytics-demo-grid">
              <div>
                <span className="analytics-section-tag">How to start</span>
                <h2>Sit in on a free demo class before paying anything.</h2>
                <p>Come with your questions, watch a real session, talk to people who are already in the batch, then decide. New batches start on the first Monday of every month.</p>
                <div className="analytics-contact-strip">
                  <a href={`tel:+91${phone}`}><Phone size={17} /> +91 {phone}</a>
                  <a href="https://www.svcuriotech.com" target="_blank" rel="noreferrer"><Mail size={17} /> www.svcuriotech.com</a>
                </div>
              </div>
              <aside className="analytics-form-panel">
                <h3>Get demo class details</h3>
                <p>Share your details and our team will call you with batch timing, fees and syllabus information.</p>
                <LeadForm variant="course-info" defaultCourse="Data Analytics Course in Bellary" />
              </aside>
            </div>
          </section>

          <section className="analytics-section analytics-faq" id="faq">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Frequently asked questions</span>
                <h2>Questions Bellary learners ask before joining.</h2>
              </div>
              <div className="analytics-faq-list">
                {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
              </div>
            </div>
          </section>
        </main>

        <a className="analytics-whatsapp" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20data%20analytics%20training%20in%20Ballari.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /><span>WhatsApp</span></a>

        <footer className="analytics-footer">
          <div className="analytics-container analytics-footer-grid">
            <div>
              <strong>SV CurioTech</strong>
              <p>Data analytics training in Ballari with Excel, SQL, Python, Power BI, projects and placement support.</p>
            </div>
            <div>
              <a href={`tel:+91${phone}`}><Phone size={16} /> +91 {phone}</a>
              <a href={`mailto:${email}`}><Mail size={16} /> {email}</a>
            </div>
          </div>
        </footer>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
