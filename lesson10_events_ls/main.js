const body = document.body;

//1 -Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
(() => {
    const formElement = document.createElement('form');
    formElement.setAttribute('name', "user_info");
    formElement.style.display = 'flex';
    formElement.style.flexDirection = 'column';
    formElement.style.gap = '1rem';
    formElement.style.margin = '0 auto';
    formElement.style.maxWidth = '400px';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', "text");
    nameInput.setAttribute('name', "firstName");

    const surnameInput = document.createElement('input');
    surnameInput.setAttribute('type', "text");
    surnameInput.setAttribute('name', "lastName");


    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', "number");
    ageInput.setAttribute('name', "age");

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', "submit");
    submitButton.innerText = 'Submit';
    submitButton.style.display = 'block';

    const userInfoDiv = document.createElement('div')

    function onSubmitHandler(e) {
        e.preventDefault();
        const nameLi = nameInput.value ? `<li>Name: ${nameInput.value}</li>` : '';
        const surnameLi = surnameInput.value ? `<li>Surname: ${surnameInput.value}</li>` : '';
        const ageLi = ageInput.value ? `<li>Age: ${ageInput.value}</li>` : '';

        userInfoDiv.innerHTML = `<ul>${nameLi}${surnameLi}${ageLi}</ul>`;
    }

    formElement.addEventListener('submit', onSubmitHandler);

    formElement.append(nameInput, surnameInput, ageInput, submitButton, userInfoDiv);

    body.appendChild(formElement);

    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();


// ==========================

//2 -є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

(() => {
    const divElement = document.createElement('div');

    document.addEventListener('DOMContentLoaded', function () {
        let pageLoadNumber = JSON.parse(sessionStorage.getItem("pageLoadNumber")) || 0;
        ++pageLoadNumber;
        sessionStorage.setItem("pageLoadNumber", pageLoadNumber);
        divElement.innerHTML = `<p>According to Your browser's session storage this page was loaded <span style="color: white; background: #17174f">${pageLoadNumber} time(s)</span> on this tab</p>`;
    });

    body.appendChild(divElement);

    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();

// ==========================

//3 - Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

(() => {
    function onLoadHandler() {
        let date = new Date();

        let sessionNumber = JSON.parse(localStorage.getItem('sessionNumber')) || 0;
        sessionNumber++;
        localStorage.setItem('sessionNumber', sessionNumber);

        let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

        let sessionInfo = `Session ${sessions.length + 1}: ${date}`;

        sessions.push(sessionInfo);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    }

    document.addEventListener('DOMContentLoaded', onLoadHandler);

    // Sessions page Link
    let sessionsLink = document.createElement('a');
    sessionsLink.setAttribute('href', './sessions.html');
    sessionsLink.innerText = 'Session Info';
    sessionsLink.setAttribute('target', '_blank');
    body.appendChild(sessionsLink);

    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();
// =========================

// 4 - зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
(() => {
    const productsBlock = document.createElement('section');
    const prev = document.createElement('button');
    prev.innerText = 'Prev';
    const next = document.createElement('button');
    next.innerText = 'Next';
    const productsListElement = document.createElement('div');
    productsListElement.style.display = 'flex';
    productsListElement.style.flexWrap = 'wrap';
    productsListElement.style.gap = '1rem';

    productsBlock.append(prev, next, productsListElement);

    let productsArray = [];

    let firstProductIndex = 0;
    let lastProductIndex = 10;

    const displayProducts = (products, direction) => {
        if (direction === 'prev') {
            firstProductIndex -= 10;
            lastProductIndex -= 10;
        }

        if (direction === 'next') {
            firstProductIndex += 10;
            lastProductIndex += 10;
        }

        if (lastProductIndex > products.length) {
            firstProductIndex = 0;
            lastProductIndex = 10;
        }

        if (firstProductIndex < 0) {
            firstProductIndex = products.length - 10;
            lastProductIndex = products.length;
        }

        const displayProducts = products.slice(firstProductIndex, lastProductIndex);

        let productsList = ``;

        displayProducts.map(product => {
            let productElement = `
                <article style="margin-top: 1rem; padding: 0.5rem; width: 300px; height: 450px; border: 1px solid cornflowerblue;">
                    <img src=${product.thumbnail} alt=${product.title} style='max-width: 250px; max-height: 200px' height="200"/>
                    <p><b>Title: ${product.title}</b></p>
                    <p>Brand: ${product.brand}</p>
                    <p>Rating: ${product.rating}</p>
                    <p>Description: ${product.description}</p>
                    <p><b>Price: $${product.price}</b></p>
                </article>
            `
            productsList += productElement;
            productsListElement.innerHTML = productsList;
        });

        body.appendChild(productsBlock);
    };

    prev.addEventListener('click', () => displayProducts(productsArray, 'prev'));
    next.addEventListener('click', () => displayProducts(productsArray, 'next'));

    if (!window.navigator.onLine) {
        console.log("No connection!")
    } else {
        fetch('https://dummyjson.com/products?limit=100')
            .then(res => {
                if (res.error) {
                    console.log(res.ok, res.status, res.statusText, res.error)
                }
                console.log(res)
                return res.json()
            })
            .then(({products}) => productsArray = products)
            .then(productsArray => displayProducts(productsArray))
            .catch(reason => console.log(reason));
    }




    // ?
    // У рядках 184-202 я спробував різні способи запхати fetch у try catch блок,
    // аби зловити помилку, якщо не буде інтернету,
    // або за адресою відсутні потрібні дані.
    // Але чомусь цей catch нічого не зловив.
    // Не розумію, де я тут наплужив...
    // ?

    // try {
    //     fetch('https://dummyjson.com/products?limit=100')
    //         .then(res => res.json())
    //         .then(({products}) => productsArray = products)
    //         .then(productsArray => displayProducts(productsArray));
    // } catch (e) {
    //     console.log(e);
    // }

    // (async () => {
    //     try {
    //         const response = await fetch('https://dummyjson.com/products?limit=100');
    //         const data = await response.json();
    //         productsArray = await data.products;
    //         displayProducts(productsArray);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // })();

    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();

//5 - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
(() => {
    const textElement = document.createElement('p');
    textElement.setAttribute('id', 'text');
    textElement.innerText = 'Text Element';

    const hideShowButton = document.createElement('button');
    hideShowButton.innerText = 'Hide/Show Text Element';

    hideShowButton.addEventListener('click', function () {
        textElement.style.display = textElement.style.display === 'none'
            ? ''
            : 'none'
    });

    body.append(hideShowButton, textElement);

    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();

//6 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
(() => {
    const formElement = document.createElement('form');
    formElement.setAttribute('name', "user_info");
    formElement.style.display = 'flex';
    formElement.style.flexDirection = 'column';
    formElement.style.gap = '1rem';
    formElement.style.margin = '0 auto';
    formElement.style.maxWidth = '400px';

    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', "number");
    ageInput.setAttribute('name', "user_age");

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', "submit");
    submitButton.innerText = 'Send Your age';
    submitButton.style.display = 'block';

    function onSendAgeHandler(e) {
        e.preventDefault();

        const age = ageInput.value;

        if (age < 18) {
            alert('Your age is under 18')
        }
    }

    formElement.addEventListener('submit', onSendAgeHandler);

    formElement.append(ageInput, submitButton);
    body.appendChild(formElement);


    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();

//7 *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

(() => {
    const formElement = document.createElement('form');
    formElement.setAttribute('name', "user_info");
    formElement.style.display = 'flex';
    formElement.style.flexDirection = 'column';
    formElement.style.gap = '1rem';
    formElement.style.margin = '0 auto';
    formElement.style.maxWidth = '400px';

    const rowsNumberInput = document.createElement('input');
    rowsNumberInput.setAttribute('type', "number");
    rowsNumberInput.setAttribute('name', "rowsNumberInput");

    const cellNumberInput = document.createElement('input');
    cellNumberInput.setAttribute('type', "number");
    cellNumberInput.setAttribute('name', "cellNumberInput");


    const cellDataInput = document.createElement('input');
    cellDataInput.setAttribute('type', "text");
    cellDataInput.setAttribute('name', "cellDataInput");

    const createTableButton = document.createElement('button');
    createTableButton.setAttribute('type', "submit");
    createTableButton.innerText = 'Create new table';
    createTableButton.style.display = 'block';

    const tableElement = document.createElement('table');

    function onSubmitHandler(e) {
        e.preventDefault();
        const rowsNumber = +rowsNumberInput.value;
        const cellNumber = +cellNumberInput.value;
        const cellData = cellDataInput.value;

        let tableData = ``;

        for (let i = 0; i < rowsNumber; i++) {
            let rawData = ``;
            for (let j = 0; j < cellNumber; j++) {
                rawData += `<td style="border: 1px solid gray;">${cellData}</td>`
            }

            let rowElement = `<tr>${rawData}</tr>`;

            tableData += rowElement;
        }

        tableElement.innerHTML = tableData;
    }

    formElement.addEventListener('submit', onSubmitHandler);

    formElement.append(rowsNumberInput, cellNumberInput, cellDataInput, createTableButton, tableElement);

    body.appendChild(formElement);


    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();

// (Додатковачастина для завдання)
//8 *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

(() => {
    const divElement = document.createElement('div');
    let date = new Date();

    document.addEventListener('DOMContentLoaded', function () {
        let dateArray = JSON.parse(localStorage.getItem("dateArray")) || [];
        let price = JSON.parse(localStorage.getItem("price")) || 100;

        dateArray.push(date.getTime() / 1000);

        localStorage.setItem("dateArray", JSON.stringify(dateArray));

        date = new Date();

        if (dateArray.length >= 2 && dateArray[dateArray.length - 1] - dateArray[dateArray.length - 2] >= 10) {
            price += 10;
        }
        localStorage.setItem("price", price);

        divElement.innerHTML = `<p>Ціна: <span style="color: white; background: #17174f">${price} грн</span></p>`;
    });

    body.appendChild(divElement);

    const lineElement = document.createElement('hr');
    body.appendChild(lineElement);
})();