const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

getRandomNumber(12);

// Arrow functions are not hoisted