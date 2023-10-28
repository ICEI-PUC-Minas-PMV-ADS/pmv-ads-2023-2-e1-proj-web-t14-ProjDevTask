const toggles = document.querySelectorAll('.faq-toggle');
const faqItems = document.querySelectorAll('.faq');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const faqItem = toggle.parentNode;
    if (!faqItem.classList.contains('active')) {
      faqItems.forEach(item => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
      faqItem.classList.add('active');
    } else {
      faqItem.classList.remove('active');
    }
  });
});
