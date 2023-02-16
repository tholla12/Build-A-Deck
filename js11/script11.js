$(document).ready(function () {
  $("button#game").click(function () {
    $(".display").show();
    //for declaring an Array of two element
    let cardSuits = ["Heart", "Diamond", "Club", "Spade"];
    let cardValues = ["Ace", "2", "3", "4", "5", "6", "7", "9", "10", "Jack", "Queen ", "King "]
 // for looping through two Array of element 
    cardSuits.forEach(function (cardSuit) {
      cardValues.forEach(function (cardValue) {
    
        $(".display").append("<li>" + cardValue + " of " + cardSuit + "</li>")
        $("#one").hide();
      });
    })
  })
});
