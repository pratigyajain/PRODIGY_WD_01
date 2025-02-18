const nav = document.getElementById("main-nav");
const navLinks = nav.querySelectorAll("a");

// Add scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adjust scroll threshold as needed
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Add hover event listeners (optional, if you want JS hover effects)
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "lightblue"; // Example hover color change
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "white"; // Restore original color
  });
});

// Add click event listeners for navigation (example: highlight active link)
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default link behavior (if you're handling navigation with JS)
    event.preventDefault();

    // Remove active class from all links
    navLinks.forEach((otherLink) => otherLink.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");

    // Handle navigation here (e.g., using JavaScript routing or smooth scrolling)
    // For this example, we'll just log the link's href
    console.log("Navigating to:", link.href);
  });
});
