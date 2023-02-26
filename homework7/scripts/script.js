"use strict";
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 
// (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const containerNumbers = document.createElement("div");
containerNumbers.classList.add("numbers");
for (let i = 50; i <=100; i+=10){
    const div = document.createElement("div");
    div.innerText = i;
    containerNumbers.append(div);
}
document.body.append(containerNumbers);

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и 
// добавляет его в div с классом stringscontainer. Строки взять произвольные.
const sc = document.createElement("div");
sc.classList.add("stringscontainer");
const arrayWords = ["cat", "dog", "squarell", "monkey" ];
arrayWords.forEach((s) =>{
    const par = document.createElement("p");
    par.innerText = s;
    sc.append(par)

});
document.body.append(sc);

// Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, 
// lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. 
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом userscontainer.
const userList = [
    {firstname: 'Piter',
    lastname: 'Pen',
    age: 32},
    {firsname: 'Maya',
    lastname: 'Cole',
    age: 12},
    {firsname: 'John',
    lastname: 'Reed',
    age: 20}
];
const userContainer = document.createElement("div");
userContainer.classList.add("usercontainer");
userList.forEach( (user)=>{
    const userP = document.createElement("p");
    userP.innerText = `Имя: ${user.firstname} ${user.lastname}, возраст: ${user.age}`;
    userContainer.append(userP);
});
document.body.append(userContainer);






