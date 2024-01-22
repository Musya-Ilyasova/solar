export const scrollToTheSection = () => {
  const links = document.querySelectorAll('.btn')
  const section = document.querySelector('.contacts');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollBy({
        top: section.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
      });
    })
  })
}

export default scrollToTheSection;
