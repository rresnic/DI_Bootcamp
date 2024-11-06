export const emojis = [
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

// GPT generated shuffle function
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];    // Swap elements
  }
  return array;
}

export const randomQuestion = (answerCount=4) => {
    if(answerCount < 1){
        return {emoji:'🛑', name: 'Invalid number of answers' }
    }
    const chosenIndex = Math.floor(Math.random()*emojis.length)
    const randEmoji = emojis[chosenIndex];
    let answers = [randEmoji.name];
    while(answers.length < answerCount){
        let anIndex =  Math.floor(Math.random()*emojis.length);
        if (anIndex != chosenIndex){
            answers.push(emojis[anIndex].name)
        }
    }
    answers = shuffleArray(answers);
    return {...randEmoji, answers}
}