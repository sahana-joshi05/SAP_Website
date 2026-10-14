/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.toggle(
                "fa-bars",
                !isOpen
            );

            icon.classList.toggle(
                "fa-xmark",
                isOpen
            );

        }

    });


    /* Close mobile menu after clicking a link */

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.add("fa-bars");

                icon.classList.remove("fa-xmark");

            }

        });

    });

}


/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    if (!question || !answer) {
        return;
    }


    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("active");


        /* Close all FAQ items */

        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            const otherQuestion =
                otherItem.querySelector(".faq-question");


            if (otherAnswer) {
                otherAnswer.style.maxHeight = null;
            }


            if (otherQuestion) {

                otherQuestion.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        /* Open selected FAQ */

        if (!isOpen) {

            item.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================
   ENQUIRY FORM
   OPEN WHATSAPP
========================= */

const enquiryForm =
    document.getElementById("enquiryForm");


if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value
                .trim();


            const phone =
                document.getElementById("phone")
                .value
                .trim();


            const email =
                document.getElementById("email")
                .value
                .trim();


            const mode =
                document.getElementById("mode")
                .value;


            /* Required field validation */

            if (
                !name ||
                !phone ||
                !email ||
                !mode
            ) {

                alert(
                    "Please fill in all the required details."
                );

                return;
            }


            /* Phone validation */

            if (!/^[0-9]{10}$/.test(phone)) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );

                return;
            }


            /* WhatsApp message */

            const message =
                `Hello SV Curiotech,

I am interested in .NET Training in Kalaburagi.

Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Mode: ${mode}

I would like to know more about the course and book a demo class.`;


            const whatsappURL =
                "https://wa.me/916361702540?text=" +
                encodeURIComponent(message);


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            /* Reset form */

            enquiryForm.reset();

        }
    );

}


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}