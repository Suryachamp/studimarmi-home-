// Sidebar functionality
const sidebar = document.querySelector(".sidebar");
const menuButton = document.querySelector("#menuButton");
const closeSidebar = document.querySelector("#closeSidebar");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", function () {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

document.addEventListener("click", function (event) {
  if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// Swiper for Energy Slider
new Swiper(".card-wrapper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.2, // peek next card on small screens
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Read More Read Less 
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const cardText = this.parentElement;
      const fullText = cardText.querySelector(".full-text");

      if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "inline";
        this.textContent = "Read Less";
        this.classList.remove("read-more-btn");
        this.classList.add("read-less-btn");
      } else {
        fullText.style.display = "none";
        this.textContent = "Read More";
        this.classList.remove("read-less-btn");
        this.classList.add("read-more-btn");
      }
    });
  });
});
