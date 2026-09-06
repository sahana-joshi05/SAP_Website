import React from "react";
import { PlayCircle, Quote } from "lucide-react";

const feedbackVideos = [
  "/assets/student-feedback/student-feedback-01.mp4",
  "/assets/student-feedback/student-feedback-02.mp4",
  "/assets/student-feedback/student-feedback-03.mp4",
  "/assets/student-feedback/student-feedback-04.mp4",
];

export default function StudentFeedbackVideos() {
  return (
    <section className="section student-feedback-video-section" id="student-feedback-video">
      <div className="container">
        <div className="student-feedback-video-head">
          <div>
            <span className="student-feedback-label"><Quote size={20} /> Student Feedback</span>
            <p>Hear directly from our learners about their classroom experience, trainer support, and practical SAP learning journey.</p>
          </div>
          <div className="student-feedback-video-badge">
            <PlayCircle size={20} />
            <span>4 learner stories</span>
          </div>
        </div>
        <div className="student-feedback-video-grid">
          {feedbackVideos.map((video, index) => (
            <article className="student-feedback-video-card" key={video}>
              <div className="student-feedback-video-frame">
                <video controls preload="metadata" playsInline aria-label={`Student feedback video ${index + 1}`}>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="student-feedback-video-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
