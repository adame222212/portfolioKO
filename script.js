const boxes = document.querySelectorAll(".trans");

window.addEventListener("scroll", checkbox);
checkbox();

function checkbox() {
  const trigger = (window.innerHeight / 5) * 4;
  boxes.forEach((trans) => {
    const boxTop = trans.getBoundingClientRect().top;

    if (boxTop < trigger) {
      trans.classList.add("show");
    } else {
      trans.classList.remove("show");
    }
  });
}
