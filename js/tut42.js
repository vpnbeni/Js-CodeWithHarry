console.log("This is my tutorial 42");
// button with id mybtn
let myBtn = document.getElementById("mybtn");
// div with id content
let content = document.getElementById("content");

// function getData() {
//   console.log("Started getData");
//   url = "data.json";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }z
// function getData() {
//   console.log("Started getData");
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }
function postData() {
  url = "https://reqres.in/api/users";
  data = `{
    "name": "morpheus",
    "job": "leader"
}`;
  params = {
    method: "post",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(data),
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// console.log("Before running getDAta");
// getData();
// console.log("After running getDAta");
postData();
