import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Maximize2, Pause, Play, X } from "lucide-react";
import "./LearnerAchievementCarousel.css";

const learnerAchievements = [
  ["Vikash", "SAP FICO"],
  ["Sivaguru", "AI"],
  ["Siri", "SAP PP"],
  ["Senthil Kumar", "SAP SD"],
  ["Sahana", "Java"],
  ["Sahana", "Data Analytics"],
  ["Ramesh", "SAP PP"],
  ["Pradeep Kumar", "SQL"],
  ["Prabhu", "SAP Ariba"],
  ["Nirmal", "Python"],
  ["Nikitha", "Java"],
  ["Naveen Kumar", "Java"],
  ["Mohan Kumar", "Java Full Stack"],
  ["Madhan", "SAP ERP"],
  ["Kavitha", "SAP FICO"],
  ["Karthick", "Java"],
  ["Aishwarya", "Data Analytics"],
  ["Anupama", "SAP FICO"],
];

const achievementImage = (index) => `/assets/successfactors-placement/learner-achievement-${String(index + 1).padStart(2, "0")}.jpg`;

export default function LearnerAchievementCarousel() {
  const gallery = useRef(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isPaused = paused || hovered || focused || prefersReducedMotion;

  function moveGallery(direction) {
    const card = gallery.current?.querySelector(".learner-achievement-card");
    const distance = card ? card.getBoundingClientRect().width + 18 : 280;
    setOffset((currentOffset) => currentOffset + direction * distance);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (activeAchievement === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveAchievement(null);
      if (event.key === "ArrowRight") setActiveAchievement((index) => (index + 1) % learnerAchievements.length);
      if (event.key === "ArrowLeft") setActiveAchievement((index) => (index - 1 + learnerAchievements.length) % learnerAchievements.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeAchievement]);

  useEffect(() => {
    if (activeAchievement === null) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activeAchievement !== null]);

  return (
    <section
      className="learner-achievements"
      aria-label="Learner achievements"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="container learner-achievements-heading">
        <span>LEARNER MILESTONES</span>
        <h2>Celebrating learner achievements</h2>
        <p>A look at the milestones shared by our learners across SAP, analytics and technology courses.</p>
      </div>
      <div className={`learner-achievements-viewport${isPaused ? " is-paused" : ""}`} ref={gallery}>
        <div className="learner-achievements-track" style={{ "--learner-carousel-offset": `${offset}px` }}>
          {[false, true].map((isDuplicate) => (
            <div className="learner-achievements-group" key={isDuplicate ? "duplicate" : "original"} aria-hidden={isDuplicate || undefined}>
              {learnerAchievements.map(([learner, course], index) => (
                <figure className="learner-achievement-card" key={`${isDuplicate ? "copy" : "original"}-${index}`}>
                  {isDuplicate ? (
                    <div className="learner-achievement-open">
                      <img src={achievementImage(index)} alt="" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <button type="button" className="learner-achievement-open" aria-label={`View ${learner}'s ${course} achievement image`} onClick={() => setActiveAchievement(index)}>
                      <img src={achievementImage(index)} alt="" loading={index < 6 ? "eager" : "lazy"} decoding="async" />
                      <span><Maximize2 size={16} /> View photo</span>
                    </button>
                  )}
                  <figcaption><strong>{learner}</strong><span>{course}</span></figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container learner-gallery-controls">
        <p aria-live="polite">
          {prefersReducedMotion
            ? "Motion reduced — use the arrows to browse achievements"
            : paused
              ? "Carousel paused — press play to resume"
              : isPaused
                ? "Carousel paused — move pointer or focus away to resume"
                : "Continuous auto-sliding gallery — hover any photo to pause"}
        </p>
        <div>
          <button type="button" aria-label="Show previous achievements" onClick={() => moveGallery(1)}><ArrowLeft size={17} /></button>
          <button type="button" aria-label={paused ? "Resume achievement carousel" : "Pause achievement carousel"} onClick={() => setPaused((currentPaused) => !currentPaused)} disabled={prefersReducedMotion}>
            {paused ? <Play size={16} /> : <Pause size={16} />}
            <span>{paused ? "Play" : "Pause"}</span>
          </button>
          <button type="button" aria-label="Show next achievements" onClick={() => moveGallery(-1)}><ArrowRight size={17} /></button>
        </div>
      </div>
      {activeAchievement !== null && createPortal(
        <div className="learner-lightbox" role="dialog" aria-modal="true" aria-label={`${learnerAchievements[activeAchievement][0]}'s achievement image`} onClick={() => setActiveAchievement(null)}>
          <button type="button" className="learner-lightbox-close" aria-label="Close image viewer" onClick={() => setActiveAchievement(null)}><X size={22} /></button>
          <button type="button" className="learner-lightbox-arrow previous" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setActiveAchievement((index) => (index - 1 + learnerAchievements.length) % learnerAchievements.length); }}><ArrowLeft size={20} /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={achievementImage(activeAchievement)} alt={`${learnerAchievements[activeAchievement][0]} celebrating a ${learnerAchievements[activeAchievement][1]} career milestone`} />
            <figcaption><strong>{learnerAchievements[activeAchievement][0]}</strong><span>{learnerAchievements[activeAchievement][1]}</span><small>{activeAchievement + 1} of {learnerAchievements.length}</small></figcaption>
          </figure>
          <button type="button" className="learner-lightbox-arrow next" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setActiveAchievement((index) => (index + 1) % learnerAchievements.length); }}><ArrowRight size={20} /></button>
        </div>,
        document.body,
      )}
    </section>
  );
}
