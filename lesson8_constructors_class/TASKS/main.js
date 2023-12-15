//---------------------

//1- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const random = () => Math.floor(Math.random() * 1000);
let users = [];

users.push(new User(random(), 'vika', 'makarevych', 'makarevych@gmail.com', '0986549853'));
users.push(new User(random(), 'olia', 'makaronenko', 'olia@gmail.com', '0976549853'));
users.push(new User(random(), 'ania', 'makar', 'ania@gmail.com', '0966549853'));
users.push(new User(random(), 'katia', 'makarenko', 'katia@gmail.com', '0956549853'));
users.push(new User(random(), 'olena', 'makariv', 'olena@gmail.com', '0946549853'));
users.push(new User(random(), 'viktor', 'makarenych', 'viktor@gmail.com', '0936549853'));
users.push(new User(random(), 'andriy', 'makarunj', 'andriy@gmail.com', '0926549853'));
users.push(new User(random(), 'oleh', 'makarov', 'oleh@gmail.com', '0916549853'));
users.push(new User(random(), 'ivan', 'makarello', 'ivan@gmail.com', '0906549853'));
users.push(new User(random(), 'taras', 'makaronchyk', 'taras@gmail.com', '0996549853'));

console.log(1, users);

//2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(2, users.filter(({id}) => id % 2 === 0));

//3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(3, [...users].sort(((a, b) => a.id - b.id)));

//4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, array) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = array;
    }
}

console.log(4.1, Client);

class ClientInheritedUser {
    constructor(id, name, surname, email, phone, orderArray) {
        User.apply(this, [id, name, surname, email, phone])

        this.order = orderArray;
    }
}

console.log(4.2, ClientInheritedUser);

//5- створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(random(), 'vika', 'makarevych', 'makarevych@gmail.com', '0986549853', ['gun', 'doll', 'lego']),
    new Client(random(), 'olia', 'makaronenko', 'olia@gmail.com', '0976549853', ['pen']),
    new Client(random(), 'ania', 'makar', 'ania@gmail.com', '0966549853', ['flower', 'teddy bear']),
    new Client(random(), 'katia', 'makarenko', 'katia@gmail.com', '0956549853', ['car', 'lego']),
    new Client(random(), 'olena', 'makariv', 'olena@gmail.com', '0946549853', ['ball']),
    new Client(random(), 'viktor', 'makarenych', 'viktor@gmail.com', '0936549853', []),
    new Client(random(), 'andriy', 'makarunj', 'andriy@gmail.com', '0926549853', ['skate', 'ball']),
    new Client(random(), 'oleh', 'makarov', 'oleh@gmail.com', '0916549853', []),
    new Client(random(), 'ivan', 'makarello', 'ivan@gmail.com', '0906549853', ['phone']),
    new Client(random(), 'taras', 'makaronchyk', 'taras@gmail.com', '0996549853', ['gun', 'doll', 'lego', 'flower', 'computer'])
];

console.log(5.1, clients);

let clientsInheritedUser = [
    new ClientInheritedUser(random(), 'ivan', 'makarello', 'ivan@gmail.com', '0906549853', ['phone']),
    new ClientInheritedUser(random(), 'taras', 'makaronchyk', 'taras@gmail.com', '0996549853', ['gun', 'doll', 'lego', 'flower', 'computer'])
]

console.log(5.2, clientsInheritedUser);

//6- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsClone = structuredClone(clients)
console.log(6, structuredClone(clients).sort((a, b) => a.order.length - b.order.length));

