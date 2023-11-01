function temperatureConverter(valNum, type, elementId) {
  var rezultat;
  valNum = parseFloat(valNum);
  if (type === "C2F") {
    rezultat = valNum * 1.8 + 32;
  } else if (type === "F2C") {
    rezultat = (valNum - 32) / 1.8;
  }
  document.getElementById(elementId).value = rezultat;
}
