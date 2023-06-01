const questionBank = [
    {
      definition: "A young pigeon about four weeks old",
      answers: [
        {text: "Squab", correct: true},
        {text: "Squib", correct: false},
        {text: "Pigeot", correct: false},
        {text: "Pigchick", correct: false}
      ],
    },
    {
      definition: "A word meaning confuse/perplex/fluster",
      answers: [
        {text: "Squibblebum", correct: false},
        {text: "Dumduffer", correct: false},
        {text: "Fuzzpop", correct: false},
        {text: "Bumfuzzle", correct: true}
      ],
    },
    {
      definition: "A song or melody that keeps repeating in one’s mind",
      answers: [
        {text: "Jinglebug", correct: false},
        {text: "Earworm", correct: true},
        {text: "Jazzfly", correct: false},
        {text: "Headnut", correct: false}
      ],
    },
    {
      definition: "A noisy or overexcited reaction or response to something",
      answers: [
        {text: "Brouhaha", correct: true},
        {text: "Quibbleschnort", correct: false},
        {text: "Hubbadub", correct: false},
        {text: "Frazzleblip", correct: false}
      ],
    },
    {
      definition: "Endurance training where a runner alternates between sprinting and jogging",
      answers: [
        {text: "Lekfart", correct: false},
        {text: "Sprintjog", correct: false},
        {text: "Jogsprint", correct: false},
        {text: "Fartlek", correct: true}
      ],
    },
    {
      definition: "A lively discussion/argument/dispute",
      answers: [
        {text: "Stifle-pifle", correct: false},
        {text: "Argy-bargy", correct: true},
        {text: "Debby-toffy", correct: false},
        {text:"Squibstuff", correct: false}
      ],
    },
    {
      definition: "A sweet, aromatic wine made from green grapes native to North Carolina",
      answers: [
        {text: "Vinonong", correct: false},
        {text: "Noonong", correct: false},
        {text: "Scuppernong", correct: true},
        {text:"Varsenong", correct: false}
        ],
    },
    {
      definition: "To spend time aimlessly or idle",
      answers: [
      {text: "Lazidud", correct: false},
      {text: "Idophunkery", correct: false},
      {text: "Lollygag", correct: true},
      {text: "Fruffing", correct: false}
      ],
    },
    {
      definition: "A shrewd, unprincipled person, especially a politician",
      answers: [
      {text: "Snollygoster", correct: true},
      {text: "Horiposter", correct: false},
      {text: "Snibsnab", correct: false},
      {text: "Blufrumble", correct: false}
      ],
    },
    {
      definition: "A word meaning fierce/savage/destructive",
      answers: [
      {text: "Cattywampus", correct: true},
      {text: "Ferricious", correct: false},
      {text: "Crittogus", correct: false},
      {text: "Glimmerdash", correct: false}
      ],
    },
    {
      definition: "A lover of words",
      answers: [
      {text: "Lettophile", correct: false},
      {text: "Vocabularophile", correct: false},
      {text: "Wordophile", correct: false},
      {text: "Logophile", correct: true}
      ],
    },
    {
      definition: "To make something more lively or appealing by a small change",
      answers: [
      {text: "Ploomp", correct: false},
      {text: "Frush", correct: false},
      {text: "Zhuzh", correct: true},
      {text: "Prizzle", correct: false}
      ],
    },
    {
      definition: "A common phobia characterised by a fear of public speaking",
      answers: [
      {text: "Glossophobia", correct: true},
      {text: "Pubophobia", correct: false},
      {text: "Speakophobia", correct: false},
      {text: "Audophobia", correct: false}
      ],
    },
    {
      definition: "A group of things linked together in a way to produce a particular result",
      answers: [
      {text: "Stringenation", correct: false},
      {text: "Pushenation", correct: false},
      {text: "Concatenation", correct: true},
      {text:"Pullenation", correct: false}
      ],
    },
    {
      definition: "The science of measurement",
      answers: [
      {text: "Metrology", correct: true},
      {text: "Measury", correct: false},
      {text: "Metellogy", correct: false},
      {text: "Measology", correct: false}
      ],
    },
    {
      definition: "Floating wreckage of a ship or its cargo",
      answers: [
      {text: "Wreaksam", correct: false},
      {text: "Flotsam", correct: true},
      {text: "Seaglitter", correct: false},
      {text: "Flootorum", correct: false}
      ],
    },
    {
      definition: "The back part of the skull",
      answers: [
      {text: "Craniut", correct: false},
      {text: "Occiput", correct: true},
      {text: "Nutoot", correct: false},
      {text: "Sculliut", correct: false}
      ],
    },
    {
      definition: "The mouthpiece of a musical instrument",
      answers: [
      {text: "Bloehole", correct: false},
      {text: "Flumblewump", correct: false},
      {text: "Soosh", correct: false},
      {text: "Embouchure", correct: true}
      ],
    },
    {
      definition: "A harsh mixture of sounds",
      answers: [
      {text: "Bleebahah", correct: false},
      {text: "Audiofunky", correct: false},
      {text: "Cacaphony", correct: true},
      {text: "Phonidazy", correct: false}
      ],
    },
    {
      definition: "The act of finding something valuable when you are not looking for it",
      answers: [
      {text: "Zoobloop", correct: false},
      {text: "Quiblitz", correct: false},
      {text: "Zonky", correct: false},
      {text: "Serendipity", correct: true}
      ],
    },
    {
      definition: "Language that is meaningless or made unintelligible by excessive use of technical terms",
      answers: [
      {text: "Gobbledygook", correct: true},
      {text: "Gookledegob", correct: false},
      {text: "Googooble", correct: false},
      {text: "Gobblebum", correct: false}
      ],
    },
    {
      definition: "A word meaning utterly astonished or astounded",
      answers: [
      {text: "Gobsmacked", correct: true},
      {text: "Faceouch", correct: false},
      {text: "Mouthshock", correct: false},
      {text: "Lipslap", correct: false}
      ],
    },
    {
      definition: "A frivolous, flighty or excessively talkative person",
      answers: [
      {text: "Glibberdook", correct: false},
      {text: "Flubberdub", correct: false},
      {text: "Flibbertigibbet", correct: true},
      {text: "Zipperdibbet", correct: false}
      ],
    },
  ];

