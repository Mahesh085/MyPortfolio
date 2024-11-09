document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you for contacting me! I'll get back to you soon.");
  this.reset();
});
