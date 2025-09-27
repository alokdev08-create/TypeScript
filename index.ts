// ✅ Logs a basic message to verify TypeScript setup
console.log("This is a TypeScript project.");

// ✅ Logs a greeting message to the console
console.log("Hello, World!");

// ✅ Calls the greet function and stores the result in a typed variable
let greeting: string = greet("TypeScript User");

// ⚠️ This line does nothing — missing parentheses to invoke console.log
console.log;

// ✅ Function declaration with typed parameter and return value
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// -------------------- Variable Declarations --------------------

// ✅ Boolean type variable
let isDone: boolean = false;
console.log(isDone);

// ✅ Number type variable
let decimal: number = 6;
console.log(decimal);

// ✅ String type variable
let color: string = "blue";
console.log(color);

// ✅ Array of numbers
let list: number[] = [1, 2, 3];
console.log(list);

// ✅ Tuple with fixed types and order
let tuple: [string, number] = ["hello", 10];
console.log(tuple);

// -------------------- Interface & Object --------------------

// ✅ Defines a custom type for user objects
interface User {
  userName: string;
  id: number;
}

// ✅ Creates an object that matches the User interface
const object: User = {
  userName: "Alok Ranjan",
  id: 1,
};
console.log(object);

// ✅ Variable assigned null (type will be inferred as any or null)
let userName = null;
console.log(userName);

// ✅ Declared but uninitialized variable (type is implicitly any)
let userId;
console.log(userId);

// ✅ Using 'any' type to allow dynamic reassignment
let networkData: any = 123;
networkData = "123";
console.log(networkData);

// -------------------- Function with Typed Parameters --------------------

// ✅ Arrow function with typed parameters and return type
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(2, 3));

// -------------------- Arrays --------------------

// ✅ Typed arrays for different data types
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
let arrayOfStrings: string[] = ["one", "two", "three"];
let arrayOfBooleans: boolean[] = [true, false, true];
let arrayOfAny: any[] = [1, "two", true, { key: "value" }];

console.log(arrayOfNumbers); // Logs number array
console.log(arrayOfStrings); // Logs string array
console.log(arrayOfBooleans); // Logs boolean array
console.log(arrayOfAny); // Logs mixed-type array

// ✅ Accessing array length
let arrayOfNumbersLength: number = arrayOfNumbers.length;
console.log(arrayOfNumbersLength);

// ✅ Iterating using traditional for loop
for (let i = 0; i < arrayOfNumbers.length; i++) {
  console.log(arrayOfNumbers[i]);
}

// ✅ Iterating using forEach method
arrayOfNumbers.forEach((num) => {
  console.log(num);
});

// ✅ Iterating using for...of loop
for (const num of arrayOfNumbers) {
  console.log(num);
}

console.log(typeof arrayOfNumbers); // Output: 'object'

// All methods and properties of arrayOfNumbers are accessible here
// console.log(arrayOfNumbers.pop()); // Removes and logs the last element
// console.log(arrayOfNumbers);       // Logs the modified array
// console.log(arrayOfNumbers.push(6)); // Adds an element and logs new length
// console.log(arrayOfNumbers);
// console.log(arrayOfNumbers.indexOf(3)); // Logs the index of element '3'
// console.log(arrayOfNumbers.slice(1, 4)); // Logs a portion of the array
// console.log(arrayOfNumbers.sort()); // Logs the sorted array
// console.log(arrayOfNumbers.reverse());
// console.log(arrayOfNumbers.concat([7, 8, 9])); // Logs concatenated array
// console.log(arrayOfNumbers.join(", ")); // Logs array elements as a string
// console.log(arrayOfNumbers.includes(4)); // Logs true if '4' is in the array
// console.log(arrayOfNumbers.map(num => num * 2)); // Logs a new array with each element doubled
// console.log(arrayOfNumbers.filter(num => num % 2 === 0)); // Logs a new array with only even numbers
// console.log(arrayOfNumbers.reduce((acc, num) => acc + num, 0)); // Logs the sum of all elements
// console.log(arrayOfNumbers.find(num => num > 3));
// console.log(arrayOfNumbers.every(num => num > 0)); // Logs true if all elements are greater than 0
// console.log(arrayOfNumbers.some(num => num > 4));
// console.log(arrayOfNumbers.fill(0, 2, 5)); // Logs the array with elements from index 2 to 4 set to 0
// console.log(arrayOfNumbers.flatMap(num => [num, num * 2]));
// console.log(arrayOfNumbers.copyWithin(0, 3, 5)); // Logs the array after copying elements within it
// console.log(arrayOfNumbers.entries());
// console.log(arrayOfNumbers.keys());
// //console.log(arrayOfNumbers.values());
// console.log(Array.isArray(arrayOfNumbers)); // Logs true if arrayOfNumbers is an array
// console.log(arrayOfNumbers.toString()); // Logs the array as a comma-separated string
// console.log(arrayOfNumbers.toLocaleString());
//console.log(arrayOfNumbers.findIndex(num => num === 3)); // Logs the index of the first element that matches the condition

