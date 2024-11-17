// Tablica obiektów
var dane = [
    { imie: "John", wiek: 30, miasto: "New York" },
    { imie: "Anna", wiek: 25, miasto: "London" },
    { imie: "Mike", wiek: 35, miasto: "Berlin" }
];

// Funkcja obsługująca kliknięcie w przycisk
function wyswietlDane() {
    dane.forEach(obj => {
        // Wyświetlamy dane każdej osoby w jednej linii
        console.log(`Imię: ${obj.imie}, Wiek: ${obj.wiek}, Miasto: ${obj.miasto}`);
    });
}

function wyczyscKonsole() {
        console.clear()
}
