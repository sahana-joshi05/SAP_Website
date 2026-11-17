/**
 * SV CurioTech - Data Analytics Course in Bangalore
 * Interactive Logic: Navigation, Marquee, FAQ Accordion & Transparent Enquiry Form
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link on mobile
    const navLinks = navMenu.querySelectorAll('.nav-link, .nav-cta-btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. FAQ Accordion Functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close other open FAQ items for a clean single-open accordion feel
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 3. Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      
      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });

  // 4. Placements Marquee: Enhanced Touch and Hover Support
  const marqueeTrack = document.getElementById('placementMarqueeTrack');
  const marqueeWrapper = document.getElementById('placementMarqueeWrapper');

  if (marqueeTrack && marqueeWrapper) {
    // Touch support for mobile: pause on touchstart, resume on touchend
    marqueeWrapper.addEventListener('touchstart', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    }, { passive: true });

    marqueeWrapper.addEventListener('touchend', () => {
      marqueeTrack.style.animationPlayState = 'running';
    }, { passive: true });
  }

  // 5. Enquiry Form Handler (No fake success messages, clean validation & direct counselor connection)
  const enquiryForm = document.getElementById('heroEnquiryForm');
  const formStatus = document.getElementById('formStatus');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();
      const emailAddress = document.getElementById('emailAddress').value.trim();

      // Clean validation
      if (!fullName || fullName.length < 2) {
        alert('Please enter your full name.');
        return;
      }

      const phoneClean = phoneNumber.replace(/[\s\-]/g, '');
      const phoneRegex = /^[0-9+]{10,15}$/;
      if (!phoneNumber || !phoneRegex.test(phoneClean)) {
        alert('Please enter a valid contact phone number (10 digits).');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailAddress || !emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Format WhatsApp pre-fill message for immediate 1-on-1 counselor response
      const counselorPhone = '916361702540';
      const encodedMsg = encodeURIComponent(
        `Hello SV CurioTech Team,\n\nI would like to enquire about the Data Analytics Course in Bangalore.\n\nMy Details:\n• Name: ${fullName}\n• Phone: ${phoneNumber}\n• Email: ${emailAddress}\n\nPlease share the syllabus breakdown, upcoming batch schedule, and counseling details.`
      );

      const whatsappUrl = `https://wa.me/${counselorPhone}?text=${encodedMsg}`;
      
      if (formStatus) {
        formStatus.className = 'form-status-alert info';
        formStatus.innerHTML = `<strong>Enquiry details prepared.</strong> Connecting you with SV CurioTech Admissions counselor via WhatsApp (+91 6361702540)...`;
      }

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);
    });
  }
});
