//1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('1)', 'hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('2)', 'hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());

//3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('3)', 'hello world'.toLowerCase(), 'lorem ipsum'.toLowerCase(), 'javascript is cool'.toLowerCase());

//4 - Є "брудна" стрінга
const str4 = ' dirty string   ';
// Почистити її від зайвих пробілів.
console.log('4)', str4.trim());

//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
const str5 = 'Ревуть воли як ясла повні';
//['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str) => str.split(' ');
const arr5 = stringToArray(str5);
console.log('5)', arr5);

//6 - є масив чисел
const numberArray6 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('6)', numberArray6.map(item => item.toString()));

//7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
(() => {
    const nums7 = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

    const sortNumsToMax = (numArr) => [...numArr].sort((a, b) => a - b);
    const sortNumsToMin = (numArr) => [...numArr].sort((a, b) => b - a);


    const sortNums = (numArr, direction) => direction === 'descending'
        ? sortNumsToMin(numArr)
        : sortNumsToMax(numArr);

    console.log('7-1)', sortNums(nums7, 'descending'));
    console.log('7-2)', sortNums(nums7, 'ascending'));
})();

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//8 -- відсортувати його за спаданням за monthDuration
(() => {
    const sortObjectsArray = (array, objKey, direction) => {
        return direction === 'descending'
            ? array.sort((obj1, obj2) => obj2[objKey] - obj1[objKey])
            : array.sort((obj1, obj2) => obj1[objKey] - obj2[objKey])
    }

    console.log('8)', sortObjectsArray(coursesAndDurationArray, 'monthDuration', 'descending'));
})();

//9 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
(() => {
    const filteredObjectArray = coursesAndDurationArray.filter(object => object.monthDuration > 5);
    console.log('9)', filteredObjectArray);
})();


//10 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// 10-1) Ій варіант
(() => {
    console.log('10-1)', coursesAndDurationArray.map((course, index) => {
        return {
            id: index + 1, ...course
        }
    }))

// 10-2) ІІй варіант
    class CourseWithId {
        constructor(title, monthDuration) {
            this.id = +((Math.random()) * 100).toFixed();
            this.title = title;
            this.monthDuration = monthDuration;
        }
    }

    console.log('10-2)', coursesAndDurationArray.map(course => {
        return new CourseWithId(course.title, course.monthDuration);
    }));
})();

// =========================
//11 описати колоду карт (від 6 до туза без джокерів)
const cards = {
    cardSuits: ['spade', 'diamond', 'heart', 'clubs'],
    values: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'],
    colors: ['red', 'black']
};

let cardsPack = [];
for (const value of cards.values) {
    for (const cardSuit of cards.cardSuits) {
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            cardsPack.push({color: 'red', cardSuit: cardSuit, value: value});
        } else {
            cardsPack.push({color: 'black', cardSuit: cardSuit, value: value});
        }
    }
}

console.log('11)', cardsPack);

//12 - знайти піковий туз
console.log('12)', cardsPack.find(card => card.cardSuit === 'spade' && card.value === 'ace'));

//13 - всі шістки
console.log('13)', cardsPack.filter(card => card.value === '6'));

//14 - всі червоні карти
console.log('14)', cardsPack.filter(card => card.color === 'red'));

//15 - всі буби
console.log('15)', cardsPack.filter(card => card.cardSuit === 'diamond'));

//16 - всі трефи від 9 та більше
console.log('16)', cardsPack.filter(card => card.cardSuit === 'clubs' && card.value >= '9' || card.cardSuit === 'clubs' && card.value >= 9));


// =========================

//17 Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт


const cardsPackSorted = cardsPack.reduce((acc, current) => {
        switch (current.cardSuit) {
            case 'diamond':
                acc.diamonds.push(current.value);
                break;
            case 'heart':
                acc.hearts.push(current.value);
                break;
            case 'spade':
                acc.spades.push(current.value);
                break;
            case 'clubs':
                acc.clubs.push(current.value);
                break;
        }
        return acc;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }
)

console.log('17)', cardsPackSorted);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//19 --написати пошук всіх об'єктів, в який в modules є sass
console.log('19)', coursesArray.filter(course => course.modules.find(element => element === 'sass')));

//20 --написати пошук всіх об'єктів, в який в modules є docker
console.log('19)', coursesArray.filter(course => course.modules.find(element => element === 'docker')));