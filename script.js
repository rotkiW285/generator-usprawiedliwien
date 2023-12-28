document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const quoteParagraph = document.getElementById('quoteParagraph');
    const quoteTableBody = document.getElementById('quoteTableBody');

    let quotes = [];
    let quoteId = 1;

    generateBtn.addEventListener('click', generateQuote);

    function generateQuote() {
        const newQuote = generateRandomQuote();
        quotes.push({ id: quoteId++, quote: newQuote });

        // Update paragraph
        quoteParagraph.textContent = newQuote;

        // Update table
        updateTable();
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
            "Incydent kałowy"
        ];

        const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
        return sampleQuotes[randomIndex];
    }
});
