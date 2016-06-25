function shuffleDeck(deck) {
  // Start at end of deck
  for (var i = deck.length-1; i >= 0; i--) {
    // Use deck's index to calculate random numbers up until deck length
    var random = Math.floor(Math.random() * (i+1))
    // Swap cards
    var temp = deck[i];
    deck[i] = deck[random];
    deck[random] = temp;
  }
  return deck;
}