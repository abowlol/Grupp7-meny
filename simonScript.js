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

