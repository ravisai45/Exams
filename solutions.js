document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;
  let slideInterval;

  function animateContent(slide) {
    if (typeof gsap !== "undefined") {
      // Clear previous animations to avoid ghosting
      gsap.killTweensOf([slide.querySelector("h1"), slide.querySelector("p"), slide.querySelectorAll("li"), slide.querySelector(".btn")]);
      
      gsap.set([slide.querySelector("h1"), slide.querySelector("p"), slide.querySelectorAll("li"), slide.querySelector(".btn")], { opacity: 0, y: 30 });
      
      const tl = gsap.timeline();
      tl.to(slide.querySelector("h1"), { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
        .to(slide.querySelector("p"), { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .to(slide.querySelectorAll("li"), { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 }, "-=0.3")
        .to(slide.querySelector(".btn"), { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
    }
  }

  function showSlide(index) {
    // Immediate z-index switch to prevent black flickers
    slides.forEach((s, i) => {
      s.classList.remove("active");
      s.style.zIndex = (i === index) ? "2" : "1";
    });

    dots.forEach(d => d.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    animateContent(slides[index]);
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    slideInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (current === index) return;
      current = index;
      showSlide(current);
      startAutoSlide(); // Reset timer on click
    });
  });

  // Init
  showSlide(0);
  startAutoSlide();
});e