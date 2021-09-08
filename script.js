/* // JQUERY CODE
$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
  });

  $(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
  });
*/

const searchIcon = document.getElementById("search-icon");
const nav = document.getElementsByClassName("nav");
const searchInput = document.getElementsByClassName("search-input");
const menuToggle = document.getElementById("mobile-menu");

searchIcon.addEventListener("click", () => {
    // console.log(nav);
  nav[0].classList.toggle("search");
  nav[0].classList.toggle("no-search");
  // console.log(searchInput);
  searchInput[0].classList.toggle("search-active");
});

menuToggle.addEventListener("click", (event) =>  {
      // console.log(nav);
      nav[0].classList.toggle("mobile-nav");
      // console.log(event.currentTarget);
      event.currentTarget.classList.toggle("is-active");
});
