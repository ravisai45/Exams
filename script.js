
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 3000);



  const video = document.getElementById("bgVideo");
  const toggleBtn = document.getElementById("videoToggle");

  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      toggleBtn.textContent = "❚❚"; // pause icon
      toggleBtn.setAttribute("aria-label", "Pause video");
    } else {
      video.pause();
      toggleBtn.textContent = "▶"; // play icon
      toggleBtn.setAttribute("aria-label", "Play video");
    }
  });




  const triggers = document.querySelectorAll(".h-trigger");
  const panel = document.getElementById("hPanel");
  const hImg = document.getElementById("hImg");
  const hTitle = document.getElementById("hTitle");
  const hDesc = document.getElementById("hDesc");
  const closeBtn = document.querySelector(".h-close");

  triggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".h-item");
      hImg.src = item.dataset.img;
      hTitle.textContent = item.dataset.title;
      hDesc.textContent = item.dataset.content;
      panel.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.remove("active");
  });

  panel.addEventListener("click", e => {
    if (e.target === panel) {
      panel.classList.remove("active");
    }
  });



   const buttons = document.querySelectorAll(".ind-btn");
  const panels = document.querySelectorAll(".ind-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;

      buttons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(id).classList.add("active");
    });
  });


  const slider = document.getElementById("opptySlider");
const prev = document.querySelector(".oppty-nav.prev");
const next = document.querySelector(".oppty-nav.next");

next.addEventListener("click", () => {
  slider.scrollBy({ left: 350, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  slider.scrollBy({ left: -350, behavior: "smooth" });
});





document.addEventListener("DOMContentLoaded", () => {

  const slides1 = document.querySelectorAll(".oth-life-slide");
  const dots = document.querySelectorAll(".oth-life-dots .dot");
  let index = 0;

  function showSlide(i) {
    slides1.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides1[i].classList.add("active");
    dots[i].classList.add("active");
  }

  setInterval(() => {
    index = (index + 1) % slides1.length;
    showSlide(index);
  }, 3000);

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
