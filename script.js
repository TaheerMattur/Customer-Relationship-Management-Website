$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
  });

  $(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
  });

// const searchIcon = document.getElementById("search-icon");
// const nav = document.getElementsByClassName("nav");
// const searchInput = document.getElementsByClassName("search-input");
// const menuToggle = document.getElementById("menu-toggle");

// searchIcon.addEventListener("click", () => {
//   console.log("yess");
//   nav.classList.toggle("search");
//   nav.classList.toggle("no-search");
//   searchInput.classList.toggle("search-active");
// });

// menuToggle.addEventListener("click", () =>  {
//   console.log("yess");
//   nav.classList.toggle("mobile-nav");
//   this.classList.toggle("is-active");
// });

// IFRAME RESIZER
// var iframe = document.getElementById("myIframe");
// iframe.onload = function() {
//     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
// }