//7- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
function Car(model, manufacturer, manufactureYear, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.manufactureYear = manufactureYear;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;

// додати в об'єкт функції:
    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(7, `їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    };

    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {

        let info = []

        for (const [key, value] of Object.entries(this)) {
            if (typeof value === 'object') {
                let objectName = key;
                let objectInObject = value;
                for (const [key, value] of Object.entries(objectInObject)) {
                    info.push(`${objectName}: ${key} - ${value}`);
                }
            } else {
                info.push(`${key} - ${value}`);
            }
        }

        console.log(7, info);
        // return info; або так
    };

    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed = newSpeed;
        // this.maximumSpeed += newSpeed; // або так, якщо потрібно додати до існуючої швидкості число, вказану в аргументі методу
        console.log(7, this.maximumSpeed);
    };

    //-- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.manufactureYear = newValue;
        console.log(7, this.manufactureYear);
    };

    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        // this.driver = driver; варіант2
        this.driver = {};
        for (const [key, value] of Object.entries(driver)) {
            this.driver[key] = value;
        }
        console.log(7, this.driver);
        // return this.driver
    };
}

let bmwX3 = new Car('X3', 'BMV', 2023, 200, 2.5);

console.log(7, bmwX3);

bmwX3.addDriver({name: 'Viktor', age: 37});
console.log(7, bmwX3);

bmwX3.drive();
bmwX3.info();
bmwX3.increaseMaxSpeed(225);
bmwX3.changeYear(2024);

//8- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
class CarClass {
    constructor(model, manufacturer, manufactureYear, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.manufactureYear = manufactureYear;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }

    // додати в об'єкт функції:
    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(8, `їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    };

    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        let info = [];

        for (const [key, value] of Object.entries(this)) {
            if (typeof value === 'object') {
                let objectName = key;
                let objectInObject = value;
                for (const [key, value] of Object.entries(objectInObject)) {
                    info.push(`${objectName}: ${key} - ${value}`);
                }
            } else {
                info.push(`${key} - ${value}`);
            }
        }

        console.log(8, info);
    };

    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maximumSpeed = newSpeed;
        // this.maximumSpeed += newSpeed; // або так, якщо потрібно додати до існуючої швидкості число, вказану в аргументі методу
        console.log(8, this.maximumSpeed);
    };

    //-- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.manufactureYear = newValue;
        console.log(8, this.manufactureYear);
    };

    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        // this.driver = driver; варіант2
        this.driver = {};
        for (const [key, value] of Object.entries(driver)) {
            this.driver[key] = value;
        }
        console.log(8, this.driver);
        // return this.driver
    };
}

let nissanLeaf = new CarClass('leaf', 'nissan', 2014, 150, 2.0);

console.log(8, nissanLeaf);

nissanLeaf.addDriver({name: 'Viktor', age: 37});
console.log(8, nissanLeaf);

nissanLeaf.drive();
nissanLeaf.info();
nissanLeaf.increaseMaxSpeed(165);
nissanLeaf.changeYear(2016);

class CarClassInheritedCarConstructor {
    constructor(model, manufacturer, manufactureYear, maximumSpeed, engineCapacity) {
        Car.apply(this, [model, manufacturer, manufactureYear, maximumSpeed, engineCapacity]);
    }
}

let nissanLeaf2 = new CarClassInheritedCarConstructor('leaf2', 'nissan', 2020, 165, 2.2);

console.log(8.2, nissanLeaf2);

nissanLeaf2.addDriver({name: 'Vika', age: 33});
console.log(8.2, nissanLeaf2);

nissanLeaf2.drive();
nissanLeaf2.info();
nissanLeaf2.increaseMaxSpeed(170);
nissanLeaf2.changeYear(2022);

//9- створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Ania', 27, 36);
let cinderella2 = new Cinderella('Vika', 33, 35);
let cinderella3 = new Cinderella('Olia', 25, 29);
let cinderella4 = new Cinderella('Katia', 23, 34);
let cinderella5 = new Cinderella('Kim Basinger', 29, 41);
let cinderella6 = new Cinderella('Liza', 37, 42);
let cinderella7 = new Cinderella('Monica', 47, 45);
let cinderella8 = new Cinderella('Olena', 59, 39);
let cinderella9 = new Cinderella('Anita', 17, 34);
let cinderella10 = new Cinderella('Oxana', 33, 33);

let cinderellasArray = [
    cinderella1,
    cinderella2,
    cinderella3,
    cinderella4,
    cinderella5,
    cinderella6,
    cinderella7,
    cinderella8,
    cinderella9,
    cinderella10
]

console.log(9, cinderellasArray)

//10-Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    }
}

let prince1 = new Prince('Viktor', 37, 35);
console.log(10, prince1);

//11 За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellasArray) {
    if (cinderella.footSize === prince1.slipperSize) {
        console.log(11, `${cinderella.name} - is the princess You were looking for, Your Majesty`)
    }
}

//12 Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(12, `${(cinderellasArray.find(({footSize}) => footSize === prince1.slipperSize)).name} - is the princess You were looking for, Your Majesty`);