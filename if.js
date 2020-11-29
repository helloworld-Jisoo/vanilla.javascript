const body = document.querySelector(".body");

const C1="width_lg";
const C2="width_md";
const C3="width_sm";

function handleResize() {
  const width = window.innerWidth;
  if(width > 1000) {
    body.className = C1;
  } else if (width > 700) {
    body.className = C2;
  } else if ( width < 400){
    body.className = C3;
  }
  }

  window.addEventListener("resize", handleResize);