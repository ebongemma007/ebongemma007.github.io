// GSAP Animation for sections
gsap.from("header", { opacity: 0, duration: 1, y: -50 });
gsap.from("#about", { opacity: 0, duration: 1, x: -100, scrollTrigger: "#about" });
gsap.from("#projects", { opacity: 0, duration: 1, x: 100, scrollTrigger: "#projects" });
gsap.from("#contact", { opacity: 0, duration: 1, y: 50, scrollTrigger: "#contact" });

// Particles.js config
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' }
    },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  }
});
