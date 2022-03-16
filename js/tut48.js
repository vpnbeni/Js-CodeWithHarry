console.log("tut 48");
// regular expression
//basic functions
// meta character symols

// Character sets -we use []

// let regex = /^h/i;
let regex = /h[aty]]rry/; //can be an a, t  or y
regex = /h[a-z]]rry/; //cam be from a to z
regex = /h[^aty]]rry/; //can't be an z,t or y
regex = /h[^aty]]rr[yu]/; //can't be an z,t or y + can be from y or u
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; //we can as many cahracter sets as we want

// Quantifiers - we use {}
regex = /har{2}y/; //r can occur exactly 2 times
regex = /har{0,2}y/; //r can occur from 0 to 2 (0,1,2) times.

// Gropings - we use paranthesis for grouping ()
regex = /(har){2}/;//makes group of 'har' which makes 'harhar'

  let str = "harry bhai";
str = "harharbhai";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matche the expression ${regex.source}`
  );
}
