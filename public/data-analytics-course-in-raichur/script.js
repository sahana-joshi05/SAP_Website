/* =========================================================
   SV CURIO TECH - WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuButton.textContent = "×";
        } else {
            menuButton.textContent = "☰";
        }

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


/* ================= FAQ ================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        const isActive = currentItem.classList.contains("active");


        document.querySelectorAll(".faq-item").forEach(function (item) {

            item.classList.remove("active");

            const answer = item.querySelector(".faq-answer");

            if (answer) {
                answer.style.maxHeight = null;
            }

        });


        if (!isActive) {

            currentItem.classList.add("active");

            const answer = currentItem.querySelector(".faq-answer");

            if (answer) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

        }

    });

});


/* ================= ENQUIRY FORM ================= */

const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();


        if (!enquiryForm.checkValidity()) {

            enquiryForm.reportValidity();

            return;

        }


        formMessage.textContent =
            "Thank you! Your enquiry has been submitted.";

        formMessage.style.color = "#16834d";


        enquiryForm.reset();

    });

}


/* ================= PHONE NUMBER ================= */

const phoneInput = document.getElementById("phone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "").slice(0, 10);

    });

}


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= NAVBAR SHADOW ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(16, 26, 48, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
/* =========================================================
   COURSE DETAILS
========================================================= */

const courseDetails = {

    dataAnalytics: {

        category: "DATA & ANALYTICS",

        title: "Data Analytics",

        intro:
            "Build practical data analytics skills using Excel, SQL, Power BI and Python. The course focuses on understanding, analysing and presenting real-world business data.",

        who: [
            "College students",
            "Fresh graduates",
            "Working professionals",
            "Job seekers",
            "Career changers",
            "Commerce and management graduates",
            "Engineering graduates",
            "Anyone interested in data and reporting"
        ],

        why: [
            "Learn practical tools used in data analytics",
            "Suitable for beginners",
            "Develop job-oriented analytical skills",
            "Work on practical business projects",
            "Build confidence in data reporting and visualisation"
        ],

        learn: [
            "Excel for Data Analysis",
            "SQL and database concepts",
            "Power BI and dashboards",
            "Python for Data Analytics",
            "Data visualisation",
            "Business reporting"
        ],

        future: [
            "Data Analyst",
            "Business Analyst",
            "Reporting Analyst",
            "MIS Analyst",
            "Business Intelligence Analyst",
            "Junior Data Analyst",
            "Power BI Developer",
            "Data Reporting Specialist"
        ]

    },


    sapFico: {

        category: "SAP",

        title: "SAP FICO",

        intro:
            "Learn the fundamentals of SAP Financial Accounting and Controlling and understand how financial processes are managed in an SAP environment.",

        who: [
            "Commerce graduates",
            "Management students",
            "Finance professionals",
            "Fresh graduates",
            "Working professionals",
            "Career changers"
        ],

        why: [
            "Understand business finance processes",
            "Learn SAP-based financial operations",
            "Develop enterprise software skills",
            "Suitable for learners interested in finance and technology"
        ],

        learn: [
            "Financial Accounting concepts",
            "Controlling concepts",
            "Business processes",
            "SAP FICO fundamentals"
        ],

        future: [
            "SAP FICO Consultant",
            "SAP Finance Associate",
            "SAP Functional Consultant",
            "Finance Technology Roles"
        ]

    },


    sapMm: {

        category: "SAP",

        title: "SAP MM",

        intro:
            "Understand material management processes and how organisations manage procurement, inventory and materials using SAP.",

        who: [
            "Fresh graduates",
            "Engineering graduates",
            "Commerce graduates",
            "Working professionals",
            "Career changers"
        ],

        why: [
            "Understand procurement processes",
            "Learn enterprise material management",
            "Develop SAP functional knowledge",
            "Gain understanding of real-world business workflows"
        ],

        learn: [
            "Procurement processes",
            "Inventory management",
            "Material management",
            "SAP MM fundamentals"
        ],

        future: [
            "SAP MM Consultant",
            "SAP Functional Associate",
            "Procurement-related SAP Roles",
            "Material Management Roles"
        ]

    },


    sapSd: {

        category: "SAP",

        title: "SAP SD",

        intro:
            "Learn the fundamentals of sales and distribution processes and understand how businesses manage customer-facing operations using SAP.",

        who: [
            "Fresh graduates",
            "Business students",
            "Commerce graduates",
            "Working professionals",
            "Career changers"
        ],

        why: [
            "Understand sales business processes",
            "Learn SAP functional concepts",
            "Develop enterprise software knowledge",
            "Gain practical understanding of business workflows"
        ],

        learn: [
            "Sales processes",
            "Distribution concepts",
            "Customer-related processes",
            "SAP SD fundamentals"
        ],

        future: [
            "SAP SD Consultant",
            "SAP Functional Associate",
            "Sales and Distribution SAP Roles",
            "Enterprise Application Roles"
        ]

    },


    sapAbap: {

        category: "SAP DEVELOPMENT",

        title: "SAP ABAP",

        intro:
            "Learn programming fundamentals used for developing and customising applications within the SAP environment.",

        who: [
            "Engineering graduates",
            "Computer science students",
            "Programming learners",
            "Fresh graduates",
            "Working professionals"
        ],

        why: [
            "Build SAP development knowledge",
            "Learn enterprise programming concepts",
            "Understand SAP application development",
            "Suitable for learners interested in coding and enterprise technology"
        ],

        learn: [
            "ABAP fundamentals",
            "Programming concepts",
            "SAP development concepts",
            "Application customisation"
        ],

        future: [
            "SAP ABAP Developer",
            "SAP Technical Consultant",
            "SAP Development Associate",
            "Enterprise Application Developer"
        ]

    },


    successFactors: {

        category: "SAP",

        title: "SAP SuccessFactors",

        intro:
            "Explore SAP's cloud-based human experience and talent management solutions and understand their role in modern organisations.",

        who: [
            "Fresh graduates",
            "HR professionals",
            "Management students",
            "Working professionals",
            "Career changers"
        ],

        why: [
            "Understand modern HR technology",
            "Learn cloud-based enterprise solutions",
            "Develop SAP ecosystem knowledge",
            "Explore technology-driven HR processes"
        ],

        learn: [
            "SuccessFactors fundamentals",
            "Cloud HR concepts",
            "Talent management concepts",
            "SAP HXM fundamentals"
        ],

        future: [
            "SAP SuccessFactors Consultant",
            "SAP HXM Associate",
            "HR Technology Roles",
            "SAP Functional Roles"
        ]

    }

};


/* OPEN COURSE */

function openCourse(courseName) {

    const course = courseDetails[courseName];

    if (!course) {
        return;
    }


    document.getElementById("courseCategory").textContent =
        course.category;


    document.getElementById("courseTitle").textContent =
        course.title;


    document.getElementById("courseIntro").textContent =
        course.intro;


    document.getElementById("courseWho").innerHTML =
        course.who
        .map(item => `<li>${item}</li>`)
        .join("");


    document.getElementById("courseWhy").innerHTML =
        course.why
        .map(item => `<li>${item}</li>`)
        .join("");


    document.getElementById("courseLearn").innerHTML =
        course.learn
        .map(item => `<li>${item}</li>`)
        .join("");


    document.getElementById("courseFuture").innerHTML =
        course.future
        .map(item => `<li>${item}</li>`)
        .join("");


    document.getElementById("courseModal")
        .classList.add("active");


    document.body.style.overflow = "hidden";

}


/* CLOSE COURSE */

function closeCourse() {

    document.getElementById("courseModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}


/* CLOSE WHEN CLICKING OUTSIDE */

document.getElementById("courseModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closeCourse();
        }

    }
);


/* CLOSE WITH ESCAPE KEY */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeCourse();
        }

    }
);