function isOldEnoughToDrive(age) {
  if (age >= 16) {
    return true;
  } else if (age < 16) {
    return false;
  }
}

console.log(isOldEnoughToDrive(15));
