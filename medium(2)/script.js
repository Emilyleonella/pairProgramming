//Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.
//Example:
//Input: String 1: So dark the con of man
// String 2: Madonna of the Rocks
//Output: True
//Input: String 1: Things are good
//	  String 2: Dogs eat ants
//Output: False

let string1 = `Eat taco`;
let newstring1 = string1.split("").sort().join("");
let string2 = `Tea tree`;
let newstring2 = string2.split("").sort().join("");

let string3 = `Tom Marvolo Riddle`;
let newstring3 = string3.split("").sort().join("");
let string4 = `I am Lord Voldemort`;
let newstring4 = string4.split("").sort().join("");

function checkAnagram(stringA, stringB) {
  if (stringA.length === stringB.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkAnagram(newstring1, newstring2); // true
checkAnagram(newstring3, newstring4); // false
