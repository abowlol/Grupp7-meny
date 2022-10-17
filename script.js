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

//Denna kod kommer användas för att generera sidan utifrån de måltider som finns i JSON filen.
