/*ROMANCE*/

//Steg 1, Skapa ett XMLHTTP Request object/xhr object
var xhr = new XMLHttpRequest();


//Steg 2, Skapa en callback
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) //4 är när servern har svarat. Readystate är objektets stadie som det är i.
    {

        startButton.setAttribute("class", "hidden");
        document.getElementById("result").innerHTML= "";

        var movie;
        var gameInterval = 0;
        var points= 0;

        movie = JSON.parse(xhr.responseText);

        // Shuffle funktion
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }


        var game = document.getElementById("game");
        var romanceButton = document.createElement("BUTTON");
        var comedyButton = document.createElement("BUTTON");
        var textRomance = document.createTextNode("Romance");
        var textComedy = document.createTextNode("Comedy");
        romanceButton.appendChild(textRomance);
        game.appendChild(romanceButton);
        comedyButton.appendChild(textComedy);
        game.appendChild(comedyButton);
        
        var movieDiv = document.getElementById("movie");
        movieDiv.setAttribute("class", "hidden");

        romanceButton.addEventListener("click", romanceGame);
        comedyButton.addEventListener("click", comedyGame);


        romanceButton.setAttribute("class", "genrebutton");
        comedyButton.setAttribute("class", "genrebutton");

        function romanceGame() {

            /*Här byggs spelet*/


            romanceButton.setAttribute("class", "hidden");
            comedyButton.setAttribute("class", "hidden");


            if (gameInterval < 5) {

                shuffleArray(movie);

                var randomMovie = movie[0];

                if (randomMovie.genre == "Romance") {


                    


                    //var movieDiv = document.createElement("div");

                    //game.appendChild(movieDiv);
                    movieDiv.setAttribute("class", "movieStyle");
                    var shadow = document.createElement("div");
                    shadow.setAttribute("class", "showBorder");
                    movieDiv.appendChild(shadow);

                    document.getElementById("movie").innerHTML += '<iframe width="420" height="315" src=' + randomMovie.url + '&frameborder="0"></iframe>' + '<br>' ;


                    var answerOne = randomMovie.answers[0];
                    var answerTwo = randomMovie.answers[1];
                    var answerThree = randomMovie.answers[2];
                    var answerFour = randomMovie.answers[3];
                    var correctAnswer = randomMovie.correct;

                    var answers = document.getElementById("answers");

                    var answerOneButton = document.createElement("BUTTON");
                    var answerOneText = document.createTextNode(answerOne);
                    answerOneButton.appendChild(answerOneText);
                    answers.appendChild(answerOneButton);

                    var answerTwoButton = document.createElement("BUTTON");
                    var answerTwoText = document.createTextNode(answerTwo);
                    answerTwoButton.appendChild(answerTwoText);
                    answers.appendChild(answerTwoButton);

                    var answerThreeButton = document.createElement("BUTTON");
                    var answerThreeText = document.createTextNode(answerThree);
                    answerThreeButton.appendChild(answerThreeText);
                    answers.appendChild(answerThreeButton);

                    var answerFourButton = document.createElement("BUTTON");
                    var answerFourText = document.createTextNode(answerFour);
                    answerFourButton.appendChild(answerFourText);
                    answers.appendChild(answerFourButton);

                    answerOneButton.setAttribute("class", "answerbutton");
                    answerTwoButton.setAttribute("class", "answerbutton");
                    answerThreeButton.setAttribute("class", "answerbutton");
                    answerFourButton.setAttribute("class", "answerbutton");


                    answerOneButton.addEventListener("click", clearMovie);
                    answerTwoButton.addEventListener("click", clearMovie);
                    answerThreeButton.addEventListener("click",clearMovie);
                    answerFourButton.addEventListener("click", clearMovie);
                    
                    var timesUp;
                    function tenSeconds(){
                    
                    timesUp = setTimeout(function(){
                        document.getElementById("movie").innerHTML = "";
                        answerOneButton.setAttribute("class", "hidden");
                        answerTwoButton.setAttribute("class", "hidden");
                        answerThreeButton.setAttribute("class", "hidden");
                        answerFourButton.setAttribute("class", "hidden");
                        gameInterval += 1;
                        romanceGame();
                        
                     }, 11000);
                    }
                    
                    tenSeconds();
                    
                    
                    
                    movie.shift();
                }
                else {
                    romanceGame();
                }
            }

            else {
                if(points == 5) {
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points. WOW AMAZING!' + '</p><br>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/applause.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/3AIWph8KSF3l6" width="480" height="376" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");
                }
                else if(points == 0){
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points LOSER</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/sad_trombone.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/rfskmSvktqSoo" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");

                }
                else if(points >=3 && points <=4){
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points. Pretty good!</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/tada.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/9MGNxEMdWB2tq" width="480" height="246" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");
                }
                else if(points == 1){
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' point LOSER</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/sad_trombone.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/rfskmSvktqSoo" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");

                }
                else{
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points...not that good, maybe you should try again?</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/sad_trombone.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/R0n44UHGGbmk8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");

                }


                setTimeout(function(){

                    var goAgainButton = document.createElement("button");
                    goAgainButton.setAttribute("class", "showGoAgain");
                    goAgainButton.innerText = "Go again";
                    var result = document.getElementById("result");
                    result.appendChild(goAgainButton);
                    goAgainButton.addEventListener("click", xhr.onreadystatechange);

                }, 0000);


            }
            
             

            function clearMovie() {
                function myStopFunction() {
                        clearTimeout(timesUp);
                    }
                
                myStopFunction();

                answerOneButton.removeEventListener('click', clearMovie);
                answerTwoButton.removeEventListener('click', clearMovie);
                answerThreeButton.removeEventListener('click', clearMovie);
                answerFourButton.removeEventListener('click', clearMovie);


                if(this.innerText == correctAnswer){
                    console.log("bra!!!");
                    points += 1;
                    console.log(this);
                    this.setAttribute("class", "correct");
                    document.getElementById("audio").innerHTML = '<audio autoplay><source src="audio/correct.wav" type="audio/wav">Your browser does not support the audio element. </audio>';

                }
                else if(this.innerText != correctAnswer){
                    this.setAttribute("class", "wrong");
                   document.getElementById("audio").innerHTML = '<audio autoplay><source src="audio/wrong.wav" type="audio/wav">Your browser does not support the audio element. </audio>';


                    if(answerOne == correctAnswer){
                        answerOneButton.setAttribute("class", "correct")

                    }
                    else if(answerTwo == correctAnswer){
                        answerTwoButton.setAttribute("class", "correct")
                    }
                    else if(answerThree == correctAnswer){
                        answerThreeButton.setAttribute("class", "correct")
                    }
                    else if(answerFour == correctAnswer){
                        answerFourButton.setAttribute("class", "correct")
                    }

                }



                setTimeout(function(){

                document.getElementById("movie").innerHTML = "";
                answerOneButton.setAttribute("class", "hidden");
                answerTwoButton.setAttribute("class", "hidden");
                answerThreeButton.setAttribute("class", "hidden");
                answerFourButton.setAttribute("class", "hidden");

                //shadow.setAttribute("class", "hidden");

                    gameInterval += 1;
                    romanceGame();
                }, 1000);

                

            }

            



        } //Slut romanceGame();



        // Början comedyGame();

        function comedyGame() {

            /*Här byggs spelet*/


            romanceButton.setAttribute("class", "hidden");
            comedyButton.setAttribute("class", "hidden");


            if (gameInterval < 5) {

                shuffleArray(movie);

                var randomMovie = movie[0];

                if (randomMovie.genre == "Comedy") {





                    //var movieDiv = document.createElement("div");

                    //game.appendChild(movieDiv);
                    movieDiv.setAttribute("class", "movieStyle");
                    var shadow = document.createElement("div");
                    shadow.setAttribute("class", "showBorder");
                    movieDiv.appendChild(shadow);

                    document.getElementById("movie").innerHTML += '<iframe width="420" height="315" src=' + randomMovie.url + '&frameborder="0"></iframe>' + '<br>' ;


                    var answerOne = randomMovie.answers[0];
                    var answerTwo = randomMovie.answers[1];
                    var answerThree = randomMovie.answers[2];
                    var answerFour = randomMovie.answers[3];
                    var correctAnswer = randomMovie.correct;

                    var answers = document.getElementById("answers");

                    var answerOneButton = document.createElement("BUTTON");
                    var answerOneText = document.createTextNode(answerOne);
                    answerOneButton.appendChild(answerOneText);
                    answers.appendChild(answerOneButton);

                    var answerTwoButton = document.createElement("BUTTON");
                    var answerTwoText = document.createTextNode(answerTwo);
                    answerTwoButton.appendChild(answerTwoText);
                    answers.appendChild(answerTwoButton);

                    var answerThreeButton = document.createElement("BUTTON");
                    var answerThreeText = document.createTextNode(answerThree);
                    answerThreeButton.appendChild(answerThreeText);
                    answers.appendChild(answerThreeButton);

                    var answerFourButton = document.createElement("BUTTON");
                    var answerFourText = document.createTextNode(answerFour);
                    answerFourButton.appendChild(answerFourText);
                    answers.appendChild(answerFourButton);


                    answerOneButton.setAttribute("class", "answerbutton");
                    answerTwoButton.setAttribute("class", "answerbutton");
                    answerThreeButton.setAttribute("class", "answerbutton");
                    answerFourButton.setAttribute("class", "answerbutton");


                    answerOneButton.addEventListener("click", clearMovie);
                    answerTwoButton.addEventListener("click", clearMovie);
                    answerThreeButton.addEventListener("click",clearMovie);
                    answerFourButton.addEventListener("click", clearMovie);

                    var timesUp;
                    function tenSeconds(){

                        timesUp = setTimeout(function(){
                            document.getElementById("movie").innerHTML = "";
                            answerOneButton.setAttribute("class", "hidden");
                            answerTwoButton.setAttribute("class", "hidden");
                            answerThreeButton.setAttribute("class", "hidden");
                            answerFourButton.setAttribute("class", "hidden");
                            gameInterval += 1;
                            comedyGame();

                        }, 11000);
                    }

                    tenSeconds();



                    movie.shift();
                }
                else {
                    comedyGame();
                }
            }

            else {
                if(points == 5) {
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points. WOW AMAZING!' + '</p><br>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/applause.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/3AIWph8KSF3l6" width="480" height="376" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");
                }
                else if(points == 0){
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points LOSER</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/sad_trombone.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/rfskmSvktqSoo" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");

                }
                else if(points >=3 && points <=4){
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points. Pretty good!</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/tada.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/9MGNxEMdWB2tq" width="480" height="246" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");
                }
                else if(points == 1){
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' point LOSER</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/sad_trombone.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/rfskmSvktqSoo" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");

                }
                else{
                    document.getElementById("result").innerHTML = '<p>You got ' + points + ' points...not that good, maybe you should try again?</p>';
                    document.getElementById("result").innerHTML += '<audio autoplay><source src="audio/sad_trombone.mp3" type="audio/mpeg">Your browser does not support the audio element. </audio>';
                    document.getElementById("result").innerHTML += '<iframe src="//giphy.com/embed/R0n44UHGGbmk8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' + '<br>' ;
                    movieDiv.setAttribute("class", "hidden");

                }


                setTimeout(function(){

                    var goAgainButton = document.createElement("button");
                    goAgainButton.setAttribute("class", "showGoAgain");
                    goAgainButton.innerText = "Go again";
                    var result = document.getElementById("result");
                    result.appendChild(goAgainButton);
                    goAgainButton.addEventListener("click", xhr.onreadystatechange);

                }, 0000);


            }



            function clearMovie() {
                function myStopFunction() {
                    clearTimeout(timesUp);
                }

                myStopFunction();

                answerOneButton.removeEventListener('click', clearMovie);
                answerTwoButton.removeEventListener('click', clearMovie);
                answerThreeButton.removeEventListener('click', clearMovie);
                answerFourButton.removeEventListener('click', clearMovie);


                if(this.innerText == correctAnswer){
                    console.log("bra!!!");
                    points += 1;
                    console.log(this);
                    this.setAttribute("class", "correct");
                    document.getElementById("audio").innerHTML = '<audio autoplay><source src="audio/correct.wav" type="audio/wav">Your browser does not support the audio element. </audio>';

                }
                else if(this.innerText != correctAnswer){
                    this.setAttribute("class", "wrong");
                    document.getElementById("audio").innerHTML = '<audio autoplay><source src="audio/wrong.wav" type="audio/wav">Your browser does not support the audio element. </audio>';


                    if(answerOne == correctAnswer){
                        answerOneButton.setAttribute("class", "correct")

                    }
                    else if(answerTwo == correctAnswer){
                        answerTwoButton.setAttribute("class", "correct")
                    }
                    else if(answerThree == correctAnswer){
                        answerThreeButton.setAttribute("class", "correct")
                    }
                    else if(answerFour == correctAnswer){
                        answerFourButton.setAttribute("class", "correct")
                    }

                }



                setTimeout(function(){

                    document.getElementById("movie").innerHTML = "";
                    answerOneButton.setAttribute("class", "hidden");
                    answerTwoButton.setAttribute("class", "hidden");
                    answerThreeButton.setAttribute("class", "hidden");
                    answerFourButton.setAttribute("class", "hidden");

                    //shadow.setAttribute("class", "hidden");

                    gameInterval += 1;
                    comedyGame();
                }, 1000);



            }





        } //Slut comedyGame();




    }   //Slut  if onreadystate = 4
}   // Slut onreadystate();
    
 //ett state som hela tiden ändras i värde när vi ändrar i requesten. Olika steg den håller koll på. Är ute efter steg 4. 
//Steg 3
//Öppna en request
xhr.open("GET", "movies.json");
//Steg 4
//Skicka requesten till servern
function sendAJAX() {
xhr.send();
}
//Steg 0, hämta knapp och bind till funktion
var startButton = document.querySelector("#start");
startButton.addEventListener("click", sendAJAX);


