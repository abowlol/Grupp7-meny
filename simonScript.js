var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var menu = JSON.parse(xhttp.responseText);
       console.log(menu.meals); //loggar det som ligger is meny-items.js

        printMenu(menu.meals);
    }
};
xhttp.open("GET", "object.json", true);
xhttp.send();

const menuDiv = document.querySelector("#menu-container");


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

function SortAscending(){
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){
            var menu = JSON.parse(xhttp.responseText);

            removeElementByClass("mealCard"); 

            var menuSortedAscending = menu.meals.sort((a, b) => {
                    return a.price - b.price;
            });

            printMenu(menuSortedAscending);


        }
        xhttp.send();
        }

function SortDescending(){
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'object.json')
        xhttp.onload = function(){
            var menu = JSON.parse(xhttp.responseText);

            removeElementByClass("mealCard"); 

            var menuSortedAscending = menu.meals.sort((a, b) => {
                    return b.price - a.price;
                });

            printMenu(menuSortedAscending);


        }
        xhttp.send();
        }




        function removeElementByClass(className)
        {
            const elements = document.getElementsByClassName(className);
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }



        function printMenu(menu)
        {         
            for(var i = 0; i < menu.length; i++)
            {

                var menuContainer = document.getElementById("menu-container");
                var mealCard = document.createElement("div");
                mealCard.classList.add("mealCard");
                mealCard.classList.add(menu[i].alergies[0],menu[i].alergies[1], menu[i].meatType);
                menuContainer.appendChild(mealCard);

                mealCard.innerHTML = 
                `
                <h3 id="mealCardTitle">${menu[i].name}</h3></br>
                    ${menu[i].price}kr</br>
                <i>${menu[i].description}</i>
                `;

            }
        }

