/* This function is called when a question is correctly answered. This function reads the progress from localStorage.
Then it checks if the question number that is currenly answered exists in the data structure of localStorage.
IF it exists, the questionNumber array is updated to push the currentQuestion's question format. Then the length of the questionFormat array is checked.
If the length is 3, meaning this question has been asked in all the 3 formats, then the questionNumber is marked complete by making completed = true in localStorage.
If the question number does not exist in the data structure, an object is built having following data:
[
  questionNumber: currentQuestion,
  questionFormat: [0] if the current question format is 0.
  completed: false
]
Then this array is pushed into the already existing data and localStorage is updated.
This function always returns 0 to pass the execution back to calling function.
*/
function registerGameProgress () {
  //console.log("register game progress is running");
  var temp = JSON.parse(window.localStorage.getItem("gameProgress"));
  var temp2 = temp[currentDomain][currentLevel];
  for (var i = 0; i < temp2.length; i++) {
    if (temp2[i].questionNumber == currentQuestion) {
      //console.log("found this question in gameProgress " + currentQuestion);
      temp2[i].questionFormat.push(randomQuestionFormat);
      if (temp2[i].questionFormat.length == 3) {
        temp2[i].completed = true;
      }
      break;                      // If the current question is already listed in the gameProgress.
    }
  }
  if (i == temp2.length) {        // If the loop runs out and doesn't break, currentQuestion is not listed in game progress, so make an object for that question.
    var obj = {};
    var temArr = [];
    temArr.push(randomQuestionFormat);
    obj["questionNumber"] = currentQuestion;
    obj["questionFormat"] = temArr;
    obj["completed"] = false;
    var tl = temp2.length;
    temp2[tl] = obj;
  }
  temp[currentDomain][currentLevel] = temp2;
  //console.log(temp);
  window.localStorage.setItem("gameProgress", JSON.stringify(temp));
  return 0;
}

/* This function populates the array allGameQuestionsList which has a global scope with the number of total questions in the current
domain->level combo.
So, if currentDomain=Medical and currentLevel=Basic, it populates the array with the number of questions in the Medical->Basic combo.
This function always returns 0 to pass the execution back to calling function.
*/
function updateAllQuestionsList (domain , level) {
  allGameQuestionsList = [];
  var temp = window.mainData[domain][level];
  for (var k =0; k < temp.length; k++) {
    allGameQuestionsList.push(k);
  }
  allGameQuestionsListCopy = allGameQuestionsList;
  return 0;
}

/* This function checks if the gameProgress exists in localStorage of the browser.
If the gameProgress exists, it does nothing.
If the gameProgress does not exist, it sets the localStorage with a blank object template window.myQuestionsCompleted.
This object is modified by different function to update game progress.
This function always returns 0 to pass the execution back to calling function.
*/
function setGameProgress() {
    var t = window.localStorage.getItem("gameProgress");
    if (t == null) {
      console.log("New Player, setting game progress");
      window.localStorage.setItem("gameProgress",JSON.stringify(window.myQuestionsCompleted));
      console.log(JSON.stringify(window.myQuestionsCompleted));
    }
    else {
      console.log("returning Player");
      console.log(JSON.stringify(window.myQuestionsCompleted));
    }
    return 0;
}

/* This function calculates the number of questions completed and total questions in the domain->level combo.
It takes parameters as level and domain. It calculates the completed questions by reading localStorage and total questions by reading window.mainData.
It can be called as getGameProgressData(Basic,Medical), it will return an array where the first element is count of completed questions and second element is count of total questions in current level.
So it may return [5,10] if 5 questions were completed out of 10 in Medical->Basic combo.
If level or domain are null, it will return [0,0]
*/
function getGameProgressData (level, domain) {
  if (level != null && domain != null) {
    var totalQuestionsInCurrentLevel = 0;
    var temp = window.mainData[domain][level];
    totalQuestionsInCurrentLevel += temp.length*3;
    var temp = JSON.parse(window.localStorage.getItem("gameProgress"));
    var temp2 = temp[domain][level];
    var completeQuestionsCount = 0;
    for (var i = 0; i < temp2.length; i++) {
      completeQuestionsCount += temp2[i].questionFormat.length;
    }
    return [completeQuestionsCount,totalQuestionsInCurrentLevel];
  }
  else {
    return [0,0];
  }
}

