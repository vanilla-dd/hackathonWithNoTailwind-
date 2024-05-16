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
