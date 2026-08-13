

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");

    });

}


/* ==============================
   CLOSE MOBILE MENU
================================ */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("toggle");

    });

});


/* ==============================
   SMOOTH SCROLL
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            const headerHeight =
                document.querySelector("header").offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }

    });

});


/* ==============================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==============================
   NAVBAR EFFECT ON SCROLL
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==============================
   PROJECT IMAGE PAUSE ON HOVER
================================ */

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

portfolioItems.forEach(item => {

    const slider =
        item.querySelector(".project-slider");

    if (!slider) return;

    item.addEventListener("mouseenter", () => {

        slider.querySelectorAll("img").forEach(img => {

            img.style.animationPlayState = "paused";

        });

    });


    item.addEventListener("mouseleave", () => {

        slider.querySelectorAll("img").forEach(img => {

            img.style.animationPlayState = "running";

        });

    });

});


/* ==============================
   DYNAMIC COPYRIGHT YEAR
================================ */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} Yarakal Lingaswamy. All rights reserved.`;

}


/* ==============================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});
