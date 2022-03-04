// you have to pretend to use word api which will contain an object and you have to print definition from all the  result of  that word api. you have to pront it in the dom
// you have to take input from an input tag.
// if you are using booktstrap then its a plus
let data = {
  word: "example",
  results: [
    {
      definition: "a representative form or pattern",
      partOfSpeech: "noun",
      synonyms: ["model"],
      typeOf: [
        "representation",
        "internal representation",
        "mental representation",
      ],
      hasTypes: [
        "prefiguration",
        "archetype",
        "epitome",
        "guide",
        "holotype",
        "image",
        "loadstar",
        "lodestar",
        "microcosm",
        "original",
        "paradigm",
        "pilot",
        "prototype",
        "template",
        "templet",
        "type specimen",
      ],
      derivation: ["exemplify"],
      examples: ["I profited from his example"],
    },
    {
      definition: "something to be imitated",
      partOfSpeech: "noun",
      synonyms: ["exemplar", "good example", "model"],
      typeOf: ["ideal"],
      hasTypes: [
        "pacemaker",
        "pattern",
        "beauty",
        "prodigy",
        "beaut",
        "pacesetter",
      ],
      derivation: ["exemplify", "exemplary"],
    },
    {
      definition: "an occurrence of something",
      partOfSpeech: "noun",
      synonyms: ["case", "instance"],
      typeOf: ["happening", "natural event", "occurrence", "occurrent"],
      hasTypes: [
        "clip",
        "mortification",
        "piece",
        "time",
        "humiliation",
        "bit",
      ],
      derivation: ["exemplify"],
      examples: ["but there is always the famous example of the Smiths"],
    },
    {
      definition: "an item of information that is typical of a class or group",
      partOfSpeech: "noun",
      synonyms: ["illustration", "instance", "representative"],
      typeOf: ["information"],
      hasTypes: [
        "excuse",
        "apology",
        "specimen",
        "case in point",
        "sample",
        "exception",
        "quintessence",
        "precedent",
      ],
      derivation: ["exemplify", "exemplary"],
      examples: [
        "this patient provides a typical example of the syndrome",
        "there is an example on page 10",
      ],
    },
    {
      definition: "punishment intended as a warning to others",
      partOfSpeech: "noun",
      synonyms: ["deterrent example", "lesson", "object lesson"],
      typeOf: ["monition", "admonition", "word of advice", "warning"],
      derivation: ["exemplary"],
      examples: ["they decided to make an example of him"],
    },
    {
      definition:
        "a task performed or problem solved in order to develop skill or understanding",
      partOfSpeech: "noun",
      synonyms: ["exercise"],
      typeOf: ["lesson"],
      examples: [
        "you must work the examples at the end of each chapter in the textbook",
      ],
    },
  ],
  syllables: {
    count: 3,
    list: ["ex", "am", "ple"],
  },
  pronunciation: {
    all: "ɪɡ'zæmpəl",
  },
  frequency: 4.67,
};
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");
  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //open the object
  xhr.open("GET", "data.json", true);
  // use this for post request
  // xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  // xhr.getResponseHeader("Content-type", "application/json");
  // what to do on progress(optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText).results;
      console.log(obj);
      let list = document.getElementById("listDefination");
      // console.log(list);
      str = "";
      for (key in obj) {
        str += `
        <li>${obj[key].definition}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
  console.log("We are done here");
}
