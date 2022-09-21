
let year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear; 

let header = document.querySelector("header");
let buttonNavigation = document.querySelector(".btn--mobile-nav");

buttonNavigation.addEventListener("click", () => {
    header.classList.toggle("nav-open");
})

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});


heroSection = document.querySelector(".section-hero");
// Sticky navigation
const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  } 
  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
},
 {
  // In the viewport
  root: null, 
  threshold: 0,
  rootMargin: "-80px"
  }
);
obs.observe(heroSection);

