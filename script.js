function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");    
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('zoomed');
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, { threshold: 0.6 });

// Target all scroll-triggered images
document.querySelectorAll('.project-img').forEach(img => {
  observer.observe(img);
});