// Union Types
let unionType: number | string;
unionType = 42;
console.log(unionType);
unionType = "A string value";
console.log(unionType);
let mixedArray: (number | string)[] = [1, "two", 3, "four"];

mixedArray.forEach((item) => {
  console.log(item);
});

console.log(mixedArray);

// Object Types
let person: {
  name: string;
  age: number;
  isEmployed: boolean;
} = {
  name: "Alok",
  age: 32,
  isEmployed: true,
};

console.log(person.name);
console.log(person.age);
console.log(person.isEmployed);
console.log(typeof person);

// function with optional and default parameters
introduce("Alice"); // Uses default city
introduce("Bob", 25); // Uses default city
introduce("Charlie", 30, "New York"); // All parameters provided
console.log(introduce("Alice"));
console.log(introduce("Bob", 25));
console.log(introduce("Charlie", 30, "New York"));

// Function definition
function introduce(
  name: string,
  age?: number,
  city: string = "Unknown"
): string {
  if (age) {
    return `My name is ${name}, I'm ${age} years old and I live in ${city}.`;
  } else {
    return `My name is ${name} and I live in ${city}.`;
  }
}

// Union Type function
function displayValue(value: number | string): void {
  if (typeof value === "number") {
    console.log(`The number is: ${value}`);
  } else {
    console.log(`The string is: ${value}`);
  }
}

displayValue(100);
displayValue("Hello TypeScript");
console.log(displayValue(100));
console.log(displayValue("Hello TypeScript"));

//void function
logMessage("This is a log message.");
function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}

computeSum(5, 10); // Outputs: 15
function computeSum(a: number, b: number): void {
  let sum: number = a + b;
  console.log(sum);
}

// Never function
// Uncomment the following line to see the error
// let neverVar1: string = "This will cause an error";
// let neverVar2: number = 123;
// let neverVar3: null = null;
// let neverVar4: undefined = undefined;
// let neverVar5: object = {};
// let neverVar6: any[] = [];

// let neverVar7: boolean = true;
// let neverVar8: boolean = false;
// //let neverVar9: symbol = Symbol();
// //let neverVar10: bigint = BigInt(123);
// let neverVar11: () => void = function () {};
// let neverVar12: RegExp = /abc/;

// function throwError(): never {
//   throw new Error("This function never returns");
// }

// let neverVar: never = throwError(); // ✅ Valid assignment

//Assertion
let someValue: unknown = 123;

// Using 'as' syntax
let strLength1: number = (someValue as string).length;
console.log(strLength1);

// Tuple 
  //Example 1 : 
let tupleExample: [string, number, boolean] = ["Hello", 42, true];
console.log(tupleExample);

// Accessing tuple elements
let firstElement: string = tupleExample[0];
let secondElement: number = tupleExample[1];
let thirdElement: boolean = tupleExample[2];
console.log(firstElement, secondElement, thirdElement);
//Example 2 : 
console.log("Example 2: Tuple with Conditional Logic");

const [num1, num2, action] = [1, 2, "add"];

if (action === "add") {
  console.log("Sum:", num1 + num2);
} else if (action === "multiply") {
  console.log("Product:", num1 * num2);
}
console.log("Action:", action);

console.log("Example 3: Tuple with optional element");
//Example 3 : Optional Tuple Elements
let optionalTuple: [string, number, boolean?] = ["Test", 100];
console.log(optionalTuple);

// Enums
// ✅ Enum declaration
enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// ✅ Assigning an enum value
const today: Weekday = Weekday.Monday;

// ✅ Forward and reverse mapping
console.log("Today is:", Weekday[today]); // Outputs: Saturday
console.log("Enum value:", today);        // Outputs: 6

const dayName: string = Weekday[today] ?? "Unknown";
console.log(`Day with value ${today} is:`, dayName);


// ✅ Iterating over enum keys and values
console.log("Enum Iteration:");
for (const key in Weekday) {
  if (isNaN(Number(key))) {
    console.log("Day name:", key);        // Outputs: Sunday, Monday, ...
  } else {
    console.log("Day value:", key);       // Outputs: 0, 1, 2, ...
  }
}

// ✅ Function using enum
function isWeekend(day: Weekday): boolean {
  return day === Weekday.Saturday || day === Weekday.Sunday;
}

console.log("Is today weekend?", isWeekend(today));               // false
console.log("Is Saturday weekend?", isWeekend(Weekday.Saturday)); // true

