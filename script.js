/* MAIL
- generare array indirizzi email
- inserire nella pagina campo input e bottone
- chiedere utente indirizzo email
- controllare che il valore del campo sia un indirizzo email valido
- confrontare input con dati array
- se presente output "vai al login" else "utente non registrato" */

const arrEmail = [
	"putin@russia.ru",
	"biden@unitedstates.us",
	"mattarella@italia.it",
	"macron@france.fr",
	"johnson@unitedkingdom.uk.co",
	"scholz@deutschland.de",
	"sanchez@espana.es",
	"vonderleynen@europe.eu",
];

const inputEmail = document.getElementById("email");
let mailOutput = document.querySelector(".mail-output");
let controlBtn = document.getElementById("control");
let clearBtn = document.getElementById("clear");

controlBtn.addEventListener("click", function () {
	let found = false;
	for (let index = 0; index < arrEmail.length; index++) {
		console.log(arrEmail[index].toLowerCase());
		if (arrEmail[index].toLowerCase() == inputEmail.value.toLowerCase()) {
			found = true;
			console.log(found);
		}
	}

	if (found) {
		mailOutput.innerHTML = "L'indirizzo email è presente nell'elenco";
	} else {
		mailOutput.innerHTML = "L'indirizzo email NON è presente nell'elenco";
	}
});

clearBtn.addEventListener("click", function () {
	inputEmail.value = "";
	mailOutput.innerHTML = "";
});

/* DADO
- assegnare a una variabile (utente) un numero casuale da 1 a 6
- assegnare a una variabile (computer) un numero casuale da 1 a 6
- se numeri uguali pareggio, se utente > computer vince utente, else vince computer
*/

let diceBtn = document.getElementById("dice");
let pcDice = document.querySelector(".pc-dice");
let userDice = document.querySelector(".user-dice");
let diceOutput = document.querySelector(".dice-output");
let diceValuePc = 0;
let diceValueUser = 0;
diceBtn.addEventListener("click", function () {
	diceValuePc = Math.floor(Math.random() * 6 + 1);
	pcDice.innerHTML = "Il Computer ha totalizzato " + diceValuePc;

	diceValueUser = Math.floor(Math.random() * 6 + 1);
	userDice.innerHTML = "Tu hai totalizzato " + diceValueUser;

	if (diceValuePc > diceValueUser) {
		diceOutput.innerHTML = "Ha vinto il PC";
		diceOutput.style = "color: red";
	} else if (diceValuePc < diceValueUser) {
		diceOutput.innerHTML = "Hai vinto";
		diceOutput.style = "color: green";
	} else {
		diceOutput.innerHTML = "Pareggio!";
		diceOutput.style = "color: orange";
	}
});
