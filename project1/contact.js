
const form = document.getElementById("contactForm");
const msgBox = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || address === "" || message === ""){
        showMessage(
            "⚠ ONE OR MORE FIELDS HAVE AN ERROR. PLEASE CHECK AND TRY AGAIN.",
            "error"
        );
    } else {
        showMessage(
            "✔ Submitted successfully!",
            "success"
        );
        form.reset();
    }
});

function showMessage(text, type){
    msgBox.style.display = "block";
    msgBox.className = type;
    msgBox.innerText = text;

    
    setTimeout(() => {
        msgBox.style.display = "none";
    }, 4000);
}

