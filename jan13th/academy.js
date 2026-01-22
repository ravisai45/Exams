
// const mainHeader = document.getElementById('mainHeader');
//     const menuToggle = document.getElementById('menuToggle');
//     const closeNav = document.getElementById('closeNav');
//     const sideNav = document.getElementById('sideNav');
//     const navOverlay = document.getElementById('navOverlay');
//     const servicesToggle = document.getElementById('servicesToggle');
//     const servicesDropdown = document.getElementById('servicesDropdown');

//     // Header scroll animation
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 50) {
//             mainHeader.classList.add('header-scrolled');
//         } else {
//             mainHeader.classList.remove('header-scrolled');
//         }
//     });

//     // Toggle Side Nav
//     const toggleNav = () => {
//         sideNav.classList.toggle('active');
//         navOverlay.classList.toggle('active');
//     };

//     menuToggle.addEventListener('click', toggleNav);
//     closeNav.addEventListener('click', toggleNav);
//     navOverlay.addEventListener('click', toggleNav);

//     document.getElementById("servicesToggle").addEventListener("click", (e) => {
//     e.stopPropagation();
//     document.getElementById("servicesDropdown").classList.toggle("open");
// });
//     // Toggle Services Dropdown
//     servicesToggle.addEventListener('click', (e) => {
//         e.preventDefault();
//         servicesDropdown.classList.toggle('open');
//         servicesToggle.querySelector('i').classList.toggle('fa-rotate-180');
//     });


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






const academyData = [
  {
    title: "Industry-Ready Tech <span>Training Programs</span>",
    desc: "Learn cutting-edge technologies through hands-on training, real-time projects, and expert mentorship designed for students and professionals.",
    img: "./academy1.jpg"
  },
  {
    title: "Learn by <span>Building Real Projects</span>",
    desc: "Work on live industry projects that help you gain practical exposure and build a strong professional portfolio.",
    img: "./academy4.jpg"
  },
  {
    title: "Mentorship That <span>Accelerates Careers</span>",
    desc: "Get guided by industry experts who help you master skills, crack interviews, and become job-ready.",
    img: "./academy3.jpg"
  }
];

let index = 0;
const titleEl = document.getElementById("academyTitle");
const descEl = document.getElementById("academyDesc");
const imgEl = document.getElementById("academyImage");

setInterval(() => {
  index = (index + 1) % academyData.length;

  titleEl.style.opacity = 0;
  descEl.style.opacity = 0;
  imgEl.style.opacity = 0;

  setTimeout(() => {
    titleEl.innerHTML = academyData[index].title;
    descEl.innerText = academyData[index].desc;
    imgEl.src = academyData[index].img;

    titleEl.style.opacity = 1;
    descEl.style.opacity = 1;
    imgEl.style.opacity = 1;
  }, 500);
}, 3500);




const nodes = document.querySelectorAll(".skill-node");

document.addEventListener("mousemove", e => {
  nodes.forEach(node => {
    const rect = node.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < 150) {
      node.style.transform += " scale(1.15)";
    } else {
      node.style.transform = node.style.transform.replace(" scale(1.15)", "");
    }
  });
});


const stages = document.querySelectorAll(".engine-stage");
let current = 0;

setInterval(() => {
  stages.forEach(s => s.classList.remove("active"));
  stages[current].classList.add("active");
  current = (current + 1) % stages.length;
}, 2200);




const gates = document.querySelectorAll(".gate");
let currentGate = 0;

setInterval(() => {
  gates.forEach((g, i) => {
    if (i <= currentGate) {
      g.classList.add("active");
      g.querySelector(".gate-status").innerText = "Unlocked";
    }
  });

  if (currentGate < gates.length - 1) {
    currentGate++;
  }
}, 2200);




const tracks = document.querySelectorAll(".program-track");

const revealPrograms = () => {
  const trigger = window.innerHeight * 0.85;
  tracks.forEach(track => {
    if (track.getBoundingClientRect().top < trigger) {
      track.style.opacity = "1";
      track.style.transform = "translateY(0)";
    }
  });
};

tracks.forEach(t => {
  t.style.opacity = "0";
  t.style.transform = "translateY(40px)";
  t.style.transition = "0.8s ease";
});

window.addEventListener("scroll", revealPrograms);
revealPrograms();



const expBlocks = document.querySelectorAll(".experience-block");

function revealExperience() {
  const trigger = window.innerHeight * 0.85;
  let delay = 0;

  expBlocks.forEach(block => {
    if (block.getBoundingClientRect().top < trigger && !block.classList.contains("show")) {
      setTimeout(() => {
        block.classList.add("show");
        block.style.opacity = "1";
        block.style.transform = "translateY(0)";
      }, delay);
      delay += 120;
    }
  });
}

expBlocks.forEach(block => {
  block.style.opacity = "0";
  block.style.transform = "translateY(40px)";
  block.style.transition = "0.8s ease";
});

window.addEventListener("scroll", revealExperience);
revealExperience();




const stations = document.querySelectorAll(".station");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.4 }
);

stations.forEach(station => observer.observe(station));

