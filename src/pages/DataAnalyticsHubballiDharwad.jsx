import React from "react";
import { Link } from "react-router-dom";
import {
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
  ["01", "Data analytics fundamentals", "Understand the role of a data analyst, data types, the analytics lifecycle, business questions, KPIs, metrics and how raw data becomes actionable insight.", BarChart3],
  ["02", "MS Excel for analytics", "Clean, sort and filter data, use formulas, lookup functions, Pivot Tables, Pivot Charts, totals, reports and dashboard basics.", FileSpreadsheet],
  ["03", "SQL for data analysis", "Learn relational data concepts, SELECT, WHERE, ORDER BY, aggregate functions, GROUP BY, HAVING, joins, subqueries, CASE statements and practical analytical queries.", Database],
  ["04", "Python for data analytics", "Start with Python basics, variables, collections, functions and control flow, then use NumPy and Pandas for data cleaning, transformation, EDA and visualization.", BarChart3],
  ["05", "Statistics for analytics", "Cover mean, median, mode, dispersion, probability fundamentals, distributions, sampling, correlation, regression basics and interpreting statistical results.", PieChart],
  ["06", "Power BI and BI dashboards", "Import and prepare data, use Power Query, build relationships, write DAX basics, create dashboards, add filters, slicers and drill-through views.", Presentation],
];

const audiences = [
  "Fresh graduates and students from BCA, BSc, BCom, BBA, BE, BTech, MBA and other degree backgrounds.",
  "Working professionals who want to move from operations, finance, business, marketing or reporting work into analytics roles.",
  "Career changers who want a structured path through Excel, SQL, Python, Statistics and Power BI.",
  "Students who want practical data analytics training with exercises, cases and portfolio-oriented project practice.",
];

const projectTracks = [
  ["Sales and revenue analysis", "Clean business data, compare revenue movement, identify trends and prepare a dashboard that explains performance clearly."],
  ["Customer and business performance", "Study customer segments, KPIs and business metrics, then present insights in a manager-ready reporting format."],
  ["Inventory and operations reporting", "Analyze stock, movement, delays and operational pressure points using Excel, SQL and Power BI views."],
  ["Marketing campaign analysis", "Measure campaign outcomes, compare channels, highlight patterns and turn the analysis into a simple business story."],
  ["Financial KPI scorecard", "Build a Power BI dashboard or scorecard that tracks financial and KPI data with useful filters and notes."],
  ["Capstone portfolio project", "Run the full analytics pipeline from business problem to cleaned data, queries, analysis, dashboard and final presentation."],
];

const careerSkills = [
  "Excel cleaning, formulas, Pivot Tables, Pivot Charts and dashboard basics",
  "SQL queries with filtering, grouping, joins, subqueries and CASE statements",
  "Python for analysts with NumPy, Pandas, cleaning, transformation and EDA",
  "Statistics fundamentals for business interpretation",
  "Power BI dashboards with Power Query, DAX basics, filters, slicers and drill-through",
  "Data visualization and storytelling for business users",
  "AI-assisted analytics with accuracy and quality checks",
  "Portfolio-oriented project practice for data analyst interviews",
];

const roadmap = [
  ["Weeks 1-2", "Analytics foundations and Excel", "Data analyst responsibilities, data types, KPIs, metrics, cleaning, formulas, lookup functions, pivots, charts and reporting basics."],
  ["Weeks 3-4", "SQL for analysis", "Relational data concepts, SELECT queries, filtering, grouping, aggregate functions, joins, subqueries, CASE statements and practical business questions."],
  ["Weeks 5-6", "Python and statistics", "Python basics, NumPy, Pandas, data cleaning, transformation, exploratory analysis, visualization, probability, distributions, correlation and regression basics."],
  ["Weeks 7-8", "Power BI and visualization", "Power Query, data relationships, DAX fundamentals, filters, slicers, drill-through, readable dashboards and dashboard storytelling."],
  ["Weeks 9-12", "Projects, AI support and portfolio", "Hands-on projects, AI-assisted documentation and formula support, accuracy review, capstone completion and portfolio presentation practice."],
];

