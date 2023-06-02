# True Words Quiz

By Helen Murugan

[View the live site here](https://helenmurugan.github.io/true-words-quiz/index.html)


This document describes the development process for True Words Quiz. IThis site is for educational purposes only, as my second portfolio project for a Diploma in Full Stack Software Development (E-Commerce Applications) with Code Institute, using frontend user-centric development with HTML, CSS and JavaScript.

![Screen generator image showing True Words Quiz on different sized devices](/documentation/screen-generator.jpg)

True Words Quiz is a fully responsive JavaScript vocabulary quiz, aimed at people who love vocabulary and want to test their knowledge. The user has to match a definition to a word, from a choice of four words. Only one of the four word options is a true word and the others are made-up, silly or funny sounding words. True Words Quiz intends to be an entertaining and interesting way to spend five minutes of your free time.

## Design

* Imagery  
    * A black and white image of dictionary text was chosen as the background image for the quiz. This image is relevant to the subject matter of the quiz and is easily recognisable, helping the user understand what the quiz is about. 

* Typography

    * Indie Flower was downloaded from Google Fonts and used for the home page, definitions, scores and score page. This font is legible and bold, whilst also being fun with its rounded-edges, suitable for content that is not serious. Sans-serif and arial are used as fallback fonts.
    * Helvetica was used as the font for all the buttons in the quiz. Using a different font for the buttons makes them stand out and draws the user to them. Helvetica is an easily legible, plain font. 

* Colour Scheme
    * Minimal colour is used throughout the site inkeeping with the dictionary theme. 
    * Black, whitesmoke and silver are the main colours used. 
    * Green and red are used to provide feedback on the answer buttons and for the scores.

## Wireframes
During the planning stage, I used Excalidraw to create wireframes for each page, and plan the structure of the site.

![Image of wireframe for home page](/documentation/planning-1.jpg)  
![Image of wireframe for quiz page](/documentation/planning-2.jpg)  
![Image of wireframe for score page](/documentation/planning-3.jpg)  

## Features
* Home Page  
    * The home page welcomes the user to the quiz, and gives a short and punchy description of how to play. The user is encouraged to move to the quiz page with the "Lets Play!" button. The text and buttons are neatly contained within a white box which is consistent throughout the quiz and score page.

![Image of home page](/documentation/home-page.jpg)

* The Quiz Area
    * The following features are implemented using JavaScript.
    * The quiz consists of a numbered definition (the question), with a button grid showing a choice of four words (the answers). 
    * The questions are shuffled at the start of each game so that each play is different.
    * The user will be asked ten questions to complete the quiz, and moving onto the results.
   
![Image of quiz area contained within a box](/documentation/quiz-container.jpg)

* Button Feedback
    * When the user hovers over a button, the button will change from black-on-silver to silver-on-black, implemented using CSS.
    * When the user clicks on a button, the background colour of the button will turn green if they selected the correct answer.
    * When the wrong answer is selected, the button will turn red and the correct answer button will turn green.
    * This colour-coded feedback is implemented using JavaScript to add a class to the correct and incorrect buttons, and CSS to style said classes. It allows the user to see instantly which answers are correct.
    * After an answer button is selected, a "Next" button appears at the bottom of the quiz container, prompting the user to move to the next question. The presence/absence of the button is controlled using JavaScript.
    
![Image showing green and red coloured buttons for correct and incorrect feedback](/documentation/background-colour-feedback.jpg)

* Score Area  
    * The score area keeps a tally of the correct and incorrect answer scores. 
    * They are colour coded in green and red which is intuitively easier to read than the actual text.
    * The scores are incremented immediately when the answer-button is selected, giving instant fedback to the user. This was achieved using JavaScript for the score and CSS for the colour.

![Image of score area](/documentation/score-area.jpg)

* Score Page 
    * The score out of 10 is displayed at the top of the page, this has been implemented on the quiz.html page using JavaScript.
    * A comment gives a short encouraging message to the user based on their score. There are four possible messages based on four score conditions.
    * A "Play Again" button encourages the user to continue playing. The questions are shuffled at the start of every game.

![Image of score page](/documentation/score-page.jpg)

* Favicon 
    * The favicon displays a logo and makes it easier for the user to pick out True Words Quiz from the tabs.

![Image of favicon](/documentation/favicon.jpg)

* Features left to Implement
    * To improve the quiz, more questions should be added to the questionBank array in script.js. More questions will reduce the chance of users seeing the same question twice.
    * To improve the appearance of the score page, an image or icon based on their score could be added using JavaScript.

## Testing
The site has been thoroughly tested and works well on devices of all sizes.

### Validator Testing
* HTML
* CSS
* JavaScript
* Accessibility
    * I confirmed that the fonts and colours are easy to read.
    * I used Lighthouse in DevTools to confirm that every page scores well for accessibility.

![Image showing Lighthouse analysis of quiz page](/documentation/lighthouse.jpg)

### Fixed Bugs
I discovered several interesting bugs after deployment, mostly relating to mobile devices. These were all investigated and fortunately i was able to fix the bugs as detailed below.
* Button-grid jumping up very slightly when Next button appears after a button had been clicked on. This bug was not visible in DevTools and strangely seemed to appear only on iphones. The bug was corrected by reducing the height in pixels of the question (or definition) element to allow a little more space for the Next button.
* On mobile devices the background colour feedback on the answer buttons did not work correctly. The selected button would appear black (the hover colour), instead of green or red for correct and incorrect respectively. This was only an issue on mobile devices due to the way mobile devices interact with the web page (hover isn't possible on mobile devices in the way it is on a desktop). This issue was corrected by adding !important to the background-color and font color style rules for the correct and incorrect classes, so that they take precedence over the hover style rules.
* On mobile devices the Play Again button font colour appeared the default font colour for buttons which is blue. At first I changed the color to black using an id but this prevented the hover styling from working correctly (the font colour remained black when hovered over, instead of turning silver). This was fixed by creating a class for the font colour (rather than an id) so that it has the same level of importance as the hover class and now works well on all devices.
* On the first time that the quiz page was loaded on a new device, the Next and Play Again buttons appeared flashed up very briefly before disappearing. It happened so quickly you weren't sure if you had really seen it!...

## Unfixed bugs
* There are no unfixed bugs.

### Further Testing
* The site has been tested and works well in different browsers: Chrome, Microsoft Edge, Internet Explorer and Safari.
* JS testing
* Media queries were added to the following features and tested to ensure the site is fully responsive.
    * ...
* DevTools device toolbar was used to ensure the site is fully responsive and looks good across different screen sizes.
* After deployment, the site was tested on a range of different devices - mobile devices (both iphone and Android), tablet, laptop and desktop.

## Deployment
* The site was deployed to GitHub pages by the following steps:
    * Log in to GitHub and select Future Fuels repository.
    * Navigate to Settings tab.
    * Navigate to Pages from the left-hand menu.
    * In Source select "Deploy from a branch".
    * In Branch select "main".
    * Select Save.
    * After several minutes the live site was deployed [here](https://helenmurugan.github.io/true-words-quiz/index.html)


## Credits
* Code
    * Score area code
    *
    * Mention both you tube videos for sections of code that was copued.
* Media
    * Cover image
* Content
    *  Question and answer content was written by the developer. Definitions were taken from the Merriam-Webster English Dictionary.
* Acknowledgements
    * I would like to thank my mentor Victor Miclovich for his excellent advice and guidance during the development of this project.
    * I would like to thank Tutor Support at Code Institute for their support.


