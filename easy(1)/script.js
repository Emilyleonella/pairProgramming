/*
Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
Example:
Input: [2, 4, 7, 11, 15, 16]

Output: Even numbers: [2, 4, 16]
	  Odd Numbers: [7, 11, 15]
*/

array1 = [1, 2, 3, 4, 5, 6, 7];
array2 = [8, 9, 10, 11, 12, 13, 14];
function numbers(array) {
  let evenNums = array.filter((number) => number % 2 == 0);

  console.log(evenNums);

  let oddNums = array.filter((number) => number % 2 !== 0);

  console.log(oddNums);
}
numbers(array1);
//numbers(array2);
