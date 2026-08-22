import React, { useState } from "react";
import SampleTestimonials from "../components/SampleTestimonials";
import { MessageCircle } from "lucide-react";
import "./SapFicoTrainingBangalore.css";

const asset = (name) => `/assets/sap-fico-page/${name}`;

export default function SapFicoTrainingBangalore({ usePageSeo, phone, email, LeadForm }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const whatsappPhone = "7022624629";

  usePageSeo({
    title: "SAP FICO Training in Bangalore | SV CurioTech",
    description:
      "Join SAP FICO Training in Bangalore at SV CurioTech. Learn SAP FI & CO with real-time projects, SAP S/4HANA concepts, placement assistance, expert trainers, and flexible weekday & weekend batches.",
    keywords:
      "SAP FICO Training Bangalore, SAP FI Course Bangalore, SAP CO Course, SAP S4HANA Training, SAP FICO Institute Bangalore, SAP Finance Training",
    canonical: "https://www.svcuriotech.com/sap-fico-training-in-bangalore",
    image: "https://www.svcuriotech.com/assets/sap-fico-page/logo.png",
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
          course: "SAP FICO Training in Bangalore",
          variant: "course-info",
          _replyto: form.email,
          _subject: `New SAP FICO enquiry - ${form.name}`,
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

  const features = [
    ["📚 Industry Curriculum", "Learn SAP FICO concepts based on real business processes and current industry standards."],
    ["👨‍🏫 Expert Trainers", "Get trained by experienced professionals with practical implementation knowledge."],
    ["💼 Placement Assistance", "Receive resume building, mock interviews, and placement guidance."],
    ["📈 Real-Time Projects", "Work on practical SAP FICO scenarios to gain hands-on experience."],
  ];

  const curriculum = [
    "📘 Introduction to SAP ERP & SAP S/4HANA",
    "💰 General Ledger Accounting (GL)",
    "🧾 Accounts Payable (AP)",
    "💳 Accounts Receivable (AR)",
    "🏢 Asset Accounting (AA)",
    "🏦 Bank Accounting",
    "📊 Cost Center Accounting",
    "📈 Profit Center Accounting",
    "📋 Internal Orders",
    "📝 Product Costing Basics",
    "📑 Profitability Analysis (CO-PA)",
    "🎯 Real-Time Projects & Interview Preparation",
  ];

  const benefits = [
    ["🎓 Certified Trainers", "Learn from experienced SAP professionals with real-time implementation experience."],
    ["💼 Placement Assistance", "Resume preparation, mock interviews, and placement guidance for every student."],
    ["💻 Live Projects", "Work on practical SAP FICO business scenarios to gain real-world experience."],
    ["📜 Certification Guidance", "Get complete guidance to prepare for SAP certification exams."],
    ["🕒 Flexible Timings", "Weekday and weekend batches are available for students and working professionals."],
    ["🏢 Career Support", "Career counseling, interview preparation, and continuous learning support."],
  ];

  const companies = [
    ["tcs.png", "TCS", "SAP Consulting & Support"],
    ["infosys.png", "Infosys", "SAP Implementation Projects"],
    ["wipro.png", "Wipro", "SAP ERP Solutions"],
    ["accenture.png", "Accenture", "SAP Digital Transformation"],
    ["ibm.png", "IBM", "SAP HANA & Cloud Projects"],
    ["capgemini.png", "Capgemini", "Global SAP Services"],
    ["deloitte.png", "Deloitte", "SAP Consulting Services"],
    ["hcltech.png", "HCLTech", "SAP Infrastructure Support"],
    ["techmahindra.png", "Tech Mahindra", "SAP Enterprise Solutions"],
    ["cognizant.png", "Cognizant", "SAP Application Services"],
    ["ey.png", "EY", "SAP Advisory Projects"],
    ["kpmg.png", "KPMG", "SAP Business Consulting"],
  ];

  const faqs = [
    ["Who can join this SAP FICO course?", "Freshers, Commerce graduates, MBA graduates, Finance professionals, Accountants, and working professionals can join this course."],
    ["Do you provide placement assistance?", "Yes. We provide resume preparation, mock interviews, career guidance, and placement assistance."],
    ["Is SAP S/4HANA included?", "Yes. Our curriculum includes SAP S/4HANA concepts and practical exercises."],
    ["Are online and classroom batches available?", "Yes. Both online and classroom training options are available."],
  ];

  const testimonials = [
    ["Rahul S.", "The SAP FICO course was practical and easy to understand. The trainers explained real-time business scenarios that helped me clear interviews confidently."],
    ["Priya M.", "Excellent placement support and hands-on SAP S/4HANA training. I highly recommend this course to freshers and working professionals."],
    ["Naveen K.", "Weekend batches helped me balance my job and learning. The mock interviews were very useful."],
    ["Anjali R.", "I joined with no SAP background, but the teaching methodology made it easy to understand every module from basic to advanced."],
    ["Kiran P.", "Real-time projects gave me confidence to attend interviews. The practical approach is what makes this training unique."],
    ["Sneha G.", "The mock interviews, resume preparation, and career guidance helped me become job-ready. Highly recommended for freshers."],
    ["Mahesh B.", "Flexible batch timings allowed me to complete the course while working full-time. Every session was informative and interactive."],
    ["Deepa N.", "The trainers explained SAP Financial Accounting and Controlling with practical scenarios that are used in real companies."],
    ["Arjun V.", "One of the best SAP FICO training institutes in Bangalore. Friendly trainers, updated syllabus, and excellent learning environment."],
    ["Shreya H.", "The certification guidance and practical assignments made me confident in my SAP knowledge. I learned a lot during the course."],
    ["Vikram T.", "Every class was well planned and focused on practical learning. The trainers shared real implementation experiences from the industry."],
    ["Pooja D.", "The placement team was very supportive throughout the training. Their interview preparation sessions were extremely useful."],
    ["Harish C.", "I liked the classroom environment and individual attention given to every student. The course content is industry-oriented."],
    ["Keerthi R.", "The trainers covered every topic with patience and provided plenty of hands-on exercises. It was a great learning experience."],
    ["Sanjay P.", "Thanks to SV CurioTech, I gained practical SAP FICO skills and improved my confidence for interviews."],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SV CurioTech",
    url: "https://www.svcuriotech.com/",
    logo: "https://www.svcuriotech.com/assets/sap-fico-page/logo.png",
    telephone: `+91 ${phone}`,
    email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };

  return (
    <div className="fico-page">
      <div className="floating-bg">
        {["💻", "📊", "💰", "📈", "📑", "🧮", "📋", "💼"].map((icon) => <span key={icon}>{icon}</span>)}
      </div>
      <div className="bg-shapes">
        <div className="circle c1" />
        <div className="circle c2" />
        <div className="ring r1" />
        <div className="ring r2" />
        <div className="dot d1" />
        <div className="dot d2" />
      </div>
      <div className="blob blob1" />
      <div className="blob blob2" />

      <div className="fico-topbar">
        <div className="fico-container">
          <span>♢ Admissions open for upcoming weekday & weekend batches</span>
          <div>
            <a href={`tel:+91${phone}`}>☎ +91 {phone}</a>
            <a href={`mailto:${email}`}>✉ {email}</a>
          </div>
        </div>
      </div>

      <nav>
        <div className="fico-container">
          <div className="navbar">
            <a className="fico-site-logo" href="https://www.svcuriotech.com/" aria-label="SV CurioTech home">
              <span className="fico-logo-mark"><img src="/assets/sv-curiotech-mark.png" alt="" /></span>
              <span className="fico-logo-copy">
                <strong>SV <span>CURIOTECH</span></strong>
                <small>Innovating education through technology</small>
              </span>
            </a>
            <ul>
              <li><a href="https://www.svcuriotech.com/">Home</a></li>
              <li><a href="https://www.svcuriotech.com/about">About</a></li>
              <li><a href="https://www.svcuriotech.com/courses">Courses</a></li>
              <li><a href="https://www.svcuriotech.com/placements">Placements</a></li>
              <li><a href="https://www.svcuriotech.com/contact">Contact</a></li>
              <li><a className="demo-link" href="https://www.svcuriotech.com/contact#registration">Demo Request →</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="fico-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>SAP FICO Training in Bangalore</h1>
                <h2>Become a Certified SAP FICO Consultant</h2>
                <p>Master SAP FICO with real-time business scenarios, SAP S/4HANA training, expert guidance, interview preparation, certification assistance, and placement support. Join one of the leading SAP FICO training programs in Bangalore and build your career in ERP Finance.</p>
                <ul className="hero-list">
                  <li>✔ Real-Time Projects</li>
                  <li>✔ SAP S/4HANA Training</li>
                  <li>✔ Industry Expert Trainers</li>
                  <li>✔ Placement Assistance</li>
                </ul>
                <div className="hero-buttons">
                  <a href={`https://wa.me/91${whatsappPhone}?text=Hi,%20I%20want%20to%20book%20a%20free%20SAP%20FICO%20demo%20class.`} target="_blank" rel="noreferrer">Book Free Demo</a>
                </div>
              </div>
              <aside className="fico-course-card" id="course-information">
                <div className="fico-course-head">
                  <span>▣ Course enquiry</span>
                  <strong>Request for Course Information</strong>
                </div>
                {LeadForm ? (
                  <LeadForm variant="course-info" defaultCourse="SAP FICO Training in Bangalore" />
                ) : (
                  <form className="contact-form" onSubmit={submit}>
                    <input type="text" name="name" placeholder="Enter your full name" value={form.name} onChange={update} required />
                    <input type="email" name="email" placeholder="you@email.com" value={form.email} onChange={update} required />
                    <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={update} required />
                    <input type="text" name="message" placeholder="Enter SAP course" value={form.message} onChange={update} required />
                    {sent && <div className="form-success-msg">Enquiry sent! Our team will contact you shortly.</div>}
                    {error && <div className="form-error-msg">{error}</div>}
                    <button type="submit" disabled={sending}>{sending ? "Sending..." : "Submit Request"} →</button>
                  </form>
                )}
                <div className="fico-course-trust">
                  <span>▣ Flexible batches</span>
                  <span>♢ Placement assistance</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="about" className="features">
          <div className="fico-container">
            <h2>Why Choose Our SAP FICO Training?</h2>
            <p className="section-text">Build a successful career in SAP Finance with industry-oriented training, practical learning, and placement support.</p>
            <div className="feature-boxes">
              {features.map(([title, text]) => <div className="feature-card show" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="curriculum" className="curriculum">
          <div className="fico-container">
            <h2>SAP FICO Course Curriculum</h2>
            <p className="section-text">Our industry-focused SAP FICO course covers all essential Financial Accounting (FI) and Controlling (CO) modules with practical exercises and real-world business scenarios.</p>
            <div className="curriculum-grid">
              {curriculum.map((item) => <div className="curriculum-card show" key={item}>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="fico-container">
            <h2>Why Students Choose SV CurioTech</h2>
            <p className="section-text">We focus on practical learning, career growth, and helping students become job-ready SAP FICO professionals.</p>
            <div className="benefit-grid">
              {benefits.map(([title, text]) => <div className="benefit-card show" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="fico-container">
            <h2>Our Achievements</h2>
            <div className="stats-grid">
              <div className="stat-box"><h3>1000</h3><p>Students Trained</p></div>
              <div className="stat-box"><h3>95</h3><p>Placement Support (%)</p></div>
              <div className="stat-box"><h3>15</h3><p>Expert Trainers</p></div>
              <div className="stat-box"><h3>50</h3><p>Hiring Partners</p></div>
            </div>
          </div>
        </section>

        <section className="companies" id="placements">
          <div className="fico-container">
            <h2>Our Students Work In Top Companies</h2>
            <p className="section-text">SV CurioTech students have gone on to build successful SAP FICO careers with leading IT, consulting, and multinational companies.</p>
            <div className="companies-grid">
              {companies.map(([logo, name, text]) => <div className="company-card" key={name}><img src={asset(logo)} alt={`${name} Logo`} className="company-logo" /><h3>{name}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="fico-container">
            <h2>Frequently Asked Questions</h2>
            <p className="section-text">Find answers to the most common questions about our SAP FICO Training in Bangalore.</p>
            {faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}</button>
                {openFaq === index && <div className="faq-answer"><p>{answer}</p></div>}
              </div>
            ))}
          </div>
        </section>

        <div className="about">
          <div className="fico-container">
            <h2>Why Learn SAP FICO?</h2>
            <p>SAP FICO is one of the most in-demand ERP modules used by businesses to manage financial accounting, reporting, and controlling processes.</p>
          </div>
        </div>

        <section className="career-benefits">
          <div className="fico-container">
            <h2>Why Choose SAP FICO as a Career?</h2>
            <p className="section-text">SAP FICO is one of the most important SAP modules used by organizations worldwide for financial accounting and business controlling.</p>
            <div className="career-grid">
              <div><h3>🌍 Global Demand</h3><p>SAP FICO consultants are required across industries for financial management.</p></div>
              <div><h3>📈 Career Growth</h3><p>Build a long-term career in SAP Finance and ERP consulting.</p></div>
              <div><h3>💼 Multiple Opportunities</h3><p>Explore roles like SAP FICO Consultant, Analyst and Functional Consultant.</p></div>
              <div><h3>🚀 SAP S/4HANA Future</h3><p>Learn modern SAP S/4HANA finance concepts used by enterprises.</p></div>
            </div>
          </div>
        </section>

        <section className="training-process">
          <div className="fico-container">
            <h2>Our SAP FICO Training Process</h2>
            <div className="process-grid">
              <div><h3>01</h3><h4>Concept Training</h4><p>Learn SAP FI and CO fundamentals with business examples.</p></div>
              <div><h3>02</h3><h4>Live SAP Practice</h4><p>Practice SAP transactions on real SAP environment.</p></div>
              <div><h3>03</h3><h4>Real-Time Projects</h4><p>Work on company-based financial scenarios.</p></div>
              <div><h3>04</h3><h4>Interview Preparation</h4><p>Prepare for SAP FICO consultant interviews.</p></div>
            </div>
          </div>
        </section>

        <section className="fico-modules">
          <div className="fico-container">
            <h2>SAP FICO Modules Covered</h2>
            <div className="fico-grid">
              <div><h3>SAP FI (Financial Accounting)</h3><p>Learn General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting and Financial Reporting.</p></div>
              <div><h3>SAP CO (Controlling)</h3><p>Understand Cost Center Accounting, Profit Center Accounting, Internal Orders, Product Costing and CO-PA.</p></div>
            </div>
          </div>
        </section>

        <section className="who-can-join">
          <div className="fico-container">
            <h2>Who Can Join SAP FICO Training?</h2>
            <div className="join-grid">
              {["🎓 B.Com / M.Com Graduates", "🎓 BBA / MBA Finance Students", "💼 Accounting Professionals", "👨‍💻 IT Professionals", "🔄 Career Switchers", "🧑‍🎓 Fresh Graduates"].map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="roadmap">
          <div className="fico-container">
            <h2>Your SAP FICO Career Roadmap</h2>
            <div className="roadmap-grid">
              {["Learn SAP FICO Concepts", "Practice SAP Transactions", "Complete Real-Time Project", "Prepare For Interviews", "Start SAP Career"].map((item, index) => <div key={item}><h3>Step {index + 1}</h3><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="placement">
          <div className="fico-container">
            <h2>SAP FICO Placement Assistance</h2>
            <div className="placement-grid">
              <div><h3>Resume Building</h3><p>SAP-focused resume preparation.</p></div>
              <div><h3>Mock Interviews</h3><p>Technical and HR interview practice.</p></div>
              <div><h3>Job Guidance</h3><p>Support for SAP FICO career opportunities.</p></div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="fico-container">
            <h2>What Our Students Say</h2>
            <div className="testimonial-grid">
              {testimonials.map(([name, text]) => <div className="testimonial-card show" key={name}><p>"{text}"</p><h4>- {name}</h4></div>)}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="fico-container">
            <h2>Start Your SAP FICO Career Today!</h2>
            <p>Join our upcoming SAP FICO batch and get trained by industry experts with real-time projects, certification guidance, and placement assistance.</p>
            <a href="#contact" className="cta-btn">Book Free Demo Class</a>
          </div>
        </section>

        <section className="batches">
          <div className="fico-container">
            <h2>Upcoming SAP FICO Batches</h2>
            <div className="batch-grid">
              <div className="batch-card show"><h3>Weekday Batch</h3><p>📅 Monday - Friday</p><p>⏰ 10:00 AM - 12:00 PM</p><p>⌛ Duration: 8 Weeks</p></div>
              <div className="batch-card show"><h3>Weekend Batch</h3><p>📅 Saturday & Sunday</p><p>⏰ 10:00 AM - 2:00 PM</p><p>⌛ Duration: 10 Weeks</p></div>
              <div className="batch-card show"><h3>Online Batch</h3><p>🌐 Live Online Classes</p><p>📅 Flexible Timing</p><p>🎓 Free Demo Available</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="fico-container">
            <h2>Contact Us</h2>
            <p>Start your SAP FICO career today. Contact us for a free demo class and course details.</p>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>📍 Bangalore, Karnataka</p>
                <p>📞 +91 {phone}</p>
                <p>📧 {email}</p>
                <p>🌐 Website: <a href="https://www.svcuriotech.com/">www.svcuriotech.com</a></p>
                <p>🕒 Weekday & Weekend Batches Available</p>
                <p>🎓 Free Demo Class Available</p>
              </div>
              <form className="contact-form" onSubmit={submit}>
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={update} required />
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={update} required />
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={update} required />
                <textarea name="message" placeholder="Your Message" value={form.message} onChange={update} required />
                {sent && <div className="form-success-msg">Enquiry sent! Our team will contact you shortly.</div>}
                {error && <div className="form-error-msg">{error}</div>}
                <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Enquiry"}</button>
              </form>
              <div className="map">
                <iframe
                  title="SV CurioTech Map"
                  src="https://www.google.com/maps?q=No.+25,+1st+Floor,+MG+Road,+Bengaluru,+Karnataka+560001,+India&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        <SampleTestimonials />
      </main>

      <footer className="footer">
        <div className="fico-container">
          <div className="footer-grid">
            <div>
              <img src={asset("logo.png")} alt="SV CurioTech Logo" className="footer-logo" />
              <p className="website-link">🌐 <a href="https://www.svcuriotech.com/">www.svcuriotech.com</a></p>
              <p>Learn SAP FICO Training in Bangalore with industry experts, real-time projects, certification guidance and placement assistance.</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/sv_curiotech/" target="_blank" rel="noreferrer">IG</a>
                <a href="https://www.linkedin.com/in/sv-curiotech-7764a0419/" target="_blank" rel="noreferrer">in</a>
              </div>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#curriculum">Curriculum</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>📍 Bangalore, Karnataka</p>
              <p>📞 +91 {phone}</p>
              <p>📧 {email}</p>
              <p>🕒 Weekday & Weekend Batches</p>
            </div>
          </div>
          <hr />
          <p className="copyright">© 2026 SV CurioTech. All Rights Reserved.</p>
        </div>
      </footer>

      <a href={`https://wa.me/91${whatsappPhone}?text=Hi%20SV%20CurioTech,%20I%20want%20details%20about%20SAP%20FICO%20Training`} className="whatsapp-btn" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={30} strokeWidth={2.4} /></a>
      <a href={`tel:+91${phone}`} className="call-btn">📞</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
