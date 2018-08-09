$(document).ready(function(event) {
  //set global vars
  var player = 'X';
  var table = $('table');
  var turn = $('.playerTurn');
  displayPlayer(turn, player);
  $("h2").addClass("pretty");
  //click function - checks whether the box has already been clicked, then if not, it checks which player it is, then changes the class based on which player, and adds html. If it has already been clicked, nothing happens.
  $('td').click(function() {
    td = $(this);
    var state = checkState(td);
    if(state == 0) {
      var pic = defineCurrentPlayer(player);
      changeState(td, pic);
      $(this).html(player);
      if(checkIfPlayerWon(table, pic) == 1) {
        turn.html('Player '+player+' has won!!');
      } else {
        player = setNextPlayer(player);
        displayPlayer(turn, player);
      }
    }
  });
  //Say who's turn it is
  function displayPlayer(turn, player) {
    turn.html('It is player '+player+'\'s turn');
  }
  //checks whether box has already been clicked
  function checkState(td) {
    if(td.hasClass('X') || td.hasClass('O')) {
      return 1;
    } else {
      return 0;
    }
  }
//add the class to the box
  function changeState(td, pic) {
    return td.addClass(pic);
  }
//define whether current player is X or O
  function defineCurrentPlayer(player) {
    if(player == 'X') {
      return 'X';
    } else {
      return 'O';
    }
  }
  //change player
  function setNextPlayer(player) {
    if(player == 'X') {
      return player = 'O';
    } else {
      return player = 'X';
    }
  }
  //check if 3 boxes clicked in a row by player
  function checkIfPlayerWon(table, pic) {
    var won = 0;
    if ($('#0').hasClass(pic) && $('#1').hasClass(pic) && $('#2').hasClass(pic)) {
      won = 1;
    } else if ($('#0').hasClass(pic) && $('#3').hasClass(pic) && $('#6').hasClass(pic)) {
      won = 1;
    } else if ($('#0').hasClass(pic) && $('#4').hasClass(pic) && $('#8').hasClass(pic)) {
      won = 1;
    } else if ($('#3').hasClass(pic) && $('#4').hasClass(pic) && $('#5').hasClass(pic)) {
      won = 1;
    } else if ($('#6').hasClass(pic) && $('#7').hasClass(pic) && $('#8').hasClass(pic)) {
      won = 1;
    } else if ($('#1').hasClass(pic) && $('#4').hasClass(pic) && $('#7').hasClass(pic)) {
      won = 1;
    } else if ($('#2').hasClass(pic) && $('#5').hasClass(pic) && $('#8').hasClass(pic)) {
      won = 1;
    } else if ($('#2').hasClass(pic) && $('#4').hasClass(pic) && $('#6').hasClass(pic)) {
      won = 1;
    }
    return won;
  }
  //clear board
  $('#reset').click(function() {
    $('td').removeClass('X O').html('');
    player = 'X';
    displayPlayer(turn, player);
  });
})
