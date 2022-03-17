console.log("tut 54");
const alarmSubmit = document.getElementById("alarmSubmit");

// add eventlistener to set the alarm
alarmSubmit.addEventListener("click", setAlarm);

let src = "notification_sound.mp3";
//   "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3";
let audio = new Audio(src);

// function to play to alarm audio
function ringBell() {
  audio.play();
}
// this function run when we set the alarm from the ui
function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`Setting Alarm ${alarmDate} ...`);
  now = new Date();
  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);
  if (timeToAlarm > 0) {
    setTimeout(() => {
      ringBell();
    }, timeToAlarm);
  }
}
