/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var submit = $(".submit-btn");
var displayMessage = $(".display-message");

submit.on("click", addMessage);

function addMessage() {
  displayMessage.html("");
  var userName = $(".name-input").val();
  var lessonType = $("#lesson-style :selected").text();
  var techLevel = $("#tech-skill :selected").text();
  var userInfo = {
    userName: userName,
    lessonType: lessonType,
    techLevel: techLevel
  };

  showMessage(userInfo);
  addButton(userInfo);
}

function showMessage(user) {
  displayMessage.append(`
    <div class= "message">
      <p> Thanks ${user.userName}! Click the button to view your suggested lesson!</p>
    </div>
    `);
}

function addButton(user) {
  if (user.lessonType === "Synchronous Learning") {
    console.log("synchronous");
    displayMessage.append(`
          <a class="lessonLink" href="meeting.html">ZOOM MEETING TUTORIAL</a>
        `);
  } else if (
    user.lessonType === "Asynchronous Learning" &&
    user.techLevel === "Advanced"
  ) {
    displayMessage.append(`
          <a class="lessonLink" href="recording.html">SCREEN RECORDING TUTORIAL</a>
      `);
  } else {
    displayMessage.append(`
          <a class="lessonLink" href="lessonplan.html">GOOGLE SLIDES THEME LESSON TUTORIAL</a>
        `);
  }
}
