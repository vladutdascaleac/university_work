function mediaAritmetica3Nr() {
  var nr1 = parseFloat(document.getElementById("firstNumber").value);
  var nr2 = parseFloat(document.getElementById("secondNumber").value);
  var nr3 = parseFloat(document.getElementById("thirdNumber").value);
  var rezultat = calculeaza(nr1, nr2, nr3);
  document.getElementById("rezultat").innerHTML = rezultat;
}
function calculeaza(nr1, nr2, nr3) {
  return (nr1 + nr2 + nr3) / 3;
}
