import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Функція для отримання даних із localStorage
const loadData = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
        console.error("Помилка отримання даних:", error);
        return {};
    }
};

// Заповнюємо форму збереженими даними
const savedData = loadData();
form.elements.email.value = savedData.email || '';
form.elements.message.value = savedData.message || '';

// Функція для збереження у localStorage
const saveFormData = throttle(() => {
    const data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 300);

// Відстеження подій `input` та збереження даних у localStorage
form.addEventListener('input', saveFormData);

// Обробник події `submit`
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };

    if (!formData.email || !formData.message) {
        alert('Будь ласка, заповніть всі поля!');
        return;
    }

    console.log('📩 Відправлені дані:', formData);

    // Очищаємо сховище та форму
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

