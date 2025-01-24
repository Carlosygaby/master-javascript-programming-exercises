let carro = {
  año: 2006,
};

let toyota = {};


function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1;
}

console.log(addObjectProperty(carro, "modelo", toyota));

