var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function handleClick() {
  alert("Button clicked!");
}

// Get the button element
var button = document.querySelector("button");

// Attach click event listener to the button
button.addEventListener("click", handleClick);

function enrollChild() {
  // Display an alert or perform any desired actions
  alert("Enrollment successful!");
}

// Add event listener to the "Enroll Now" button
var enrollButton = document.querySelector(".bg-blue-500");
enrollButton.addEventListener("click", enrollChild);

// Example function for scrolling to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add event listener to the "Home" link in the navigation
var homeLink = document.querySelector("nav ul li:first-child a");
homeLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  scrollToTop(); // Scroll to the top of the page
});
