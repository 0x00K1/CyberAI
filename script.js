// Smooth scrolling effect for internal links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Toggle mobile menu
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('nav');
  
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
  
  // Close mobile menu when link is clicked
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    })
  });
  