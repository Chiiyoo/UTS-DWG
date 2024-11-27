// Script untuk Menampilkan Popup
function showProgrammingPopup() {
  document.getElementById("programming-popup").style.display = "flex";
}
function showDesignPopup() {
  document.getElementById("design-popup").style.display = "flex";
}
function showIdeasPopup() {
  document.getElementById("ide-creative-popup").style.display = "flex";
}
function showKustomisasiPopup() {
  document.getElementById("kustomisasi-popup").style.display = "flex";
}

// Script untuk Menutup Popup
function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

// Script Menutup popup jika klik di luar
window.onclick = function (event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};

// Script untuk slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

slides[currentSlide].classList.add("active");

setInterval(showNextSlide, 5000);

// Script untuk mengirimakan email
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:chiiyooo13@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  });
