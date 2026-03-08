// Конфигурация ЮMoney (client_id можно показывать в коде)
const YOOMONEY_CLIENT_ID = 'F7642ED1CA446A7CB47557510D5A8638B35B180125A793FCF6A2EB8F98BBBAC9';

// Каталог документов
const documentsCatalog = [
    {
        id: 1,
        title: "Договор аренды квартиры",
        category: "realty",
        price: 249,
        description: "Полноценный договор найма жилого помещения",
        fullDescription: "Договор составлен с учетом всех требований ГК РФ. Включает: предмет договора, права и обязанности сторон, порядок расчетов, ответственность, порядок расторжения.",
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
        description: "Юридически значимая расписка. Идеально для займов между физлицами.",
        fullDescription: "Расписка составлена так, чтобы иметь доказательную силу в суде. Включает: ФИО сторон, паспортные данные, сумму цифрами и прописью, дату возврата, проценты.",
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
        fullDescription: "Соответствует требованиям ГИБДД. Включает: полные характеристики авто, паспортные данные сторон, цену, порядок передачи.",
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
        description: "Юридически грамотная претензия в магазин. Помогает вернуть деньги за брак.",
        fullDescription: "Составлена по ЗоЗПП. Включает: ссылки на статьи закона, требования о возврате или замене, сроки ответа.",
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
        fullDescription: "Соответствует ТК РФ. Включает: режим работы, оплату, обязанности, ответственность, соцпакет.",
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
        fullDescription: "Составлен с учетом рисков оспаривания. Подходит для дарения квартиры, машины, денег.",
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
        title: "Договор займа",
        category: "finance",
        price: 199,
        description: "Официальный договор займа с процентами или без. Для крупных сумм.",
        fullDescription: "Позволяет дать в долг без риска. Включает: график платежей, проценты, штрафы, залог.",
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
        description: "Соглашение о месте жительства детей и порядке общения после развода.",
        fullDescription: "Помогает избежать споров в суде. Учитывает интересы ребенка, график встреч, алименты.",
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
        fullDescription: "Составлено по требованиям нотариата. Включает: назначение наследников, распределение долей.",
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

// Тарифы
const TARIFFS = {
    free: {
        name: "Бесплатный",
        canBuyTemplates: true,
        canGenerateAI: false,
        aiGenerations: 0,
        price: 0
    },
    pro: {
        name: "PRO",
        canBuyTemplates: true,
        canGenerateAI: true,
        aiGenerations: 30,
        price: 499
    },
    business: {
        name: "Бизнес",
        canBuyTemplates: true,
        canGenerateAI: true,
        aiGenerations: 100,
        price: 1490
    }
};

// Состояние приложения
let cart = [];
let currentUser = {
    tariff: 'free',
    aiGenerationsLeft: 0,
    email: localStorage.getItem('user_email') || null
};

// Основной класс приложения
class PreepDocs {
    constructor() {
        this.cart = []; // Инициализируем корзину
        this.currentUser = {
            tariff: 'free',
            aiGenerationsLeft: 0,
            email: localStorage.getItem('user_email') || null
        };
        this.init();
    }
    
    init() {
        this.displayDocuments();
        this.displayPopular();
        this.setupEventListeners();
        this.updateCartCount();
        this.loadUserData();
        this.updateAILimit();
    }
    
    loadUserData() {
        const saved = localStorage.getItem('preep_user');
        if (saved) {
            try {
                this.currentUser = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading user data', e);
            }
        }
        this.updateUserInterface();
    }
    
    updateUserInterface() {
        const tariffInfo = document.getElementById('tariffInfo');
        if (!tariffInfo) return;
        
        if (this.currentUser.tariff === 'free') {
            tariffInfo.innerHTML = `
                <span>Бесплатный тариф</span>
                <button class="btn btn-small btn-primary" id="upgradeBtn">PRO 499₽</button>
            `;
        } else {
            tariffInfo.innerHTML = `
                <span class="tariff-badge">${TARIFFS[this.currentUser.tariff]?.name || 'PRO'}</span>
                <span class="tariff-generations">Осталось: ${this.currentUser.aiGenerationsLeft || 0}</span>
            `;
        }
        
        const aiLeftSpan = document.getElementById('aiGenerationsLeft');
        if (aiLeftSpan) {
            aiLeftSpan.textContent = this.currentUser.aiGenerationsLeft || 0;
        }
        
        // Обновляем обработчик
        const upgradeBtn = document.getElementById('upgradeBtn');
        if (upgradeBtn) {
            upgradeBtn.addEventListener('click', () => this.showTariffModal());
        }
    }
    
    updateAILimit() {
        const limitBadge = document.getElementById('aiLimitBadge');
        const limitInfo = document.getElementById('aiLimitInfo');
        
        if (!limitBadge || !limitInfo) return;
        
        if (this.currentUser.tariff === 'free') {
            limitBadge.textContent = 'Только PRO';
            limitInfo.style.display = 'none';
        } else {
            limitBadge.textContent = `${this.currentUser.aiGenerationsLeft || 0} генераций`;
            limitInfo.style.display = 'block';
        }
    }
    
    setupEventListeners() {
        // Поиск
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.searchDocuments());
        }
        
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.searchDocuments();
            });
        }
        
        // Фильтр по категориям
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.searchDocuments());
        }
        
        // Категории-чипсы
        document.querySelectorAll('.category-chip').forEach(el => {
            el.addEventListener('click', (e) => {
                document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
                const cat = e.target.dataset.cat;
                if (categoryFilter) categoryFilter.value = cat;
                this.searchDocuments();
            });
        });
        
        // Корзина
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.showCart());
        }
        
        const closeCartModal = document.getElementById('closeCartModal');
        if (closeCartModal) {
            closeCartModal.addEventListener('click', () => this.closeModal('cartModal'));
        }
        
        // Модалки документов
        const closeDocModal = document.getElementById('closeDocModal');
        if (closeDocModal) {
            closeDocModal.addEventListener('click', () => this.closeModal('docModal'));
        }
        
        // Оплата
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.showPayment());
        }
        
        const closePaymentModal = document.getElementById('closePaymentModal');
        if (closePaymentModal) {
            closePaymentModal.addEventListener('click', () => this.closeModal('paymentModal'));
        }
        
        const payBtn = document.getElementById('payBtn');
        if (payBtn) {
            payBtn.addEventListener('click', () => this.processPayment());
        }
        
        // Успешная оплата
        const closeSuccessModal = document.getElementById('closeSuccessModal');
        if (closeSuccessModal) {
            closeSuccessModal.addEventListener('click', () => this.closeModal('successModal'));
        }
        
        const continueBtn = document.getElementById('continueBtn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                this.closeModal('successModal');
                this.cart = [];
                this.updateCartCount();
            });
        }
        
        // Генерация нейросетью
        const generateAiBtn = document.getElementById('generateAiBtn');
        if (generateAiBtn) {
            generateAiBtn.addEventListener('click', () => this.generateWithAI());
        }
        
        const copyAiResult = document.getElementById('copyAiResult');
        if (copyAiResult) {
            copyAiResult.addEventListener('click', () => this.copyAIResult());
        }
        
        const downloadAiResult = document.getElementById('downloadAiResult');
        if (downloadAiResult) {
            downloadAiResult.addEventListener('click', () => this.downloadAIResult());
        }
        
        // Тарифы
        const closeTariffModal = document.getElementById('closeTariffModal');
        if (closeTariffModal) {
            closeTariffModal.addEventListener('click', () => this.closeModal('tariffModal'));
        }
        
        const confirmTariffBtn = document.getElementById('confirmTariffBtn');
        if (confirmTariffBtn) {
            confirmTariffBtn.addEventListener('click', () => this.processTariffPayment());
        }
        
        // Вход
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showLoginModal());
        }
        
        // Закрытие по клику вне модалки
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });
    }
    
    // ===== Документы =====
    
    displayDocuments(filteredDocs = null) {
        const container = document.getElementById('docsContainer');
        if (!container) return;
        
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
        // Можно добавить отдельный контейнер для популярных
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
    
    searchDocuments() {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        
        const searchText = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : 'all';
        
        const filtered = documentsCatalog.filter(doc => {
            const matchesSearch = doc.title.toLowerCase().includes(searchText) || 
                                 doc.description.toLowerCase().includes(searchText);
            const matchesCategory = category === 'all' || doc.category === category;
            return matchesSearch && matchesCategory;
        });
        
        this.displayDocuments(filtered);
        
        const container = document.getElementById('docsContainer');
        if (filtered.length === 0 && container) {
            container.innerHTML = `
                <div class="no-results">
                    <p>По вашему запросу ничего не найдено</p>
                    <button class="btn btn-outline" onclick="app.resetSearch()">Сбросить</button>
                </div>
            `;
        }
    }
    
    resetSearch() {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        
        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = 'all';
        
        document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        const allChip = document.querySelector('.category-chip[data-cat="all"]');
        if (allChip) allChip.classList.add('active');
        
        this.displayDocuments();
    }
    
    showDocument(id) {
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        const modalContent = document.getElementById('docDetailContent');
        if (!modalContent) return;
        
        modalContent.innerHTML = `
            <div class="doc-detail">
                <span class="doc-detail-category">${this.getCategoryName(doc.category)}</span>
                <h2 class="doc-detail-title">${doc.title}</h2>
                <div class="doc-detail-price">${doc.price} ₽</div>
                
                <div class="doc-detail-description">
                    <p>${doc.fullDescription}</p>
                </div>
                
                <div class="doc-detail-features">
                    <h3>Что входит:</h3>
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
    
    // ===== Корзина и оплата =====
    
    addToCart(id) {
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        if (!this.cart) this.cart = [];
        
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
        if (!this.cart) this.cart = [];
        this.cart.splice(index, 1);
        this.updateCartCount();
        this.showCart();
        this.showToast('Товар удален из корзины');
    }
    
    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.cart && this.cart.length ? this.cart.length : 0;
        }
    }
    
    showCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems || !cartTotal) return;
        
        if (!this.cart || this.cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
            cartTotal.textContent = 'Итого: 0 ₽';
        } else {
            cartItems.innerHTML = this.cart.map((item, index) => `
                <div class="cart-item">
                    <span class="cart-item-title">${item.title}</span>
                    <span class="cart-item-price">${item.price} ₽</span>
                    <span class="cart-item-remove" onclick="app.removeFromCart(${index})">✕</span>
                </div>
            `).join('');
            
            const total = this.cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = `Итого: ${total} ₽`;
        }
        
        this.openModal('cartModal');
    }
    
    showPayment() {
        if (!this.cart || this.cart.length === 0) {
            this.closeModal('cartModal');
            this.showToast('Корзина пуста');
            return;
        }
        
        const summary = document.getElementById('orderSummary');
        const payAmount = document.getElementById('payAmount');
        
        if (!summary || !payAmount) return;
        
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
        
        payAmount.textContent = `${total} ₽`;
        this.closeModal('cartModal');
        this.openModal('paymentModal');
    }
    
    processPayment() {
        const email = document.getElementById('paymentEmail');
        if (!email) return;
        
        const emailValue = email.value.trim();
        
        if (!emailValue || !emailValue.includes('@')) {
            this.showToast('Введите корректный email');
            return;
        }
        
        // Сохраняем email
        this.currentUser.email = emailValue;
        localStorage.setItem('user_email', emailValue);
        localStorage.setItem('preep_user', JSON.stringify(this.currentUser));
        
        const total = this.cart.reduce((sum, item) => sum + item.price, 0);
        const orderId = Date.now();
        
        // Формируем URL для оплаты через ЮMoney (БЕЗ test=1)
        const yoomoneyUrl = `https://yoomoney.ru/quickpay/confirm.xml?` +
            `receiver=${YOOMONEY_CLIENT_ID}&` +
            `quickpay-form=shop&` +
            `paymentType=AC&` +
            `sum=${total}&` +
            `label=${orderId}&` +
            `successURL=${window.location.origin}/payment-success.html?email=${encodeURIComponent(emailValue)}&` +
            `targets=Оплата%20документов%20Preep`;
        
        // Сохраняем заказ
        this.saveOrder(orderId, emailValue, this.cart);
        
        // Редирект на ЮMoney
        window.location.href = yoomoneyUrl;
    }
    
    saveOrder(orderId, email, items) {
        try {
            const orders = JSON.parse(localStorage.getItem('preep_orders') || '{}');
            orders[orderId] = {
                email: email,
                items: items,
                status: 'pending',
                date: new Date().toISOString()
            };
            localStorage.setItem('preep_orders', JSON.stringify(orders));
        } catch (e) {
            console.error('Error saving order', e);
        }
    }
    
    // ===== Нейросеть =====
    
    async generateWithAI() {
        // Проверка тарифа
        if (this.currentUser.tariff === 'free') {
            this.showToast('Генерация доступна только в PRO тарифе');
            this.showTariffModal();
            return;
        }
        
        if (!this.currentUser.aiGenerationsLeft || this.currentUser.aiGenerationsLeft <= 0) {
            this.showToast('Закончились генерации. Пополните лимит');
            this.showTariffModal();
            return;
        }
        
        const prompt = document.getElementById('aiPrompt');
        if (!prompt) return;
        
        const promptValue = prompt.value.trim();
        if (!promptValue) {
            this.showToast('Опишите, какой документ вам нужен');
            return;
        }
        
        // Показываем загрузку
        const aiResult = document.getElementById('aiResult');
        const generateBtn = document.getElementById('generateAiBtn');
        
        if (aiResult) aiResult.style.display = 'none';
        if (generateBtn) {
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<span>⏳ Генерация...</span>';
        }
        
        try {
            // Вызов API (через Vercel)
            const response = await fetch('/api/generate-doc', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: promptValue,
                    type: document.getElementById('aiDocType')?.value || 'auto',
                    style: document.getElementById('aiStyle')?.value || 'official'
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Уменьшаем счетчик
                this.currentUser.aiGenerationsLeft--;
                localStorage.setItem('preep_user', JSON.stringify(this.currentUser));
                this.updateAILimit();
                
                // Показываем результат
                const resultContent = document.getElementById('aiResultContent');
                if (resultContent) {
                    resultContent.textContent = data.document;
                }
                if (aiResult) aiResult.style.display = 'block';
                
                this.showToast('Документ создан!');
            } else {
                throw new Error(data.error || 'Ошибка генерации');
            }
            
        } catch (error) {
            console.error('AI Error:', error);
            this.showToast('Ошибка при генерации. Попробуйте еще раз');
            
            // Для теста - показываем тестовый документ
            const resultContent = document.getElementById('aiResultContent');
            if (resultContent) {
                resultContent.textContent = this.getTestDocument(promptValue);
            }
            if (aiResult) aiResult.style.display = 'block';
            
        } finally {
            if (generateBtn) {
                generateBtn.disabled = false;
                generateBtn.innerHTML = '<span>🔮 Сгенерировать документ</span>';
            }
        }
    }
    
    copyAIResult() {
        const resultContent = document.getElementById('aiResultContent');
        if (!resultContent) return;
        
        const text = resultContent.textContent;
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Документ скопирован');
        }).catch(() => {
            this.showToast('Ошибка копирования');
        });
    }
    
    downloadAIResult() {
        const resultContent = document.getElementById('aiResultContent');
        if (!resultContent) return;
        
        const text = resultContent.textContent;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `document_${Date.now()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Файл скачан');
    }
    
    getTestDocument(prompt) {
        return `ДОГОВОР НА ОСНОВАНИИ ВАШЕГО ЗАПРОСА

Запрос: "${prompt}"

ДОГОВОР АРЕНДЫ КВАРТИРЫ

г. Москва                                          «${new Date().getDate()}» ${new Date().toLocaleString('ru', { month: 'long' })} ${new Date().getFullYear()} г.

Гражданин РФ Иванов Иван Иванович, ... (договор сгенерирован нейросетью)

... (полный текст договора) ...

(Это тестовый режим. Для реальной генерации подключите API)`;
    }
    
    // ===== Тарифы =====
    
    showTariffModal() {
        this.openModal('tariffModal');
    }
    
    selectTariff(tariff) {
        this.currentUser.selectedTariff = tariff;
    }
    
    processTariffPayment() {
        const tariff = this.currentUser.selectedTariff || 'pro';
        const price = TARIFFS[tariff]?.price || 499;
        const orderId = `tariff_${Date.now()}`;
        
        // Формируем URL для оплаты (БЕЗ test=1)
        const yoomoneyUrl = `https://yoomoney.ru/quickpay/confirm.xml?` +
            `receiver=${YOOMONEY_CLIENT_ID}&` +
            `quickpay-form=shop&` +
            `paymentType=AC&` +
            `sum=${price}&` +
            `label=${orderId}&` +
            `successURL=${window.location.origin}/payment-success.html&` +
            `targets=Тариф%20${TARIFFS[tariff]?.name || 'PRO'}`;
        
        // Сохраняем заказ на тариф
        try {
            const orders = JSON.parse(localStorage.getItem('preep_tariff_orders') || '{}');
            orders[orderId] = {
                tariff: tariff,
                status: 'pending',
                date: new Date().toISOString()
            };
            localStorage.setItem('preep_tariff_orders', JSON.stringify(orders));
        } catch (e) {
            console.error('Error saving tariff order', e);
        }
        
        window.location.href = yoomoneyUrl;
    }
    
    // ===== Вход =====
    
    showLoginModal() {
        const email = prompt('Введите ваш email для входа:');
        if (email && email.includes('@')) {
            this.currentUser.email = email;
            localStorage.setItem('user_email', email);
            localStorage.setItem('preep_user', JSON.stringify(this.currentUser));
            this.updateUserInterface();
            this.showToast('Вы вошли как ' + email);
        }
    }
    
    // ===== Вспомогательные =====
    
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
        }
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    }
    
    showToast(message) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Инициализация
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PreepDocs();
    window.app = app; // Делаем app глобальным для вызовов из HTML
});
