var pageCounter = 1;
var animalInfo = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  var request = new XMLHttpRequest();
  request.onload = function() {
    var response = JSON.parse(this.responseText);
    renderHTML(response);
  };
  request.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );
  request.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var s = "";

  for (var i = 0; i < data.length; i++) {
    s +=
      "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    var tab1 = data[i].foods.likes;
    var tab2 = data[i].foods.dislikes;
    for (var j = 0; j < tab1.length; j++) {
      s += tab1[j];
      if (tab1.length > 1) {
        if (j < tab1.length - 2) s += ", ";
        else if (j == tab2.length - 2) s += " and ";
      }
    }
    s += " and doesn't like to eat ";
    for (var k = 0; k < tab2.length; k++) {
      s += tab2[k];
      if (tab2.length > 1) {
        if (k < tab2.length - 2) s += ", ";
        else if (k == tab2.length - 2) s += " and ";
      }
    }
    s += ".</p>";
  }
  animalInfo.insertAdjacentHTML("beforeend", s);
}
