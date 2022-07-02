window.addEventListener("click", function (event) {
  let mobileMenu = document.querySelector(".navbar-link-container-mobile");

  if (
    event.target.classList.contains("btn-menu") ||
    event.target.classList.contains("mobile-menu")
  ) {
    mobileMenu.classList.toggle("d-block");
  } else {
    mobileMenu.classList.remove("d-block");
  }
});
