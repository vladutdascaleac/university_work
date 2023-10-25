function categorisireaVarstei() {
  var inputVarsta = parseFloat(document.getElementById("inputVarstaId").value);
  var rezultat;
  if (inputVarsta < 0) {
    rezultat = "Numarul introdus trebuie sa fie mai mare sau egal decat 0 !";
  } else {
    rezultat = calculeaza(inputVarsta);
  }
  document.getElementById("rezultat").innerHTML = rezultat;
}
function calculeaza(inputVarsta) {
  return inputVarsta >= 65 ? "Senior" : inputVarsta >= 18 ? "Adult" : "Copil";
}
