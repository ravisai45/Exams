let mapVisible = true;

function toggleMap() {
  const map = document.getElementById("map");
  map.style.display = mapVisible ? "none" : "block";
  mapVisible = !mapVisible;
}


const taskList = document.getElementById("taskList");

function loadTasks() {
    taskList.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(input.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function clearTasks() {
    localStorage.removeItem("tasks");
    loadTasks();
}

loadTasks();


let seconds = 0;
let running = true;

const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    if (!running) return;

    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    document.getElementById("timer").innerText =
        `Time elapsed: ${hrs}:${mins}:${secs}`;
}

function pauseTimer() {
    running = !running;
}

function resetTimer() {
    seconds = 0;
    document.getElementById("timer").innerText =
        "Time elapsed: 00:00:00";
}




document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("nameError").innerText =
        name === "" ? "Please enter your name." : "";

    document.getElementById("emailError").innerText =
        !email.includes("@") ? "Please enter a valid email address." : "";

    document.getElementById("passwordError").innerText =
        password.length < 6 ? "Password must be at least 6 characters long." : "";

    if (name === "" || !email.includes("@") || password.length < 6) {
        valid = false;
    }

    if (valid) {
        localStorage.setItem("contactData", JSON.stringify({name, email}));
        document.getElementById("successMsg").innerText =
            "Your information is saved in this browser!";
        this.reset();
    }
});

function clearForm() {
    localStorage.removeItem("contactData");
    document.getElementById("contactForm").reset();
    document.getElementById("successMsg").innerText = "";
}



function openMap() {

                        const address = "108/43 Vijaya Lakshmi Enclave 1st Floor H No 2 PJR Enclave Rd Gangaram ICRISAT Colony Hyderabad Telangana 500050";


                        const mapURL =
                            "https://www.google.com/maps/search/?api=1&query=" +
                            encodeURIComponent(address);


                        window.open(mapURL, "_blank");
                    }
