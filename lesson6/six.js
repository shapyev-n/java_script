//! Task 1
// Создайте переменную str и присвойте ей строковое значение.
// Ваша программа должна каждую четную по последовательности букву
// перезаписать верхним регистром. Результат нужно вывести в консоль.
// Подсказка: нужно использовать метод split().

let str = "javascript";
let letters = str.split("");
for (let i = 0; i < letters.length; i++) {
  if (i % 2 === 1) {
    letters[i] = letters[i].toUpperCase();
  }
}
let result = letters.join("");
console.log(result);

//! Task 2
// Eсть переменная
// которая принимает строку в качестве аргумента и возвращает
// количество гласных, которые содержатся в строке.
// Гласными являются [а], [о], [и], [ы], [у] и [э], [й], [е], [я], [ю], [ё]
// К примеру:
// 'достопримечательность'// --> 7
// 'субстанционализирующийся' // --> 11

let str1 = "субстанционализирующийся";
let sum = 0;
for (let i of str1) {
  if (
    i == "а" ||
    i == "е" ||
    i == "ё" ||
    i == "и" ||
    i == "о" ||
    i == "у" ||
    i == "э" ||
    i == "ю" ||
    i == "я" ||
    i == "ы"
  ) {
    sum++;
  }
}
console.log(sum);

// function countVowels(str) {
//   str = str.toLowerCase();
//   const vowels = ["а", "о", "и", "ы", "у", "э", "й", "е", "я", "ю", "ё"];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("достопримечательность"));
// console.log(countVowels("субстанционализирующийся"));

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

// let str4 = "Hello, world!";
// let res = "";
// for (let i = 0; i < str4.length; i++) {
//   if (str4[i] !== "!" && str4[i] !== "," && str4[i] !== " ") {
//     res += str4[i];
//   }
// }
// console.log(res);

//! Task 5
//    let arrNums = [12, 21, 27, 31, 45, 50 ];
// С помощью цикла for и оператора if выведите в console элементы
// массива, которые больше 20-ти, но меньше 30-ти.

//! Task 5
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

