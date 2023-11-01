function isInt(n) {
  return n % 1 === 0;
}
function factorial() {
  var inputValue = parseFloat(document.getElementById("firstNumber").value);
  var rezultat;
  if (isInt(inputValue) && inputValue >= 0) {
    rezultat =
      "Factorialul numarului " + inputValue + " este " + calculeaza(inputValue);
  } else {
    rezultat = "Numarul introdus nu este numar intreg pozitiv !";
  }
  document.getElementById("rezultat").innerHTML = rezultat;
}
function calculeaza(nr) {
  if (nr === 0 || nr === 1) {
    return 1;
  } else {
    return nr * calculeaza(nr - 1);
  }
}
