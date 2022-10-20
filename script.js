/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var menu = JSON.parse(xhttp.responseText);
       console.log(menu.meals); //Loggar objekten som ligger is object.json
       var meals = menu.meals; //För att enkelt nå menyn genom meals.objekt
    }
};
xhttp.open("GET", "object.json", true);
xhttp.send();

//Denna kod är det som tillåter dig att arbeta med det som ligger i JSON filen.
//Alla funktioner som arbetar med de värden bör behöver ligga innuti scopet av if loopen.
//Ceasarsalladen har två priser. En för en hel portion och en för en halv. Bra att komma ihåg vid sortering via pris.
// Created by @conmarap.

// Created by @conmarap.*/


//allergier
checkBox = document.getElementById('Laktos').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Egg').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Gluten').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Skaldjur').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Notter').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

//protein

checkBox = document.getElementById('Vegetariskt').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Kyckling').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Fisk').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Beef').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('Pork').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

//pris

checkBox = document.getElementById('lowtohigh').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});

checkBox = document.getElementById('hightolow').addEventListener('click', event => {
	if(event.target.checked) {
		alert("Checkbox checked!");
	}
});
