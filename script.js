// Конфигурация приложения
const CONFIG = {
    apiUrl: 'https://api.photolike.ru/v1',
    scrollOffset: 100,
    animationDuration: 0.5,
    mobileBreakpoint: 768,
    bookingTimes: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    pricing: {
        documents: { base: 300, perPhoto: 50, perPerson: 0, basicRetouch: 100, premiumRetouch: 200 },
        portrait: { base: 1500, perPhoto: 100, perPerson: 200, basicRetouch: 150, premiumRetouch: 300 },
        family: { base: 3000, perPhoto: 150, perPerson: 300, basicRetouch: 200, premiumRetouch: 400 },
        event: { base: 5000, perPhoto: 200, perPerson: 500, basicRetouch: 250, premiumRetouch: 500 },
        product: { base: 2000, perPhoto: 250, perPerson: 0, basicRetouch: 300, premiumRetouch: 600 }
    }
};

// Состояние приложения
const STATE = {
    isMenuOpen: false,
    activeFilter: 'all',
    loadedPortfolioItems: 6,
    formSubmitting: false,
    currentGalleryIndex: 0,
    services: [
        {
            id: 'documents',
            title: "Фото на документы",
            desc: "Профессиональные фото для любых документов с гарантией соответствия требованиям. Быстрое оформление, несколько вариантов на выбор.",
            price: "от 300₽",
            icon: "📷",
            popular: true
        },
        {
            id: 'portrait',
            title: "Портретная съемка",
            desc: "Индивидуальные и групповые портреты с профессиональной ретушью. Создаем ваш идеальный образ в любом стиле.",
            price: "от 1 500₽",
            icon: "👤",
            popular: true
        },
        {
            id: 'retouch',
            title: "Ретушь фото",
            desc: "Журнальная ретушь любой сложности для ваших фотографий. От базовой коррекции до сложного художественного редактирования.",
            price: "от 500₽",
            icon: "✨"
        },
        {
            id: 'print',
            title: "Печать фото",
            desc: "Печать фотографий на профессиональной бумаге различных форматов. Высокое качество и долговечность изображений.",
            price: "от 100₽",
            icon: "🖨️"
        },
        {
            id: 'family',
            title: "Семейная фотосессия",
            desc: "Теплые семейные фотографии в студии или на выезде. Запечатлите важные моменты вашей семьи.",
            price: "от 3 000₽",
            icon: "👪",
            popular: true
        },
        {
            id: 'products',
            title: "Съемка товаров",
            desc: "Профессиональная съемка товаров для интернет-магазинов и каталогов. Подчеркнем преимущества вашего продукта.",
            price: "от 2 000₽",
            icon: "🛍️"
        },
        {
            id: 'event',
            title: "Съемка мероприятий",
            desc: "Фотосъемка корпоративных и частных мероприятий. Охватим все важные моменты вашего события.",
            price: "от 5 000₽",
            icon: "🎉",
            popular: true
        },
        {
            id: 'love',
            title: "Love Story",
            desc: "Романтическая фотосессия для пар. Создадим атмосферу любви и нежности в кадре.",
            price: "от 4 000₽",
            icon: "💑"
        }
    ],
    portfolio: [
        {
            id: 1,
            title: "Деловой портрет",
            desc: "Профессиональная портретная съемка для резюме и корпоративных материалов",
            img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "portrait"
        },
        {
            id: 2,
            title: "Свадебная церемония",
            desc: "Трогательные моменты свадебного торжества в ресторане",
            img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "event"
        },
        {
            id: 3,
            title: "Ювелирные изделия",
            desc: "Предметная съемка коллекции золотых украшений",
            img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "product"
        },
        {
            id: 4,
            title: "Семейный портрет",
            desc: "Семейная фотосессия в осеннем парке",
            img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "family"
        },
        {
            id: 5,
            title: "Корпоративное мероприятие",
            desc: "Фотоотчет с ежегодной конференции компании",
            img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "event"
        },
        {
            id: 6,
            title: "Красота и стиль",
            desc: "Fashion съемка для бренда одежды",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "portrait"
        },
        {
            id: 7,
            title: "Детский портрет",
            desc: "Яркая фотосессия ребенка в студии",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "portrait"
        },
        {
            id: 8,
            title: "Фуд-фотография",
            desc: "Аппетитные снимки для меню ресторана",
            img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "product"
        },
        {
            id: 9,
            title: "Love Story",
            desc: "Романтическая фотосессия пары на закате",
            img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "event"
        },
        {
            id: 10,
            title: "Архитектура",
            desc: "Съемка современного бизнес-центра",
            img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "product"
        }
    ],
    reviews: [
        {
            id: 1,
            name: "Анна Смирнова",
            text: "Очень понравилась фотосессия! Фотограф профессионально подошел к делу, помог с позами и выбором ракурсов. Результат превзошел все ожидания! Фотографии получились просто потрясающие, все друзья в восторге. Обязательно вернусь еще!",
            rating: 5,
            date: "15.05.2023"
        },
        {
            id: 2,
            name: "Иван Петров",
            text: "Делал фото на документы. Быстро, качественно, без лишних вопросов. Рекомендую! Особенно порадовало, что сделали несколько вариантов на выбор и отретушировали по моим пожеланиям. Лучшее качество в городе!",
            rating: 4,
            date: "22.04.2023"
        },
        {
            id: 3,
            name: "Елена Козлова",
            text: "Заказывали семейную фотосессию. Остались очень довольны! Дети сначала стеснялись, но фотограф нашел к ним подход. Фотографии получились живыми и естественными. Теперь это наша любимая фотостудия для семейных снимков.",
            rating: 5,
            date: "10.04.2023"
        },
        {
            id: 4,
            name: "Дмитрий Иванов",
            text: "Отличная студия для коммерческой съемки товаров. Быстро сделали качественные фото для нашего интернет-магазина. Теперь товары выглядят презентабельно и продаются лучше. Отдельное спасибо за креативные идеи по подаче продукции!",
            rating: 5,
            date: "28.03.2023"
        },
        {
            id: 5,
            name: "Ольга Васильева",
            text: "Делала портфолио для модельного агентства. Фотографы настоящие профессионалы, знают как выгодно подать человека. Получила именно те снимки, которые хотела. Ретушь на высшем уровне - естественно и в то же время безупречно!",
            rating: 5,
            date: "15.03.2023"
        }
    ]
};

