const app = document.querySelector("#app");
const initBtn = document.querySelector("#init-btn");
const reaction = document.querySelectorAll(".reaction");

function init() {
  if (app.classList.contains("active")) app.classList.remove("active");
  else app.classList.add("active");
}

initBtn.addEventListener("click", init);
reaction.forEach(function (elm, index) {
  elm.addEventListener("click", function () {
    initBtn.setAttribute("class", "");
    initBtn.classList.add("bg");
    initBtn.classList.add("bg-" + (index + 1));
    init();
  });
});
