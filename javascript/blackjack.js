//
//Application blackjack
//Copyright, license, name, etc.
//

/*
let card1 = "Ace of Spades",
    card2 = "Ten of Hearts";
    
console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + card1);
console.log(" " + card2);
*/

/*
let deck = [
  "Ace of Spades",
  "Two of Spades",
  "Three of Spades"
];

let playerCards = [
  deck[0], 
  deck[2]
];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);
*/

let suits = [ "Hearts", "Spades", "Clubs", "Diamonds" ];
let values = [ "Ace", "King", "Queen", "Jack",
               "Ten", "Nine", "Eight", "Seven", 
               "Six", "Five", "Four", "Three", "Two" ];

function createDeck(){
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      deck.push(values[valueIdx] + " of " + suits[suitIdx]);
    }
  }
  return deck;
}

function getNextCard() {
  return deck.shift();
}

let deck = createDeck();

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);
