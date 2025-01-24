let person1 = {
  age: 23,
  name: "carlos",
};

let numerosDeLaSuerte = [4, 6, 8, 9];

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj
}

console.log(addArrayProperty(person1, "luckyNumbers", numerosDeLaSuerte));