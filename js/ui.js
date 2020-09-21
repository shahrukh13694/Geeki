// Create a paragraph with passed text as parameter.
function createParagraph (text) {
  //console.log("Creating a paragraph");
  var element = document.createElement("P");
  var textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
}

// Create span element.
function createSpan () {
  //console.log("Creating a span");
  var element = document.createElement("SPAN");
  return element;
}

// Create button with passed text as parameter.
function createButton (text) {
  //console.log("Creating a button");
  var element = document.createElement("BUTTON");
  var textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
}

// Create an heading element based on the number passed in the first parameter and heading will have text passed in the second parameter.
function createHeading (headingNumber, text) {
  //console.log("Creating a heading : H" + headingNumber);
  if (headingNumber > 6 || headingNumber < 1) {
    console.log("Error creating heading : H" + headingNumber + ". Creating H1 instead.");
    headingNumber = 1;
    }
  var temp = "H" + headingNumber;
  var element = document.createElement(temp);
  var textNode = document.createTextNode(text);
  element.appendChild(textNode);
  return element;
}

// Create a div and return element.
function createDiv () {
  //console.log("Creating a div");
  var element = document.createElement("DIV");
  return element;
}

// Create a TextInput and return element.
function createTextInput () {
  //console.log("Creating a text input");
  var element = document.createElement("INPUT");
  element.setAttribute("type", "text");
  return element;
}

// Create an IMG tag, source of the image is received in the parameter.
function createImage (imgSource) {
  //console.log("createImage is running");
  var image = document.createElement("img");
  image.src = imgSource;
  return image;
}
