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

//find method: returns a single product
const products = [
  {
    name: "Bonsai",
    price: 25000,
  },
  {
    name: "Aquarium",
    price: 10000,
  },
  {
    name: "Bird Cage",
    price: 3000,
  },
];

const newProduct = products.find((product) => product.price === 3000);
console.log(newProduct);

//includes:
const string = "Hello there!";
const newValues = [2, 5, 67, 8, 9];

const search = string.includes("!");
console.log(search);

if (newValues.includes(5)) {
  console.log("5 Found");
} else {
  console.log("Not Fund");
}
