//! Task 1
// Создайте массив из чисел arr.
// Напишите цикл for of, который выведет в консоль произведение
// всех элементов массива.Если в переменной  хранится массив [1 2, 3, 4]
// Вывод должен быть:
// 24
// т.к. 24 = 1 x 2 x 3 x 4

// let arr1 = [1, 2, 3, 4];
// let res = arr1.reduce((acc, rec) => acc * rec);

// console.log(res);

let arr2 = [1, 2, 3, 4];
let res = 1;

//! Task 2
// Создайте переменную num.Присвойте переменной числовое
// значение. Напишите цикл, который выведет в консоль сумму
// всех чисел от 1 до num включительно.
// Например, если в перемнной num хранится число 5
// Выводом будет:
// 15

// т.к. 15 = 1 + 2 + 3 + 4 + 5

// let num = +prompt("Введите число:");
// for (i = 0; i<=num; ++i) {
//     console.log(i);
// }
let num = 5;
let sum = 0;

//! Task 3
// Создате массив из чисел arr.
// С помощью цикла for ... of и оператора if, выведите в консоль
// элементы массива, значение которых больше 3, но меньше 10.
// Например, если в переменной  хранится значение: [1, 4, 2, 5, 8, 5, 0, -1, 7, 33]
// Вывод должен быть:

// 4, 5, 8, 7

let arr = [1, 4, 2, 5, 8, 5, 0, -1, 7, 33];
let res3 = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     res3.push(arr[i]);
//   }
// }
// console.log(res3);

for (let i in arr) {
  if (i > 3 && i < 10) {
    res3.push[i];
  }
}
console.log(res3);

// Примечание:
// Сделать со всеми видами циклов !!!
