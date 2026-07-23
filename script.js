document.addEventListener('DOMContentLoaded', () => {

    // 1. Повний словник перекладів для ВСЬОГО сайту (з виправленою українською)
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
            prod1Desc: "Компактний котел для приватних будинків до 150 м².",
            prod2Desc: "Оптимальне рішення для будинків та офісів до 300 м².",
            prod3Desc: "Потужний котел для виробничих приміщень та складів.",
            orderBtn: "Замовити",
            rights: "Всі права захищені.",
            errArea: "Будь ласка, введіть коректну площу!",
            // Клієнти (Виправлено супровідний текст)
            clientsTitle: "Наші клієнти та відгуки",
            clientsSub: "Нам довіряють власники приватних будинків, підприємства та промислові об'єкти по всій Україні.",
            client1Name: "Олександр",
            client1Role: "Власник приватного будинку (200 м²)",
            client1Text: "«Встановили котел UKRPELLETS Standard минулої осені. Вся система працює бездоганно, витрати на опалення суттєво зменшилися.»",
            client2Name: "Виробничий комплекс «Захід»",
            client2Role: "Складський комплекс",
            client2Text: "«Дякуємо за якісне обладнання UKRPELLETS Pro для нашого складського приміщення. Надійний сервіс та оперативна доставка.»",
            client3Name: "Олена Михайлівна",
            client3Role: "Заміський котедж",
            client3Text: "«Автоматика працює відмінно, завантаження пелет потрібно робити всього раз на кілька днів. Дуже задоволені вибором!»",
            // Контакти
            contactTitle: "Зв'яжіться з нами",
            contactSub: "Залиште заявку або зателефонуйте нам для отримання консультації.",
            contactInfoTitle: "Наші контакти:",
            contactPhone: "Телефон:",
            contactEmail: "Email:",
            contactAddr: "Адреса:",
            contactCity: "м. Київ, Україна",
            contactHours: "Графік роботи:",
            contactDays: "Пн-Пт: 09:00 — 18:00",
            phName: "Ваше ім'я",
            phPhone: "Ваш телефон",
            phMsg: "Ваше повідомлення...",
            btnSend: "Надіслати"
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
            prod1Desc: "Compact boiler for private houses up to 150 m².",
            prod2Desc: "Optimal solution for houses and offices up to 300 m².",
            prod3Desc: "Powerful boiler for industrial premises and warehouses.",
            orderBtn: "Order",
            rights: "All rights reserved.",
            errArea: "Please enter a valid area!",
            // Clients
            clientsTitle: "Our Clients & Reviews",
            clientsSub: "Trusted by homeowners, businesses, and industrial facilities across Ukraine.",
            client1Name: "Alexander",
            client1Role: "Private House Owner (200 m²)",
            client1Text: "“Installed the UKRPELLETS Standard boiler last autumn. The system works flawlessly, heating costs decreased significantly.”",
            client2Name: "Production Complex 'Zakhid'",
            client2Role: "Warehouse Complex",
            client2Text: "“Thank you for the high-quality UKRPELLETS Pro equipment for our warehouse. Reliable service and prompt delivery.”",
            client3Name: "Elena",
            client3Role: "Country Cottage Owner",
            client3Text: "“The automation works perfectly, pellet loading is needed only once every few days. Very satisfied with the choice!”",
            // Contacts
            contactTitle: "Contact Us",
            contactSub: "Leave a request or call us for consultation.",
            contactInfoTitle: "Our Contacts:",
            contactPhone: "Phone:",
            contactEmail: "Email:",
            contactAddr: "Address:",
            contactCity: "Kyiv, Ukraine",
            contactHours: "Working Hours:",
            contactDays: "Mon-Fri: 09:00 — 18:00",
            phName: "Your name",
            phPhone: "Your phone",
            phMsg: "Your message...",
            btnSend: "Send"
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
            prod1Desc: "Kompakter Kessel für Einfamilienhäuser bis 150 m².",
            prod2Desc: "Optimale Lösung für Häuser und Bürogebäude bis 300 m².",
            prod3Desc: "Leistungsstarker Kessel für Industrie- und Lagerhallen.",
            orderBtn: "Bestellen",
            rights: "Alle Rechte vorbehalten.",
            errArea: "Bitte geben Sie eine gültige Fläche ein!",
            // Clients
            clientsTitle: "Unsere Kunden & Bewertungen",
            clientsSub: "Vertraut von Hausbesitzern und Industrieunternehmen in der gesamten Ukraine.",
            client1Name: "Alexander",
            client1Role: "Einfamilienhausbesitzer (200 m²)",
            client1Text: "„Wir haben im letzten Herbst den Kessel UKRPELLETS Standard installiert. Das System läuft einwandfrei, die Heizkosten sind deutlich gesunken.“",
            client2Name: "Produktionskomplex 'Sakhid'",
            client2Role: "Lagerkomplex",
            client2Text: "„Vielen Dank für die hochwertige Ausrüstung UKRPELLETS Pro für unser Lager. Zuverlässiger Service und schnelle Lieferung.“",
            client3Name: "Elena",
            client3Role: "Landhausbesitzerin",
            client3Text: "„Die Automatik funktioniert hervorragend, Pellets müssen nur alle paar Tage nachgefüllt werden. Sehr zufrieden!“",
            // Contacts
            contactTitle: "Kontaktieren Sie uns",
            contactSub: "Hinterlassen Sie eine Anfrage oder rufen Sie uns für eine Beratung an.",
            contactInfoTitle: "Unsere Kontakte:",
            contactPhone: "Telefon:",
            contactEmail: "E-Mail:",
            contactAddr: "Adresse:",
            contactCity: "Kiew, Ukraine",
            contactHours: "Öffnungszeiten:",
            contactDays: "Mo-Fr: 09:00 — 18:00",
            phName: "Ihr Name",
            phPhone: "Ihre Telefonnummer",
            phMsg: "Ihre Nachricht...",
            btnSend: "Senden"
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
            prod1Desc: "Kompaktowy kocioł do domów jednorodzinnych do 150 m².",
            prod2Desc: "Optymalne rozwiązanie dla domów i biur do 300 m².",
            prod3Desc: "Mocny kocioł do pomieszczeń przemysłowych i magazynów.",
            orderBtn: "Zamów",
            rights: "Wszelkie prawa zastrzeżone.",
            errArea: "Proszę wpisać poprawną powierzchnię!",
            // Clients
            clientsTitle: "Nasi klienci i opinie",
            clientsSub: "Zaufały nam dziesiątki właścicieli domów oraz firm w całej Ukrainie.",
            client1Name: "Aleksander",
            client1Role: "Właściciel domu (200 m²)",
            client1Text: "„Zainstalowaliśmy kocioł UKRPELLETS Standardeszłą jesienią. Cały system działa bez zarzutu, koszty ogrzewania znacznie spadły.”",
            client2Name: "Kompleks Produkcyjny 'Zachód'",
            client2Role: "Kompleks magazynowy",
            client2Text: "„Dziękujemy za wysokiej jakości sprzęt UKRPELLETS Pro do naszego magazynu. Niezawodny serwis i szybka dostawa.”",
            client3Name: "Helena",
            client3Role: "Dom podmiejski",
            client3Text: "„Automatyka działa świetnie, zasypywanie pelletu wystarczy robić raz na kilka dni. Bardzo udany zakup!”",
            // Contacts
            contactTitle: "Skontaktuj się z nami",
            contactSub: "Zostaw zgłoszenie lub zadzwoń do nas, aby uzyskać konsultację.",
            contactInfoTitle: "Nasze kontakty:",
            contactPhone: "Telefon:",
            contactEmail: "E-mail:",
            contactAddr: "Adres:",
            contactCity: "Kijów, Ukraina",
            contactHours: "Godziny pracy:",
            contactDays: "Pn-Pt: 09:00 — 18:00",
            phName: "Twoje imię",
            phPhone: "Twój telefon",
            phMsg: "Twoja wiadomość...",
            btnSend: "Wyślij"
        }
    };

    // 2. Логіка перемикання мов
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function switchLanguage(lang) {
        if (!translations[lang]) return;

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Переклад текстів
        document.querySelectorAll('[data-i18n]').forEach(elem => {
            const key = elem.dataset.i18n;
            if (translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });

        // Переклад placeholder'ів у полях вводу
        document.querySelectorAll('[data-i18n-ph]').forEach(elem => {
            const key = elem.dataset.i18nPh;
            if (translations[lang][key]) {
                elem.placeholder = translations[lang][key];
            }
        });

        localStorage.setItem('selectedLang', lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    const savedLang = localStorage.getItem('selectedLang') || 'uk';
    switchLanguage(savedLang);

    // 3. Калькулятор
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

            const calculatedPower = Math.ceil((area / 10) * insulation);
            resultPower.textContent = calculatedPower;
            resultBox.style.display = 'block';
        });
    }
});
