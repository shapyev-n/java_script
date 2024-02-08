let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = prompt("Введите значение ' + ' - ' * ' / ' % '");
if (c == "+") {
  console.log(a + b);
}
if (c == "-") {
  console.log(a - b);
}
if (c == "*") {
  console.log(a * b);
}
if (c == "/") {
  console.log(a / b);
}
if (c == "%") {
  console.log(a % b);
}
//? ----------------------------------------------------------------

// function myFunction() {
//   let element = document.getElementById("myCalculator");
//   if (element.style.display === "none") {
//     element.style.display = "block";
//   } else {
//     element.style.display = "none";
//   }
// }
