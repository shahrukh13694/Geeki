/* This function checks if the key entered is either a letter, number or space and no other character. If any other character key is pressed, it will not be allowed to enter.
Restricting the user from entering special characters so that I don't have to check anything and don't have to worry about showing an error message.
referenced from - https://stackoverflow.com/questions/906190/javascript-validation-block-special-characters
*/
function checkInputTextBoxChar(inputObject) {
    inputObject.onkeypress = function(e) {
      //console.log("checkInputTextBoxChar is running");
      document.all ? k = e.keyCode : k = e.which;
      return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
}

/* This function is called everytime check Answer button is pressed. It determines if an option is selected for question format 0 and 1 or
if the length of the input is more than 0 in case of question question format 2. If an answer is entered in the text box, selected answer is set to the value of the text box.
If selectedAnswer is null, meaning no option is selected or no value is entered, it sets the class as noOption which plays a subtle animation
depicting that this operation cannot be proceeded.
If selectedAnswer is not null, execution is passed to checkAnswer() function.
*/
function addEventCheckAnswer (button) {
  button.onclick = function (e) {
    //console.log(randomQuestionFormat, currentQuestion);
    e.preventDefault;
    if (randomQuestionFormat == 2) {
      var answerTextBox = document.getElementById("answerTextBox");
      if (answerTextBox.value.length > 0 ) selectedAnswer = answerTextBox.value;
    }
    if (selectedAnswer == null) {
      button.classList.remove("noOption");
      void button.offsetWidth;                     // Important line for retriggering animation repeatedly on the button. Referenced from -  https://css-tricks.com/restart-css-animation/
      button.classList.add("noOption");
      //console.log("error");
    }
    else {
      button.classList.remove("noOption");
      checkAnswer();
    }
  }
}

/* This function checks if the value of selected answer and correct answer is same. Both are converted to lowercase and any spaces in between are removed before checking.
If answer is correct, answerStatus is set to true, else false. SelectedAnswer = "C O M put er" and correctAnswer = "computer", answerStatus = true.
Control is passsed to displayDescriptionPage function which takes in the answerStatus as a parameter.
*/
function checkAnswer () {
  var answerStatus = false;  // false is incorrect.
  modCorrectAnswer = correctAnswer.toLowerCase().replace(/\s/g,'');
  console.log(modCorrectAnswer);
  modSelectedAnswer = selectedAnswer.toLowerCase().replace(/\s/g,'');
  console.log(modSelectedAnswer);

  console.log("selected " + selectedAnswer + " Correct " + correctAnswer);
  if (selectedAnswer == correctAnswer || modSelectedAnswer == modCorrectAnswer) {
    answerStatus = true;
    registerGameProgress();
  }
  else {
    answerStatus = false;
  }
  displayDescriptionPage(answerStatus);
}
