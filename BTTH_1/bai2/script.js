async function loadQuiz() {
    const response = await fetch("Quiz.txt");
    const text = await response.text();

    const blocks = text.trim().split(/\r?\n\r?\n+/);

    let quizHTML = "";

    blocks.forEach((block, index) => {
        const lines = block.split("\n");

        const question = lines[0];
        const A = lines[1];
        const B = lines[2];
        const C = lines[3];
        const D = lines[4];
        const answer = lines[5].replace("ANSWER: ", "").trim();

        quizHTML += `
            <div class="question">
                <h3>${index + 1}. ${question}</h3>
                <label><input type="radio" name="q${index}" value="A"> ${A}</label>
                <label><input type="radio" name="q${index}" value="B"> ${B}</label>
                <label><input type="radio" name="q${index}" value="C"> ${C}</label>
                <label><input type="radio" name="q${index}" value="D"> ${D}</label>
                
                <input type="hidden" id="answer${index}" value="${answer}">
            </div>
        `;
    });

    document.getElementById("quiz-container").innerHTML = quizHTML;
}

loadQuiz();

document.getElementById("submit").addEventListener("click", () => {
    let correct = 0;

    const questions = document.querySelectorAll(".question");

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        const correctAnswer = document.getElementById(`answer${index}`).value;

        if (userAnswer && userAnswer.value === correctAnswer) {
            correct++;
        }
    });

    document.getElementById("result").innerHTML =
        `Bạn đúng ${correct}/${questions.length} câu.`;
});
