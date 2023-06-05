const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})




const textToType = ["JavaScript.", "React.", "HTML.", "CSS."];
let currentIndex = 0;
let currentText = "";
let deleting = false;

function typeText() {
  if (currentIndex >= textToType.length) {
    currentIndex = 0;
  }

  currentText = deleting
    ? textToType[currentIndex].substring(0, currentText.length - 1)
    : textToType[currentIndex].substring(0, currentText.length + 1);

  document.getElementById("typing-text").textContent = currentText;

  if (!deleting && currentText === textToType[currentIndex]) {
    deleting = true;
    setTimeout(typeText, 1000);
  } else if (deleting && currentText === "") {
    deleting = false;
    currentIndex++;
    setTimeout(typeText, 500);
  } else {
    setTimeout(typeText, deleting ? 100 : 200);
  }
}

typeText();