// DOM элементы
const DOM = {
    body: document.body,
    preloader: document.querySelector('.preloader'),
    header: document.querySelector('.header'),
    menuToggle: document.querySelector('.menu-toggle'),
    nav: document.querySelector('.nav'),
    navBtns: document.querySelectorAll('.nav-btn'),
    sections: document.querySelectorAll('.section'),
    modal: document.getElementById('booking-modal'),
    modalOverlay: document.querySelector('.modal-overlay'),
    modalClose: document.querySelector('.modal-close'),
    successModal: document.getElementById('success-modal'),
    closeSuccess: document.querySelector('.close-success'),
    ctaBtn: document.querySelector('.cta-btn'),
    scrollTopBtn: document.querySelector('.scroll-top'),
    servicesGrid: document.querySelector('.services-grid'),
    portfolioGrid: document.querySelector('.portfolio-grid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    loadMoreBtn: document.querySelector('.load-more'),
    reviewsContainer: document.querySelector('.reviews-container'),
    reviewsTrack: document.querySelector('.reviews-track'),
    leaveReviewBtn: document.querySelector('.leave-review'),
    reviewModal: document.getElementById('review-modal'),
    contactForm: document.getElementById('contact-form'),
    bookingForm: document.getElementById('booking-form'),
    timeSelect: document.querySelector('#booking-form select:nth-of-type(2)'),
    galleryModal: document.getElementById('gallery-modal'),
    galleryImage: document.querySelector('.gallery-image'),
    galleryTitle: document.querySelector('.gallery-title'),
    galleryDescription: document.querySelector('.gallery-description'),
    galleryPrev: document.querySelector('.gallery-prev'),
    galleryNext: document.querySelector('.gallery-next'),
    serviceType: document.getElementById('service-type'),
    peopleCount: document.getElementById('people-count'),
    photoCount: document.getElementById('photo-count'),
    retouchType: document.getElementById('retouch'),
    totalPrice: document.querySelector('.total-price'),
    priceDetails: document.querySelectorAll('.detail-item span:last-child'),
    bookNowBtn: document.querySelector('.book-now'),
    statNumbers: document.querySelectorAll('.stat-number')
};

// Инициализация приложения
function init() {
    renderServices();
    renderPortfolio();
    renderReviews();
    setupEventListeners();
    initAnimations();
    initScrollTopButton();
    setupFormValidation();
    setupTimeSelect();
    setupPriceCalculator();
    setupGallery();
    animateStats();
    hidePreloader();
}

// Рендер услуг
function renderServices() {
    const popularServices = STATE.services.filter(service => service.popular);
    const otherServices = STATE.services.filter(service => !service.popular);
    
    let html = `
        <div class="services-popular">
            <h3 class="services-subtitle">Популярные услуги</h3>
            <div class="services-popular-grid">
                ${popularServices.map(service => serviceCardHTML(service)).join('')}
            </div>
        </div>
        <div class="services-other">
            <h3 class="services-subtitle">Другие услуги</h3>
            <div class="services-other-grid">
                ${otherServices.map(service => serviceCardHTML(service)).join('')}
            </div>
        </div>
    `;
    
    DOM.servicesGrid.innerHTML = html;
}

function serviceCardHTML(service) {
    return `
        <div class="service-card" data-id="${service.id}">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
            <span class="price">${service.price}</span>
            <button class="btn-secondary service-book" data-service="${service.id}">
                <span>Записаться</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
}

// Рендер портфолио
function renderPortfolio() {
    const filteredItems = STATE.activeFilter === 'all' 
        ? STATE.portfolio 
        : STATE.portfolio.filter(item => item.category === STATE.activeFilter);
    
    const itemsToShow = filteredItems.slice(0, STATE.loadedPortfolioItems);
    
    DOM.portfolioGrid.innerHTML = itemsToShow.map(item => portfolioItemHTML(item)).join('');
    
    // Скрыть кнопку "Показать еще", если все элементы уже показаны
    DOM.loadMoreBtn.style.display = 
        STATE.loadedPortfolioItems >= filteredItems.length ? 'none' : 'block';
    
    // Инициализация lightGallery
    if (window.lightGallery) {
        lightGallery(document.getElementById('lightgallery'), {
            selector: '.portfolio-item',
            download: false,
            counter: false
        });
    }
}

function portfolioItemHTML(item) {
    return `
        <div class="portfolio-item" data-id="${item.id}" data-category="${item.category}" data-src="${item.img}" data-sub-html="<h4>${item.title}</h4><p>${item.desc}</p>">
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="overlay">
                <h3>${item.title}</h3>
                <button class="btn-secondary portfolio-view">Посмотреть</button>
            </div>
        </div>
    `;
}

// Рендер отзывов
function renderReviews() {
    DOM.reviewsTrack.innerHTML = STATE.reviews.map(review => reviewHTML(review)).join('');
    initReviewsAnimation();
}

function reviewHTML(review) {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return `
        <div class="review-card">
            <div class="review-header">
                <h4>${review.name}</h4>
                <div class="review-rating">${stars}</div>
            </div>
            <div class="review-text">${review.text}</div>
            <div class="review-date">${review.date}</div>
        </div>
    `;
}

// Анимация отзывов
function initReviewsAnimation() {
    // Дублируем отзывы для бесконечной анимации
    DOM.reviewsTrack.innerHTML += DOM.reviewsTrack.innerHTML;
    
    if (typeof gsap !== 'undefined') {
        const trackWidth = DOM.reviewsTrack.scrollWidth / 2;
        const duration = trackWidth / 30; // Скорость анимации
        
        gsap.to(DOM.reviewsTrack, {
            x: -trackWidth,
            duration: duration,
            ease: "none",
            repeat: -1
        });
    }
}

// Инициализация анимаций
function initAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Анимация появления секций
        gsap.utils.toArray('.section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: CONFIG.animationDuration,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Анимация карточек услуг
        gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 30,
                duration: CONFIG.animationDuration,
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Анимация элементов портфолио
        gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: CONFIG.animationDuration,
                delay: i * 0.05,
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Анимация герой-секции
        gsap.from('.hero-content', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5
        });
        
        gsap.from('.hero-image', {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.8
        });
    }
}

// Инициализация кнопки "Наверх"
function initScrollTopButton() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            DOM.scrollTopBtn.classList.add('show');
        } else {
            DOM.scrollTopBtn.classList.remove('show');
        }
    });
    
    DOM.scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Настройка выбора времени
function setupTimeSelect() {
    if (DOM.timeSelect) {
        DOM.timeSelect.innerHTML = `
            <option value="" disabled selected>Выберите время</option>
            ${CONFIG.bookingTimes.map(time => `<option value="${time}">${time}</option>`).join('')}
        `;
    }
}

// Настройка калькулятора цен
function setupPriceCalculator() {
    if (DOM.serviceType && DOM.peopleCount && DOM.photoCount && DOM.retouchType) {
        // Обработчики изменений
        DOM.serviceType.addEventListener('change', updatePrice);
        DOM.peopleCount.addEventListener('input', updatePrice);
        DOM.photoCount.addEventListener('input', updatePrice);
        DOM.retouchType.addEventListener('change', updatePrice);
        
        // Отображение значений range
        DOM.peopleCount.addEventListener('input', function() {
            this.nextElementSibling.textContent = this.value;
        });
        
        DOM.photoCount.addEventListener('input', function() {
            this.nextElementSibling.textContent = this.value;
        });
        
        // Инициализация цены
        updatePrice();
    }
}

function updatePrice() {
    const service = DOM.serviceType.value;
    const people = parseInt(DOM.peopleCount.value);
    const photos = parseInt(DOM.photoCount.value);
    const retouch = DOM.retouchType.value;
    
    const pricing = CONFIG.pricing[service];
    let total = pricing.base;
    
    // Добавляем стоимость за количество человек
    total += pricing.perPerson * (people - 1);
    
    // Добавляем стоимость за количество фото
    total += pricing.perPhoto * (photos - (service === 'documents' ? 1 : 5));
    
    // Добавляем стоимость ретуши
    if (retouch === 'basic') {
        total += pricing.basicRetouch * photos;
    } else if (retouch === 'premium') {
        total += pricing.premiumRetouch * photos;
    }
    
    // Обновляем отображение цены
    DOM.totalPrice.textContent = `${total.toLocaleString('ru-RU')} ₽`;
    
    // Обновляем детали
    DOM.priceDetails[0].textContent = DOM.serviceType.options[DOM.serviceType.selectedIndex].text;
    DOM.priceDetails[1].textContent = people;
    DOM.priceDetails[2].textContent = photos;
    DOM.priceDetails[3].textContent = DOM.retouchType.options[DOM.retouchType.selectedIndex].text;
}

// Настройка галереи
function setupGallery() {
    if (DOM.galleryModal) {
        DOM.galleryPrev.addEventListener('click', showPrevGalleryItem);
        DOM.galleryNext.addEventListener('click', showNextGalleryItem);
    }
}

function showGalleryItem(index) {
    const item = STATE.portfolio[index];
    if (item) {
        DOM.galleryImage.src = item.img;
        DOM.galleryImage.alt = item.title;
        DOM.galleryTitle.textContent = item.title;
        DOM.galleryDescription.textContent = item.desc;
        STATE.currentGalleryIndex = index;
    }
}

function showPrevGalleryItem() {
    let newIndex = STATE.currentGalleryIndex - 1;
    if (newIndex < 0) newIndex = STATE.portfolio.length - 1;
    showGalleryItem(newIndex);
}

function showNextGalleryItem() {
    let newIndex = STATE.currentGalleryIndex + 1;
    if (newIndex >= STATE.portfolio.length) newIndex = 0;
    showGalleryItem(newIndex);
}

// Анимация статистики
function animateStats() {
    if (DOM.statNumbers) {
        DOM.statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
}

// Настройка валидации форм
function setupFormValidation() {
    if (DOM.contactForm) {
        DOM.contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (STATE.formSubmitting) return;
            
            STATE.formSubmitting = true;
            const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Отправка...</span>';
            
            // Здесь должна быть реальная отправка формы
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            DOM.modal.classList.remove('active');
            DOM.successModal.classList.add('active');
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Отправить заявку</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            STATE.formSubmitting = false;
            DOM.contactForm.reset();
        });
    }
    
    if (DOM.bookingForm) {
        DOM.bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (STATE.formSubmitting) return;
            
            STATE.formSubmitting = true;
            const submitBtn = DOM.bookingForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Отправка...</span>';
            
            // Здесь должна быть реальная отправка формы
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            DOM.modal.classList.remove('active');
            DOM.successModal.classList.add('active');
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Записаться</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            STATE.formSubmitting = false;
            DOM.bookingForm.reset();
        });
    }

    if (DOM.reviewModal) {
        const reviewForm = DOM.reviewModal.querySelector('form');
        if (reviewForm) {
            reviewForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (STATE.formSubmitting) return;
                
                STATE.formSubmitting = true;
                const submitBtn = reviewForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Отправка...</span>';
                
                // Здесь должна быть реальная отправка формы
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                DOM.reviewModal.classList.remove('active');
                DOM.successModal.classList.add('active');
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Отправить отзыв</span>';
                STATE.formSubmitting = false;
                reviewForm.reset();
            });
        }
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Навигация
    DOM.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const sectionId = btn.dataset.tab;
            DOM.sections.forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            
            // Закрыть меню на мобильных устройствах
            if (window.innerWidth <= CONFIG.mobileBreakpoint) {
                toggleMenu(false);
            }
        });
    });
    
    // Мобильное меню
    DOM.menuToggle.addEventListener('click', () => toggleMenu());
    
    // Модальные окна
    if (DOM.ctaBtn) {
        DOM.ctaBtn.addEventListener('click', () => toggleModal(DOM.modal, true));
    }
    
    if (DOM.modalOverlay) {
        DOM.modalOverlay.addEventListener('click', () => {
            toggleModal(DOM.modal, false);
            toggleModal(DOM.reviewModal, false);
            toggleModal(DOM.successModal, false);
            toggleModal(DOM.galleryModal, false);
        });
    }
    
    if (DOM.modalClose) {
        DOM.modalClose.addEventListener('click', () => toggleModal(DOM.modal, false));
    }
    
    if (DOM.closeSuccess) {
        DOM.closeSuccess.addEventListener('click', () => toggleModal(DOM.successModal, false));
    }

    // Кнопка "Оставить отзыв"
    if (DOM.leaveReviewBtn) {
        DOM.leaveReviewBtn.addEventListener('click', () => toggleModal(DOM.reviewModal, true));
    }
    
    // Фильтрация портфолио
    DOM.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            STATE.activeFilter = btn.dataset.filter;
            STATE.loadedPortfolioItems = 6;
            renderPortfolio();
        });
    });
    
    // Кнопка "Показать еще"
    if (DOM.loadMoreBtn) {
        DOM.loadMoreBtn.addEventListener('click', () => {
            STATE.loadedPortfolioItems += 3;
            renderPortfolio();
            
            // Прокрутка к новым элементам
            const lastItem = DOM.portfolioGrid.lastElementChild;
            lastItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // Запись на услугу из карточки
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('service-book') || e.target.closest('.service-book')) {
            const serviceId = e.target.closest('.service-book').dataset.service;
            const service = STATE.services.find(s => s.id === serviceId);
            if (service) {
                toggleModal(DOM.modal, true);
                // Установить выбранную услугу в форме
                if (DOM.serviceType) {
                    DOM.serviceType.value = serviceId;
                    updatePrice();
                }
            }
        }
        
        // Просмотр работы из портфолио
        if (e.target.classList.contains('portfolio-view') || e.target.closest('.portfolio-view')) {
            const itemId = parseInt(e.target.closest('.portfolio-item').dataset.id);
            const itemIndex = STATE.portfolio.findIndex(i => i.id === itemId);
            if (itemIndex !== -1) {
                showGalleryItem(itemIndex);
                toggleModal(DOM.galleryModal, true);
            }
        }
        
        // Запись из калькулятора цен
        if (e.target.classList.contains('book-now') || e.target.closest('.book-now')) {
            toggleModal(DOM.modal, true);
        }
    });
    
    // Закрытие модальных окон по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleModal(DOM.modal, false);
            toggleModal(DOM.successModal, false);
            toggleModal(DOM.reviewModal, false);
            toggleModal(DOM.galleryModal, false);
        }
    });
    
    // Прокрутка при загрузке страницы с якорем
    window.addEventListener('load', () => {
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        }
    });
}

// Управление мобильным меню
function toggleMenu(force) {
    STATE.isMenuOpen = force !== undefined ? force : !STATE.isMenuOpen;
    
    if (STATE.isMenuOpen) {
        DOM.nav.classList.add('active');
        DOM.menuToggle.setAttribute('aria-expanded', 'true');
        DOM.body.style.overflow = 'hidden';
    } else {
        DOM.nav.classList.remove('active');
        DOM.menuToggle.setAttribute('aria-expanded', 'false');
        DOM.body.style.overflow = '';
    }
}

// Управление модальными окнами
function toggleModal(modal, show) {
    if (show) {
        modal.classList.add('active');
        DOM.body.style.overflow = 'hidden';
    } else {
        modal.classList.remove('active');
        DOM.body.style.overflow = '';
    }
}

// Скрытие прелоадера
function hidePreloader() {
    if (DOM.preloader) {
        gsap.to(DOM.preloader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => DOM.preloader.style.display = 'none'
        });
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);
