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
  frame.src = ""; 
}