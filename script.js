// Каталог документов
const documentsCatalog = [
    {
        id: 1,
        title: "Договор аренды квартиры",
        category: "realty",
        price: 249,
        description: "Полноценный договор найма жилого помещения. Подходит для сдачи квартиры, комнаты или дома.",
        fullDescription: "Договор составлен с учетом всех требований ГК РФ. Включает: предмет договора, права и обязанности сторон, порядок расчетов, ответственность, форс-мажор, порядок расторжения. Есть возможность указать дополнительное имущество.",
        features: [
            "Защита прав арендодателя",
            "Прописаны все риски",
            "Возможность указать залог",
            "Кто платит коммуналку"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1543
    },
    {
        id: 2,
        title: "Расписка о получении денег",
        category: "finance",
        price: 149,
        description: "Простая, но юридически значимая расписка. Идеально для займов между физлицами.",
        fullDescription: "Расписка составлена так, чтобы иметь доказательную силу в суде. Включает: ФИО сторон, паспортные данные, сумму цифрами и прописью, дату возврата, проценты, штрафные санкции.",
        features: [
            "Помогает вернуть долг через суд",
            "Учитывает проценты",
            "Штраф за просрочку",
            "Можно указать поручителя"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 2341
    },
    {
        id: 3,
        title: "Договор купли-продажи автомобиля",
        category: "auto",
        price: 299,
        description: "Официальный договор для продажи авто. Помогает избежать проблем с ГИБДД.",
        fullDescription: "Соответствует требованиям ГИБДД. Включает: полные характеристики авто, паспортные данные сторон, цену, порядок передачи, ответственность за скрученный пробег.",
        features: [
            "Для ГИБДД подходит",
            "Учитывает техсостояние",
            "Акт приема-передачи",
            "Без риска обмана"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1876
    },
    {
        id: 4,
        title: "Претензия на возврат товара",
        category: "claims",
        price: 199,
        description: "Юридически грамотная претензия в магазин. Помогает вернуть деньги за бракованный товар.",
        fullDescription: "Составлена по ЗоЗПП. Включает: ссылки на статьи закона, требования о возврате или замене, сроки ответа, предупреждение о суде.",
        features: [
            "Работает по Закону о защите прав потребителей",
            "Помогает без суда",
            "Срок ответа 10 дней",
            "Можно приложить чек"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 987
    },
    {
        id: 5,
        title: "Трудовой договор",
        category: "business",
        price: 349,
        description: "Полноценный трудовой договор для официального оформления сотрудника.",
        fullDescription: "Соответствует ТК РФ. Включает: режим работы, оплату, обязанности, ответственность, соцпакет, испытательный срок.",
        features: [
            "Для ИП и ООО",
            "Учитывает все нюансы ТК",
            "Испытательный срок",
            "Материальная ответственность"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 654
    },
    {
        id: 6,
        title: "Договор дарения",
        category: "realty",
        price: 279,
        description: "Договор дарения недвижимости или движимого имущества между близкими.",
        fullDescription: "Составлен с учетом рисков оспаривания. Подходит для дарения квартиры, машины, денег. Учитывает налоговые последствия.",
        features: [
            "Между родственниками",
            "Без налога",
            "Регистрация в Росреестре",
            "Защита от оспаривания"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 543
    },
    {
        id: 7,
        title: "Договор займа между физлицами",
        category: "finance",
        price: 199,
        description: "Официальный договор займа с процентами или без. Для крупных сумм.",
        fullDescription: "Позволяет дать в долг без риска. Включает: график платежей, проценты, штрафы, залог, поручительство.",
        features: [
            "С процентами или без",
            "Можно с залогом",
            "Пени за просрочку",
            "Досудебный порядок"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1432
    },
    {
        id: 8,
        title: "Соглашение о детях при разводе",
        category: "family",
        price: 399,
        description: "Соглашение о месте жительства детей и порядке общения с ними после развода.",
        fullDescription: "Помогает избежать споров в суде. Учитывает интересы ребенка, график встреч, алименты, участие в расходах.",
        features: [
            "Утверждается судом",
            "Защита прав ребенка",
            "Четкий график",
            "Алименты"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 432
    },
    {
        id: 9,
        title: "Завещание",
        category: "family",
        price: 299,
        description: "Простое завещание на случай смерти. Можно указать наследников и доли.",
        fullDescription: "Составлено по требованиям нотариата. Включает: назначение наследников, распределение долей, подназначение наследников.",
        features: [
            "Можно без нотариуса",
            "Закрытое завещание",
            "Подназначение наследников",
            "Завещательный отказ"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 876
    }
];

// Корзина
let cart = [];

// Основной класс приложения
class PreepDocs {
    constructor() {
        this.cart = [];
        this.init();
    }
    
    init() {
        this.displayDocuments();
        this.displayPopular();
        this.setupEventListeners();
        this.updateCartCount();
    }
    
    setupEventListeners() {
        // Поиск
        document.getElementById('searchBtn').addEventListener('click', () => this.searchDocuments());
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchDocuments();
        });
        
        // Фильтр по категориям
        document.getElementById('categoryFilter').addEventListener('change', () => this.searchDocuments());
        
        // Категории-иконки
        document.querySelectorAll('.category-icon').forEach(el => {
            el.addEventListener('click', (e) => {
                const cat = e.target.dataset.cat;
                document.getElementById('categoryFilter').value = cat;
                this.searchDocuments();
                
                // Подсветка активной категории
                document.querySelectorAll('.category-icon').forEach(icon => icon.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
        
        // Корзина
        document.getElementById('cartBtn').addEventListener('click', () => this.showCart());
        document.getElementById('closeCartModal').addEventListener('click', () => this.closeModal('cartModal'));
        
        // Модалки документов
        document.getElementById('closeDocModal').addEventListener('click', () => this.closeModal('docModal'));
        
        // Оплата
        document.getElementById('checkoutBtn').addEventListener('click', () => this.showPayment());
        document.getElementById('closePaymentModal').addEventListener('click', () => this.closeModal('paymentModal'));
        document.getElementById('payBtn').addEventListener('click', () => this.processPayment());
        
        // Успешная оплата
        document.getElementById('closeSuccessModal').addEventListener('click', () => this.closeModal('successModal'));
        document.getElementById('continueBtn').addEventListener('click', () => {
            this.closeModal('successModal');
            this.cart = [];
            this.updateCartCount();
        });
        
        // Вход (заглушка)
        document.getElementById('loginBtn').addEventListener('click', () => {
            this.showToast('Функция входа появится скоро');
        });
        
        // Закрытие по клику вне модалки
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });
    }
    
    displayDocuments(filteredDocs = null) {
        const container = document.getElementById('docsContainer');
        const docs = filteredDocs || documentsCatalog;
        
        container.innerHTML = docs.map(doc => `
            <div class="doc-card ${doc.popular ? 'popular' : ''}" onclick="app.showDocument(${doc.id})">
                <span class="doc-category">${this.getCategoryName(doc.category)}</span>
                <h3 class="doc-title">${doc.title}</h3>
                <p class="doc-description">${doc.description}</p>
                <div class="doc-footer">
                    <span class="doc-price">${doc.price} ₽</span>
                    <span class="doc-format">📄 ${doc.formats.join(' + ')}</span>
                </div>
            </div>
        `).join('');
    }
    
    displayPopular() {
        const popular = documentsCatalog.filter(doc => doc.popular).slice(0, 3);
        const container = document.getElementById('popularContainer');
        
        container.innerHTML = popular.map(doc => `
            <div class="doc-card" onclick="app.showDocument(${doc.id})">
                <span class="doc-category">${this.getCategoryName(doc.category)}</span>
                <h3 class="doc-title">${doc.title}</h3>
                <p class="doc-description">${doc.description}</p>
                <div class="doc-footer">
                    <span class="doc-price">${doc.price} ₽</span>
                    <span class="doc-format">📥 ${doc.downloads} скачиваний</span>
                </div>
            </div>
        `).join('');
    }
    
    searchDocuments() {
        const searchText = document.getElementById('searchInput').value.toLowerCase();
        const category = document.getElementById('categoryFilter').value;
        
        const filtered = documentsCatalog.filter(doc => {
            const matchesSearch = doc.title.toLowerCase().includes(searchText) || 
                                 doc.description.toLowerCase().includes(searchText);
            const matchesCategory = category === 'all' || doc.category === category;
            return matchesSearch && matchesCategory;
        });
        
        this.displayDocuments(filtered);
        
        if (filtered.length === 0) {
            document.getElementById('docsContainer').innerHTML = `
                <div class="no-results">
                    <p>По вашему запросу ничего не найдено</p>
                    <button class="btn btn-outline" onclick="app.resetSearch()">Сбросить фильтры</button>
                </div>
            `;
        }
    }
    
    resetSearch() {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = 'all';
        document.querySelectorAll('.category-icon').forEach(icon => icon.classList.remove('active'));
        this.displayDocuments();
    }
    
    showDocument(id) {
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        const modalContent = document.getElementById('docDetailContent');
        modalContent.innerHTML = `
            <div class="doc-detail">
                <span class="doc-detail-category">${this.getCategoryName(doc.category)}</span>
                <h2 class="doc-detail-title">${doc.title}</h2>
                <div class="doc-detail-price">${doc.price} ₽</div>
                
                <div class="doc-detail-description">
                    <p>${doc.fullDescription}</p>
                </div>
                
                <div class="doc-detail-features">
                    <h3>Что входит в документ:</h3>
                    <ul>
                        ${doc.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="doc-detail-formats">
                    ${doc.formats.map(f => `<span class="format-badge">📄 ${f}</span>`).join('')}
                </div>
                
                <button class="btn btn-primary btn-block" onclick="app.addToCart(${doc.id})">
                    🛒 Добавить в корзину
                </button>
            </div>
        `;
        
        this.openModal('docModal');
    }
    
    addToCart(id) {
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        this.cart.push({
            id: doc.id,
            title: doc.title,
            price: doc.price
        });
        
        this.updateCartCount();
        this.closeModal('docModal');
        this.showToast(`${doc.title} добавлен в корзину`);
    }
    
    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.updateCartCount();
        this.showCart();
        this.showToast('Товар удален из корзины');
    }
    
    showCart() {
        const cartItems = document.getElementById('cartItems');
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: var(--gray-400); padding: 30px;">Корзина пуста</p>';
            document.getElementById('cartTotal').textContent = 'Итого: 0 ₽';
        } else {
            cartItems.innerHTML = this.cart.map((item, index) => `
                <div class="cart-item">
                    <span class="cart-item-title">${item.title}</span>
                    <span class="cart-item-price">${item.price} ₽</span>
                    <span class="cart-item-remove" onclick="app.removeFromCart(${index})">✕</span>
                </div>
            `).join('');
            
            const total = this.cart.reduce((sum, item) => sum + item.price, 0);
            document.getElementById('cartTotal').textContent = `Итого: ${total} ₽`;
        }
        
        this.openModal('cartModal');
    }
    
    showPayment() {
        if (this.cart.length === 0) {
            this.closeModal('cartModal');
            this.showToast('Корзина пуста');
            return;
        }
        
        const summary = document.getElementById('orderSummary');
        const total = this.cart.reduce((sum, item) => sum + item.price, 0);
        
        summary.innerHTML = `
            <div class="order-items">
                ${this.cart.map(item => `
                    <div class="order-item">
                        <span>${item.title}</span>
                        <span>${item.price} ₽</span>
                    </div>
                `).join('')}
                <div class="order-total">
                    <span>Итого:</span>
                    <span>${total} ₽</span>
                </div>
            </div>
        `;
        
        document.getElementById('payAmount').textContent = `${total} ₽`;
        this.closeModal('cartModal');
        this.openModal('paymentModal');
    }
    
    processPayment() {
        const email = document.getElementById('paymentEmail').value.trim();
        
        if (!email || !email.includes('@')) {
            this.showToast('Введите корректный email');
            return;
        }
        
        const total = this.cart.reduce((sum, item) => sum + item.price, 0);
        
        // Здесь будет интеграция с платежной системой
        // Пока имитируем успешную оплату
        
        setTimeout(() => {
            this.closeModal('paymentModal');
            document.getElementById('successEmail').textContent = email;
            this.openModal('successModal');
            
            // Очищаем корзину
            this.cart = [];
            this.updateCartCount();
        }, 1500);
    }
    
    getCategoryName(cat) {
        const names = {
            'realty': '🏠 Недвижимость',
            'auto': '🚗 Авто',
            'finance': '💰 Финансы',
            'family': '👨‍👩‍👧 Семья',
            'business': '💼 Бизнес',
            'claims': '⚖️ Споры'
        };
        return names[cat] || cat;
    }
    
    updateCartCount() {
        document.getElementById('cartCount').textContent = this.cart.length;
    }
    
    openModal(modalId) {
        document.getElementById(modalId).classList.add('show');
    }
    
    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
    }
    
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Инициализация
const app = new PreepDocs();
