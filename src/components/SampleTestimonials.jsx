import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data";

export default function SampleTestimonials({ limit = 18 }) {
  return <section className="section testimonials-section" id="student-reviews"><div className="container">
    <div className="section-title"><span className="eyebrow">Learner feedback</span><h2>What learners value about the training</h2><p>Examples of the learning experience across practical classes, flexible batches, project guidance, and interview preparation.</p></div>
    <p className="sample-review-note"><strong>Sample content:</strong> Testimonials marked “Sample” are placeholders and should be replaced with verified learner feedback before publishing.</p>
    <div className="testimonial-grid">{testimonials.slice(0, limit).map((t, index)=><article className="testimonial" key={`${t.name}-${index}`}>
      <div className="quote-mark">“</div><div className="stars" aria-label="Five stars">{[1,2,3,4,5].map(x=><Star key={x} size={15} fill="currentColor"/>)}</div>
      {t.isSample && <span className="sample-review-badge">Sample</span>}<p>{t.quote}</p>
      <div className="student"><span>{t.initials}</span><div><strong>{t.name}</strong><small>{t.role} • {t.company}</small></div></div>
    </article>)}</div>
  </div></section>;
}
