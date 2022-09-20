// Средняя скорость //

function sum(a, b, c) {
  return (a + b + c) / 3;
}
sum(5, 24, 20);

// Фаренгейт в Цельсий//
function Far(cTemp) {
  return cTemp * 1.8 + 32;
}
Far(3);

// Цельсий в Фаренгейт//
function Cel(fTemp) {
  return (fTemp - 32) * (5 / 9);
}
Cel(3);

// Вопрос и ответ (if else) //

let answer = prompt("Авторизуйтесь с помощью Логина");
if (answer == "Nika") {
  alert("Вы прошли Авторизацию!");
} else {
  alert("Вы не прошли авторизацию!");
}
