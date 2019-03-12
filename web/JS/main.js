



const url = 'https://entree-f18.herokuapp.com/v1/menu/';

async function loadItems() {
    
    var menu = "menu";
    var j = 1;

    for (j; j < 6; j++) {
        
        var app = "";
        await fetch(url + Math.floor((Math.random() * 9) + 6)).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            for (var i = 0; i < myJson.menu_items.length; i++) {
                var x = Math.floor((Math.random() * 15) + 1)
                app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
                console.log(JSON.stringify(myJson.menu_items[i].description));
                app = app + JSON.stringify(myJson.menu_items[i].description) + "  " + x + "</div></div>";

            }
        });


        document.getElementById("menu" + j).innerHTML = app;

    }

}

