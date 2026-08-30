// === АДМИН-ПАНЕЛЬ (по Konami коду) ===
// Комбинация как в Yandere Simulator: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

let keyIndex = 0;

// Панель и кнопки
const adminPanel = document.getElementById('admin-panel');

// Отслеживаем нажатия клавиш
document.addEventListener('keydown', (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

  // Проверяем, совпадает ли текущая клавиша со следующей в комбинации
  if (key === KONAMI[keyIndex]) {
    keyIndex++;
    // Комбинация полностью введена → открываем админ-панель
    if (keyIndex === KONAMI.length) {
      adminPanel.style.display = 'block';
      keyIndex = 0; // сброс для повторного ввода
    }
  } else {
    keyIndex = (key === KONAMI[0]) ? 1 : 0;
  }
});

// Действия в админ-панели
document.getElementById('admin-say-hi').addEventListener('click', () => {
  const out = document.getElementById('admin-output');
  out.textContent = 'Привет, админ!';
});

document.getElementById('admin-logout').addEventListener('click', () => {
  adminPanel.style.display = 'none';
});