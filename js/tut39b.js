console.log("This is tut 37");

// pretend this response is comming from server
const students = [
  { name: "harry", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      students.push(student);
      let error=false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
} 
function getStudent() {
  setTimeout(() => {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
  }, 1000);
}
let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent)
  .then(getStudent)
  .catch(function () {
    console.log("Some error occured");
  });
// getStudent();
  