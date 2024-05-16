// @ts-nocheck
import gsap from "gsap";
import "./style.css";
const iframeContainer = document.querySelector(".iframe");
const iframe = document.querySelector("iframe");
let count = 0;
let intervalId: number;

document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const p = document.createElement("p");
  countdownElement?.append(p);
  intervalId = setInterval(function () {
    if (count < 100) {
      p.textContent = `${count}%`;
      count++;
    } else {
      clearInterval(intervalId);

      countdownElement.style.display = "none";
    }
  }, 10); // update every 0.1 seconds // update every 1 second
  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function delayCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    cursorX = cursorX + distX * 0.1; // Adjust the speed of the cursor
    cursorY = cursorY + distY * 0.1; // Adjust the speed of the cursor
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(delayCursor);
  }

  delayCursor();
});
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee__part", {
    xPercent: 100,
    repeat: -1,
    duration: 10,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });

gsap.to(tween, {
  timeScale: isScrollingDown ? -1 : -1,
});

currentScroll = window.pageYOffset;
let fullScreen = false;
iframeContainer?.addEventListener("click", () => {
  if (!iframe) return;
  if (fullScreen) {
    document.exitFullscreen();
    fullScreen = false;
    return;
  }
  makeFullScreen();
});

const makeFullScreen = () => {
  iframe?.requestFullscreen();
  fullScreen = true;
};
