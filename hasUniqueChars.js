// Write your code below
//Given a word, return true if that word contains only unique characters. Return false otherwise.

//For example:

//hasUniqueChars("Monday")
// returns true
//hasUniqueChars("Moonday")
// returns false
//Uppercase and lowercase letters should be considered separately:

//hasUniqueChars("Bob")
// returns true

//CODE HERE

function  hasUniqueChars(word) {
    // create an empty set to store seen characters
    let hasChars = new Set([])
    // i need to convert the word to lowercase if needed
    word = word.toLowerCase()
    // loop through each character in the word
    for(let i = 0; i < word.length; i++) {
        hasChars.add(word[i])
        let char = word.char
        // if the character is already in the set then its not unique so return false
        if (hasChars.has(char)) {
            return false
        } 
        // if it does then add to set and returns as true
            hasChars.add(char)
        return true
    }
}
console.log(hasUniqueChars(`Tools`))
console.log(hasUniqueChars(`Things`))
console.log(hasUniqueChars(`Bob`))

//const hasUniqueChars = (string) => {
  //  for(let i= 0; i < string.length; i++) {
    //    for(let x = i +1; x < string.length; x++) {
      //      if(string[i] === string[x]) {
        //        return false
          //  }
//        }
  //  }
    //return true
//}

//console.log(hasUniqueChars(`Tools`))
//console.log(hasUniqueChars(`Bob`))
//console.log(hasUniqueChars(`Things`))

