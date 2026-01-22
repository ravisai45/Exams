 const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".arrow.left");
  const nextBtn = document.querySelector(".arrow.right");
  
  let currentIndex = 0;
  let slideInterval;
  const slideDuration = 2500;

  function updateSlides(index) {
    // Update Slides
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    // Update Dots/Progress
    dots.forEach(dot => {
      dot.classList.remove("active");
      // Force a reflow to restart the CSS animation
      void dot.offsetWidth; 
    });
    dots[index].classList.add("active");
    
    currentIndex = index;
  }

  function nextSlide() {
    let next = (currentIndex + 1) % slides.length;
    updateSlides(next);
  }

  function prevSlide() {
    let prev = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides(prev);
  }

  function startAutoPlay() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  // Event Listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoPlay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      updateSlides(idx);
      startAutoPlay();
    });
  });

  // Start initialization
  startAutoPlay();





  
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





      const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Interactive 3D tilt & Mouse Tracking Glow
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Update glow position
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
                
                // Tilt logic
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 12;
                const rotateY = (centerX - x) / 12;
                
                card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) translateY(0) rotateX(0) rotateY(0)`;
            });
        });





         const steps = [
        {
            label: "Innovation Hub",
            title: "Enterprise Digital Solutions",
            desc: "Oppty Tech Hub delivers secure, scalable and future-ready digital solutions for growing businesses through cutting-edge engineering.",
            points: ["✔ Web & App Development", "✔ Cloud & DevOps", "✔ Cyber Security"],
            image: "./lap.jpeg"
        },
        {
            label: "Next-Gen Cloud",
            title: "Scalable Infrastructure",
            desc: "Optimize your operations with our robust cloud migration and management services designed for 99.9% uptime and global reach.",
            points: ["✔ Multi-Cloud Strategy", "✔ Automated Scaling", "✔ Cost Optimization"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
        },
        {
            label: "Cyber Defense",
            title: "Zero Trust Security",
            desc: "Protect your digital assets with our comprehensive security audits, real-time monitoring, and advanced encryption protocols.",
            points: ["✔ Threat Intelligence", "✔ Data Privacy", "✔ Compliance Shield"],
            image: "./slider-3-image.png"
        }
    ];

    const title = document.getElementById("techTitle");
    const label = document.getElementById("techLabel");
    const desc = document.getElementById("techDesc");
    const points = document.getElementById("techPoints");
    const image = document.getElementById("techImage");
    const textContent = document.getElementById("textContent");

    let currentStep = -1;

    window.addEventListener("scroll", () => {
        const section = document.querySelector(".oppty-tech");
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const totalHeight = section.offsetHeight;
        
        // Calculate progress within the section
        const scrollDistance = -rect.top;
        const scrollRange = totalHeight - vh;
        const progress = Math.max(0, Math.min(scrollDistance / scrollRange, 0.99));
        
        const scrollStep = Math.floor(progress * steps.length);

        if (scrollStep !== currentStep && scrollStep >= 0 && scrollStep < steps.length) {
            currentStep = scrollStep;
            updateStep(currentStep);
        }
    });

    function updateStep(index) {
        const data = steps[index];

        // Apply exit animation
        const elements = [title, label, desc, points, image];
        elements.forEach(el => el.classList.add("fade-exit"));

        setTimeout(() => {
            // Update content
            label.textContent = data.label;
            title.textContent = data.title;
            desc.textContent = data.desc;
            image.src = data.image;

            points.innerHTML = "";
            data.points.forEach(p => {
                const li = document.createElement("li");
                const split = p.split(" ");
                li.innerHTML = `<span>${split[0]}</span> ${split.slice(1).join(" ")}`;
                points.appendChild(li);
            });

            // Trigger reflow for entry animation
            elements.forEach(el => {
                el.classList.remove("fade-exit");
                // Adding a slight staggering effect by reapplying visibility
                el.style.transition = 'none';
                void el.offsetWidth; 
                el.style.transition = '';
            });
        }, 400);
    }

    // Initialize first step
    window.dispatchEvent(new Event('scroll'));




    
const focusItems = document.querySelectorAll(".focus-item");

focusItems.forEach(item => {
    item.addEventListener("click", () => {
        focusItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});


const valueSection = document.querySelector(".reveal-value");

const observer1 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.4 }
);

observer.observe(valueSection);



const cards1 = document.querySelectorAll('.solution-card');

window.addEventListener('scroll',()=>{
  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
    }
  })
})



const section = document.querySelector('.why-oppty');

const observer2 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      section.classList.add('show');
    }
  });
},{threshold:0.3});

observer.observe(section);






const logos = document.querySelectorAll('.logo');

const observer3 = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');

        // Remove animation after it completes (so it can replay)
        setTimeout(()=>{
          entry.target.classList.remove('active');
        },1200);
      }
    });
  },
  {
    root: document.querySelector('.logo-slider'),
    threshold: 0.6
  }
);

// Observe each logo
logos.forEach(logo => observer.observe(logo));



const cards2 = document.querySelectorAll(".review-card");
const dotsContainer = document.getElementById("reviewDots");
let current = 0;

// create dots
cards.forEach((_, i) => {
  const dot = document.createElement("span");
  if(i === 0) dot.classList.add("active");
  dot.onclick = () => moveTo(i);
  dotsContainer.appendChild(dot);
});

const dots1 = dotsContainer.querySelectorAll("span");

function moveTo(index){
  cards[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = index;

  cards[current].classList.add("active");
  dots[current].classList.add("active");
}

setInterval(() => {
  let next = (current + 1) % cards.length;
  moveTo(next);
}, 3500);



const leftCards = document.querySelectorAll(".impact-column.left .impact-card");
const rightCards = document.querySelectorAll(".impact-column.right .impact-card");

let i = 0;
setInterval(() => {
  leftCards.forEach(c => c.style.opacity = "0.4");
  rightCards.forEach(c => c.style.opacity = "0.4");

  leftCards[i].style.opacity = "1";
  rightCards[i].style.opacity = "1";

  i = (i + 1) % leftCards.length;
}, 2000);