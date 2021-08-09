function oneThroughTwenty() {
  let contador = [];

  for (let counter = 1; counter <= 20; counter++) {
     contador.push(counter);
  }

  return contador;
 
}

console.log(oneThroughTwenty());

function evensToTwenty() {
  let contador = [];

  for (let counter = 2; counter <= 20; counter += 2) {
   contador.push(counter);
}

return contador;
  
}

console.log(evensToTwenty());

function oddsToTwenty() {
  let contador = [];

  for (let counter = 1; counter <= 20; counter += 2) {
   contador.push(counter);
}

return contador;
   
}

console.log(oddsToTwenty());

function multiplesOfFive() {
  let contador = [];

  for (let counter = 5; counter <= 100; counter += 5) {
   contador.push(counter);
}

return contador;
   
}

console.log(multiplesOfFive());

function squareNumbers() {
  let contador = [];

  for (let counter = 1; counter <= 10; counter++ ) {
    let num = counter * counter;
     contador.push(num);
    }

return contador;
  }
      
console.log(squareNumbers());

function countingBackwards() {
  let contador = [];

  for (let counter = 20; counter >= 1; counter--) {
   contador.push(counter);
}

return contador;
   
}

console.log(countingBackwards());

function evenNumbersBackwards() {
  let contador = [];

  for (let counter = 20; counter >= 1; counter -= 2) {
   contador.push(counter);
}

return contador;
   
}

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let contador = [];

  for (let counter = 19; counter >= 1; counter -= 2) {
   contador.push(counter)
}

return contador;
   
}

console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let contador = [];

  for (let counter = 100; counter >= 5; counter -= 5) {
   contador.push(counter);
}

return contador;
   
}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let contador = [];

  for (let counter = 10; counter >= 1; counter-- ) {
    let num = counter * counter;
     contador.push(num);
    }

return contador;
}

console.log(squareNumbersBackwards());