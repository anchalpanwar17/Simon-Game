var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;

var started = false;

$(document).on("keydown", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  gamePattern.push(randomChosenColor);

  console.log(gamePattern);
  // console.log(randomChosenColor);

  playSound(randomChosenColor);
}

$(".btn").on("click", function (event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  playSound(userChosenColor);

  $("#" + userChosenColor).addClass("pressed");

  setTimeout(() => {
    $("#" + userChosenColor).removeClass("pressed");
  }, 100);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 2000);
    } else {
      console.log("wrong");
    }
  } else {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key To Restart");

    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 1000);

    startOver();
  }
}

function startOver() {
//   $("body").on("keydown", function () {
    started = false;
    userClickedPattern = [];
    level = 0;
//   });
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// switch (randomChosenColor) {
//     case "green":
//         var green = new Audio("sounds/green.mp3");
//         green.play();
//         console.log(randomChosenColor);
//         break;

//     case "red":
//         var red = new Audio("sounds/red.mp3");
//         red.play();
//         console.log(randomChosenColor);
//         break;

//     case "yellow":
//         var yellow = new Audio("sounds/yellow.mp3");
//         yellow.play();
//         console.log(randomChosenColor);
//         break;

//     case "blue":
//         var blue = new Audio("sounds/blue.mp3");
//         blue.play();
//         console.log(randomChosenColor);
//         break;

//     default:console.log("xxxxxxx")
//         break;
// }

// $(document).ready(function(){
//     $("#green").on("click", function(){
//         var green = new Audio("sounds/green.mp3");
//         green.play();
//     })

//     $("#red").on("click", function(){
//         var red = new Audio("sounds/red.mp3");
//         red.play();
//     })

//     $("#yellow").on("click", function(){
//         var yellow = new Audio("sounds/yellow.mp3");
//         yellow.play();
//     })

//     $("#blue").on("click", function(){
//         var blue = new Audio("sounds/blue.mp3");
//         blue.play();
//     })
// });
