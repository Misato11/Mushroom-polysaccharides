
// Проверка подключения скрипта
console.log("Скрипт подключен!");

// Добавление интерактивности для кнопки
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Спасибо за интерес к нашему продукту!");
    });
});
