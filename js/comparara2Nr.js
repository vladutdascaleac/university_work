function comparara2Nr() {
  var nr1 = parseFloat(document.getElementById("firstNumber").value);
  var nr2 = parseFloat(document.getElementById("secondNumber").value);
  var rezultat = compara2(nr1, nr2);
  document.getElementById("rezultat").innerHTML = rezultat;
}
function compara2(nr1, nr2) {
  if (nr1 > nr2) {
    return "Primul numar este mai mare decat cel de-al doilea numar!";
  }
  if (nr1 < nr2) {
    return "Al doilea numar este mai mare decat primul numar!";
  }
  if (nr1 === nr2) {
    return "Cele doua numere sunt egale!";
  }
}
