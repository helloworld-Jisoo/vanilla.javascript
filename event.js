const title = document.getElementById("title");
title.innerHTML = `Hello!`;

const color = ["#9e90bc", "#bc4a48", "#0c6d8c", "#f2ae58"];

function superEventHandler() {
  let enterEventCounr = 0;
  let leaveEventCount = 0;
  let buttonEventCount = 0;

  title.addEventListener("mouseenter", (event) => {
    title.innerHTML = `Mouse is here!`;
    title.style.color = color[0];
    enterEventCounr++;
  });
  title.addEventListener("mouseleave", (event) => {
    title.innerHTML = `Mouse is gone!`;
    title.style.color = color[1];
    leaveEventCount++;
  });
  window.addEventListener("mouseup", (event) => {
    event.button === "2";
    title.innerHTML = `right!`;
    title.style.color = color[2];
    buttonEventCount++;
  });
  function handleResize() {
    title.innerHTML = `I have been resized`;
    title.style.color = color[3];
  }
  window.addEventListener("resize", handleResize);
}

superEventHandler();
