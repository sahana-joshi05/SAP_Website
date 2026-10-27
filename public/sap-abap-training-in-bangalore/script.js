/**
 * SV CurioTech — SAP ABAP Training in Bangalore
 * Interactive Controllers: Sub-Tabs, 7-Module Spotlight, Persona Switcher,
 * FAQ Accordion, Mobile Drawer, and Dual-Action Enquiry Form.
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. Current Footer Year
    // =========================================================================
    const yearElem = document.getElementById('currentYear');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    // =========================================================================
    // 2. Sticky Header Elevation on Scroll
    // =========================================================================
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 25) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // =========================================================================
    // 3. Scroll Reveal Animation (IntersectionObserver)
    // =========================================================================
    const revealElements = document.querySelectorAll('.reveal-scroll');
    if (revealElements.length > 0) {
        if ('IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -30px 0px'
            });

            revealElements.forEach(elem => revealObserver.observe(elem));
        } else {
            revealElements.forEach(elem => elem.classList.add('revealed'));
        }
    }

    // =========================================================================
    // 4. Smooth Anchor Focus for Enquiry Form
    // =========================================================================
    const enquireButtons = document.querySelectorAll('a[href="#enquiry"]');
    const nameInputField = document.getElementById('contact-name');

    enquireButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = document.getElementById('enquiry');
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    if (nameInputField) nameInputField.focus();
                }, 500);
            }
        });
    });

    // =========================================================================
    // 5. About Section Sub-Tabs (Architecture, Syllabus, Practical Lab)
    // =========================================================================
    const aboutTabButtons = document.querySelectorAll('.about-tab-btn');
    const aboutTabPanes = {
        'arch': document.getElementById('pane-arch'),
        'curriculum': document.getElementById('course'),
        'lab': document.getElementById('pane-lab')
    };

    const activateAboutTab = (targetKey) => {
        aboutTabButtons.forEach((button) => {
            const isActive = button.getAttribute('data-tab') === targetKey;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-selected', String(isActive));
        });

        Object.entries(aboutTabPanes).forEach(([key, pane]) => {
            if (pane) pane.classList.toggle('active', key === targetKey);
        });
    };

    aboutTabButtons.forEach((btn) => {
        btn.addEventListener('click', () => activateAboutTab(btn.getAttribute('data-tab')));
    });

    document.querySelectorAll('a[href="#course"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            activateAboutTab('curriculum');
            document.getElementById('course')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', '#course');
        });
    });

    if (window.location.hash === '#course') {
        activateAboutTab('curriculum');
    }

    // =========================================================================
    // 6. 7-Module Curriculum Navigator & Spotlight
    // =========================================================================
    const moduleData = {
        1: {
            idx: '01',
            badge: 'Enterprise Foundations',
            title: 'Introduction to SAP ERP & ABAP',
            desc: 'Understand enterprise system architecture, navigation in the SAP GUI, and how ABAP development tools fit within SAP S/4HANA.',
            topics: [
                'An introduction to SAP ERP and SAP S/4HANA architecture',
                'Introduction to ABAP development tools and Eclipse ADT',
                'SAP system layers and concepts of enterprise development',
                'Navigation, transaction execution, and workspace customization'
            ],
            tcodes: ['SE80', 'SE38', 'ADT']
        },
        2: {
            idx: '02',
            badge: 'Core Programming',
            title: 'Fundamentals of ABAP Programming',
            desc: 'Master foundational syntax, data types, control flow statements, and data processing using internal tables and work areas.',
            topics: [
                'Data types, elementary variables, and constants',
                'Operators, expressions, and arithmetic operations',
                'IF condition branching, CASE statements, and loops',
                'Internal tables, work areas, and table operations (APPEND, READ, MODIFY)',
                'Basics of modularization techniques and structured logic'
            ],
            tcodes: ['SE38', 'SE24', 'SE37']
        },
        3: {
            idx: '03',
            badge: 'Data Modeling',
            title: 'SAP ABAP Data Dictionary (SE11)',
            desc: 'Create, model, and maintain enterprise database structures, relations, lock objects, and search helps.',
            topics: [
                'Domains and data elements (Technical & semantic layers)',
                'Transparent tables, append structures, and database structures',
                'Database views, projection views, and elementary search helps',
                'Lock objects (Enqueue & Dequeue) and their enterprise significance',
                'Foreign key relationships and check tables'
            ],
            tcodes: ['SE11', 'SE14', 'SE16N']
        },
        4: {
            idx: '04',
            badge: 'Data Retrieval & SQL',
            title: 'Data Processing & Reporting',
            desc: 'Extract, aggregate, and display enterprise data using Open SQL, classical selection screens, and modern ALV grid reports.',
            topics: [
                'Open SQL querying (SELECT, JOIN, FOR ALL ENTRIES, AGGREGATES)',
                'Classical reporting, selection screens, parameters, and select-options',
                'Interactive reports with drill-down line-selection handling',
                'Introduction to ALV (ABAP List Viewer) grid displays',
                'Message classes and runtime error handling'
            ],
            tcodes: ['SE38', 'SE93', 'SE91']
        },
        5: {
            idx: '05',
            badge: 'Enterprise Architecture',
            title: 'Modularization & Object-Oriented ABAP',
            desc: 'Organize enterprise codebases for scale using function modules, subroutines, object-oriented classes, interfaces, and BAPIs.',
            topics: [
                'Subroutines, include programs, and function pools (SE37)',
                'Function modules and Business Application Programming Interfaces (BAPIs)',
                'Object-Oriented ABAP (Classes, visibility sections, methods, inheritance)',
                'Interfaces, polymorphism, and class-based exceptions',
                'Design patterns and modular architecture principles'
            ],
            tcodes: ['SE24', 'SE37', 'BAPI']
        },
        6: {
            idx: '06',
            badge: 'Diagnostics & Troubleshooting',
            title: 'ABAP Debugging & Quality Assurance',
            desc: 'Gain code-level troubleshooting mastery with the new ABAP Debugger, runtime dump analysis (ST22), and SQL trace inspection.',
            topics: [
                'New ABAP Debugger: Dynamic breakpoints, watchpoints, and step-through execution',
                'Dump analysis with transaction ST22 and error mitigation',
                'Runtime analysis (SAT) and performance trace (ST05)',
                'Code Inspector and ABAP Test Cockpit (ATC) guidelines',
                'Hands-on troubleshooting of real-world enterprise bugs'
            ],
            tcodes: ['ST22', 'ST05', 'SAT', 'ATC']
        },
        7: {
            idx: '07',
            badge: 'Modern SAP S/4HANA Core',
            title: 'Modern ABAP & S/4HANA Concepts',
            desc: 'Stay ahead in the modern SAP landscape with S/4HANA architecture, Core Data Services (CDS), enhancement frameworks, and modern RESTful programming.',
            topics: [
                'S/4HANA architecture differences and code remediation requirements',
                'Enhancement framework: Implicit/explicit enhancements, BAdIs, and customer exits',
                'Modern ABAP syntax (Expressions, constructor operators, inline declarations)',
                'Introduction to Core Data Services (CDS) views for in-memory modeling*',
                'Overview of ABAP RESTful Application Programming (RAP) model*'
            ],
            tcodes: ['ADT', 'SE18', 'SE19', 'RAP']
        }
    };

    const modSelectorTiles = document.querySelectorAll('#moduleSelectorList .mod-tile');
    const spotlightContainer = document.getElementById('moduleSpotlight');

    const updateSpotlight = (modNum) => {
        const data = moduleData[modNum];
        if (!data || !spotlightContainer) return;

        const topicListHtml = data.topics.map(t => `<li><i class="fa-solid fa-circle-check"></i> ${t}</li>`).join('');
        const tcodeListHtml = data.tcodes.map(tc => `<span>${tc}</span>`).join('');

        spotlightContainer.innerHTML = `
            <div class="spotlight-card-content">
                <div class="spotlight-tags">
                    <span class="mod-tag">MODULE ${data.idx}</span>
                    <span class="mod-cat">${data.badge}</span>
                </div>
                <h3 class="spotlight-mod-title">${data.title}</h3>
                <p class="spotlight-mod-desc">${data.desc}</p>
                <div class="spotlight-topics-section">
                    <h4>Key Curriculum Topics:</h4>
                    <ul class="spotlight-checklist">
                        ${topicListHtml}
                    </ul>
                </div>
                <div class="spotlight-footer">
                    <div class="tcode-row">
                        <span class="tcode-lbl">Primary SAP T-Codes:</span>
                        <div class="tcode-pills">
                            ${tcodeListHtml}
                        </div>
                    </div>
                    <a href="#enquiry" class="btn btn-spotlight-action">Enquire for Syllabus Details</a>
                </div>
            </div>
        `;
    };

    modSelectorTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            modSelectorTiles.forEach(t => t.classList.remove('active'));
            tile.classList.add('active');
            const modId = parseInt(tile.getAttribute('data-mod'), 10);
            updateSpotlight(modId);
        });
    });

    // =========================================================================
    // 7. Interactive Persona Switcher (Career Pathways)
    // =========================================================================
    const personaTabs = document.querySelectorAll('.persona-tab-btn');
    const personaPanels = {
        'fresher': document.getElementById('panel-fresher'),
        'developer': document.getElementById('panel-developer'),
        'consultant': document.getElementById('panel-consultant'),
        'changer': document.getElementById('panel-changer')
    };

    personaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const personaKey = tab.getAttribute('data-persona');

            personaTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            Object.values(personaPanels).forEach(panel => {
                if (panel) panel.classList.remove('active');
            });

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            if (personaPanels[personaKey]) {
                personaPanels[personaKey].classList.add('active');
            }
        });
    });

    // =========================================================================
    // 8. Accessible FAQ Accordion
    // =========================================================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const panel = item.querySelector('.faq-panel');

        if (btn && panel) {
            btn.addEventListener('click', () => {
                const isCurrentlyActive = item.classList.contains('active');

                // Close other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherBtn = otherItem.querySelector('.faq-btn');
                    const otherPanel = otherItem.querySelector('.faq-panel');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                    if (otherPanel) otherPanel.classList.remove('show');
                });

                // If not previously active, open it
                if (!isCurrentlyActive) {
                    item.classList.add('active');
                    btn.setAttribute('aria-expanded', 'true');
                    panel.classList.add('show');
                }
            });
        }
    });

    // =========================================================================
    // 9. Mobile Navigation Drawer
    // =========================================================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    const openDrawer = () => {
        if (mobileDrawer) mobileDrawer.classList.add('open');
        if (drawerOverlay) drawerOverlay.classList.add('open');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (drawerOverlay) drawerOverlay.classList.remove('open');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // =========================================================================
    // 10. Compact Enquiry Form (Exactly 4 Fields with Real Validation & Honest Submission)
    // =========================================================================
    const form = document.getElementById('mainEnquiryForm');
    const nameInput = document.getElementById('contact-name');
    const phoneInput = document.getElementById('contact-phone');
    const emailInput = document.getElementById('contact-email');
    const moduleSelect = document.getElementById('contact-module');
    const alertBox = document.getElementById('formAlertBox');
    const whatsappDirectBtn = document.getElementById('whatsappDirectBtn');

    const nameError = document.getElementById('contact-name-error');
    const phoneError = document.getElementById('contact-phone-error');
    const emailError = document.getElementById('contact-email-error');
    const moduleError = document.getElementById('contact-module-error');

    const validateForm = () => {
        let isValid = true;

        // Reset errors
        if (nameError) nameError.textContent = '';
        if (phoneError) phoneError.textContent = '';
        if (emailError) emailError.textContent = '';
        if (moduleError) moduleError.textContent = '';
        [nameInput, phoneInput, emailInput, moduleSelect].forEach(inp => {
            if (inp && inp.parentElement) inp.parentElement.classList.remove('has-error');
        });

        // Name validation (at least 2 characters)
        const nameVal = nameInput ? nameInput.value.trim() : '';
        if (nameVal.length < 2) {
            if (nameError) nameError.textContent = 'Please enter your full name (at least 2 letters).';
            if (nameInput && nameInput.parentElement) nameInput.parentElement.classList.add('has-error');
            isValid = false;
        }

        // Phone validation (at least 10 digits)
        const phoneVal = phoneInput ? phoneInput.value.trim().replace(/\D/g, '') : '';
        if (phoneVal.length < 10) {
            if (phoneError) phoneError.textContent = 'Please enter a valid 10-digit mobile number.';
            if (phoneInput && phoneInput.parentElement) phoneInput.parentElement.classList.add('has-error');
            isValid = false;
        }

        // Email validation
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal)) {
            if (emailError) emailError.textContent = 'Please provide a valid email address.';
            if (emailInput && emailInput.parentElement) emailInput.parentElement.classList.add('has-error');
            isValid = false;
        }

        // Module selection validation
        const moduleVal = moduleSelect ? moduleSelect.value : '';
        if (!moduleVal || moduleVal.trim() === '') {
            if (moduleError) moduleError.textContent = 'Please select your module of interest.';
            if (moduleSelect && moduleSelect.parentElement) moduleSelect.parentElement.classList.add('has-error');
            isValid = false;
        }

        return isValid;
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validateForm()) {
                if (alertBox) {
                    alertBox.className = 'feedback-alert error';
                    alertBox.textContent = 'Please check the highlighted fields above.';
                    alertBox.style.display = 'block';
                }
                return;
            }

            const nameVal = nameInput ? nameInput.value.trim() : '';
            const phoneVal = phoneInput ? phoneInput.value.trim() : '';
            const emailVal = emailInput ? emailInput.value.trim() : '';
            const moduleVal = moduleSelect ? moduleSelect.value : 'Complete SAP ABAP Course';

            // Construct email transmission link
            const subject = encodeURIComponent(`SAP ABAP Training Enquiry - ${nameVal}`);
            const body = encodeURIComponent(
                `Name: ${nameVal}\nPhone: ${phoneVal}\nEmail: ${emailVal}\nModule of Interest: ${moduleVal}\nLocation: Bangalore / Online`
            );
            const mailtoLink = `mailto:svcuriotech@gmail.com?subject=${subject}&body=${body}`;

            // Provide clear, honest submission feedback without fake database claims
            if (alertBox) {
                alertBox.className = 'feedback-alert success';
                alertBox.innerHTML = `
                    <strong>Enquiry Verified!</strong><br>
                    Thank you <em>${nameVal}</em>. Your enquiry for <strong>${moduleVal}</strong> has been prepared for dispatch to SV CurioTech coordinators (<strong>svcuriotech@gmail.com</strong>).
                    <br><br>
                    <a href="${mailtoLink}" class="btn btn-form-submit" style="display:inline-flex; padding:6px 14px; font-size:12px; margin-right:8px;">Open Email Client</a>
                    <span style="font-size:11px; color:#59655D;">(Note: Client-side validation active. To send automatically without user email client, an API endpoint like Formspree, EmailJS, or server backend should be configured.)</span>
                `;
                alertBox.style.display = 'block';
            }

            // Also open mailto trigger directly
            window.location.href = mailtoLink;
        });
    }

    // Direct WhatsApp send button (Real Transmission)
    if (whatsappDirectBtn) {
        whatsappDirectBtn.addEventListener('click', () => {
            const nameVal = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Prospective Student';
            const phoneVal = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : 'Not provided';
            const emailVal = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'Not provided';
            const moduleVal = moduleSelect && moduleSelect.value ? moduleSelect.value : 'Complete SAP ABAP Course';

            const formattedMsg = `Hi SV CurioTech,\n\nI am inquiring about SAP ABAP Training in Bangalore.\n- Name: ${nameVal}\n- Phone: ${phoneVal}\n- Email: ${emailVal}\n- Module of Interest: ${moduleVal}`;

            const encoded = encodeURIComponent(formattedMsg);
            window.open(`https://wa.me/916361702540?text=${encoded}`, '_blank');
        });
    }

    // =========================================================================
    // 11. End-of-page enquiry form
    // =========================================================================
    const finalForm = document.getElementById('finalEnquiryForm');
    const finalAlert = document.getElementById('finalFormAlert');

    if (finalForm) {
        finalForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const values = new FormData(finalForm);
            const name = String(values.get('name') || '').trim();
            const phone = String(values.get('phone') || '').replace(/\D/g, '');
            const email = String(values.get('email') || '').trim();
            const module = String(values.get('module') || '').trim();
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (name.length < 2 || phone.length < 10 || !validEmail || !module) {
                finalAlert.className = 'feedback-alert error';
                finalAlert.textContent = 'Please complete your name, valid phone number, email address, and learning preference.';
                finalAlert.style.display = 'block';
                return;
            }

            const subject = encodeURIComponent(`SAP ABAP Training Enquiry - ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nLearning preference: ${module}\nLocation: Bangalore / Online`);
            finalAlert.className = 'feedback-alert success';
            finalAlert.innerHTML = `Thank you, <strong>${name}</strong>. Your enquiry is ready to send to SV CurioTech. <a href="mailto:svcuriotech@gmail.com?subject=${subject}&body=${body}">Open your email client</a>.`;
            finalAlert.style.display = 'block';
        });
    }

});
