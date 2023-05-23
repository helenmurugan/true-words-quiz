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
        {text: "Demderbe", correct: false},
        {text: "Sonomo", correct: false},
        {text: "Scuppernong", correct: true},
        {text:"Vars", correct: false}
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
      {text: "Joyhoy", correct: false},
      {text: "Frutippy", correct: false},
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

let questionNumber = 0; // Variable for tracking the array index in the questionBank
let nextButton = document.getElementById("next-btn"); // Variable for switching Next button class between hide and display
const shuffledQuestions = questionBank.sort(() => Math.random() - .5); // Shuffles the questionBank array

// Function to start quiz by shuffling questions and showing the question
function startGame() {
  showQuestion()
}

// Function to start quiz by showing first definition and corresponding word choices
function showQuestion() {

  let currentQuestion = shuffledQuestions[questionNumber]; // The current question to get from the shuffled questions array
  questionNumber = questionNumber + 1; // Increase questionNumber so that the user sees the number of the question starting at 1

  let definitionElement = document.getElementById("definition"); // Locate definition element in html
  definitionElement.innerHTML = questionNumber + ". " + currentQuestion.definition; // Add the question number and definition

  let answerElement = document.getElementById("btn-grid"); // Locate answer position inside html grid

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button"); // Create a button for each answer in the current question
    button.innerHTML = answer.text; // Set the answer text for each button
    button.classList.add("btn") // Add class='btn' to each button
    answerElement.appendChild(button); // Add button as a child of the answerElement (btn-grid) for each answer

    if (answer.correct) { // If the answer is correct add a data attribute for correct onto the button element, so that we can later check if its correct
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer); // Run selectAnswer function when any button is clicked
  });
  
}


// Function to check answer, display red and green backgrounds, and show 'Next' button
function selectAnswer(e) { 
  const selectedButton = e.target; // Defines selectButton as the clicked on target
  const isCorrect = selectedButton.datset.correct === "true" // Checks whether the selected Button has correct in the dataset 

  if (isCorrect) {
    selectedButton.classList.add("correct"); // If the asnwer is correct add a class of correct to the selected button
  } else {
    selectedButton.classList.add("incorrected"); // Else add a class of incorrect to the selected button
  }}

// Function to display next question with updated scores
function nextQuestion() {
  
}

/* Functions to increment scores */
function incrementCorrect() {

}

function incrementIncorrect() {

}

// Event Listeners

if (document.getElementById("next-btn")) { // If next button exists when page is loaded run startGame function
  startGame()
  document.getElementById("next-btn").addEventListener("click", showQuestion); // run showQuestion function when Next button is clicked
}

