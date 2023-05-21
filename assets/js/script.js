
const questionBank = [
    {
      definition: "A fledgling pigeon about four weeks old",
      options: [
        {text: "Squab", correct: true},
        {text: "Squib", correct: false},
        {text: "Pigeot", correct: false},
        {text: "Pigchick", correct: false}
      ],
    },
    {
      definition: "A word meaning confuse/perplex/fluster",
      options: [
        {text: "Squibblebum", correct: false},
        {text: "Dumduffer", correct: false},
        {text: "Fuzzpop", correct: false},
        {text: "Bumfuzzle", correct: true}
      ],
    },
    {
      definition: "A song or melody that keeps repeating in one’s mind",
      options: [
        {text: "Jinglebug", correct: false},
        {text: "Earworm", correct: true},
        {text: "Jazzfly", correct: false},
        {text: "Headnut", correct: false}
      ],
    },
    {
      definition: "A noisy or overexcited reaction or response to something",
      options: [
        {text: "Brouhaha", correct: true},
        {text: "Quibbleschnort", correct: false},
        {text: "Hubbadub", correct: false},
        {text: "Frazzleblip", correct: false}
      ],
    },
    {
      definition: "Endurance training where a runner alternates between sprinting and jogging",
      options: [
        {text: "Lekfart", correct: false},
        {text: "Sprintjog", correct: false},
        {text: "Jogsprint", correct: false},
        {text: "Fartlek", correct: true}
      ],
    },
    {
      definition: "A lively discussion/argument/dispute",
      options: [
        {text: "Stifle-pifle", correct: false},
        {text: "Argy-bargy", correct: true},
        {text: "Debby-toffy", correct: false},
        {text:"Squibstuff", correct: false}
      ],
    },
    {
      definition: "A sweet, aromatic wine made from green grapes native to North Carolina",
      options: [
        {text: "Demderbe", correct: false},
        {text: "Sonomo", correct: false},
        {text: "Scuppernong", correct: true},
        {text:"Vars", correct: false}
        ],
    },
    {
      definition: "To spend time aimlessly or idle",
      options: [
      {text: "Lazidud", correct: false},
      {text: "Idophunkery", correct: false},
      {text: "Lollygag", correct: true},
      {text: "Fruff", correct: false}
      ],
    },
    {
      definition: "A shrewd, unprincipled person, especially a politician",
      options: [
      {text: "Snollygoster", correct: true},
      {text: "Horiposter", correct: false},
      {text: "Snibsnab", correct: false},
      {text: "Blufrumble", correct: false}
      ],
    },
    {
      definition: "A word meaning fierce/savage/destructive",
      options: [
      {text: "Cattywampus", correct: true},
      {text: "Ferricious", correct: false},
      {text: "Crittogus", correct: false},
      {text: "Glimmerdash", correct: false}
      ],
    },
    {
      definition: "A lover of words",
      options: [
      {text: "Lettophile", correct: false},
      {text: "Vocabularophile", correct: false},
      {text: "Wordophile", correct: false},
      {text: "Logophile", correct: true}
      ],
    },
    {
      definition: "To make something more lively or appealing by a small change",
      options: [
      {text: "Ploomp", correct: false},
      {text: "Frush", correct: false},
      {text: "Zhuzh", correct: true},
      {text: "Prizzle", correct: false}
      ],
    },
    {
      definition: "A common phobia characterised by a fear of public speaking",
      options: [
      {text: "Glossophobia", correct: true},
      {text: "Pubophobia", correct: false},
      {text: "Speakophobia", correct: false},
      {text: "Audophobia", correct: false}
      ],
    },
    {
      definition: "A group of things linked together in a way to produce a particular result",
      options: [
      {text: "Stringenation", correct: false},
      {text: "Pushenation", correct: false},
      {text: "Concatenation", correct: true},
      {text:"Pullenation", correct: false}
      ],
    },
    {
      definition: "The science of measurement",
      options: [
      {text: "Metrology", correct: true},
      {text: "Measury", correct: false},
      {text: "Metellogy", correct: false},
      {text: "Measology", correct: false}
      ],
    },
    {
      definition: "Floating wreckage of a ship or its cargo",
      options: [
      {text: "Wreaksam", correct: false},
      {text: "Flotsam", correct: true},
      {text: "Seaglitter", correct: false},
      {text: "Flootorum", correct: false}
    ],
    },
    {
      definition: "The back part of the skull",
      options: [
      {text: "Craniut", correct: false},
      {text: "Occiput", correct: true},
      {text: "Nutoot", correct: false},
      {text: "Sculliut", correct: false}
    ],
    },
    {
      definition: "The mouthpiece of a musical instrument",
      options: [
      {text: "Bloehole", correct: false},
      {text: "Flumblewump", correct: false},
      {text: "Soosh", correct: false},
      {text: "Embouchure", correct: true}
    ],
    },
    {
      definition: "A harsh mixture of sounds",
      options: [
      {text: "Bleebahah", correct: false},
      {text: "Audiofunky", correct: false},
      {text: "Cacaphony", correct: true},
      {text: "Phonidazy", correct: false}
      ],
    },
    {
      definition: "The act of finding something valuable when you are not looking for it",
      options: [
      {text: "Zoobloop", correct: false},
      {text: "Joyhoy", correct: false},
      {text: "Frutippy", correct: false},
      {text: "Serendipity", correct: true}
    ],
    },
    {
      definition: "Language that is meaningless or made unintelligible by excessive use of technical terms",
      options: [
      {text: "Gobbledygook", correct: true},
      {text: "Gookledegob", correct: false},
      {text: "Googooble", correct: false},
      {text: "Gobblebum", correct: false}
      ],
    },
    {
      definition: "A word meaning utterly astonished or astounded",
      options: [
      {text: "Gobsmacked", correct: true},
      {text: "Faceouch", correct: false},
      {text: "Mouthshock", correct: false},
      {text: "Lipslap", correct: false}
      ],
    },
    {
      definition: "A frivolous, flighty or excessively talkative person",
      options: [
      {text: "Glibberdook", correct: false},
      {text: "Flubberdub", correct: false},
      {text: "Flibbertigibbet", correct: true},
      {text: "Zipperdibbet", correct: false}
      ],
    },
  ];

/* The index for tracking the array index from the questionBank */
let questionNumber = 0;

/* Function to start quiz by showing first definition and corresponding word choices*/
function startQuiz() {
/* The current question to get from the questionBank */
  let currentQuestion = questionBank[questionNumber];

/* Increase questionNumber for the next question */
  questionNumber = questionNumber + 1;

  let definitionElement = document.getElementById("definition");

/* Add the question number and definition */
  definitionElement.innerHTML = questionNumber + ". " + currentQuestion.definition;
  console.log(definition);
}



/* Functions to check answer, display red and green backgrounds as necessary, and show 'Next' button */
function checkAnswer() {

}

/* Function to display next question with updated scores*/
function nextQuestion() {
  
}

/* Functions to increment scores */
function incrementCorrect() {

}

function incrementIncorrect() {

}

// Event Listeners

// If next button exists
if (document.getElementById("next-btn")) {
  startQuiz()
  document.getElementById("next-btn").addEventListener("click", startQuiz);
}

