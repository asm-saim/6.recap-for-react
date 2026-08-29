// Array Methods: map(), filter(), find(),
// Array, String methods:  includes()
// map() - showing the data in the UI in react.
// filter() - showing the filtered data.
// find() - find out a specific data.
// includes() - a data in array exist ot not. Returns boolean result.

//filter:
const num = [3, 4, 5, 6, 7, 8, 76];
const newNum = num.filter((num) => num > 6);
console.log(newNum);

//map:
const values = [3, 55, 7, 88, 9];
const newValue = values.map((value) => value + 1);
console.log(newValue);

//Real life Example: (react analogy)
const names = ["Hakan", "Kamal", "Erbakan"];
const newnames = names.map((name, index) => {
  console.log(`${index + 1}. ${name} `);
});
