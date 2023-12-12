/*
   Filename: ComplexCode.js
   Description: A complex JavaScript code demonstrating various concepts and techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing an Animal
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.species} says ${this.sound}.`);
  }
}

// Create instances of Person and Animal
const john = new Person('John Doe', 30);
const cat = new Animal('Cat', 'Meow');

// Perform some operations on the instances
john.sayHello();
cat.makeSound();

// Function to concatenate two strings
function concatenateStrings(str1, str2) {
  return str1 + str2;
}

const result = concatenateStrings('Hello', 'World');
console.log(result);

// Function to calculate the factorial of a number
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(calculateFactorial(5));

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Find the sum of all numbers using reduce
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));

// Asynchronous function using Promises
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function runAsyncCode() {
  console.log('Start');
  await delay(2000);
  console.log('Delayed by 2 seconds');
}

runAsyncCode().then(() => console.log('End'));

// Export the functions for external usage
export {
  Person,
  Animal,
  concatenateStrings,
  calculateFactorial,
  isEven,
  reverseString,
  delay
};
