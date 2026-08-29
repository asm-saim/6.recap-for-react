//Spread in array:
const numbers = [1, 2, 3, 4];
// const newNumbers = numbers; -> not acceptable, cause it changes by reference
const newNumbers = [...numbers];
newNumbers.push(5);
newNumbers.push(6);

console.log(newNumbers);
console.log(numbers);

//Spread in object:
const info = {
  name: "Wahid",
  age: 34,
  location: "AUS",
};
const newInfo = { ...info, origin: "UK", status: "Active" };

console.log(info);
console.log(newInfo);
