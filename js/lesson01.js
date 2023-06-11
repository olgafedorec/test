//-------------------CONFIRM-----------------------//
// const message = "Чи бажаєте продовжити підписку?";
// const shouldRenew = confirm(message);

// console.log(shouldRenew);

//-------------------PROMPT------------------------//
// let quantity = prompt("Введіть кількість товарів");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

//---------------------INT-------------------------//
// let elementWidth = "50.55px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth: ", elementWidth);

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight: ", elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);
// console.log(Number(salary.toFixed(2)));

// ---------------------NaN----------------------//
// let quantity = "30";
// let value = "Цю строку неможливо перетворити на число";

// console.log(Number(quantity));
// console.log(Number(value));

// //--------------------Math----------------------//
// console.log(Math);

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(2 ** 5);

// Напиши скрипт, який просить користувача ввести число і ступень,
// возводить число в цю ступінь і виводе результат в консоль//

// // 1. Попросити ввести число і зберегти в змінну
// let base = prompt("Введіть число");
// base = Number(base);
// console.log(base);

// // 2. Попросити ввести ступінь і зберегти її в змінну
// let power = prompt("Введіть ступень");
// console.log(power);

// // 3. Возвести введені дані в ступінь і вивести результат в консоль
// const result = base ** power;
// console.log(result);

//----------------------------Math.random-----------------------//
// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

//----------------------------RandomColors-----------------------//
// const colors = ["tomato", "teal", "orange", "deeppink", "skyblue"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// document.body.style.backgroundColor = color;

//-----------------------------Strings-----------------------------//
// const message = "Ця строка має 25 символів";
// console.log(message.length);

//Напиши скрипт, який виведе рядок в форматі:
//"Гость х у заселяється в z номер q", підставляючи замість
// х у z q значення змінних//

// const firstName = "Chelsy";
// const lastName = "Emerald";
// const fullName = firstName + " " + lastName;

// const room = 716;
// const type = "VIP";
// const welcomeMsg =
//   "Гость" +
//   " " +
//   firstName +
//   " " +
//   "заселяється в" +
//   " " +
//   type +
//   " " +
//   "номер" +
//   " " +
//   room;
//---------------------шаблонні рядки--------------------------//
// const welcomeMsg = `Гость ${firstName} ${lastName} заселяється в ${type} номер ${room}`;
// console.log(welcomeMsg);

//---------------------приведення до регистру------------------//
// const quantity = 15;
// const orderMsg = `Ви замовляєте ${quantity} холодильників.`;
// let brand = prompt("Введіть бренд");
// let brand = "SamSUng";
// // const normalizedBrand = brand.toLowerCase();
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

//------------------------Пошук в рядку-------------------------//
// const blacklistWord1 = "спам";
// const blacklistWord2 = "розпродаж";
// const string1 = "Привіт, я принц Абдул, це не спам, пропоную тобі мільон";
// const string2 = "Найбільший РОЗПРОДАЖ тижня, не зволікай!";
// const string3 = "Рекламна компанія #fatlivesmatter";

// console.log(string1.includes(blacklistWord1));
// console.log(string1.includes(blacklistWord2));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistWord1));
// console.log(normalizedString2.includes(blacklistWord2));

//------------------------Логічні оператори-----------------//
// console.log(5 && 7 && 0 && "mango");
// console.log(5 || 0 || 8 || 2);
// console.log(!5);

//напиши скрипт, який перевіряє вміщення числа//
// const x1 = 10;
// const x2 = 30;
// const number = 35;
// console.log(`число ${number} потрапляє у відрізок від ${x1}?`, number < x1);
// console.log(`число ${number} потрапляє у відрізок після ${x2}?`, number > x2);

// // const res1 = number > x1 && number < x2;
// // console.log(`число ${number} потрапляє у відрізок від ${x1} до ${x2}?`, res1);

// const res2 = number < x1 || number > x2;
// console.log(
//   `число ${number} потрапляє у відрізок від ${x1} або після ${x2}?`,
//   res2
// );

//напиши скрипт який перевіряє можливість відкрити чат із користувачем.
//для цього користувач має бути:
//другом
//онлайн
//без режиму "не турбувати"

// const isFriend = true;
// const isOnline = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Чи можливо відкрити чат?", canOpenChat);

//---------------------розгалуження------------------------//
// const balance = 1000;
// let message;
// if (balance > 0) {
//   message = "Позитивний баланс";
// } else {
//   message = "Негативний баланс";
// }

// console.log(message);
//------------------------

// const salary = 2000;
// if (salary < 500) {
//   console.log("level 1");
// } else if (salary > 500 && salary <= 1500) {
//   console.log("level 2");
// } else if (salary > 1500 && salary < 3000) {
//   console.log("level 3");
// } else {
//   console.log("level 4");
// }

//-----------------тернарний оператор------------------//
// const balance = 1000;
// let message;

// if(balance >=0) {
//   message = "Позитивний баланс";
// } else {
//   message = "Негативний баланс";
// }

// const message = balance >= 0 ? "Позитивний баланс" : "Негативний баланс";
// console.log(message);
