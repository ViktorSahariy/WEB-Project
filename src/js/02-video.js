import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Ключ для localStorage
const STORAGE_KEY = 'videoplayer-current-time';

// Функція для збереження часу у localStorage (раз на секунду)
const saveTime = throttle((data) => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000);
console.log(Player);
// Відстежуємо оновлення часу відтворення
player.on('timeupdate', saveTime);

// Отримуємо збережений час із localStorage
const savedTime = localStorage.getItem(STORAGE_KEY);

// Якщо є збережений час – встановлюємо його
if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime)).catch(error => {
        console.error("Помилка встановлення часу:", error);
    });
}
