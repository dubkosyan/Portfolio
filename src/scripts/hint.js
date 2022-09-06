const hint = document.querySelector(".hint");

if ("ontouchstart" in document.documentElement) {
  hint.innerHTML = "Свайп влево для навигации";
} else {
  hint.innerHTML ="Используй клавишу влево для просмотра";
}
