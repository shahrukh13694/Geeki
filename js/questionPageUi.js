/*This function creates the UI for question based on the question format. corresponding function is called to do this.
if question format is 0, image is the question and 4 options with image name.
if question format is 1, name of the tool is the question and 4 images are options.
if question format is 2, 1 image is the question and text input is to be taken as answer.
So if questionFormat = 0, it will call questionFormat0(questionNumber, options).
*/

function displayQuestion(questionFormat, questionNumber, options) {
  console.log("displayQuestion is running - " + questionFormat, questionNumber);
  clearWholePage();
  var  fullQuestionScreenDiv = createDiv();
  fullQuestionScreenDiv.classList.add("fullQuestionScreenDiv");
  var displayScreen = null;
  var tempArray = getGameProgressData(currentLevel,currentDomain);
  var string = tempArray[0] + " completed out of "+  tempArray[1] + " total questions in " + currentDomain + " -> " + currentLevel;
  var gameProgressDisplay = createDiv();
  gameProgressDisplay.innerHTML = string;
  gameProgressDisplay.classList.add("levelProgress");
  fullQuestionScreenDiv.appendChild(gameProgressDisplay);
  switch (questionFormat) {
    case 0:
    displayScreen = questionFormat0(questionNumber, options);
    break;
    case 1:
    displayScreen = questionFormat1(questionNumber, options);
    break;
    case 2:
    displayScreen = questionFormat2(questionNumber);
  }
  if (displayScreen != null) {
    var submitButton = createButton ("Check Answer");
    submitButton.id = "submitButton";
    submitButton.classList.add("answerSubmitButton");
    addEventCheckAnswer(submitButton);
    displayScreen.appendChild(submitButton);
    fullQuestionScreenDiv.appendChild(displayScreen);
    document.body.appendChild(fullQuestionScreenDiv);
  }
}

/*This function sets the selectedAnswer variable which has global scope to the option that was selected. So if the option selected was "wheelchair",
selectedAnswer = wheelchair. If user selects another option, it resets the SelectedAnswer variable with new value.
*/
function addUserOptionSelection (option) {
  option.onclick = function() {
    if (selectedAnswer != null) {
      document.getElementById(selectedAnswer).classList.remove("selectedOption");
    }
    if (option.id != null) {
      selectedAnswer = option.id;
      document.getElementById(selectedAnswer).classList.add("selectedOption");
    }
    else {
      console.log("These seems to be an issue with selection, executing function addUserOptionSelection");
    }
  }
}


/* This function creates the elements required to display the question is question format 0.
It returns a div element which has all the required elements as its children.
*/
function questionFormat0 (questionNumber, options) {
  console.log("questionFormat0");

  var temp = window.mainData[currentDomain][currentLevel];
  correctAnswer = temp[questionNumber].tool_name;

  var mainContainer = createDiv();
  mainContainer.classList.add("questionScreen");
  mainContainer.innerHTML = "Select the correct name of the item in the image";

  var questionContainer = createDiv();
  questionContainer.classList.add("qf0_question");

  var questionImg = createImage(temp[questionNumber].tool_imgsource);
  questionImg.classList.add("questionImage");
  questionContainer.appendChild(questionImg);

  mainContainer.appendChild(questionContainer);
  var optionContainer = createDiv();
  optionContainer.classList.add("textOptionContainer");

  var optionDiv;
  //create different divs for options
  for (var i =0; i < options.length; i++) {
    optionDiv = createDiv();
    var t = options[i];
    var tn = document.createTextNode(temp[t].tool_name);
    optionDiv.appendChild(tn);
    optionDiv.classList.add("textOption" + i);
    optionDiv.setAttribute("id", temp[t].tool_name);
    addUserOptionSelection(optionDiv);
    optionContainer.appendChild(optionDiv);
  }

  mainContainer.appendChild(optionContainer);
  return mainContainer;
}

/* This function creates the elements required to display the question is question format 1.
It returns a div element which has all the required elements as its children.
*/
function questionFormat1 (questionNumber, options) {
  console.log("questionFormat1");

  var temp = window.mainData[currentDomain][currentLevel];
  correctAnswer = temp[questionNumber].tool_name;

  var mainContainer = createDiv();
  mainContainer.classList.add("questionScreen");
  mainContainer.innerHTML = "Select the correct image for the given item name";

  var questionContainer = createDiv();
  questionContainer.classList.add("qf1_question");

  var questionText = document.createTextNode(temp[questionNumber].tool_name);
  questionContainer.appendChild(questionText);

  mainContainer.appendChild(questionContainer);
  var optionContainer = createDiv();
  optionContainer.classList.add("ImageOptionContainer");

  var optionDiv;
  //create different divs for options
  for (var i =0; i < options.length; i++) {
    var t = options[i];
    optionDiv = createImage(temp[t].tool_imgsource);
    optionDiv.classList.add("imgOption"+i);
    optionDiv.setAttribute("id", temp[t].tool_name);
    addUserOptionSelection(optionDiv);
    optionContainer.appendChild(optionDiv);
  }

  mainContainer.appendChild(optionContainer);
  return mainContainer;
}

/* This function creates the elements required to display the question is question format 2.
It returns a div element which has all the required elements as its children.
This function does not take options as parameter because it does not provide any options.
*/
function questionFormat2 (questionNumber) {
  console.log("questionFormat2");
  var temp = window.mainData[currentDomain][currentLevel];

  correctAnswer = temp[questionNumber].tool_name;

  var mainContainer = createDiv();
  mainContainer.classList.add("questionScreen");
  mainContainer.innerHTML = "Enter the name of the item in the given image with correct spelling";

  var questionContainer = createDiv();
  questionContainer.classList.add("qf2_question");


  var questionImg = createImage(temp[questionNumber].tool_imgsource);
  questionImg.classList.add("questionImage");
  questionContainer.appendChild(questionImg);

  mainContainer.appendChild(questionContainer);

  var answer = temp[questionNumber].tool_name;
  var div3 = createDiv();
  div3.classList.add("answerTextBoxDiv");
  var answerTextBox = createTextInput();
  answerTextBox.setAttribute("maxlength",30);   // Set the maximum length of input by a user
  answerTextBox.id = "answerTextBox";
  answerTextBox.classList.add("answerTextBox");
  answerTextBox.setAttribute("placeholder", "Write here...")
  checkInputTextBoxChar(answerTextBox);   // Call event handler for checking if all the characters entered are either letters, spaces or numbers.
  div3.appendChild(answerTextBox);
  mainContainer.appendChild(div3);
  return mainContainer;
}
