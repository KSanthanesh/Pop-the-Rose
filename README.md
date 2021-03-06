# pop the Rose
<img src="docs/image/home-desktop.PNG" align="left" width="400" height="300" >   
<img src="docs/image/home-desktop-diff.PNG" align="center" width="400" height="300">

## Types of Content
- [Introduction](#introduction)
  - [Home](#home)
  - [Game](#game)
- [Strategy](#strategy)
  - [UX](#ux)
  - [Business Vision](#business-vision)
  - [Purpose of Website](#purpose-of-website)
- [Scope](#scope)
  - [Features](#features)
  - [Future Feature](#future-feature)
- [Structure](#structure "Goto Structure")
   - [Wireframes](#wireframes)
   - [Colours](#colours "Goto Colours Section")
   - [Typography](#typography)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Bugs](#bugs)
   - [Fixed Bugs](#fixed-bugs)
   - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Acknowledgement](#acknowledgement)



 ## Introduction
   This project is designed to test the brain memory. This game is useful for kids and adults to test their memory power.<br>
   I have used colourful Rose Pictures to create the pleasant feeling while playing this memory game.<br>
   The Webpage is categorised into two main sections, such as Home and Game.<br>
   Timer will start when the user start to play and Congratulation Message will pop up end of each game with total number of flipped cards lifted. These functions are encourage the players to grade their memory power each time they play this memory game.

   ### Home
   The Home page covers the following section:
   - Header and Navigation Menu
   - Images of Roses
   - Instruction to Play
   - Benefits of Playing Memory Card
   - Play Now Button
   - Footer
   - [Home Page-Ipad-1](docs/image/home-ipad-1.PNG)
   - [Home Page-Ipad-2](docs/image/home-ipad-2.PNG)
   
   ### Game
   The Game Page covers the following section:
  - Header and Navigation Menu
  - Play the game with flipped rose image
  - Timer
  - Start Again Button, with confirmation of Restart the game alert message.
  - Once find all the roses the pop up message with Congratulations message and Total Moves. Ok Button also their to start the game again (or) they can close the popup window using X mark.
  - Footer 

  - [Game Page-Mobile-1](docs/image/game-mobile-1.PNG)
  - [Game Page-Mobile-2](docs/image/game-mobile-2.PNG)
  - [Confirm Restart alert message](docs/image/game-testcase-restart.PNG)

  ### Popup Message
  - [Popup Message](docs/image/popup-message.PNG)

## Strategy
  The website covers all the screen types, such as Pc, Laptop, Tablet and Mobile. The website is easily navigate to all the sections.

  ### UX
  - As a user i would like to know how to play this game.
  - As a user i would like to know the benefits of playing this game.
  - As a user i would expect pictures used in the game to be suitable for all age groups.
  - As a user i would expect encourage messages.
  - As a user i would like to know how long did i take to complete the game.
  - As a user i would like to know how many flip cards are lifted for each game.

  ### Business Vision
  This game is designed for all age group.The Rose picture is choosen to create the pleasant feeling while playing the game.The time function is included in this game to attract people to play this game repeatedly to improve their brain memory.


  ### Purpose of Website
  Inspiration of this project comes from current covid situation where people needs a break between their normal stressful work schedule.This game relaxes people's mind and sharpen their memory power.
  

## Scope
The website covers instruction how to play. Timer function and total flip card functions are used to test how they played this game each time.
### Features
Header and Footer are commenly used in all pages.
  #### Header
  Header is consists of Name and Logo and located on the left side of the page. There are two menu options are available on the right side. The two menu options used are Home and Game.
  #### Footer:
  Footer is consists of Social Networks icons such as Facebook, Twitter and Instagram.
  #### Home Page
  Home page contains pictures of Roses used in the game,Instruction of the game and Benefits of playing the memory game.

  #### Game page
  The Next page is called Game Page, where the game is actually played. In the Game page, Restart button option is available to replay the game. After clicking the restart button, the popup message will appears. Giving an option for the player to either continue the game or Restart the game.
  ### Pop-up Message
  The last part of the game is pop-up message. The game completes with Congratulation popup message. it also provides number of flip cards lifted while playing the game. Ok Button also their to start the game again (or) they can close the popup window using X mark.
  ### Future Features
  - Integrate more games into this website, providing more option to the player.
  - Adding music into each type of game.


  ## Structure
  This project is divided into two main pages. The website was better organised after my mentoring session with my mentor. The website was structured such a way that the users can navigate to find relevant information according to their need.

  ### Wireframes
  Balsamiq Wireframes used for this website.
  <details>
<summary>Home-Page</summary>
<img src="docs/wireframes/home-page.png" width="500">
</details>
<details>
<summary>Game-Page</summary>
<img src="docs/wireframes/game-page.png" width="500">
</details>
<details>
<summary>Model Popup</summary>
<img src="docs/wireframes/model-popup.png" width="500">
</details>
<details>
<summary>Home-Page-Mobile</summary>
<img src="docs/wireframes/home-mobile.png" width="500">
</details>
<details>
<summary>Game-Page-Mobile</summary>
<img src="docs/wireframes/game-mobile.png" width="500">
</details>
<details>
<summary>Model-Popup-Mobile</summary>
<img src="docs/wireframes/model-popup-mobile.png" width="500">
</details>
  

  ### Colours
  I have used warm light and dark colours to create pleasant experience for those people to viewing this website.
  colors used:
  - #fcc685
  - #000000
  - #b60e2a
  - #ffffff
  - #afebf0
  - #4a06b7

  ### Typography
  I have used 'Lobster', cursive and 'Raleway', sans-serif to create this website.

  ## Technologies Used
   - HTML-used for to create the website.
   - CSS- used for style the website.
   - Java Script - JavaScript allows users to interact with web pages.
   - GitHub- to save the project code and host the live  project.
   - GitPod- is an open source platform for automated and ready-to-code.
   - Google Fonts-used for the website looks more beautiful,fast and great typography
   -  Font Awesome - icons used throughout the site.
    Responsive design - To generate the mockup image.
   - Python Tutor - to check how the Java Script code behaves in each line.
   - Dev tools -For inspecting and editing the web code.
## Testing
  ### Code Validation
 - W3 Markup Validation Service- To validate HTML document, i used Validate by direct input, some errors shown, and then i fixed the errors.
W3 HTML Validation Result:<br>
Document checking completed. No errors or warnings to show.
- W3 CSS Validation Service- To validate HTML document, i used validate by direct input, no errors shown in the W3 validation page.
W3 CSS validation Result:
Congratulations! No Error Found.
- Jshint JavaScript Validation - To validate Java Script file. no errors or Warning are shown in both index.js and script.js file in JShint validation Page. But jshint identified a unused variable in the script.js file. But this variable is used in game.html page, and used for Restart onClick button.


  ### Supported Screen and Browsers
  I have used the most common browser to test my website,<br>
   1. Mozilla Firefox 
   2. Google Chrome
   3. Microsoft Edge All the pages Responsive and displaying the website in order.

  ### Responsive Screen
  I have verified the website in various mobiles like Galaxy S9,S3, i phone 6,7,8 and xiaomi max3 and makesure the website works properly.

  ### Features Testing
  ### Home -Actual Test Case
  Four testing options in main page, which are Pop the Rose, Home,Game and Playnow button.<br>
  Pop the Rose heading and Home Navigation are designed to bring the user back to the home page.Testing also proves that these
  options worked as per design. Game navigation and Play Now button are designed to bring the user to the Game page.Testing proves that these options worked as per designs.<br>
  There are three Social media links attached in the both the home and game pages.These social media navigators worked as per design requirements.For example, when click the Facebook button it brings to the Facebook main page.
 - [Home-TestCase-1](docs/image/home-testcase-1.PNG)
 - [Home-TestCase-2](docs/image/home-testcase-2.PNG)

  ### Game -Actual Test Case
  The game page have 12 flip cards. The game is designed to look for a pair of same colour rose images. When same colour of roses lifted the card will remain open. Otherwise both cards will close. The testing result meets the design requirements. The timer option will start when the first card is lifted, and the timer will stop when the last pair of cards choosen correctly. The test results also proofs that the timer concept works properly as described.<br>
  The Start Again button is available to allow the user to restart the game in the middle of the current game. The popup confirm message will appear, allow the user to choose either to move into a new game or continue to the current game. The test proofs that it works as per design.
  - [Game-TestCase-1](docs/image/game-testcase-opencard.PNG)
  - [Game-TestCase-2](docs/image/game-testcase-restart.PNG)

  ### Popup Message - Acutal Test Case
  When the last pair of cards are choosen correctly, the popup message will appear to congrajulate the user with the number of times the cards are lifted.<br>  
  There is a cross X mark option to close the Message box.<br>
 Ok button brings the user to go to game page, and allow the user to play the next game. Test proofs that it wirks as per design.

  - [Popup-TestCase-1](docs/image/popup-testcase.PNG)
  

  ## Bugs
  ### Fixed Bugs
  I have Challenging introducing the time option into the game. The timer starts when the user enters into the game page, although the game is not started and the timer was running incorrectly. Then I managed to resolve this issues with the help of tutor suppor and mentor support.
  ### Unfixed Bugs
  Improvement required as follows:
  1. When we double click the same card twice, the programme behaves incorrectly, such as the card gets stucked.Future work is required to fix this Bug.Instruction is written to makesure the user does not click the same card twice.
  ## Deployment
  First we need to go to github website the create a new repositary using code Institute Template. Followed by giving a new name of the website.Then need to click the create repositary button. After click the button it will bring us to go to another page, which contains the green button labelled as Gitpod.Click the Gitpod button will bring us to the Gitpod Workspace for coding screen.
  ### Gitpod
   Used Gitpod Workspace for coding. To preview the browser window need to type "python3 -m http.server" in the terminal window at the bottom.Afterthat, have to do git add for add files or remove files and do git commit for reasoning and do the git push for git hub repositary website.

  ### Github
  Below the steps for deployment of my Yoga Mindfulness project using github.

  - In Github Repositary, click on Settings tab.
  - Then click on "Pages" tab in the left hand side sidebar.
   - Then under "Source" click the "None" dropdown and select the "Master" branch.
  - Followed by clicking "Save".<br>
  <b>Links added in to the html Page:</b>
  Html: <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
  Html: <link rel="stylesheet" href="assets/css/style.css"><br>
  <b>For JavaScript:</b>
  Html: <script src="https://kit.fontawesome.com/afee0b405c.js" crossorigin="anonymous"></script>
  index.Html: <script src="assets/js/index.js"></script>
  game.Html : <script src="assets/js/script.js"></script>


The above steps have created the website URL https://ksanthanesh.github.io/Pop-the-Rose/.

## Acknowledgement
- I would like to thank my mentor Rohit Sharma and my tutors Kasia for their helpfulness, constructive feedback and guidance when needed.
- I would like to thank the staff and students of Code Institute for their help.
- I also like to thank Slack Community for sharing the open discussion from various students.
- The images on this site have been taken from Google Search and pexels, and used only for education purpose to complete this project.
- https://www.favicon-generator.org/ -Favicon icon created using this website.
- Benefits point are taken from this Website https://www.curiousworld.com/blog/importance-playing-memory-games#:~:text=Playing%20memory%20games%20can%20improve%20other%20brain%20functions%2C,to%20detail.%20Memory%20games%20can%20improve%20visual%20recognition.
- Reference taken from those videos
https://www.youtube.com/watch?v=Y4lOwOOK7yE
https://www.youtube.com/watch?v=ZniVgo8U7ek
https://www.youtube.com/watch?v=tjyDOHzKN0w
- Thanks for Reading my READMe.md file.





