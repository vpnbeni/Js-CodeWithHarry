console.log("tut 57");
// Maps in JavaScript:we can use any type of key

const myMap = new Map();

console.log(myMap);

const key1 = "My String",
  key2 = {},
  key3 = function () {};

myMap.set(key1, "This is my string");
myMap.set(key2, "This is my object");
myMap.set(key3, "This is my empty function");

for (const [key, value] of myMap) {
  console.log(key, value);
}
