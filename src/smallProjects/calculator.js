// calculator.js
// splashinn

var msg = "(a)dd, (s)ubstract, (m)ultiply, (d)ivide, print, (h)istory or (q)uit";
var choice = prompt(msg);
var numbers = [];

while (choice != "q") {
  var firstNumber = parseInt(prompt("pick a number"), 10);
  var secondNumber = parseInt(prompt("pick a number"), 10);
  numbers.push(firstNumber);
  numbers.push(secondNumber);
  switch (choice) {
    case "a":
      console.log(firstNumber + secondNumber);
      break;
    case "s":
      console.log(firstNumber - secondNumber);
      break;
    case "m":
      console.log(firstNumber * secondNumber);
      break;
    case "d":
      console.log(firstNumber / secondNumber);
      break;
    case "h":
      for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
      }
      break;
      default:
        console.log("not a valid option");
        break;
  }
  choice = prompt(msg);
}
console.log("Goodbye");
