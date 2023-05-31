# True Words Quiz

By Helen Murugan

[View the live site here](https://helenmurugan.github.io/true-words-quiz/index.html)


This document describes the development process for True Words Quiz. It is for educational purposes only, as my second portfolio project for a Diploma in Full Stack Software Development (E-Commerce Applications) with Code Institute, using frontend user-centric development with HTML, CSS and JavaScript.

![Screen generator image showing True Words Quiz on different sized devices](/documentation/screen-generator.jpg)

True Words Quiz is a fully responsive JavaScript vocabulary quiz, aimed at people who love to test their vocabulary knowledge. The user has to match a definition to a word, from a choice of four words. Only one of the four word options is a true word and the others are made-up, silly or funny sounding words. True Words Quiz intends to be an entertaining and interesting way to spend five minutes of free time.

## Design

## Wireframes

## Features
* Home Page
* Favicon
* Quiz Container
(numbered questions and button grid containing neatly inside  the box)
* Buttons with colour-coded feedback
* Score Area
* Score Page
* Play Again 
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


