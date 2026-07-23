document.addEventListener('DOMContentLoaded', () => {

    // 1. СЛОВАРЬ ПЕРЕВОДОВ (UA, EN, DE, PL)
    const translations = {
        uk: {
            home: "Головна",
            calc: "Калькулятор",
            prod: "Продукція",
            clients: "Клієнти",
            contacts: "Контакти",
            heroTitle: "Ефективне та екологічне опалення для вашого дому",
            heroSub: "Пелетні котли високої якості з автоматичною подачею палива та високим ККД.",
            btnCalc: "Розрахувати потужність",
            calcTitle: "Калькулятор потужності котла",
            calcSub: "Розрахуйте необхідну потужність для опалення вашого приміщення",
            labelArea: "Площа приміщення (м²):",
            labelIns: "Рівень утеплення:",
            insPoor: "Слабке утеплення",
            insStd: "Стандартне утеплення",
            insGood: "Хороше утеплення (енергоефективне)",
            btnDoCalc: "Розрахувати",
            resLabel: "Рекомендована потужність котла:",
            prodTitle: "Наша продукція",
            orderBtn: "Замовити",
            rights: "Всі права захищені.",
            errArea: "Будь ласка, введіть коректну площу!"
        },
        en: {
            home: "Home",
            calc: "Calculator",
            prod: "Products",
            clients: "Clients",
            contacts: "Contacts",
            heroTitle: "Efficient and Eco-Friendly Heating for Your Home",
            heroSub: "High-quality pellet boilers with automatic fuel feeding and high efficiency.",
            btnCalc: "Calculate Power",
            calcTitle: "Boiler Power Calculator",
            calcSub: "Calculate the required power for heating your premises",
            labelArea: "Room Area (m²):",
            labelIns: "Insulation Level:",
            insPoor: "Poor insulation",
            insStd: "Standard insulation",
            insGood: "Good insulation (energy efficient)",
            btnDoCalc: "Calculate",
            resLabel: "Recommended Boiler Power:",
            prodTitle: "Our Products",
            orderBtn: "Order",
            rights: "All rights reserved.",
            errArea: "Please enter a valid area!"
        },
        de: {
            home: "Startseite",
            calc: "Rechner",
            prod: "Produkte",
            clients: "Kunden",
            contacts: "Kontakte",
            heroTitle: "Effiziente und umweltfreundliche Heizung für Ihr Zuhause",
            heroSub: "Hochwertige Pelletkessel mit automatischer Brennstoffzufuhr und hohem Wirkungsgrad.",
            btnCalc: "Leistung berechnen",
            calcTitle: "Kesselleistungsrechner",
            calcSub: "Berechnen Sie die benötigte Leistung für Ihre Räumlichkeiten",
            labelArea: "Raumfläche (m²):",
            labelIns: "Dämmung:",
            insPoor: "Schlechte Dämmung",
            insStd: "Standarddämmung",
            insGood: "Gute Dämmung (energieeffizient)",
            btnDoCalc: "Berechnen",
            resLabel: "Empfohlene Kesselleistung:",
            prodTitle: "Unsere Produkte",
            orderBtn: "Bestellen",
            rights: "Alle Rechte vorbehalten.",
            errArea: "Bitte geben Sie eine gültige Fläche ein!"
        },
        pl: {
            home: "Strona Główna",
            calc: "Kalkulator",
            prod: "Produkty",
            clients: "Klienci",
            contacts: "Kontakt",
            heroTitle: "Efektywne i ekologiczne ogrzewanie dla Twojego domu",
            heroSub: "Wysokiej jakości kotły na pellet z automatycznym podawaniem paliwa i wysoką sprawnością.",
            btnCalc: "Oblicz moc",
            calcTitle: "Kalkulator mocy kotła",
            calcSub: "Oblicz wymaganą moc do ogrzania Twojego pomieszczenia",
            labelArea: "Powierzchnia (m²):",
            labelIns: "Poziom ocieplenia:",
            insPoor: "Słabe ocieplenie",
            insStd: "Standardowe ocieplenie",
            insGood: "Dobre ocieplenie (energooszczędne)",
            btnDoCalc: "Oblicz",
            resLabel: "Zalecana moc kotła:",
            prodTitle: "Nasze produkty",
            orderBtn: "Zamów",
            rights: "Wszelkie prawa zastrzeżone.",
            errArea: "Proszę wpisać poprawną powierzchnię!"
        }
    };

    // 2. ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function switchLanguage(lang) {
        if (!translations[lang]) return;

        // Переключаем активную кнопку
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Обновляем все элементы с data-i18n
        document.querySelectorAll('[data-i18n]').forEach(elem => {
            const key = elem.dataset.i18n;
            if (translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });

        // Сохраняем выбор в локальное хранилище
        localStorage.setItem('selectedLang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    // Загрузка сохраненного языка или UA по умолчанию
    const savedLang = localStorage.getItem('selectedLang') || 'uk';
    switchLanguage(savedLang);


    // 3. ЛОГИКА КАЛЬКУЛЯТОРА
    const calcBtn = document.getElementById('calc-btn');
    const areaInput = document.getElementById('area');
    const insulationSelect = document.getElementById('insulation');
    const resultBox = document.getElementById('calc-result');
    const resultPower = document.getElementById('result-power');

    if (calcBtn) {
        calcBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const area = parseFloat(areaInput.value);
            const insulation = parseFloat(insulationSelect.value);

            if (!area || area <= 0) {
                const currentLang = localStorage.getItem('selectedLang') || 'uk';
                alert(translations[currentLang].errArea);
                return;
            }

            // Формула расчёта мощности: (Площадь / 10) * коэффициент утепления
            const calculatedPower = Math.ceil((area / 10) * insulation);

            resultPower.textContent = calculatedPower;
            resultBox.style.display = 'block';
        });
    }
});
