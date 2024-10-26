const toggleButton = document.getElementById('toggle-skills') as HTMLInputElement;
const skillsSection = document.querySelector('.skills') as HTMLInputElement;

toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});
