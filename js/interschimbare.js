function interschimbare() {
  var value1 = document.getElementById("firstNumber").value;
  var value2 = document.getElementById("secondNumber").value;
  var rezultat = calculeaza(value1, value2);
  document.getElementById("rezultat").innerHTML = rezultat;
}
function calculeaza(value1, value2) {
  value2 = [value1, (value1 = value2)][0];
  return (
    "Prima valoare este " + value1 + ", iar a doua valoare este " + value2 + "."
  );
}
