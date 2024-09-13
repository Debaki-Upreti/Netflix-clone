
document.getElementById('hamburger').addEventListener('click', () => {
  // Toggle hamburger menu in mobile view
  const navLinks = document.querySelector('.nav-links');
   navLinks.classList.toggle('active');
});