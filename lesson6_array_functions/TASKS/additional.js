//1 - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
(() => {
    const cutString = (str, n) => {
        let arr = [];

        for (let i = 0; i < str.length; i += n) {
            arr.push(str.slice(i, i + n));
        }

        return arr.join(',').split(' ');
    }

    console.log(cutString('насолода', 3));

    let arr1 = [];
    arr1[10] = 115;
    console.log(arr1.length); // 11
    console.log(arr1[8]); // undefined
    console.log(arr1[10]); // 115
    console.log(arr1[11]); // undefined
})();

//2 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
(() => {
    let str2 = 'Каждый охотник желает знать';

    const deleteCharacters = (str, charactersNumber) => str.slice(0, charactersNumber - 1);

    console.log(2, deleteCharacters(str2, 7)); // Каждый
})();


//3 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
(() => {
    let str3 = "HTML JavaScript PHP";

    const insert_dash = (str) => str.split(' ').join('-');

    console.log(3, insert_dash(str3)); // 'HTML-JAVASCRIPT-PHP'
})();

//4 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
(() => {
    const setFirstLetterToLowerCase = (str) => (str
            .trimStart().slice(0, 1).toUpperCase()
            .concat(str.trimStart().slice(1))
    );

    const string = '   hello world!';

    console.log(4, setFirstLetterToLowerCase(string));
})();

(() => {
    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'
//5 - Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const lettersArray = letters.split('').concat(letters.toUpperCase().split(''));
    console.log(5, lettersArray);

    const nameNormalize = (name) => {
        let normalizedName = '';
        for (let i = 0; i < name.length; i++) {
            if (lettersArray.includes(name[i])) {
                normalizedName += name[i];
            } else if (!lettersArray.includes(name[i]) && name[i - 1].includes(name[i])) {
                normalizedName += ' ';
            }
        }
        return normalizedName;
    }
    console.log(nameNormalize(n1)); //Harry Potter
})();

(() => {
    const errorFunction = () => {
        try {
            console.log(o);
        } catch (e) {
            return e
        }
    }

    console.log(typeof errorFunction(), errorFunction());
})();


//6 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
(generateRandomNumbersArrayInRange = (numbersCount = 10, randomMin = 0, randomMax = 100) => {
    const generateRandomNumberInRange = (randomMin = 0, randomMax = 100) => {
        let randomNumber = Math.floor(Math.random() * randomMax);

        return randomNumber > randomMin ? randomNumber : randomNumber + randomMin;
    }
    const generateRandomNumbersArray = (numbersCount = 10, randomMin = 0, randomMax = 100) => {
        let randomNumbersArray = [];

        try {
            for (let i = 0; i < Number(numbersCount); i++) {
                randomNumbersArray.push(generateRandomNumberInRange(Number(randomMin), Number(randomMax)));
            }
        } catch (e) {
            console.log(e);
        }

        return randomNumbersArray;
    }

    return generateRandomNumbersArray();
})();

console.log(6, generateRandomNumbersArrayInRange(50, 0, 100));

//7 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
(() => {
    const randomNumbersArray = generateRandomNumbersArrayInRange(100, 22, 150);
    console.log(7, randomNumbersArray);

    const sortArray = (arr) => arr.sort((a, b) => a - b);

    console.log(7, sortArray(randomNumbersArray));

})();

//8 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
(() => {
    const randomNumbersArray = generateRandomNumbersArrayInRange(100, 0, 150);
    console.log(8, randomNumbersArray);

    console.log(randomNumbersArray.filter(n => n % 2 === 0).filter(n => n !== 0));
})();

//9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
(() => {
    const capitalize = (str) => (str
            .split(' ')
            .map(word => word.trim())
            .map(word => word[0].toUpperCase().concat(word.slice(1)))
            .join(' ')
    );

    console.log(capitalize('хіба ревуть воли як ясла повні'))
})();

//10 - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :

const validateEmail = (email) => {
    const validMsg = 'Valid Email';
    const invalidMsg = 'Invalid Email';
    const allowedSymbolsArr = 'abcdefghijklmnopqrstuvwxyz0123456789!#$%&\'*+-/=?^_`{|}~."\"'.split('');

    if (email.indexOf('@') === -1) {
        return invalidMsg;
    }

    const beforeAtSign = email.slice(0, email.indexOf('@')).toLowerCase();
    console.log(10, beforeAtSign);

    if (!beforeAtSign) {
        return invalidMsg;
    }

    if (!beforeAtSign.split(' ').map(char => allowedSymbolsArr.includes(char))) {
        return 'wrong'
    }


}

console.log(validateEmail(' wrong@Email'))
// -данні до знака равлика(@),
// -наявність равлика,
// -крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// -функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масив
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

//11 - відсортувати його в спадаючому порядку за кількістю елементів в полі modules

//12 - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb12 = "о", str12 = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

//13 - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str13 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


//14 -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

//15 -знайти наібльшу книжку.

//16 - знайти книжку/ки з найбільшою кількістю жанрів

//17 - знайти книжку/ки з найдовшою назвою

//18 - знайти книжку/ки які писали 2 автори

//19 - знайти книжку/ки які писав 1 автор

//20 - вісортувати книжки по кількості сторінок по зростанню
