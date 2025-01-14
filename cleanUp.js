// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?");
}

askForName()

// moved the code block inside of the curly brackets to a new line
// added semicolon
// repositioned curly brackets


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// Added console.log to see values printed to console
/// indented code block

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// function needed to be spelled out all the way: 'func' => 'function'
/// repositioned closing curly bracket to a new line after the code block


//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  return avg;
}
console.log (average(100, 50))

// added console.log with calls to two numbers to confirm the code works as intended
// indented the code block lines the same amount
// repositioned opening curly bracket to the same line as function and parameters