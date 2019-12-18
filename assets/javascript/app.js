// Click events for index.html train images (1, 2, 3)

$("#oneTrain").click(function() {
  $("#oneTrainCard").css("display", "block");
  $(".numberChoices").css("display", "none");
  $("#tweets").css("display", "none");
  $("#backnav").css("display", "block");
});

$("#twoTrain").click(function() {
  $("#twoTrainCard").css("display", "block");
  $(".numberChoices").css("display", "none");
  $("#tweets").css("display", "none");
  $("#backnav").css("display", "block");
});

$("#threeTrain").click(function() {
  $("#threeTrainCard").css("display", "block");
  $(".numberChoices").css("display", "none");
  $("#tweets").css("display", "none");
  $("#backnav").css("display", "block");
});

// Click events on "Northbound" clicks

$("#northbound-one").click(function() {
  $("#oneTrainCard").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
});

$("#northbound-two").click(function() {
  $("#twoTrainCard").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
});

$("#northbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
});

// Click events on "Southbound" clicks

$("#southbound-one").click(function() {
  $("#oneTrainCard").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
});

$("#southbound-two").click(function() {
  $("#twoTrainCard").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
});

$("#southbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
});
//back button navigation
$("#backnav").click(function() {
  $(".numberChoices").css("display", "flex");
  $("#oneTrainCard").css("display", "none");
  $("#twoTrainCard").css("display", "none");
  $("#threeTrainCard").css("display", "none");
  $("#backnav").css("display", "none");
});
