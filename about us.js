document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  // Ensure video starts playing immediately
  video.play().catch((error) => {
    console.log("Autoplay was prevented. User interaction might be required.");
  });

  // Optional: Parallax effect for the content relative to the video
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = `${1 - scrolled / 600}`;
  });
});
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('load', () => {
        
        // 1. Image Parallax Logic
        gsap.to(".parallax-img", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".overview-visual",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // 2. Text Stagger Reveal
        const textTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".overview-content",
                start: "top 80%",
            }
        });

        textTimeline.from(".section-label, .overview-h2, .overview-p", {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out"
        });

        // 3. Keyword/Focus List Highlight on Scroll
        const focusItems = document.querySelectorAll('.focus-item');
        
        focusItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 85%",
                onEnter: () => item.classList.add('active'),
                onLeaveBack: () => item.classList.remove('active'),
                once: false
            });
        });
    });
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 }
        }
    });
        const tabs = document.querySelectorAll('.tab-btn');
    const infoBlocks = document.querySelectorAll('.industry-info');
    const images = document.querySelectorAll('.industry-image');
    const underline = document.getElementById('underline');

    function updateUnderline() {
        const activeTab = document.querySelector('.tab-btn.active');
        if(activeTab) {
            underline.style.width = `${activeTab.offsetWidth}px`;
            underline.style.left = `${activeTab.offsetLeft}px`;
        }
    }

    window.onload = updateUnderline;
    window.onresize = updateUnderline;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-industry');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateUnderline();

            infoBlocks.forEach(info => {
                info.classList.remove('active');
                if(info.id === `${target}-info`) info.classList.add('active');
            });

            images.forEach(img => {
                img.classList.remove('active');
                if(img.id === `${target}-img`) img.classList.add('active');
            });
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.value-card');

    cards.forEach(card => {
        // Handle Mouse Enter
        card.addEventListener('mouseenter', () => {
            // Optional: Dim other cards for a high-end focus effect
            cards.forEach(c => {
                if (c !== card) c.style.opacity = '1';
            });
            
            // Trigger internal reveal animations
            const desc = card.querySelector('.value-description');
            const name = card.querySelector('.value-name');
            
            desc.style.opacity = '1';
            desc.style.transform = 'translateY(0)';
            name.style.transform = 'translateY(-10px)';
        });

        // Handle Mouse Leave
        card.addEventListener('mouseleave', () => {
            // Restore all cards to full opacity
            cards.forEach(c => c.style.opacity = '1');
            
            // Reset internal content states
            const desc = card.querySelector('.value-description');
            const name = card.querySelector('.value-name');
            
            desc.style.opacity = '0';
            desc.style.transform = 'translateY(20px)';
            name.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".acc-node");
    const images = document.querySelectorAll(".img-container");

    nodes.forEach((node) => {
        node.addEventListener("click", () => {
            // 1. Remove active class from all nodes and images
            nodes.forEach((n) => n.classList.remove("active"));
            images.forEach((img) => img.classList.remove("active"));

            // 2. Add active class to clicked node
            node.classList.add("active");

            // 3. Find and activate the corresponding image via data-target
            const targetId = node.getAttribute("data-target");
            const targetImg = document.getElementById(targetId);
            if (targetImg) {
                targetImg.classList.add("active");
            }
        });
    });
});
const wrapper = document.querySelector('.services-wrapper');
    const cards = document.querySelectorAll('.service-card');
    const progLines = document.querySelectorAll('.prog-line');
    const progNums = document.querySelectorAll('.prog-num');
    
    let currentIndex = 0;

    const updateUI = (index) => {
        progLines.forEach((l, i) => l.classList.toggle('active', i === index));
        progNums.forEach((n, i) => n.classList.toggle('active', i === index));
    };

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        wrapper.scrollTo({ left: (cards[0].offsetWidth + 20) * currentIndex, behavior: 'smooth' });
        updateUI(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        wrapper.scrollTo({ left: (cards[0].offsetWidth + 20) * currentIndex, behavior: 'smooth' });
        updateUI(currentIndex);
    });
    document.addEventListener("DOMContentLoaded", () => {
            const visual = document.getElementById('visualInteract');
            const badge = document.querySelector('.stat-floating-badge');
            const accent = document.querySelector('.overlap-img-frame');
            const textBox = document.getElementById('contentReveal');

            // Parallax mouse move
            visual.addEventListener('mousemove', (e) => {
                const moveX = (e.clientX - window.innerWidth / 2) / 45;
                const moveY = (e.clientY - window.innerHeight / 2) / 45;
                badge.style.transform = `translate(${moveX}px, ${moveY}px)`;
                accent.style.transform = `translate(${moveX * -1.8}px, ${moveY * -1.8}px)`;
            });

            // Scroll reveal
            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        textBox.style.opacity = "1";
                        textBox.style.transform = "translateY(0)";
                    }
                });
            }, { threshold: 0.15 });

            textBox.style.opacity = "0";
            textBox.style.transform = "translateY(50px)";
            textBox.style.transition = "all 1s cubic-bezier(0.19, 1, 0.22, 1)";
            scrollObserver.observe(textBox);
        });
        const scrollArea = document.getElementById('scrollArea');
        const monthLabel = document.getElementById('monthLabel');
        const sections = document.querySelectorAll('.milestone-section');
        const navDots = document.getElementById('navDots');

        // Create Navigation Dots
        sections.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (i === 0) dot.classList.add('active');
            navDots.appendChild(dot);
        });

        const dots = document.querySelectorAll('.nav-dot');

        // Improved Scroll Listener
        scrollArea.addEventListener('scroll', () => {
            sections.forEach((section, i) => {
                const rect = section.getBoundingClientRect();
                
                // If the section's top is near the top of the viewport
                if (rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2) {
                    const currentMonth = section.getAttribute('data-month');
                    
                    // Update the sidebar text
                    if (monthLabel.innerText !== currentMonth) {
                        monthLabel.style.opacity = "0"; // Fade out
                        setTimeout(() => {
                            monthLabel.innerText = currentMonth;
                            monthLabel.style.opacity = "0.6"; // Fade in
                        }, 200);
                    }
                    
                    // Update dots
                    dots.forEach(dot => dot.classList.remove('active'));
                    dots[i].classList.add('active');
                }
            });
        });
        // ================= BACK TO TOP =================

const backToTop = document.getElementById("backToTop");
const progressPath = backToTop.querySelector("path");
const pathLength = progressPath.getTotalLength();

// Init path
progressPath.style.strokeDasharray = pathLength;
progressPath.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pathLength - (scrollTop * pathLength) / docHeight;

  progressPath.style.strokeDashoffset = progress;

  if (scrollTop > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



function openMap(loc) {
  const frame = document.getElementById("mapFrame");
  const popup = document.getElementById("mapPopup");

  if (!frame || !popup) {
    console.error("Map elements not found");
    return;
  }

  if (loc === "hyd") {
    frame.src =
      "https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed";
  }

  if (loc === "udaipur") {
    frame.src =
      "https://www.google.com/maps?q=Udaipur,Rajasthan,India&output=embed";
  }

  popup.style.display = "flex";
}

function closeMap() {
  const popup = document.getElementById("mapPopup");
  const frame = document.getElementById("mapFrame");

  popup.style.display = "none";
  frame.src = ""; // stops map when closed
}