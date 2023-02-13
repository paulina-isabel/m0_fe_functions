// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
  return "Hey there!";
}
var greet1 = greeting();
var greet2 = greeting();
console.log(greet1);
console.log(greet2);

// // 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
  return `Welcome in, ${name}.`
}
var greeting1 = customGreeting("Paulina");
var greeting2 = customGreeting("Emmanuel");
console.log((greeting1))
console.log((greeting2))

// // 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
  return `Hi ${first} ${middle} ${last}, how's your day going?`
}
var greetPerson1 = greetPerson("Paulina", "Isabel", "Rubio");
var greetPerson2 = greetPerson("Emmanuel", "Rizal", "Salazar");
console.log(greetPerson1);
console.log(greetPerson2);

// // 4: Write a function named square that takes in one number, and returns the square of that number.
// // BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
  return Math.sqrt(number)
}
var square1 = square(10)
var square2 = square(5)
console.log(square1);
console.log(square2);

// // 5: Write a function named checkStock that satisfies the following interaction pattern:
// // Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(ingredient) {
return `${ingredient}`
}
var coffee = checkStock("Coffee is stocked");
var tortillas = checkStock("Tortillas - running LOW");
var cheese = checkStock("Cheese - OUT of stock!");
var salsa = checkStock("Salsa - running LOW")
console.log(coffee);
console.log(tortillas);
console.log(cheese);
console.log(salsa);

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

