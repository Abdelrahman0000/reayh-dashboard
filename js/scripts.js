/////////////////readmore btn
function toggleDescription() {
  var description = document.getElementById("description");
  var button = document.querySelector(".readmore");
  if (description.classList.contains("expanded")) {
    description.classList.remove("expanded");
    //  button.textContent = "Read More";
    button.querySelector("svg").style.transform = "rotate(0deg)";
  } else {
    description.classList.add("expanded");
    // button.textContent = "Read Less";
    button.querySelector("svg").style.transform = "rotate(180deg)";
  }
}

////////////////////////////////gallery swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.2,
  spaceBetween: 30,
  loop: true, // Add this line to enable infinite loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
