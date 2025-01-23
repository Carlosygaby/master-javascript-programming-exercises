function isOldEnoughToDrink(age) {
    if (age >= 22) {
        return true;
    } else if (age < 22) {
        return false;
    }

}

console.log(isOldEnoughToDrink(21));
