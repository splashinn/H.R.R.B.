// Eloquent JavaScript exercises
// github.com/splashinn (Kyle)

// Introduction
var total = 0;
var count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total); // -> 55  (creates the sum of the numbers 1 - 10, i.e. 1 + 2 + 3....)


function fac(n) {
  if (n === 0) {
    return 1;
  } else {
    return (fac(n - 1) * n);
  }
}
console.log(fac(8)); // -> 40320 (creates the factorial of a number)


// Chapter 1: Values, Types, and Operators



console.log(typeof 4.5); // -> number
console.log(typeof "x"); // -> string
// The typeof operator produces a string value naming the type of the value you give it.


console.log(3 > 2); // -> true
console.log(3 < 2); // -> false
// Boolean examples


console.log("Aardvark" < "Zoroaster"); // -> true
// Strings can be compared in JS as well.
/* The way strings are ordered is more or less alphabetic: uppercase letters are always “less” than lowercase ones, so "Z" < "a" is true,
and nonalphabetic characters (!, -, and so on) are also included in the ordering. The actual comparison is based on the Unicode standard.
This standard assigns a number to virtually every character you would ever need, including characters from Greek, Arabic, Japanese, Tamil, and so on.
Having such numbers is useful for storing strings inside a computer because it makes it possible to represent them as a sequence of numbers.
When comparing strings, JavaScript goes over them from left to right, comparing the numeric codes of the characters one by one.
*/

console.log("Itchy" != "Scratchy"); // -> true

// Only one JS value is not equal to itself, and that is NaN.
console.log(NaN === NaN); // -> false


// Logical Operators in JS are and, or, and not.
// && is and, || is or, ! is not

// && is true only if both the values given to it are true.
console.log(true && false); // -> false
console.log(true && true); // -> true

// || is true if either of the values given to it is true.
console.log(false || true); // -> true
console.log(false || false); // -> false

// ! flips the value given to it
!true // -> false
!false // -> true

// Conditional operator is represented with a ? and :
// The value on the left of the ? picks which of the other two values will come out.
// When true, the middle value is chosen, when false the value on the right is chosen.
console.log(true ? 1 : 2); // -> 1
console.log(false ? 1 : 2); // -> 2

/* There are two special values, written null and undefined, that are used to denote the absence of a meaningful value.
They are themselves values, but they carry no information.
*/

/* JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things.
This is nicely demonstrated by these expressions:
*/
console.log(8 * null); // -> 0
console.log("5" - 1); // -> 4
console.log("5" + 1); // -> 51
console.log("five" * 2); // -> NaN
console.log(false === 0); // -> true

/* When an operator is applied to the “wrong” type of value, it will quietly convert that value to the type it wants,
using a set of rules that often aren’t what you want or expect. This is called type coercion. So the null in the first
expression becomes 0, and the "5" in the second expression becomes 5 (from string to number). Yet in the third expression,
+ tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).
*/


/* When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same.
But when the types differ, JavaScript uses a complicated and confusing set of rules to determine what to do. I will not explain them precisely,
but in most cases, it just tries to convert one of the values to the other value’s type. However, when null or undefined occurs on either side of the operator,
it produces true only if both sides are one of null or undefined.
*/

console.log(null === undefined); // -> true
console.log(null === 0); // -> false

// Chapter 2: Program Structure


// To remember the number of dollars that Luigi still owes you, you create a variable. And then when he pays back $35, you give this variable a new value.
var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // -> 105

// A single var statement may define multiple variables, separated by a comma:
var one = 1, two = 2;
console.log(one + two); // -> 3

var x = 30;
console.log("The value of X is, " x); // -> The value of X is 30.

// Return value examples:
console.log(Math.max(2, 4)); // -> 4 (Math.max returns the largest value of number values given)
console.log(Math.min(2, 4) + 100); // -> 102 (Math.min returns the smallest value of numbers in the values given)

// Prompt and confirm examples:
confirm("Shall we, then?"); // Confirm returns a boolean; "ok" is returned as true "cancel" is returned as false.
prompt("Tell me everything you know..."); // Prompt can be used to ask a "open" question. This function will return what is input as a string.

// Keep in mind these two functions are not used often in modern web programming, mostly because the resulting window look can not be controlled.
// They are, however, useful for toy programs and experiments.

// Control flow examples:
var theNumber = Number(prompt("Pick a number",""));
alert("Your number is the square root of " + theNumber * theNumber);
/* Explanation of above example: The function Number converts a value to a number.
We need that conversion because the result of prompt is a string value, and we want a number.

Conditional execution:
Executing statements in straight-line order isn’t the only option we have. An alternative is conditional execution,
where we choose between two different routes based on a Boolean value.

Conditional execution is written with the if keyword in JavaScript. In the simple case, we just want some code to be executed if,
and only if, a certain condition holds. For example, in the previous program, we might want to show the square of the input only if
the input is actually a number.
*/
var theNumber = Number(prompt("Pick a number", ""));
if (!NaN(theNumber)) {
  alert("Your number is the square root of " + theNumber * theNumber);
}
// With this modification, if you enter "cheese", no output will be shown.

/* You won’t always just have code that executes when a condition holds true.
Often, you’ll also need code that handles the other case, when the condition doesn’t hold.
This alternate path is represented by the second arrow in the previous diagram.
The else keyword can be used, together with if, to create two separate, parallel execution paths.
*/
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber)) {
  alert("Your number is the square root of " + theNumber * theNumber);
} else {
  alert("Hey, why didn't you give me a number?");
}

// If we have more than two paths to choose from, multiple if/else pairs can be “chained” together. Here’s an example:
var num = Number(prompt("Pick a number", "0"));

if (num < 10) {
  alert("Small");
} else if (num < 100) {
  alert("Medium");
} else {
  alert("Large");
}
/* The program will first check whether num is less than 10. If it is, it chooses that branch, shows "Small", and is done.
If it isn’t, it takes the else branch, which itself contains a second if. If the second condition (< 100) holds, that means the number
is between 10 and 100, and "Medium" is shown. If it doesn’t, the second, and last, else branch is chosen.
*/

// While and Do loop examples:
// Take this example of printing all the even numbers between 0 and 12:
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
} //  -> 2, 4, 6, 8, 10, 12, etc.
/* A statement starting with the keyword while creates a loop.
The word while is followed by an expression in parentheses and then a statement, much like if.
The loop executes that statement as long as the expression produces a value that is true when
converted to Boolean type.

In this loop, we want to both print the current number and add two to our variable.
Whenever we want to execute multiple statements inside a loop, we wrap them in braces ({ and }).
Braces do for statements what parentheses do for expressions: they group them together, making them
count as a single statement. A sequence of statements wrapped in braces is called a block.
*/


/* As an example that actually does something useful, we can now write a program that
calculates and shows the value of 210 (2 to the 10th power). We use two variables:
one to keep track of our result and one to count how often we have multiplied this result by 2.
The loop tests whether the second variable has reached 10 yet and then updates both variables:
*/
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result); // -> 1024


/* The do loop is a control structure similar to the while loop.
It differs only on one point: a do loop always executes its body at least once,
and it starts testing whether it should stop only after that first execution.
To reflect this, the test appears after the body of the loop:
*/
do {
  var name = prompt("Who are you?");
} while (!name);
console.log(name);
/* This program will force you to enter a name.
It will ask again and again until it gets something that is not an empty string.
(Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true.)
*/
