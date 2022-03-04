// console.log("Welcome to tut new.js");
// let a = document;

// // a = document.all;
// a = document.all;
// Array.from(a).forEach(function (element) {
//   console.log(element);
// });
// console.log(a);
// let web = document.links;
// let a = `javascript`;

// Array.from(web).forEach(function (element) {
//   if (element.href.includes(a)) {
//     console.log(element.href);
//   }
// });
// console.log("Exercise 1");

// z = document.links;

// let a = "Harry";
// let b = "javascript";

// Array.from(z).forEach(function (element) {
//   //   if (String(element).includes(b)) {
//   //     console.log(element.href); // also we can do console.log(element.href)
//   //   }
//   if (String(element).includes(b)) {
//     console.log(element);
//   }
//   console.log(element.href);
// });
// console.log("Welcome to tutorial 14");

// let elems = document.getElementsByClassName("container");
// // elems = document.getElementsByClassName("child");
// console.log(elems[0].getElementsByClassName("child"));
// // Array.from(elems).forEach((element) => {
// //   element.style.color = "blue";
// // });

// for (let i = 0; i < elems.length; i++) {
//   const element = elems[i];
//   console.log(element);
//   element.style.color = "darkcyan";
// }

// console.log(`This is tut. 15`);

// let cont = document.querySelector(`.container`);
// console.log(cont.childNodes);
// console.log(cont.children);
// let cont = document.querySelector(".container");
// // console.log(cont.children[1].children[0].children);
// // console.log(cont.firstElementChild);
// // console.log(cont.childElementCount);
// console.log(cont.firstElementChild.nextElementSibling);

// let element = document.createElement("li");
// let text = document.createTextNode("This is a text node");
// element.appendChild(text);
// element.className = "childul";
// element.id = "createdLi";
// element.setAttribute("title", "mytitle");
// // element.innerText = "Hello this is created by Vipin";
// let ul = document.querySelector("ul.this");
// ul.appendChild(element);

// // console.log(element);

// let elem2 = document.createElement("h3");
// elem2.id = "elem2";
// elem2.class = "elem2";
// let tnode = document.createTextNode("this is a created node for elem2");
// elem2.appendChild(tnode);
// element.replaceWith(elem2);

// let myul = document.getElementById("myul");
// myul.replaceChild(element, document.getElementById("fui"));
// myul.removeChild(document.querySelector("#lui"));
// let pr = elem2.hasAttribute("href");
// elem2.removeAttribute("id");
// elem2.setAttribute("title", "myelem2title");
// console.log(elem2, pr);

// Solve this Quize
// let el = document.createElement("h3");
// let text = document.createTextNode("Go to Code With Harry");
// el.appendChild(text);

// el.innerHTML = `<a href="https://codewithharry.com">Go To CodeWithHarry </a>`;

// let hd = document.querySelector("form");

// hd.appendChild(el);

// console.log("tut17");
// document.getElementById("heading").addEventListener("click", function (e) {
//   console.log(`You Have Clicked The Heading`);
//   //   location.href = "//codewithharry.com";
//   let el;
//   el = e.target;
//   el = e.offsetX;
//   el=e.offsetY;
//   el=el.
//   console.log(el);
// });

