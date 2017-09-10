var randomNum = Math.round(Math.random()*100)
//var randomNum = 50
var turn = 5;

function GuessNum(){

	var n = document.getElementById("num").value
	var output = document.getElementById("output");

	if (n < 0 || n === "") {
		alert("Enter a number or number must bigger than 1!");
		document.getElementById("num").value = "";
		output.textContent = "Guesses remain " + turn;
		}
	else {
		if (n > randomNum) {
			turn --;
			output.textContent = "Your number is high! Try again. Guesses remain " + turn;
			
		}

		else if (n < randomNum){
			turn --;
			output.textContent = "Your number is low! Try again. Guesses remain " + turn;
			
		}

		else {
			output.textContent = "You are correct! Congratulation!";
			}
		}

		if (turn == 0) {
			alert("Game Over! The number is " + randomNum);
			document.getElementById("btn").disabled = true;
		}

console.log(randomNum);

}