/* This function calculates the number of completed questions and total questions in the whole game.
Completed questions are calculated using localStorage and total questions are calculated using window.mainData
It returns a div element with string e.g. '5 completed questions out of 100 total questions in full game'
*/
function calculateFullGameProgress () {
  var temp;
  var temp2;
  var total=0;
  var completed = 0;
  for (var i = 0; i < window.gameDomains.length; i++) {
    for (var j = 0; j < window.gameLevels.length; j++) {
      temp = JSON.parse(window.localStorage.getItem("gameProgress"));
      temp2 = temp[window.gameDomains[i]][window.gameLevels[j]];
      for (var k = 0; k < temp2.length; k++) {
        completed += temp2[k].questionFormat.length;
      }

      total += window.mainData[window.gameDomains[i]][window.gameLevels[j]].length*3;
    }
  }
  var div = createDiv();
  div.classList.add("displayGameProgress");
  var string = completed + " completed out of " + total + " total questions in full game";
  div.innerHTML = string;
  return div;
}

/* This function updates the remainingQuestions array which has global scope.
This is done by first updating the completedQuestionsList using the localStorage.
Then a difference is calculated between allGameQuestionsList and completedQuestionsList. The result of the difference function is the list of remainingQuestions.
This function always returns 0 to pass the execution back to calling function.
*/
function updateRemainingQuestions () {
  remainingQuestions = [];
  var completedQuestionsList = [];
  var temp1 = JSON.parse(window.localStorage.getItem("gameProgress"));
  //console.log(temp1);
  var temp2 = temp1[currentDomain][currentLevel];

  //make a list of all questions completed for current domain-level combo
  for (var i =0; i < temp2.length; i++) {
    if (temp2[i].completed) {
      completedQuestionsList.push(temp2[i].questionNumber);
    }
  }

  //console.log(completedQuestionsList);
  remainingQuestions = difference(allGameQuestionsList,completedQuestionsList);
  //console.log(remainingQuestions + " remaining game");
  allGameQuestionsList = allGameQuestionsListCopy;
  return 0;
}

/*This function returns the remaining question format for the current question. So if for question 1, questionFormat [0,1] are completed, it will return [2].
If the currentQuestion is not found in the localStorage, that means that no question format of this question is complete, so return allQuestionFormat, i.e. [0,1,2]
*/
function getRemainingQuestionFormat () {
  var tempCompletedQuestionFormat = [];
  var allQuestionFormat = [0,1,2];
  var temp = JSON.parse(window.localStorage.getItem("gameProgress"));
  var temp2 = temp[currentDomain][currentLevel];
  for (var i = 0; i < temp2.length; i++) {
    if (temp2[i].questionNumber == currentQuestion) {
      console.log("found this question in gameProgress " + currentQuestion);
      tempCompletedQuestionFormat = temp2[i].questionFormat;
      var temp3 = difference(allQuestionFormat, tempCompletedQuestionFormat);
      return temp3;
    }
  }
  return allQuestionFormat;
}

/* This function is called when user tries to reset full game. This function tries to remove the gameProgress object from localStorage.
If the execution is not successful, that means that there is no game progress found in localStorage. So the game should progress as it is.
This function then restarts the application by calling loadApplication.
*/
function resetFullGameProgress () {
  try {
    window.localStorage.removeItem("gameProgress");
  } catch (error) {
    console.log("No Game Progress Found, starting new game.");
  }
  loadApplication();
}

/* This function is called when user opts to reset the current level. If the currentLevel is not null, it manipulates localStorage to remove all the progress for the currentLevel.
Then the updateAllQuestionsList is called. And then the execution is passed on to selectRandomQuestion to determine variables for the next question.
If for some reason, currentLevel is null (not possible as user has an option to reset level only if a level is set), a message is displayed in the console and execution returns to calling function.
*/
function resetLevel () {
  if (currentLevel != null) {
    var temp = JSON.parse(window.localStorage.getItem("gameProgress"));
    var temp2 = temp[currentDomain][currentLevel];
    temp2 = [];
    temp[currentDomain][currentLevel] = temp2;
    console.log(temp);
    console.log("Level Reset Complete for - " + currentDomain, currentLevel);
    window.localStorage.setItem("gameProgress", JSON.stringify(temp));
    currentQuestion = null;
    remainingQuestions = [];
    updateAllQuestionsList(currentDomain, currentLevel);
    selectRandomQuestion();
  } else {
    console.log("No level is selected yet");
    return 0;
  }
}
