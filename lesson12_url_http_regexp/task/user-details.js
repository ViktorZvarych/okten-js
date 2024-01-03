const loader = document.getElementById('loader');
const userInfoArray = [];

function getUserInfo(user) {
    for (const [key, value] of Object.entries(user)) {
        if (typeof value !== 'object') {
            userInfoArray.push(`${key}: ${value}`);
        } else {
            getUserInfo(value);
        }
    }
    return userInfoArray;
}

const showUserInfo = async () => {
    // console.log(location.href);

    const url = new URL(location.href);
    const userId = url.searchParams.get('id');

    const userJson = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userJson.json();

    const userInfo = getUserInfo(user, userInfoArray);

    const ulElement = document.createElement('ul');
    userInfo.map(item => {
        const liElement = document.createElement('li');
        liElement.innerText = `${item}`;
        ulElement.appendChild(liElement);
    })
    loader.style.display = 'none';
    document.body.appendChild(ulElement);
}

setTimeout((() => showUserInfo()), 1600);

