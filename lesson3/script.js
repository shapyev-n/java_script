//! Задание 2
// Создайте переменную lang и присвойте ей значение
// en или ru или de или kg используя тернарный оператор
// выведите сообщение в зависимости от значения lang
// lang = 'en' выведет 'This is english'
// lang = 'ru' выведет 'Это русский'
// lang = 'de' выведет 'Das ist Deutsch'
// lang = 'kg' выведет 'Бул кыргыз тили'

// let lang = "en";
// if (lang === "en") {
//   console.log("This is english");
// } else if (lang === "ru") {
//   console.log("Это русский");
// } else if (lang === "de") {
//   console.log("Das ist Deutsch");
// } else if (lang === "kg") {
//   console.log("Бул кыргыз тили");
// }

//! Задание 3
let price = 600; // присваиваем значение цены
let discount = 15; // присваиваем значение скидки

// let result = price - (price * discount) / 100;
// console.log(result);

//! Задание 5
//Напишите программу, которая проверяет, является ли введенное число четным или нечетным, используя оператор «%». Выведите «Число ${число} четное», если число делится на 2. Иначе выведите «Число ${число} нечетное», если число возвращает остаток при делении на 2

// let num = +prompt("чило");
// if (num % 2 === 0) {
//   console.log(`«Число ${num} четное»`);
// } else {
//   console.log(`«Число ${num} нечетное»`);
// }

//! Задание 6
//Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

// let login = prompt("Логин:");
// let password = "";
// if (login === "Admin") {
//   password = prompt("Пароль:");
// } else if (login === null) {
//   alert("Отменено!");
// }
// if (password === "Я главный") {
//   alert("«Здравствуйте!»");
// } else {
//   alert("«Неверный пароль»");
// }


//! Задание 1
// Создайте переменные firstNum, secondNum, thirdNum и присвойте им числовые значения.
// Выведите в консоль число с наибольшим значением.
// Например: если в firstNum будет хранится число 5, в secondNum 3,
// а в thirdNum 16, то вывод в консоль должен быть:
// Максимальное число 16
// Учтите возможность равенства всех трех чисел.

// let num1 = 5;
// let num2 = 3;
// let num3 = 16;
// if (num1 < num2 && num1 > num3) {
//   console.log(`Максимальное число ${num1}`);
// } else if (num2 < num3 && num2 > num1) {
//   console.log(`Максимальное число ${num2}`);
// } else if (num3 < num1 && num3 > num2) {
//   console.log(`Максимальное число ${num3}`);
// }

// let str="helo"
// str.toUpperCase()

// let name = "John";
// name[0] === name[0].toUpperCase()
//   ? console.log(name[0].toUpperCase() + name.slice(1))
//   : console.log(name[0].toLowerCase() + name.slice(1));

let name = prompt();
name[0] === name[0].toUpperCase()
  ? console.log(name[0].toLowerCase() + name.slice(1))
  : console.log(name[0].toUpperCase() + name.slice(1));

//   methods = [
//     "quote",
//     "substring",
//     "toLowerCase",
//     "toUpperCase",
//     "charAt",
//     "charCodeAt",
//     "indexOf",
//     "lastIndexOf",
//     "startsWith",
//     "endsWith",
//     "trim",
//     "trimLeft",
//     "trimRight",
//     "toLocaleLowerCase",
//     "toLocaleUpperCase",
//     "localeCompare",
//     "match",
//     "search",
//     "replace",
//     "split",
//     "substr",
//     "concat",
//     "slice",
//   ]