const menuOpenButton = document.querySelector(".header-menu-open-button");
const menuCloseButton = document.querySelector(".navbar-menu-close-button");
const navbarMenu = document.querySelector(".header-navbar");

const tabHeaders = document.querySelectorAll(".tab-header");
const tabItems = document.querySelectorAll(".tab-container");

const accordionButtons = document.querySelectorAll(".accordion-button");

const form = document.querySelector(".newsletter-form");
const emailInput = document.querySelector(".email-input");
const emailElement = document.querySelector(".email-element");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email) => emailRegex.test(email);
const showError = () => emailElement.classList.add("error");
const clearError = () => emailElement.classList.remove("error");

const toggleNavbarMenu = () => {
  navbarMenu.classList.toggle("active");
  document.body.classList.toggle("scroll-lock");
};

menuOpenButton.addEventListener("click", toggleNavbarMenu);
menuCloseButton.addEventListener("click", toggleNavbarMenu);

tabHeaders.forEach((tabHeader, index) => {
  tabHeader.addEventListener("click", (e) => {
    tabHeaders.forEach((tabHeader) => {
      tabHeader.classList.remove("active");
    });

    const clickedTab = e.currentTarget;
    clickedTab.classList.add("active");

    tabItems.forEach((tabItem) => {
      tabItem.classList.add("hidden");
    });

    tabItems[index].classList.remove("hidden");
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clickedButton = e.currentTarget;

    clickedButton.closest(".accordion-item").classList.toggle("active");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) showError();
  else {
    clearError();
    emailInput.value = "";
    alert("Thank you for subscribing!");
  }
});

emailInput.addEventListener("input", function () {
  if (emailElement.classList.contains("error")) {
    clearError();
  }
});
