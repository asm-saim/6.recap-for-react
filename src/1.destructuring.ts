//Object destructuring:
const info = {
  name: "Alan",
  age: 23,
  location: "UK",
};

const name = info.name;
const ag = info.age;
const loc = info.location;

const { name: newName, age, location } = info;

//Array destructuring:
const numbers = [1, 2, 3, 4];
const [first, second, third, forth] = numbers; //useState() hook concept.
//Usually, useState is a function
console.log(first, second);
