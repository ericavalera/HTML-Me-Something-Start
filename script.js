window.addEventListener("load", function () {
  let small = document.getElementById("color");

  small.addEventListener("mouseover", function () {
    small.style.color = "#252323";
  });
  small.addEventListener("mouseout", function () {
    small.style.color = "#ed6a5a";
  });
});
