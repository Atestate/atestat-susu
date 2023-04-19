let ww = document.getElementById("ww");
let by = document.getElementById("by");
let sus = document.getElementById("sus");
let video_1 = document.getElementById("video_1");
let audio = document.getElementById("audio");
let text = document.getElementById("text");
let intro = document.getElementById("intro");
let audio2 = document.getElementById("audio_2");
let video2 = document.getElementById("video_2");
let main = document.getElementById("main");

function fadeOutAudio(audio) {
  const fadeOutInterval = setInterval(() => {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
    } else {
      clearInterval(fadeOutInterval);
      audio.pause();
    }
  }, 200);
}

const load_text_intor = () => {
  setTimeout(() => {
    ww.style.opacity = "1";
  }, 3000);
  setTimeout(() => {
    by.style.opacity = "1";
  }, 5500);
  setTimeout(() => {
    sus.style.opacity = "1";
  }, 5700);

  setTimeout(() => {
    ww.style.opacity = "0";
  }, 7500);
  setTimeout(() => {
    by.style.opacity = "0";
  }, 7000);
  setTimeout(() => {
    sus.style.opacity = "0";
  }, 7000);

  setTimeout(() => {
    video_1.style.opacity = "0";
    fadeOutAudio(audio);
  }, 10000);
  setTimeout(() => {
    text.remove();
  }, 12000);
};

const load_intro_video = () => {
  // Check if the video and audio elements are properly defined and loaded
  if (!video2 || !audio2) {
    console.error("Video or audio element not found.");
    return;
  }

  // Add the 'muted' and 'playsinline' attributes to the video element
  video2.muted = true;
  video2.setAttribute("playsinline", "");

  setTimeout(() => {
    video2.play();
    audio2.play();
  }, 12000);
};

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    setTimeout(() => {
      main.style.opacity = "1";
    }, 1000);
    video2.remove();
    audio2.remove();
    intro.remove();
  }
});

load_intro_video();
load_text_intor();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const s = urlParams.get("s");
if (s == 1) {
  intro.remove();
  main.style.opacity = "1";
} else load();
