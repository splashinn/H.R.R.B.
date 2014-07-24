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


// For loop examples:
for (var i = 0; i <= 12; i = i + 2) {
  console.log(i);
} // -> 2, 4, 6, 8, 10, 12, ...
/* The parentheses after a for keyword must contain two semicolons.
The part before the first semicolon initializes the loop, usually by defining a variable.
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration. In most cases,
this is shorter and clearer than a while construct.
*/

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result); // -> 1024



// Breaking out a loop examples:
// Having its condition produce false is not the only way a loop can finish.
// There is a statement called break that has the effect of immediately jumping out of the enclosing loop.
for (var current = 20; ; current++) {
  if (current % 7 === 0) {
    break;
  }
  console.log(current); // -> 21
}



// Updating variables succinctly
// When looping, a program sometimes needs to update a variable w/ a value based on that variable's previous value.
counter = counter + 1;
// is the same as
counter += 1;
// This allows us to shorten our counting example a little more:
for (var number = 0; number <= 12; counter += 2) {
  console.log(number);
}



// Dispatching on a value with switch
// It is common for code to look like this:
if (variable == "value1") {
  action1();
} else if (variable == "value2") {
  action2();
} else if (variable == "value3") {
  action3();
} else {
  defaultAction();
}

// There is a construct called switch that is intended to solve such a “dispatch” in a more direct way:
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}



// Chapter 3: Functions
// Function example:
var square = function(x) {
  return x * x;
};
console.log(square(12)); // -> 144
/* A function is created by an expression that starts with the keyword function.
Functions have a set of parameters (in this case, only x) and a body, which contains
the statements that are to be executed when the function is called. The function body
must always be wrapped in braces, even when it consists of only a single statement.
*/


/* A function can have multiple parameters or no parameters at all.
In the following example, makeNoise does not list any parameter names, whereas power lists two:
*/
var makeNoise() {
  console.log("Pling!");
};
makeNoise(); // -> Pling!

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10)); // -> 1024


// Parameters and Scope:
/* The parameters to a function behave like regular variables, but their initial
values are given by the caller of the function, not the code in the function itself.
An important property of functions is that the variables created inside of them,
including their parameters, are local to the function. This means, for example,
that the result variable in the power example will be newly created every time the
function is called, and these separate incarnations do not interfere with each other.

This “localness” of variables applies only to the parameters and variables declared
with the var keyword inside the function body. Variables declared outside of any function
are called global, because they are visible throughout the program. It is possible to access
such variables from inside a function, as long as you haven’t declared a local variable with the same name.
*/
// Example:
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x); // → outside

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x); // → inside f2


// Nested Scope
// JS distinguishes not just between global and local variables.
// Functions can be created inside other functions, producing several
// degrees of locality.

// Example: This rather nonsensical function has two functions inside it:
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
/* The flat and mountain functions can “see” the variable called result,
since they are inside the function that defines it. But they cannot see each
other’s count variables since they are outside each other’s scope.
The environment outside of the landscape function doesn’t see any of
the variables defined inside landscape.
*/

// In JS, functions are the only things that create a new scope. Free standing
// blocks are allowed:
var something = 1;
{
  var something = 2;
  // Do stuff w/ variable something...
}
// Outside the block again...



// Functions as Values
/* Usually, function variables simply act as names for a specific piece of the program.
The variables are defined once and never change. This makes it easy to start confusing
the function and its name.
But the two are different. A function value can do all the things that other values
can do—you can use it in all kinds of expressions, not just call it. It is possible to
store a function value in a new place, pass it as an argument to a function, and so on.
Similarly, a variable that holds a function is still just a regular variable and can be
assigned a new value, like so:
*/
var launchMissiles = function(value) {
  missileSystem.launch("now");
};
if (safeMode)
  launchMissiles = function(value) {
    // do nothing
  };


// Declaration Notation
// Functions can be declared as:
var kyle = function(name) {
  // code here
};
// Or, functions can be declared as:
function kyle(name) {
  // code here
};

// Another function example:
function future() {
  return "We STILL have no flying cars.";
}
console.log("The future says: ", future());


