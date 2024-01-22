const faq = () => {
  const faqList = document.querySelector('.faq-list');
  faqList.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains("faq-list-item__title")) {
      target.closest('.faq-list-item').classList.toggle('active');
    }
  })
}

export default faq;
