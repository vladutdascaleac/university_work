carti = [
  {
    titlu: "Harap alb",
    autor: "Ion Creanga",
    citita: true,
  },
  {
    titlu: "În căutarea timpului pierdut",
    autor: "Marcel Proust",
    citita: false,
  },
  {
    titlu: "Puterea lui NU",
    autor: "James Altucher & Claudia Azula Altuche",
    citita: true,
  },
];
function afisareBiblioteca() {
  var outputText = "";
  carti.forEach((element) => {
    outputText +=
      "<p><span>" +
      (element.citita ? `Am citit "` : `Nu am citit "`) +
      element.titlu +
      `" scrisa de ` +
      element.autor +
      "</span><input style='margin-left:10px' type='button' onClick='stergeCarte(`" +
      JSON.stringify(element) +
      "`)' value='Sterge' /></p>";
  });
  document.getElementById("afisareBibliotecaId").innerHTML = outputText;
}
function adaugaCarte() {
  document.getElementById("inputObligatoriuText").innerHTML = "";
  var carte = {};
  var titlu = document.getElementById("titluInput").value;
  if (!titlu) {
    document.getElementById("inputObligatoriuText").innerHTML =
      "Titlul este obligatoriu !";
    return;
  }

  var autor = document.getElementById("autorInput").value;
  if (!autor) {
    document.getElementById("inputObligatoriuText").innerHTML =
      "Autorul este obligatoriu !";
    return;
  }
  var amCitit = document.querySelector('input[name="amCitit"]:checked').value;
  carte.titlu = titlu;
  carte.autor = autor;
  carte.citita = amCitit === "da";
  this.carti.push(carte);
}

function stergeCarte(carte) {
  carte = JSON.parse(carte);
  this.carti.find((item, index) => {
    if (
      item.titlu === carte.titlu &&
      item.autor === carte.autor &&
      item.citita === carte.citita
    ) {
      this.carti.splice(index, 1);
      afisareBiblioteca();
      return true;
    }
  });
}
