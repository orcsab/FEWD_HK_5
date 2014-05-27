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

var STATE = State;

// name: resetGame (callback)
// args: event object
function resetGame (event) {
  resetCards();
}

// name: toggleCheat (callback)
// args: event object
function toggleCheat (event) {
  STATE.toggleCheat();
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

  //  game is hard-coded to assume four cards.  if two mismatched cards are
  //  up then first turn over all the cards before showing the newly clicked
  //  card.  Note that turnDownCards() has logic that will NOT turn down cards
  //  that were properly guessed.
  if (STATE.unmatched === 2)
    turnDownCards();

  // display this card.
  var card = $el.data('card');
  console.log('displaying card');
  console.log(card);
  $el.attr('width', card.width);
  $el.attr('height', card.height);
  $el.css('background-image', 'url(images/classic-playing-cards.png)');
  $el.css('background-position', card.x + ' ' + card.y);
  $el.data('state', 'unmatched');
  STATE.unmatched++;
  STATE.moves++;

  setMatchedCards();

  if (STATE.matched == 4) {
    var msg = 'Congratulations! You\'ve matched all cards in ' + STATE.moves + ' moves.';
    $('#status').html(msg);
    alert(msg);
  }
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
  var cardSelection = randomCards();
  $('#card-container').children().each (function (i) {
    console.log($(this));
    $(this).data('card', cardSelection[i]);
  });

  turnDownCards(true);
  STATE.reset();
}

// name: randomCards
// rval: an array of size 'count' of cards (file names)
function randomCards () {
  var count0 = 2, count1 = 2; // the number of times each card will be displayed
  var cards = [];

  if (count0 + count1 != 4)
    throw 'card count incorrectly assumed to be four';

  //  pick two random cards from the sprite.
  var selectedCards = pickCards(2);

  //  now randomize their order.
  for (var i = 0; i < 4; i++) {
    if (count0 === 0) {
      cards.push(selectedCards[1]);
      count1--;
    }
    else if (count1 === 0) {
      cards.push(selectedCards[0]);
      count0--;
    }
    else {
      var rand = Math.random();
      console.log('rand = ' + rand);
      if (Math.floor(rand + 0.5)) {
        cards.push(selectedCards[1]);
        count1--;
      }
      else {
        cards.push(selectedCards[0]);
        count0--;
      }
    }
  }

  return cards;
}

// name: pickCards
// args: count: the number of cards to pick from the deck
// rval: a count-length array of coordinates in the sprite that maps to a card.
function pickCards (count) {
  var cards = [];
  while (count > 0) {
    //  card and suit match to x and y coordinates in the sprite and then
    //  translate them (negate them) for use in relative postioning in HTML.
    var card = Math.floor(Math.random() * 13);
    var suit = Math.floor(Math.random() * 4);
    var width = 73;
    var height = 98;
    var x = card * width * -1 + 'px';
    var y = card * height * -1 + 'px';

    // in the unlikely event that we picked the same card re-loop.
    if (count == 1 && cards[0].x == x && cards[0].y == y)
      continue;

    cards.push({x: x, y: y, width: width, height: height});
    count--;
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

    //  Two conditions to turn down cards:
    //  1.  if we are doing a reset, clear everything
    //  2.  if we are not doing a reset (maybe just clearing cards because
    //      previous guesses were wrong) then only turn over unmatched cards
    if (reset ||
        (!reset && $(this).data('state') != 'matched')) {
      $(this).css('background-image', 'url(images/back-of-card.png)');
      $(this).css('background-position', '0 0');
      $(this).data('state', 'down');
    }
  });

  STATE.unmatched = 0;
}

// name: setMatchedCards
// args: none
// note: iterates through the cards to see if (1) there are two up cardSelection
//       and (2) they match type.
function setMatchedCards () {
  var $last;
  console.log('in setMatchedCards');

  $('#card-container').children().each (function (index) {
    //  if the current card is an unmatched card and there is no previously
    //  unmatched card then store this card as
    if ($(this).data('state') === 'unmatched' && !$last) {
      $last = $(this);
    }
    else if ($last &&
             $(this).data('state') === 'unmatched' &&
             $last.data('card') === $(this).data('card')) {
      console.log('**** found two matched cards');
      $last.data('state', 'matched');
      $(this).data('state', 'matched');
      STATE.unmatched = 0;
      STATE.matched += 2;
      return;
    }
    else
      console.log('**** no previously unmatched card or no match');
  });
}