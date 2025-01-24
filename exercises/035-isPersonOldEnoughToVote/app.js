let person1 = {
  age: 17,
};

function isPersonOldEnoughToVote(person) {
  if (person.age >= 18) {
    return true;
  } else if (person.age < 18) {
    return false;
  }
}

console.log(isPersonOldEnoughToVote(person1));