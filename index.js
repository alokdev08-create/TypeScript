"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("This is a TypeScript project.");
// This is a simple TypeScript file that logs a message to the console.
// You can add more functionality as needed.
console.log("Hello, World!");
let greeting = greet("TypeScript User");
console.log;
function greet(name) {
    return `Hello, ${name}!`;
}
//1 . Variables declaration and types
let isDone = false;
console.log(isDone);
let decimal = 6;
console.log(decimal);
let color = "blue";
console.log(color);
let list = [1, 2, 3];
console.log(list);
let tuple = ["hello", 10];
console.log(tuple);
// ✅ Create an object with that type
const object = {
    userName: "Alok Ranjan",
    id: 1
};
console.log(object);
let userName = null;
console.log(userName);
let userId;
console.log(userId);
let networkData = 123;
networkData = "123";
console.log(networkData);
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));
let arrayOfNumbers = [1, 2, 3, 4, 5];
let arrayOfStrings = ["one", "two", "three"];
let arrayOfBooleans = [true, false, true];
let arrayOfAny = [1, "two", true, { key: "value" }];
console.log(arrayOfNumbers);
console.log(arrayOfStrings);
console.log(arrayOfBooleans);
console.log(arrayOfAny);
let arrayOfNumbersLength = arrayOfNumbers.length;
console.log(arrayOfNumbersLength);
for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}
//# sourceMappingURL=index.js.map