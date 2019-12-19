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
  localStorage.setItem("selectedLine", "one-northbound");
});

$("#northbound-two").click(function() {
  localStorage.setItem("selectedLine", "two-northbound");
});

$("#northbound-three").click(function() {
  localStorage.setItem("selectedLine", "three-northbound");
});

// Click events on "Southbound" clicks

$("#southbound-one").click(function() {
  localStorage.setItem("selectedLine", "one-southbound");
});

$("#southbound-two").click(function() {
  localStorage.setItem("selectedLine", "two-southbound");
});

$("#southbound-three").click(function() {
  localStorage.setItem("selectedLine", "three-southbound");
});
//back button navigation
$("#backnav").click(function() {
  $(".numberChoices").css("display", "flex");
  $("#oneTrainCard").css("display", "none");
  $("#twoTrainCard").css("display", "none");
  $("#threeTrainCard").css("display", "none");
  $("#backnav").css("display", "none");
  $("#tweets").css("display", "flex");
});
