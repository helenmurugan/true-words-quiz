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
    * The home page welcomes the user to the quiz, and gives a short and punchy description of how to play. The user is encouraged to move to the next page with the "Lets Play!" button. The text and button are neatly contained within a white box which is consistent throughout the quiz and score page.

![Image of home page](/documentation/home-page.jpg)

* The Quiz Area
    * The quiz consists of a numbered definition (the question), with a button grid showing a choice of four words (the answers). 
    * The questions are shuffled using JavaScript at the start of each game so that each play will be different.
    * The user will be asked ten questions to complete the quiz.
    * The buttons are uniform across the whole quiz to ensure a consistent look throughout. 
    * When the user hovers over a button, the button will change from black-on-silver to silver-on-black.

![Image of quiz area contained within a box](/documentation/quiz-container.jpg)

* Buttons with colour-coded feedback
    * When the user clicks on a button, the background colour of the button will turn green if they selected the correct answer
![Image showing green and red coloured buttons for correct and incorrect feedback](/documentation/background-colour-feedback.jpg)

* Score Area  
![Image of score area](/documentation/score-area.jpg)

* Score Page  
![Image of score page](/documentation/score-page.jpg)

* Play Again  

questions shuffled before next game

* Favicon  
![Image of favicon](/documentation/favicon.jpg

* Features left to Implement  
(more questions in question bank, image on score page to improve aesthetics) 

## Technologies Used

## Testing
The site has been thoroughly tested and works well on devices of all sizes.

### Validator Testing
* HTML
* CSS
* JavaScript
* Accessibility

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


