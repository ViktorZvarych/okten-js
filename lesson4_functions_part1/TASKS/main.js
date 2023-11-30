//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateRectangleArea(sideA, sideB) {
    return sideA * sideB;
}

console.log(1, calculateRectangleArea(10, 15));

//2 - створити функцію яка обчислює та повертає площу кола з радіусом r

function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

console.log(2, calculateCircleArea(10));

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Sбіч = 2πRH, Sцил = 2πRH + 2πR2 = 2πR(H + R)
function calculateCylinderArea(radius, height) {
    return 2 * Math.PI * radius * (height + radius);
}

console.log(3, calculateCylinderArea(10, 15));

//4 - створити функцію яка приймає масив та виводить кожен його елемент
function logArrayItem(array) {
    for (let item of array) {
        console.log(4, item);
    }
}

logArrayItem([1, 2, 3]);

//5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraphWithText(text) {
    return `<p>${text}</p>`;
}

console.log(5, createParagraphWithText('some text'));
document.write(createParagraphWithText('some more text'));

//6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    const listItems = `<li>${text}</li><li>${text}</li><li>${text}</li>`
    return `<ul>${listItems}</ul>`;
}

console.log(6, createList('some text'));
document.write(createList('some text'));

//7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createAnotherList(liNumber, text) {
    const listItem = `<li>${text}</li>`;
    let listItems = '';

    for (let i = 0; i < liNumber; i++) {
        listItems += listItem;
    }
    return `<ul>${listItems}</ul>`;
}

console.log(7, (createAnotherList(5, 'text')))
document.write(createAnotherList(5, 'text'))

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListForPrimitivesArray(array) {
    let listItems = '';

    for (let item of array) {
        listItems += `<li>${item}</li>`;
    }

    return `<ul>${listItems}</ul>`;
}

console.log(8, createListForPrimitivesArray([true, 11, false, 'any']));
document.write(createListForPrimitivesArray([true, 11, false, 'any']));

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let testUsersArray = [
    {
        id: 1,
        name: 'petro',
        age: 5,
    },
    {
        id: 2,
        name: 'alen',
        age: 50,
    },
    {
        id: 3,
        name: 'yoda',
        age: 505,
    },
]

function showUsersDetails(array) {
    let listItems = '';

    for (const user of array) {
        let listItem = `<li>id: ${user.id}, name: ${user.name}, age: ${user.age}</li>`;

        listItems += listItem;
    }

    return `<ul>${listItems}</ul>`;
}

console.log(9, showUsersDetails(testUsersArray));
document.write(showUsersDetails(testUsersArray));

//10 - створити функцію яка повертає найменьше число з масиву
let numbersArray = [11, -1, -189.09, 1999, 1999.3, 35];

function getMinNumber(array) {
    let minNumber = array[0];

    for (number of array) {
        if (minNumber > number) {
            minNumber = number;
        }
    }

    return minNumber;
}

console.log(10, getMinNumber(numbersArray));

//11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;

    for (number of arr) {
        sum += number;
    }

    return sum;
}

console.log(11, sum(numbersArray));

//12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let newArr = [...arr]; //поверхнева (shallow) копія
    // let newArr = JSON.parse(JSON.stringify(arr)); // глибока (deep) копія
    let item1 = newArr[index1];

    newArr[index1] = newArr[index2];
    newArr[index2] = item1;

    // let item1 = newArr[index1];
    // let item2 = newArr[index2]; // Local variable item2 is redundant
    //
    // newArr[index1] = item2;
    // newArr[index2] = item1;

    return newArr
}

console.log(12, swap(numbersArray, 0, 1));

//13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let sumCurrency;

    for (item of currencyValues) {
        if(item?.currency === exchangeCurrency) {
            sumCurrency = sumUAH / item.value
        }
    }

    return sumCurrency;
}

console.log(13, exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));