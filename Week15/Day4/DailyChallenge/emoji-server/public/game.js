let gameId = null;
let playerName = null;

function startGame() {
    playerName = document.getElementById('playerName').value;

    if (!playerName) {
        alert('Please enter your name to start the game!');
        return;
    }

    fetch('/start-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerName })
    })
    .then(response => {console.log(response); return response.json()})
    .then(data => {
        gameId = data.gameId;
        console.log(gameId);
        document.getElementById('gameSection').style.display = 'block';
        document.getElementById('welcomeSection').style.display = 'none';
        loadNewQuestion(gameId);
        loadLeaderboard();
    })
    .catch(error => console.error('Error starting game:', error));
}

function loadNewQuestion(gameId) {
    fetch(`/new-question/${gameId}`)
    .then(response => {console.log(response); return response.json()})
    .then(data => {
        const { emoji, answers } = data;
        document.getElementById('emoji').textContent = emoji;
        
        // Clear previous answers
        const answersList = document.getElementById('answers');
        answersList.innerHTML = '';

        // Add new answers as radio buttons
        answers.forEach(answer => {
            const li = document.createElement('li');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = answer;

            const label = document.createElement('label');
            label.textContent = answer;

            li.appendChild(input);
            li.appendChild(label);
            answersList.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading question:', error));
}

function submitGuess() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }

    const guess = selectedAnswer.value;

    fetch(`/submit-guess/${gameId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadLeaderboard();
        loadNewQuestion(gameId);
    })
    .catch(error => console.error('Error submitting guess:', error));
}

function loadLeaderboard() {
    fetch('/leaderboard')
    .then(response => response.json())
    .then(data => {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = '';

        data.forEach(player => {
            const li = document.createElement('li');
            li.textContent = `${player.name}: ${player.score}`;
            leaderboard.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading leaderboard:', error));
}

document.getElementById('startGameButton').addEventListener('click', startGame);
document.getElementById('submitGuessButton').addEventListener('click', submitGuess);
