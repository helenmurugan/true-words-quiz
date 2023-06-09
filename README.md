# True Words Quiz

By Helen Murugan

[View the live site here](https://helenmurugan.github.io/true-words-quiz/index.html)

![Screen generator image showing True Words Quiz on different sized devices](/documentation/screen-generator.jpg)

* True Words Quiz is a fully responsive JavaScript vocabulary quiz, aimed at people who love vocabulary and want to test their knowledge. 
* The user has to match a definition to a word, from a choice of four words. Only one of the word options is a true word and the others are made-up, silly or funny-sounding words. 
* True Words Quiz intends to be an entertaining and interesting way to spend several minutes of your free time.

# CONTENTS
* [User Experience](#user-experience)
    * [User Stories](#user-stories)
* [Design](#design)
    * [Imagery](#imagery)
    * [Typography](#typography)
    * [Colour Scheme](#colour-scheme)
    * [Wireframes](#wireframes)
* [Features](#features)
    * [The Home Page](#the-home-page)
    * [The Quiz Area](#the-quiz-area)
    * [Button Feedback](#button-feedback)
    * [The Score Area](#the-score-area)
    * [The Score Page](#the-score-page)
    * [Favicon](#favicon)
    * [Future Implementations](#future-implementations)
    * [Accessibility](#accessibility)
* [Testing](#testing)
    * [Validator Testing](#validator-testing)
    * [Accessibility](#accessibility)
    * [Fixed Bugs](#fixed-bugs)
    * [Unfixed Bugs](#unfixed-bugs)
    * [Further Testing](#further-testing)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Credits](#credits)
    * [Code](#code)
    * [Media](#media)
    * [Content](#content)
    * [Acknowledgements](#acknowledgements)

## User Experience
### User Stories
* First Time Visitor Goals
    * I want to do an online vocabulary quiz for fun and to test my vocabulary knowledge.
    * I want to be able to play anywhere, at any time.
    * I want the site to be responsive to my device.
    * I want the site to be intuitive and easy to navigate.

* Returning and Frequent Visitors
    * I want to play again to improve my scores.

## Design
### Imagery  
* A black-and-white image of dictionary text was chosen as the background image for the quiz. This image is relevant to the subject matter and is easily recognisable, helping the user understand what the quiz is about.

![Image of dictionary text used as background](/documentation/cover-image-snippet.jpg) 

### Typography

* Indie Flower was downloaded from Google Fonts and used for the home page, definitions, scores and score page. This font is legible and bold, whilst also being fun with its rounded-edges, suitable for content that is not serious. Sans-serif and Arial are used as fallback fonts.

![Image of "True Words Quiz" typed with indie-flower font](/documentation/indie-flower-font.jpg) 

* Helvetica was used as the font for all the buttons in the quiz. Using a different font for the buttons makes them stand out and draws the user to them. Helvetica is an easily legible, plain font. 

![Image of "Let's Play!" typed with helvetica font](/documentation/helvetica-font.jpg) 

### Colour Scheme
* Minimal colour is used throughout the site in keeping with the dictionary theme. 
* Black, whitesmoke and silver are the main colours used. 
* Green and red are used to provide feedback on the answer buttons and for the scores.

![Image of colour palette - black, whitesmoke, silver, red and green](/documentation/colour-palette.jpg) 

### Wireframes
During the planning stage, I used Excalidraw to create wireframes for each page and plan the structure of the site.

![Image of wireframe for home page](/documentation/planning-1.jpg)  
![Image of wireframe for quiz page](/documentation/planning-2.jpg)  
![Image of wireframe for score page](/documentation/planning-3.jpg)  

## Features

### The Home Page  
* The home page welcomes the user to the quiz and gives a short description of how to play. 
* The user is encouraged to move to the quiz page with the "Let's Play!" button. 
* The content is neatly contained within a white box which is consistent throughout the quiz.
* There is a small True Words logo in the top left corner of the screen, which acts as a link to the home page, this is consistent throughout the site.

![Image of home page](/documentation/home-page.jpg)

### The Quiz Area
* The following features are implemented in script.js.
* The quiz consists of a numbered definition (the question), with a button grid showing a choice of four words (the answers). 
* The questions are shuffled at the start of each game so that each play is different.
* The user will be asked ten questions to complete the quiz and then shown the final score.
   
![Image of quiz area contained within a box](/documentation/quiz-container.jpg)

### Button Feedback
* When the user hovers over a button with a mouse, the button will change from silver-on-black to black-on-silver, implemented in style.css.
* When the user clicks on a button, the background colour of the button will turn green if they selected the correct answer.
* When the wrong answer is selected, the button will turn red and the correct answer button will turn green.
* The colour-coded feedback is implemented by adding a class to the button with JavaScript and style using CSS. It allows the user to see instantly which answers are correct.
* After an answer button is selected, a "Next" button will appear at the bottom of the quiz container, prompting the user to move to the next question.

![Image showing green and red coloured buttons for correct and incorrect feedback](/documentation/background-colour-feedback.jpg)

### The Score Area  
* The score area keeps a tally of the correct and incorrect answer scores. 
* They are colour coded in green and red which is intuitively easy to understand.
* The scores are incremented immediately when the answer button is selected, giving instant feedback to the user.

![Image of score area](/documentation/score-area.jpg)

### The Score Page
* After ten questions have been answered, a score page will appear, implemented in script.js.
* The score out of 10 is displayed at the top of the page.
* A comment gives a short encouraging message to the user based on their score. There are four possible messages based on four score conditions.
* A "Play Again" button encourages the user to continue playing.

![Image of score page](/documentation/score-page.jpg)

### Favicon 
* The favicon displays a logo and makes it easier for the user to pick out True Words Quiz from the tabs.

![Image of favicon](/documentation/favicon.jpg)

### Future Implementations
* To improve the quiz, more questions should be added to the question bank array in script.js. Currently, there are 40 questions, however, more questions will reduce the chance of users seeing the same question twice. If more questions are added, the questions could be located in a separate JavaScript file to keep them neatly separated.
* JavaScript could be used to shuffle the answer buttons so that the correct answer appears in a random position as one of the four options. This would improve the quiz for the user by making it more difficult when viewing a repeat question.
* Different levels of difficulty could be added as a feature - typically Easy, Medium and Difficult.
* To improve the appearance of the score page, an image or icon based on the user's score could be added using JavaScript.

### Accessibility
During development of True Words Quiz I have been mindful of accessibility by:
* Using semantic HTML.
* Ensuring sufficient colour contrast throughout the site.
* Selecting fonts that are clear and legible.
* Using hover styling on all buttons so that the user can see clearly when they are hovering over a button.
* For users with colour blindness who may not be able to see the colour feedback on the answer buttons, the score area will allow them to see whether their answer was correct. A future improvement could be the addition of ticks and crosses to the answer buttons in addition to the coloured backgrounds.

## Testing
The site has been thoroughly tested and works well on devices of all sizes, both in function and appearance.

### Validator Testing
* HTML
    * No errors were returned when validating the code with the official W3C validator.
* CSS
    * No errors were returned when validating the code with the official (Jigsaw) validator.
* JavaScript
    * No errors were found when passing through the official JSHint validator
        * The following metrics were returned.
        * There are 14 functions in this file.
        * The function with the largest signature takes 1 argument, while the median is 0.
        * The largest function has 10 statements in it, while the median is 3.5.
        * The most complex function has a cyclomatic complexity value of 6 while the median is 1.

### Accessibility
* I used Lighthouse in DevTools to confirm that every page scores well for accessibility.

![Image showing Lighthouse analysis of quiz page](/documentation/lighthouse.jpg)

### Fixed Bugs
I discovered several interesting bugs after deployment. These were all investigated and fortunately, I was able to fix the bugs as detailed below.

* The button grid jumped up very slightly when the Next button appeared. This bug was not visible in DevTools and strangely seemed to appear only on iPhones. The bug was corrected by reducing the height in pixels of the question (or definition) element to allow a little more space for the Next button to occupy.
* On mobile devices, the background colour feedback on the answer buttons did not work correctly. The selected button would appear black (the hover colour), instead of green or red for correct and incorrect respectively. Due to the way mobile devices interact with the web page, the hover style rule was applied. In reality, hover isn't possible on a touchscreen because there isnt a cursor. This issue was corrected by adding !important to the background colour and font colour in style.css for the correct and incorrect classes so that they take precedence over the hover style rules.
* When the quiz page was loaded the Next and Play Again buttons flashed up, when they should have been hidden. It happened so quickly that you weren't sure if you had seen it, and seemed to happen only on the first time the page was loaded on a new device. Originally, the buttons were present in my HTML file, and JavaScript was used to hide the buttons. As the computer was reading the HTML code first, it would show and then hide the buttons. To correct this bug, I simply added a style rule for display: none in style.css so that the buttons should not be displayed in the first instance.

### Unfixed bugs
* There are no unfixed bugs.

### Further Testing
* The site has been tested and works well in different browsers: Chrome, Microsoft Edge, Internet Explorer and Safari.
* Media queries were added and tested to ensure the site is fully responsive. The media queries relate only to the sizing of the elements and fonts.
* DevTools device toolbar was used to ensure the site is fully responsive and looks good across different screen sizes.
* After deployment, the site was tested on a range of different devices - mobile devices (both iPhone and Android), tablets, laptops and desktops.

## Technologies Used
### Languages
* HTML
* CSS
* JavaScript

### Frameworks, Libraries and Programs Used
* [Excalidraw]() - To create wireframes.
* [Git](https://git-scm.com/) - For version control.
* [GitHub](https://github.com/) - To save and store the repository for the site.
* [Gitpod](https://gitpod.io/workspaces) - The IDE used to create the site.
* [Google Fonts](https://fonts.google.com/) - Used to import a font for the site.
* [Google Developer Tools](https://developer.chrome.com/docs/) - To ensure responsiveness, check style properties and debug JavaScript code by checking for console errors.
* [Favicon.io](https://favicon.io/) - To create a favicon.
* [Coolors](https://coolors.co/) - To create a colour palette for the site.

## Deployment
* The site was deployed to GitHub pages by the following steps:
    * Log in to GitHub and select the True Words repository.
    * Navigate to the Settings tab.
    * Navigate to Pages from the left-hand menu.
    * In Source select "Deploy from a branch".
    * In Branch select "main".
    * Select Save.
    * After several minutes the live site was deployed at this URL [https://helenmurugan.github.io/true-words-quiz/index.html](https://helenmurugan.github.io/true-words-quiz/index.html)

## Credits
### Code
* The JavaScript code to create a shuffledQuestions variable, showQuestion function and resetState function was adapted from [Web Dev Simplified - Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k).
* The code for the selectAnswer function was taken from [Easy Tutorials - How To Make Quiz App Using JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8).
* The JavaScript functions to increment the scores were taken from the Code Institute's Love Maths project.
    
### Media
* The cover image was downloaded from [Pexels](https://www.pexels.com/photo/black-and-white-book-business-close-up-267669/).

### Content
*  Question and answer content was written by the developer. Definitions were taken or adapted from the [Dictionary by Merriam-Webster](https://www.merriam-webster.com/).

### Acknowledgements
* I would like to thank my mentor Victor Miclovich for his excellent advice and guidance during the development of this project.
* I would like to thank Tutor Support at Code Institute for their support.


