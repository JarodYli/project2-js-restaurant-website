



const url = 'https://entree-f18.herokuapp.com/v1/menu/8';

async function loadItems() {
    var app = "";
    var menu = "menu";
    var j = 1;

    for (j; j <= 4; j++) {
        for (var i = 0; i < 8; i++) {
            app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
            await fetch(url).then(function (response) {
                return response.json();
            })
                .then(function (myJson) {
                    console.log(JSON.stringify(myJson.menu_items[0].description));
                    app = app + JSON.stringify(myJson.menu_items[0].description) + "</div></div>";

                });


            document.getElementById("menu" + j).innerHTML = app;

        }

    }
}

function newFunction() {
    loadItems();
}