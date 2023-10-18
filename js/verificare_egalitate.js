function verificareEgalitate() {
  var number5 = 5;
  var string5 = "5";
  var rezultat = ``;
  if (number5 === string5) {
    rezultat += `5 este egal cu "5" cand se foloseste triple equals (===). `;
  } else {
    rezultat += `5 nu este egal cu "5" cand se foloseste triple equals (===). `;
  }
  if (number5 == string5) {
    rezultat += `5 este egal cu "5" cand se foloseste double equals (==). `;
  } else {
    rezultat += `5 nu este egal cu "5" cand se foloseste double equals (==). `;
  }
  document.getElementById("rezultat").innerHTML = rezultat;
}
