console.log("tut 49");

// Character classes

let regex = /h[aty]]rry/;
regex = /\war/; // Word character ( _ or alphabet or number)
regex = /\w+d1r/; // some word character with d1r
regex = /\Wbahi/; // Non word character
regex = /\W+bahi/; // Multiple Non word character
regex = /\d999/; // \d means digit
regex = /\d+999/; // more than one digit
regex = /\D999/; //  one non digit
regex = /\D+999/; // more than one non digit
regex = /\ska number/; //white space
regex = /\ska number/; //white space
regex = /\Ska number/; //non white space
regex = /\S+ka number/; //multiple non white space
regex = /4r5r\b/; //word boundary

// Assertions
regex = /h(?=y)/; //
// regex=/h(?!y)/;

let str = "harry bhai";
str = "akfjldasjfd1rasdkf bahid1r";
str = "adjnajkvsd4r5r harry ka number 9999";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matche the expression ${regex.source}`
  );
}
