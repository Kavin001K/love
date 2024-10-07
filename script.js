let currentQuestion = 0;
const questions = [
    'Are you angry with me?',
    'Do you love me?',
    'Will you forgive me?',
    'Please forgive me, I love you!'
];

const finalQuestion = 'Choose: I love you TOO or Marry me My love';

// When "Yes" is clicked for the first question
function answerYes() {
    currentQuestion++; // Move to the next question
    document.getElementById('question').innerText = questions[currentQuestion];
}

// When "No" is clicked
function answerNo() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion];
    } else {
        document.getElementById('question').innerText = finalQuestion;
        document.getElementById('options').innerHTML = `
            <button onclick="chooseLove()">I love you TOO</button>
            <button onclick="chooseMarry()">Marry me My love</button>
        `;
    }
}

// Final question options
function chooseLove() {
    showBunny();
}

function chooseMarry() {
    showBunny();
}

// Show bunny and end the session
function showBunny() {
    document.getElementById('question-box').style.display = 'none';
    document.getElementById('bunny-gif').style.display = 'flex';
    document.getElementById('end-message').innerText = 'Yay! Let\'s go for a pizza date! 🍕';
}
