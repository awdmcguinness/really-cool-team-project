// Click events for index.html train images (1, 2, 3)

var selectedLine = "";

$("#oneTrain").click(function() {
  $("#oneTrainCard").css("display", "block");
  $(".numberChoices").css("display", "none");
});

$("#twoTrain").click(function() {
  $("#twoTrainCard").css("display", "block");
  $(".numberChoices").css("display", "none");
});

$("#threeTrain").click(function() {
  $("#threeTrainCard").css("display", "block");
  $(".numberChoices").css("display", "none");
});

// Click events on "Northbound" clicks

$("#northbound-one").click(function() {
  $("#oneTrainCard").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
  selectedLine = "one-northbound";
});

$("#northbound-two").click(function() {
  $("#twoTrainCard").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
  selectedLine = "two-northbound";
});

$("#northbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
  selectedLine = "three-northbound";
});

// Click events on "Southbound" clicks

$("#southbound-one").click(function() {
  $("#oneTrainCard").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
  selectedLine = "one-southbound";
});

$("#southbound-two").click(function() {
  $("#twoTrainCard").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
  selectedLine = "two-southbound";
});

$("#southbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
  selectedLine = "three-southbound";
});
