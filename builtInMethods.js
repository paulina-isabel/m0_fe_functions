// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

//The includes() method is called on the string "Hello World"
//includes() has the purpose of giving us a boolean return value depending on whether the string "Hello World" includes the argument "Hello"
//The string "Hello World" includes the argument "Hello"
//The return value is "true"
"Hello World".includes("Hello");

//The endsWith() method is called on the string "Hello World"
//endsWith() has the purpose of giving us a boolean return value depending on whether the string "Hello World" ends with the argument "Hello"
//The return value is "false" because the string does not end with "Hello"
"Hello World".endsWith("Hello");

///The endsWith() method is called on the string "Hello World"
//endsWith() has the purpose of giving us a boolean return value depending on whether the string "Hello World" ends with the argument "rld"
//The return value is "true" because the string ends with "rld"
"Hello World".endsWith("rld");


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The includes() method is called on the cafeName variable, which stores the object "Brass Tacks".
// The includes() method returns true if the data in the cafeName variable includes the argument passed in.
// In this example, the return value is true, because "Brass Tacks" does include "Tacks".
// The console.log statement prints the return value of the includes() method (true) to the console.
var cafeName = "Brass Tacks";
console.log(cafeName.includes("Tacks"))

// The endsWith() method is called on the plantVariety variable, which stores the object "Monstera".
// The endsWith() method returns true if the data in the plantVariety variable ends with the argument passed in.
// In this example, the return value is false, because "Monstera" does not end with "s".
// The console.log statements prints the return value of endsWith() method (false) to the console.
var plantVariety = "Monstera";
console.log(plantVariety.endsWith("s"))


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

//The fill method changes all elements in an array to a static value, from a start index to and end index, and returns the modified array.
//Below, the variable "sandwiches" is declared, which holds an array of strings. This array has five elements.
//The fill() method is called on the variable "sandwiches".
//The method calls for the value "86" to replace the elements declared, starting with element 2 and stopping before element 4.
//The console.log statement returns the array with all other elements intact.

var sandwiches = ["Club", "Rueben", "French Dip", "Turkey Avocado", "Grilled Cheese"];
console.log(sandwiches.fill(86, 2, 4));

//The concat() method is used to merge two or more arrays, not changing either array but returning a new array.
//In the example below, there are two variables declared.
//The first variable, "figureSkaters" holds an array of strings with three elements.
//The second variable, "medals" holds an array of strings with three elements.
//The third variable, "results" holds the concat() method which connects the two assignment operators - "figureSkaters.concat(medals)"
//The console.log statement returns the third variable's new array, which combines the variables assigned to "figureSkaters" and the variables assigned to "medals".
//The new array, "results" will be a merging of "figureSkaters" and "medals"
var figureSkaters = ["Kristi Yamaguchi", "Nancy Kerrigan", "Tonya Harding"];
var medals = ["Gold", "Silver", "Bronze"];
var results = figureSkaters.concat(medals);
console.log(results)