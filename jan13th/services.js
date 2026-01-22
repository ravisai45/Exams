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



const heroData = [
  {
    title: "Empowering Digital Innovation",
    desc: "We build smart, scalable, and secure digital solutions for modern businesses.",
    video: "./video-about.mp4",
    image: "assets/hero1.jpg"
  },
  {
    title: "Next-Gen Software Solutions",
    desc: "From web apps to enterprise systems, we deliver future-ready technology.",
    video: "",
    image: "./slider4.jpeg"
  },
  {
    title: "Transforming Ideas into Reality",
    desc: "We help startups and enterprises grow with cutting-edge digital solutions.",
    video: "",
    image: "./Hai-insta-img-05.jpg"
  }
];

let index = 0;

const titleEl = document.getElementById("heroTitle");
const descEl = document.getElementById("heroDesc");
const videoEl = document.getElementById("heroVideo");
const imageEl = document.getElementById("heroImage");

function changeHeroContent() {
  const data = heroData[index];

  titleEl.style.opacity = 0;
  descEl.style.opacity = 0;

  setTimeout(() => {
    titleEl.innerText = data.title;
    descEl.innerText = data.desc;

    if (data.video) {
      videoEl.src = data.video;
      videoEl.style.display = "block";
      imageEl.style.display = "none";
    } else {
      imageEl.src = data.image;
      imageEl.style.display = "block";
      videoEl.style.display = "none";
    }

    titleEl.style.opacity = 1;
    descEl.style.opacity = 1;
  }, 500);

  index = (index + 1) % heroData.length;
}

changeHeroContent();
setInterval(changeHeroContent, 5000);




const services = [
  {
    title: "IT Services",
    desc: "Boost your business with a robust IT infrastructure tailored for scalability and performance. Our advanced cybersecurity solutions safeguard your data, ensure compliance, and enable seamless operations with 24/7 expert support."
  },
  {
    title: "BPO",
    desc: "Optimize your business with expert outsourcing services. Reduce operational costs, improve efficiency, and scale faster with customer support and back-office management handled by professionals."
  },
  {
    title: "E-commerce",
    desc: "Launch powerful eCommerce platforms with secure payment gateways, SEO-driven visibility, responsive designs, and scalable solutions tailored to your growth goals."
  },
  {
    title: "Web Development",
    desc: "Transform your online presence with responsive, secure, SEO-optimized websites built to engage users and elevate your brand identity."
  },
  {
    title: "AI Solutions",
    desc: "Revolutionize your business with AI-powered automation, predictive analytics, and intelligent insights designed to enhance productivity and decision-making."
  }
];

const items = document.querySelectorAll(".service-item");
const card = document.getElementById("serviceCard");
const title = document.getElementById("serviceTitle");
const desc = document.getElementById("serviceDesc");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const index = item.dataset.index;

    card.style.animation = "none";
    void card.offsetWidth; // reset animation
    card.style.animation = "flipIn 0.8s ease";

    title.innerText = services[index].title;
    desc.innerText = services[index].desc;
  });
});



document.querySelectorAll(".adv-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});



const steps = document.querySelectorAll(".timeline-step");

const revealTimeline = () => {
  const trigger = window.innerHeight * 0.85;

  steps.forEach(step => {
    const top = step.getBoundingClientRect().top;
    if (top < trigger) {
      step.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealTimeline);
revealTimeline();


/* Scroll reveal */
const revealCards = document.querySelectorAll(".reveal");
const onScrollReveal = () => {
  const trigger = window.innerHeight * 0.85;
  revealCards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("active");
    }
  });
};
window.addEventListener("scroll", onScrollReveal);
onScrollReveal();

/* Cursor tilt */
document.querySelectorAll(".industry-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * 14;
    const ry = ((x / r.width) - 0.5) * -14;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});



const statCards = document.querySelectorAll(".reveal-stat");
const counters = document.querySelectorAll(".stat-number");
let counted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const increment = target / 80;

    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

function revealStats() {
  const trigger = window.innerHeight * 0.85;
  statCards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("active");
      if (!counted) {
        animateCounters();
        counted = true;
      }
    }
  });
}

window.addEventListener("scroll", revealStats);
revealStats();


const cards = document.querySelectorAll(".orbit-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    cards.forEach(c => c.style.opacity = "0.3");
    card.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach(c => c.style.opacity = "1");
  });
});