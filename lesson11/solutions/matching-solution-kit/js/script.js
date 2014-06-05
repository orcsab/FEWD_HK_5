var newRound = true;
var isBingo = false;

// card clicked
$('.card').click(function(){
  var $this = $(this);

  // If it is already flipped, do nothing and exit
  if ($this.hasClass('flipped')) {
    return;
  }

  if (newRound) {
    // Determine if the last moved is success or not
    if (isBingo) {
      // If it is a successful move, keep the cards flipped
      $('.first-selected').removeClass('first-selected');
      $('.second-selected').removeClass('second-selected');
    } else {
      // If it is a wrong move, unflip the both cards
      $('.first-selected').removeClass('flipped first-selected');
      $('.second-selected').removeClass('flipped second-selected');
    }

    // start a new round
    newRound = false;
    isBingo = false;

    // unflip the first selected card
    $this.addClass('flipped first-selected');
  } else {
    // compare with the previous selected card
    if ($('.first-selected').data('card') == $this.data('card')) {
      console.log('bingo');
      isBingo = true;
    } else {
      console.log('miss');
      isBingo = false;
    }

    // flip the card and mark it as the 2nd selected card
    $this.addClass('flipped second-selected');

    // The 2nd card is selected, so next round would be a new round
    newRound = true;
  }
   
});

// start button clicked
$('#start').click(function(){
  // reset the move counts
  // unflipped all the card and shuffle them (you probably need to think about instead of hardcode the cards on HTML, you should have a initCards function which will regenerate the cards in random order.)
});

// reset button clicked
$('#reset').click(function(){
  // unflipped the cards only
});

// cheat mode enabled ?

// shuffle the cards ?