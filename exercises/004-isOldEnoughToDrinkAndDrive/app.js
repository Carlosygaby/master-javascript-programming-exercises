function isOldEnoughToDrinkAndDrive(age) {
  if (age >= 21) {
    return console.log("Puede beber y conducir");
  } else if (age < 21 && age >= 16) {
    return console.log("No puede beber y puede conducir ");
  } else if (age < 16) {
    return console.log("No puede beber y No puede conducir");
  } else {
    return console.log("No puede beber y No puede conducir");
  }
} 

isOldEnoughToDrinkAndDrive(19);
