import React, { useRef } from "react";
import { PlayCircle, Quote } from "lucide-react";

const feedbackVideos = [
  {
    src: "/assets/student-feedback/student-feedback-01.mp4",
    previewTime: 4,
  },
  {
    src: "/assets/student-feedback/student-feedback-02.mp4",
    previewTime: 0.1,
  },
  {
    src: "/assets/student-feedback/student-feedback-03.mp4",
    previewTime: 4,
  },
  {
    src: "/assets/student-feedback/student-feedback-04.mp4",
    previewTime: 0.1,
  },
  {
    src: "/assets/student-feedback/student-feedback-05.mp4",
    previewTime: 4,
  },
];

function StudentFeedbackVideo({ video, index }) {
  const hasStarted = useRef(false);

  const showStudentPreview = (event) => {
    if (hasStarted.current) return;

    const player = event.currentTarget;
    const previewTime = Math.min(video.previewTime, Math.max(player.duration - 0.1, 0));

    if (Number.isFinite(previewTime) && Math.abs(player.currentTime - previewTime) > 0.1) {
      player.currentTime = previewTime;
    }
  };

  const playFromBeginning = (event) => {
    if (hasStarted.current) return;

    hasStarted.current = true;
    event.currentTarget.currentTime = 0;
  };

  return (
    <video
      controls
      preload="metadata"
      playsInline
      aria-label={`Student feedback video ${index + 1}`}
      onLoadedMetadata={showStudentPreview}
      onPlay={playFromBeginning}
    >
      <source src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

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
            <span>5 learner stories</span>
          </div>
        </div>
        <div className="student-feedback-video-grid">
          {feedbackVideos.map((video, index) => (
            <article className="student-feedback-video-card" key={video.src}>
              <div className="student-feedback-video-frame">
                <StudentFeedbackVideo video={video} index={index} />
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
