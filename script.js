// Сайт загрузился — меняем год в футере на актуальный
const footerText = document.getElementById('footer-text');
if (footerText) {
  footerText.textContent = `© ${new Date().getFullYear()} Мой сайт. Создано с помощью Cline.`;
}

// Плавное появление секций при прокрутке
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});