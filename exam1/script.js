let questions = [];
let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("scoreText");
const nextBtn = document.getElementById("nextBtn");

async function startQuiz() {
    currentIndex = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");

    const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
    const data = await res.json();
    questions = data.results;

    loadQuestion();
}

function loadQuestion() {
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    const q = questions[currentIndex];
    questionEl.innerHTML = q.question;

    const answers = [...q.incorrect_answers, q.correct_answer]
        .sort(() => Math.random() - 0.5);

    answers.forEach(ans => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerHTML = ans;
        div.onclick = () => selectAnswer(div, q.correct_answer);
        optionsEl.appendChild(div);
    });
}

function selectAnswer(selected, correct) {
    const options = document.querySelectorAll(".option");
    options.forEach(opt => opt.style.pointerEvents = "none");

    if (selected.innerHTML === correct) {
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("wrong");
        options.forEach(opt => {
            if (opt.innerHTML === correct) {
                opt.classList.add("correct");
            }
        });
    }
    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.innerHTML = `Your Score: <strong>${score} / ${questions.length}</strong>`;
}

startQuiz();
