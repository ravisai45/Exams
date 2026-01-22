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




const solutionData = [
  {
    title: "Turning <span>Complex Problems</span><br>into Smart Digital Solutions",
    desc: "Oppty Tech Hub delivers tailored technology solutions that simplify operations, enhance security, and drive growth."
  },
  {
    title: "Solutions Built for <span>Scalability & Security</span>",
    desc: "Our systems are designed to grow with your business while ensuring data protection and compliance."
  },
  {
    title: "Technology That <span>Optimizes Performance</span>",
    desc: "From IT infrastructure to AI automation, we help businesses operate smarter and faster."
  }
];

let sIndex = 0;
const titleEl = document.getElementById("solutionTitle");
const descEl = document.getElementById("solutionDesc");

setInterval(() => {
  sIndex = (sIndex + 1) % solutionData.length;
  titleEl.style.opacity = 0;
  descEl.style.opacity = 0;

  setTimeout(() => {
    titleEl.innerHTML = solutionData[sIndex].title;
    descEl.innerText = solutionData[sIndex].desc;
    titleEl.style.opacity = 1;
    descEl.style.opacity = 1;
  }, 500);
}, 3500);



const challenges = document.querySelectorAll(".challenge-list li");
const panels = document.querySelectorAll(".solution-panel");

let current = 0;

setInterval(() => {
  challenges[current].classList.remove("active");
  panels[current].classList.remove("active");

  current = (current + 1) % challenges.length;

  challenges[current].classList.add("active");
  panels[current].classList.add("active");
}, 3500);




const canvas = document.getElementById("intelMesh");
const ctx = canvas.getContext("2d");

let w, h, points = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 80; i++) {
  points.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#90ee90";

  points.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    points.forEach(q => {
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 120) {
        ctx.strokeStyle = `rgba(144,238,144,${1 - dist/120})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(draw);
}
draw();





const opptyLayers = document.querySelectorAll(".oppty-layer");

let index = 0;

function buildLayers() {
  if (index < opptyLayers.length) {
    opptyLayers[index].classList.add("active");
    index++;
    setTimeout(buildLayers, 600);
  }
}

const observer = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      buildLayers();
      observer.disconnect();
    }
  },
  { threshold: 0.4 }
);

observer.observe(document.querySelector(".oppty-difference"));




const wipeCards = document.querySelectorAll(".wipe-card");

const wipeObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 180);
        wipeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

wipeCards.forEach(card => wipeObserver.observe(card));




const section = document.querySelector(".solutions-data");
const radials = document.querySelectorAll(".radial");
const bars = document.querySelectorAll(".bar span");

let played = false;

const dataObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !played) {
    played = true;

    // Radial charts
    radials.forEach(radial => {
      const percent = radial.dataset.percent;
      const circle = radial.querySelectorAll("circle")[1];
      const offset = 327 - (327 * percent) / 100;
      circle.style.strokeDashoffset = offset;
    });

    // Bars
    bars.forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }
}, { threshold: 0.4 });

dataObserver.observe(section);

