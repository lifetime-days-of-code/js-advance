/**
 * Greet user with custom string
 * @param {string} userName
 * @param {string} greetingPrefix
 * @return {void}
 */
function greetUser(greetingPrefix, userName = "Guest") {
  console.log(greetingPrefix + " " + userName);
}

greetUser("Hi", "Plamen");
greetUser("Hello");

/**
 * Sums up random number o
 * @param  {...number} - Random amount of numbers
 * @returns {number} - The sum of the entered numbers
 */
function sumUp(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp(1, 2, 3, 4, 5, 6));

/**
 * @type {Array<number>}
 */
const inputNumbers = [1, 2, 3, 4, 5, 6];

console.log(sumUp(...inputNumbers));
/**
 * Every function is an object. It has properties etc ...
 */
console.log(sumUp.name);
