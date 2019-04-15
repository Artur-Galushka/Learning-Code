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

let suits = [ "Hearts", "Spades", "Clubs", "Diamonds" ]; //array of all suits
let values = [ "Ace", "King", "Queen", "Jack",
               "Ten", "Nine", "Eight", "Seven", 
               "Six", "Five", "Four", "Three", "Two" ]; //array of all values

function createDeck(){ //function of a deck
  let deck = []; //empty deck array
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) { //reads through all suits
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { //reads through all values
      let card = { //making an object of a card
        suit: suits[suitIdx], //what goes on a card, in this case suit and value
        value: values[valueIdx] //value of a card is: array of cards, through which it reads [single value from a function]
      };
      deck.push(card); //adds card to deck array to last index
      //deck.push(values[valueIdx] + " of " + suits[suitIdx]);
    }
  }
  return deck; //lets program read the deck array of a function
}

function getCardString(card) { //get a name of a card
  return card.value + ' of ' + card.suit; //name of card contains value and suit from other function
}

function getNextCard() { //removes 1st card from deck but lets program read it
  return deck.shift();
}

let deck = createDeck(); //variable deck is equal to a function of createDeck
/*
for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
} */

let playerCards = [getNextCard(), getNextCard()]; //array of player's hand of cards

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));




