

function setInitialPlaceholder(){
    let div = document.getElementById('user-name');
    div.setAttribute("class", "white-text");
    div.innerHTML ="YOUR NAME HERE";

    div = document.getElementById('card-number');
    div.setAttribute("class", "white-text");
    div.innerHTML =".... .... .... ....";

    div = document.getElementById('card-date');
    div.setAttribute("class", "white-text");
    div.innerHTML ="../..";
}