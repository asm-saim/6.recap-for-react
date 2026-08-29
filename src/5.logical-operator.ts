//logical &&:
const age = 35;
const stat = age && "Your age is " + age; //short circuit
console.log(stat);

//Ex: short circuit example:
const name = "JK";
const nameChecker = name && "Name is " + name;
console.log(nameChecker);

//short circuit example:
const product = "Laptop";
const productStat = product && "Available product is " + product;
console.log(productStat);

//Optional Chaining:
const user = null;

const userName = user?.name;
console.log(userName);
