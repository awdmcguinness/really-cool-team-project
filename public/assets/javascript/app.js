// Click events for index.html train images (1, 2, 3)

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
  localStorage.setItem("selectedLine", "one-northbound");
});

$("#northbound-two").click(function() {
  $("#twoTrainCard").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
  localStorage.setItem("selectedLine", "two-northbound");
});

$("#northbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
  localStorage.setItem("selectedLine", "three-northbound");
});

// Click events on "Southbound" clicks

$("#southbound-one").click(function() {
  $("#oneTrainCard").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
  localStorage.setItem("selectedLine", "one-southbound");
});

$("#southbound-two").click(function() {
  $("#twoTrainCard").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
  localStorage.setItem("selectedLine", "two-southbound");
});

$("#southbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
  localStorage.setItem("selectedLine", "three-southbound");
});
