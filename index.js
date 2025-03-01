// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Active navigation highlighting on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    window.addEventListener("scroll", () => {
      let currentSection = "";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
          link.classList.add("active");
        }
      });
    });
    
    // Optional: Contact form submission alert (for demo purposes)
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default action for demo
        alert("Thank you for your message! I'll get back to you soon.");
        contactForm.reset();
      });
    }
  });
  
