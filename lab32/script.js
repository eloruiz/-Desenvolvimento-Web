const questions = [
    {
        question: "Que ano ela nasceu??",
        answers: ["1999", "2004", "2001", "1998"],
        correctAnswer: 2
    },
    {
        question: "Onde ela mora??",
        answers: ["Nova Jersey", "Nova York", "Flórida", "Califórnia"],
        correctAnswer: 3
    },
    {
        question: "Ela virou vegana em que ano??",
        answers: ["2016", "2014", "2020", "2018"],
        correctAnswer: 1
    },
    {
        question: "Qual a cor de cabelo que ela mais gostou de pintar??",
        answers: ["Azul", "Preto", "Verde", "Vermelho"],
        correctAnswer: 2
    },
    {
        question: "Qual o nome completo dela??",
        answers: ["Billie Eilish Pirate Baird O'Connell", "Bilie Eilish Pirate O'Connell", "Billie Eilish Baird O'Connell", "Billie Eilish Pirate Baird "],
        correctAnswer: 0
    },
    {
        question: "Qual nome do irmão dela??",
        answers: ["Reid", "James", "Finneas", "Derek"],
        correctAnswer: 2
    },
    {
        question: "Quantos anos ela tem??",
        answers: ["22", "25", "19", "26"],
        correctAnswer: 0
    },
    {
        question: "Qual a altura dela??",
        answers: ["1,73", "1,61", "1,68", "1,70"],
        correctAnswer: 1
    },
    {
        question: "Qual o crush famoso dela??",
        answers: ["Tom Holland ", "Nick Jonas", "Shawn Mendes", "Justin Bieber"],
        correctAnswer: 3
    },
    {
        question: "A primeira música escrita por ela é inspirado em uma das suas séries favoritas, que série é essa??",
        answers: [
            "The Walking Dead", "Grey's Anatomy", "Dexter", "Orange Is The New Black"],
        correctAnswer: 0
    }
];

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';  // Limpa o container para reinicializações
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            const answerValue = parseInt(selectedAnswer.value);
            if (answerValue === q.correctAnswer) {
                score++;
                selectedAnswer.parentNode.innerHTML += `<span style="color: green;"> - Correto</span>`;
            } else {
                selectedAnswer.parentNode.innerHTML += `<span style="color: red;"> - Errado</span>`;
            }
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length}`;
}

function resetQuiz() {
    const answerContainers = document.querySelectorAll('input[type="radio"]');
    answerContainers.forEach(input => {
        input.checked = false;
        const feedback = input.parentNode.querySelector('span');
        if (feedback) feedback.remove();
    });
    document.getElementById('result').innerHTML = '';
    loadQuestions();  // Recarrega as perguntas
}

window.onload = function() {
    loadQuestions();
    document.getElementById('quiz-container').innerHTML += '<button onclick="resetQuiz()">Reiniciar</button>';
};