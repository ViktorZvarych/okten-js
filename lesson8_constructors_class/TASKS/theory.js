(() => {
    function UserConstructor(name, age) {
        this.name = name;
        this.age = age;

        this.greeting = function () {
            return `My name is ${this.name}, my age is ${this.age}`
        }
    }

    const userKolia = new UserConstructor('Kolia', 25);

    console.log(userKolia.greeting());


    class UserClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;

            this.call = function () {
                return `${this.name} - it's  my name`;
            }
            this.call = function () {
                return `${this.name} ---- it's  my name`;
            }
        }

        greeting() {
            return `My name is ${this.name}, my age is ${this.age}`
        }

        static greeting() {
            return `My name is ${this.name}, --- my age is ${this.age}`
        }
    }

    const userViktor = new UserClass('Viktor', 37);
    console.log('Classes:', userViktor.greeting(), userViktor.call(), UserClass.greeting());

    //наслідування класів
    class Client extends UserClass {
        constructor(name, age, status) {
            super(name, age);
            this.status = status;
        }

        sayStatus() {
            return `my status is: ${this.status}`;
        }
    }

    const clientVika = new Client('Vika', 33, 'active');

    console.log(clientVika.greeting(), clientVika.sayStatus());

    let date = new Date();
    console.log(date);

    let user1 = {
        name: 'Viktor',

        greeting(age, hairColor) {
            return `My name is ${this.name}, and my age is ${age}. My hair is: ${hairColor}.`
        },

        logAge(age) {
            console.log(`My name is ${this.name}, and my age is ${age}`);
        }
    }

    console.log(user1.greeting(25, 'brown'));

    let user2 = {
        name: 'Vasia',
    }

    console.log(user2);
    console.log(user1.greeting.apply(user2, [33, 'blond']));

    let logUser2Age = user1.logAge.bind(user2);

    logUser2Age(33);

    let someUser = {
        name:'Ivan'
    }

    let anotherUser = Object.create(someUser);

    console.log(anotherUser, anotherUser.name);
})();



(() => {
    //наслідування без використання класів
    function Vehicle(name, age) {
        this.name = name;
        this.age = age;

        this.ride = function () {
            return `${this.name} - Ride`;
        }
    }

    function Car(name, age, maxSpeed) {
        Vehicle.apply(this, [name, age]);

        this.maxSpeed = maxSpeed;
    }
})();