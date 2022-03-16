console.log("This is tutorial 44");
//Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("This is undefined ");
}
try {
  console.log("This is try block");
//   function Harry();
} catch (error) {
  console.log("Are you okay?");
//   console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Finally we will run this");
}
