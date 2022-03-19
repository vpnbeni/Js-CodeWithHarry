console.log("project 5");
// data is an array of objects which contain information about the condidates
const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit Das",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Camella Cabello",
    age: 18,
    city: "JKolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const condidates = cvIterator(data);
// console.log(condidates.next());

// button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);
nextCV();

function nextCV() {
  const currentCandidate = condidates.next().value;
  let image = document.getElementById("image");
  // console.log(image, currentCandidate.image);

  let profile = document.getElementById("profile");
  if (currentCandidate) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old.</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">with ${currentCandidate.framework} framework</li>
    
    </ul>`;
  } else {
    alert("End of condidate applications");
    window.location.reload();
  }
}
