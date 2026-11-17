/**
 * SV CurioTech — MERN Full Stack Course in Bangalore
 * Interactive Logic: Sticky Nav, Mobile Drawer, Accordions, Form Validation & Fallback
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header Observer ---
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 2. Smooth Navigation with Header Offset ---
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 76;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        closeMobileMenu();
        // Close dropdown if open
        closeCoursesDropdown();
      }
    });
  });

  // --- 3. Courses Dropdown (Desktop) ---
  const dropdownToggle = document.getElementById('coursesDropdownToggle');
  const dropdownParent = document.getElementById('coursesDropdown');

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownParent.classList.contains('is-open');
      if (isOpen) {
        closeCoursesDropdown();
      } else {
        dropdownParent.classList.add('is-open');
        dropdownToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!dropdownParent.contains(e.target)) {
        closeCoursesDropdown();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownParent.classList.contains('is-open')) {
        closeCoursesDropdown();
        dropdownToggle.focus();
      }
    });
  }

  function closeCoursesDropdown() {
    if (dropdownParent && dropdownToggle) {
      dropdownParent.classList.remove('is-open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  }

  // --- 4. Mobile Menu Drawer ---
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileMenuDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-active')) {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });
  }

  function openMobileMenu() {
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    mobileToggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    mobileToggle.setAttribute('aria-label', 'Close menu');
  }

  function closeMobileMenu() {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-active');
    document.body.style.overflow = '';
    mobileToggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    `;
    mobileToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  // --- 5. Syllabus Accordions ---
  const moduleItems = document.querySelectorAll('.module-item');
  const toggleAllBtn = document.getElementById('toggleAllSyllabusBtn');

  moduleItems.forEach(item => {
    const trigger = item.querySelector('.module-trigger');
    const content = item.querySelector('.module-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        if (isOpen) {
          collapseModule(item, trigger, content);
        } else {
          expandModule(item, trigger, content);
        }
      });
    }
  });

  function expandModule(item, trigger, content) {
    item.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  function collapseModule(item, trigger, content) {
    item.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = '0px';
  }

  // Open first 2 modules by default
  if (moduleItems.length > 0) {
    const firstTwo = Array.from(moduleItems).slice(0, 2);
    firstTwo.forEach(item => {
      const trigger = item.querySelector('.module-trigger');
      const content = item.querySelector('.module-content');
      if (trigger && content) expandModule(item, trigger, content);
    });
  }

  if (toggleAllBtn) {
    let allExpanded = false;
    toggleAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      moduleItems.forEach(item => {
        const trigger = item.querySelector('.module-trigger');
        const content = item.querySelector('.module-content');
        if (trigger && content) {
          if (allExpanded) {
            expandModule(item, trigger, content);
          } else {
            collapseModule(item, trigger, content);
          }
        }
      });
      toggleAllBtn.textContent = allExpanded ? 'Collapse All Modules' : 'Expand All Modules';
    });
  }

  // --- 6. FAQ Accordions ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const ans = item.querySelector('.faq-answer');

    if (btn && ans) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Close others for clean accordion pattern
        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('is-open')) {
            other.classList.remove('is-open');
            other.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-answer').style.maxHeight = '0px';
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          ans.style.maxHeight = '0px';
        } else {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });
    }
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstBtn = firstItem.querySelector('.faq-question-btn');
    const firstAns = firstItem.querySelector('.faq-answer');
    if (firstBtn && firstAns) {
      firstItem.classList.add('is-open');
      firstBtn.setAttribute('aria-expanded', 'true');
      firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
    }
  }

  // --- 7. Hero Quick Enquiry Form Handling ---
  const heroForm = document.getElementById('heroEnquiryForm');
  const heroName = document.getElementById('heroFullName');
  const heroMobile = document.getElementById('heroMobile');
  const heroEmail = document.getElementById('heroEmail');
  const heroCourse = document.getElementById('heroCourse');

  if (heroForm && heroName && heroMobile && heroEmail) {
    // Realtime error clear on input
    [heroName, heroMobile, heroEmail].forEach(inp => {
      inp.addEventListener('input', () => {
        if (inp.classList.contains('is-invalid')) {
          inp.classList.remove('is-invalid');
          const err = inp.parentElement.querySelector('.form-error-msg');
          if (err) err.style.display = 'none';
        }
      });
    });

    heroForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isHeroValid = true;

      // Validate name
      if (!heroName.value || heroName.value.trim().length < 2) {
        setFieldState(heroName, false, 'Please enter your full name.');
        isHeroValid = false;
      } else {
        setFieldState(heroName, true);
      }

      // Validate mobile
      if (!heroMobile.value || !validatePhone(heroMobile.value)) {
        setFieldState(heroMobile, false, 'Please enter a valid mobile number.');
        isHeroValid = false;
      } else {
        setFieldState(heroMobile, true);
      }

      // Validate email
      if (!heroEmail.value || !validateEmail(heroEmail.value)) {
        setFieldState(heroEmail, false, 'Please enter a valid email address.');
        isHeroValid = false;
      } else {
        setFieldState(heroEmail, true);
      }

      if (!isHeroValid) return;

      const submissionData = {
        name: heroName.value.trim(),
        phone: heroMobile.value.trim(),
        email: heroEmail.value.trim(),
        course: heroCourse ? heroCourse.value : 'MERN Full Stack Development',
        formSource: 'Hero Quick Enquiry'
      };

      try {
        await submitLead(submissionData);
        if (modalNameSpan) modalNameSpan.textContent = submissionData.name;
        openModal(confirmationModal);
        heroForm.reset();
      } catch (err) {
        alert('We could not submit your enquiry. Please try again or contact us on WhatsApp.');
      }
    });
  }

  // --- 8. Enquiry Form Validation & Truthful Submission Handling ---
  const form = document.getElementById('enquiryForm');
  const nameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const batchSelect = document.getElementById('batchPreference');
  const messageInput = document.getElementById('message');
  const confirmationModal = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalNameSpan = document.getElementById('modalSubmittedName');

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function validatePhone(val) {
    return /^[\d\s+\-()]{8,18}$/.test(val.trim());
  }

  function setFieldState(input, isValid, errorMsg) {
    const errorEl = input.parentElement.querySelector('.form-error-msg');
    if (!isValid) {
      input.classList.add('is-invalid');
      if (errorEl) {
        errorEl.textContent = errorMsg;
        errorEl.style.display = 'block';
      }
    } else {
      input.classList.remove('is-invalid');
      if (errorEl) {
        errorEl.style.display = 'none';
      }
    }
    return isValid;
  }

  if (form) {
    // Realtime cleanup on input
    [nameInput, phoneInput, emailInput].forEach(inp => {
      if (inp) {
        inp.addEventListener('input', () => {
          if (inp.classList.contains('is-invalid')) {
            inp.classList.remove('is-invalid');
            const err = inp.parentElement.querySelector('.form-error-msg');
            if (err) err.style.display = 'none';
          }
        });
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isFormValid = true;

      // Validate name
      if (!nameInput.value || nameInput.value.trim().length < 2) {
        setFieldState(nameInput, false, 'Please enter your full name.');
        isFormValid = false;
      } else {
        setFieldState(nameInput, true);
      }

      // Validate phone
      if (!phoneInput.value || !validatePhone(phoneInput.value)) {
        setFieldState(phoneInput, false, 'Please enter a valid phone or WhatsApp number.');
        isFormValid = false;
      } else {
        setFieldState(phoneInput, true);
      }

      // Validate email
      if (!emailInput.value || !validateEmail(emailInput.value)) {
        setFieldState(emailInput, false, 'Please enter a valid email address.');
        isFormValid = false;
      } else {
        setFieldState(emailInput, true);
      }

      if (!isFormValid) {
        return;
      }

      const submissionData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        preferredMode: batchSelect ? batchSelect.value : 'Flexible',
        message: messageInput ? messageInput.value.trim() : '',
        course: 'MERN Full Stack Development'
      };

      try {
        await submitLead(submissionData);
        if (modalNameSpan) modalNameSpan.textContent = submissionData.name;
        openModal(confirmationModal);
        form.reset();
      } catch (err) {
        alert('We could not submit your enquiry. Please try again or contact us on WhatsApp.');
      }
    });
  }

  async function submitLead(data) {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        source: window.location.href,
        submittedAt: new Date().toISOString(),
        variant: 'course-info'
      })
    });

    if (!response.ok) throw new Error('Lead submission failed');
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn && confirmationModal) {
    modalCloseBtn.addEventListener('click', () => closeModal(confirmationModal));
  }
  if (modalDismissBtn && confirmationModal) {
    modalDismissBtn.addEventListener('click', () => closeModal(confirmationModal));
  }
  if (confirmationModal) {
    confirmationModal.addEventListener('click', (e) => {
      if (e.target === confirmationModal) {
        closeModal(confirmationModal);
      }
    });
  }

  const learnerAchievements = [
    ['Vikash', 'SAP FICO'], ['Sivaguru', 'AI'], ['Siri', 'SAP PP'], ['Senthil Kumar', 'SAP SD'],
    ['Sahana', 'Java'], ['Sahana', 'Data Analytics'], ['Ramesh', 'SAP PP'], ['Pradeep Kumar', 'SQL'],
    ['Prabhu', 'SAP Ariba'], ['Nirmal', 'Python'], ['Nikitha', 'Java'], ['Naveen Kumar', 'Java'],
    ['Mohan Kumar', 'Java Full Stack'], ['Madhan', 'SAP ERP'], ['Kavitha', 'SAP FICO'], ['Karthick', 'Java'],
    ['Aishwarya', 'Data Analytics'], ['Anupama', 'SAP FICO']
  ];
  const feedbackVideos = [1, 2, 3, 4, 5];
  const companyLogos = [
    ['Accenture', '/assets/sap-fico-page/accenture.png'], ['IBM', '/assets/sap-fico-page/ibm.png'],
    ['Deloitte', '/assets/sap-fico-page/deloitte.png'], ['TCS', '/assets/sap-fico-page/tcs.png'],
    ['Infosys', '/assets/sap-fico-page/infosys.png'], ['Capgemini', '/assets/sap-fico-page/capgemini.png'],
    ['Cognizant', '/assets/sap-fico-page/cognizant.png'], ['Wipro', '/assets/sap-fico-page/wipro.png'],
    ['HCLTech', '/assets/sap-fico-page/hcltech.png'], ['Tech Mahindra', '/assets/sap-fico-page/techmahindra.png'],
    ['EY', '/assets/sap-fico-page/ey.png'], ['KPMG', '/assets/sap-fico-page/kpmg.png']
  ];
  const reviews = [
    ['Pavitra Angadi', 'SAP FICO Learner', 'PA', 'I had a great learning experience at SV Curiotech. The training was well-organized, easy to understand, and the practical sessions helped me build confidence.', 'https://www.google.com/maps/contrib/115759079452915568289/reviews?hl=en-IN'],
    ['SWATHI L', 'SAP MM Learner', 'SL', 'The trainer explained every topic clearly and made the sessions easy to understand. The practical examples and hands-on training helped me build confidence.', 'https://www.google.com/maps/contrib/107980138603627206347/reviews?hl=en-IN'],
    ['TILAK. G', 'SAP SD Learner', 'TG', 'Excellent training with practical sessions and expert guidance. The placement support was also very helpful.', 'https://www.google.com/maps/contrib/105445021689102302475/reviews?hl=en-IN'],
    ['Bhoomika Talawar', 'SAP FICO Learner', 'BT', 'The online classes were interactive and easy to follow. The trainer explained complex topics in a simple way and shared valuable implementation knowledge.', 'https://www.google.com/maps/contrib/115935774229059247379/reviews?hl=en-IN'],
    ['T Prakash', 'SAP FICO Learner', 'TP', 'The training was excellent. The hands-on practice and interview preparation were very helpful.', 'https://www.google.com/maps/contrib/107768973089593535255/reviews?hl=en-IN'],
    ['Naveen Kumar', 'SAP MM Learner', 'NK', 'The classes were organized, practical, and focused on real-world business processes. The trainer also shared useful interview tips and career guidance.', 'https://www.google.com/maps/contrib/108877648823742124687/reviews?hl=en-IN']
  ];

  document.getElementById('achievementScroller').innerHTML = learnerAchievements.map(([name, course], index) => `
    <figure class="achievement-card"><img src="/assets/successfactors-placement/learner-achievement-${String(index + 1).padStart(2, '0')}.jpg" alt="${name} celebrating a ${course} learner milestone" loading="lazy"><figcaption><strong>${name}</strong><span>${course}</span></figcaption></figure>`).join('');
  document.getElementById('studentFeedbackGrid').innerHTML = feedbackVideos.map((number) => `
    <article class="student-feedback-card"><video controls preload="metadata" playsinline aria-label="Student feedback video ${number}"><source src="/assets/student-feedback/student-feedback-${String(number).padStart(2, '0')}.mp4" type="video/mp4">Your browser does not support the video tag.</video><span>Learner story ${String(number).padStart(2, '0')}</span></article>`).join('');
  document.getElementById('placementReviewGrid').innerHTML = reviews.map(([name, course, initials, quote, url]) => `
    <article class="placement-review-card"><div class="review-stars" aria-label="Five stars">★★★★★</div><p>“${quote}”</p><div><span>${initials}</span><section><strong>${name}</strong><small>${course} · Google review</small><a href="${url}" target="_blank" rel="noopener noreferrer">View Google review ↗</a></section></div></article>`).join('');
  document.getElementById('placementCompanyGrid').innerHTML = companyLogos.map(([name, src]) => `
    <figure class="placement-company-card"><img src="${src}" alt="${name} logo" loading="lazy"><figcaption>${name}</figcaption></figure>`).join('');

  // --- 9. Expandable "Course at a Glance" Specifications ---
  const toggleGlanceBtn = document.getElementById('toggleGlanceBtn');
  const glanceExpandableWrap = document.getElementById('glanceExpandableWrap');
  if (toggleGlanceBtn && glanceExpandableWrap) {
    toggleGlanceBtn.addEventListener('click', () => {
      const isExpanded = toggleGlanceBtn.getAttribute('aria-expanded') === 'true';
      const btnText = toggleGlanceBtn.querySelector('.btn-text');
      if (isExpanded) {
        glanceExpandableWrap.style.maxHeight = '0px';
        toggleGlanceBtn.setAttribute('aria-expanded', 'false');
        if (btnText) btnText.textContent = 'Explore Full Course Specifications';
      } else {
        glanceExpandableWrap.style.maxHeight = glanceExpandableWrap.scrollHeight + 'px';
        toggleGlanceBtn.setAttribute('aria-expanded', 'true');
        if (btnText) btnText.textContent = 'Show Less Specifications';
      }
    });
  }

  // --- 10. Expandable Placement Process Details ---
  const togglePlacementBtn = document.getElementById('togglePlacementBtn');
  const placementExpandableWrap = document.getElementById('placementExpandableWrap');
  if (togglePlacementBtn && placementExpandableWrap) {
    togglePlacementBtn.addEventListener('click', () => {
      const isExpanded = togglePlacementBtn.getAttribute('aria-expanded') === 'true';
      const btnText = togglePlacementBtn.querySelector('.btn-text');
      if (isExpanded) {
        placementExpandableWrap.style.maxHeight = '0px';
        togglePlacementBtn.setAttribute('aria-expanded', 'false');
        if (btnText) btnText.textContent = 'View Detailed Placement Process';
      } else {
        placementExpandableWrap.style.maxHeight = placementExpandableWrap.scrollHeight + 'px';
        togglePlacementBtn.setAttribute('aria-expanded', 'true');
        if (btnText) btnText.textContent = 'Show Less Details';
      }
    });
  }

  // --- 11. Subtle Scroll Entrance Animations ---
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-revealed');
    });
  }

  // Floating contact actions (Phone & WhatsApp) use native href tel: and wa.me links
});

