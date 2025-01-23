const isSameLength = (word1, word2) => {
    if (word1.length === word2.length) {
        return console.log(true);
    } else if (word1.length !== word2.length) {
        return console.log(false);
    }
}

isSameLength("hola", "solita");