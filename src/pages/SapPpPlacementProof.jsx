import React from "react";
import { ArrowRight, Building2, MapPin, PlayCircle, Star } from "lucide-react";
import StudentFeedbackVideos from "../components/StudentFeedbackVideos";
import SampleTestimonials from "../components/SampleTestimonials";
import "./SapPpPlacementProof.css";
import "./SapPpPlacementVisuals.css";

export default function SapPpPlacementProof({ companyLogos }) {
  return <section className="pp-placement" id="placements">
    <div className="container">
      <div className="pp-placement-intro">
        <div>
          <span><Building2 size={15}/> CAREER & PLACEMENT PREPARATION</span>
          <h2>Build an SAP PP profile that is ready for a recruiter conversation.</h2>
          <p>Training is one step. We help learners organise their project explanation, practise interview conversations and understand the roles their SAP PP learning can support.</p>
        </div>
        <aside>
          <Star size={18}/><strong>Independent learner feedback</strong>
          <p>Read published Google reviews and watch recorded student feedback before making your decision.</p>
          <a href="https://www.google.com/search?q=SV+CurioTech+reviews" target="_blank" rel="noreferrer">View Google reviews <ArrowRight size={15}/></a>
        </aside>
      </div>
      <div className="pp-visual-story">
        <figure><div className="pp-plan-graph" role="img" aria-label="Production planning bar chart showing demand, material requirements planning, orders and output"><div className="pp-plan-graph-head"><span>PLANT 01 / PRODUCTION BOARD</span><b>LIVE PLAN</b></div><div className="pp-plan-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="pp-plan-flow"><span>Demand</span><b>→</b><span>MRP</span><b>→</b><span>Order</span><b>→</b><span>Output</span></div></div><figcaption><span>01</span><div><strong>Read the production picture</strong><p>Connect demand, supply and capacity before making a planning decision.</p></div></figcaption></figure>
        <figure><img src="/assets/9a9208e269a46d2c013fda3f53b37198.jpg" alt="SAP professional presenting analytics and planning data to a business team" loading="lazy"/><figcaption><span>02</span><div><strong>Explain the business decision</strong><p>Build the process vocabulary that helps in project and interview discussions.</p></div></figcaption></figure>
      </div>
      <div className="pp-placement-steps">
        <article><b>01</b><h3>Project narrative</h3><p>Explain demand, MRP, material availability, capacity and production-order decisions with clarity.</p></article>
        <article><b>02</b><h3>Interview preparation</h3><p>Prepare for functional, process and scenario-led questions relevant to your target role.</p></article>
        <article><b>03</b><h3>Opportunity guidance</h3><p>Review suitable career directions and the skills employers may expect for an entry-level profile.</p></article>
      </div>
      <div className="pp-company-heading"><MapPin size={17}/><span>Enterprise ecosystems where SAP skills are valued</span></div>
      <div className="pp-company-logos">{companyLogos.map(([name, src]) => <figure key={name}><img src={src} alt={`${name} logo`} loading="lazy"/><figcaption>{name}</figcaption></figure>)}</div>
    </div>
    <div className="pp-feedback-wrap"><div className="container"><div className="pp-feedback-label"><PlayCircle size={17}/><span>Hear from SV CurioTech learners</span></div></div><StudentFeedbackVideos /><SampleTestimonials limit={8} /></div>
  </section>;
}
