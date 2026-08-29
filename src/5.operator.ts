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

//Optional Chaining: to prevent error. even the property do not exist.
const user = null;
const userName = user?.name;
console.log(userName);

//Nullish Coalescing:(null, undefined)
const userInfo = null;
if (userInfo) {
  console.log(userInfo);
} else {
  console.log("Unavailable");
}
//ternary:
userInfo ? console.log(userInfo) : console.log("Unavailable");

//short circuit:
userInfo && console.log(userInfo);

//nullish:
console.log(userInfo ?? "Unavailable");
