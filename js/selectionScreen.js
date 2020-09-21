/*This function is an event handler for domain selection. This function sets the currentDomain which has global scope.
This function takes in the button element that was clicked and the domain.
This function then passes the control to loadLevelSelection selection which displays levelSelection screen.
*/
function addEventHandlerForDomainSelection(button, domain) {
  button.onclick = function() {
    currentDomain = domain;
    loadLevelSelection();
  };
}

/* This function displays a page with buttons, one for each domain listed in window.gameDomains.
This function also displays information on how many questions are complete and total number of questions.
The control is passed to the event handler function when any of these buttons are clicked.
*/
function loadDomainSelection () {
  currentDomain = null;
  console.log("loadDomainSelection is running");
  clearWholePage();
  var fullPageDiv = createDiv();
  var temp = calculateFullGameProgress();
  fullPageDiv.classList.add("domainSelectionFullPage");
  fullPageDiv.appendChild(temp);
  var div = createDiv();
  div.setAttribute("class", "three_buttons");
  div.innerHTML = "Select Domain";
  for (var i in window.gameDomains) {
    button = createButton(window.gameDomains[i]);
    button.setAttribute("id", window.gameDomains[i]);
    button.classList.add("domain_selection_button");
    button.value = window.gameDomains[i];
    addEventHandlerForDomainSelection(button, window.gameDomains[i]);
    div.appendChild(button);
  }
  fullPageDiv.appendChild(div);
  document.body.appendChild(fullPageDiv);
}

/*This function is an event handler for level selection. This function sets the currentLevel which has global scope.
This function takes in the button element that was clicked and the level.
This function calls the updateAllQuestionsList function passing the currentDomain and currentLevel as parameters.
This function then passes the control to selectRandomQuestion which determines which question is to be displayed in which format and which
options are to be given.
*/
function addEventHandlerForLevelSelection(button, level) {
  button.onclick = function() {
    currentLevel = level;
    switch (currentLevel) {
      case "Basic":
      currentLevelNum = 0;
      break;
      case "Intermediate":
      currentLevelNum = 1;
      break;
      case "Advanced":
      currentLevelNum = 2;
    }
    updateAllQuestionsList(currentDomain, currentLevel);
    selectRandomQuestion();
  };
}

/* This function displays a page with buttons, one for each level listed in window.gameLevels.
This function displays the game progress for the currently selected domain. So if 5 questions are completed from total 10 questions in Medical,
pages displays this information. It calls getGameProgressData to calculate this.
The control is passed to the event handler function when any of these buttons are clicked.
*/
function loadLevelSelection () {
  currentLevel = null;
  console.log("loadLevelSelection is running");
  clearWholePage();

  var fullPageDiv = createDiv();

  var total = 0;
  var completed = 0;
  for (var i = 0; i < window.gameLevels.length; i++) {
    var temp = getGameProgressData(window.gameLevels[i], currentDomain);
    completed += temp[0];
    total += temp[1];
  }

  fullPageDiv.classList.add("levelSelectionFullPage");
  var div1 = createDiv();
  div1.classList.add("displayGameProgress");
  var string = completed + " completed out of " + total + " total questions in " + currentDomain;
  div1.innerHTML = string;
  fullPageDiv.appendChild(div1);
  var div = createDiv();
  div.classList.add("three_buttons");
  div.innerHTML = "Select Level";
  for (var i in window.gameLevels) {
    button = createButton(window.gameLevels[i]);
    button.setAttribute("id", window.gameLevels[i]);
    button.classList.add("level_selection_button");
    button.value = window.gameLevels[i];
    addEventHandlerForLevelSelection(button, window.gameLevels[i]);
    div.appendChild(button);
  }
  fullPageDiv.appendChild(div);
  document.body.appendChild(fullPageDiv);
}
