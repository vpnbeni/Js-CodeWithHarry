console.log("tut 58");

// Set stores unique values
const mySet = new Set();

// Adding values to this set
mySet.add("This");
mySet.add("That");
mySet.add("My name");
mySet.add({ name: "Vipin" });
mySet.add('["harry","Rohan","Sohan"]');

console.log("This set looks like ", mySet);

// for (const key of mySet) {
//   console.log(key);
// }

console.log(mySet.has("This"));
mySet.forEach((item)=>{
    console.log(item)
    
})
