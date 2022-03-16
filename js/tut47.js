console.log("tut 47");

let regex = /harry/;
// lets look into some metacharacter symbols
regex = /^harr/; // means expression will match if string starts with
regex = /ry$/; // $at the end of the string means "string ends with"
regex = /h.rry/; //metches anyone character
regex = /h*rry/; //metches any 0 or more character
regex = /ha?rryi?/; //? after character means that character is optional
regex = /h\*rry/;

let str = "h*rry is harry";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matche the expression ${regex.source}`
  );
}
