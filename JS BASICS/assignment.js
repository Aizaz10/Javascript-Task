// 1. Question: Reverse a string without using the built-in reverse() method.

let strg="My name is Aizaz Ahmed."
let reversedStr = '';
  for (let i = strg.length - 1; i >= 0; i--) {
    reversedStr += strg[i];
  }
console.log(reversedStr);

// 2. Question: Count the number of vowels in a given string.

const str="My name is Aizaz Ahmed.";

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
        count++;
  } 
}
console.log("Number of vowels in given string are: " , count);

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

let sentence = "australia beat india in yet another final...";
let capital = '';

for(let i = 0; i < sentence.length; i++) {
  if(i === 0 || sentence[i - 1] === ' ') {
    capital += sentence[i].toUpperCase();
  } else {
    capital += sentence[i];
  }
}

console.log(capital);

// 4. Question: Check if a string is a palindrome.

let word = "wow";
let reversedword = '';

for (let i = word.length - 1; i>= 0;i--){
  reversedword += word[i];
}

let Palcheck = word === reversedword;

if (Palcheck){
  console.log("The string is a palindrome.");
}
else{
  console.log("The string is not a palindrome.");
}

// 5. Question: Find the sum of all positive numbers in an array.

let arr = [-52, -2, 13, -24, 0, 5, -6, 12 ,56,17];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
console.log("Sum of positive numbers:", sum);

// 6. Question: Find the index of the first occurrence of a specific element in an array.
let ar = [3, 7, 1, 9, 4, 2];
let element = 2;
let index = -1;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === element) {
    index = i;
    break;
  }
}
console.log("Index of first occurrence:", index);

// 8. Question: Sort the array in ascending and descending without built-in methods.

let sortascending = [1,22,33,48,5,0,25,10];
let n = sortascending.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (sortascending[j] > sortascending[j + 1]) {
      let temp = sortascending[j];
      sortascending[j] = sortascending[j + 1];
      sortascending[j + 1] = temp;
    }
  }
}
console.log("Array sorted in ascending order:", sortascending);

descending = [58,15,14,89,80,100,1,13];
n = descending.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (descending[j] < descending[j + 1]) {
      let temp = descending[j];
      descending[j] = descending[j + 1];
      descending[j + 1] = temp;
    }
  }
}
console.log("Array sorted in descending order:", descending);

// 9. Question: Print all even numbers between 1 and 20 using a while loop.

let num = 1;
while(num <= 20){
  if(num % 2 === 0){
    console.log(num);
  }
  num++;
}

// 10. Question: Calculate the factorial of a number using a do-while loop.

let number = 10;
let factorial = 1;
let i = 1;

do{
  factorial *= i;
  i++;
} while (i <= number);
console.log("Factorial of", number, "is:", factorial);

// 11. Question: Iterate through the properties of an object using a for-in loop.

const obj={
    name: "Aizaz",
    age: 19,
    city: "Karachi",
    bloodgroup: 'B',
    obtainedmarks: 89,
    maxmarks: 100
};

for (const key in obj) {
    console.log(key + ": " + obj[key]);
}

// 12. Question: Loop through an array using a for-of loop and double each element.

let array = [2,5,6,9,7,1];

for (let num of array) {
  num *= 2;
  console.log(num);
}

// 13. Question: Check if a number is even or odd and return a corresponding message.

let Num=22;
if(Num % 2===0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}

// 14. Question: Find the maximum of three numbers using nested ternary operators.

let num1 = 56;
let num2 = 12;
let num3 = 31;

let max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
console.log("The maximum of", num1 + ",", num2 + " and", num3 + " is:", max);

// 15. Question: Determine if a year is a leap year or not.

let year = 2024;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}