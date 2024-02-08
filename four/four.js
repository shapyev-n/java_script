//! ARRAY
// let arr = [1, 2, 3, 4, 5];
// let res = arr.pop();
// console.log(res);
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

// let arr = ["dlrow", "olleH"];
// let str = arr.join(" ").split("").reverse().join("");
// console.log(str);

//! Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.

// let arr = ["а", "б", "в"];
// arr.push(4, 3, 5, 5);
// console.log(arr);

//! Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".

// let arr = ["Apple", "Orange", "Pinapple", "Cherry"];
// let str = arr.shift();
// arr.splice(2, 0, str);
// console.log(arr);

//! Задание №4
// Дан массив [8, -7, -21, 44, 3]. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().

// let arr = [8, -7, -21, 44, 3];
// arr.sort((a, b) => a - b);
// console.log(arr);
// console.log(arr[4]);

// !

//! 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat)

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// console.log(c);

//! 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. (Используйте reverse)

// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

//! 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. (методы push, unshift)

// let arr = [1, 2, 3];
// arr.push(4, 5, 6)
// console.log(arr);

//! 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//! 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. (методы shift pop)

// let array = ["js", "css", "jq"];
// let result = array.shift(0);
// console.log(result);

//! 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let array = ["js", "css", "jq"];
// let result = array.pop();
// console.log(result);

//! 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].  (метод splice)

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);

//! 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let array = [1, 2, 3, 4, 5];
// let result = array.splice(1, 3);
// console.log(result);

//! 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);

//! 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// console.log(arr);

//! 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. (метод slice)

let arr = [1, 2, 3, 4, 5];
let res = arr.slice(0, 3);
console.log(res);

//! 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5];
// let res = arr.slice(3);
// console.log(res);
