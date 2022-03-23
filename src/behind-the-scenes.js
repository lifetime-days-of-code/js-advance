/**
 * A pointer to the array is stored
 * @type {Array<string>}
 */
const hobbies = ["Sports", "Cooking"];

/**
 * the value itself is stored
 * @type {number}
 */
const age = 32;

/**
 * the address of the array doesn't change
 */
hobbies.push = "Reading";

//hobbies = ['Coding','SLeeping'] // not allowed! new address is stored

console.log(hobbies);

/**
 * Primitive values: numbers, strings, booleans & more (undefined)
 * Reference values: Objects
 */

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // the below is returning the result of age - 18 and not modifying the person object
  // return p.age - 18;
}

/**
 * whit the logic in get adultYears
 * if used like this this change the object directly
 * console.log(getAdultYears(person));
 */

/**
 * the bellow creates a new object so the side effect of getAdultYears
 * does not change the original object
 * console.log(getAdultYears({age: person.age}));
 */

/**
 * With the spread operator here pulls all the key value pairs out of
 * the object and gives a list of all those key/value pairs.
 * And when used between curly braces {} we creat a new object
 * which gets all the key/value pairs of the previous object.
 * We get a new object in memory with the same shape(copying the object)
 */
console.log(getAdultYears({ ...person }));
console.log(person);
