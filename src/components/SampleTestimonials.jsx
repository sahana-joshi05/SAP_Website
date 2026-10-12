import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { testimonials } from "../data";

export default function SampleTestimonials({ limit = 24 }) {
  return (
    <section className="section testimonials-section" id="student-reviews">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Learner feedback</span>
          <h2>Genuine learner reviews from Google</h2>
          <p>Real feedback about practical classes, trainer support, hands-on learning, and interview preparation at SV CurioTech.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.slice(0, limit).map((t, index) => (
            <article className="testimonial" key={`${t.name}-${index}`}>
              <div className="quote-mark">"</div>
              <div className="stars" aria-label="Five stars">
                {[1, 2, 3, 4, 5].map((x) => <Star key={x} size={15} fill="currentColor" />)}
              </div>
              <p>{t.quote}</p>
              <div className="student">
                <span>{t.initials}</span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role} - {t.company}</small>
                  {t.sourceUrl && <a className="google-review-link" href={t.sourceUrl} target="_blank" rel="noreferrer">View Google review <ExternalLink size={12} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
