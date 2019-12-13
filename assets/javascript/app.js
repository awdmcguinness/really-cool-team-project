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
  $("#threeTrainCard").css("display", "none");
  $(".numberChoices").css("display", "none");
  $(".routeImage").css("display", "none");
  $(".southbound").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
});

$("#northbound-two").click(function() {
  $("#threeTrainCard").css("display", "none");
  $(".numberChoices").css("display", "none");
  $(".routeImage").css("display", "none");
  $(".southbound").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
});

$("#northbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $(".numberChoices").css("display", "none");
  $(".routeImage").css("display", "none");
  $(".southbound").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
});

// Click events on "Southbound" clicks

$("#southbound-one").click(function() {
  $("#threeTrainCard").css("display", "none");
  $(".numberChoices").css("display", "none");
  $(".routeImage").css("display", "none");
  $(".northbound").css("display", "none");
  $("#messageCardOneTrain").css("display", "block");
});

$("#southbound-two").click(function() {
  $("#threeTrainCard").css("display", "none");
  $(".numberChoices").css("display", "none");
  $(".routeImage").css("display", "none");
  $(".northbound").css("display", "none");
  $("#messageCardTwoTrain").css("display", "block");
});

$("#southbound-three").click(function() {
  $("#threeTrainCard").css("display", "none");
  $(".numberChoices").css("display", "none");
  $(".routeImage").css("display", "none");
  $(".northbound").css("display", "none");
  $("#messageCardThreeTrain").css("display", "block");
});
