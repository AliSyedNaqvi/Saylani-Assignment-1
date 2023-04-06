let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let num3 = +prompt("Enter third number:");
let num4 = +prompt("Enter fourth number:");
let num5 = +prompt("Enter fifth number:");

if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
	console.log("First number is greater. The number is: " + num1);
} else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
	console.log("Second number is greater. The number is: " + num2);
} else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
	console.log("Third number is greater. The number is: " + num3);
} else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
	console.log("Fourth number is greater. The number is: " + num4);
} else if(num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
	console.log("Fifth number is greater. The number is: " + num5);
} else {
	console.log("No valid input given.");
}