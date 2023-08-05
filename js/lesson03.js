// -----------------------Масиви-----------------------------

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += "-1";
// }

// for (const friend of friends) {
//   console.log(friend);
// }
// console.table(friends);

// ----------------------------------------------------------

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }

// for (const value of cart) {
//   total += value;
// }
// console.log("total: ", total);

// -----------------------------------------------------------
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   if (number % 2 === 0) {
//     console.log("Парне!");
//     total += number;
//   }
// }
// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log("Парне!");
//     total += number;
//   }
// }
// console.log("Total: ", total);

// --------------------------------------------------------------
// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Користувач ${loginToFind} не знайдений`;
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
// }

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
// }
// console.log(message);
// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдений`
//   : `Користувач ${loginToFind} не знайдений`;
// console.log(message);
// ----------------------------------------------------------------

const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
let biggestNumber = numbers[0];
for (const number of numbers) {
  console.log(number);

  if (number > biggestNumber) {
    biggestNumber = number;
  }
}
console.log("biggestNumber: ", biggestNumber);
