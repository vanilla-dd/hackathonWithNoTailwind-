import gsap from "gsap";
import "./style.css";
document.addEventListener("DOMContentLoaded", function () {
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
