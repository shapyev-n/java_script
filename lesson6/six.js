//! Task 1
// Создайте переменную str и присвойте ей строковое значение.
// Ваша программа должна каждую четную по последовательности букву
// перезаписать верхним регистром. Результат нужно вывести в консоль.
// Подсказка: нужно использовать метод split().

//? let str = "javascript";
// let arr1 = str.split("").join("");
// for (let i in arr1) {
//   if (i % 2 != 0) {
//     console.log(arr1[i].toUpperCase() + arr1.slice(1));
// }
// }
//! Task 2
// Eсть переменная
// которая принимает строку в качестве аргумента и возвращает
// количество гласных, которые содержатся в строке.
// Гласными являются [а], [о], [и], [ы], [у] и [э], [й], [е], [я], [ю], [ё]
// К примеру:
// 'достопримечательность'// --> 7
// 'субстанционализирующийся' // --> 11

//? let str1 = "субстанционализирующийся";
// let str1 = 'достопримечательность'
// let res1 = str1.toLocaleUpperCase();
// let act = ["а", "о", "и", "ы", "у", "э", "й", "е", "я", "ю", "ё"];

//! Task 3
// Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for(let i=0; i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// ! Task 4
// Дана строка: 'Hello, world!', необходимо вывести в консоль
//каждый символ по-отдельности(игнорировать спец. и пробельные
//  символы(то есть, ' ', '!', ',' выводить не нужно))

//? let str4 = "Hello, world!";
// for (let i = 0; i <= length; i++) {
//     if (str4[i] == "!" && str4[i] == "," && str4[i] == " ") {
//     }
//     console.log(str4[i]);
// }

//! Task 5
//    let arrNums = [12, 21, 27, 31, 45, 50 ];
// С помощью цикла for и оператора if выведите в console элементы
// массива, которые больше 20-ти, но меньше 30-ти.

// Task 5
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

//! Task 6
// Создайте переменную arr и присвойте массив со строками.
// Напишите код, который переписывает первые буквы строк
// массива верхним регистром. Вы должны вывести новый массив в
// переменной newArr в console.log()

// Пример ввода:
// let arr = ["programming", "code", "javascript", "react"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let res = arr[i][0].toUpperCase() + arr[i].slice(1);
//   newArr.push(res);
// }
// console.log(newArr);
//! Task 7
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс
