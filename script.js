
const menuDiv = document.querySelector("#menu-container");
//vvtest sakervv
menuDiv.className = 'works';
menuDiv.classList.add("anotherclass");
menuDiv.classList.toggle("anotherclass");
menuDiv.classList.replace("works", "alsoworks");
//const string = String(div.outerHTML);
//console.log(string.search('locked'));
//^^test saker^^

window.onload = function generalCall(){

    menuDiv.replaceChildren();
    
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'object.json')
    xhttp.onload = function(){

        var menu = JSON.parse(xhttp.responseText);
        var meals = menu.meals;

        meals.forEach((meal) => {

            const mealDiv = document.createElement("div");
            mealDiv.classList.add(meal.alergies[0],meal.alergies[1], meal.meatType);
            menuDiv.appendChild(mealDiv);
            mealDiv.innerHTML = meal.name + ' ' + meal.price + "kr" + '<br>' + meal.description;
            
        })

    }
    xhttp.send();

}

let OnOffSwitchForGluten = false;
function filterGluten(){

    const glutenDivs = document.querySelectorAll('.gluten');
    //console.log(glutenDivs);


    if (OnOffSwitchForGluten === false) {

        glutenDivs.forEach((div) => {

            div.classList.toggle("glutenlocked");
            console.log(div);
            div.style.display = "none";
            //console.log(div);

        })

        OnOffSwitchForGluten = true;
    }
    else {

        glutenDivs.forEach((div) => {
            
            //numbers
            div.classList.toggle("glutenlocked");
            //-1
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            //if locked is found in any of the "div":s, keep display:none; else, display:block
            //returnDisplay(div);
            
        })

        OnOffSwitchForGluten = false;

    }

}

function checkIfLockedAndReturnDisplay (div){

    /*Look inside this div. Is there a substring called "locked" in it? If there isn't
    such a substring, you'll return -1, meaning it's not locked--meaning it's free
    to appear (display:block).*/

            const string = String(div.outerHTML);
            const locked = string.search('locked');

            if (locked === -1){
    return div.style.display = "block"}
    
}

let OnOffSwitchForLactose = false;
function filterLactose(){

    const lactoseDivs = document.querySelectorAll('.lactose');


    if (OnOffSwitchForLactose === false) {

        lactoseDivs.forEach((div) => {

            div.classList.toggle("lactoselocked");
            div.style.display = "none";
            console.log(div);
            
        })

        OnOffSwitchForLactose = true;
    }
    else {

        lactoseDivs.forEach((div) => {

            div.classList.toggle("lactoselocked");
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
        })

        OnOffSwitchForLactose = false;

    }

}

let OnOffSwitchForSeafood = false;
function filterSeafood(){

    const seafoodDivs = document.querySelectorAll('.seafood');


    if (OnOffSwitchForSeafood === false) {

        seafoodDivs.forEach((div) => {

            div.classList.toggle("seafoodlocked");
            div.style.display = "none";
            console.log(div);
            
        })

        OnOffSwitchForSeafood = true;
    }
    else {

        seafoodDivs.forEach((div) => {

            div.classList.toggle("seafoodlocked");
            console.log(div);
            checkIfLockedAndReturnDisplay(div);
            
        })

        OnOffSwitchForSeafood = false;

    }

}

/*let filterGlutenActive = true;
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

}*/