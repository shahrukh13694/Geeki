/* This function displays a full page modal which has high-level details about the application, author.
It also has buttons that display the licenses and changelog text document.
*/

function displayAboutPage () {
  var modalDiv = createDiv();
  modalDiv.classList.add("modal2");
  modalDiv.id = "aboutModal";

  var modalContentDiv = createDiv();
  modalContentDiv.classList.add("modal-content2");

  var closeButtonSpan = createSpan();
  closeButtonSpan.classList.add("close2");
  closeButtonSpan.innerHTML = "X";
  closeButtonSpan.onclick = function () {
    modalDiv.style.display = "none";
  }
  modalContentDiv.appendChild(closeButtonSpan);

  var h2 = createHeading(2,"Application Overview");
  h2.classList.add("headingOverview");
  modalContentDiv.appendChild(h2);

  var str1 = "Geeki is a mobile gaming application to be developed to enhance and test the knowledge of the users around tools and hardware used in different domains. Geeki is a simple game which asks users to identify the correct image from the options given the name of the object which can be a tool/hardware used in a specific field. This application can be used by children or adults due to the range of levels offered by the game.";
  var p1 = createParagraph(str1);
  p1.classList.add("aboutModalPara");
  modalContentDiv.appendChild(p1);

  var str2 = "Users can select the domain for which they are interested in playing the game. The available domains are Medical, Computer and Electrical and Mechanical. ";
  str2 = str2 + "For each domain, users have 3 levels to complete - Basic, Intermediate and Advanced. The questions can have one of the 3 formats.";
  str2 = str2 + "Format 0 - An image of the object is displayed along with 4 options, users have to select the appropriate option. Format 1 - Name of a tool is displayed along with 4 images, users have to select the correct image. Format 2 -  An image of the tool is displayed along with number of dashes and users are to enter the name of the object with the correct spelling.";
  str2 = str2 + "Each level has multiple questions and each object repeats randomly in all the 3 formats in the same level.";
  var p2 = createParagraph(str2);
  p2.classList.add("aboutModalPara2");
  modalContentDiv.appendChild(p2);

  var h22 = createHeading(2,"Licenses");
  h22.classList.add("licensesHeading");
  modalContentDiv.appendChild(h22);

  var str4 = "All images used in the application are CC0 or public domain and do not require any attribution.";
  var p4 = createParagraph(str4);
  modalContentDiv.appendChild(p4);

  var licenseButton = createButton("Read license.txt file");
  licenseButton.classList.add("licenseButton");
  licenseButton.onclick = function () {
    window.open("licenses.txt", "_blank");
  }

  modalContentDiv.appendChild(licenseButton);

  var str3 = "Created by Shahrukh Bhaidani. SID - 218519473";
  var p3 = createParagraph(str3);
  p3.classList.add("createdBy");
  modalContentDiv.appendChild(p3);

  modalDiv.appendChild(modalContentDiv);
  return modalDiv;
}

// This function simply changes the style of modal element to block, this displays the modal element.
function displayInfoModal2 () {
  var div = displayAboutPage();
  closeSidebar();
  document.body.appendChild(div);
  div.style.display = "block";

}

/* This page dispays that the currently selected level has no more remaining questions to be answered.
It gives the user option to select another level or another domain.
Or user can reset the currently selected level. Based on which button is clicked, corresponding function is called.
*/
function displayLevelCompletePage () {
  clearWholePage();
  var levelCompletePageDiv = createDiv();
  levelCompletePageDiv.classList.add("levelCompletePageContainer");

  var levelCompleteDiv = createDiv();
  levelCompleteDiv.classList.add("levelCompleteDiv");
  levelCompletePageDiv.appendChild(levelCompleteDiv);


  levelCompleteDiv.innerHTML = "Level Complete, select another level or domain. Or you can restart this level";
  var levelSelectionButton = createButton("Select another level");
  levelSelectionButton.classList.add("levelSelectionButton");
  levelSelectionButton.onclick = loadLevelSelection;

  levelCompletePageDiv.appendChild(levelSelectionButton);

  var domainSelectionButton = createButton("Select another domain");
  domainSelectionButton.classList.add("domainSelectionButton");
  domainSelectionButton.onclick = loadDomainSelection;

  levelCompletePageDiv.appendChild(domainSelectionButton);

  var resetLevelButton = createButton("Reset Level");
  resetLevelButton.classList.add("resetLevelButton");
  resetLevelButton.onclick = resetLevel;
  levelCompletePageDiv.appendChild(resetLevelButton);

  document.body.appendChild(levelCompletePageDiv);
}
