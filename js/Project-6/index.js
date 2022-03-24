console.log("project-6 ");

// utility function
// 1.Utility function to get DOM element from string
function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}
// initilize no of parameters
let addedParamCount = 0;

//Hide the parameters box initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

// if the user clicks on params,hide the json box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});

// if the user clicks on json,hide the  params box
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});

// if the user click on + button add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = ` <div class=" my-3">
                <div class="row">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${
                      addedParamCount + 2
                    }</label>
                    <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        id="parameterKey${addedParamCount + 2}"
                        placeholder="Enter Parameter ${addedParamCount + 2} Key"
                    />
                    </div>
                    <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        id="parameterValue${addedParamCount + 2}"
                        placeholder="Enter Parameter ${
                          addedParamCount + 2
                        } Value"
                    />
                    </div>
                    <div class="col">
                    <button  class="btn btn-primary deleteParam">-</button>
                    </div>
                </div>
                </div>  `;
  //   convert the element to DOM node
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);
  addedParamCount++;
  //   add an event listener to remove the parameter on clicking - button
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (const item of deleteParam) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  }
});

// If the user click on submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  //   Show please wait in the response box to request patience from the user
  document.getElementById("responseJsonText").value =
    "Please Wait..Fetching Response...";

  //   Fetch all the values user have entered
  let url = document.getElementById("url").value;
  let requestType = document.querySelector(
    `input[name='requestType']:checked`
  ).value;
  let contentType = document.querySelector(
    `input[name='contentType']:checked`
  ).value;

  //   if user has used params optin instead of json, collect all the parameters in an object
  if (contentType == "params") {
    data = {};
    for (let i = 0; i < addedParamCount + 1; i++) {
      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {
        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let value = document.getElementById("parameterValue" + (i + 1)).value;
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
  } else {
    data = document.getElementById("requestJsonText").value;
  }
  //   log all the values in the console for debugging
  console.log("url is", url);
  console.log("requestType is", requestType);
  console.log("contentType is", contentType);
  console.log("data is", data);

  // if requestType is post
  if (requestType == "GET") {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responseJsonText").value = text;
      });
  } else {
    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responseJsonText").value = text;
      });
  }
});
