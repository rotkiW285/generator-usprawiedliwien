<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$sampleQuotes = [
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
    "Alergie - katar sienny",
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
    "Uczestnictwo w wolontariacie",
    "Dzień żałoby po stracie bliskiej osoby",
    "Rozwód",
    "Zaginięcie dziecka",
    "Badanie laboratoryjne",
    "Badanie laboratoryjne",
    "Obowiązek przybywania na izbie wytrzeźwień",
    "Wyjazd do Czech w celu usunięcia ciąży",
    "Pomoc przy aresztowaniu ojca",
    "Ratunek babci, ktora zjadła granulat dla królików",
    "Z powodu kontuzji dolnych części ciała",
    "Wyjazd na akcje ochotniczej straży pożarnej",
    "Jestem pod wpływem alkoholu",
    "Pies zjadł mi plecak",
    "Wizyta w szpitalu psychiatrycznym",
    "Reakcja alergiczna na jedzenie",
    "Z powodu problemów z sercem",
    "Skręcenie kostki",
    "Wypadek na rowerze",
    "Wizyta u lekarza specjalisty",
    "Badania kontrolne",
    "Zabieg medyczny",
    "Okres rekonwalescencji po chorobie",
    "Rehabilitacja",
    "Pogorszenie stanu zdrowia przewlekłego",
    "Udział w wydarzeniu kulturalnym",
    "Konieczność uczestnictwa w wydarzeniu religijnym",
    "Jestem na rozprawie w sądzie przeciwko VULCAN Sp. z o.o.",
    "Nie wiedziałem o zmianach w planie, bo nie zapłaciłem",
    "Gołąp dokonał defekacji na moją głowę"
];

$randomIndex = array_rand($sampleQuotes);
$randomQuote = $sampleQuotes[$randomIndex];

$response = [
    $randomQuote
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);