let questionNumber;
let questionElement = document.getElementById("definition"); 
let answerElement = document.getElementById("btn-grid");
let oldScore = parseInt(document.getElementById("correct-score").innerText);
let nextButton = document.getElementById("next-btn"); 
let playAgainButton = document.getElementById("play-again-btn");
let shuffledQuestions = questionBank.sort(() => Math.random() - .5);


// Function to start quiz or play again
function startGame() {
  questionNumber = 0;
  oldScore = 0;
  document.getElementById("score-area").style.display = "block";
  shuffleQuestionBank();
}

// Function to shuffle questionBank array at the start of each game
function shuffleQuestionBank () {
  let shuffledQuestions = questionBank.sort(() => Math.random() - .5);
  showQuestion ();
}

// Function to show question and answers
function showQuestion() {
  resetState();

  let currentQuestion = shuffledQuestions[questionNumber]; 
  questionNumber = questionNumber + 1; // Questions start at number 1 for user

  questionElement.innerHTML = questionNumber + ". " + currentQuestion.definition;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button"); 
    button.innerHTML = answer.text; 
    button.classList.add("btn");
    button.classList.add("answer-btn"); // For styling that should not be applied to other types of button
    answerElement.appendChild(button);

    if (answer.correct) { 
      button.dataset.correct = answer.correct; // Add a data attribute of correct to the correct button
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Function to check answer, display feedback, and show Next button
function selectAnswer(e) { 

  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) { // Selected button will turn green or red according to class styling
    selectedButton.classList.add("correct");
    incrementCorrect(); 
  } else {
    selectedButton.classList.add("incorrect");
    incrementIncorrect();
  }

  Array.from(answerElement.children).forEach(button => { // Create an array for the answer buttons so we can loop through them
    if (button.dataset.correct === "true") { 
      button.classList.add("correct"); // Add a class of correct to the correct answer so that it turns green when the incorrect answer is selected
    }
    button.disabled = true; 
  });

  nextButton.style.display = "block";
}

// Function to remove answer buttons, next button, play again button and score-comment
function resetState() {
  nextButton.style.display = "none";
  playAgainButton.style.display = "none";
  document.getElementById("score-comment").style.display = "none";

  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

// Function to limit the quiz to 10 questions and then show score
function nextQuestion () {
  if (questionNumber < 10) {
  showQuestion();
} else {
  showScore();
}}

// Function to show score, score-comment and play again button
function showScore () {
  resetState();
  questionElement.innerHTML = `You scored ${oldScore}/10!`;
  document.getElementById("score-area").style.display = "none";
  document.getElementById("score-comment").style.display = "block";

  if (oldScore === 10) {
    document.getElementById("score-comment").innerHTML = "Congratulations! You are a True Word Genius!";
  } else if (oldScore >= 7 && oldScore <= 9) {
    document.getElementById("score-comment").innerHTML = "Wow! You are an expert vocabularian. Keep playing!";
  } else if (oldScore >= 1 && oldScore <= 6) {
    document.getElementById("score-comment").innerHTML = "Great effort! Keep playing!";
  } else {
    document.getElementById("score-comment").innerHTML = "You can only get better. Keep playing!";
  }

  playAgainButton.style.display = "block";
}

// Function to reset scores back to 0 for play again
function resetScore () {
  
  let correctScore = document.getElementById("correct-score");
  correctScore.innerText = 0;

  let incorrectScore = document.getElementById("incorrect-score");
  incorrectScore.innerText = 0;
}

// Functions to increment scores
function incrementCorrect() { 
  document.getElementById("correct-score").innerText = ++oldScore;
}

function incrementIncorrect() {
  let oldScore = parseInt(document.getElementById("incorrect-score").innerText);
  document.getElementById("incorrect-score").innerText = ++oldScore;
}

// Event Listeners
if (document.getElementById("next-btn")) { // If next button exists when page is loaded run showGame function
  startGame();

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("play-again-btn").addEventListener("click", resetScore);
document.getElementById("play-again-btn").addEventListener("click", startGame);
}



