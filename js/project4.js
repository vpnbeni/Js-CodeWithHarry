console.log("project 4");
const uName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

// console.log(uName, email, phone);
uName.addEventListener("blur", () => {
  console.log("name is blurred");
  //   valideate name
  let regex = /^[a-zA-Z][0-9a-zA-Z]{0,10}$/;
  let str = uName.value;
  console.log(regex, str);
  if (regex.test(str)) {
      console.log('it matched')
      
  }else{
      console.log('no match')
      
  }
});
phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  //   validate phone
});
email.addEventListener("blur", () => {
  console.log("email is blurred");
  //   validate email
});
