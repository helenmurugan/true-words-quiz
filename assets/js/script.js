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
    {
      definition: "A clumsy or unskilled person",
      answers: [
      {text: "Jibberfool", correct: false},
      {text: "Quibbernib", correct: false},
      {text: "Blunderbuss", correct: true},
      {text: "Doodlefrum", correct: false}
      ],
    },
    {
      definition: "Something extraordinary, remarkable or outstanding",
      answers: [
      {text: "Whimsiwhirl", correct: false},
      {text: "Quipperoozy", correct: false},
      {text: "Doozy", correct: true},
      {text: "Fruppy", correct: false}
      ],
    },
    {
      definition: "Very quickly at a fast pace",
      answers: [
      {text: "Whiz-bo", correct: false},
      {text: "Split-sharp", correct: false},
      {text: "Lickety-split", correct: true},
      {text: "Spoodledoo", correct: false}
      ],
    },
    {
      definition: "The pleasant earthy smell that follows rain after a dry spell",
      answers: [
      {text: "Drizzlop", correct: false},
      {text: "Pittermizzle", correct: false},
      {text: "Petrichor", correct: true},
      {text: "Splishsprinkle", correct: false}
      ],
    },
    {
      definition: "Used to describe a person that has well-shaped buttocks",
      answers: [
      {text: "Callipygian", correct: true},
      {text: "Curvigor", correct: false},
      {text: "Voluplush", correct: false},
      {text: "Bodaciousity", correct: false}
      ],
    },
    {
      definition: "The act of throwing someone or something out of a window",
      answers: [
      {text: "Defenestration", correct: true},
      {text: "Flinerang", correct: false},
      {text: "Tosserlaunche", correct: false},
      {text: "Lobstacule", correct: false}
      ],
    },
    {
      definition: "Having a fluffy or woolly appearance",
      answers: [
      {text: "Flocculent", correct: true},
      {text: "Yarfstang", correct: false},
      {text: "Poodlish", correct: false},
      {text: "Verywooly", correct: false}
      ],
    },
    {
      definition: "Moving in the opposite direction to the natural or customary way",
      answers: [
      {text: "Widdershins", correct: true},
      {text: "Swirlstride", correct: false},
      {text: "Glideleap", correct: false},
      {text: "Swoopwhirl", correct: false}
      ],
    },
    {
      definition: "The sound of wind rustling through trees or leaves",
      answers: [
      {text: "Whispershuffle", correct: false},
      {text: "Psithurism", correct: true},
      {text: "Sightruffle", correct: false},
      {text: "Blushlutter", correct: false}
      ],
    },
    {
      definition: "A word used to refer to the day before yesterday",
      answers: [
      {text: "Whixadixical", correct: false},
      {text: "Nudiustertian", correct: true},
      {text: "Gistiadian", correct: false},
      {text: "Loopsadilly", correct: false}
      ],
    },
    {
      definition: "A gentle mild breeze",
      answers: [
      {text: "Sawaskawa", correct: false},
      {text: "Nupkiss", correct: false},
      {text: "Fratters", correct: false},
      {text: "Zephyr", correct: true}
      ],
    },
    {
      definition: "The enjoyment or love of the smell of books",
      answers: [
      {text: "Miameasury", correct: false},
      {text: "Bibliospire", correct: false},
      {text: "Joofwhirl", correct: false},
      {text: "Bibliosmia", correct: true}
      ],
    },
    {
      definition: "A person who never laughs or finds things funny",
      answers: [
      {text: "Griddlefins", correct: false},
      {text: "Doxymuff", correct: false},
      {text: "Boralicious", correct: false},
      {text: "Agelast", correct: true}
      ],
    },
    {
      definition: "The act of spitting while speaking",
      answers: [
      {text: "Grinfeg", correct: false},
      {text: "Porsplish", correct: false},
      {text: "Spittysplash", correct: false},
      {text: "Sialoquent", correct: true}
      ],
    },
    {
      definition: "A person who uses long words.",
      answers: [
      {text: "Mewittallion", correct: false},
      {text: "Logohoit", correct: false},
      {text: "Showyshoff", correct: false},
      {text: "Sesquipedalian", correct: true}
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

// Function to show next question and answers
function showQuestion() {
  resetState();

  let currentQuestion = shuffledQuestions[questionNumber]; 
  questionNumber = questionNumber + 1; // Questions start at number 1 for user

  questionElement.innerHTML = questionNumber + ". " + currentQuestion.definition;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button"); 
    button.innerHTML = answer.text; 
    button.classList.add("btn");
    button.classList.add("answer-btn");
    answerElement.appendChild(button);

    if (answer.correct) { 
      button.dataset.correct = answer.correct;
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
    document.getElementById("score-comment").innerHTML = "Congratulations! You are a True Words Genius!";
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
if (document.getElementById("next-btn")) {
  startGame();

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("play-again-btn").addEventListener("click", resetScore);
document.getElementById("play-again-btn").addEventListener("click", startGame);
}



