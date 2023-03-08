// !---------------------------task01--------------------------- //

// const message = prompt("Яка офіційна назва JavaScript?");
// if(message === "ECMAScript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }
// console.log(message);

// !---------------------------task02----------------------------//

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

const time = prompt("Введіть число");

const hours = Math.floor(Number(time) / 60);
const updateHours = String(hours).padStart(2, "0");

const minutes = time % 60;
const updateMinutes = String(minutes).padStart(2, "0");

console.log(`${updateHours}:${updateMinutes}`);



