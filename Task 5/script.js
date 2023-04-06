let num = +prompt("Enter your marks:");

if(num < 60) {
	console.log("Grade: F");
} else if(num < 70) {
	console.log("Grade: D");
} else if(num < 80) {
	console.log("Grade: C");
} else if(num < 90) {
	console.log("Grade: B");
} else if(num <= 100) {
	console.log("Grade: A");
} else {
	console.log("No valid input given.");
}