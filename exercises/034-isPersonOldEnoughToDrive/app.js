let person1 = {
  age: 18,
}


function isPersonOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else if (person.age < 16) {
    return false;
  }
}

console.log(isPersonOldEnoughToDrive(person1));

