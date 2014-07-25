// callbackFunctions.js
// splashinn (kyle)


var animals = ["cat", "dog", "rabbit", "puma"];

animals.forEach(function (eachAnimal, index) {
  console.log(index + 1 + ". " + eachAnimal);
});

var alWest = ["Oakland A's", "Los Angeles Angels", "Texas Rangers", "Seattle Mariners", "Houston Astros"];

alWest.forEach(function (eachTeam, index) {
	console.log(index + 1 + ". " + eachTeam);
});

// A callback function is a function that is passed to another function as a parameter, and the callback function
// is called inside the other function.
// A callback function is essentially a pattern, and therefore, the use of a callback function is also known as a
// callback pattern. 
