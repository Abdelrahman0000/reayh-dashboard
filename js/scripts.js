///////////////nav/

//////////////////////////card of user
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  var mainUser = document.getElementById("main-user");
  var userCard = document.getElementById("user-card");

  // Show user card on hover
  mainUser.addEventListener("mouseenter", function () {
    mainUser.classList.add("show");
    userCard.style.display = "block";
  });

  // Hide user card on mouse leave
  userCard.addEventListener("mouseleave", function () {
    mainUser.classList.remove("show");
    userCard.style.display = "none";
  });

  // Hide user card on click outside
  document.addEventListener("click", function (event) {
    if (!mainUser.contains(event.target) && !userCard.contains(event.target)) {
      mainUser.classList.remove("show");
      userCard.style.display = "none";
    }
  });

  ///////////////////////////////
});
document.addEventListener("DOMContentLoaded", function () {
  var searchBtn = document.getElementById("search-btn");
  var searchForm = document.querySelector(".search-form");

  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchForm.classList.toggle("active");
  });
});
//////////////////////sidebar
$(document).ready(function () {
  console.log(1);
  $("#menu-btn").click(function (e) {
    console.log(2);
    e.preventDefault();

    $(".small-sidebar").addClass("active");
  });
  $("#cloth-side-bar").click(function (e) {
    e.preventDefault();
    $(".side-bar").removeClass("active");
  });
  // $("#search-btn").click(function (e) {
  //   e.preventDefault();
  //   $(".search-form").toggleClass("active");
  // });

  $(".accordion").click(function (e) {
    e.preventDefault();

    $(this).toggleClass("active");
  });

  $(".shopping-cart .box-container .box i").click(function (e) {
    e.preventDefault();

    $(this).parent().fadeOut(400);
  });

  $(window).scroll(function () {
    $(".search-form").removeClass("active");
    $(".side-bar").removeClass("active");
  });
});
/////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-btn");
  const searchForm = document.querySelector(".search-form");

  searchBtn.addEventListener("click", function (event) {
    event.preventDefault(); // prevent default form submission behavior
    searchForm.classList.toggle("active"); // toggle the 'active' class on the search form
  });
});

////////
////////
////////
////////
document.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.getElementById("dropZone");

  // Create hidden file input
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.style.display = "none";
  fileInput.addEventListener("change", () => handleFiles(fileInput.files));

  // Append file input to main container
  dropZone.appendChild(fileInput);

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragged-over");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged-over");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragged-over");
    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  // Trigger file input on click
  dropZone.addEventListener("click", () => {
    fileInput.click();
  });
});

function handleFiles(files) {
  console.log(`Received ${files.length} files`);
}
