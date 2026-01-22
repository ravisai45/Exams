const mainHeader = document.getElementById('mainHeader');
const menuToggle = document.getElementById('menuToggle');
const closeNav = document.getElementById('closeNav');
const sideNav = document.getElementById('sideNav');
const navOverlay = document.getElementById('navOverlay');
const servicesToggle = document.getElementById('servicesToggle');
const servicesDropdown = document.getElementById('servicesDropdown');

/* HEADER SCROLL */
window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('header-scrolled', window.scrollY > 50);
});

/* SIDE NAV TOGGLE */
const toggleNav = () => {
    sideNav.classList.toggle('active');
    navOverlay.classList.toggle('active');
};

menuToggle.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', toggleNav);

/* SERVICES DROPDOWN */
servicesToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    servicesDropdown.classList.toggle('open');
    servicesToggle.classList.toggle('fa-rotate-180');
});




    // simple hover glow for role cards
document.querySelectorAll(".role-card").forEach(card=>{
  card.addEventListener("mouseenter",()=>{
    card.style.boxShadow="0 0 40px rgba(106,255,158,.4)";
  });
  card.addEventListener("mouseleave",()=>{
    card.style.boxShadow="none";
  });
});




document.querySelector(".apply-form").addEventListener("submit", e => {
  e.preventDefault();
  const btn = document.querySelector(".apply-btn");
  btn.innerText = "Submitting...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    btn.innerText = "Application Submitted ✓";
    btn.style.background = "#4caf50";
  }, 1500);
});



/* FILTER */
const filterBtns = document.querySelectorAll(".filter-btn");
const jobCards = document.querySelectorAll(".job-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    jobCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* SCROLL REVEAL */
const revealJobs = document.querySelectorAll(".reveal-job");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealJobs.forEach(job => {
    if (job.getBoundingClientRect().top < trigger) {
      job.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();