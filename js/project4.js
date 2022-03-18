console.log("project 4");
const uName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validUser = false;
let validPhone = false;

// console.log(uName, email, phone);
uName.addEventListener("blur", () => {
  console.log("name is blurred");
  //   valideate name
  let regex = /^[a-zA-Z][0-9a-zA-Z]{0,10}$/;
  let str = uName.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your user name is valid");
    uName.classList.remove("is-invalid");
  } else {
    console.log("Your user name is not valid");
    uName.classList.add("is-invalid");
  }
});
phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  //   validate phone
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
  } else {
    console.log("Your phone is not valid");
    phone.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
  console.log("email is blurred");
  //   validate email
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    email;
    console.log("Your user email is valid");
    email.classList.remove("is-invalid");
  } else {
    console.log("Your user email is not valid");
    email.classList.add("is-invalid");
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("You clicked on submit");
  if (validEmail&&validPhone&&validUser) {
    console.log('Phone,email and user are valid')
    let success = document.getElementById("success");
    success.classList.add("show");
    
  }else{
    console.log('One out of phone ,user or email is not valid.Hense not submitting the form. Please correct the form.')
    
    let failure = document.getElementById("success");
    failure.classList.add("show");
  }
});
