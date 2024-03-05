//------------Завдання 1---------------//
//Спосіб 1
// Масив довільних чисел
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++)
// {
//     if(arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

//Спосіб 2
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// arr.forEach(num => {
//     if (num > 3 && num < 10) {
//         console.log(num);
//     }
// });





//------------Завдання 2---------------//
//Спосіб 1
// Перевірка на наявність елемента зі значенням 4
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++)
// {
//     if(arr[i] === 4) {
//         console.log('Наявний!');
//         break;
//     }
// }


//Спосіб 2
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// if (arr.includes(4)) {
//     console.log('Наявний!');
// }



//Спосіб 3
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// if (arr.some(num => num === 4)) {
//     console.log('Наявний!');
// }





//------------Завдання 3---------------//
// Середнє арифметичне елементів масиву
// let mass = [42, 2, 33, 11, 12, 10, 0];
// let sum = 0;
// for(let i = 0; i < mass.length; i++) {
//     sum += mass[i];
// }
// let avg = sum / mass.length;
// console.log(avg);


// let mass = [42, 2, 33, 11, 12, 10, 0];
// let sum = mass.reduce((a, b) => a + b, 0);
// let avg = sum / mass.length;
// console.log(avg);


// let mass = [42, 2, 33, 11, 12, 10, 0];
// let avg = mass.reduce((a, b) => a + b, 0) / mass.length;
// console.log(`Середнє арифметичне: ${avg}`);





//------------Завдання 4---------------//
// Спосіб 1: За допомогою if else
// let strings = ["parrot", "bull", "bear", "monkey"];
// let totalLength1 = 0;
// for(let i = 0; i < strings.length; i++) {
//     if (typeof strings[i] === 'string'){
//         totalLength1 += strings[i].length;
//     } else {
//         continue;
//     }
// }
// console.log("Сумарна кількість символів (if else):", totalLength1);


// Спосіб 2
// let strings = ["parrot", "bull", "bear", "monkey"];
// let totalLength = strings.reduce((total, str) => total + str.length, 0);
// console.log("Сумарна кількість символів:", totalLength);





//------------Завдання 5---------------//
//Спосіб-1
// Фільтрація масиву, залишаючи лише стрічки
// let mixed = ["parrot", 140,"bull",true, 0, "bear", 47, "monkey"];
// let onlyStrings = [];
// for(let i = 0; i < mixed.length; i++) {
//     if(typeof mixed[i] === 'string') {
//         onlyStrings.push(mixed[i]);
//     }
// }
// console.log(onlyStrings);

//Спосіб-2
// Фільтрація масиву, залишаючи лише стрічки
// let mixed = ["parrot", 140,"bull",true, 0, "bear", 47, "monkey"];
// let onlyStrings = mixed.filter(item => typeof item === 'string' ? true : false);
// console.log("Тільки стрічки:", onlyStrings);


//Спосіб-3
// Фільтрація масиву, залишаючи лише стрічки
// let mixed = ["parrot", 140,"bull",true, 0, "bear", 47, "monkey"];
// console.log("Фільтр стрічок:", mixed.filter(function(item){
//     if (typeof item === 'string'){
//         return true;
//     } else {
//         return false;
//     }
// }));
