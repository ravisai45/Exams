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





const reveals = document.querySelectorAll(
  ".reveal-fade,.reveal-slide-left,.reveal-slide-right,.reveal-slide-up,.reveal-pop,.reveal-stagger,.reveal-flip"
);

function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 120){
      el.classList.add("reveal-active");
    }
  });
}

window.addEventListener("scroll",revealOnScroll);
revealOnScroll();



 const hero = document.getElementById('hero');
        const kineticText = document.getElementById('kineticText');
        const pods = document.querySelectorAll('.glass-pod');

        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Move Kinetic Text slightly (Parallax)
            const moveX = (clientX - centerX) / 50;
            const moveY = (clientY - centerY) / 50;
            kineticText.style.transform = `translate(${moveX}px, ${moveY}px)`;

            // Interactive Pods following/resisting mouse
            pods.forEach(pod => {
                const speed = pod.getAttribute('data-speed');
                const x = (clientX - centerX) * speed / 100;
                const y = (clientY - centerY) * speed / 100;
                pod.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Reset positions on mouse leave
        hero.addEventListener('mouseleave', () => {
            kineticText.style.transform = `translate(0, 0)`;
            pods.forEach(pod => {
                pod.style.transform = `translate(0, 0)`;
            });
        });



          const cards = document.querySelectorAll('.card-base');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });

        // 2. Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));




 
const reviews = [
  {
    msg:"Oppty's innovative solutions transformed our business!",
    name:"Arjun Mehta",
    role:"E-Commerce Entrepreneur",
    initials:"AM"
  },
  {
    msg:"Professional team with creative thinking and fast execution.",
    name:"Sneha Rao",
    role:"Startup Founder",
    initials:"SR"
  },
  {
    msg:"Reliable solutions that helped us scale with confidence.",
    name:"Rohit Verma",
    role:"Operations Manager",
    initials:"RV"
  }
];

let i = 0;
const msg = document.getElementById("msg");
const name = document.getElementById("name");
const role = document.getElementById("role");
const avatar = document.querySelector(".avatar-ring span");
const steps = document.querySelectorAll(".step");

setInterval(()=>{
  i = (i + 1) % reviews.length;

  msg.style.opacity = 0;

  setTimeout(()=>{
    msg.innerText = reviews[i].msg;
    name.innerText = reviews[i].name;
    role.innerText = reviews[i].role;
    avatar.innerText = reviews[i].initials;

    steps.forEach(s=>s.classList.remove("active"));
    steps[i].classList.add("active");

    msg.style.opacity = 1;
  },300);

},3500);



document.querySelectorAll('.partner-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    card.style.transform = `translate(${x*0.03}px, ${y*0.03}px) scale(1.03)`;
  });

  card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
  });
});


const logos = document.querySelectorAll(".logo-item");

let index = 0;
setInterval(() => {
  logos.forEach(l => l.style.opacity = "0.4");
  logos[index].style.opacity = "1";
  index = (index + 1) % logos.length;
}, 1800);