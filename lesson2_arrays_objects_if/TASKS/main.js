// ----------- Масиви та об'єкти: -----------

/*-1) Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let colorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray', 'white']
console.log(1, colorsArray);


/*-2) Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let book1 = {
    title: 'Eloquent JavaScript 3rd edition (2018)',
    pageCount: 472,
    genre: 'Thriller'
};

let book2 = {
    title: 'JavaScript for Impatient Programmers (ES2022 edition)',
    pageCount: 639,
    genre: 'Magical Realism'
};

let book3 = {
    title: 'Head First JavaScript Programming: A Brain-Friendly Guide',
        pageCount: 704,
    genre: 'Action & Adventure'
}

let booksArray = [book1, book2, book3];
console.log(2, booksArray);


/*-3) Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let author1 = {
    name: 'Marijn Haverbeke',
    age: 50,
};
let book1WithAuthors = Object.assign(book1);
book1WithAuthors.authors = [author1];

let author2 = {
    name: 'Dr. Axel Rauschmayer',
    age: 40,
};
let book2WithAuthors = Object.assign(book2);
book2WithAuthors.authors = [author2];

let author3 = {
    name: 'Eric Freeman',
    age: 30,
};
let author4 = {
    name: 'Elisabeth Robson',
    age: 20,
};
let book3WithAuthors = Object.assign(book3);
book3WithAuthors.authors = [author3, author4];

let booksArrayWithAuthors = [book1WithAuthors, book2WithAuthors, book3WithAuthors]

console.log(3, booksArrayWithAuthors);

/*-4) Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

// Спосіб 1й

let users = [
    {
        name: 'user0',
        username: 'user0',
        password: 'user0000'
    },
    {
        name: 'user1',
        username: 'user1',
        password: 'user1111'
    },
    {
        name: 'user2',
        username: 'user2',
        password: 'user2222'
    },
    {
        name: 'user3',
        username: 'user3',
        password: 'user3333'
    },
    {
        name: 'user4',
        username: 'user4',
        password: 'user4444'
    },
    {
        name: 'user5',
        username: 'user5',
        password: 'user5555'
    },
    {
        name: 'user6',
        username: 'user6',
        password: 'user6666'
    },
    {
        name: 'user7',
        username: 'user7',
        password: 'user7777'
    },
    {
        name: 'user8',
        username: 'user8',
        password: 'user8888'
    },
    {
        name: 'user9',
        username: 'user9',
        password: 'user9999'
    },
]

console.log(4, users);
for (const user of users) {
    console.log(user.password);
}

// Спосіб 2й

function User(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
}

let usersArray = [
    new User('user0', 'user0', 'user0000'),
    new User('user1', 'user1', 'user0001'),
    new User('user2', 'user2', 'user0002'),
    new User('user3', 'user3', 'user0003'),
    new User('user4', 'user4', 'user0004'),
    new User('user5', 'user5', 'user0005'),
    new User('user6', 'user6', 'user0006'),
    new User('user7', 'user7', 'user0007'),
    new User('user8', 'user8', 'user0008'),
    new User('user9', 'user9', 'user0009'),
];

console.log(4, usersArray);
for (let i = 0; i < usersArray.length; i++) {
    console.log(usersArray[i].password);
}


// ----------- Логічні розгалуження: -----------
/*-5) Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = 0;
if (x === 0) {
    console.log(5, 'Вірно');
} else {
    console.log(5, 'Невірно');
}

/*-6) Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).*/

let time = 42;

if (time >= 0 && time < 15) {
    console.log(6, '1а чверть');
} else if (time >= 15 && time < 30) {
    console.log(6, '2а чверть');
} else if (time >= 30 && time < 45) {
    console.log(6, '3я чверть');
} else if (time >= 45 && time < 60) {
    console.log(6, '4а чверть');
} else {
    console.log(6, 'Невірний час');
}

/*-7) У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = 15;

if (day >= 0 && time < 11) {
    console.log(7, '1а декада');
} else if (day >= 11 && time < 21) {
    console.log(7, '2а декада');
} else if (day >= 21 && time < 31) {
    console.log(7, '3я декада');
} else if (day === 31) {
    console.log(7, '4а декада');
} else {
    console.log(7, 'Невірна дата');
}

/*-8) Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let dayNumber = parseInt(prompt('Введіть порядковий день тижня')) ;

switch (dayNumber) {
    case 1:
        console.log(8, 'Monday');
        alert('Monday');
        break;
    case 2:
        console.log(8, 'Tuesday');
        alert('Tuesday');
        break;
    case 3:
        console.log(8, 'Wednesday');
        alert('Wednesday');
        break;
    case 4:
        console.log(8, 'Thursday');
        alert('Thursday');
        break;
    case 5:
        console.log(8, 'Friday');
        alert('Friday');
        break;
    case 6:
        console.log(8, 'Saturday');
        alert('Saturday');
        break;
    case 7:
        console.log(8, 'Sunday');
        alert('Sunday');
        break;
    default:
        console.log(8, 'Невірний порядковий день тижня')
        alert('Невірний порядковий день тижня');
}

/*-9) Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let number1 = 1991;
let number2 = 2023;

if (number1 > number2) {
    console.log(9, number1);
} else if (number1 < number2) {
    console.log(9, number2);
} else {
    console.log(9, `${number1} = ${number2}`);
}

/*-10) є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/

if (x === 0 || x === undefined || x === null || x === '' || isNaN(x)) {
    x = "default";
    console.log(10, x)
}

/*
-11) з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(11, 'Супер')
    }
}