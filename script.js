// Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');

    projects.forEach(project => {
      if (category === 'all' || project.getAttribute('data-category') === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault();
  alert("Message sent successfully!");
});
