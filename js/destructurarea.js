persoana = {
  nume: "Popescu Vasile",
  varsta: 19,
  ocupatie: "Student",
};

function destructurare() {
  var { nume, varsta, ocupatie } = persoana;

  document.getElementById("destructurareId").innerHTML =
    "<span>Obiectul " +
    JSON.stringify(persoana) +
    " a fost destructurat !</span><br/>" +
    "<br/><span>Nume: " +
    nume +
    "</span><br/>" +
    "<span>Varsta: " +
    varsta +
    "</span><br/>" +
    "<span>Ocupatie: " +
    ocupatie +
    "</span><br/>";
}
