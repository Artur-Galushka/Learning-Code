

/* if()
let score = 100;

if (score > 1000) { //=== ; !==; <; >; <=; >=
  score = score + 100;
}
else if (score === 1000) {
  console.log("Almost");
}
else {
  console.log("Nice try");
}

console.log("Scroe is: ", score);
*/

/* switch/case
let state = 'TX';

switch (state) {
  case 'NY':
    console.log('New York');
    break;
  case 'TX':
    console.log('Texas');
    console.log('Austin');
    //no break = fall through, read next case block
  default:
    console.log('Unknown');
    break;
}
*/

/* for()
for (let i=0; i < 5; i++){ //runs a loop till 2nd condition = false
  console.log(i);
}
*/

let count = 1;

while (count <= 3){ //do not run a program if loop cannot end, as it will overload the program
  console.log(count);
  count++; 
}