// The Call Stack:
function greet(who) {
  console.log("hello " + who);
}
greet("Kyle");
console.log("Bye."); // -> hello Kyle. Bye.
/* A run through this program goes roughly like this:
the call to greet causes control to jump to the start of that function (line 2).
It calls console.log (a built-in browser function), which takes control, does its job,
and then returns control to line 2. Then it reaches the end of the greet function,
so it returns to the place that called it, at line 4. The line after that calls console.log again.

Because a function has to jump back to the place of the call when it returns,
the computer must remember the context from which the function was called.
In one case, console.log had to jump back to the greet function. In the other case,
it jumps back to the end of the program.

The place where the computer stores this context is the call stack.
Every time a function is called, the current context is put on top of this “stack”.
When the function returns, it takes the top context from the stack and uses it to continue execution.

Storing this stack requires space in the computer’s memory. When the stack grows too big,
the computer will fail with a message like “out of stack space” or “too much recursion”.
The following code illustrates this by asking the computer a really hard question, which
causes an infinite back-and-forth between two functions. Rather, it would be infinite,
if the computer had an infinite stack. As it is, we will run out of space, or “blow the stack”.
*/
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first."); // -> ???


/* The following version of power can be called either with two arguments or with a single argument,
in which case the exponent is assumed to be two, and the function behaves like square.
*/
function power(base, exponent) {
  if (exponent === undefined) {
    exponent = 2;
    var result = 1;
  }
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4)); // -> 16
console.log(power(4, 3)); // -> 64


// Closure
/* The ability to treat functions as values, combined with the fact that local variables are “re-created”
every time a function is called, brings up an interesting question. What happens to local variables when
the function call that created them is no longer active?

The following code shows an example of this. It defines a function, wrapValue, that creates a local variable.
It then returns a function that accesses this local variable, returning its value when it is called.
*/
function wrapValue(n) {
  var localVariable = n;
  return function() {
    return localVariable;
  };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1()); // -> 1
console.log(wrap2()); // -> 2
/* This is allowed and works as you’d hope—the variable can still be accessed.
In fact, multiple instances of the variable can be alive at the same time, which
is another good illustration of the concept that local variables really are re-created
for every call—different calls can’t trample on one another’s local variables.

This feature—being able to reference a specific instance of local variables in an
enclosing function—is called closure. A function that “closes over” some local variables
is called a closure. This behavior not only frees you from having to worry about lifetimes
of variables but also allows for some creative use of function values.

With a slight change, we can turn the previous example into a way to create functions
that multiply by an arbitrary amount.
*/
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
var twice = multiplier(2);
console.log(twice(5)); // -> 10
/* The explicit localVariable from the wrapValue example isn’t needed since a parameter is
itself a local variable.

Thinking about programs like this takes some exercise. A good mental model is to think
of the function keyword as “freezing” the code in its body and wrapping it into a package
(the function value). So when you read return function(...) {...}, think of it as returning
a handle to a piece of computation being frozen for later use.

In the example, multiplier returns a frozen chunk of code that gets stored in the twice variable.
The last line then calls the value in this variable, causing the frozen code (return number * factor;)
to be activated. It still has access to the factor variable from the multiplier call that created it,
and in addition it gets access to the argument passed when unfreezing it, 5, through its number parameter.
*/


// Recursion
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3)); // -> 8

// Recursion example:
function findSolution(target) {
  function find(start, history) {
    if (start === target) {
      return history;
    } else if (start > target) {
      return null;
    } else {
      return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
    }
  }
  return find(1, "1");
}
console.log(findSolution(24)); // -> (((1 * 3) + 5) * 3)



// Growing Functions
// Example of a function w/ two arguments:
function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

// Adding another item to the function:

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}
printFarmInventory(7, 16, 3);


/* A pure function is a specific kind of value-producing function that not only has no
side effects but also doesn’t rely on side effects from other code—for example, it doesn’t
read global variables that are occasionally changed by other code. A pure function has the
pleasant property that, when called with the same arguments, it always produces the same value
(and doesn’t do anything else). This makes it easy to reason about. A call to such a function
can be mentally substituted by its result, without changing the meaning of the code. When you
are not sure that a pure function is working correctly, you can test it by simply calling it
and know that if it works in that context, it will work in any context. Nonpure functions might
return different values based on all kinds of factors and have side effects that might be hard to
test and think about.

A key aspect in understanding functions is understanding local scopes. Parameters and variables
declared inside a function are local to the function, re-created every time the function is called,
and not visible from the outside. Functions declared inside another function have access to the outer
function’s local scope.

Separating the different tasks your program performs into different functions is helpful.
You won’t have to repeat yourself so much, and they can help someone trying to read your program
by grouping the code into conceptual chunks, in the same way that chapters and sections help
organize regular text.
*/


