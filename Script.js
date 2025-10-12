document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = link.getAttribute("data-selection");
            document.getElementById(sectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});