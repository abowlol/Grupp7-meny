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




document.getElementById('submit').onclick = function() {
    var radios = document.getElementsByName("prisKnapp");
    var selected = Array.from(radios).find(radio => radio.checked);
    alert(selected.value);
};




/* var checkboxes1 = document.querySelectorAll("input[type=checkbox][name=allergiCheck]");
let checkedAllergi = []


checkboxes1.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    checkedAllergi = 
      Array.from(checkboxes1) 
      .filter(i => i.checked)  
      .map(i => i.value) 
      
    console.log("Dessa allergier är valda: ", checkedAllergi)
  })
});

var checkboxes2 = document.querySelectorAll("input[type=checkbox][name=proteinCheck]");
let checkedProtein = []


checkboxes2.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    checkedProtein = 
      Array.from(checkboxes2) 
      .filter(i => i.checked)  
      .map(i => i.value) 
      
    console.log("Dessa protein är valda: ", checkedProtein)
  })
});


function getFilteredData ( proteinFilter, allergiFilter){
    json = JSON.parse(object.json);
    let filteredData = [];
   for(let meatType in proteinItems){
     for(let obj in json){
        if (obj.meatType== item){
      filteredData.add(obj);
       } 
     }
    }
   for(let allergi in allergiFilter){
      for(let obj in filteredData){
        if (!obj.allergier.includes(allergi)){
      filteredData.remove(obj);
       } 
     }
   }
  return filteredData;
} 
*/