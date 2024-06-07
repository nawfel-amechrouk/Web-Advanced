const app = document.getElementById('app');
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;


const fetchQuizData = async () => {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        const data = await response.json();
        quizData = data.results.map(item => ({
            question: item.question,
            answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
            correct: item.correct_answer
        }));
        loadQuestion();
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

const loadQuestion = () => {
    const { question, answers } = quizData[currentQuestionIndex];
    document.getElementById('question').innerHTML = question;
    answersContainer.innerHTML = '';
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
};

const selectAnswer = (selectedAnswer) => {
    const { correct } = quizData[currentQuestionIndex];
    if (selectedAnswer === correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}; 

const showResult = () => {
    resultText.innerText = `Je hebt ${score} van de ${quizData.length} vragen goed beantwoord.`;
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
};