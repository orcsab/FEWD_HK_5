var State = {
  // whether the cheat/hint function is active
  cheat: false,

  // the number of uncovered yet unmatched cards
  unmatched: 0,

  // the number of cards already matched
  matched: 0,

  // total moves
  moves: 0,

  // reset state
  reset: function () {
    this.unmatched = 0;
    this.matched = 0;
    this.moves = 0;
  },

  // toggle cheat
  toggleCheat: function () {
    this.cheat = !this.cheat;
  }
};