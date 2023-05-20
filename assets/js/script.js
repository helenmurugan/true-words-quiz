
const questionBank = [
    {
      definition: "A fledgling pigeon about four weeks old",
      options: [
        {text: "Squab", correct: true}
        {text: "Squib", correct: false}
        {text: "Pigeot", correct: false}
        {text: "Pigchick", correct: false}
      ],
    },
    {
      definition: "A word meaning confuse/perplex/fluster",
      options: [
        {text: "Squibblebum", correct: false}
        {text: "Dumduffer", correct: false}
        {text: "Fuzzpop", correct: false}
        {text: "Bumfuzzle", correct: true}
      ],
    },
    {
      definition: "A song or melody that keeps repeating in one’s mind",
      options: [
        {text: "Jinglebug", correct: false}
        {text: "Earworm ", correct: true}
        {text: "Jazzfly", correct: false}
        {text: "Headnut", correct: false}
      ],
    },
    {
      definition: "A noisy or overexcited reaction or response to something",
      options: [
        {text: "Brouhaha", correct: true}
        {text: "Quibbleschnort", correct: false}
        {text: "Hubbadub", correct: false}
        {text: "Frazzleblip", correct: false}
      ],
    },
    {
      definition: "Endurance training where a runner alternates between sprinting and jogging",
      options: ["Fartlek", "Sprintjog", "Jogsprint", "Lekfart"],
      
    },
    {
      definition: "A lively discussion/argument/dispute",
      options: ["Argy-bargy", "Stifle-pifle", "Debby-toffy", "Squibstuff"],
      answer: 0
    },
    {
      definition: "A sweet, aromatic wine made from green grapes native to North Carolina",
      options: ["Scuppernong", "Demderbe", "Sonomo", "Vars"],
      answer: 0
    },
    {
      definition: "To spend time aimlessly or idle",
      options: ["Lollygag", "Lazidud", "Idophunkery", "Fruff"],
      answer: 0
    },
    {
      definition: "A shrewd, unprincipled person, especially a politician",
      options: ["Snollygoster", "Horiposter", "Snibsnab", "Blufrumble"],
      answer: 0
    },
    {
      definition: "A word meaning fierce/savage/destructive",
      options: ["Cattywampus", "Ferricious", "Crittogus", "Glimmerdash"],
      answer: 0
    },
    {
      definition: "A lover of words",
      options: ["Logophile", "Wordophile", "Vocabularophile", "Lettophile"],
      answer: 0
    },
    {
      definition: "To make something more lively or appealing by a small change",
      options: ["Zhush", "Frush", "Ploomp", "Prizzle"],
      answer: 0
    },
    {
      definition: "A common phobia characterised by a fear of public speaking",
      options: ["Glossophobia", "Pubophobia", "Speakophobia", "Audophobia"],
      answer: 0
    },
    {
      definition: "A group of things linked together in a way to produce a particular result",
      options: ["Concatenation", "Stringenation", "Pushenation", "Pullenation"],
      answer: 0
    },
    {
      definition: "The science of measurement",
      options: ["Metrology", "Measury", "Metellogy", "Measology"],
      answer: 0
    },
    {
      definition: "Floating wreckage of a ship or its cargo",
      options: ["Flotsam", "Wrecksam", "Sealitter", "Flocean"],
      answer: 0
    },
    {
      definition: "The back part of the skull",
      options: ["Occiput", "Craniut", "Skulliut", "Nutoot"],
      answer: 0
    },
    {
      definition: "The mouthpiece of a musical instrument",
      options: ["Embouchure", "Soosh", "Flumblewump", "Bloehole"],
      answer: 0
    },
    {
      definition: "A harsh mixture of sounds",
      options: ["Cacaphony", "Phonical", "Audiophony", "Bleebar"],
      answer: 0
    },
    {
      definition: "The act of finding something valuable when you are not looking for it",
      options: ["Serendipity", "Fruitipidity", "Joyhoy", "Zoobloop"],
      answer: 0
    },
    {
      definition: "Language that is meaningless or made unintelligible by excessive use of technical terms",
      options: ["Gobbledygook", "Gookledegob", "Gookgobble", "Gobblefrobble"],
      answer: 0
    },
    {
      definition: "A word meaning utterly astonished or astounded",
      options: ["Gobsmacked", "Faceouch", "Mouthshock", "Lipslap"],
      answer: 0
    },
    {
      definition: "A frivolous, flighty or excessively talkative person",
      options: ["Flibbertigibbet", "Zipperdibbet", "Flubberdub", "Glibberglook"],
      answer: 0
    },
  
  ];

let definition = document.getElementById("definition");
let wordChoices = Array.from(document.getElementsByClassName("word-choice"));
console.log(wordChoices);