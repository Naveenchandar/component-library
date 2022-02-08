
const menuIcon = document.querySelector(".menu");
const closeSidebar = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () =>
    sidebar.classList.add("sidebar_toggle")
);

closeSidebar.addEventListener("click", () =>
    sidebar.classList.remove("sidebar_toggle")
);

const navbar = document.querySelector(".side-navbar");
const handleToggle = () => navbar.classList.toggle("side-navbar-width");