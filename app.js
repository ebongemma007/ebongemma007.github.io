// GSAP Animation for header
gsap.from("header", { opacity: 0, duration: 1, y: -50 });

// GSAP animation for sections as they scroll into view
gsap.from("#about", { opacity: 0, duration: 1, x: -100, scrollTrigger: "#about" });
gsap.from("#projects", { opacity: 0, duration: 1, x: 100, scrollTrigger: "#projects" });
gsap.from("#contact", { opacity: 0, duration: 1, y: 50, scrollTrigger: "#contact" });

// GSAP animation for project cards
gsap.from(".project-card", { opacity: 0, duration: 1, stagger: 0.3, scale: 0.8 });

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// GSAP animation for the SVG network visual
gsap.from("#network-svg", { opacity: 0, duration: 1.5, drawSVG: "0% 100%", ease: "power2.inOut" });
