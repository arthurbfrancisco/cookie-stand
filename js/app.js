// Seattle
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', 'Total'];

let storeContainer = document.getElement("seatle-container");

let SeattleObj = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    generateRandomNumberOfCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
            let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
            this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
            this.dailyTotal += cookiesSoldPerHour;
        }
    },
    renderList: function() {
      for (let i = 0; i < hours.lenght - 1; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]}${this.cookiesSoldEachHourArray[i]} cookies sold`;
        cookiesSoldEachHourArray.appendChild(li);
      }
  let li = doc
    }
}

SeattleObj.calculateCookiesPerHour();
SeattleObj.renderList();


// Tokyo

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];


let TokyoObj = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,

    generateRandomNumberOfCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calculateCookiesPerHour: function () {
        let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
        console.log(randomNumberOfCustomers);
    }
};
TokyoObj.calculateCookiesPerHour();
TokyoObj.renderList();
console.log(TokyoObj.generateRandomNumberOfCustomers());

// // Dubai

// let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
// '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

// let DubaiObj = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     cookiesSoldEachHourArray: [],
//     dailyTotal: 0,

//     generateRandomNumberOfCustomers: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },

//     calculateCookiesPerHour: function () {
//         let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//         console.log(randomNumberOfCustomers);
//     }
// };

// console.log(dubaiObj.generateRandomNumberOfCustomers());

// // Paris

// let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
// '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

// let ParisObj = {
//     name: 'Paris',
//     min: 30,
//     max: 28,
//     avg: 2.3,
//     cookiesSoldEachHourArray: [],
//     dailyTotal: 0,

//     generateRandomNumberOfCustomers: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },

//     calculateCookiesPerHour: function () {
//         let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//         console.log(randomNumberOfCustomers);
//     }
// };

// console.log(parisObj.generateRandomNumberOfCustomers());

// // Lima

// let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
// '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

// let limaObj = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     cookiesSoldEachHourArray: [],
//     dailyTotal: 0,

//     generateRandomNumberOfCustomers: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },

//     calculateCookiesPerHour: function () {
//         let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//         console.log(randomNumberOfCustomers);
//     }
// };

// console.log(limaObj.generateRandomNumberOfCustomers());


// after we have our window into the DOM
// if I want to create new elements and add them
// there 3 steps:

// 1. create element
// declared a variable and then we envoked the createElement method and we passed it an HTML as a string — AKA we want to create a <article> in our DOM.
let kittenArticle = document.createElement('article');

// 2. give it content

// 3. append it to the DOM (add it to the page)
// parent variable, then we call .appendChild() method and we pass the thing we want to add
kittenContainer.appendChild(kittenArticle);

// H3
// 1. create element
let kittenh3 = document.createElement('h3');
// 2. give it content
kittenh3.textContent = 'Jumper';
// 3. append it to the DOM (add it to the page)
// ex:
// parent.appendChild(elementToAdd);
// parent is the direct parent in the DOM of the thing we want to add.
kittenArticle.appendChild(kittenh3);

// p
let p = document.createElement('p');
p.textContent = 'Jumper the cat is special';
kittenArticle.appendChild(p);

// ul
let ul = document.createElement('ul');
kittenArticle.appendChild(ul);

// img
let img = document.createElement('img');
img.src = 'images/jumper.jpeg';
img.alt = 'Jumper is available for adoption';
kittenArticle.appendChild(img);


// // for your lab
// let li = document.createElement('li');
// li.textContent = `6am: ${seattle.someValueInAnArry[i]} cookies`;

let jumper = {
  name: 'Jumper',
  about: 'Jumper the cat is special',
  likes: ['cudding', 'lazer pointer', 'catnip'],
  renderList: function() {
    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `Jumper likes ${this.likes[i]}`;
      ul.appendChild(li);
    }
  }
}

jumper.renderList();
