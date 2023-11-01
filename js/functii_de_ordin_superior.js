function dubleazaArray() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  calculeaza(afisareRezultat, array);
}
calculeaza = (callback, array) => {
  array = array.map((item) => item * 2);
  callback(array);
};
afisareRezultat = (rezultat) => {
  document.getElementById("rezultat").innerHTML = rezultat;
};
