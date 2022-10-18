
const menuDiv = document.querySelector("#menu-container");



window.onload = function generalCall(){

    menuDiv.replaceChildren();
    
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'object.json')
    xhttp.onload = function(){

        var menu = JSON.parse(xhttp.responseText);
        var meals = menu.meals;

        meals.forEach((meal) => {

            const mealDiv = document.createElement("div");
            menuDiv.appendChild(mealDiv);
            mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
            
        })

    }
    xhttp.send();

}

let filterGlutenActive = true;
function filterGluten(){

    if (filterGlutenActive === true) {

        menuDiv.replaceChildren();

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){

            var menu = JSON.parse(xhttp.responseText);
            var meals = menu.meals;

            meals.forEach((meal) => {

                if (!(meal.alergies.includes('gluten'))) {
            
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                    
                }
                
            })

        }
        xhttp.send();
                
        filterGlutenActive = false;
    }
    else {

        generalCall();
        filterGlutenActive = true;

    }

}

let filterLactoseActive = true;
function filterLactose(){

    if (filterLactoseActive === true) {

        menuDiv.replaceChildren();

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){

            var menu = JSON.parse(xhttp.responseText);
            var meals = menu.meals;

            meals.forEach((meal) => {

                if (!(meal.alergies.includes('lactose'))) {
            
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                    
                }
                
            })

        }
        xhttp.send();
                
        filterLactoseActive = false;
    }
    else {

        generalCall();
        filterLactoseActive = true;

    }

}

let filterSeafoodActive = true;
function filterSeafood(){

    if (filterSeafoodActive === true) {

        menuDiv.replaceChildren();

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){

            var menu = JSON.parse(xhttp.responseText);
            var meals = menu.meals;

            meals.forEach((meal) => {

                if (!(meal.alergies.includes('seafood'))) {
            
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                    
                }
                
            })

        }
        xhttp.send();
        
        filterSeafoodActive = false;
    }
    else {

        generalCall();
        filterSeafoodActive = true;

    }

}

let filterEggsActive = true;
function filterEggs(){

    if (filterEggsActive === true) {

        menuDiv.replaceChildren();

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){

            var menu = JSON.parse(xhttp.responseText);
            var meals = menu.meals;

            meals.forEach((meal) => {

                if (!(meal.alergies.includes('eggs'))) {
            
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                    
                }
                
            })

        }
        xhttp.send();

        filterEggsActive = false;
    }
    else {

        generalCall();
        filterEggsActive = true;

    }

}

let filterMeatActive = true;
function filterMeat(){
    
    if (filterMeatActive === true) {

        menuDiv.replaceChildren();

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){

            var menu = JSON.parse(xhttp.responseText);
            var meals = menu.meals;

            meals.forEach((meal) => {

                if (meal.meatType === 'vegetarian') {
            
                    const mealDiv = document.createElement("div");
                    menuDiv.appendChild(mealDiv);
                    mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
                    
                }
                
            })

        }
        xhttp.send();

        filterMeatActive = false;
    }
    else {

        generalCall();
        filterMeatActive = true;

    }

}