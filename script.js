document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const quoteParagraph = document.getElementById('quoteParagraph');
    const copyBtn = document.getElementById('copyBtn');

    let quotes = [];
    let quoteId = 1;

    copyBtn.style.display = 'none';

    generateBtn.addEventListener('click', generateQuote);
    copyBtn.addEventListener('click', copyQuoteToClipboard);

    function generateQuote() {
        const newQuote = generateRandomQuote();
        quotes.push({ id: quoteId++, quote: newQuote });

        quoteParagraph.textContent = newQuote;

        copyBtn.style.display = 'block';

        updateTable();
    }

    function copyQuoteToClipboard() {
        const textarea = document.createElement('textarea');
        textarea.textContent = quoteParagraph.textContent;
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }

    function generateRandomQuote() {
        const sampleQuotes = [
            "Sprawy rodzinne",
            "Pogrzeb brata",
            "Pogrzeb siostry",
            "Pogrzeb babci",
            "Gorsze samopoczucie",
            "Choroba",
            "Z powodu różnych powodów",
            "Choroba psychiczna. Szkoła mnie wykańcza",
            "Zaspałem",
            "Incydent kałowy",
            "Silny ból głowy",
            "Gorączka i dreszcze",
            "Ból brzucha i problemy żołądkowe",
            "Zatrucie pokarmowe",
            "Alergie",
            "Migreny",
            "Awaria samochodu",
            "Spóźniony pociąg/autobus",
            "Utrudnienia drogowe",
            "Brak dostępnych środków transportu",
            "Zła pogoda uniemożliwiająca podróż",
            "Awaria domowa (zalanie, pęknięcie rury)",
            "Pożar",
            "Wypadek komunikacyjny",
            "Nagła potrzeba opieki nad członkiem rodziny",
            "Ważna uroczystość rodzinna",
            "Pilne spotkanie w pracy",
            "Potrzeba udzielenia pomocy sąsiadowi",
            "Kłopoty z opieką nad dzieckiem",
            "Nagłe wezwanie do urzędu",
            "Silny stres",
            "Brak snu",
            "Ból zęba",
            "Długi czas oczekiwania w kolejce",
            "Wezwanie na komisję wojskową",
            "Zaginięcie dokumentów lub kluczy",
            "Doświadczenie traumatycznego wydarzenia",
            "Złamanie kończyny",
            "Potrzeba załatwienia pilnych formalności",
            "Nagła wizyta lekarska",
            "Potrzeba odpoczynku i regeneracji",
            "Nagła potrzeba opieki nad zwierzęciem",
            "Uczestnictwo w wolontariacie lub akcji charytatywnej",
            "Dzień żałoby po stracie bliskiej osoby",
            "Rozwód",
            "Zaginięcie dziecka",
            "Badanie laboratoryjne (niechciana ciąża)",
            "Badanie laboratoryjne (test na ojcostwo)",
            "Obowiązek przybywania na izbie wytrzeźwień",
            "Wyjazd do Czech w celu usunięcia ciąży",
            "Pomoc przy aresztowaniu ojca",
            "Ratunek babci, ktora zjadła granulat dla królików",
            "Z powodu kontuzji dolnych części ciała",
            "Wyjazd na akcje ochotniczej straży pożarnej",
            "Jestem pod wpływem alkoholu (nie jestem alkoholikiem :D)",
            "Pies zjadł mi plecak",
            "Wizyta w szpitalu psychiatrycznym",
        ];

        const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
        return sampleQuotes[randomIndex];
    }
});
