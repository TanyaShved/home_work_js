// Задача 1

// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// //Write code under this line

// const mood = 'happy';
// const timeOfWork = true;

// user.hobby = 'skydiving';
// user.premium = false;
// user.mood = mood;
// user['full time'] = timeOfWork;
// // console.log(user);

// const keys = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//   console.log(key);
//   console.log(user[key]);

//   message += `${key}: ${user[key]}\n`;
// }

// console.log(message);
// /*
// 'age : 20
// hobby : skydiving
// name : Mango
// premium : false
// mood : happy
// "full time" : true
// ' */

// Задача 2

// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   console.log(obj);
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Задача 3

// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line

//   let bestEmployee = '';

//   const entries = Object.entries(employees);
//   //   console.log(entries);
//   //   //   let bestResult = values[0];

//   for (const [name, score] of entries) {
//     // console.log(name);
//     // console.log(score);

//     const values = Object.values(employees);
//     const maxScore = Math.max(...values);
//     console.log(maxScore);

//     if (maxScore === score) {
//       bestEmployee = name;
//     }
//   }
//   return bestEmployee;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// Задача 4

// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   'use strict';
//   // Write code under this line
//   let total = 0;

//   const values = Object.values(employees);

//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// Задача 5

// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   'use strict';
//   // Write code under this line
//   const propValues = [];
//   //   console.log(prop);

//   console.table(array);

//   for (const arr of array) {
//     console.log(arr);
//     console.log(arr[prop]);

//     let value = arr[prop];
//     console.log(value);

//     if (prop in arr) {
//       propValues.push(value);
//     }
//   }
//   return propValues;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// // // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity'));
// // // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
// //  []

// Задача 6

// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// // calculateTotalPrice(products, 'Радар'));
// // 9080

// // calculateTotalPrice(products, 'Сканер')); // 10200

// // calculateTotalPrice(products, 'Захват')); // 2400

// // calculateTotalPrice(products, 'Дроид')); // 2800

// function calculateTotalPrice(array, prop) {
//   'use strict';
//   // Write code under this line

//   let totalPrice = 0;

//   console.table(array);

//   for (const { name, price, quantity } of array) {
//     // console.log(arr.price);
//     //   console.log(arr.quantity);
//     // console.log(name === prop);

//     if (prop === name) {
//       console.log('Наша карта');
//       totalPrice += price * quantity;
//     }
//   }
//   return totalPrice;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080

// console.log(calculateTotalPrice(products, 'Сканер'));
// // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400

// console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800
