// !---------------------------task01--------------------------- //

//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити: "Не знаєте? ECMAScript!"

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

// const time = prompt("Введіть число");

// const hours = Math.floor(Number(time) / 60);
// const updateHours = String(hours).padStart(2, "0");

// const minutes = time % 60;
// const updateMinutes = String(minutes).padStart(2, "0");

// console.log(`${updateHours}:${updateMinutes}`);

// !-----------------------------task03-----------------------------//

//Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
//значення "1", то у змінну result запишемо "зима", якщо має значення
//"2" - "весна" і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt("Введіть число від 1 до 4");

// let result = "";

// switch (num) {
//     case "1":
//         result = "Зима";
//         break;

//     case "2":
//         result = "Весна";
//         break;
    
//         case "3":
//         result = "Літо";
//         break;
    
//         case "4":
//         result = "Осінь";
//         break;
    
//     default:
//     result = "Введіть число від 1 до 4";
// }

// console.log(result);

// !-------------------------------task04-------------------------------//

//Напишіть цикл, який виводить в консоль
//числа від max до min по зменшеню.
//Виведіть в консоль суму усіх парних чисел.

// const min = 0;
// const max = 10;

// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//     total += i;

//     }
// }

// console.log(total);

// !---------------------------------task05--------------------------------//

function makeArray(firstArray, secondArray, maxLength) {
   // Change code below this line
const newArray = firstArray.concat(secondArray);
     newArray.slice(0, maxLength);
 
return newArray;