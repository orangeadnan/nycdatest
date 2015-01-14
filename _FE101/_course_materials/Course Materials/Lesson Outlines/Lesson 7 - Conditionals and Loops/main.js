// Single equals - assignment
// Putting something in a variable

var x = 5;

// Triple equals - comparison
if(x === 5)
{
    console.log("x equals 5!");
}

// Double equals - does type coersion
// fuzzier comparison
if("5" == 5)
{
    
}

////////////

var x = 0;

if (x > 0) {
  console.log('x is a positive number!');
}
else if(x === 0) {
    console.log('x ais 0');
}
else
{
  console.log('x is a negative number!');  
}

if("5" !== 5)
{
    console.log('x is not 5');
}

if(x >= 0)
{
    console.log('x is not negative');
}

if(x < 100)
{
    console.log('x is not a really big number');
}

var resultOfMyAjaxCall;

if(resultOfMyAjaxCall && resultOfMyAjaxCall.test == "test")
{
    console.log('this line will always print');
}

var myAge = 28;
if ((myAge >= 0 && myAge < 3)  || myAge > 90) {
  console.log('You\'re not quite in your peak.');
}

// function halfNumber(num)
// {
//     return num/2;
// }

// if(halfNumber(4) > 1)
// {
//     console.log('half of 4 is greater than 1');
// }

function myFunction()
{
    var something = 4;
}




////////

function greaterNum(num1, num2)
{
	var result;
	if(num1 > num2)
	{
		result = num1;
	}
	else
	{
		result = num2;
	}

	console.log("The greater number of "+num1+" and "+num2+" is "+ result);
	return result;
}


greaterNum(1, 3);

function helloWorld(language)
{
	if(language === "es")
	{
		return "Hola, Mundo";
	}
	else if(language === "de")
	{
		return "hallo Welt";
	}
	else
	{
		return "Hello, World!"
	}
}

var languageCode = prompt("Enter a language code:");
alert(helloWorld(languageCode));


function assignGrade(score) {
	if(score >= 90)
	{
		return "A";
	}
	else if(score >= 80)
	{
		return "B";
	}
	else if(score >= 70)
	{
		return "C";
	}
	else if(score >= 60)
	{
		return "D";
	}
	else {
		return "F";
	}
}

function pluralize(noun, number)
{
	if(number === 1)
	{
		return number + " " + noun;
	}
	else
	{
		if(noun === "sheep")
		{
			return number + " sheep";
		}
		else if(noun === "goose")
		{
			return number + " geese";
		}

		return number + " " + noun + "s";
	}
}

console.log(pluralize("cat", 1));