// console.log(`tut 18`);
// let btn = document.getElementById("btn");
// btn.addEventListener("click", func1);
// btn.addEventListener("dblclick", func2);
// function func1(e) {
//   console.log("Thanks", e);
//   e.preventDefault();
// }
// function func2(e) {
//   console.log("Thanks it is dblclick", e);
//   e.preventDefault();
// }
// document.querySelector(".no").addEventListener("mousemove", function () {
//   console.log("You entered no");
// });
/*
console.log("Tut 20");
let impArray=['adrak','pyaz','bhindi']
localStorage.setItem("Name", "Vipin");
localStorage.setItem("Sabji", JSON.stringify(impArray));
localStorage.setItem("Name2", "Harry");
//clearing the entire local storage
// localStorage.clear();


//removeing perticular item from 
// localStorage.removeItem('Name');
let name = localStorage.getItem("Sabji");
name = JSON.parse(localStorage.getItem("Sabji"));
console.log(name);


// let txt = document.createTextNode(`
// This is part of editable content.
// Here am using contenteditable attribute to make the div editable
// `);
// newDiv.appendChild(txt);

//Quiz 2 Tut 21

let newDiv = document.createElement("div");
newDiv.innerText = `This is part of editable content.
Here am using contenteditable attribute to make the div editable
`;
let hdng = document.querySelector("#heading");

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(
    newNode,
    existingNode.nextElementSibling
  );
}
insertAfter(newDiv, hdng);

document.addEventListener("mouseover", function () {
  newDiv.setAttribute("contenteditable", "true");
  //though we can skip the function part and instead we can just simply add the setAtribute part , it will work the same.
});
let divToLs = localStorage.setItem("newDiv", "");
document.addEventListener("mouseleave", function () {
  divToLs = localStorage.setItem("newDiv", newDiv.textContent);
});


//tut 24 js
console.log("tut 24");
let today = new Date();
// console.log(typeof(today));
let otherDate = new Date("8-4-2003 04:54:08");
// console.log(otherDate);
let a;
a = otherDate.getDate();
console.log(a);

//tut 27
console.log("tut27");
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("car is runnitng");
  },
};
console.log(car);

// we have already seen constructors like these
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is runing`);
  };
}
car1 = new GeneralCar("Nissan", 180);
console.log(car1);
console.log("tut 28");
//
// object litereral
let obj = {
  name: "Harry",
  channel: "Code Wth Harry",
  adress: "Mars",
};
// console.log(obj);

function Obj(givenName) {
  this.name = givenName;
}
Obj.prototype.getName = function () {
  return this.name;
};
Obj.prototype.setName = function (newName) {
  this.name=newName;
};
let obj2 = new Obj("Vipin");
console.log(obj2);


console.log("tut30");
const proto = {
  slogan: function () {
    return "This company is the best";
  },
  changeName: function (newName) {
    this.name = newName;
  },
};
const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Programer";
harry.changeName("Harry2");

console.log(harry);

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}
//Slogan
Employee.prototype.slogan = function () {
  return `This company is the best. Reagards, ${this.name}`;
};

let harryObj = new Employee("Harry", 324234, 87);
console.log(harryObj);

//Programer
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor=Programmer;


let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);


//Quiz tut30
//to make an object with name flour
// than inherit it to make cake

function makeCake(flour, fat, liqid) {
  this.flour = flour;
  this.fat = fat;
  this.liquid = liqid;
}
makeCake.prototype.bake = function () {
  return `Cake is ready!`;
};
let newCake=new makeCake('wheet','eggs','milk');
console.log(newCake);
// newCake.prototype=Object.create(makeCake.prototype);

console.log("this is tut31");
class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and this company is the best`;
  }
  joiningYear() {
    return 2022 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Employee {
  constructor(
    givenName,
    givenExperience,
    givenDivision,
    givenLanguage,
    github
    ) {
      super(givenName, givenExperience, givenDivision);
      this.language = givenLanguage;
      this.github = github;
    }
    favoriteLanguage() {
      if (this.language == "python") {
        return "Python";
      } else {
        return "JavaScript";
      }
      
    }
    static multiply(a,b){
      return a*b;
    }
  }
  // harry = new Employee("Vipin", 19, "Division");
  // console.log(harry.joiningYear());
  // console.log(Employee.add(34, 5));
  rohan =new Programmer('Rohan',3,"Lays",'Go',"Rohan420");
  console.log(rohan);
  console.log(rohan.favoriteLanguage());
  // let input = "";
  // process.stdin.on("data", function (chunk) {
//   input = input + chunk;
// });
// process.stdin.on("end", function () {
  //   input = input.split("/n");
  //   let T=parseInt(input[0]);
  //   for (let K = 1; K < =input[0]; K++) {
    //     const e = input[K];
    //     console.log(52%e);
    //     }
//   // console.log(input);
// });
// let input = "";
// process.stdin.on("data", function (chunk) {
  //   input = input + chunk;
  // });
// process.stdin.on("end", function () {
  //   input = input.split("\n");
  //   let x=parseInt(input[0]);
  //   let y=parseInt(input[1]);
  //   if (x%5===0 && y>x ) {
    //     y=y-x-0.50;
    //     console.log(y.toFixed(2));
    //   }
    //   else{
//     console.log(y.toFixed(2));
//   }
// });
console.log("tut 32");

class library {
  constructor(book1, book2, book3, book4, book5) {
    this.books = [book1, book2, book3, book4, book5];
  }
  getBookList() {
    console.log(this.books);
  }
  // issueBook(bookName, user) {
    //   // let User = {
      //   //   userName: "",
      //   //   bookIssued: [],
      //   // };
      //   let libraryUsers = localStorage.getItem("libraryUsers");
      //   let userObj;
      //   if (libraryUsers == null) {
        //     userObj = [];
        //   } else {
  //     userObj = JSON.parse(libraryUsers);
  //   }
  //   console.log(userObj.filter((e) => e.issueBook===bookName));
  //   if (this.books.includes(bookName) ) {
    //     let User = {
      //       userName: user,
      //       bookIssued: [bookName],
      //     };
      //     if ((userObj.filter((e) => e.userName === user).length >0)) {
        //       userObj.filter((e) => e.userName === user)[0].bookIssued.push(bookName);
        //     } else {
          //       userObj.push(User);
  //     }
  
  //     localStorage.setItem("libraryUsers", JSON.stringify(userObj));
  //   } else {
    //     console.log(
      //       `The book ${this.bookName} is either not in library or it is already issued`
      //     );
      //   }
      // }
      
      //if user name and book name are same than dont issue
      //if the book is not in library than dont issue it
      //if user name is same but book is different than issue the book and keep the record in array of issued books
      //if user is different and book is same than issue the book
      
      issueBook(bookName, user) {
        if (this.books.includes(bookName)) {
          let User = {
            userName: user,
            bookIssued: [bookName],
          };
          let libraryUsers = localStorage.getItem("libraryUsers");
      let userObj;
      if (libraryUsers == null) {
        userObj = [];
      } else {
        userObj = JSON.parse(libraryUsers);
      }

      if (userObj.filter((e) => e.userName === user).length > 0) {
        if (userObj.filter((e) => e.bookIssued.includes(bookName)).length > 0) {
          console.log(`The book "${bookName}" is already issued`);
        } else {
          userObj.find((e) => e.userName === user).bookIssued.push(bookName);
          localStorage.setItem("libraryUsers", JSON.stringify(userObj));
        }
      } else {
        userObj.push(User);
        localStorage.setItem("libraryUsers", JSON.stringify(userObj));
      }
    } else {
      console.log(`This book is not in our library`);
    }
  }
  returnBook(bookName, user) {
    if (this.books.includes(bookName)) {
      let libraryUsers = localStorage.getItem("libraryUsers");
      let userObj;
      if (libraryUsers == null) {
        userObj = [];
      } else {
        userObj = JSON.parse(libraryUsers);
      }
      
      if (userObj.filter((e) => e.userName === user).length > 0) {
        if (userObj.filter((e) => e.bookIssued.includes(bookName)).length > 0) {
          let userBook = userObj.find((e) => e.userName === user).bookIssued;
          for (let i = 0; i < userBook.length; i++) {
            if (userBook[i] === bookName) {
              userBook.splice(i, 1);
            }
          }
          localStorage.setItem("libraryUsers", JSON.stringify(userObj));
        } else {
          console.log(`"${user}" have not issued the book ${bookName}`);
        }
      } else {
        console.log(`The Book ${bookName} is not issued`);
      }
    } else {
      console.log(`This book is not of our library`);
    }
  }
}
 
sarswati = new library(
  `The Rudest Book Ever`,
  `Subtal Art Of Not Giving A F*ck!`,
  `Rich Dad Poor Dad`,
  `Mathematics`,
  `Physics`
  );
  // console.log(sarswati);
  
  //Testing area  =>
  
  // let asdf=[];
  // let bookNamez = {
    //   book1:`The Rudest Book Ever`,
    //   book2:`Subtal Art Of Not Giving A F*ck!`,
    //   book3: [1,2 ,3,'Name'],
    //   book4:`Mathematics`,
    //   book5:`Physics`
    // };
    // asdf.push(bookNamez);
    // asdf.find(e=>e[`book2`]).book3.push(`No`)
    // console.log(asdf.find(e=>e[`book2`]).book3);
    
    console.log(`tut 34`);
    setTimeout(() => {
  for (let i = 0; i < 400; i++) {
    const element = i;
    console.log();
  }
}, 100);


console.log("Ajex tut");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");
  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //open the object
  // xhr.open("GET", "harry.txt", true);
  // use this for post request
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");
  // what to do on progress(optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };
  // what to do when reponse is ready
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };
  // send the request
  param = `{"name":"test","salary":"123","age":"23"}`;
  xhr.send(param);
}

let popBtn = document.getElementById("popHandler");
popBtn.addEventListener("click", popHandler);
function popHandler() {
  console.log("You have clicked the popBtn");
  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //open the object
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  
  // what to do on progress(optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };
  // what to do when reponse is ready
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText).data;
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].employee_name}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
  console.log("We are done here");
}


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

*/
