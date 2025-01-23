function getLengthOfWord(word) {
  let palabraSinEspacios = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      palabraSinEspacios += word[i];
    }
  }
  return console.log(palabraSinEspacios.length);
}

getLengthOfWord("Hola beba");
