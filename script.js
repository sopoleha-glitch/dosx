// Инициализация EmailJS с твоим ключом
emailjs.init("JaUjXNKg7r2iZsTfq");

// Конфигурация ЮMoney
const YOOMONEY_CLIENT_ID = 'F7642ED1CA446A7CB47557510D5A8638B35B180125A793FCF6A2EB8F98BBBAC9';

// ============================================
// РЕЖИМ РАЗРАБОТЧИКА
// ============================================
const DEV_MODE = true; // true = режим разработчика (эмуляция покупок)

// Тестовые файлы для разработчика
const DEV_FILES = {
    1: { docx: 'test-docs/dogovor-arendy.docx', pdf: 'test-docs/dogovor-arendy.pdf' },
    2: { docx: 'test-docs/raspiska.docx', pdf: 'test-docs/raspiska.pdf' },
    3: { docx: 'test-docs/dogovor-avto.docx', pdf: 'test-docs/dogovor-avto.pdf' },
    4: { docx: 'test-docs/pretenzii.docx', pdf: 'test-docs/pretenzii.pdf' },
    5: { docx: 'test-docs/trudovoy.docx', pdf: 'test-docs/trudovoy.pdf' },
    6: { docx: 'test-docs/darenie.docx', pdf: 'test-docs/darenie.pdf' },
    7: { docx: 'test-docs/zaym.docx', pdf: 'test-docs/zaym.pdf' },
    8: { docx: 'test-docs/soglashenie-o-detyah.docx', pdf: 'test-docs/soglashenie-o-detyah.pdf' },
    9: { docx: 'test-docs/zaveshaniya.docx', pdf: 'test-docs/zaveshaniya.pdf' },
    10: { docx: 'test-docs/schet.docx', pdf: 'test-docs/schet.pdf' },
    11: { docx: 'test-docs/uslugi.docx', pdf: 'test-docs/uslugi.pdf' },
    12: { docx: 'test-docs/kuplia-prodazha.docx', pdf: 'test-docs/kuplia-prodazha.pdf' },
    13: { docx: 'test-docs/akt.docx', pdf: 'test-docs/akt.pdf' },
    14: { docx: 'test-docs/doverennosti.docx', pdf: 'test-docs/doverennosti.pdf' },
    15: { docx: 'test-docs/podryad.docx', pdf: 'test-docs/podryad.pdf' }
};

