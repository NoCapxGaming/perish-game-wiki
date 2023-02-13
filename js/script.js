document.addEventListener("DOMContentLoaded", function() {

  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarList = document.querySelector(".navbar-list");

  navbarToggle.addEventListener("click", function() {
    if (navbarList.classList.contains("show")) {
      navbarList.classList.remove("show");
    } else {
      navbarList.classList.add("show");
    }
  });
});
