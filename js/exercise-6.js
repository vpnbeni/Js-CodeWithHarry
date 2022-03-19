console.log("exercise 6 Creating a clock");

let today = new Date();
// console.log(today);

let time = {
  hour: today.getHours(),
  minute: today.getMinutes(),
  second: today.getSeconds(),
  tag: today.getHours() > 12 ? "PM" : "AM",
};

let clock = document.getElementById("clock");

function updateClock() {
  let newDate = new Date();
  time = {
    hour: newDate.getHours(),
    minute: newDate.getMinutes(),
    second: newDate.getSeconds(),
    tag: newDate.getHours() > 12 ? "PM" : "AM",
  };
  setTimeout(() => {
    //   console.log(time);
    clock.innerHTML = `
    <h1>${time.hour}:${time.minute}:${time.second} ${time.tag}</h1>`;
    updateClock();
  }, 1000);
}
updateClock();
