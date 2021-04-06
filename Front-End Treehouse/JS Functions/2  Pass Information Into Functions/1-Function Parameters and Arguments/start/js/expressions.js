const getRandomNumber = function(upper) { //annonymous function
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};

console.log(getRandomNumber(10));  //Calling this above doesn't get hoisted (Put to top to be ran)
