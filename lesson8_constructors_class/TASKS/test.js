class Human {
    constructor(name) {
        this.name = name;

        this.showName1 = function() {
            console.log(this, this.name); //Human {name: 'Viktor', showName4: ƒ, showName1: ƒ, showName2: ƒ} 'Viktor'
        };

        this.showName2 = () => {
            console.log(this, this.name); //Human {name: 'Viktor', showName4: ƒ, showName1: ƒ, showName2: ƒ} 'Viktor'
        };
    }

    showName3() {
        console.log(this, this.name); //Human {name: 'Viktor', showName4: ƒ, showName1: ƒ, showName2: ƒ} 'Viktor'
    };
    showName4 = () => {
        console.log(this, this.name); //Human {name: 'Viktor', showName4: ƒ, showName1: ƒ, showName2: ƒ} 'Viktor'
    };
}

let human1 = new Human('Viktor', 37);

console.log(Human.prototype);
console.log(human1);

human1.showName1();
human1.showName2();
human1.showName3();
human1.showName4();

let human2 = {
    name: 'Viktor',

    showName1: function() {
        console.log(this, this.name); //{name: 'Viktor', showName1: ƒ, showName2: ƒ} 'Viktor'
    },

    showName2: () => {
        console.log(this, this.name); //Window ''
    },
}

console.log(human2) //{name: 'Viktor', showName1: ƒ, showName2: ƒ}
human2.showName1();
human2.showName2();