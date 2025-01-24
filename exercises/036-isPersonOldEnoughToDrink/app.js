let person1 = {
  age: 32,
};

function isPersonOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else if (person.age < 21) {
    return false;
  }
}

console.log(isPersonOldEnoughToDrink(person1));