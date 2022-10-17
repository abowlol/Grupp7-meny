var xhttp = new XMLHttpRequest();
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
