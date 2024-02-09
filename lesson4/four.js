//! ARRAY
// let array1 = [1, 2, 3, 4, 5];
// let result1 = array1.pop();
// console.log(result1);
//? pop - удаляет 1 element с конца

// let arr = [1, 2, 3, 4, 5];
// arr.push("6", 7, "8");
// console.log(arr);
// console.log(arr.push(10));
//? push - добовляет element в конец

// let cats = ["Bob", "Willy", "Mini"];
// let res = cats.shift();
// console.log(cats);
//? shift - удаляет 1 element с начало

// let cats = ["Bob", "Willy", "Mini"];
// cats.unshift("John", "Bill");
// console.log(cats);
//? unshift - добовляет element в начало

// let arr = ["Bob", "Willy", "Mini"];
// let res = arr.slice(2);
// console.log(res);

//? slice(start, end) - вырезает array,
//? sting, не изменяет array, string

// let arr = ["Bob", "Willy", "Mini", "Bill", "John"];
// arr.splice(3);
// console.log(arr);

//? splice(индекс, кол-во элементов для
//? удаления, элементы которые нужно вставить)

// let arr = ["Bob", "Willy"];

// arr.reverse();

// console.log(arr);

//? split(separator => "") - method string

// let str = "hello world";
// let arr = str.split(" ");
// console.log(arr);

//? join(separator => "") - method array

// let arr = ["hello", "world", "kjjk", "kl", "jbk"];

// let str = arr.join("");

// console.log(str);

//! Простые методы массивов. Классная работа

//! Задание №1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.

let array1 = ["dlrow", "olleH"];
let result1 = array1.join(" ").split("").reverse().join("").split(" ");
console.log(result1);

//! Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

let array2 = ["а", "б", "в"];
array2.push(4, 3, 5, 5);
console.log(array2);

//! Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".

let array3 = ["Apple", "Orange", "Pinapple", "Cherry"];
let result3 = array3.shift();
array3.splice(2, 0, result3);
console.log(array3);

//! Задание №4
// Дан массив [8, -7, -21, 44, 3]. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().

let array4 = [8, -7, -21, 44, 3];
array4.sort((a, b) => a - b);
console.log(array4);
// console.log(array4[4]);

// !

//! 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat)

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

//! 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. (Используйте reverse)

let arr2 = [1, 2, 3];
arr2.reverse();
console.log(arr2);

//! 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. (методы push, unshift)

let arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

//! 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//! 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. (методы shift pop)

let arr5 = ["js", "css", "jq"];
let res5 = arr5.shift(0);
console.log(res5);

//! 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

let arr6 = ["js", "css", "jq"];
let res6 = arr6.pop();
console.log(res6);

//! 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].  (метод splice)

let arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 2);
console.log(arr7);

//! 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let arr8 = [1, 2, 3, 4, 5];
let res8 = arr8.splice(1, 3);
console.log(res8);

//! 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr9 = [1, 2, 3, 4, 5];
arr9.splice(3, 0, "a", "b", "c");
console.log(arr9);

//! 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 0, "a", "b");
arr10.splice(6, 0, "c");
arr10.splice(8, 0, "e");
console.log(arr10);

//! 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. (метод slice)

let arr11 = [1, 2, 3, 4, 5];
let res11 = arr11.slice(0, 3);
console.log(res11);

//! 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

let arr12 = [1, 2, 3, 4, 5];
let res12 = arr12.slice(3);
console.log(res12);
