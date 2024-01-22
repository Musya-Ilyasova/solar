import scrollToTheSection from "./modules/scrollToTheSection"
import faq from "./modules/faq";

window.addEventListener('DOMContentLoaded', () => {
  if(document.body.classList.contains('index')) {
    scrollToTheSection();
    faq();
  }
})
