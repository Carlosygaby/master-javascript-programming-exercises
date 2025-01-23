let libro = {
  año: 2007,
  escritor: "anuel",
  color: "azul",
}


function removeProperty(obj, key) {
  return delete obj[key];

}


removeProperty(libro, "color");

console.log(libro);
