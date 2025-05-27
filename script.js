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




const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer2.unobserve(entry.target); // Stop observing after animation
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% visible
  rootMargin: '0px 0px -50px 0px' // Adjust trigger point
});

// Target all scroll-animate elements
document.querySelectorAll('.scroll-animate').forEach(el => {
  observer2.observe(el);
});
