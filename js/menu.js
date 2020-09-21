/* This function is called when any button on the sidebar is clicked.
It calls the corresponding function based on which link was clicked.
Takes the div element that was clicked and the link name of that div.
*/
function addEventHandlerSidebarClick (div, link) {
  div.onclick = function () {
    switch (link) {
      case "About":
      displayInfoModal2();
      break;
      case "Home":
      loadHomePage();
      break;
      case "Reset Current Level":
      resetLevel();
      break;
      case "Start New Game":
      resetFullGameProgress();
      break;
      case "Change Domain":
      loadDomainSelection();
      break;
      case "Change Level":
      loadLevelSelection();
      break;
    }
  }
}

/* This function creates the sidebar menu. It sets the links to be displayed in the sidebar menu.
Reset level and change level are only displayed if currentLevel is set.
Uses a loop to create div elements for the links.
*/
function createSidebar () {
  var sidebar = createDiv();
  sidebar.classList.add("sidebar");
  sidebar.id = "mySidebar";

  var closeButton = createDiv();
  closeButton.classList.add("closebtn");
  closeButton.innerHTML = "x";
  sidebar.appendChild(closeButton);
  closeButton.onclick = closeSidebar;

  var sidebarLinks = ["Home", "About", "Change Domain", "Start New Game"];
  if (currentLevel != null) {
    sidebarLinks.push("Change Level");
    sidebarLinks.push("Reset Current Level");
  }
  for (var i=0; i < sidebarLinks.length; i++) {
    var div = createDiv();
    div.classList.add("sidebarLinks");
    div.id = sidebarLinks[i];
    div.innerHTML = sidebarLinks[i];
    addEventHandlerSidebarClick(div, sidebarLinks[i]);
    sidebar.appendChild(div);
  }
  document.body.appendChild(sidebar);
}

// This function is called when the top-left toggle menu div is pressed and it set the width of the sidebar to 250px.
function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
}

// This function is called when the div containing 'x' button or close button is pressed. It sets the width of the sidebar to 0.
function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}
