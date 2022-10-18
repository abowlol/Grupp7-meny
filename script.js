
const menuDiv = document.querySelector("#menu-container");


function generalCall(){

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

function filterGluten(){

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

}

function filterLactose(){

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

}

function filterSeafood(){

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
}

function filterEggs(){

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
}

function filterMeat(){

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
}