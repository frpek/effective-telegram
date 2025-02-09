const fish = document.querySelector('.fish');

function getRandomPosition() {
    const x = Math.random() * window.innerWidth; // Случайная позиция по X
    const y = Math.random() * window.innerHeight; // Случайная позиция по Y
    return { x, y };
}

function moveFish() {
    const { x, y } = getRandomPosition();
    fish.style.transition = 'all 2s linear'; // Плавное перемещение
    fish.style.left = `${x}px`;
    fish.style.top = `${y}px`;
}

// Двигаем рыбку каждые 2 секунды
setInterval(moveFish, 2000);

// Начальное положение рыбки
moveFish();