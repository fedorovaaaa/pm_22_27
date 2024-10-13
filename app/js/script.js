// Присвоєння значення ширини CSS-змінній для кожного елемента .skill-box
document.querySelectorAll(".skill-box").forEach((skillBox) => {
  const progress = skillBox.querySelector(".progress1");
  const width = progress.style.width; // Наприклад, "55%"
  progress.style.setProperty("--progress-width", width); // Зберігаємо ширину у CSS-змінній
});

// Анімація видимості для кожного елемента .skill-box після завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
  const skillBoxes = document.querySelectorAll(".skill-box");
  
  skillBoxes.forEach((skillBox, index) => {
    setTimeout(() => {
      skillBox.classList.add("visible"); // Додаємо клас видимості
    }, index * 300); // Затримка для кожного елемента
  });
});

// Анімація прогрес-бара
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress1");
  
  progressBars.forEach((progressBar) => {
    const width = progressBar.style.width; // Отримуємо початкову ширину
    progressBar.style.width = "0"; // Спочатку встановлюємо ширину 0
    setTimeout(() => {
      progressBar.style.width = width; // Відновлюємо початкову ширину для анімації
    }, 100); // Затримка перед початком анімації
  });
});


const btnRoll = document.getElementsByClassName("roll");
const blockRoll = document.getElementsByClassName("roll-block");
Array.from(btnRoll).forEach((btn, index) => {
  btn.addEventListener("click", () => showOrHide(blockRoll[index]));
});
function showOrHide(block) {
  if (block.style.maxHeight) {
    block.style.maxHeight = null;
  } else {
    block.style.maxHeight = "300vh";
  }
}