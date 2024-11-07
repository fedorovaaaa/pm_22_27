// Присвоєння значення ширини CSS-змінній для кожного елемента .skill-box
function setProgressWidth() {
  document.querySelectorAll(".skill-box").forEach((skillBox) => {
    const progress = skillBox.querySelector(".progress1");
    const width = progress.style.width; // Наприклад, "55%"
    progress.style.setProperty("--progress-width", width); // Зберігаємо ширину у CSS-змінній
  });
}

// Анімація видимості для кожного елемента .skill-box
function animateSkillBoxVisibility() {
  const skillBoxes = document.querySelectorAll(".skill-box");
  
  skillBoxes.forEach((skillBox, index) => {
    setTimeout(() => {
      skillBox.classList.add("visible"); // Додаємо клас видимості
    }, index * 300); // Затримка для кожного елемента
  });
}

// Анімація прогрес-бара
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress1");
  
  progressBars.forEach((progressBar) => {
    const width = progressBar.style.width; // Отримуємо початкову ширину
    progressBar.style.width = "0"; // Спочатку встановлюємо ширину 0
    setTimeout(() => {
      progressBar.style.width = width; // Відновлюємо початкову ширину для анімації
    }, 100); // Затримка перед початком анімації
  });
}

// Анімація для трапеції і прямокутника
function animateShapes() {
  const trapezoid = document.querySelector('.trapezoid');
  if (trapezoid) {
    trapezoid.style.height = '32.9rem'; // нова висота для трапеції
  }

  const rd3 = document.querySelector('.red-rectangle3');
  if (rd3) {
    rd3.style.height = '32.9rem'; // нова висота для прямокутника
  }
}

// Відображення даних після завантаження з сервера
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('http://localhost:8080/data'); // Запит даних з сервера
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // Робота з секцією 'hobbies'
        const hobbiesContainer = document.getElementById('hobbies');
        const hobbiesHTML = data.hobbies.map(hobb => `
            <div class="d-flex ">
                <p>${hobb.name}</p>
                <span class="marker2"></span>
            </div>
        `).join('');
        hobbiesContainer.innerHTML = hobbiesHTML;

        // Робота з секцією 'hobby'
        const hobbyContainer = document.getElementById('hobby');
        const hobbyHTML = data.hobby.map(hb => `
            <p>${hb.name}</p>
            <span class="marker2"></span>
        `).join('');
        hobbyContainer.innerHTML = hobbyHTML;

        // Робота з секцією 'skills'
        const skillsContainer = document.getElementById('skills');
        const skillsHTML = data.skills.map(skill => `
            <div class="skill-box">
                <div class="d-flex">
                    <span class="marker"></span>
                    <p class="skill">${skill.name}</p>
                </div>
                <div class="progress-bar1">
                    <div class="progress1" style="width: ${skill.progress}"></div>
                </div>
            </div>
        `).join('');
        skillsContainer.innerHTML = skillsHTML;

        // Робота з секцією 'references'
        const referencesContainer = document.getElementById('references');
        const referencesHTML = data.references.map(ref => `
            <div class="person">
                <div class="d-flex justify-content-end">
                    <h3 class="person-name">${ref.name}</h3>
                    <span class="marker"></span>
                </div>
                <p class="person-adress">${ref.address}</p>
            </div>
        `).join('');
        referencesContainer.innerHTML = referencesHTML;

        // Після завантаження даних ініціюємо анімації
        setProgressWidth();
        animateSkillBoxVisibility();
        animateProgressBars();
        animateShapes();

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
});


// Анімація показу/приховування для кнопок roll
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
