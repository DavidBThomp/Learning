function getRandomNumber() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

const dieroll = getRandomNumber();
alert(getRandomNumber());