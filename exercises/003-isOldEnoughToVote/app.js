function isOldEnoughToVote(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  }
}

console.log(isOldEnoughToVote(17));
