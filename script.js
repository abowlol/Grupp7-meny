var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var menu = JSON.parse(xhttp.responseText);
       //console.log(menu.meals); //Loggar objekten som ligger is object.json
       var meals = menu.meals; //För att enkelt nå menyn genom meals.objekt

       function generalCall () {
            
            meals.forEach((meal) => {
                
                const menuDiv = document.querySelector("#menu-container");
                const mealDiv = document.createElement("div");
                menuDiv.appendChild(mealDiv);
                mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                
            })

        }
       //GeneralCall () <---------------------------------- CALL THIS FUNCTION
       function filterGluten () {

            meals.forEach((meal) => {
                    
                if (!(meal.alergies.includes('gluten'))) {
                    console.log(meal);
                    const menuDiv = document.querySelector("#menu-container");
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                }

            })
        
        }
        //filterGluten () <---------------------------------- CALL THIS FUNCTION
        function filterLactose () {

            meals.forEach((meal) => {
                    
                if (!(meal.alergies.includes('lactose'))) {
                    console.log(meal);
                    const menuDiv = document.querySelector("#menu-container");
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                }

            })
        
        }
        //filterLactose () <---------------------------------- CALL THIS FUNCTION
        function filterSeafood () {

            meals.forEach((meal) => {
                    
                if (!(meal.alergies.includes('seafood'))) {
                    console.log(meal);
                    const menuDiv = document.querySelector("#menu-container");
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                }

            })
        
        }
        //filterSeafood () <---------------------------------- CALL THIS FUNCTION 
        function filterEggs () {

            meals.forEach((meal) => {
                    
                if (!(meal.alergies.includes('egg'))) {
                    console.log(meal);
                    const menuDiv = document.querySelector("#menu-container");
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                }

            })
        
        }
        //filterEggs () <---------------------------------- CALL THIS FUNCTION 
        function filterMeat () {

            meals.forEach((meal) => {
                    
                if (meal.meatType === 'vegetarian') {
                    console.log(meal);
                    const menuDiv = document.querySelector("#menu-container");
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                }

            })
        
        }
        //filterMeat () <---------------------------------- CALL THIS FUNCTION 
    }
};
xhttp.open("GET", "object.json", true);
xhttp.send();

//Denna kod är det som tillåter dig att arbeta med det som ligger i JSON filen.
//Alla funktioner som arbetar med de värden bör behöver ligga innuti scopet av if loopen.
//Ceasarsalladen har två priser. En för en hel portion och en för en halv. Bra att komma ihåg vid sortering via pris.
