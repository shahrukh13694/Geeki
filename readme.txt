Application Name: Geeki.

Application created by: Shahrukh Bhaidani.

Application overview:
  Geeki is a mobile gaming application developed to enhance and test the knowledge of the users around tools and hardware used in different domains.
  Geeki is a simple game which asks users to identify the correct image from the options given the name of the object which can be a tool/hardware used in a specific field.
  This application can be used by children or adults due to the range of levels offered by the game.
  Users can select the domain for which they are interested in playing the game. The available domains are Medical, Computer and Electrical and Mechanical.
  For each domain, users have 3 levels to complete - Basic, Intermediate and Advanced. The questions can have one of the 3 formats.
    Format 0 - An image of the object is displayed along with 4 options, users have to select the appropriate option.
    Format 1 - Name of a tool is displayed along with 4 images, users have to select the correct image.
    Format 2 - An image of the tool is displayed along with number of dashes and users are to enter the name of the object with the correct spelling.
  Each level has multiple questions and each object repeats randomly in all the 3 formats in the same level.

  How to run:
    To run the application, simply open index.html in a browser window. Recommended browser is Chrome.
    Note: Please do not change the folder structure of images or js files. If changed, please make the corresponding changes
    in gameData.js or index.html.

Major Functions:
  For game progress:
    registerGameProgress() :
    Inside gameProgress.js. This function is called when a question is correctly answered. This function reads the progress from localStorage.
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

    getGameProgressData() :
    This function calculates the number of questions completed and total questions in the domain->level combo.
    It takes parameters as level and domain. It calculates the completed questions by reading localStorage and total questions by reading window.mainData.
    It can be called as getGameProgressData(Basic,Medical), it will return an array where the first element is count of completed questions and second element is count of total questions in current level.
    So it may return [5,10] if 5 questions were completed out of 10 in Medical->Basic combo.
    If level or domain are null, it will return [0,0]

    resetLevel() :
    This function is called when user opts to reset the current level. If the currentLevel is not null, it manipulates localStorage to remove all the progress for the currentLevel.
    Then the updateAllQuestionsList is called. And then the execution is passed on to selectRandomQuestion to determine variables for the next question.
    If for some reason, currentLevel is null (not possible as user has an option to reset level only if a level is set), a message is displayed in the console and execution returns to calling function.

  For UI:
    loadDomainSelection() : Displays a screen with options to select domain.
    loadLevelSelection() : Displays a screen with options to select level.
    displayQuestionPage(questionFormat, questionNumber, options) : Collates all elements required to display a question in the required format on screen.

  For Answer validation:
    checkAnswer() : This function checks if the selected answer and correct answer match or not. Displays a result screen accordingly.

  For random question generation:
    selectRandomQuestion() :
      It first calls the updateRemainingQuestions which updates the list of remaining questions for current domain->level.
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
