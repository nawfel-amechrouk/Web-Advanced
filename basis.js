const app = document.getElementById('app');
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

// Fetch quiz data from API
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