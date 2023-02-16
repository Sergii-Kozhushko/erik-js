"use strict";
// 1. Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
// const var1 = prompt("Enter number");
// console.log(var1-var1/10);

// 2. Написать программу, которая получает два числа и выводит наименьшее
// const var2 = prompt("Enter number 1");
// const var3 = prompt("Enter number 2");
// console.log((var2 < var3) ? var2 : var3);

// 3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
// function compareTo100(n){
//     if (n < 100)  return "Число меньше 100";
//     if (n > 100)  return "Число больше 100";
//     if (n === 100)  return "Число равно 100";
// }
// const var4 = prompt("Enter number");
// console.log(compareTo100(+var4));

// 4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.
// const userName = prompt("Enter your name");
// const age = prompt("Enter your age");

// console.log(((+age > 18) ? "Hello" : "Hi") + ", " + userName);

// 5. Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).
// Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.

const array = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN, [1,2], undefined, 2n, null, function(){ return 2}];
function getType(n){
    //if (isNaN(n)) return 
    if (Number.isNaN(n)) return "NaN";
    if ((typeof(n) === "string") || (typeof(n) === "number") || typeof(n) === "object" 
    || typeof(n) === "bigint" || typeof(n) ==="function" || typeof(n) === "undefined") return typeof(n);
    return "Something else";
}

let sum = 0;
for (let i = 0; i < array.length; i++){
    console.log(array[i] + " : " + getType(array[i]));
    if (getType(array[i]) === "number")
        sum += array[i];
}
console.log("Sum of number elements of array is: " + sum);


