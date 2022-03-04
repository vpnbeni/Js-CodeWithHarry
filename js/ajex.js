console.log("Ajex tut");
// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);
// function buttonClickHandler() {
//   console.log("You have clicked the fetchBtn");
//   //Instantiate an xhr object
//   const xhr = new XMLHttpRequest();
//   //open the object
//   // xhr.open("GET", "harry.txt", true);
//   // use this for post request
//   xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
//   xhr.getResponseHeader("Content-type", "application/json");
//   // what to do on progress(optional)
//   xhr.onprogress = function () {
//     console.log("On progress");
//   };
//   // what to do when reponse is ready
//   xhr.onload = function () {
//     if (this.status == 200) {
//       console.log(this.responseText);
//     } else {
//       console.log("Some error occured");
//     }
//   };
//   // send the request
//   param = `{"name":"test","salary":"123","age":"23"}`;
//   xhr.send(param);
// }

// let popBtn = document.getElementById("popHandler");
// popBtn.addEventListener("click", popHandler);
// function popHandler() {
//   console.log("You have clicked the popBtn");
//   //Instantiate an xhr object
//   const xhr = new XMLHttpRequest();
//   //open the object
//   xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

//   // what to do on progress(optional)
//   xhr.onprogress = function () {
//     console.log("On progress");
//   };
//   // what to do when reponse is ready
//   xhr.onload = function () {
//     if (this.status == 200) {
//       let obj = JSON.parse(this.responseText).data;
//       console.log(obj);
//       let list = document.getElementById("list");
//       str = "";
//       for (key in obj) {
//         str += `<li>${obj[key].employee_name}</li>`;
//       }
//       list.innerHTML = str;
//     } else {
//       console.log("Some error occured");
//     }
//   };

//   xhr.send();
//   console.log("We are done here");
// }

// Exercise for Ajex

console.log("Quiz for Ajex");
let getName = document.getElementById("getName");
getName.addEventListener("click", getEmployeeHandlr);
function getEmployeeHandlr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhr.onprogress = function () {
    //   let getEmployeeHandlr = document.getElementById("getEmployeeHandlr");
    //   let str = `<div class="spinner-border" role="status">
    //   <span class="sr-only"></span>
    // </div>`;
    //   getEmployeeHandlr.innerHTML = str;
    console.log("in Porgress");
  };
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText).data;
      console.log(obj);
      let list = document.getElementById("listName");
      str = "";
      for (key in obj) {
        str += `
        <tr>
        <th scope="row">${Number(key) + 1}</th>
        <th scope="row">${obj[key].employee_name}</th>
        </tr>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
  console.log("We are done here");
}
let getSalary = document.getElementById("getSalary");
getSalary.addEventListener("click", getEmployeeSalaryHandlr);
function getEmployeeSalaryHandlr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhr.onprogress = function () {
    //   let getEmployeeHandlr = document.getElementById("getEmployeeHandlr");
    //   let str = `<div class="spinner-border" role="status">
    //   <span class="sr-only"></span>
    // </div>`;
    //   getEmployeeHandlr.innerHTML = str;
    console.log("in Porgress");
  };
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText).data;
      console.log(obj);
      let list = document.getElementById("listSalary");
      str = "";
      for (key in obj) {
        str += `
        <tr>
        
        <th scope="row">${obj[key].employee_salary}</th>
        </tr>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
  console.log("We are done here");
}