// Chapter 4: Data Structures: Objects and Arrays

// Array Example:
var listOfNumbers = [2, 3, 5, 7, 11];
// To access an element of the array:
console.log(listOfNumbers[1]); // -> 3
// Keep in mind, the index starts at 0, not 1.
console.log(listOfNumbers[1 - 1]); // -> 2

// Properties
/* We’ve seen a few suspicious-looking expressions like myString.length
(to get the length of a string) and Math.max (the maximum function) in
past examples. These are expressions that access a property of some value.
In the first case, we access the length property of the value in myString.
In the second, we access the property named max in the Math object
(which is a collection of mathematics-related values and functions).

Almost all JavaScript values have properties.
The exceptions are null and undefined.
If you try to access a property on one of these nonvalues, you get an error.

The two most common ways to access properties in JavaScript are with a
dot and with square brackets. Both value.x and value[x] access a property
on value—but not necessarily the same property. The difference is in how x
is interpreted. When using a dot, the part after the dot must be a valid variable name,
and it directly names the property. When using square brackets, the expression
between the brackets is evaluated to get the property name. Whereas value.x fetches
the property of value named “x”, value[x] tries to evaluate the expression x
and uses the result as the property name.
*/

// Using the above example:
listOfNumbers.length; // -> 5


// Methods
// String and array objects contain a number of properties that refer to function values.
var doh = "Doh";
console.log(typeof doh.toUpperCase); // -> function
console.log(doh.toUpperCase()); // -> DOH
// We can also use toLowerCase property:
console.log(doh.toLowerCase()); // -> doh

// Example of methods that an array object has:
var mack = [];
mack.push("Mack");
mack.push("the", "knife");
console.log(mack); // -> ["Mack", "the", "knife"]
console.log(mack.join(" ")); // -> Mack the knife
console.log(mack.pop()); // -> knife
console.log(mack); // -> ["Mack", "the"]
/* The push method can be used to add values to the end of an array.
The pop method does the opposite: it removes the value at the end of the array and returns it.
An array of strings can be flattened to a single string with the join method.
The argument given to join determines the text that is glued between the array’s elements.
*/


// Objects
/* Values of the type object are arbitrary collections of properties,
and we can add or remove these properties as we please. One way to create
an object is by using a curly brace notation.
*/
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel); // -> false
console.log(day1.wolf); // -> undefined
day1.wolf = false;
console.log(day1.wolf); // -> false
/* Inside the curly braces, we can give a list of properties separated by commas.
Each property is written as a name, followed by a colon, followed by an expression
that provides a value for the property. Spaces and line breaks are not significant.
When an object spans multiple lines, indenting it like in the previous example improves
readability. Properties whose names are not valid variable names or valid numbers have to be quoted.
*/
var descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
/* This means that curly braces have two meanings in JavaScript. At the start of a statement,
they start a block of statements. In any other position, they describe an object. Fortunately,
it is almost never useful to start a statement with a curly-brace object, and in typical programs,
there is no ambiguity between these two uses.
*/


var anObject = {left: 1, right: 2};
console.log(anObject.left); // → 1
delete anObject.left;
console.log(anObject.left); // → undefined
console.log("left" in anObject); // → false
console.log("right" in anObject); // → true
/* The delete operator cuts off a leg from such an octopus. It is a unary operator that,
when applied to a property access expression, will remove the named property from the object.
This is not a common thing to do, but it is possible.

The binary in operator, when applied to a string and an object, returns a Boolean value
that indicates whether that object has that property. The difference between setting a property
to undefined and actually deleting it is that, in the first case, the object still has the property
(it just doesn’t have a very interesting value), whereas in the second case the property
is no longer present and in will return false.

Arrays, then, are just a kind of object specialized for storing sequences of things.
If you evaluate typeof [1, 2], this produces "object". You can see them as long, flat
octopuses with all their arms in a neat row, labeled with numbers.
*/

var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true},
   // and so on...
];


