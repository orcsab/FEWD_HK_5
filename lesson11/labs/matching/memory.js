$(function () {
  // setup controls (start, reset, cheat)
  $('#button-start').click(resetGame);
  $('#button-reset').click(resetGame);
  $('#checkbox-cheat').click(toggleCheat);

  // setup card click and hover rules
  $('#card-container').children().click(showCard);
  $('#card-container').children().hover(manageHint, manageHint);

  // reset game: randomize and show downcard
  resetCards();
});

//  stupid goddamn globals that I need to get rid of
var CHEAT = false;
var unmatched = 0;
var $lastcard = '';

// name: resetGame (callback)
// args: event object
function resetGame (event) {
  resetCards();
}

// name: toggleCheat (callback)
// args: event object
function toggleCheat (event) {
  CHEAT = !CHEAT;
}

// name: showCard (callback)
// args: event object
function showCard (event) {
  console.log(event);
  //  if the card is already up ignore this click.
  var $el = $(event.target);
  console.log($el.data);

  if ($el.data('state') != 'down') {
    console.log('ignoring click on up card');
    return;
  }

  //  game is hard-coded to assume four cards.  if two cards are up then
  //  first turn over all the cards before showing the newly clicked card.
  //  Note that turnDownCards() has logic that will NOT turn down cards
  //  that were properly guessed.
  if (unmatched === 2)
    turnDownCards();

  // display this card.
  var card = $el.data('card');
  $el.attr('src', card);
  $el.data('state', 'unmatched');
  unmatched++;

  setMatchedCards();
}

// name: manageHint (callback)
// args: event object
// note: this is used for both the mouseenter and mouseleave events
function manageHint (event) {

}

// name: resetCards
// args: none
function resetCards () {
  var cards = jQuery.makeArray($('#card-container').children());
  console.log('resetCards');
  console.log(cards);
  // create random
  var cardSelection = randomCards(4);
  $('#card-container').children().each (function (i) {
    console.log($(this));
    $(this).data('card', cardSelection[i]);
  });

  turnDownCards(true);
}

// name: randomCards
// args: the number of random cards to generate
// rval: an array of size 'count' of cards (file names)
function randomCards (count) {
  var kcount = 2, qcount = 2;
  var cards = [];

  if (kcount + qcount != count)
    throw 'card count incorrectly assumed to be four';

  for (var i = 0; i < count; i++) {
    if (kcount === 0) {
      cards.push('images/Queen.png');
      qcount--;
    }
    else if (qcount === 0) {
      cards.push('images/King.png');
      kcount--;
    }
    else {
      if (Math.floor(Math.random() + 1)) {
        cards.push('images/King.png');
        kcount--;
      }
      else {
        cards.push('images/Queen.png');
        qcount--;
      }
    }
  }

  return cards;
}

// name: turnDownCards
// args: reset: a boolean stating whether matched cards should be set to
//              unmatched
function turnDownCards (reset) {
  console.log('turnDownCards called with param = ' + reset);
  $('#card-container').children().each(function (index) {
    console.log($(this).data('state'));

    //  of course the two statements below can be collapsed into a single
    //  if statement.
    //
    //  if we are doing a reset, clear everything
    if (reset) {
      $(this).attr('src', 'images/back-of-card.png');
      $(this).data('state', 'down');
    }
    //  if we are not doing a reset (maybe just clearing cards because
    //  previous guesses were wrong) then only turn over unmatched cards
    else if (!reset && $(this).data('state') != 'matched') {
      $(this).attr('src', 'images/back-of-card.png');
      $(this).data('state', 'down');
    }
  });

  unmatched = 0;
}

// name: setMatchedCards
// args: none
// note: iterates through the cards to see if (1) there are two up cardSelection
//       and (2) they match type.
function setMatchedCards () {
  var $last;
  console.log('in setMatchedCards');

  $('#card-container').children().each (function (index) {
    console.log($(this));
    console.log($(this).data('state'));
    console.log($(this).data('card'));
    console.log($last);
    if (typeof $last === undefined && $(this).data('state') === 'unmatched') {
      console.log('storing last unmatched card');
      $last = $(this);
    }
    else if ($last &&
             $(this).data('state') === 'umatched' &&
             $last.data('card') === $(this).data('card')) {
      console.log('found two matched cards');
      $last.data('state', 'matched');
      $(this).data('state', 'matched');
      unmatched = 0;
      return;
    }
  });
}