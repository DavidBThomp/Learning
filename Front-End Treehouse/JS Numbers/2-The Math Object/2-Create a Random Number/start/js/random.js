let userLowNumber = prompt(`Please input lowest number for random numbers possible.`);
let userHighNumber = prompt(`Please input highest number for random numbers possible.`)

const lowNumber = parseInt(userLowNumber)
const highNumber = parseInt(userHighNumber);

if (highNumber && lowNumber) {
    const dieroll = Math.floor(Math.random() * (highNumber - lowNumber + 1)) + lowNumber;
    console.log(`${dieroll} is between ${lowNumber} and ${highNumber}.`);
} else {
    console.log(`Please input a valid numbers.`)
}