// Mutability
/* We’ve seen that object values can be modified. The types of
values discussed in earlier chapters, such as numbers, strings,
and Booleans, are all immutable—it is impossible to change an existing
value of those types. You can combine them and derive new values
from them, but when you take a specific string value, that value
will always remain the same. The text inside it cannot be changed.
If you have reference to a string that contains "cat", it is not
possible for other code to change a character in that string to make it spell "rat".

With objects, on the other hand, the content of a value can
be modified by changing its properties.

When we have two numbers, 120 and 120, we can consider them
precisely the same number, whether or not they refer to the same
physical bits. But with objects, there is a difference between having
two references to the same object and having two different objects that
contain the same properties. Consider the following code:
*/
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 === object2); // -> true
console.log(object1 === object3); // -> false

object1.value = 15;
console.log(object2.value); // -> 15
console.log(object3.value); // -> 10
/* The object1 and object2 variables grasp the same object,
which is why changing object1 also changes the value of object2.
The variable object3 points to a different object, which initially
contains the same properties as object1 but lives a separate life.

Correlation is a measure of dependence between variables
(“variables” in the statistical sense, not the JavaScript sense).
It is usually expressed as a coefficient that ranges from -1 to 1.
Zero correlation means the variables are not related, whereas a correlation
of one indicates that the two are perfectly related—if you know one, you also
know the other. Negative one also means that the variables are perfectly related
but that they are opposites—when one is true, the other is false.
*/

// Computing Correlation
/* We can represent a two-by-two table in JavaScript with a four-element array
([76, 9, 4, 1]). We could also use other representations, such as an array
containing two two-element arrays ([[76, 9], [4, 1]]) or an object with property
names like "11" and "01", but the flat array is simple and makes the expressions
that access the table pleasantly short. We’ll interpret the indices to the array
as two-bit binary numbers, where the rightmost digit refers to the squirrel
variable and the leftmost digit refers to event variable.
*/
// Example function that computes the phi coefficient from an array:
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1])); // -> 0.068599434
/* This is simply a direct translation of the ϕ formula into JavaScript.
Math.sqrt is the square root function, as provided by the Math object
in a standard JavaScript environment. We have to sum two fields from
the table to get fields like n1• because the sums of rows or columns are
not stored directly in our data structure.
*/


// Objects as Maps
/* One possible way is to store all the correlations in an array,
using objects with name and value properties. But that makes looking
up the correlation for a given event somewhat cumbersome: you’d have
to loop over the whole array to find the object with the right name.
We could wrap this lookup process in a function, but we would still
be writing more code, and the computer would be doing more work than
necessary.

A better way is to use object properties named after the event types.
We can use the square bracket access notation to create and read the
properties and can use the in operator to test whether a given property
exists.
*/
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map); // → true
console.log(map["touched tree"]); // → -0.081
// A map is a way to go from values in one domain to corresponding values in another domain.

/* What if we want to find all the events for which we have stored a
coefficient? The properties don’t form a predictable series, like
they would in an array, so we can not use a normal for loop.
JavaScript provides a loop construct specifically for going over
the properties of an object. It looks a little like a normal for loop
but distinguishes itself by the use of the word in.
*/
for (var event in map)
  console.log("The correlation for '" + event + "' is " + map[event]); // → The correlation for 'pizza' is 0.069,
// The correlation for 'touched tree' is -0.081


// Further Arrayology
// We've covered push and pop, the corresponding methods for adding/removing things
// at the start of an array are called unshift and shit.
var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}
/* The previous program manages lists of tasks. You add tasks to the end of the list by
calling rememberTo("eat"), and when you’re ready to do something, you call whatIsNext()
to get (and remove) the front item from the list. The urgentlyRememberTo function also
adds a task but adds it to the front instead of the back of the list.
*/

// The indexOf method has a sibling called lastIndexof, which starts searching for the given element at the end of the array instead of the front.
console.log([1, 2, 3, 2, 1].indexOf(2)); // -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // -> 3
// Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching from.

/* Another fundamental method is slice, which takes a start index and an
end index and returns an array that has only the elements between those
indices. The start index is inclusive, the end index exclusive.
*/
console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]
/* When the end index is not given, slice will take all of the
elements after the start index. Strings also have a slice method, which has a similar effect.
*/


