//Steg 1
//Skapa ett XMLHTTP Request object/xhr object

var xhr = new XMLHttpRequest(); //skapar ett nytt object

//Steg 2
//Skapa en callback

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) //4 är när servern har svarat. Readystate är objektets stadie som det är i.
    {
      
        //document.getElementById("main").innerHTML = xhr.responseText;
        //aboutme.style.display = "none";
        
        
        var movie = JSON.parse(xhr.responseText);
        
        /*for (var i = 0; i < movie.length; i++)
        {
            console.log(movie[i].url);
            document.getElementById("main").innerHTML += "<video autoplay='autoplay' src=" + movie[i].url + ">" + "</video>" + "<br>";
        }*/
        document.getElementById("main").innerHTML += "<video autoplay='autoplay' src=" + movie[0].url + ">" + "</video>" + "<br>";
        
    
    }

} //ett state som hela tiden ändras i värde när vi ändrar i requesten. Olika steg den håller koll på. Är ute efter steg 4. 


//Steg 3
//Öppna en request

xhr.open("GET", "movies.json");

//Steg 4
//Skicka requesten till servern

function sendAJAX() {
xhr.send();
}

//Steg 0, hämta knapp och bind till funktion

var aboutme = document.querySelector("#aboutme");
aboutme.addEventListener("click", sendAJAX);