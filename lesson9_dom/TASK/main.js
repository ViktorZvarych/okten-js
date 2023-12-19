
//1 - створити блок
const divElement = document.createElement("div");
console.log(1, divElement);

const content = 'Div';
divElement.innerText = content;

//2 - додати йому класи wrap, collapse, alpha, beta
divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
console.log(2, divElement);

//3 - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// let blockStyles = {: 'red', color: 'yellow', fontSize: '2rem'};
divElement.style.background = 'red';
divElement.style.color = 'yellow';
divElement.style.fontSize = '2rem';
console.log(3, divElement.style.background, divElement.style.color, divElement.style.fontSize);

//4 - додати цей блок в body.
const body = document.body;
body.appendChild(divElement);
bodyDivElement = document.getElementsByClassName('wrap')[0];
console.log(4, bodyDivElement);

//5 - клонувати його повністю, та додати клон в body.
bodyBlockClone1 = bodyDivElement;
console.log(5, bodyBlockClone1 === bodyDivElement);

bodyBlockClone2 = bodyDivElement.cloneNode(true);
console.log(5, bodyBlockClone2 === bodyDivElement);

body.appendChild(bodyBlockClone2);
// bodyBlockClone2.style.background = 'green';
// bodyBlockClone2.innerText = 'Div Clone'

// - Є масив:
let navListArray = ['Main','Products','About us','Contacts'];
//6 -Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const nav = document.createElement('ul');
navListArray.map(item => {
    const navListItem = document.createElement('li');
    navListItem.innerText = `${item}`;
    nav.appendChild(navListItem);
});
console.log(6, nav);
body.appendChild(nav);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//7 -Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
const coursesAndDurationInfo = document.createElement('div');

for (const {title, monthDuration} of coursesAndDurationArray) {
    const courseInfoDiv = document.createElement('div');
    courseInfoDiv.innerText = `Course title: ${title}, course duration: ${monthDuration} months`;
    coursesAndDurationInfo.appendChild(courseInfoDiv);
}

console.log(7, coursesAndDurationInfo);
body.appendChild(coursesAndDurationInfo);
// Завдання робити через цикли.

// =========================

    // - Є масив coursesAndDurationArray

//8 -За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// Спосіб 1
const coursesDescription = document.createElement('div');
coursesDescription.style.border = '1px solid green';

for (const {title, monthDuration} of coursesAndDurationArray) {
    const courseItem = document.createElement('div');
    courseItem.classList.add('item');
    const courseTitle = document.createElement('h2');
    courseTitle.classList.add('heading');
    courseTitle.innerText = `${title}`;
    const courseDescription = document.createElement('p');
    courseDescription.classList.add('description');
    courseDescription.innerText = `${monthDuration}`
    courseItem.appendChild(courseTitle);
    courseItem.appendChild(courseDescription);
    coursesDescription.appendChild(courseItem);
}

console.log(8.1, coursesDescription);
body.appendChild(coursesDescription);

// Спосіб 2
const coursesDescription2 = document.createElement('div');
coursesDescription2.style.border = '1px solid red';
coursesDescription2.innerHTML = coursesAndDurationArray.map(({title, monthDuration}) => (
    `<div>
        <h2 class='heading'>${title}</h2>
        <p class='description'>${monthDuration}</p>
    </div>`
)).join('');

console.log(8.2, coursesDescription2);
body.appendChild(coursesDescription2);
// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
//9 -Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// =========================


const simpsonsSection = document.createElement('section');
simpsonsSection.style.border = '1px solid blue';

simpsonsSection.innerHTML = simpsons
    .map(({name, surname, age, info, photo}) => (
    `<article class='member'>
        <h3 class='member-name'>${name} ${surname}</h3>
        <p class='member-age'>Age: ${age} year(s)</p>
        <p class='member-info'>${info}</p>
        <img src='${photo}' alt='${name} ${surname}' width='200px'>
    </article>
    <hr>`
)).join('');

console.log(9, simpsonsSection);
body.appendChild(simpsonsSection);

// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// //10 -Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

const coursesDescription3 = document.createElement('div');
coursesDescription3.style.border = '1px solid black';
coursesDescription3.innerHTML = coursesArray.map(({title, monthDuration, hourDuration,modules}) => (
    `<div class="course">
        <h3 class='course-title'>Course: ${title}</h3>
        <p class='course-duration'>Duration: ${monthDuration} months, ${hourDuration} hours</p>
        <div class='course-modules'>
           <h4>Modules:</h4>
            <ul class='course-modules'>
                ${modules.map(module => `<li>${module}</li>`).join('')}
            </ul>
        </div>
    </div>
    <hr>`
)).join('');

console.log(10, coursesDescription3);
body.appendChild(coursesDescription3);