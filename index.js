// select the navbar element
const navbar = document.querySelector('.navbar');

// add an event listener to the window object
window.addEventListener('scroll', () => {
  // check if the user has scrolled down the page
  if (window.scrollY > 0) {
    // if yes, add the 'navbar-scrolled' class to the navbar
    navbar.classList.add('navbar-scrolled');
  } else {
    // if no, remove the 'navbar-scrolled' class from the navbar
    navbar.classList.remove('navbar-scrolled');
  }
});

const logo = document.querySelector('.navbar-brand');
logo.addEventListener('mouseover', function() {
    logo.innerHTML = 'My First Website';
});
logo.addEventListener('mouseout', function() {
  logo.innerHTML = 'MD';
});

// Wait for the page to load before running the code
window.addEventListener('load', function() {

  // Get the form element by its ID
  var contactForm = document.getElementById('contactForm');

  // Attach a submit event listener to the form
  contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    // Validate the form inputs
    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      return;
    } else {
      nameInput.classList.remove('is-invalid');
    }

    if (!emailInput.value.trim()) {
      emailInput.classList.add('is-invalid');
      return;
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add('is-invalid');
      return;
    } else {
      messageInput.classList.remove('is-invalid');
    }

    // If all inputs are valid, send the form data to the server
    var formData = new FormData(contactForm);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'process_form.php', true);
    xhr.send(formData);
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Display a success message to the user
        alert('Your message was sent successfully!');
        contactForm.reset();
      } else {
        // Display an error message to the user
        alert('There was an error sending your message. Please try again later.');
      }
    };

  });

});
