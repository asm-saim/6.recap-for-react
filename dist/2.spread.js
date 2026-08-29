"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Spread in array:
const numbers = [1, 2, 3, 4];
// const newNumbers = numbers; -> not acceptable, cause it changes by reference
const newNumbers = [...numbers];
newNumbers.push(5);
newNumbers.push(6);
console.log(newNumbers);
console.log(numbers);
//# sourceMappingURL=2.spread.js.map