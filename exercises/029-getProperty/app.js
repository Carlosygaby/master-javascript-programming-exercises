let carro = {
  modelo: "toyota",
  año: "2005",
  color: "rojo,"
};


function getProperty(obj, key) {
  return console.log(obj[key]);

}

getProperty(carro, "modelo");