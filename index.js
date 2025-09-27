var _a;
// ✅ Logs a basic message to verify TypeScript setup
console.log("This is a TypeScript project.");
// ✅ Logs a greeting message to the console
console.log("Hello, World!");
// ✅ Calls the greet function and stores the result in a typed variable
var greeting = greet("TypeScript User");
// ⚠️ This line does nothing — missing parentheses to invoke console.log
console.log;
// ✅ Function declaration with typed parameter and return value
function greet(name) {
    return "Hello, ".concat(name, "!");
}
// -------------------- Variable Declarations --------------------
// ✅ Boolean type variable
var isDone = false;
console.log(isDone);
// ✅ Number type variable
var decimal = 6;
console.log(decimal);
// ✅ String type variable
var color = "blue";
console.log(color);
// ✅ Array of numbers
var list = [1, 2, 3];
console.log(list);
// ✅ Tuple with fixed types and order
var tuple = ["hello", 10];
console.log(tuple);
// ✅ Creates an object that matches the User interface
var object = {
    userName: "Alok Ranjan",
    id: 1,
};
console.log(object);
// ✅ Variable assigned null (type will be inferred as any or null)
var userName = null;
console.log(userName);
// ✅ Declared but uninitialized variable (type is implicitly any)
var userId;
console.log(userId);
// ✅ Using 'any' type to allow dynamic reassignment
var networkData = 123;
networkData = "123";
console.log(networkData);
// -------------------- Function with Typed Parameters --------------------
// ✅ Arrow function with typed parameters and return type
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3));
// -------------------- Arrays --------------------
// ✅ Typed arrays for different data types
var arrayOfNumbers = [1, 2, 3, 4, 5];
var arrayOfStrings = ["one", "two", "three"];
var arrayOfBooleans = [true, false, true];
var arrayOfAny = [1, "two", true, { key: "value" }];
console.log(arrayOfNumbers); // Logs number array
console.log(arrayOfStrings); // Logs string array
console.log(arrayOfBooleans); // Logs boolean array
console.log(arrayOfAny); // Logs mixed-type array
// ✅ Accessing array length
var arrayOfNumbersLength = arrayOfNumbers.length;
console.log(arrayOfNumbersLength);
// ✅ Iterating using traditional for loop
for (var i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}
// ✅ Iterating using forEach method
arrayOfNumbers.forEach(function (num) {
    console.log(num);
});
// ✅ Iterating using for...of loop
for (var _i = 0, arrayOfNumbers_1 = arrayOfNumbers; _i < arrayOfNumbers_1.length; _i++) {
    var num = arrayOfNumbers_1[_i];
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
var unionType;
unionType = 42;
console.log(unionType);
unionType = "A string value";
console.log(unionType);
var mixedArray = [1, "two", 3, "four"];
mixedArray.forEach(function (item) {
    console.log(item);
});
console.log(mixedArray);
// Object Types
var person = {
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
function introduce(name, age, city) {
    if (city === void 0) { city = "Unknown"; }
    if (age) {
        return "My name is ".concat(name, ", I'm ").concat(age, " years old and I live in ").concat(city, ".");
    }
    else {
        return "My name is ".concat(name, " and I live in ").concat(city, ".");
    }
}
// Union Type function
function displayValue(value) {
    if (typeof value === "number") {
        console.log("The number is: ".concat(value));
    }
    else {
        console.log("The string is: ".concat(value));
    }
}
displayValue(100);
displayValue("Hello TypeScript");
console.log(displayValue(100));
console.log(displayValue("Hello TypeScript"));
//void function
logMessage("This is a log message.");
function logMessage(message) {
    console.log("Log: ".concat(message));
}
computeSum(5, 10); // Outputs: 15
function computeSum(a, b) {
    var sum = a + b;
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
var someValue = 123;
// Using 'as' syntax
var strLength1 = someValue.length;
console.log(strLength1);
// Tuple 
//Example 1 : 
var tupleExample = ["Hello", 42, true];
console.log(tupleExample);
// Accessing tuple elements
var firstElement = tupleExample[0];
var secondElement = tupleExample[1];
var thirdElement = tupleExample[2];
console.log(firstElement, secondElement, thirdElement);
//Example 2 : 
console.log("Example 2: Tuple with Conditional Logic");
var _b = [1, 2, "add"], num1 = _b[0], num2 = _b[1], action = _b[2];
if (action === "add") {
    console.log("Sum:", num1 + num2);
}
else if (action === "multiply") {
    console.log("Product:", num1 * num2);
}
console.log("Action:", action);
console.log("Example 3: Tuple with optional element");
//Example 3 : Optional Tuple Elements
var optionalTuple = ["Test", 100];
console.log(optionalTuple);
// Enums
// ✅ Enum declaration
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));
// ✅ Assigning an enum value
var today = Weekday.Monday;
// ✅ Forward and reverse mapping
console.log("Today is:", Weekday[today]); // Outputs: Saturday
console.log("Enum value:", today); // Outputs: 6
var dayName = (_a = Weekday[today]) !== null && _a !== void 0 ? _a : "Unknown";
console.log("Day with value ".concat(today, " is:"), dayName);
// ✅ Iterating over enum keys and values
console.log("Enum Iteration:");
for (var key in Weekday) {
    if (isNaN(Number(key))) {
        console.log("Day name:", key); // Outputs: Sunday, Monday, ...
    }
    else {
        console.log("Day value:", key); // Outputs: 0, 1, 2, ...
    }
}
// ✅ Function using enum
function isWeekend(day) {
    return day === Weekday.Saturday || day === Weekday.Sunday;
}
console.log("Is today weekend?", isWeekend(today)); // false
console.log("Is Saturday weekend?", isWeekend(Weekday.Saturday)); // true
