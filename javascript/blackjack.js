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

//card variables
let suits = [ "Hearts", "Spades", "Clubs", "Diamonds" ]; //array of all suits
let values = [ "Ace", "King", "Queen", "Jack",
               "Ten", "Nine", "Eight", "Seven", 
               "Six", "Five", "Four", "Three", "Two" ]; //array of all values

//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [ getNextCard(), getNextCard() ];
  playerCards = [ getNextCard(), getNextCard() ];
  
  //textArea.innerText = 'Started...';
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

hitButton.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
})

stayButton.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
})

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

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length); //calls for 52 length of deck, extending random from 0-1 to 0-52 (in this case it will be 0-51)
    let tmp = deck[swapIdx]; //temporarily hold swapIdx
    deck[swapIdx] = deck[i]; //swap swapIdx with i
    deck[i] = tmp; //swap i with temporary holding of swapIdx [it cycles through the deck basically]
  }
}

function getCardString(card) { //get a name of a card
  return card.value + ' of ' + card.suit; //name of card contains value and suit from other function
}

function getNextCard() { //removes 1st card from deck but lets program read it
  return deck.shift();
}

function getCardNumericValue(card) {
  switch(card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
  updateScores();
  
  if (gameover) {
    while(dealerScore < PlayerScore
          && playerScore <= 21
          && dealerScore <= 21) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }
  
  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  }
  else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  }
  else if (gameOver) {
    if (playerScore > dealerScore) {
      playerWon = true;
    }
    else {
      playerWon = false;
    }
  }
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }
  
  let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++) {
      dealerCardString += getCardString(dealerCards[i]) + '\n';
    }
    
  let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++) {
      playerCardString += getCardString(playerCards[i]) + '\n';
    }
  
  updateScores();
  
  textArea.innerText = 
    'Dealer has:\n' +
    dealerCardString +
    '(score: '+ dealerScore + ')\n\n' +
    
    'Player has:\n' +
    playerCardString +
    '(score: '+ playerScore + ')\n\n';

/*  
  for (var i = 0; i < deck.length; i++) {
    textArea.innerText += '\n' + getCardString(deck[i]);

  }
*/
  if (gameOver) {
    if (playerWon) {
      textArea.innerText += "YOU WIN!";
    }
    else {
      textArea.innerText += "DEALER WINS";
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }
}



//let deck = createDeck(); //variable deck is equal to a function of createDeck
/*
for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
} */

//let playerCards = [getNextCard(), getNextCard()]; //array of player's hand of cards
/*
console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));
*/
