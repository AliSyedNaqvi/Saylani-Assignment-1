let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

if(num1 > num2) {
	console.log("First number is greater than second number. The number is: " + num1);
} else if(num1 < num2) {
	console.log("Second number is greater than first number. The number is: " + num2);
} else {
	console.log("No valid input given.")
}