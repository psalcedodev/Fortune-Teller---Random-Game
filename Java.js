//Points to the empty div
var gamedata = [];
var askname = prompt("Enter you name: ");
var enter_name = document.getElementById("name");
enter_name.innerHTML = "Hello " + askname + "!,";
var enter_string = document.createElement("h5");
enter_string.className = "text_below";
enter_string.innerHTML = "Click below to get a random game";
enter_name.appendChild(enter_string);
var decide = document.getElementById("decide");
decide.addEventListener("click", function() {
  var show_me = document.getElementById("hide_me");
  show_me.innerHTML = "Browse History";
  fetch("https://api.myjson.com/bins/7qhyj").then(function(response) {
    response.json().then(function(data) {
      gamedata = data;
      htmlEditor(gamedata);
    });
  });
  //   var requestData = new XMLHttpRequest(); //XMLHttpRequest, this is used to extract data from a JSON file. It should be called JsonHttpRequest, but XML has been with developers for a long time.
  //   requestData.open("GET", "https://api.myjson.com/bins/7qhyj"); //GET = get the information from a server. POST = Send information to a server
  //   requestData.onload = function() {
  //     //This says to our program what should happen after everything is loaded
  //     var show_me = document.getElementById("hide_me");
  //     show_me.innerHTML = "Browse History";
  //     var gamedata = JSON.parse(requestData.responseText); //This interprets json data as a text. JSON is a module built in JavaScript. Therefore, there's no need to call an external function
  //     htmlEditor(gamedata);
  //   };

  //   //Keeps in contacts with the database
  //   requestData.send();
  // });

  //Adds HTML to our page

  function htmlEditor(gamedata) {
    var addhtml = gamedata[Math.floor(Math.random() * gamedata.length)];
    var col2 = document.querySelector("#random_game");
    col2.innerHTML = "";
    var columns2 = document.createElement("div");

    //name
    var rand_name = document.createElement("h1");
    rand_name.innerHTML = addhtml.name;
    columns2.appendChild(rand_name);
    //Image
    var rand_image = document.createElement("img");
    rand_image.className = "imgdiv";
    // rand_image.innerHTML = "<img src=" + '"' + addhtml.image + '">';
    rand_image.src = addhtml.image;
    columns2.appendChild(rand_image);
    var col3 = document.createElement("div");
    col3.className = "col3";
    //Genre
    var rand_genre = document.createElement("p");
    rand_genre.innerHTML = "Genre: " + addhtml.genre;
    col3.appendChild(rand_genre);
    //Year made
    var rand_year = document.createElement("p");
    rand_year.innerHTML = "Year: " + addhtml.yearmade;
    col3.appendChild(rand_year);
    //Rating
    var rand_rating = document.createElement("p");
    rand_rating.innerHTML = "Rating: " + addhtml.rating;
    col3.appendChild(rand_rating);
    columns2.appendChild(col3);
    // Description
    var rand_description = document.createElement("p");
    rand_description.innerHTML = "Description: " + addhtml.description;
    columns2.appendChild(rand_description);

    col2.appendChild(columns2);
    var historyList = document.querySelector("#history");
    console.log("LIST", historyList);
    //Creates a browse history
    //Adds name to list
    var list_name = document.createElement("li");
    list_name.innerHTML = addhtml.name;
    historyList.appendChild(list_name);

    //Adds image to list
    var list_image = document.createElement("p");
    list_image.innerHTML = "<img src=" + '"' + addhtml.image + '">';
    historyList.appendChild(list_image);
  }
});
