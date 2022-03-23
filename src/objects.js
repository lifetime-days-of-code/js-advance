/**
 * Object literal creation
 const job = {
   title: "Developer",
   location: "New York",
   salary: 50000
 };
 
 
 console.log(new Date().toISOString);
 
 const job2 = {
   title: "Cook",
   location: "Munich",
   salary: 35000
 };
 */

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I am a ${this.title} I work in ${this.location} and I earn ${this.salary}`
    );
  }
}

const developer = new Job("Developer", "New York", 5000);
const cook = new Job("Cook", "Munich", 3500);

console.log(developer);
console.log(cook);

developer.describe();
cook.describe();

const input = ["Plamen", "Mitev"];

const [first, last] = input;

console.log(first);
console.log(last);

const job = { title: "Developer", location: "New York" };

const { title: jTitle, location } = job;

console.log(jTitle);
console.log(location);
