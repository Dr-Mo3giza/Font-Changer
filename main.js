let selectOpt = document.getElementById("fonts");
let preveiwBox = document.querySelector(".preveiw");
let initialFont = selectOpt.value;
preveiwBox.style.fontFamily = initialFont;
selectOpt.addEventListener("input", function () {
  let fontValue = selectOpt.value;
  preveiwBox.style.fontFamily = fontValue;
});
