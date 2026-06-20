const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  });
}

const profileImage = document.querySelector("[data-profile-image]");
const profileFrame = document.querySelector("[data-profile-frame]");

if (profileImage instanceof HTMLImageElement && profileFrame) {
  profileImage.addEventListener("load", () => {
    profileFrame.classList.add("has-image");
  });

  profileImage.addEventListener("error", () => {
    profileImage.classList.add("is-hidden");
    profileFrame.classList.remove("has-image");
  });
}

const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
