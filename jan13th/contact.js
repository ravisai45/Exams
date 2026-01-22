// SCROLL REVEAL
const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-up,.reveal-slide-left,.reveal-slide-right,.reveal-pop,.reveal-scale"
);

function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("reveal-active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();




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



// FORM INTERACTION
// const form = document.getElementById("contactForm");
// const statusText = document.querySelector(".form-status");

// form.addEventListener("submit", e=>{
//   e.preventDefault();
//   statusText.textContent = "Sending your message...";
//   statusText.style.color = "#0f172a";

//   setTimeout(()=>{
//     statusText.textContent = "Thank you! Our team will contact you shortly.";
//     statusText.style.color = "#22c55e";
//     form.reset();
//   }, 1500);
// });

const form = document.getElementById("contactForm");
const statusText = document.querySelector(".form-status");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    statusText.textContent = "Sending your message...";
    statusText.style.color = "#0f172a";

    setTimeout(() => {
      statusText.textContent = "Thank you! Our team will contact you shortly.";
      statusText.style.color = "#22c55e";
      form.reset();
    }, 1500);
  });
}


/* ================= FADE IN / FADE OUT LOOP ================= */
const cards = document.querySelectorAll(".contact-card");
let index = 0;

function animateCards(){
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");
  index = (index + 1) % cards.length;
}

setInterval(animateCards, 2500);
animateCards();




  

    const imgBox = document.querySelector('.contact2-image');

imgBox.addEventListener('mousemove', e => {
  const rect = imgBox.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  imgBox.style.transform = `
    translateY(-12px)
    rotateX(${y * -0.03}deg)
    rotateY(${x * 0.03}deg)
  `;
});

imgBox.addEventListener('mouseleave', () => {
  imgBox.style.transform = '';
});




document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact4-form-card form");
  const button = form.querySelector("button");

  // Create status message element
  const statusMsg = document.createElement("div");
  statusMsg.className = "contact4-status";
  form.appendChild(statusMsg);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showStatus("Please fill in all fields.", "error");
      return;
    }

    if (!validateEmail(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    // Loading state
    button.disabled = true;
    button.innerText = "Sending...";

    // 🔹 SIMULATED API CALL (Replace with real backend later)
    setTimeout(() => {
      showStatus("✅ Message sent successfully! We’ll contact you soon.", "success");
      form.reset();
      button.disabled = false;
      button.innerText = "Submit Message";
    }, 1800);
  });

  function showStatus(message, type) {
    statusMsg.innerText = message;
    statusMsg.className = `contact4-status ${type}`;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

});



document.querySelectorAll('.floating-card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    card.style.boxShadow = '0 0 35px rgba(106,255,158,.8)';
  });
  card.addEventListener('mouseleave',()=>{
    card.style.boxShadow = 'none';
  });
});




const wave = document.getElementById("wavePath");
let t = 0;

function animateWave(){
  t += 0.035;

  const amp = 45; // wave height
  const base = 160;

  const d = `
    M0,${base}
    C120,${base + Math.sin(t) * amp}
    240,${base - Math.sin(t + 1) * amp}
    360,${base + Math.sin(t + 2) * amp}
    480,${base - Math.sin(t + 3) * amp}
    600,${base + Math.sin(t + 4) * amp}
    720,${base - Math.sin(t + 5) * amp}
    840,${base + Math.sin(t + 6) * amp}
    960,${base - Math.sin(t + 7) * amp}
    1080,${base + Math.sin(t + 8) * amp}
    1200,${base - Math.sin(t + 9) * amp}
    1320,${base + Math.sin(t + 10) * amp}
    1440,${base}
  `;

  wave.setAttribute("d", d);
  requestAnimationFrame(animateWave);
}

animateWave();





const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let w, h;
let particles = [];
let mouse = { x: null, y: null };

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = canvas.parentElement.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Particle{
  constructor(){
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2 + 1;
    this.vx = Math.random() * .6 - .3;
    this.vy = Math.random() * .6 - .3;
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;

    if(mouse.x){
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 140){
        this.x -= dx / 40;
        this.y -= dy / 40;
      }
    }

    if(this.x < 0) this.x = w;
    if(this.x > w) this.x = 0;
    if(this.y < 0) this.y = h;
    if(this.y > h) this.y = 0;
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fillStyle = "rgba(106,255,158,0.7)";
    ctx.fill();
  }
}

function init(){
  particles = [];
  for(let i=0;i<140;i++){
    particles.push(new Particle());
  }
}
init();

function connectParticles(){
  for(let i=0;i<particles.length;i++){
    for(let j=i;j<particles.length;j++){
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);

      if(dist < 120){
        ctx.strokeStyle = `rgba(106,255,158,${1 - dist/120})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}
animate();




const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price-value");
const labels = document.querySelectorAll(".billing-toggle .label");

let yearly = false;

toggle.addEventListener("click", () => {
  yearly = !yearly;
  toggle.classList.toggle("active");

  labels.forEach(l => l.classList.remove("active"));
  labels[yearly ? 1 : 0].classList.add("active");

  prices.forEach(price => {
    price.textContent = yearly
      ? price.dataset.year
      : price.dataset.month;
  });
});




