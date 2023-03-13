// This code waits for the page to load before running any JavaScript
window.onload = function() {
    // Select the button element and add a click event listener
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
      // Select the section element with the ID "INFO"
      const infoSection = document.querySelector('#INFO');
      // Toggle the "hidden" class on the section element to show or hide it
      infoSection.classList.toggle('hidden');
    });
    
    // Select all the links in the navigation and add a click event listener to each one
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent the default behavior of following the link
        event.preventDefault();
        // Get the href attribute of the clicked link
        const href = link.getAttribute('href');
        // Scroll to the element with the matching ID using smooth scrolling
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      });
    });
    
    // Select the "Reset" button and add a click event listener
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', function() {
      // Prompt the user to confirm that they want to reset the chat history
      const confirmReset = confirm('Are you sure you want to reset the chat history? This cannot be undone.');
      // If the user confirms, delete the chat history
      if (confirmReset) {
        const chatHistory = document.querySelector('#chat-history');
        chatHistory.innerHTML = '';
      }
    });
  }
  