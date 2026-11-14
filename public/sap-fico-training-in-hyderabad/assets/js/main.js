/**
 * SV CurioTech — Interactive Page Controls
 * Handles modern header enquiry button, floating contact actions,
 * About expandable panel, course details modal, automatic right-to-left
 * placement carousel + lightbox, certificate zoomable lightbox, and config hydration.
 */
(function () {
  "use strict";

  const cfg = window.SV_CURIOTECH_CONFIG || {};

  /* ------------------------------------------------------------------------
     1. Mobile Navigation Drawer
     ------------------------------------------------------------------------ */
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (navToggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.hidden = expanded;
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileMenu.hidden) {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Smooth Scroll & Focus to Enquiry Form (Header CTA & In-Page Triggers)
     ------------------------------------------------------------------------ */
  const enquiryCard = document.getElementById("hero-enquiry");
  const nameInput = document.getElementById("enq-name");

  document.querySelectorAll("[data-focus-enquiry]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (!enquiryCard) return;
      e.preventDefault();

      // Close open modals if triggered from inside modal
      document.querySelectorAll("dialog.modal[open]").forEach((d) => {
        if (typeof d.close === "function") d.close();
        else d.removeAttribute("open");
      });

      // Smooth scroll to hero enquiry card
      enquiryCard.scrollIntoView({ behavior: "smooth", block: "center" });
      enquiryCard.classList.add("is-highlighted");
      setTimeout(() => enquiryCard.classList.remove("is-highlighted"), 1500);

      if (nameInput) {
        setTimeout(() => nameInput.focus({ preventScroll: true }), 350);
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. Expandable Toggle Panels (About Read More & Trainer Bio)
     ------------------------------------------------------------------------ */
  document.querySelectorAll("[data-expand-target]").forEach((btn) => {
    const targetId = btn.dataset.expandTarget;
    const panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) return;

    const labelMore = btn.dataset.labelMore || "Read More";
    const labelLess = btn.dataset.labelLess || "Show Less";

    btn.addEventListener("click", () => {
      const isHidden = panel.hidden;
      panel.hidden = !isHidden;
      btn.setAttribute("aria-expanded", String(isHidden));
      btn.textContent = isHidden ? labelLess : labelMore;
    });
  });

  /* ------------------------------------------------------------------------
     4. Accessible Dialog Helpers & Universal Course Modals
     ------------------------------------------------------------------------ */
  function syncBodyModalState() {
    const openModals = document.querySelectorAll("dialog.modal[open]");
    if (openModals.length > 0) {
      document.body.classList.add("has-modal-open");
    } else {
      document.body.classList.remove("has-modal-open");
    }
  }

  function openDialogCleanly(dialogEl) {
    if (!dialogEl) return;
    if (typeof dialogEl.showModal === "function") {
      dialogEl.showModal();
    } else {
      dialogEl.setAttribute("open", "");
    }
    syncBodyModalState();
  }

  function closeDialogCleanly(dialogEl) {
    if (!dialogEl) return;
    if (typeof dialogEl.close === "function") {
      dialogEl.close();
    } else {
      dialogEl.removeAttribute("open");
    }
    syncBodyModalState();
  }

  document.querySelectorAll("dialog.modal").forEach((dialogEl) => {
    dialogEl.addEventListener("click", (e) => {
      const rect = dialogEl.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeDialogCleanly(dialogEl);
      }
    });
    dialogEl.addEventListener("close", syncBodyModalState);
    dialogEl.querySelectorAll("[data-close-modal]").forEach((closeBtn) => {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeDialogCleanly(dialogEl);
      });
    });
  });

  const courseModal = document.getElementById("course-details-modal");
  document.querySelectorAll("[data-open-course-details]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openDialogCleanly(courseModal);
    });
  });

  // Universal Contextual Enquiry Modal Triggers
  const enquiryModal = document.getElementById("enquiry-modal");
  const enquiryModalTitle = document.getElementById("enquiry-modal-title");
  const enquiryModalInterest = document.getElementById("modal-enq-interest");

  document.querySelectorAll("[data-open-enquiry]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const context = btn.dataset.enquiryContext || "";
      if (enquiryModalTitle) {
        enquiryModalTitle.textContent = context
          ? `Enquire About ${context}`
          : "Request SAP FICO Course Details";
      }

      if (enquiryModalInterest && context) {
        const lower = context.toLowerCase();
        for (let i = 0; i < enquiryModalInterest.options.length; i++) {
          const opt = enquiryModalInterest.options[i];
          const val = opt.value.toLowerCase();
          if (
            (lower.includes("syllabus") && val.includes("syllabus")) ||
            (lower.includes("project") && val.includes("mentorship")) ||
            (lower.includes("batch") && val.includes("batch")) ||
            (lower.includes("corporate") && val.includes("corporate"))
          ) {
            enquiryModalInterest.selectedIndex = i;
            break;
          }
        }
      }

      openDialogCleanly(enquiryModal);
    });
  });

  /* ------------------------------------------------------------------------
     5. Tabbed Navigation Inside Course Details Modal
     ------------------------------------------------------------------------ */
  document.querySelectorAll('[data-tabs="panel"]').forEach((tablistEl) => {
    const tabs = Array.from(tablistEl.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    function activate(tab) {
      tabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        const panelId = t.getAttribute("aria-controls");
        if (panelId) {
          const panel = document.getElementById(panelId);
          if (panel) panel.hidden = !selected;
        }
      });
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (e) => {
        let nextIdx = null;
        if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
        else if (e.key === "ArrowLeft")
          nextIdx = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") nextIdx = 0;
        else if (e.key === "End") nextIdx = tabs.length - 1;
        if (nextIdx !== null) {
          e.preventDefault();
          tabs[nextIdx].focus();
          activate(tabs[nextIdx]);
        }
      });
    });
  });

  // Expand / Collapse All modules inside Course Modal
  const modalSyllabusList = document.getElementById("syllabus-list");
  const toggleAllBtn = document.getElementById("toggle-all-syllabus");
  if (toggleAllBtn && modalSyllabusList) {
    const items = Array.from(
      modalSyllabusList.querySelectorAll(".accordion-item")
    );
    toggleAllBtn.addEventListener("click", () => {
      const anyClosed = items.some((i) => !i.open);
      items.forEach((i) => {
        i.open = anyClosed;
      });
      toggleAllBtn.textContent = anyClosed
        ? "Collapse all modules"
        : "Expand all modules";
      toggleAllBtn.setAttribute("aria-pressed", String(anyClosed));
    });
  }

  /* ------------------------------------------------------------------------
     6. Placement Carousel: Smooth Automatic Sliding + Manual + Lightbox
     ------------------------------------------------------------------------ */
  const placementTrack = document.getElementById("placement-track");
  const placementSlides = placementTrack
    ? Array.from(placementTrack.querySelectorAll(".placement-slide"))
    : [];
  const trackPrev = document.getElementById("placement-track-prev");
  const trackNext = document.getElementById("placement-track-next");
  const trackDots = Array.from(
    document.querySelectorAll("#placement-dots .dot-btn")
  );

  let activeIndex = 0;
  let autoSlideTimer = null;
  let isHovered = false;

  function getSlideStep() {
    if (!placementSlides.length) return 300;
    const first = placementSlides[0];
    const second = placementSlides[1];
    if (first && second) {
      return second.offsetLeft - first.offsetLeft;
    }
    return first.offsetWidth + 16;
  }

  function scrollToSlide(index) {
    if (!placementTrack || !placementSlides.length) return;
    activeIndex = (index + placementSlides.length) % placementSlides.length;
    const targetSlide = placementSlides[activeIndex];
    placementTrack.scrollTo({
      left: targetSlide.offsetLeft - placementTrack.offsetLeft,
      behavior: "smooth"
    });
    updateDots(activeIndex);
  }

  function updateDots(index) {
    trackDots.forEach((dot, idx) => {
      dot.setAttribute("aria-current", idx === index ? "true" : "false");
    });
  }

  function startAutoSliding() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
      if (isHovered || !placementTrack || !placementSlides.length) return;
      // Smooth automatic advance from right to left (next slide)
      const maxScroll = placementTrack.scrollWidth - placementTrack.clientWidth;
      if (placementTrack.scrollLeft >= maxScroll - 10) {
        scrollToSlide(0);
      } else {
        scrollToSlide(activeIndex + 1);
      }
    }, 3800);
  }

  if (placementTrack && placementSlides.length) {
    if (trackPrev) {
      trackPrev.addEventListener("click", () => {
        scrollToSlide(activeIndex - 1);
      });
    }
    if (trackNext) {
      trackNext.addEventListener("click", () => {
        scrollToSlide(activeIndex + 1);
      });
    }
    trackDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        scrollToSlide(idx);
      });
    });

    placementTrack.addEventListener(
      "scroll",
      () => {
        const scrollLeft = placementTrack.scrollLeft;
        let closestIdx = 0;
        let closestDist = Infinity;
        placementSlides.forEach((slide, idx) => {
          const dist = Math.abs(slide.offsetLeft - scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        activeIndex = closestIdx;
        updateDots(closestIdx);
      },
      { passive: true }
    );

    // Pause auto slide on hover or touch interaction
    placementTrack.addEventListener("mouseenter", () => (isHovered = true));
    placementTrack.addEventListener("mouseleave", () => (isHovered = false));
    placementTrack.addEventListener("touchstart", () => (isHovered = true), {
      passive: true
    });
    placementTrack.addEventListener("touchend", () => (isHovered = false), {
      passive: true
    });

    startAutoSliding();
  }

  // Placement Lightbox: Click-to-Enlarge
  const placementLightbox = document.getElementById("placement-lightbox");
  const placementTitle = document.getElementById("placement-lightbox-title");
  const placementStage = document.getElementById("placement-lightbox-stage");
  const placementCaption = document.getElementById(
    "placement-lightbox-caption"
  );
  const placementPrev = document.getElementById("placement-prev");
  const placementNext = document.getElementById("placement-next");
  const placementTriggers = Array.from(
    document.querySelectorAll("[data-placement-index]")
  );
  let activeLightboxIdx = 0;

  function renderPlacementLightbox(idx) {
    if (!placementTriggers.length || !placementStage || !placementCaption) return;
    activeLightboxIdx =
      (idx + placementTriggers.length) % placementTriggers.length;
    const trigger = placementTriggers[activeLightboxIdx];
    const slide = trigger.closest(".placement-slide");

    if (placementTitle) {
      placementTitle.textContent =
        trigger.dataset.title || "SV CurioTech Placement Achievement";
    }
    placementCaption.textContent = trigger.dataset.caption || "";
    placementStage.innerHTML = "";

    const img = slide ? slide.querySelector("img") : null;
    if (img) {
      const clone = img.cloneNode(true);
      clone.removeAttribute("loading");
      placementStage.appendChild(clone);
    }
  }

  placementTriggers.forEach((el) => {
    const openLightbox = () => {
      renderPlacementLightbox(Number(el.dataset.placementIndex) || 0);
      openDialogCleanly(placementLightbox);
    };

    el.addEventListener("click", openLightbox);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox();
      }
    });
  });

  if (placementPrev) {
    placementPrev.addEventListener("click", () =>
      renderPlacementLightbox(activeLightboxIdx - 1)
    );
  }
  if (placementNext) {
    placementNext.addEventListener("click", () =>
      renderPlacementLightbox(activeLightboxIdx + 1)
    );
  }

  /* ------------------------------------------------------------------------
     7. Certificate Zoomable Lightbox & Certificate Enquiry Dialog
     ------------------------------------------------------------------------ */
  const certLightbox = document.getElementById("cert-lightbox");
  const certTitle = document.getElementById("cert-lightbox-title");
  const certStage = document.getElementById("cert-lightbox-stage");
  const certNote = document.getElementById("cert-lightbox-note");
  const zoomInBtn = document.getElementById("cert-zoom-in");
  const zoomOutBtn = document.getElementById("cert-zoom-out");
  const zoomResetBtn = document.getElementById("cert-zoom-reset");
  const zoomLabel = document.getElementById("cert-zoom-level");
  const certEnquiryModal = document.getElementById("cert-enquiry-modal");
  const certCard = document.querySelector("[data-cert-card]");
  let certScale = 1;

  function applyCertScale(nextScale) {
    certScale = Math.min(2.5, Math.max(1, Number(nextScale.toFixed(2))));
    const target = certStage
      ? certStage.querySelector(".lightbox-zoom-target")
      : null;
    if (target) target.style.transform = `scale(${certScale})`;
    if (zoomLabel) zoomLabel.textContent = `${Math.round(certScale * 100)}%`;
  }

  function openCertificateLightbox(btn) {
    if (!certLightbox || !certStage) return;
    if (certEnquiryModal && typeof certEnquiryModal.close === "function" && certEnquiryModal.open) {
      closeDialogCleanly(certEnquiryModal);
    }
    const card = (btn && btn.closest(".cert-card")) || certCard;
    if (certTitle) {
      certTitle.textContent =
        (btn && btn.dataset.title) || "SV CurioTech Course-Completion Certificate";
    }
    if (certNote) {
      certNote.textContent =
        (btn && btn.dataset.note) ||
        "Official SV CurioTech course-completion certificate issued for SAP FICO Consultant program. Scan QR code to verify on svcuriotech.com.";
    }
    certStage.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "lightbox-zoom-target";
    const img = card ? card.querySelector("img") : null;
    if (img) {
      const clone = img.cloneNode(true);
      clone.removeAttribute("loading");
      wrapper.appendChild(clone);
    }
    certStage.appendChild(wrapper);
    applyCertScale(1);
    openDialogCleanly(certLightbox);
  }

  // Preview & Zoom triggers
  document.querySelectorAll("[data-cert-zoom-trigger], [data-cert-trigger]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openCertificateLightbox(btn);
    });
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        openCertificateLightbox(btn);
      }
    });
  });

  // Certificate Card Click-to-Enquire
  if (certCard && certEnquiryModal) {
    certCard.addEventListener("click", (e) => {
      // Ignore clicks on zoom trigger buttons, links, or close buttons
      if (
        e.target.closest("[data-cert-zoom-trigger]") ||
        e.target.closest("[data-cert-trigger]") ||
        e.target.closest("a") ||
        e.target.closest("[data-close-modal]")
      ) {
        return;
      }
      openDialogCleanly(certEnquiryModal);
    });
  }

  document.querySelectorAll("[data-cert-enquire-trigger]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openDialogCleanly(certEnquiryModal);
    });
  });

  if (zoomInBtn)
    zoomInBtn.addEventListener("click", () => applyCertScale(certScale + 0.25));
  if (zoomOutBtn)
    zoomOutBtn.addEventListener("click", () => applyCertScale(certScale - 0.25));
  if (zoomResetBtn)
    zoomResetBtn.addEventListener("click", () => applyCertScale(1));

  /* ------------------------------------------------------------------------
     8. Google Reviews Carousel: Smooth Auto-Sliding + Manual Controls
     ------------------------------------------------------------------------ */
  const reviewsTrack = document.getElementById("reviews-track");
  const reviewSlides = reviewsTrack
    ? Array.from(reviewsTrack.querySelectorAll(".review-slide"))
    : [];
  const reviewsPrev = document.getElementById("reviews-track-prev");
  const reviewsNext = document.getElementById("reviews-track-next");
  const reviewsDots = Array.from(
    document.querySelectorAll("#reviews-dots .dot-btn")
  );
  const viewAllReviewsBtn = document.getElementById("view-all-reviews-btn");

  if (viewAllReviewsBtn && cfg.googleReviews?.verifiedProfileUrl) {
    viewAllReviewsBtn.href = cfg.googleReviews.verifiedProfileUrl;
  }

  let reviewActiveIndex = 0;
  let reviewAutoTimer = null;
  let isReviewHovered = false;

  function scrollToReview(index) {
    if (!reviewsTrack || !reviewSlides.length) return;
    reviewActiveIndex = (index + reviewSlides.length) % reviewSlides.length;
    const target = reviewSlides[reviewActiveIndex];
    reviewsTrack.scrollTo({
      left: target.offsetLeft - reviewsTrack.offsetLeft,
      behavior: "smooth"
    });
    updateReviewDots(reviewActiveIndex);
  }

  function updateReviewDots(index) {
    reviewsDots.forEach((dot, idx) => {
      dot.setAttribute("aria-current", idx === index ? "true" : "false");
    });
  }

  function startReviewAutoSliding() {
    if (reviewAutoTimer) clearInterval(reviewAutoTimer);
    reviewAutoTimer = setInterval(() => {
      if (isReviewHovered || !reviewsTrack || !reviewSlides.length) return;
      const maxScroll = reviewsTrack.scrollWidth - reviewsTrack.clientWidth;
      if (reviewsTrack.scrollLeft >= maxScroll - 10) {
        scrollToReview(0);
      } else {
        scrollToReview(reviewActiveIndex + 1);
      }
    }, 4500);
  }

  if (reviewsTrack && reviewSlides.length) {
    if (reviewsPrev) {
      reviewsPrev.addEventListener("click", () => {
        scrollToReview(reviewActiveIndex - 1);
      });
    }
    if (reviewsNext) {
      reviewsNext.addEventListener("click", () => {
        scrollToReview(reviewActiveIndex + 1);
      });
    }
    reviewsDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        scrollToReview(idx);
      });
    });

    reviewsTrack.addEventListener(
      "scroll",
      () => {
        const scrollLeft = reviewsTrack.scrollLeft;
        let closestIdx = 0;
        let closestDist = Infinity;
        reviewSlides.forEach((slide, idx) => {
          const dist = Math.abs(slide.offsetLeft - scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        reviewActiveIndex = closestIdx;
        updateReviewDots(closestIdx);
      },
      { passive: true }
    );

    reviewsTrack.addEventListener("mouseenter", () => (isReviewHovered = true));
    reviewsTrack.addEventListener("mouseleave", () => (isReviewHovered = false));
    reviewsTrack.addEventListener("touchstart", () => (isReviewHovered = true), {
      passive: true
    });
    reviewsTrack.addEventListener("touchend", () => (isReviewHovered = false), {
      passive: true
    });

    startReviewAutoSliding();
  }

  /* ------------------------------------------------------------------------
     9. Social Links & Google Profile Config Hydration
     ------------------------------------------------------------------------ */
  const socialConfig = cfg.socialLinks || {};
  document.querySelectorAll("[data-social-platform]").forEach((el) => {
    const key = el.dataset.socialPlatform;
    const url = socialConfig[key] ? String(socialConfig[key]).trim() : "";
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.classList.remove("social-pill--pending");
    }
  });

  /* ------------------------------------------------------------------------
     10. Unified Multi-Point Enquiry Form Handlers
     ------------------------------------------------------------------------ */
  function setupEnquiryForm(formId, statusId, defaultTrack) {
    const form = document.getElementById(formId);
    const formStatus = document.getElementById(statusId);
    if (!form || !formStatus) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = (form.elements.name?.value || "").trim();
      const rawPhone = (form.elements.phone?.value || "").trim();
      const email = (form.elements.email?.value || "").trim();
      const interest = (form.elements.interest?.value || defaultTrack || "SAP FICO Online Training in Hyderabad").trim();
      const message = (form.elements.message?.value || "").trim();
      const consent = Boolean(form.elements.consent?.checked);

      const cleanPhone = rawPhone.replace(/\D/g, "");

      if (!name || cleanPhone.length < 10 || !consent) {
        formStatus.hidden = false;
        formStatus.className = "form-status form-status--error";
        formStatus.textContent =
          "Please enter your full name, a valid 10-digit mobile number, and confirm contact consent.";
        return;
      }

      const endpoint =
        cfg.enquiry && cfg.enquiry.endpoint
          ? String(cfg.enquiry.endpoint).trim()
          : "";

      const waNumber =
        (cfg.contact && cfg.contact.whatsappNumber) || "916361702540";
      const waMsgLines = [
        `Hi SV CurioTech, I am ${name}`,
        `Mobile: ${cleanPhone}`,
        email ? `Email: ${email}` : null,
        `Training Interest: ${interest}`,
        message ? `Query / Background: ${message}` : null,
        `Source: SV CurioTech SAP FICO Website`
      ].filter(Boolean).join("\n");
      const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsgLines)}`;

      if (!endpoint) {
        formStatus.hidden = false;
        formStatus.className = "form-status form-status--info";
        formStatus.innerHTML = `
          Thank you, <strong>${name}</strong>! Click below to send your details directly on WhatsApp:
          <br><br>
          <a class="btn btn--whatsapp btn--block btn--sm" href="${waHref}" target="_blank" rel="noopener noreferrer">Send via WhatsApp (+91 6361702540) →</a>
        `;
        return;
      }

      try {
        formStatus.hidden = false;
        formStatus.className = "form-status form-status--info";
        formStatus.textContent = "Submitting your enquiry...";

        const res = await fetch(endpoint, {
          method: (cfg.enquiry && cfg.enquiry.method) || "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone: cleanPhone,
            email,
            interest,
            message,
            consent,
            formId,
            course: "SAP FICO Online Training in Hyderabad",
            submittedAt: new Date().toISOString()
          })
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        formStatus.className = "form-status form-status--success";
        formStatus.textContent =
          "Thank you! Your enquiry has been received. Our course advisor will contact you shortly with batch schedule and syllabus details.";
        form.reset();
      } catch (err) {
        formStatus.className = "form-status form-status--error";
        formStatus.innerHTML = `
          Unable to submit online at the moment. Please
          <a href="${waHref}" target="_blank" rel="noopener noreferrer"><strong>Chat on WhatsApp</strong></a>
          or call <a href="tel:+916361702540">+91 6361702540</a>.
        `;
      }
    });
  }

  // Bind Hero Enquiry Form, Universal Modal Form, and Certificate Modal Form
  setupEnquiryForm("enquiry-form", "enquiry-status", "SAP FICO Online Training in Hyderabad");
  setupEnquiryForm("modal-enquiry-form", "modal-enquiry-status", "SAP FICO Online Training in Hyderabad");
  setupEnquiryForm("cert-enquiry-form", "cert-enquiry-status", "SAP FICO Course Completion Certificate");
})();