const deliverables = [
  "Excel report with cleaned data, pivots, charts and dashboard views",
  "SQL practice set with analytical queries and joins",
  "Python notebook for cleaning, analysis and visualization",
  "Power BI dashboard with relationships, DAX basics and business notes",
  "Capstone project for portfolio presentation",
  "Resume-ready project explanations for entry-level analytics roles",
];

const localAreas = [
  "Hubballi",
  "Dharwad",
  "Navanagar",
  "Vidyanagar",
  "Unkal",
  "Gokul Road",
  "Keshwapur",
  "Sattur",
  "Rayapur",
  "Nearby North Karnataka learners",
];

const nearbyLearnerSupport = [
  ["For college learners", "Begin from fundamentals and build steady practice in Excel, SQL, Python, Statistics and Power BI while preparing a portfolio."],
  ["For working professionals", "Use flexible weekday or weekend batches to add analytics skills without pausing your current job."],
  ["For non-programmers", "SQL and Python are introduced progressively, so beginners can build confidence one concept at a time."],
];

const nearbyClassNotes = [
  ["2.5 to 3 month path", "The course is structured for consistent learning across tools, practice sessions and portfolio work."],
  ["Weekday batches", "Available based on the current schedule for students and learners who prefer regular weekly rhythm."],
  ["Weekend batches", "Useful for working professionals and college learners who cannot attend during weekdays."],
  ["Flexible timings", "Class timing can be selected from available batches based on current admission schedules."],
];

const comparisons = [
  ["Generic computer course", "Usually stops at basic office tools and certificates.", "Helpful for first computer exposure, but too shallow for data analyst interviews."],
  ["Single-tool class", "Focuses only on Excel, Power BI, SQL or Python.", "Useful as a supplement, but the analyst workflow needs the tools to work together."],
  ["This data analytics course", "Excel, SQL, Python, Statistics, Power BI, AI-assisted analytics and projects.", "Built for Hubballi-Dharwad learners who want a complete, practical pathway."],
];

const faqs = [
  ["How long is this Data Analytics Course?", "This course takes about 2.5 to 3 months to complete."],
  ["Are weekday batches available?", "Yes. Weekday batches are available according to the current batch schedule."],
  ["Are weekend batches available?", "Yes. Weekend batches are available for learners who have college or work commitments during weekdays."],
  ["Are flexible timings available?", "Yes. Class timings are flexible based on available batches, making the course suitable for students and working professionals."],
  ["Is programming experience required?", "No. The course starts from fundamentals, with SQL and Python introduced progressively."],
  ["Is this course suitable for beginners?", "Yes. The learning path begins with analytics basics and then moves into tools, exercises and projects."],
  ["Which tools are included?", "The core curriculum includes Excel, SQL, Python, Statistics and Power BI, along with data visualization, storytelling and AI-assisted analytics concepts."],
  ["Will I work on projects?", "Yes. Practical exercises, case-based activities and portfolio-oriented projects are included in the learning plan."],
  ["What roles can I prepare for?", "Learners can prepare for Data Analyst, Business Analyst, Reporting Analyst, MIS Analyst, BI Analyst, Power BI Developer and Junior Data Visualization Analyst roles."],
  ["Where can I get current batch details?", "Contact SV CurioTech through the website or phone number for current schedules, fees, delivery mode and enrollment details."],
];

