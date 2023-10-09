// 1. Write a program that takes two arrays and finds their intersection using Sets.
// Sample Input:   const arr1 = [1, 2, 3, 4, 5];
//const arr2 = [3, 4, 5, 6, 7];
// Sample Output:  [3, 4, 5]

function unionArray(arr1, arr2) {
  // Create a set to store unique elements from both arrays
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Merge both sets and convert back to array
  const result = [...new Set([...set1, ...set2])];
  return result;
}

// Driver code
const arr1 = [1, 2, 2, 2, 3];
const arr2 = [2, 3, 3, 4, 5, 5];

// Function call
const uni = unionArray(arr1, arr2);
console.log(uni.join(" "));

// 2.Write a program that takes an array containing nested arrays and flattens it into a single array using the array methods.
// Sample Input:   const arr = [1, [2, 3], [4, 5, [6, 7]]];
// Sample Output: [1, 2, 3, 4, 5, 6, 7]

var flatten = function (a, shallow, r) {
  if (!r) {
    r = [];
  }

  if (shallow) {
    return r.concat.apply(r, a);
  }

  for (var i = 0; i < a.length; i++) {
    if (a[i].constructor == Array) {
      flatten(a[i], shallow, r);
    } else {
      r.push(a[i]);
    }
  }
  return r;
};

console.log(flatten([1, [2, 3], [4, 5, [6, 7]]]));

// 13. Write a program that takes an array containing both truthy and falsy values and removes the falsy values using the array methods.Sample Input: const arr = [0, &quot;hello&quot;, &quot;&quot;, 42, false, &quot;world&quot;, null, true, undefined]; Sample Output: [&quot;hello&quot;, 42, &quot;world&quot;, true]

const myArr = [0, "hello", "", 42, false, "world", null, true, undefined];
const filteredArr = myArr.filter(Boolean);
console.log(filteredArr);

// 14. Write a program that takes an array of numbers and returns an array with only the unique elements without using the array methods.Sample Input: const arr = [1, 2, 2, 3, 4, 4, 5]; Sample Output: [1, 2, 3, 4, 5]

function getUniqueElements(myArr1s) {
  const uniqueArr = [];
  const numMap = {};

  for (const num of myArr1) {
    if (!numMap[num]) {
      uniqueArr.push(num);
      numMap[num] = true;
    }
  }

  return uniqueArr;
}

const myArr1 = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10];
const uniqueElements = getUniqueElements(arr1);
console.log(uniqueElements);

// 15. Write a program that takes an array of numbers and filters out the prime numbers using the array methods.
// Sample Input: const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// Sample Output: [2, 3, 5, 7]

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = myArr2.filter(isPrime);
console.log(primeNumbers);

// 16. Write a program that takes an object and checks if a specific property exists Sample Input: const obj = { name: &quot;John&quot;, age: 30, city: &quot;New York&quot; }; const propertyName = &quot;age&quot;;
// Sample Output: Property &quot;age&quot; exists: true

function checkPropertyExists(obj, propertyName) {
  return propertyName in obj;
}

const obj = { name: "John", age: 30, city: "New York" };
const propertyName = "age";
const propertyExists = checkPropertyExists(obj, propertyName);

console.log(`Property "${propertyName}" exists: ${propertyExists}`);

// 17. Write a program that takes an object containing some properties with undefined values and removes those properties Sample Input: const obj = { name: &quot;John&quot;, age: undefined, city: &quot;New York&quot; };
// Sample Output: { name: &quot;John&quot;, city: &quot;New York&quot; }

function removeUndefinedProperties(myObj) {
  const newObj = {};

  for (const key in myObj) {
    if (myObj.hasOwnProperty(key) && myObj[key] !== undefined) {
      newObj[key] = myObj[key];
    }
  }

  return newObj;
}

const myObj = { name: "John", age: undefined, city: "New York" };
const cleanedObj = removeUndefinedProperties(myObj);
console.log(cleanedObj); // Output: { name: "John", city: "New York" }

// 18. Write a program that takes an array containing nested arrays and destructures specific elements from the nested arrays.Sample Input const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]; Sample Output: First Element of Nested Array: 1 // Second Element of Nested Array: 4 Third Element of Nested Array:

const myArr3 = [[1, 2], [3, 4, 5], [6, 7, 8, 9], [10]];

for (const nestedArray of myArr3) {
  const [firstElement, , thirdElement] = nestedArray;

  console.log(`First Element of Nested Array: ${firstElement}`);
  console.log(`Third Element of Nested Array: ${thirdElement}`);
}

// 19. Write a program that takes an object and extracts properties with renamed variables using destructuring assignment.Sample Input: const user = { name: &quot;John&quot;, age: 30 };Sample Output: User Name: John User Age: 30

const user = { name: "Dhiraj", age: 24 };

const { name: userName, age: userAge } = user;

console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);

// 20. Write a program that takes a function with an object parameter and provides default
// values for missing properties using destructuring assignment.
// Sample Input:

// function displayInfo({ name = &quot;Anonymous&quot;, age = 25 }) {
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// }
// const obj = { name: &quot;John&quot; };
// Sample Output:
// Name: John
// Age: 25

function displayInfo({ name = "Anonymous", age = 25 }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const myObj1 = { name: "John" };
displayInfo(myObj1);