/* The concat method can be used to glue arrays together,
similar to what the + operator does for strings. The following
example shows both concat and slice in action. It takes an array
and an index, and it returns a new array with is a copy of the
original array with the element at the given index removed.
*/
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]


// Strings and their Properties
// We can read properties like length and toUpperCase from string values. But if you try to add a new property, it doesn’t stick.
var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty); // -> undefined
/* Values of type string, number, and Boolean are not objects,
and though the language doesn’t complain if you try to set new
properties on them, it doesn’t actually store those properties.
The values are immutable and cannot be changed.

But these types do have some built-in properties. Every string
value has a number of methods. The most useful ones are probably
slice and indexOf, which resemble the array methods of the same name.
*/
console.log("coconuts".slice(4, 7)); // -> nut
console.log("coconut".indexOf("u")); // -> 5

/* One difference is that a string’s indexOf can take a string
containing more than one character, whereas the corresponding
array method looks only for a single element.
*/
console.log("one two three".indexOf("ee")); // -> 11

/* The trim method removes whitespace (spaces, newlines, tabs,
and similar characters) from the start and end of a string.
To trim only one side, the trimLeft and trimRight methods can be used.
*/
console.log("    okay \n ".trim()); // -> okay
console.log("|" + " a ".trimLeft() + "|"); // -> |a |

/* Accessing the individual characters in a string can be done with the
charAt method but also by simply reading numeric properties, like you’d do for an array.
*/
var string = "abc";
console.log(string.length); // -> 3
console.log(string.charAt(0)); // -> a
console.log(string[1]); // -> b

// The Arguments Object
/* Whenever a function is called, a special variable named arguments
is added to the environment in which the function body runs. This
variable refers to an object that holds all of the arguments passed
to the function. Remember that in JavaScript you are allowed to pass
more (or fewer) arguments to a function than the number of parameters
the function itself declares.
*/
function noArguments() {}
noArguments(1, 2, 3); // This is okay
function threeArguments(a, b, c) {}
threeArguments(); // And so is this

// another example:

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem"); // → You gave me 3 arguments.


// The Math Object
// Math is a grab-bag of number-related utility functions, such as Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).
/* If you need to do trigonometry, Math can help. It contains cos (cosine),
sin (sine), and tan (tangent), as well as their inverse functions, acos, asin,
and atan. The number π (pi)—or at least the closest approximation that fits in a
JavaScript number—is available as Math.PI. (There is an old programming tradition
of writing the names of constant values in all caps.)
*/
function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2)); // → {x: 0.3667, y: 1.966}

console.log(Math.random()); // → 0.36993729369714856
console.log(Math.random()); // → 0.727367032552138
console.log(Math.random()); // → 0.40180766698904335

// The Global Object
/* The global scope, the space in which global variables live,
can also be approached as an object in JavaScript. Each global
variable is present as a property of this object. In browsers,
the global scope object is stored in the window variable.
*/
var myVar = 10;
console.log("myVar" in window); // → true
console.log(window.myVar); // → 10


// Chapter 5: Higher-Order Functions
// Abstracting Array Traversal

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}
// Can be abstracted into this:
function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}
console.log(logEach([1, 2, 3, 4]));

// If you want to do something other than logging the elements,
// the actions can be passed as a function value.
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}



var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);

// forEach is an available method for use on arrays.
// forEach takes one required argument: the function to be executed for each element.
// To illustrate how helpful this really is, lets look at this function:
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}
// and compare the above function to the same function using forEach:
function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

// Higher-Order Functions
// Functions that operate on other functions, either by taking them as arguments or returning them, are called higher-order functions.
// Higher-Order Functions allow us to abstract over actions, not just values. They come in several forms.
// As an example, you can have functions that create new functions:
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // -> true

// Or we can have functions that change other functions:
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg "- got", val);
    return val;
  }
}
noisy(Boolean)(0); // -> calling w/ 0; -> called with 0 - got false

// Or functions that implement custom types of control flow:
function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}
repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});

/* In the example above, the n variable is a parameter to the outer function.
Because the inner function lives inside the environment of the outer one, it
can use n. The bodies of such inner functions can access the variables around them,
and play a role similar to the {} blocks used in regular loops and conditional
statements. An important difference is that variables declared inside inner functions
do not end up in the environment of the outer function.
*/

// Passing Along Arguments
