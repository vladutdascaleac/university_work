function primulNRImpar() {
  var inputPrimulNrImpar = document.getElementById(
    "inputPrimulNrImparId"
  ).value;

  var rezultat;
  var outputText;
  var numbers = inputPrimulNrImpar.split(",");
  if (Array.isArray(numbers)) {
    rezultat = calculeaza(numbers);
    if (rezultat) {
      outputText = "Primul numar impar este: " + rezultat;
    } else {
      outputText = "Nu exista nici un numar impar !";
    }
  } else {
    outputText = "Inputul introdus nu poate fi converitit intr-o lista !";
  }
  document.getElementById("rezultat").innerHTML = outputText;
}
function calculeaza(numbers) {
  var index = 0;
  var founded;
  while (!founded && index < numbers.length) {
    const element = numbers[index];
    if (element % 2 !== 1) {
      ++index;
      continue;
    }
    founded = element;
  }
  return founded;
}
