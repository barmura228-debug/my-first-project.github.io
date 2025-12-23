// Данные для слайдера
const slides = [
    {
        src: 'https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
        alt: 'Бег', 
        title: 'Бег — простая сила', 
        text: 'Регулярность — ключ к прогрессу.'
    },
    {
        src: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
        alt: 'Футбол', 
        title: 'Футбол — игра миллионов', 
        text: 'Тактика и эмоции — поле учит командной работе.'
    },
    {
        src: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
        alt: 'Йога', 
        title: 'Йога — баланс и дыхание', 
        text: 'Гибкость тела и спокойствие ума.'
    },
    {
        src: 'https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80',
        alt: 'Плавание', 
        title: 'Плавание — сила воды', 
        text: 'Разгрузка суставов и общий тонус.'
    }
];

// Переменные для слайдера
let currentSlideIndex = 0;
const slideImg = document.getElementById('slideImg');
const slideTitle = document.getElementById('slideTitle');
const slideText = document.getElementById('slideText');

// Функция для отображения слайда
function showSlide(index) {
    const slide = slides[index];
    slideImg.src = slide.src;
    slideImg.alt = slide.alt;
    slideTitle.textContent = slide.title;
    slideText.textContent = slide.text;
}

// Обработчики для кнопок слайдера
document.getElementById('prev').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
});

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}, 5000);

// Анимация при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаем за таблицами для анимации при появлении
document.querySelectorAll('.table-pair-container, .square-cards').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Плавная прокрутка к якорю при клике на логотип
document.querySelector('.logo-table').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Также добавляем обработчик для ссылки вокруг таблицы
document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});