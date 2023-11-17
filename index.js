const play = document.getElementById("play");
const answerBtn1 = document.getElementById("answer-1-btn");
const answerBtn2 = document.getElementById("answer-2-btn");
const answerBtn3 = document.getElementById("answer-3-btn");
const deleteData = document.getElementById("delData");
const afterDisplay = document.getElementById("afterDisplay");
const jumlahTebak = document.getElementById("jumTebak");
const jumlahSalah = document.getElementById("jumSalah");
const answer = document.getElementById("answerDisplay");
const showSession = document.getElementById("showSession");

function getAnswer() {
  let answer = "123".split("");
  for (let i = 0; i < answer.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = answer[i];
    answer[i] = answer[j];
    answer[j] = tmp;
  }
  return answer.join("");
}

//session
const sessionAnswerKey = "SESSION_ANSWER";
const sessionUserAttemptsKey = "SESSION_USER_ATTEMPTS";
const sessionUserIsPlayKey = "SESSION_USER_IS_PLAYING";
//local
const localTotalVictoryKey = "LOCAL_DATA_VICTORIES_PLAYED";
const localMaximumAttemptsKey = "LOCAL_MAXIMUM_ATTEMPTS";

window.addEventListener("load", function () {
  if (typeof Storage !== "undefined") {
    // inisialisasi semua item web storage yang akan digunakan jika belum ada
    if (sessionStorage.getItem(sessionAnswerKey) === null) {
      sessionStorage.setItem(sessionAnswerKey, "");
    } else if (sessionStorage.getItem(sessionUserAttemptsKey) === null) {
      sessionStorage.setItem(sessionUserAttemptsKey, 0);
    } else if (sessionStorage.getItem(sessionUserIsPlayKey) === null) {
      sessionStorage.setItem(sessionUserIsPlayKey, false);
    } else if (localStorage.getItem(localTotalVictoryKey) === null) {
      localStorage.setItem(localTotalVictoryKey, 0);
    } else if (localStorage.getItem(localMaximumAttemptsKey) === null) {
      localStorage.setItem(localMaximumAttemptsKey, 0);
    } else {
      alert("Browser yang anda gunakan tidak mendukung web storage");
    }
  }
  showSession.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
  jumlahTebak.innerText = sessionStorage.getItem(localTotalVictoryKey);
  jumlahSalah.innerText = localStorage.getItem(localMaximumAttemptsKey);
});
