// // TYPY DANYCH
// //1. Number (typ liczbowy)
// let a = 1;
// let b = -1;
// let c = 0;
// let d = 2.13;
//
// console.log(1 / 0);
// console.log(-1 / 0);
//
// console.log(a + d);
// console.log(a - a);
// console.log(a * c);
// console.log(a / b);

// //2. String (typ tekstowy)
// let name = "Michał";
// let city = "Szczecinie";
// let greeting = `Hello ${name}`;
// let sentence = `Doba ma ${12 + 12} godziny`;
// let information = `Michał mieszka w ${city}`;
//
// console.log(greeting);
// console.log(sentence);
// console.log(information);
//
// //4. Null (oznacza pustą lub nieznaną wartość)
// let address = null;
// console.log(address);

// //5. Undefined
// let name;
// console.log(name);

// //6. Object
// let person = new Object();
// person.name = "Michał";
// person.age = 30;
//  let person2 = {
//      name: "Michał",
//      age: 30
//  };
//  console.log(person);
//  console.log(person2);

// //7. Symbol
//  let id = Symbol("id");
//  id = "87-nd";
//  console.log(id);


// // OPERATORY
// // 1. Modulo
// let a = 10;
// let b = 2;
// console.log(a % b);
//
// let c = 10;
// let d = 3;
// console.log(c % d);

// // 2. Operator Inkrementacji
// let a = 10;
// a++;
// console.log(a);

// // 3. Operator Dekrementacji
// let a = 10;
// a--;
// console.log(a);

// // 4. Operator Plus
// let hello = "Dzień"
// let hello2 = "dobry"
// console.log(hello + " " + hello2);


// // PORÓWNYWANIE ZMIENNYCH
// let a = 1;
// let b = 0;
// let c = 1;
//
// console.log(a > b);
// console.log(a == b);
// console.log(a != b);
// console.log(a == c);
// console.log(b > c);
// console.log(b >= c);

// // Operator porównania
// console.log(1 == 1);
// console.log("czesc" == "czesc");
//
// console.log(1 === "1");
// console.log("czesc" === "czesc");


// // INSTRUKCJE WARUNKOWE
// let age = prompt("Ile masz lat?");
//
// if(age >=18) {
//     console.log("Pamiętaj, by alkohol spożywać z rozsądkiem.");
// } else {
// //     console.log("Przykro nam, nie możemy jej wyświetlić.");
// }
//
// // ! tu wrócić z Krisem !
let age = prompt("Ile masz lat?");

if(age < 18) {
    console.log("Niestety nie możesz pić alkoholu w Polsce i w USA.");
} else if(age < 21) {
    console.log("Możesz pić alkohol w Polsce a w USA jeszcze nie.");
} else(age >= 21) {
    console.log("Możesz legalnie pić alkohol w Polsce i w USA.");
}


// // PĘTLE while i for
// let password;
// while (password != '1234') {
//     password = prompt("Jakie jest hasło ?");
// }
// console.log("Prawidłowe hasło!");

// for (let i=1; i<11; i++) {
//     console.log(i);
// }


// // INSTRUKCJA BREAK I CONTINUE
// let i = 1;
// while (i < 11) {
// console.log (i);
// i++;
// }

// let i = 1;
// while (i < 11) {
//     console.log (i);
//     if (i == 5) break;
//     i++;
// }
//
// let i =0;
// while (i < 10) {
//     i++;
//     if (i % 2 == 0) continue;
//
//     console.log(i);
// }


// // FUNKCJE
// function hello() {
//     console.log("Hello!");
// }
// hello();
// hello();
// hello();

// function sum (firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }
// let result = sum (2,3);
// console.log (result);

// // Funkcja strzałkowa (arrow function)
// let sum = (firstNumber, secondNumber) =>
//     console.log(firstNumber + secondNumber);
// sum (1,3);
//
// let sum = (firstNumber, secondNumber) => {
//     console.log("Dodajemy dwie liczby.");
//     console.log(firstNumber + secondNumber);
// }
// sum (1,3);
// // Square function funkcja przyjmująca tylko 1 argument i podnosi daną liczbę do kwadratu
// let square = a => console.log(a * a);
// square(4);


// KOLEKCJE DANYCH
// Tablice
// let names = ["Mariusz", "Dominik"];
// console.log(names [0]);
// console.log(names [1]);

// // Mapa
// let products = new Map();
// products.set(1, "Marchewka");
// products.set(2, "Mleko");
// products.set(3, "Wegański ser");
//
// console.log(products.get(1));
// console.log(products.get(2));
// console.log(products.get(3));

// let products = new Map();
// products.set(1, "Marchewka");
// products.set(2, "Mleko");
// products.set(3, "Wegański ser");
// products.set(3, "Wołowina");
//
// console.log(products.get(1));
// console.log(products.get(2));
// console.log(products.get(3));

// let products = new Map();
// products.set(1, "Marchewka");
// products.set(2, "Mleko");
// products.set(3, "Wegański ser");
// products.set(3, "Wołowina");
//
// products.delete(3);
//
// console.log(products.get(1));
// console.log(products.get(2));
// console.log(products.get(3));

// let products = new Map();
// products.set(1, "Marchewka");
// products.set(2, "Mleko");
// products.set(3, "Wegański ser");
// products.set("3", "Wołowina");
//
// console.log(products.get(1));
// console.log(products.get(2));
// console.log(products.get(3));
// console.log(products.get("3"));

// Set
// let names = new Set();
// names.add ("Dominik");
// names.add ("Mariusz");
// names.add ("Błażej");
//
// for (let name of names) {
//     console.log(name);
// }

// let names = new Set();
// names.add ("Dominik");
// names.add ("Mariusz");
// names.add ("Błażej");
//
// names.delete("Mariusz");
//
// for (let name of names) {
//     console.log(name);
// }
// console.log(names.has("Mariusz"));