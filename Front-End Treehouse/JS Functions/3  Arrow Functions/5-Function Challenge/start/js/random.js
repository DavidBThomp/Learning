/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function randomNumber(lower, upper) {
    if ( isNaN(lower) || isNaN(upper) ) {
        throw Error('Both arguments must be Numbers.')
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + 1;
}
// Call the function and pass it different values

console.log(randomNumber(15,150));
console.log(randomNumber('Six', 666));
