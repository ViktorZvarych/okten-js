// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const showUsers = async () => {

    const usersJson = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await usersJson.json();
    console.log(users);
    const ulElement = document.createElement('ul');

    for (const {id, name} of users) {
        const liElement = document.createElement('li');
        const pElement = document.createElement('p');
        pElement.innerText = `id: ${id}, name: ${name}`
        const aElement = document.createElement('a');
        aElement.href = `./user-details.html?id=${id}`;
        aElement.appendChild(pElement);
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }

    document.body.appendChild(ulElement);
}

showUsers();
