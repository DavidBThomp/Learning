/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;

// 2. Store the rank of a player

let rank;

// 3. Select the <main> HTML element

const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const question1 = prompt("Blah 1");
if (question1 === '1') {
  (correct += 1);
}

const question2 = prompt("Blah 2");
if (question2 === '2') {
  (correct += 1);
}

const question3 = prompt("Blah 3");
if (question3 === '3') {
  (correct += 1);
}

const question4 = prompt("Blah 4");
if (question4 === '4') {
  (correct += 1);
}

const question5 = prompt("Blah 5");
if (question5 === '5') {
  (correct += 1);
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct === 5) {
  rank = "Gold";
} else if (correct >= 3){
  rank = "Silver";
} else if (correct >= 1) {
  rank = "Bronze";
} else {
  rank = "No crown"
}

// 6. Output results to the <main> element
main.innerHTML = (`You answered ${correct} of 5 questions correct. You have earned a ${rank}!`)