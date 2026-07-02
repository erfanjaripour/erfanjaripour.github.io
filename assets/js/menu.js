
document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (!button || !menu) return;

    const openMenu = () => {
        menu.classList.remove("no-transition");
        menu.classList.add("open");
        button.classList.add("open");
        document.body.classList.add("menu-open");
        button.setAttribute("aria-expanded", "true");
    };

    const closeMenu = (animate = true) => {

        if (!animate) {
            menu.classList.add("no-transition");
        }

        menu.classList.remove("open");
        button.classList.remove("open");
        document.body.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");

        setTimeout(() => {
            menu.classList.remove("no-transition");
        }, 0);
    };

    button.addEventListener("click", (e) => {
        e.stopPropagation();

        const isOpen = menu.classList.contains("open");

        if (isOpen) closeMenu(true);
        else openMenu();
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu(false); /* NO ANIMATION HERE */
        });
    });

    document.addEventListener("click", () => {
        closeMenu(true);
    });

    menu.addEventListener("click", e => e.stopPropagation());
});