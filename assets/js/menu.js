document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (!button || !menu) return;

    let scrollPosition = 0;


    /* ---------- Open Menu ---------- */

    const openMenu = () => {

        scrollPosition = window.scrollY;

        menu.classList.remove("no-transition");
        menu.classList.add("open");

        button.classList.add("open");

        document.body.classList.add("menu-open");

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";

        button.setAttribute("aria-expanded", "true");
    };


    /* ---------- Close Menu ---------- */

    const closeMenu = (animate = true) => {

        if (!animate) {
            menu.classList.add("no-transition");
        }

        menu.classList.remove("open");
        button.classList.remove("open");

        document.body.classList.remove("menu-open");

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        window.scrollTo(0, scrollPosition);

        button.setAttribute("aria-expanded", "false");

        requestAnimationFrame(() => {
            menu.classList.remove("no-transition");
        });
    };


    /* ---------- Menu Toggle ---------- */

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        if (menu.classList.contains("open")) {
            closeMenu(true);
        } else {
            openMenu();
        }

    });


    /* ---------- Navigation Links ---------- */

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {

        const targetUrl = new URL(link.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        const samePage =
            targetUrl.pathname === currentUrl.pathname &&
            targetUrl.search === currentUrl.search &&
            targetUrl.hash === currentUrl.hash;

        if (samePage) {
            event.preventDefault();

            closeMenu(true);

            return;
        }

        /*
         * Different page:
         * Do nothing.
         * The browser navigates normally, and the old menu disappears
         * only when the new page is loaded.
         */
    });
});


    /* ---------- Outside Click ---------- */

    document.addEventListener("click", (event) => {

        if (!menu.classList.contains("open")) return;

        if (
            event.target.closest("#theme-toggle") ||
            event.target.closest(".theme-toggle")
        ) {
            return;
        }

        if (button.contains(event.target)) {
            return;
        }

        if (menu.contains(event.target)) {
            return;
        }

        closeMenu(true);

    });


    /* ---------- Prevent Menu Clicks From Closing ---------- */

    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });


    /* ---------- Home Logo While Menu Is Open ---------- */

    const logoLink = document.querySelector(".logo a");

    if (logoLink) {

        logoLink.addEventListener("click", (event) => {

            const isHomePage =
                window.location.pathname === "/" ||
                window.location.pathname === "";

            const isMenuOpen = menu.classList.contains("open");

            if (isHomePage && isMenuOpen) {
                event.preventDefault();
                closeMenu(true);
            }

        });

    }

});