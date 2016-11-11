$(document).ready(function(){

var current_score = 0;

function displayScore(){
  $("#score").html(current_score + " Points");
}

$("#plus-five").on("click", function(){
  current_score = current_score + 5;
  displayScore();
});

$("#minus-five").on("click", function(){
  current_score = current_score - 5;
  if (current_score >= 0){
    displayScore();
  } else{
    current_score = 0;
    displayScore();
  }
});

$("#custom-set-score").on("submit", function(event){
  event.preventDefault();
  current_score = parseInt($("#custom-score").val());
  if (current_score >= 0){
    displayScore();
  } else{
    current_score = 0;
  }
});




});
