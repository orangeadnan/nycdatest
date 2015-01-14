console.log('Hello!');

var myNum = 5;



console.log(myNum);


var name1; //undefined
var name2 = null;
// name3 is never declared - it will throw an error if you try to use it!

console.log(name1);
console.log(name2);
//console.log(name3);

myNum = 10;

console.log(myNum);

myNum = "pi";

console.log(myNum);

var isRaining = true;

console.log(isRaining);

var x = 2 + 2;
var y = x * 3;

console.log(y);


var name = 5;
var greeting = 'Hello ' + name;
var title = 'your highness';
var formalGreeting = greeting + ', ' + title;

console.log(greeting);
console.log(formalGreeting);

console.log(typeof greeting);

// single-line comment

/*
comment
comment
comment
*/

/**
 * Adds two numbers
 * @param {number} a - the first number
 * @param {number} b - the second number
 */
 function addNumbers(num1, num2) 
 {
 	if()
 	{

 	}
    return num1 + num2;  
 }
 
 
 function sayMyName(name) {
     return "Hi "+name+"!";
 }

var myName = sayMyName();
console.log(myName);

var x = 3;
var sum = addNumbers(5, x);


console.log(sum);

console.log(sayMyName("Michael"));

test = 5

function fortuneTeller(numChildren, partnerName, geographicLocation, jobTitle)
{
	var future = "You will have " + test + " children with " + partnerName + " in " + geographicLocation + " and you will be a " + jobTitle;

	console.log(future);
	return future;
}

fortuneTeller(1000, "Justin", "New York", "clown");

function test() {
	alert("test");
}

setTimeout(test, 3000);

