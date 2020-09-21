/* This function determines the content to be displayed within the description modal and creates the elements.
Has a close button, read more from source button and a paragraph with description of the tool.
Close button closes the modal. Read more button takes them to the source page where the information is taken from.
*/
function createInfoModal () {
  //console.log("creating modal");

  var modalDiv = createDiv();
  modalDiv.classList.add("modal");
  modalDiv.id = "descriptionModal";

  var modalContentDiv = createDiv();
  modalContentDiv.classList.add("modal-content");

  var closeButtonSpan = createSpan();
  closeButtonSpan.classList.add("close");
  closeButtonSpan.innerHTML = "X";
  closeButtonSpan.onclick = function () {
    modalDiv.style.display = "none";
  }

  var temp = window.mainData[currentDomain][currentLevel];

  var desc = temp[currentQuestion].tool_description;
  var modalParagraph = createParagraph(desc);
  modalParagraph.classList.add("modalDescriptionParagraph");

  modalParagraph2 = createParagraph(" ");

  var sourceButton = createButton("Read full description from source");
  sourceButton.classList.add("sourceButton");
  sourceButton.onclick = function () {
    window.open(temp[currentQuestion].tool_description_source, "_blank");
  }

  modalParagraph2.appendChild(sourceButton);
  modalParagraph.appendChild(modalParagraph2);

  modalContentDiv.appendChild(closeButtonSpan);
  modalContentDiv.appendChild(modalParagraph);
  modalDiv.appendChild(modalContentDiv);
  document.body.appendChild(modalDiv);
  return;
}

// This function simply changes the style of modal element to block, this displays the modal element.
function displayInfoModal () {
  document.getElementById("descriptionModal").style.display = "block";
}


/* This function creates the page for displaying the answer status, image and correct name of the tool.
This function takes in the answerStatus and sets the class of the status element accordingly.
It also display view description button and next question button.
Pressiong the view description button calls the createInfoModal function and next question button calls the selectRandomQuestion function.
*/
function displayDescriptionPage (answerStatus) {
  clearWholePage();
  var descriptionDiv = createDiv();
  descriptionDiv.classList.add("descriptionPage");
  var statusDiv = createDiv();
  statusDiv.classList.add("statusDiv");
  if (answerStatus) {
    statusDiv.innerHTML = "Correct!"
    statusDiv.classList.add("correctStatus");
  }
  else {
    statusDiv.innerHTML = "Incorrect"
    statusDiv.classList.add("incorrectStatus");
  }

  descriptionDiv.appendChild(statusDiv);

  var temp = window.mainData[currentDomain][currentLevel];

  var correctImageDiv = createDiv();
  correctImageDiv.classList.add("CorrectImageDiv");

  var correctImage = createImage(temp[currentQuestion].tool_imgsource);
  correctImage.classList.add("correctImage");

  correctImageDiv.appendChild(correctImage);


  var correctText = createDiv();
  correctText.classList.add("correctText");
  var tn = document.createTextNode(temp[currentQuestion].tool_name);
  correctText.appendChild(tn);

  correctImageDiv.appendChild(correctText);
  descriptionDiv.appendChild(correctImageDiv);

  createInfoModal();

  var div2 = createDiv();
  div2.classList.add("moreButtonsContainer");
  var moreInfoButton = createButton("View description");
  moreInfoButton.classList.add("moreInfo");
  moreInfoButton.onclick = displayInfoModal;

  var nextQuestionButton = createButton("Next Question");
  nextQuestionButton.classList.add("nextQuestion");
  nextQuestionButton.onclick = selectRandomQuestion;

  div2.appendChild(moreInfoButton);
  div2.appendChild(nextQuestionButton);

  descriptionDiv.appendChild(div2);

  document.body.appendChild(descriptionDiv);
}
