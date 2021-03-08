const secsPerMin =60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weekPerYear = 52;

const secsPerDay = secsPerMin *  minsPerHour * hoursPerDay;
console.log(`There are ${secsPerDay} seconds in day`);

const yearsAlive = 20;
const yearsSecond = secsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weekPerYear * yearsAlive;
console.log(`I have been alive for more than ${yearsSecond}`);