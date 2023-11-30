// --створити масив з:
//     - з 5 числових значень
let numbersArray = [1, 3, 10, 15, 23];
console.log(numbersArray);

// - з 5 стічкових значень
let stringsArray = ['Hello', 'my', 'name', 'is', 'Viktor'];
console.log(stringsArray);

// - з 5 значень стрічкового, числового та булевого типу
let mixArray = ['string', 'any', 100, 199.089, true];
console.log(mixArray);

// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray[i] = (i + 2 * i) ** 3;
}

console.log(emptyArray);

/*
- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення

*/

let testArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let iterator = 0;
while (iterator < testArray.length) {
    console.log(1, testArray[iterator]);
    iterator++;
}

for (const number of testArray) {
    console.log(2, number);
}

iterator = 1;
while (iterator < testArray.length) {
    console.log(3, testArray[iterator], iterator);
    iterator += 2;
}

for (let i = 0; i<testArray.length; i+=2){
    console.log(4, testArray[i], i);
}

iterator = 0;
while (iterator < testArray.length) {
    if (testArray[iterator] % 2 === 0) {
        console.log(5, testArray[iterator]);
    }

    iterator++;
}

/*
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) - ЛЄНЬКИ!*/

for (let i = 0; i<testArray.length; i++){
    if (testArray[i] % 2 === 0) {
        console.log(6, testArray[i]);
    }
}

for (let i = 0; i<testArray.length; i++){
    if (testArray[i] % 3 === 0) {
        testArray[i] = "okten";
    }
}
console.log(7, testArray);

for (let i = testArray.length-1; i>=0; i--){
    console.log(8, testArray[i]);
}

for (const number of testArray) {
    
}

// for (let i = 0; i < testArray.length; i++) {
//     const testArrayElement = testArray[i];
//
// }