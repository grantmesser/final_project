fetch("./data.json")
    .then(response => response.json())
    .then(albums => setAlbums(albums));

let country;
let rnb;
let rap;
let folk;
let indie;
let rock;

function setAlbums(albums) {
    country = albums.Country;
    rap = albums.Rap;
    folk = albums.Folk;
    indie = albums.Indie;
    rock = albums.Rock;
    rnb = albums.RnB;

    //Have it display country as default - change it to display all if there's time
    var card = document.getElementById("col");

    for (let i = 0; i < country.length; ++i){
        let addCard = document.createElement("div");
        addCard.classList.add("col");
        addCard.innerHTML =`
            <div class="album">
                <img src=${country[i].Image}>
                <div class="info">
                    <h3>${country[i].Album}</h3>
                    <p>${country[i].Artist}</p>
                </div>
            </div>
        `
        card.appendChild(addCard);
    }
}

function loadAlbums(screen) {
    let selected;
    var card = document.getElementById("col");

    if (card.hasChildNodes()) {
        while (card.firstChild) {
            card.removeChild(card.firstChild);
        }
    }

    if (screen == 1) {
        selected = rnb;
    }
    else if (screen == 2) {
        selected = rap;
    }
    else if (screen == 3) {
        selected = folk;
    }
    else if (screen == 4) {
        selected = indie;
    }
    else if (screen == 5) {
        selected = country;
    }
    else if (screen == 6) {
        selected = rock;
    }

    for (let i = 0; i < selected.length; ++i){
        let addCard = document.createElement("div");
        addCard.classList.add("col");
        addCard.innerHTML =`
            <div class="album">
                <img src=${selected[i].Image}>
                <div class="info">
                    <h3>${selected[i].Album}</h3>
                    <p>${selected[i].Artist}</p>
                </div>
            </div>
        `
        card.appendChild(addCard);
    }


}