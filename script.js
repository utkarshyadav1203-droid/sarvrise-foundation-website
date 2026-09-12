/* =========================================================
   SARVRISE FOUNDATION
   WEBSITE INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       PAGE ID FOR VISUAL THEMING
    =============================== */
    const pageName = (window.location.pathname.split("/").pop() || "index.html")
        .replace(".html", "") || "index";
    document.body.classList.add("page-" + pageName);

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuButton = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

            });

        });
    }


    /* ===============================
       SCROLL REVEAL ANIMATION
    =============================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .card, .project-card, .program-row, .form-card, .donation-card"
        );

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* ===============================
       HEADER SHADOW ON SCROLL
    =============================== */

    const header =
        document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 40) {

            header.style.boxShadow =
                "0 8px 30px rgba(23,59,56,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    });


    /* ===============================
       SMOOTH ANCHOR SCROLL
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});


/* =========================================================
   DEMO FORM
   ========================================================= */

function demoSubmit(event) {

    event.preventDefault();

    const message =
        document.getElementById("formMessage");

    if (message) {

        message.textContent =
            "Thank you! Your message has been received. Connect this form to your email/backend before publishing.";

        message.style.color =
            "#d66b4b";

    }

    event.target.reset();

}
/* =========================================
   SARVRISE FOUNDATION WHATSAPP BUTTON
   ========================================= */

const whatsappNumber = "916395059847";

const whatsappMessage = encodeURIComponent(
    "Hello Sarvrise Foundation, I would like to know more about your programs and how I can contribute."
);

const whatsappButton = document.createElement("a");

whatsappButton.href =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";

whatsappButton.className = "whatsapp-float";

whatsappButton.innerHTML = `
    <span class="whatsapp-icon">◉</span>
    <span class="whatsapp-text">Chat with us</span>
`;

document.body.appendChild(whatsappButton);