export default function DataAnalyticsHubballiDharwad({ usePageSeo, phone, email, LeadForm }) {
  const canonical = "https://www.svcuriotech.com/data-analytics-course-Hubballi-Dharwad";

  usePageSeo({
    title: "Data Analytics Course in Hubballi Dharwad | SV Curiotech",
    description: "Learn Data Analytics in Hubballi Dharwad at SV Curiotech. Join a 2.5-to-3-month practical course covering Excel, SQL, Python, Statistics and Power BI with weekday and weekend batches and flexible timings.",
    keywords: "Data Analytics Course in Hubballi Dharwad, Data Analytics Training in Hubballi, Data Analytics Course in Dharwad, Data Analyst Course Hubballi, Data Analytics Institute Hubballi, Python SQL Power BI Course Hubballi",
    canonical,
    geo: { region: "IN-KA", placename: "Hubballi-Dharwad, Karnataka" },
  });

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Data Analytics Course in Hubballi Dharwad",
    description: "Practical data analytics course in Hubballi-Dharwad covering Excel, SQL, Python, Statistics, Power BI, data visualization, AI-assisted analytics and portfolio projects.",
    provider: {
      "@type": "EducationalOrganization",
      name: "SV CurioTech",
      url: "https://www.svcuriotech.com/",
    },
    areaServed: ["Hubballi", "Dharwad", "Hubballi-Dharwad", "North Karnataka"],
    courseMode: ["Live Online", "Weekday", "Weekend", "Flexible"],
    url: canonical,
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
          <div className="analytics-top-contact">
            <div className="analytics-container analytics-top-contact-inner">
              <a href={`tel:+91${phone}`}><Phone size={15} /> +91 {phone}</a>
              <a href={`mailto:${email}`}><Mail size={15} /> {email}</a>
            </div>
          </div>
          <div className="analytics-container analytics-nav-inner">
            <Link className="analytics-brand" to="/" aria-label="SV CurioTech home">
              <img src="/assets/sv-curiotech-mark.png" alt="" />
              <span><strong>SV CurioTech</strong><small>Analytics Lab Hubballi-Dharwad</small></span>
            </Link>
            <nav>
              <a href="#syllabus">Syllabus</a>
              <a href="#batches">Batches</a>
              <a href="#placement">Careers</a>
              <a href="#faq">FAQ</a>
              <a className="analytics-nav-cta" href={`tel:+91${phone}`}><Phone size={15} /> Call</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="analytics-hero">
            <div className="analytics-container analytics-hero-grid">
              <div className="analytics-hero-copy">
                <span className="analytics-kicker"><Sparkles size={15} /> Data analytics course in Hubballi Dharwad</span>
                <h1>Learn Excel, SQL, Python, Statistics and Power BI.</h1>
                <p>Join a practical 2.5 to 3 month Data Analytics Course at SV CurioTech, built for Hubballi and Dharwad learners who want career-focused analytics skills.</p>
              </div>

              <aside className="analytics-hero-form-panel" id="top-demo-form">
                <span>Free course enquiry</span>
                <h2>Get batch details</h2>
                <p>Share your details and our team will call you with current schedule, fees, delivery mode and enrollment information.</p>
                <LeadForm variant="analytics-top" defaultCourse="Data Analytics Course in Hubballi Dharwad" />
              </aside>
            </div>
          </section>

          <section className="analytics-problem">
            <div className="analytics-container analytics-problem-grid">
              <div>
                <span className="analytics-section-tag">Why this course</span>
                <h2>Practical data skills for students, graduates and working professionals.</h2>
              </div>
              <div>
                <p>Data is used across technology, finance, retail, healthcare, manufacturing and logistics to understand performance and support decisions. A data analytics professional converts raw information into meaningful reports, dashboards and insights.</p>
                <p>This course combines concepts, exercises, case practice and project-based learning so Hubballi-Dharwad learners can demonstrate skills through a practical portfolio.</p>
              </div>
            </div>
          </section>

          <section className="analytics-industries">
            <div className="analytics-container">
              <span>Technology</span>
              <span>Finance</span>
              <span>Retail</span>
              <span>Healthcare</span>
              <span>Manufacturing</span>
              <span>Logistics</span>
            </div>
          </section>

          <section className="analytics-section analytics-local">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Why analytics</span>
                <h2>Every growing business needs people who can question the numbers.</h2>
                <p>The course teaches how to collect, clean, analyze and present data in a business format. Learners practise with realistic datasets and move from tool usage to insight-building.</p>
                <p>By the end, you should be able to work with datasets, write SQL queries, analyze in Excel and Python, build Power BI dashboards, apply basic statistics and explain findings clearly.</p>
              </div>
              <div className="analytics-proof-stack">
                <article><strong>Excel for reporting</strong><p>Clean data, summarize it with pivots and create charts that make performance easy to read.</p></article>
                <article><strong>SQL and Python for analysis</strong><p>Query information, transform datasets and explore patterns using practical analyst workflows.</p></article>
                <article><strong>Power BI for decisions</strong><p>Design interactive dashboards with filters, slicers, drill-through and business-focused insight notes.</p></article>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-syllabus" id="syllabus">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">What you will learn</span>
                <h2>A structured syllabus across analytics fundamentals, tools and projects.</h2>
                <p>The curriculum covers Excel, SQL, Python, Statistics, Power BI, data visualization, storytelling and AI-assisted analytics with quality checks.</p>
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
                <h2>One path for learners comparing Excel, SQL, Python and Power BI courses.</h2>
                <p>Learners often search separately for Data Analytics Training in Hubballi, Data Analytics Course in Dharwad, Data Analyst Course Hubballi or Python SQL Power BI Course Hubballi. This page brings the complete learning path into one practical course.</p>
                <p>AI-assisted analytics is included with a focus on safe use, formula support, question support, documentation help and checking the accuracy of AI-generated content.</p>
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
                <h2>A 2.5 to 3 month pathway from fundamentals to portfolio.</h2>
                <p>The exact schedule depends on the selected batch, but each stage connects tools, concepts, practice and project work.</p>
              </div>
              <div className="analytics-roadmap-list">
                {roadmap.map(([week, title, text]) => <article key={week}><span>{week}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-projects">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Hands-on projects</span>
                <h2>Run the full analytics pipeline with authentic business data.</h2>
                <p>Projects help learners understand a business problem, clean data, query information, analyze trends, create dashboards and present results.</p>
              </div>
              <div className="analytics-project-grid">
                {projectTracks.map(([title, text]) => <article key={title}><strong>{title}</strong><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-deliverables">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Learning outcomes</span>
                <h2>Leave with practical work you can explain.</h2>
                <p>On completion, learners should be able to interact with datasets, clean and organize information, write SQL queries, analyze data in Excel and Python, build Power BI dashboards and communicate results in a business format.</p>
              </div>
              <div className="analytics-deliverable-grid">
                {deliverables.map((item) => <span key={item}><Check size={16} /> {item}</span>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-fit">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Who can join</span>
                <h2>Designed for beginners, students, graduates and career changers.</h2>
                <p>No programming prerequisite is needed. SQL and Python are introduced progressively, with practice that builds confidence over time.</p>
              </div>
              <ul>
                {audiences.map((item) => <li key={item}><Check size={18} /> {item}</li>)}
              </ul>
            </div>
          </section>

          <section className="analytics-section analytics-nearby">
            <div className="analytics-container analytics-two-col">
              <div>
                <span className="analytics-section-tag">Hubballi-Dharwad learners</span>
                <h2>Flexible batches for college, work and career-transition schedules.</h2>
                <p>Weekday and weekend batches are available based on current schedules. Flexible timings help learners maintain a regular routine while managing college, work or career-change preparation.</p>
                <div className="analytics-local-help">
                  {nearbyLearnerSupport.map(([title, text]) => (
                    <article key={title}>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="analytics-nearby-panel">
                <div className="analytics-area-tags">
                  {localAreas.map((area) => <span key={area}>{area}</span>)}
                </div>
                <div className="analytics-nearby-note">
                  <strong>Project-based practice</strong>
                  <p>Exercises and projects are designed to help learners build a small portfolio that shows tool skills, business understanding and presentation ability.</p>
                </div>
                <div className="analytics-nearby-highlights">
                  {nearbyClassNotes.map(([title, text]) => (
                    <article key={title}>
                      <Check />
                      <div>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-compare">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Why SV CurioTech</span>
                <h2>A structured course instead of scattered short lessons.</h2>
                <p>The training focuses on practical exercises, portfolio-oriented projects, weekday and weekend options, flexible timings and a career-focused learning approach.</p>
              </div>
              <div className="analytics-compare-grid">
                {comparisons.map(([title, scope, note]) => <article key={title}><h3>{title}</h3><p>{scope}</p><strong>{note}</strong></article>)}
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-batches" id="batches">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Batch options</span>
                <h2>2.5 to 3 months with weekday, weekend and flexible timing options.</h2>
                <p>Schedules can be chosen from available batches. Contact SV CurioTech for current timing, fees, delivery mode and enrollment details.</p>
              </div>
              <div className="analytics-batch-grid">
                <article><CalendarDays /><strong>Duration</strong><span>2.5 to 3 months</span></article>
                <article><CalendarDays /><strong>Weekday batches</strong><span>Available based on current schedule</span></article>
                <article><Users /><strong>Weekend batches</strong><span>For college and work commitments</span></article>
                <article><MapPin /><strong>Flexible timings</strong><span>For Hubballi and Dharwad learners</span></article>
              </div>
              <p className="analytics-note">Start your Data Analytics learning journey with SV CurioTech: learn, practice, analyze and build your portfolio.</p>
            </div>
          </section>

          <section className="analytics-section analytics-placement" id="placement">
            <div className="analytics-container analytics-placement-grid">
              <div>
                <span className="analytics-section-tag">Career paths</span>
                <h2>Prepare for entry-level and junior analytics roles.</h2>
                <p>The course emphasizes hands-on skills that can support Data Analyst, Business Analyst, Reporting Analyst, MIS Analyst, BI Analyst, Power BI Developer and Junior Data Visualization Analyst career paths.</p>
                <p>Career-focused learning means you practise not only tools, but also how to explain business questions, KPIs, trends, patterns, outliers, dashboards and project decisions.</p>
              </div>
              <div className="analytics-salary-panel">
                <span>Learning path</span>
                <strong>2.5-3 months</strong>
                <p>Excel, SQL, Python, Statistics, Power BI, AI-assisted analytics and portfolio project practice.</p>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-demo" id="demo">
            <div className="analytics-container analytics-demo-grid analytics-demo-copy-only">
              <div>
                <span className="analytics-section-tag">Call to action</span>
                <h2>Start your Data Analytics learning journey with SV CurioTech.</h2>
                <p>2.5 to 3 months, weekday and weekend batches, flexible timings, practical learning and portfolio-oriented project work.</p>
              </div>
            </div>
          </section>

          <section className="analytics-section analytics-faq" id="faq">
            <div className="analytics-container">
              <div className="analytics-heading">
                <span className="analytics-section-tag">Frequently asked questions</span>
                <h2>Questions Hubballi-Dharwad learners ask before joining.</h2>
              </div>
              <div className="analytics-faq-list">
                {faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
              </div>
            </div>
          </section>
        </main>

        <a className="analytics-whatsapp" href={`https://wa.me/91${phone}?text=Hi%20SV%20CurioTech%2C%20I%20want%20details%20about%20data%20analytics%20training%20in%20Hubballi%20Dharwad.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /><span>WhatsApp</span></a>

        <footer className="analytics-footer">
          <div className="analytics-container analytics-footer-grid">
            <div>
              <strong>SV CurioTech</strong>
              <p>Data analytics training in Hubballi-Dharwad with Excel, SQL, Python, Statistics, Power BI, projects and flexible batches.</p>
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
