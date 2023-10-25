function calculareZiuaSaptamanii() {
  var ziuaNumber = parseFloat(document.getElementById("ziuaSaptamanii").value);
  var rezultat = compara2(ziuaNumber);
  rezultat = rezultat
    ? "Ziua săptămânii este : " + rezultat
    : "Numarul introdus trebuie sa fie de la 1 la 7";
  document.getElementById("rezultat").innerHTML = rezultat;
}
function compara2(ziuaNumber) {
  var ziuaSaptamanii;
  switch (ziuaNumber) {
    case 1:
      ziuaSaptamanii = "Luni";
      break;
    case 2:
      ziuaSaptamanii = "Marti";
      break;
    case 3:
      ziuaSaptamanii = "Miercuri";
      break;
    case 4:
      ziuaSaptamanii = "Joi";
      break;
    case 5:
      ziuaSaptamanii = "Vineri";
      break;
    case 6:
      ziuaSaptamanii = "Sambata";
      break;
    case 7:
      ziuaSaptamanii = "Duminica";
      break;
  }
  return ziuaSaptamanii;
}
