// Full Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Short Documentaion: https://css-tricks.com/template-literals/


const name = prompt('What is your name?');

const message = `Hello, ${name} It's ${new Date()} o'clock. Welcome to my music site. I'm happy that you came by to visit, ${name}. Please come again and listen to more music.`;

// Back ticks also known as using template literals. Use this instead of sting concatanation.

console.log(message);