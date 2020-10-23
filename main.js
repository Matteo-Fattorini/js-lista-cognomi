//variables

var listEl = document.getElementById("list");
var buttonEl = document.getElementById("addName");
var print = document.getElementById("position");

//lista predefinita
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// add nomeUtente to the surnameList
console.log(surnameList.length);
buttonEl.addEventListener("click", function () {
  if (surnameList.length > 5) {
    alert("Hai già inserito il tuo nome");
  } else {
    var nomeUtente = document.getElementById("name").value;
    surnameList.push(nomeUtente);
    surnameList.sort();

    for (i = 0; i < surnameList.length; i++) {
      listEl.innerHTML += "<li>" + surnameList[i] + "</li>";
    }

    var userPosition = 1 + surnameList.indexOf(nomeUtente);

    print.innerHTML = "Il tuo nome si trova in " + userPosition + " posizione";
  }
});
