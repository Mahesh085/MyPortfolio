// JavaScript for handling form submission (optional)
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Your message has been sent!');
    // You can implement actual form submission logic here.
  } else {
    alert('Please fill in all fields!');
  }
});

