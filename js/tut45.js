console.log("tut 46");
let reg = /harry/;
reg = /harry/g; //g me ans global
// reg = /harry/i;//for case insensitive
// console.log("reg");
// console.log("reg.source");

let s = "This is great code with harry and also harry bhai";
//Functions to match expressions
//1. exec()- This function will return an array for match or null for no match.
let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

// if (result) {
//   console.log(result);
//   console.log(result.input);
//   console.log(result.index);
// }

// 2. test() - returns true or false
let result2 = reg.test(s);
// console.log(result2); //-->ths will only print true if the "reg " is there in the string "s"

// 3. match()- it will return an array of results or null
let result3 = s.match(reg);
// console.log(result3);

// 4. search()- return index of first match or -1
let result4 = s.search(reg);
console.log(result4);


// 5. replace()- 
