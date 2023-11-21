/*
 - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
     Вивести кожну змінну за допомогою: console.log
*/
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
console.log(str1, str2, str3, str4);

let num1 = 1;
let num2 = 1;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
console.log(num1, num2, num3, num4, num5, num6, num7);

let bool1 = true;
let bool2 = false;
console.log(bool1, bool2);

/*
- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/

const myFirstName = 'Viktor';
const myMiddleName = 'Ihorovych';
const myLastName = 'Zvarych';
const person = myLastName + ' ' + myFirstName + ' ' + myMiddleName;
console.log(person);

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

/*
Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let promptFirstName = prompt('What`s Your First Name?');
let promptMiddleName = prompt('What`s Your Middle Name?');
let promptAge = parseInt(prompt('What`s Your Age?'));
console.log(promptFirstName, promptMiddleName, parseInt(promptAge));

alert(`
Your First Name: ${promptFirstName} ✌
Your Last Name: ${promptMiddleName} ✍
Your Age: ${promptAge}
${promptAge >= 0 && promptAge < 150 ? 'You`re Human' : 'What are You? 👀'}
`)


