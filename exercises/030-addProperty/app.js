let carro = {
  modelo: "toyota",
  color: "rojo",
  año: 2008
}


function addProperty(obj, key) {
  return obj[key] = true;

}

addProperty(carro, "usado");

console.log(carro);
