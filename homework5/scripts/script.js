"use strict";

// 1. Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20

// for (let i = 0; i <= 10; i+=2){
//     console.log(i);
// }
// for (let i = 20; i <=55; i++){
//     console.log(i);
// }



// 2. Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат
// Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers);
const numberssquared = [];
for (let i = 0; i < numbers.length; i++){
    numberssquared.push(numbers[i]**2);
}
console.log(numberssquared);
let lastelem = numberssquared[numberssquared.length-1];
// или
lastelem = numberssquared.slice(-1);
console.log(lastelem);


// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’
 const user = {
 firstname: 'Ivan', 
 lastname: 'Ivanov', 
 age: 20, 
 salary: 500,
 toString() { 
    return `Users's name is ${this.firstname} ${this.lastname}. He is ${this.age} years old.`}
 }
 console.log(user.toString());