// ============================================
// КАТАЛОГ ДОКУМЕНТОВ (15 штук)
// ============================================
const documentsCatalog = [
    // 1. Договор аренды квартиры
    {
        id: 1,
        title: "Договор аренды квартиры",
        category: "realty",
        price: 229,
        description: "Полноценный договор найма жилого помещения с описью имущества",
        fullDescription: "Договор составлен с учетом всех требований ГК РФ. Включает: предмет договора, права и обязанности сторон, порядок расчетов, ответственность, порядок расторжения, а также приложение с описью имущества.",
        features: [
            "Защита прав арендодателя и арендатора",
            "Подробная опись имущества",
            "Порядок внесения залога",
            "Кто платит коммунальные услуги",
            "Права на проживание с животными"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1543
    },
    
    // 2. Расписка о получении денег
    {
        id: 2,
        title: "Расписка о получении денег",
        category: "finance",
        price: 149,
        description: "Юридически значимая расписка с возможностью привлечения свидетелей",
        fullDescription: "Расписка составлена так, чтобы иметь доказательную силу в суде. Включает: ФИО сторон, паспортные данные, сумму цифрами и прописью, дату возврата, возможность привлечения двух свидетелей.",
        features: [
            "Помогает вернуть долг через суд",
            "Возможность привлечения свидетелей",
            "Четкая дата возврата",
            "Паспортные данные обеих сторон",
            "Сумма прописью и цифрами"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 2341
    },
    
    // 3. Договор купли-продажи автомобиля
    {
        id: 3,
        title: "Договор купли-продажи автомобиля",
        category: "auto",
        price: 289,
        description: "Официальный договор для продажи авто. Соответствует требованиям ГИБДД.",
        fullDescription: "Договор купли-продажи транспортного средства. Включает: полные характеристики авто (VIN, двигатель, кузов, цвет), паспортные данные сторон, цену, порядок передачи, отсутствие обременений.",
        features: [
            "Соответствует требованиям ГИБДД",
            "Все технические характеристики",
            "Составляется в 3 экземплярах",
            "Включает расписку о передаче денег",
            "Срок для перерегистрации 10 дней"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1876
    },
    
    // 4. Сборник претензий (6 образцов)
    {
        id: 4,
        title: "Сборник претензий (6 образцов)",
        category: "claims",
        price: 299,
        description: "6 готовых образцов претензий для защиты прав потребителей",
        fullDescription: "Полный сборник претензий для всех ситуаций: при обнаружении недостатков (гарантия), для некачественного товара (до 2 лет), для технически сложных товаров, возврат товара надлежащего качества, нарушение сроков работ, недостатки услуг.",
        features: [
            "Претензия по недостаткам (гарантия)",
            "Претензия для товара (до 2 лет)",
            "Претензия для технически сложных товаров",
            "Заявление на возврат (не подошел)",
            "Претензия по нарушению сроков",
            "Претензия по недостаткам услуг"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 987
    },
    
    // 5. Трудовой договор
    {
        id: 5,
        title: "Трудовой договор",
        category: "business",
        price: 299,
        description: "Полноценный трудовой договор для официального оформления сотрудника",
        fullDescription: "Трудовой договор составлен в соответствии с ТК РФ. Включает: предмет договора, срок действия, условия оплаты труда, режим рабочего времени, права и обязанности сторон, ответственность, реквизиты.",
        features: [
            "Для ИП и ООО",
            "Учитывает все требования ТК РФ",
            "Испытательный срок",
            "Должностной оклад и премии",
            "Режим рабочего времени",
            "Ежегодный отпуск",
            "Социальное страхование"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 654
    },
    
    // 6. Договор дарения
    {
        id: 6,
        title: "Договор дарения (с актом)",
        category: "realty",
        price: 249,
        description: "Договор дарения движимого или недвижимого имущества с актом приема-передачи",
        fullDescription: "Полноценный договор дарения для передачи имущества или денежных средств. Включает: предмет договора, права и обязанности сторон, порядок передачи, отказ от дара, отмену дарения, акт приема-передачи.",
        features: [
            "Дарение движимого и недвижимого имущества",
            "Дарение денежных средств",
            "Возможность отказа от дара",
            "Отмена дарения по закону",
            "Акт приема-передачи в комплекте"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 543
    },
    
    // 7. Договор займа
    {
        id: 7,
        title: "Договор займа (с процентами)",
        category: "finance",
        price: 199,
        description: "Официальный договор займа между физическими лицами с процентами или без",
        fullDescription: "Договор займа, составленный по ГК РФ. Включает: предмет договора, порядок предоставления и возврата, проценты, ответственность за просрочку, форс-мажор, реквизиты.",
        features: [
            "С процентами или без (можно 0%)",
            "Подходит для крупных сумм",
            "Четкий график возврата",
            "Пени за просрочку",
            "Форс-мажорные обстоятельства",
            "Досудебный порядок"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1432
    },
    
    // 8. Соглашение о детях при разводе
    {
        id: 8,
        title: "Соглашение о детях и разделе имущества",
        category: "family",
        price: 349,
        description: "Полное соглашение о детях и разделе имущества при разводе",
        fullDescription: "Соглашение составлено по Семейному кодексу РФ. Включает: место жительства детей, порядок общения, алименты, раздел квартиры, автомобилей и иного имущества.",
        features: [
            "Место жительства детей",
            "Порядок общения с ребенком",
            "Алименты и содержание",
            "Раздел квартиры и имущества",
            "Юридическая сила без суда"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 432
    },
    
    // 9. Сборник завещаний (4 вида)
    {
        id: 9,
        title: "Сборник завещаний (4 вида)",
        category: "family",
        price: 299,
        description: "4 готовых шаблона завещаний для разных ситуаций",
        fullDescription: "Сборник завещаний по ГК РФ: с подназначением наследника, с лишением наследства, всего имущества, на имя супруга.",
        features: [
            "С подназначением наследника",
            "С лишением наследства",
            "На имя супруга",
            "Для составления по месту лечения",
            "Соответствуют ГК РФ (ст. 1149)"
        ],
        formats: ["PDF", "DOCX"],
        popular: false,
        downloads: 876
    },
    
    // 10. Счет на оплату
    {
        id: 10,
        title: "Счет на оплату (бланк)",
        category: "business",
        price: 99,
        description: "Готовый бланк счета на оплату для выставления клиентам",
        fullDescription: "Универсальный бланк счета на оплату. Включает: реквизиты поставщика, покупателя, таблицу для позиций, итоговые суммы, подписи.",
        features: [
            "Готовый бланк для печати",
            "Все необходимые реквизиты",
            "Таблица для нескольких позиций",
            "Расчет итоговой суммы",
            "Подписи руководителя и бухгалтера"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 2345
    },
    
    // 11. Договор оказания услуг
    {
        id: 11,
        title: "Договор оказания услуг (универсальный)",
        category: "business",
        price: 269,
        description: "Универсальный договор для любых услуг: ремонт, клининг, обучение, консультации",
        fullDescription: "Договор возмездного оказания услуг по ГК РФ. Включает: предмет, права и обязанности, сроки, цену, ответственность, порядок сдачи-приемки.",
        features: [
            "Универсальный — для любых услуг",
            "Четкие сроки оказания",
            "Порядок сдачи-приемки",
            "Ответственность за просрочку",
            "Право заказчика проверять ход работ"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1543
    },
    
    // 12. Договор купли-продажи товара
    {
        id: 12,
        title: "Договор купли-продажи товара (с актом)",
        category: "business",
        price: 249,
        description: "Универсальный договор купли-продажи для любых товаров",
        fullDescription: "Договор купли-продажи по ГК РФ с актом приема-передачи. Включает: предмет, качество, цену, порядок передачи, ответственность.",
        features: [
            "Универсальный — для любых товаров",
            "Подробные условия о качестве",
            "Гибкая система оплаты",
            "Порядок приемки и проверки",
            "Акт приема-передачи в комплекте"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 876
    },
    
    // 13. Акт выполненных работ
    {
        id: 13,
        title: "Акт выполненных работ (оказанных услуг)",
        category: "business",
        price: 99,
        description: "Готовый бланк акта приема-сдачи работ/услуг",
        fullDescription: "Акт выполненных работ, подтверждающий факт оказания услуг. Включает: реквизиты сторон, перечень услуг, количество, цену, итоговую сумму.",
        features: [
            "Подтверждение факта оказания услуг",
            "Детализация по каждой услуге",
            "Указание количества и цены",
            "Итоговая сумма прописью",
            "Фраза об отсутствии претензий"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 1654
    },
    
    // 14. Сборник доверенностей (5 видов)
    {
        id: 14,
        title: "Сборник доверенностей (5 видов)",
        category: "business",
        price: 299,
        description: "5 готовых шаблонов доверенностей для разных ситуаций",
        fullDescription: "Сборник доверенностей: в налоговую, на ребенка, на получение денег, генеральная на авто, на ведение судебного дела.",
        features: [
            "Для налоговой (от юрлица)",
            "На ребенка (бабушке/дедушке)",
            "На получение денег",
            "Генеральная на автомобиль",
            "На ведение судебных дел"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 765
    },
    
    // 15. Договор подряда
    {
        id: 15,
        title: "Договор подряда (с ТЗ и календарным планом)",
        category: "business",
        price: 299,
        description: "Полноценный договор подряда для строительных и ремонтных работ",
        fullDescription: "Договор подряда по ГК РФ с техническим заданием и календарным планом. Включает: предмет, сроки, сумму, гарантийные обязательства.",
        features: [
            "Для строительства и ремонта",
            "Четкие сроки выполнения",
            "Гарантийные обязательства",
            "Порядок сдачи-приемки",
            "Техническое задание",
            "Календарный план"
        ],
        formats: ["PDF", "DOCX"],
        popular: true,
        downloads: 543
    }
];

// ============================================
// БОНУСНАЯ СИСТЕМА
// ============================================
const BONUS_LEVELS = {
    1: { generations: 1, checks: 0, message: "🎁 +1 генерация нейросети" },
    3: { generations: 3, checks: 1, message: "🎁 +3 генерации + проверка документа" },
    5: { generations: 5, checks: 2, message: "🎁 +5 генераций + 2 проверки" },
    10: { generations: 10, checks: 5, message: "🔥 VIP + безлимит на месяц", vip: true }
};

// Тарифы
const TARIFFS = {
    free: {
        name: "Базовый",
        discount: 0,
        bonusMultiplier: 1
    },
    pro: {
        name: "PRO",
        price: 499,
        discount: 0.2, // 20% скидка
        bonusMultiplier: 2, // удвоенные бонусы
        aiGenerations: 10
    }
};

// Состояние приложения
let cart = [];
let currentUser = {
    tariff: 'free',
    aiGenerationsLeft: DEV_MODE ? 5 : 0, // В режиме разработчика сразу 5 генераций
    checksLeft: 0,
    purchases: DEV_MODE ? [1, 2, 3, 4, 5] : [], // В режиме разработчика уже есть покупки
    email: DEV_MODE ? 'dev@preep.ru' : null,
    isAuthenticated: DEV_MODE ? true : false
};

// ============================================
// СИСТЕМА ВХОДА ПО EMAIL
// ============================================
class EmailAuth {
    constructor() {
        this.verificationCode = null;
        this.userEmail = null;
        this.timer = null;
        this.timeLeft = 60;
    }
    
    showLoginModal() {
        const oldModal = document.getElementById('authModal');
        if (oldModal) oldModal.remove();
        
        const modal = document.createElement('div');
        modal.className = 'modal show';
        modal.id = 'authModal';
        
        // Если режим разработчика — показываем упрощенный вход
        if (DEV_MODE) {
            modal.innerHTML = `
                <div class="modal-content modal-small">
                    <button class="modal-close" onclick="auth.closeModal()">&times;</button>
                    <h2 class="modal-title">🔐 Режим разработчика</h2>
                    
                    <p style="color: var(--gray-600); margin-bottom: 20px; text-align: center;">
                        Войдите с тестовым аккаунтом
                    </p>
                    
                    <button class="btn btn-primary btn-block" onclick="auth.devLogin()">
                        🚀 Войти как разработчик
                    </button>
                    
                    <button class="btn btn-outline btn-block" onclick="auth.showRealLogin()" style="margin-top: 10px;">
                        Реальный вход по email
                    </button>
                </div>
            `;
        } else {
            modal.innerHTML = `
                <div class="modal-content modal-small">
                    <button class="modal-close" onclick="auth.closeModal()">&times;</button>
                    <h2 class="modal-title">🔐 Вход / Регистрация</h2>
                    
                    <div id="authStep1">
                        <p style="color: var(--gray-600); margin-bottom: 20px;">
                            Введите email — мы отправим код для входа
                        </p>
                        
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="authEmail" class="form-input" 
                                   placeholder="ivan@example.ru" 
                                   value="${this.getLastEmail() || ''}">
                        </div>
                        
                        <button class="btn btn-primary btn-block" onclick="auth.sendCode()">
                            Получить код
                        </button>
                        
                        <p style="text-align: center; margin-top: 20px; color: var(--gray-400); font-size: 0.9rem;">
                            Бесплатно. Без паролей.
                        </p>
                    </div>
                    
                    <div id="authStep2" style="display: none;">
                        <p style="color: var(--gray-600); margin-bottom: 20px;">
                            Введите код из письма
                        </p>
                        
                        <div class="code-inputs">
                            <input type="text" maxlength="1" class="code-digit" id="code1" autofocus>
                            <input type="text" maxlength="1" class="code-digit" id="code2">
                            <input type="text" maxlength="1" class="code-digit" id="code3">
                            <input type="text" maxlength="1" class="code-digit" id="code4">
                            <input type="text" maxlength="1" class="code-digit" id="code5">
                            <input type="text" maxlength="1" class="code-digit" id="code6">
                        </div>
                        
                        <div class="email-display" id="emailDisplay"></div>
                        
                        <div class="timer" id="timerDisplay">
                            Отправить повторно через <span id="timerSeconds">60</span> сек
                        </div>
                        
                        <button class="btn btn-primary btn-block" onclick="auth.verifyCode()">
                            Подтвердить и войти
                        </button>
                        
                        <button class="btn btn-outline btn-block" onclick="auth.backToEmail()" style="margin-top: 10px;">
                            ← Изменить email
                        </button>
                    </div>
                </div>
            `;
        }
        
        document.body.appendChild(modal);
        this.addCodeInputStyles();
        
        if (!DEV_MODE) {
            setTimeout(() => this.setupCodeInputs(), 100);
        }
    }
    
    devLogin() {
        // Быстрый вход в режиме разработчика
        currentUser = {
            tariff: 'free',
            aiGenerationsLeft: 5,
            checksLeft: 3,
            purchases: [1, 2, 3, 4, 5],
            email: 'dev@preep.ru',
            isAuthenticated: true
        };
        
        localStorage.setItem('preep_user', JSON.stringify(currentUser));
        localStorage.setItem('preep_auth', JSON.stringify({ email: 'dev@preep.ru', dev: true }));
        
        this.closeModal();
        app.updateUserInterface();
        app.updateBonusInfo();
        app.updateAIInfo();
        app.showToast('✅ Режим разработчика активирован');
    }
    
    showRealLogin() {
        // Показываем реальную форму входа
        const modal = document.getElementById('authModal');
        modal.innerHTML = `
            <div class="modal-content modal-small">
                <button class="modal-close" onclick="auth.closeModal()">&times;</button>
                <h2 class="modal-title">🔐 Вход по email</h2>
                
                <div id="authStep1">
                    <p style="color: var(--gray-600); margin-bottom: 20px;">
                        Введите email — мы отправим код для входа
                    </p>
                    
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="authEmail" class="form-input" 
                               placeholder="ivan@example.ru" 
                               value="${this.getLastEmail() || ''}">
                    </div>
                    
                    <button class="btn btn-primary btn-block" onclick="auth.sendCode()">
                        Получить код
                    </button>
                </div>
                
                <div id="authStep2" style="display: none;">
                    <p style="color: var(--gray-600); margin-bottom: 20px;">
                        Введите код из письма
                    </p>
                    
                    <div class="code-inputs">
                        <input type="text" maxlength="1" class="code-digit" id="code1" autofocus>
                        <input type="text" maxlength="1" class="code-digit" id="code2">
                        <input type="text" maxlength="1" class="code-digit" id="code3">
                        <input type="text" maxlength="1" class="code-digit" id="code4">
                        <input type="text" maxlength="1" class="code-digit" id="code5">
                        <input type="text" maxlength="1" class="code-digit" id="code6">
                    </div>
                    
                    <div class="email-display" id="emailDisplay"></div>
                    
                    <div class="timer" id="timerDisplay">
                        Отправить повторно через <span id="timerSeconds">60</span> сек
                    </div>
                    
                    <button class="btn btn-primary btn-block" onclick="auth.verifyCode()">
                        Подтвердить и войти
                    </button>
                    
                    <button class="btn btn-outline btn-block" onclick="auth.backToEmail()" style="margin-top: 10px;">
                        ← Изменить email
                    </button>
                </div>
            </div>
        `;
        
        this.addCodeInputStyles();
        setTimeout(() => this.setupCodeInputs(), 100);
    }
    
    addCodeInputStyles() {
        if (document.getElementById('authStyles')) return;
        
        const style = document.createElement('style');
        style.id = 'authStyles';
        style.textContent = `
            .code-inputs {
                display: flex;
                gap: 8px;
                justify-content: center;
                margin: 20px 0;
            }
            
            .code-digit {
                width: 45px;
                height: 55px;
                text-align: center;
                font-size: 1.8rem;
                font-weight: 600;
                border: 2px solid var(--gray-200);
                border-radius: var(--radius-md);
                transition: all 0.2s;
            }
            
            .code-digit:focus {
                outline: none;
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
            }
            
            .timer {
                text-align: center;
                color: var(--gray-500);
                font-size: 0.9rem;
                margin: 15px 0;
            }
            
            #timerSeconds {
                font-weight: 600;
                color: var(--primary);
            }
            
            .email-display {
                text-align: center;
                font-weight: 500;
                color: var(--primary);
                margin: 10px 0;
                padding: 8px;
                background: var(--gray-50);
                border-radius: var(--radius-md);
            }
            
            .btn-link {
                background: none;
                border: none;
                color: var(--primary);
                text-decoration: underline;
                cursor: pointer;
                font-size: 0.9rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupCodeInputs() {
        const inputs = document.querySelectorAll('.code-digit');
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1) {
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                }
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
            
            input.addEventListener('keypress', (e) => {
                if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                }
            });
        });
    }
    
    getLastEmail() {
        const saved = localStorage.getItem('preep_last_email');
        return saved || '';
    }
    
    async sendCode() {
        const email = document.getElementById('authEmail').value.trim();
        
        if (!email || !email.includes('@') || !email.includes('.')) {
            app.showToast('Введите корректный email');
            return;
        }
        
        this.userEmail = email;
        localStorage.setItem('preep_last_email', email);
        
        // Генерируем 6-значный код
        this.verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Показываем этап ввода кода
        document.getElementById('authStep1').style.display = 'none';
        document.getElementById('authStep2').style.display = 'block';
        document.getElementById('emailDisplay').textContent = email;
        
        // Запускаем таймер
        this.startTimer();
        
        app.showToast('⏳ Отправка кода...');
        
        try {
            
            const SERVICE_ID = "service_kj3lh59";  
            const TEMPLATE_ID = "template_s9gd3tg"; 
            
            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    to_email: email,
                    code: this.verificationCode
                }
            );
            
            console.log('EmailJS ответ:', response);
            app.showToast(`✅ Код отправлен на ${email}`);
            
        } catch (error) {
            console.error('Ошибка EmailJS:', error);
            app.showToast('⚠️ Ошибка отправки. Код в консоли');
            console.log('🔐 Ваш код:', this.verificationCode);
        }
    }
    
    startTimer() {
        this.timeLeft = 60;
        document.getElementById('timerSeconds').textContent = this.timeLeft;
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            document.getElementById('timerSeconds').textContent = this.timeLeft;
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                document.querySelector('.timer').innerHTML = 
                    '<button class="btn-link" onclick="auth.resendCode()">Отправить код повторно</button>';
            }
        }, 1000);
    }
    
    resendCode() {
        clearInterval(this.timer);
        this.verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(`Новый код: ${this.verificationCode}`);
        app.showToast('Код отправлен повторно');
        this.startTimer();
    }
    
    verifyCode() {
        const code1 = document.getElementById('code1').value;
        const code2 = document.getElementById('code2').value;
        const code3 = document.getElementById('code3').value;
        const code4 = document.getElementById('code4').value;
        const code5 = document.getElementById('code5').value;
        const code6 = document.getElementById('code6').value;
        
        const enteredCode = code1 + code2 + code3 + code4 + code5 + code6;
        
        if (enteredCode === this.verificationCode) {
            const user = {
                email: this.userEmail,
                verified: true,
                lastLogin: new Date().toISOString()
            };
            
            localStorage.setItem('preep_auth', JSON.stringify(user));
            
            currentUser = {
                ...currentUser,
                email: this.userEmail,
                isAuthenticated: true
            };
            
            localStorage.setItem('preep_user', JSON.stringify(currentUser));
            
            this.closeModal();
            app.updateUserInterface();
            app.updateBonusInfo();
            app.updateAIInfo();
            app.showToast(`✅ Добро пожаловать, ${this.userEmail.split('@')[0]}!`);
        } else {
            app.showToast('Неверный код. Попробуйте снова.');
        }
    }
    
    backToEmail() {
        clearInterval(this.timer);
        document.getElementById('authStep1').style.display = 'block';
        document.getElementById('authStep2').style.display = 'none';
    }
    
    closeModal() {
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.remove();
            clearInterval(this.timer);
        }
    }
    
    logout() {
        localStorage.removeItem('preep_auth');
        currentUser.isAuthenticated = false;
        currentUser.email = null;
        localStorage.setItem('preep_user', JSON.stringify(currentUser));
        app.updateUserInterface();
        app.showToast('👋 Вы вышли из аккаунта');
    }
    
    checkAuth() {
        const saved = localStorage.getItem('preep_auth');
        if (saved) {
            const user = JSON.parse(saved);
            currentUser.email = user.email;
            currentUser.isAuthenticated = true;
            return true;
        }
        return false;
    }
}

// Создаем глобальный экземпляр
const auth = new EmailAuth();

// ============================================
// ОСНОВНОЙ КЛАСС
// ============================================
class PreepDocs {
    constructor() {
        this.cart = [];
        this.loadUserData();
        this.init();
    }
    
    loadUserData() {
        const saved = localStorage.getItem('preep_user');
        if (saved) {
            try {
                currentUser = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading user data');
            }
        }
        
        auth.checkAuth();
        
        // Если режим разработчика и нет авторизации, включаем тестовый режим
        if (DEV_MODE && !currentUser.isAuthenticated) {
            currentUser = {
                tariff: 'free',
                aiGenerationsLeft: 5,
                checksLeft: 3,
                purchases: [1, 2, 3, 4, 5],
                email: 'dev@preep.ru',
                isAuthenticated: true
            };
        }
    }
    
    saveUserData() {
        localStorage.setItem('preep_user', JSON.stringify(currentUser));
    }
    
    init() {
        this.displayDocuments();
        this.setupEventListeners();
        this.updateCartCount();
        this.updateBonusInfo();
        this.updateAIInfo();
        this.updateUserInterface();
        
        // В режиме разработчика показываем подсказку
        if (DEV_MODE && !localStorage.getItem('dev_hint_shown')) {
            setTimeout(() => {
                this.showToast('🚀 Режим разработчика: покупки эмулируются');
                localStorage.setItem('dev_hint_shown', 'true');
            }, 1000);
        }
    }
    
    setupEventListeners() {
        document.getElementById('searchBtn').addEventListener('click', () => this.searchDocuments());
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchDocuments();
        });
        
        document.getElementById('categoryFilter').addEventListener('change', () => this.searchDocuments());
        
        document.querySelectorAll('.category-chip').forEach(el => {
            el.addEventListener('click', (e) => {
                document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
                const cat = e.target.dataset.cat;
                document.getElementById('categoryFilter').value = cat;
                this.searchDocuments();
            });
        });
        
        document.getElementById('cartBtn').addEventListener('click', () => this.showCart());
        document.getElementById('closeCartModal').addEventListener('click', () => this.closeModal('cartModal'));
        
        document.getElementById('closeDocModal').addEventListener('click', () => this.closeModal('docModal'));
        document.getElementById('closePaymentModal').addEventListener('click', () => this.closeModal('paymentModal'));
        document.getElementById('closeSuccessModal').addEventListener('click', () => this.closeModal('successModal'));
        document.getElementById('continueBtn').addEventListener('click', () => {
            this.closeModal('successModal');
            this.cart = [];
            this.updateCartCount();
        });
        
        document.getElementById('checkoutBtn').addEventListener('click', () => this.showPayment());
        document.getElementById('payBtn').addEventListener('click', () => this.processPayment());
        
        document.getElementById('generateAiBtn').addEventListener('click', () => this.generateWithAI());
        document.getElementById('copyAiResult').addEventListener('click', () => this.copyAIResult());
        document.getElementById('downloadAiResult').addEventListener('click', () => this.downloadAIResult());
        
        document.getElementById('loginBtn').addEventListener('click', () => {
            if (currentUser.isAuthenticated) {
                this.toggleUserMenu();
            } else {
                auth.showLoginModal();
            }
        });
        
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });
    }
    
    updateUserInterface() {
        const loginBtn = document.getElementById('loginBtn');
        
        if (currentUser.isAuthenticated && currentUser.email) {
            const displayName = currentUser.email === 'dev@preep.ru' ? '🧪 Разработчик' : currentUser.email.split('@')[0];
            const shortName = displayName.length > 10 ? displayName.substring(0, 8) + '...' : displayName;
            
            loginBtn.innerHTML = `
                <span>${currentUser.email === 'dev@preep.ru' ? '🧪' : '📧'} ${shortName}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            `;
        } else {
            loginBtn.innerHTML = '👤 Войти';
        }
    }
    
    toggleUserMenu() {
        const oldMenu = document.getElementById('userMenu');
        if (oldMenu) oldMenu.remove();
        
        const menu = document.createElement('div');
        menu.id = 'userMenu';
        menu.className = 'user-menu';
        
        const purchaseCount = currentUser.purchases.length;
        const purchasedDocs = purchaseCount > 0 
            ? documentsCatalog.filter(d => currentUser.purchases.includes(d.id))
            : [];
        
        menu.innerHTML = `
            <div class="user-menu-header">
                <strong>${currentUser.email === 'dev@preep.ru' ? '🧪 Режим разработчика' : currentUser.email}</strong>
                ${DEV_MODE ? '<span style="color: #f59e0b; font-size: 0.8rem; margin-left: 5px;">(тестовый)</span>' : ''}
            </div>
            <div class="user-menu-item" onclick="app.showProfile()">
                👤 Профиль
            </div>
            <div class="user-menu-item" onclick="app.showPurchases()">
                📦 Мои покупки (${purchaseCount})
            </div>
            ${purchaseCount > 0 ? `
                <div class="user-menu-divider"></div>
                <div class="user-menu-subheader">Ваши документы:</div>
                ${purchasedDocs.slice(0, 3).map(doc => `
                    <div class="user-menu-doc" onclick="app.downloadDevFile(${doc.id})">
                        📄 ${doc.title} (${doc.formats.join('/')})
                    </div>
                `).join('')}
                ${purchaseCount > 3 ? '<div class="user-menu-more">и еще ' + (purchaseCount - 3) + ' документов...</div>' : ''}
            ` : ''}
            ${DEV_MODE ? `
                <div class="user-menu-divider"></div>
                <div class="user-menu-subheader">🧪 Тестовые действия:</div>
                <div class="user-menu-item" onclick="app.devAddGenerations(5)">
                    ✨ +5 генераций
                </div>
                <div class="user-menu-item" onclick="app.devAddDocument()">
                    📝 Добавить тестовый документ в покупки
                </div>
                <div class="user-menu-item" onclick="app.devReset()">
                    🔄 Сбросить тестовые данные
                </div>
            ` : ''}
            <div class="user-menu-divider"></div>
            <div class="user-menu-item" onclick="auth.logout()">
                🚪 Выйти
            </div>
        `;
        
        const btn = document.getElementById('loginBtn');
        const rect = btn.getBoundingClientRect();
        
        menu.style.position = 'absolute';
        menu.style.top = (rect.bottom + 5) + 'px';
        menu.style.right = (window.innerWidth - rect.right) + 'px';
        menu.style.zIndex = '1000';
        
        document.body.appendChild(menu);
        this.addUserMenuStyles();
        
        setTimeout(() => {
            document.addEventListener('click', function closeMenu(e) {
                if (!menu.contains(e.target) && e.target.id !== 'loginBtn') {
                    menu.remove();
                    document.removeEventListener('click', closeMenu);
                }
            });
        }, 100);
    }
    
    addUserMenuStyles() {
        if (document.getElementById('userMenuStyles')) return;
        
        const style = document.createElement('style');
        style.id = 'userMenuStyles';
        style.textContent = `
            .user-menu {
                background: white;
                border: 1px solid var(--gray-200);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-lg);
                min-width: 240px;
                overflow: hidden;
                animation: fadeIn 0.2s ease;
            }
            
            .user-menu-header {
                padding: 12px 16px;
                background: var(--gray-50);
                border-bottom: 1px solid var(--gray-200);
                font-size: 0.9rem;
                font-weight: 500;
            }
            
            .user-menu-subheader {
                padding: 8px 16px 4px;
                font-size: 0.8rem;
                color: var(--gray-500);
                font-weight: 600;
            }
            
            .user-menu-item {
                padding: 10px 16px;
                cursor: pointer;
                transition: background 0.2s;
            }
            
            .user-menu-item:hover {
                background: var(--gray-100);
            }
            
            .user-menu-doc {
                padding: 8px 16px 8px 32px;
                cursor: pointer;
                transition: background 0.2s;
                font-size: 0.9rem;
                color: var(--primary);
            }
            
            .user-menu-doc:hover {
                background: var(--gray-100);
                text-decoration: underline;
            }
            
            .user-menu-more {
                padding: 8px 16px;
                font-size: 0.8rem;
                color: var(--gray-400);
            }
            
            .user-menu-divider {
                height: 1px;
                background: var(--gray-200);
                margin: 8px 0;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===== МЕТОДЫ РАЗРАБОТЧИКА =====
    
    downloadDevFile(id) {
        if (!DEV_MODE) return;
        
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        // Создаем тестовый файл
        const content = `Это тестовый файл для документа "${doc.title}".
        
В режиме разработчика файлы не хранятся реально.
Для настоящей работы загрузите реальные PDF/DOCX в папку /docs.

Дата генерации: ${new Date().toLocaleString('ru-RU')}`;
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `test-${doc.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showToast(`📄 Тестовый файл "${doc.title}" скачан`);
    }
    
    devAddGenerations(count) {
        if (!DEV_MODE) return;
        
        currentUser.aiGenerationsLeft += count;
        this.saveUserData();
        this.updateAIInfo();
        this.showToast(`✨ Добавлено ${count} генераций`);
    }
    
    devAddDocument() {
        if (!DEV_MODE) return;
        
        const randomDoc = documentsCatalog[Math.floor(Math.random() * documentsCatalog.length)];
        if (!currentUser.purchases.includes(randomDoc.id)) {
            currentUser.purchases.push(randomDoc.id);
            currentUser.aiGenerationsLeft += 1;
            this.saveUserData();
            this.updateBonusInfo();
            this.showToast(`📝 Добавлен документ: ${randomDoc.title}`);
        } else {
            this.showToast('Этот документ уже есть в покупках');
        }
    }
    
    devReset() {
        if (!DEV_MODE) return;
        
        currentUser.purchases = [1, 2, 3, 4, 5];
        currentUser.aiGenerationsLeft = 5;
        currentUser.checksLeft = 3;
        this.saveUserData();
        this.updateBonusInfo();
        this.updateAIInfo();
        this.showToast('🔄 Тестовые данные сброшены');
    }
    
    // ===== КАТАЛОГ =====
    
    displayDocuments(filteredDocs = null) {
        const container = document.getElementById('docsContainer');
        const docs = filteredDocs || documentsCatalog;
        
        const discount = currentUser.tariff === 'pro' ? TARIFFS.pro.discount : 0;
        
        container.innerHTML = docs.map(doc => {
            const finalPrice = discount ? Math.round(doc.price * (1 - discount)) : doc.price;
            const isPurchased = currentUser.purchases.includes(doc.id);
            
            return `
            <div class="doc-card ${doc.popular ? 'popular' : ''} ${isPurchased ? 'purchased' : ''}" onclick="app.showDocument(${doc.id})">
                <span class="doc-category">${this.getCategoryName(doc.category)}</span>
                <h3 class="doc-title">${doc.title}</h3>
                <p class="doc-description">${doc.description}</p>
                <div class="doc-footer">
                    <div>
                        <span class="doc-price">${finalPrice} ₽</span>
                        ${discount ? `<span class="doc-old-price">${doc.price} ₽</span>` : ''}
                    </div>
                    <span class="doc-format">📄 ${doc.formats.join(' + ')}</span>
                </div>
                <div class="doc-bonus">${isPurchased ? '✅ Уже куплено' : '🎁 +1 генерация'}</div>
            </div>
        `}).join('');
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
                    <button class="btn btn-outline" onclick="app.resetSearch()">Сбросить</button>
                </div>
            `;
        }
    }
    
    resetSearch() {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = 'all';
        document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        document.querySelector('.category-chip[data-cat="all"]').classList.add('active');
        this.displayDocuments();
    }
    
    showDocument(id) {
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        const discount = currentUser.tariff === 'pro' ? TARIFFS.pro.discount : 0;
        const finalPrice = discount ? Math.round(doc.price * (1 - discount)) : doc.price;
        const isPurchased = currentUser.purchases.includes(doc.id);
        
        const modalContent = document.getElementById('docDetailContent');
        modalContent.innerHTML = `
            <div class="doc-detail">
                <span class="doc-detail-category">${this.getCategoryName(doc.category)}</span>
                <h2 class="doc-detail-title">${doc.title}</h2>
                <div class="doc-detail-price">
                    ${finalPrice} ₽
                    ${discount ? `<span class="doc-detail-old-price">${doc.price} ₽</span>` : ''}
                </div>
                
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
                
                <div class="doc-detail-bonus">
                    ${isPurchased 
                        ? '✅ Вы уже купили этот документ. Скачайте его в профиле.'
                        : '🎁 При покупке вы получите +1 бесплатную генерацию нейросети'
                    }
                </div>
                
                ${isPurchased && DEV_MODE ? `
                    <button class="btn btn-outline btn-block" onclick="app.downloadDevFile(${doc.id})" style="margin-top: 10px;">
                        📥 Скачать тестовый файл
                    </button>
                ` : ''}
                
                ${!isPurchased ? `
                    <button class="btn btn-primary btn-block" onclick="app.addToCart(${doc.id})">
                        🛒 Добавить в корзину
                    </button>
                ` : ''}
            </div>
        `;
        
        this.openModal('docModal');
    }
    
    // ===== КОРЗИНА =====
    
    addToCart(id) {
        const doc = documentsCatalog.find(d => d.id === id);
        if (!doc) return;
        
        const discount = currentUser.tariff === 'pro' ? TARIFFS.pro.discount : 0;
        const finalPrice = discount ? Math.round(doc.price * (1 - discount)) : doc.price;
        
        this.cart.push({
            id: doc.id,
            title: doc.title,
            price: finalPrice,
            originalPrice: doc.price
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
    
    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.cart.length;
        }
    }
    
    showCart() {
        const cartItems = document.getElementById('cartItems');
        const cartBonus = document.getElementById('cartBonus');
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
            if (cartBonus) cartBonus.innerHTML = '';
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
            
            if (cartBonus) {
                const bonus = this.calculateCartBonus();
                cartBonus.innerHTML = `
                    <h4>🎁 Бонус за эту покупку:</h4>
                    <p>+${bonus.generations} генераций нейросети</p>
                    ${bonus.checks ? `<p>+${bonus.checks} проверок документов</p>` : ''}
                    ${bonus.vip ? '<p>🔥 VIP статус на месяц</p>' : ''}
                `;
            }
        }
        
        this.openModal('cartModal');
    }
    
    calculateCartBonus() {
        const count = this.cart.length;
        const multiplier = currentUser.tariff === 'pro' ? TARIFFS.pro.bonusMultiplier : 1;
        
        const levels = Object.keys(BONUS_LEVELS).map(Number).sort((a, b) => a - b);
        let bonus = { generations: 0, checks: 0 };
        
        for (let level of levels) {
            if (count >= level) {
                bonus = {
                    generations: BONUS_LEVELS[level].generations * multiplier,
                    checks: BONUS_LEVELS[level].checks * multiplier,
                    vip: BONUS_LEVELS[level].vip || false
                };
            }
        }
        
        if (bonus.generations === 0) {
            bonus.generations = count;
        }
        
        return bonus;
    }
    
    // ===== БОНУСЫ =====
    
    updateBonusInfo() {
        const bonusSpan = document.getElementById('bonusGenerations');
        if (bonusSpan) {
            bonusSpan.textContent = currentUser.aiGenerationsLeft;
        }
        
        const totalPurchases = currentUser.purchases.length;
        
        const levels = Object.keys(BONUS_LEVELS).map(Number).sort((a, b) => a - b);
        let nextLevel = null;
        let needed = 0;
        
        for (let level of levels) {
            if (totalPurchases < level) {
                nextLevel = level;
                needed = level - totalPurchases;
                break;
            }
        }
        
        const nextBonusText = document.getElementById('nextBonusText');
        const progressFill = document.getElementById('progressFill');
        
        if (nextBonusText && progressFill) {
            if (nextLevel) {
                nextBonusText.textContent = 
                    `купите еще ${needed} документ${needed > 1 ? 'ов' : ''} → +${BONUS_LEVELS[nextLevel].generations} генераций`;
                
                const progress = (totalPurchases / nextLevel) * 100;
                progressFill.style.width = `${Math.min(progress, 100)}%`;
            } else {
                nextBonusText.textContent = '🔥 VIP уровень достигнут!';
                progressFill.style.width = '100%';
            }
        }
    }
    
    applyBonusAfterPurchase() {
        const bonus = this.calculateCartBonus();
        
        currentUser.aiGenerationsLeft += bonus.generations;
        currentUser.checksLeft += bonus.checks;
        
        this.cart.forEach(item => {
            if (!currentUser.purchases.includes(item.id)) {
                currentUser.purchases.push(item.id);
            }
        });
        
        if (bonus.vip) {
            currentUser.vipUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        }
        
        this.saveUserData();
        this.updateBonusInfo();
        this.updateAIInfo();
        
        const bonusMessage = document.getElementById('bonusGiftMessage');
        if (bonusMessage) {
            bonusMessage.innerHTML = `🎁 Вы получили +${bonus.generations} генераций нейросети!`;
        }
        
        this.cart = [];
        this.updateCartCount();
    }
    
    // ===== НЕЙРОСЕТЬ =====
    
    updateAIInfo() {
        const aiLeftSpan = document.getElementById('aiGenerationsLeft');
        const aiBadge = document.getElementById('aiBadge');
        const generateBtn = document.getElementById('generateAiBtn');
        
        if (aiLeftSpan) {
            aiLeftSpan.textContent = currentUser.aiGenerationsLeft;
        }
        
        if (aiBadge) {
            aiBadge.textContent = `${currentUser.aiGenerationsLeft} генераций`;
        }
        
        if (generateBtn) {
            if (currentUser.aiGenerationsLeft === 0) {
                generateBtn.disabled = true;
                const limitInfo = document.getElementById('aiLimitInfo');
                if (limitInfo) {
                    limitInfo.innerHTML = `
                        Нет доступных генераций. Купите документ, чтобы получить бонус!
                    `;
                }
            } else {
                generateBtn.disabled = false;
            }
        }
    }
    
    async generateWithAI() {
        if (currentUser.aiGenerationsLeft <= 0) {
            this.showToast('У вас нет доступных генераций. Купите документ!');
            return;
        }
        
        const prompt = document.getElementById('aiPrompt').value.trim();
        if (!prompt) {
            this.showToast('Опишите, какой документ вам нужен');
            return;
        }
        
        document.getElementById('aiResult').style.display = 'none';
        document.getElementById('generateAiBtn').disabled = true;
        document.getElementById('generateAiBtn').innerHTML = '⏳ Генерация...';
        
        try {
            const response = await fetch('/api/generate-doc', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: prompt,
                    type: document.getElementById('aiDocType').value,
                    style: document.getElementById('aiStyle').value
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                currentUser.aiGenerationsLeft--;
                this.saveUserData();
                this.updateAIInfo();
                
                document.getElementById('aiResultContent').textContent = data.document;
                document.getElementById('aiResult').style.display = 'block';
                this.showToast('Документ создан!');
            } else {
                throw new Error(data.error || 'Ошибка генерации');
            }
            
        } catch (error) {
            console.error('AI Error:', error);
            this.showToast('Ошибка генерации. Используем тестовый режим');
            
            document.getElementById('aiResultContent').textContent = this.getTestDocument(prompt);
            document.getElementById('aiResult').style.display = 'block';
            
        } finally {
            document.getElementById('generateAiBtn').disabled = false;
            document.getElementById('generateAiBtn').innerHTML = '🔮 Создать документ';
        }
    }
    
    getTestDocument(prompt) {
        return `ДОКУМЕНТ ПО ВАШЕМУ ЗАПРОСУ

Запрос: "${prompt}"

Договор составлен с учетом требований ГК РФ.

1. ПРЕДМЕТ ДОГОВОРА
... (тестовый документ) ...

(Для реальной генерации подключите API)`;
    }
    
    copyAIResult() {
        const text = document.getElementById('aiResultContent').textContent;
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Документ скопирован');
        }).catch(() => {
            this.showToast('Ошибка копирования');
        });
    }
    
    downloadAIResult() {
        const text = document.getElementById('aiResultContent').textContent;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `document_${Date.now()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Файл скачан');
    }
    
    // ===== ОПЛАТА =====
    
    showPayment() {
        if (this.cart.length === 0) {
            this.closeModal('cartModal');
            this.showToast('Корзина пуста');
            return;
        }
        
        const summary = document.getElementById('orderSummary');
        const payAmount = document.getElementById('payAmount');
        
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
            <div class="order-bonus">
                🎁 После оплаты вы получите бонусные генерации
            </div>
        `;
        
        if (payAmount) {
            payAmount.textContent = `${total} ₽`;
        }
        
        this.closeModal('cartModal');
        this.openModal('paymentModal');
    }
    
    processPayment() {
        const email = document.getElementById('paymentEmail').value.trim();
        
        if (!email || !email.includes('@')) {
            this.showToast('Введите корректный email');
            return;
        }
        
        if (!currentUser.isAuthenticated) {
            currentUser.email = email;
        }
        
        localStorage.setItem('user_email', email);
        
        if (DEV_MODE) {
            // В режиме разработчика — эмулируем успешную покупку
            this.applyBonusAfterPurchase();
            this.closeModal('paymentModal');
            this.showToast('✅ Тестовая покупка совершена! Документы доступны в профиле.');
            
            const bonusMessage = document.getElementById('bonusGiftMessage');
            if (bonusMessage) {
                bonusMessage.innerHTML = `🎁 Тестовая покупка! +${this.calculateCartBonus().generations} генераций`;
            }
            
            this.openModal('successModal');
            
            setTimeout(() => {
                this.closeModal('successModal');
            }, 3000);
            
            return;
        }
        
        // Реальная оплата через ЮMoney
        const total = this.cart.reduce((sum, item) => sum + item.price, 0);
        const orderId = Date.now();
        
        const yoomoneyUrl = `https://yoomoney.ru/quickpay/confirm.xml?` +
            `receiver=${YOOMONEY_CLIENT_ID}&` +
            `quickpay-form=shop&` +
            `paymentType=AC&` +
            `sum=${total}&` +
            `label=${orderId}&` +
            `successURL=${window.location.origin}/payment-success.html?email=${encodeURIComponent(email)}`;
        
        this.saveOrder(orderId, email, this.cart);
        this.applyBonusAfterPurchase();
        
        window.location.href = yoomoneyUrl;
    }
    
    saveOrder(orderId, email, items) {
        const orders = JSON.parse(localStorage.getItem('preep_orders') || '{}');
        orders[orderId] = {
            email: email,
            items: items,
            status: 'pending',
            date: new Date().toISOString()
        };
        localStorage.setItem('preep_orders', JSON.stringify(orders));
    }
    
    // ===== ТАРИФЫ =====
    
    upgradeToPro() {
        if (DEV_MODE) {
            currentUser.tariff = 'pro';
            currentUser.aiGenerationsLeft += 10;
            this.saveUserData();
            this.updateUserInterface();
            this.updateAIInfo();
            this.showToast('✅ Тестовый PRO-тариф активирован');
            return;
        }
        
        const orderId = `pro_${Date.now()}`;
        const yoomoneyUrl = `https://yoomoney.ru/quickpay/confirm.xml?` +
            `receiver=${YOOMONEY_CLIENT_ID}&` +
            `quickpay-form=shop&` +
            `paymentType=AC&` +
            `sum=499&` +
            `label=${orderId}&` +
            `successURL=${window.location.origin}/payment-success.html?pro=1`;
        
        const orders = JSON.parse(localStorage.getItem('preep_pro_orders') || '{}');
        orders[orderId] = {
            type: 'pro',
            status: 'pending',
            date: new Date().toISOString()
        };
        localStorage.setItem('preep_pro_orders', JSON.stringify(orders));
        
        window.location.href = yoomoneyUrl;
    }
    
    showProfile() {
        document.getElementById('userMenu')?.remove();
        this.showToast('👤 Функция профиля появится скоро');
    }
    
    showPurchases() {
        document.getElementById('userMenu')?.remove();
        
        if (currentUser.purchases.length === 0) {
            this.showToast('У вас пока нет покупок');
            return;
        }
        
        const purchases = currentUser.purchases.map(id => {
            const doc = documentsCatalog.find(d => d.id === id);
            return doc ? doc.title : 'Неизвестный документ';
        }).join('\n• ');
        
        if (DEV_MODE) {
            this.showToast(`📦 Ваши покупки (тестовые):\n• ${purchases}`);
        } else {
            this.showToast(`📦 Ваши покупки:\n• ${purchases}`);
        }
    }
    
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

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PreepDocs();
    window.app = app;
});
