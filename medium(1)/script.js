/*
Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
Example 1:
Input: vowelChecker(‘b’)
Output: ‘This is not a vowel’
Example 2:
Input: vowelChecker(‘a’)
Output: ‘This is a vowel’
*/
/*
const vowels = ["a", "e", "i", "o", "u"];
function vowelChecker(x) {
  if (x === vowels[0]) {
    console.log(`${x} is a vowel`);
  } else if (x === vowels[1]) {
    console.log(`${x} is a vowel`);
  } else if (x === vowels[2]) {
    console.log(`${x} is a vowel`);
  } else if (x === vowels[3]) {
    console.log(`${x} is a vowel`);
  } else if (x === vowels[4]) {
    console.log(`${x} is a vowel`);
  } else {
    console.log(`${x} is not a vowel`);
  }
}
vowelChecker("l");
vowelChecker("a");
vowelChecker("z");
*/

const vowels = ["a", "e", "i", "o", "u"];
function vowelChecker(x) {
  for (let i = 0; i < vowels.length; i++) {
    if (x === vowels[i]) {
      return `${x} is a vowel`;
    }
  }
  return `${x} is not a vowel`;
}
console.log(vowelChecker("u"));
