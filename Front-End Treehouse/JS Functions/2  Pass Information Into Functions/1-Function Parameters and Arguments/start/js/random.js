function getRandomNumber(upper) { //parameter
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log( getRandomNumber(6)); // argument
console.log( getRandomNumber(100));
console.log( getRandomNumber(1000));