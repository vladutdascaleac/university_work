function parImpar() {
  var nr = parseFloat(document.getElementById("firstNumber").value);
  var rezultat = calculeaza(nr);
  document.getElementById("rezultat").innerHTML = rezultat;
}
function calculeaza(nr) {
  return nr + " este numar " + (nr % 2 ? "impar" : "par");
}
