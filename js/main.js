var currentDomain; // holds the name of the currently active domain, e.g. currentDomain = Medical.
var currentLevel; // holds the name of the currently active level, e.g. currentLevel = Basic.
var currentQuestion = null; // holds the index of the currenly active question, e.g. currentQuestion = 4.
var randomQuestionFormat; // holds the question format number of the currently active question, e.g. randomQuestionFormat = 1, can have values 0,1,2 only.
var currentLevelNum; // holds the index of the currently active level, so if currentLevel = Basic, currentLevelNum = 0.
var correctAnswer = null;  //Holds the correct name of the tool for the current question.
var selectedAnswer = null;  // Holds the selected option.
var remainingQuestions = []; // Holds a list of remaining questions.
var allGameQuestionsList =[]; // Holds a list of all questions in the current domain and level.
var allGameQuestionsListCopy =[]; // Holds a copy of list of all questions in the current domain and level.

/* This function clears the full screen when called. It then generates the header and the top-left toggle menu button.
When the menu button is clicked, it calls the openSidebar function which displays the sidebar menu.
This function always returns 0 to pass the execution back to the calling function.
*/
function clearWholePage () {
  console.log("Clearing whole screen");
  document.body.innerHTML = "";
  var header = createDiv();
  header.classList.add("headerContainer");

  var sidebarButton = createDiv();
  sidebarButton.classList.add("openbtn");
  sidebarButton.innerHTML = "|||";
  sidebarButton.onclick = openSidebar;
  header.appendChild(sidebarButton);

  var heading = createDiv();
  heading.innerHTML = "Geeki";
  heading.classList.add("header");  // The header class will always stick to the top.
  header.appendChild(heading);

  createSidebar();

  document.body.appendChild(header);
  return 0;
}


/* Generates a random number except for the used indexes. Used by selectRandomQuestion to generate 3 random indexes except for the already populated options passed.
So if we were to generate a random number between 0 and 9 usedIndexes were [0,1,3], this function would be called as getRandomIndex([0,1,3],9), it would return a single integer.
It will generate a random number between 0 and 9, say 4 and check if it exists in the usedIndexes, if it doesn't, it returns that number.
referenced from - https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values
*/
function getRandomIndex(usedIndexs, maxIndex) {
    var result = 0;
    var min = 0;
    var max = maxIndex - 1;
    var index = Math.floor(Math.random()*(max-min+1)+min);

    while(usedIndexs.indexOf(index) > -1) {
        if (index < max) {
            index++;
        } else {
          index = 0;
        }
    }
    return index;
}

/*This function takes an array, e.g. [0,1,2,3] and randomly shuffles it. It returns the shuffled array, e.g. [3,1,0,2].
referenced from - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array.
*/
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

/* This function calculates the difference between first and the second array.
So if first array is [0,1,2,3,4] and second array is [0,2,4] it will return [1,3].
If the second array has nothing, it skips all other operations and return original first array.
*/
function difference(first, second) {
  if (second != null) {
    for (var i=0; i<second.length; i++) {
      var index = undefined;
      while ((index = first.indexOf(second[i])) !== -1) {
          first.splice(index, 1);
      }
    }
  }
  return first;
}

/* It first calls the updateRemainingQuestions which updates the list of remaining questions for current domain->level.
This is the main function responsible for setting the question to be asked,
question format the question is to be displayed in, options to be displayed in the question.
All these are randomly selected. The currentQuestion (or next question to be displayed) is selected randomly from the remainingQuestions array.
If all the questions are complete in the current domain->level, levelcomplete page is displayed.
All the remaining question formats are determined for the current question. Then a question format is randomly selected from those question format.
The answer of the currentQuestion is pushed into the options array first and then 3 options are randomly displayed from current domain->level.
Then, the options array is shuffled to randomize the correct answer number (otherwise the first option will always be the correct answer).
displayQuestion is called by passing the question format selected, the current question and options array.
So, if currentLevel = Basic and currentDomain = Medical, currentQuestion = 4, randomQuestionFormat = 1, options array will contain [4, 1, 3, 6].
displayQuestion(1, 4, [3,1,4,6]) will be called.
*/
function selectRandomQuestion() {
  updateRemainingQuestions();
  selectedAnswer = null;
  currentQuestion = null;
  randomQuestionFormat = null;
  //console.log(remainingQuestions);
  var temp = window.mainData[currentDomain][currentLevel];
  var options = [];
  var ci = Math.floor(Math.random() * remainingQuestions.length);
  currentQuestion = remainingQuestions[ci];

  if (currentQuestion === undefined) {
    displayLevelCompletePage();
  }
  else {
    var temp2 = getRemainingQuestionFormat();

    var qfi = Math.floor(Math.random() * temp2.length);
    randomQuestionFormat = temp2[qfi];

    options.push(currentQuestion);

    while (options.length < 4) {
        options.push(getRandomIndex(options, temp.length));
      }

    var randomOptions = shuffle(options);
    //console.log(options);
    //console.log(randomOptions);
    displayQuestion(randomQuestionFormat, currentQuestion, options);
  }
}

/* This function calls the clearWholePage page function first and cleats the screen.
Then it creates a div for welcome message and creates a button to start playing the game.
On button click, the loadDomainSelection function is called which in turn loads the domain selection page.
*/
function loadHomePage () {
  clearWholePage();
  console.log("Loading home page");
  var div = createDiv();
  var welcome = createHeading(2, "Welcome User");
  welcome.setAttribute("class", "welcome_message");
  div.appendChild(welcome);
  var button = createButton ("Start Game");
  button.classList.add("button_style1", "pulse");
  div.appendChild(button);
  button.onclick = loadDomainSelection;
  document.body.appendChild(div);
}


/* This is the first function that will run. This function sets all the global variables to null and empties all the arrays.
This function calls the setGameProgress and then loads the home page.
*/
function loadApplication () {
  console.log("Geeki is running, resetting all variables.");
  remainingQuestions = [];
  currentDomain = null;;
  currentLevel = null;
  currentQuestion = null;
  randomQuestionFormat = null;
  currentLevelNum = null;
  correctAnswer = null;  //Holds the correct name of the tool for the currect question.
  selectedAnswer = null;  // Holds the selected option.
  remainingQuestions = []; // Holds a list of remaining questions
  allGameQuestionsList =[]; // Holds a list of all questions in the current domain and level.
  setGameProgress();
  loadHomePage();
}

window.onload = loadApplication;
