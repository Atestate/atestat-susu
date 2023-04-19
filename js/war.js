var slides = document.getElementById("slides");

var index = 0;

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") {
    if (index == slides.childElementCount - 1) return;
    index++;
    var val = index * 100;
    slides.style.transform = "translateY(-" + val + "vh)";
    // Arrow down key is pressed
    console.log("Arrow down key pressed");
  } else if (event.code === "ArrowUp") {
    if (index == 0) return;
    index--;
    var val = index * 100;
    slides.style.transform = "translateY(-" + val + "vh)";
    console.log("Arrow up key pressed");
  }
});
