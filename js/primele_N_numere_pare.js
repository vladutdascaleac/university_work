function afisarePrimeleNNrPare() {
  var nr = parseFloat(document.getElementById("firstNumber").value);
  var rezultat;
  if (nr > 0) {
    var nrPare = calculeaza(nr);
    if (nr === 1) {
      rezultat = "Primul numar par este: " + nrPare[0];
    } else {
      rezultat = "Primele " + nr + " numere pare sunt: " + nrPare.join(",");
    }
  } else {
    rezultat = "Numarul introdus trebuie sa fie mai mare decat 0 !";
  }
  document.getElementById("rezultat").innerHTML = rezultat;
}
function calculeaza(nr) {
  var nrPare = [];
  for (let index = 0; index < nr; index++) {
    nrPare.push(index * 2);
  }
  return nrPare;
}
