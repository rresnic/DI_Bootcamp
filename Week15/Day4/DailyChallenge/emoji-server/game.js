let leaderboard = [];
let games = {};

export const createOrGetGame = (gameId, playerName) => {
    if (!games[gameId]) {
        games[gameId] = {
            gameId,
            playerName,
            score: 0,
            question: null
        };
    }
    return games[gameId];
};

export const updateLeaderboard = (gameId) => {
    const game = games[gameId];
    const existingPlayerIndex = leaderboard.findIndex(player => player.name === game.playerName);

    if (existingPlayerIndex !== -1) {
        leaderboard[existingPlayerIndex].score = game.score;
    } else {
        leaderboard.push({ name: game.playerName, score: game.score });
    }

    leaderboard.sort((a, b) => b.score - a.score);  // Sort by score in descending order
};

export const getLeaderboard = () => {
    return leaderboard;
};

// Shuffle function (Fisher-Yates shuffle)
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
};

// Random question function
    const emojis = [
        { emoji: '😀', name: 'Smile' },
        { emoji: '🐶', name: 'Dog' },
        { emoji: '🌮', name: 'Taco' },
        { emoji: '🌸', name: 'Cherry Blossom' },
        { emoji: '🚗', name: 'Car' },
        { emoji: '🏠', name: 'House' },
        { emoji: '🎸', name: 'Guitar' },
        { emoji: '⚽', name: 'Soccer Ball' },
        { emoji: '🍕', name: 'Pizza' },
        { emoji: '🍎', name: 'Apple' },
        { emoji: '📚', name: 'Books' },
        { emoji: '✈️', name: 'Airplane' },
        { emoji: '🎨', name: 'Paint Palette' },
        { emoji: '📷', name: 'Camera' },
        { emoji: '💡', name: 'Light Bulb' },
        { emoji: '🚀', name: 'Rocket' },
        { emoji: '🍩', name: 'Doughnut' },
        { emoji: '🐱', name: 'Cat' },
        { emoji: '🎉', name: 'Party Popper' },
        { emoji: '☕', name: 'Coffee' },
        { emoji: '🌍', name: 'Earth' },
        { emoji: '🔥', name: 'Fire' },
        { emoji: '💎', name: 'Gem' },
        { emoji: '📱', name: 'Smartphone' },
        { emoji: '🌈', name: 'Rainbow' },
        { emoji: '💖', name: 'Heart' },
        { emoji: '🧠', name: 'Brain' },
        { emoji: '👓', name: 'Glasses' },
        { emoji: '🚴', name: 'Cyclist' },
        { emoji: '🐳', name: 'Whale' },
        { emoji: '🌲', name: 'Tree' }
    ];

export const randomQuestion = (answerCount = 4) => {

    if (answerCount < 1) {
        return { emoji: '🛑', name: 'Invalid number of answers' };
    }

    const chosenIndex = Math.floor(Math.random() * emojis.length);
    const randEmoji = emojis[chosenIndex];
    let answers = [randEmoji.name];

    while (answers.length < answerCount) {
        let anIndex = Math.floor(Math.random() * emojis.length);
        if (!answers.includes(emojis[anIndex].name)) {
            answers.push(emojis[anIndex].name);
        }
    }

    answers = shuffleArray(answers);
    return { ...randEmoji, answers };
};