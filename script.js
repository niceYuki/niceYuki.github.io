// === АДМИН-ПАНЕЛЬ ===
// Код по умолчанию: 1234 (измени на свой)
const ADMIN_CODE = '1234';

// Элементы
const trigger = document.getElementById('trigger');   // скрытая точка (появляет поле кода)
const codeBox = document.getElementById('code-box');
const codeInput = document.getElementById('code-input');
const codeError = document.getElementById('code-error');
const adminBtn = document.getElementById('admin-btn');
const adminPanel = document.getElementById('admin-panel');

// После верного ввода кода кнопка становится видимой
let unlocked = false;

// Клик по скрытой точке — показываем поле ввода кода
trigger.addEventListener('click', () => {
  codeBox.style.display = 'block';
  codeInput.focus();
});

// Проверка кода при нажатии Enter в поле
function checkCode() {
  if (codeInput.value.trim() === ADMIN_CODE) {
    // Верный код → показываем кнопку админ-панели
    unlocked = true;
    adminBtn.style.display = 'inline-block';
    codeError.style.display = 'none';
    codeInput.value = '';
    codeBox.style.display = 'none';
  } else {
    // Неверный код → показываем ошибку, кнопка НЕ появляется
    codeError.style.display = 'block';
  }
}

codeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkCode();
});

// Кнопка открывает админ-панель
adminBtn.addEventListener('click', () => {
  adminPanel.style.display = 'block';
  adminBtn.style.display = 'none';
});

// Действия в админ-панели
document.getElementById('admin-say-hi').addEventListener('click', () => {
  const out = document.getElementById('admin-output');
  out.textContent = 'Привет, админ!';
});

document.getElementById('admin-logout').addEventListener('click', () => {
  adminPanel.style.display = 'none';
  unlocked = false;
});