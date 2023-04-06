let n = +prompt("Enter a number:");
let s = "";

for(let i = 1; i <= n; i++) {
	for(let j = 0; j < i; j++) {
		s += "*"
	}
	s += "\n";
}

console.log(s);