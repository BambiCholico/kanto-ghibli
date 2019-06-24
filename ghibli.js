function addCards(movT,movD,dir,year){
    var div = document.createElement("div");
    var cardId = Math.round(Math.random()*100);
    var text = document.createElement("p");
    var xbutton = document.createElement("button");
    xbutton.textContent = "X";
    xbutton.addEventListener("click", function(){
        var toEliminate = document.getElementById(cardId);
        console.log(cardId);
        toEliminate.parentNode.removeChild(toEliminate);
    },false);
    var movieTitle = document.createElement("h2");
    var movieDirector = document.createElement("h5");
    var movieYear = document.createElement("h5");
    var movieDes = document.createElement("p");

    div.className = "mycard col-sm-4";
    div.id = cardId;
    xbutton.className= "buttonX";
    text.className = "textForCards";
    text.textContent = "ID: " + cardId;
    movieTitle.className = "titleMovies";
    movieDes.className = "titleDesc";

    movieTitle.textContent = movT;
    movieDirector.textContent = "Director: " + dir;
    movieYear.textContent = "Release year: " + year;
    movieDes.textContent = movD;


    div.appendChild(xbutton);
    div.appendChild(text);
    div.appendChild(movieTitle);
    div.appendChild(movieDirector);
    div.appendChild(movieYear);
    div.appendChild(movieDes);

    var cards = document.getElementById("all-cards");
    cards.appendChild(div);
}

function ghibliInfo(){
    var ghibliIn= new XMLHttpRequest();
    ghibliIn.open('GET','https://ghibliapi.herokuapp.com/films',true);
    ghibliIn.onload = function (){
    var data = JSON.parse(this.response);

    if(ghibliIn.status >= 200 && ghibliIn.status < 400){
        data.forEach(movie => {
        var movieTitle = movie.title;
        var movieDes = movie.description;
        var director = movie.director;
        var year = movie.release_date;
        addCards(movieTitle,movieDes,director,year);
        });
    }else{
        console.log("error");
    }
    }
    ghibliIn.send();
}

function clearAll(){
    var cards = document.getElementById("all-cards");
    while(cards.hasChildNodes()){
        cards.removeChild(cards.firstChild);
    }
}