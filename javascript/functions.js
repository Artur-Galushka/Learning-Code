/*
function myFunction(message, number) {
  message = message + " World!";
  console.log(message, number);
}

myFunction('Hello', 69);
*/
function myFunction(number) { //the name and property's value of a function
  newNumber = number + 100; //performs function's calculation
  return newNumber; //lets program know the function's result
}

let result = myFunction(69); //tell function the value of property to use
console.log(result);
