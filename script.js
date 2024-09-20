// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

toggleButton.addEventListener("click", function() {
  let theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Message sent successfully!");
});
