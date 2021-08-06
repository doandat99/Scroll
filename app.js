const date = document.querySelector("#date");
const newDate = new Date();
date.innerHTML = newDate.getFullYear();
//scroll navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const linkContainer = document.querySelector(".link-container");
const link = document.querySelector(".links");
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 100) {
    navbar.classList.add("fixed-nav");
    topLink.classList.add("show-link");
  } else {
    navbar.classList.remove("fixed-nav");
    topLink.classList.remove("show-link");
  }
});
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixednav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixednav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = 0;
  });
});
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", function () {
  const linksHeight = link.getBoundingClientRect().height;
  const containerHeight = linkContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});
