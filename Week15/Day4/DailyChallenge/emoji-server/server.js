import express from 'express';
import path from 'path'; // Import path module
import { fileURLToPath } from 'url';
import { createOrGetGame, updateLeaderboard, getLeaderboard, randomQuestion } from './game.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files (HTML, CSS, JS) from the 'public' folder

app.use(express.static(path.join(__dirname, 'public')));  // Serve from the 'public' directory
app.use(express.json());  // Parse JSON request bodies

let games = {};

// API endpoint to start the game
app.post('/start-game', (req, res) => {
    const { playerName } = req.body;
    const gameId = Date.now(); // Use timestamp as a unique game ID

    const game = createOrGetGame(gameId, playerName);
    games[gameId] = game;
    res.json({ gameId });
});

// API endpoint to get a new question (emoji) for the player
app.get('/new-question/:gameId', (req, res) => {
    const gameId = req.params.gameId;
    const game = games[gameId];
    if (!game) {
        return res.status(404).send('Game not found');
    }

    const question = randomQuestion();  // Get a random question with shuffled answers
    game.question = question;
    res.json({ emoji: question.emoji, answers: question.answers });
});

// API endpoint to submit a guess for the game
app.post('/submit-guess/:gameId', (req, res) => {
    const {gameId} = req.params;
    const { guess } = req.body;
    const game = games[gameId];

    if (!game) {
        return res.status(404).send('Game not found');
    }

    const correct = game.question.name.toLowerCase() === guess.toLowerCase();
    if (correct) {
        game.score += 1;
        updateLeaderboard(gameId);  // Update leaderboard
        res.json({ message: 'Correct! Your score is ' + game.score });
    } else {
        res.json({ message: 'Incorrect, try again!' });
    }
});

// API endpoint to get the leaderboard
app.get('/leaderboard', (req, res) => {
    res.json(getLeaderboard());
});

// Serve the index.html file when the root route is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});