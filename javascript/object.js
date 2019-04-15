/*
function changeCard(cards) {
  card.suit = "Clubs";
}

let card = {
  suit: "Hearts",
  value: "Queen"
};

let cards = [

    {
      suit: "Hearts",
      value: "Queen"
    },  
    
    {
      suit: "Clubs",
      value: "King"
    }
];

//changeCard(cards);

console.log(cards[0].suit);
console.log(cards[0].value);
*/

let result = Math.random()*52;
result = Math.trunc(result);

let result2 = new Date().toDateString();
let result3 = "Hello World!";
result3 = result3.toLowerCase();

let result4 = 1 / 1;

console.log(result2);
console.log(result);
console.log(result3);
console.log(Number.isNaN(result4));
