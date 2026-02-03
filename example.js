const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;
        function showSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
        function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); }
        let slideInterval = setInterval(nextSlide, 6000);
        dots.forEach((dot, i) => { dot.addEventListener('click', () => { clearInterval(slideInterval); currentSlide = i; showSlide(currentSlide); slideInterval = setInterval(nextSlide, 6000); }); });

        const metricElements = document.querySelectorAll('.metric-num');
        const metricObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    let count = 0;
                    const interval = setInterval(() => {
                        count += Math.ceil(target / 40);
                        if(count >= target) { entry.target.innerText = target; clearInterval(interval); } 
                        else { entry.target.innerText = count; }
                    }, 40);
                    metricObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        metricElements.forEach(el => metricObserver.observe(el));

        const tSwitch = document.getElementById('tierSwitch');
        const pElements = [document.getElementById('p1'), document.getElementById('p2'), document.getElementById('p3')];
        const prices = { monthly: ['₹24,999', '₹59,999', '₹1,24,999'], annual: ['₹19,999', '₹47,999', '₹99,999'] };
        tSwitch.addEventListener('click', () => {
            const active = tSwitch.classList.toggle('active');
            const data = active ? prices.annual : prices.monthly;
            const suffix = active ? '<span>/mo billed annually</span>' : '<span>/mo</span>';
            pElements.forEach((el, i) => {
                el.style.opacity = 0;
                setTimeout(() => {
                    el.innerHTML = data[i] + suffix;
                    el.style.opacity = 1;
                }, 200);
            });
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if(entry.isIntersecting) { entry.target.style.opacity = 1; entry.target.style.transform = 'translateY(0)'; } });
        }, { threshold: 0.1 });
        document.querySelectorAll('.sol-card, .arch-card, .tier-card, .metric-tile, .step-item, .engine-card, .unity-hub-card, .innov-tile').forEach((item, index) => {
            item.style.opacity = 0; item.style.transform = 'translateY(40px)';
            item.style.transition = 'all 1s cubic-bezier(0.19, 1, 0.22, 1)';
            item.style.transitionDelay = (index % 4) * 0.1 + 's';
            revealObserver.observe(item);
        });

        const steps = document.querySelectorAll('.step-item');
        window.addEventListener('scroll', () => {
            steps.forEach(step => {
                const sRect = step.getBoundingClientRect();
                if(sRect.top < window.innerHeight/2 && sRect.bottom > window.innerHeight/2) {
                    steps.forEach(s => s.classList.remove('active'));
                    step.classList.add('active');
                }
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