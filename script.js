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
console.log(mailOutput);
let controlBtn = document.getElementById("control");
let clearBtn = document.getElementById("clear");

controlBtn.addEventListener("click", function () {
    console.log(inputEmail.value);
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
- se numeri uguali pareggio, se utente > computer vince utente, else vince computer (switch)*/
