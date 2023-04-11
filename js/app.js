//Seattle
// create an array of strings representing each hour of operation
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', 'Total'];
// get the element with an ID of "seattle-container" and assign it to the variable seattleContainer
let seattleContainer = document.getElementById("seattle-container");

// create an object representing the Seattle store
let SeattleObj = {
    // set properties for the store
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSoldEachHourArray: [],
    dailyTotal: 0,
    // define a method for calculating the number of cookies sold per hour
    generateRandomNumberOfCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
// define a method for calculating the number of cookies sold per hour
    calculateCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
            let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
            this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
            this.dailyTotal += cookiesSoldPerHour;
        }
    },
    // define a method for rendering the list of cookies sold per hour
     renderList: function() {
    // iterate through each hour of operation except for the "Total" row
        for (let i = 0; i < hours.length - 1; i++) {
           // create a new list item element and set its text content to the number of cookies sold during the current hour
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies sold`;
             // append the list item element to the seattleContainer element
            seattleContainer.appendChild(li);
        }
        // create a new list item element for the "Total" row and set its text content to the daily total
        let totalLi = document.createElement('li');
// add the number of cookies sold per hour to the cookiesSoldEachHourArray and update the daily total
        totalLi.textContent = `Total: ${this.dailyTotal} cookies sold`;
            // append the list item element to the seattleContainer element
         seattleContainer.appendChild(totalLi);
    }
}

SeattleObj.calculateCookiesPerHour();
SeattleObj.renderList();


//Tokyo
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let tokyoContainer = document.getElementById("tokyo-container");

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
        for (let i = 0; i < hours.length; i++) {
            let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
            let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
            this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
            this.dailyTotal += cookiesSoldPerHour;
        }
    },

    renderList: function() {
        for (let i = 0; i < hours.length - 1; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies sold`;
            tokyoContainer.appendChild(li);
        }
        let totalLi = document.createElement('li');
        totalLi.textContent = `Total: ${this.dailyTotal} cookies sold`;
        tokyoContainer.appendChild(totalLi);
    }
}

TokyoObj.calculateCookiesPerHour();
TokyoObj.renderList();

//Dubai

let dubaiContainer = document.querySelector("[dubai-container]");

let DubaiObj = {
  name: "Dubai",
  min: 11,
  max: 38,
  avg: 3.7,
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

  renderList: function () {
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies sold`;
      dubaiContainer.appendChild(li);
    }
  },
};

DubaiObj.calculateCookiesPerHour();
DubaiObj.renderList();
console.log(DubaiObj.generateRandomNumberOfCustomers());
//Paris
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let ParisObj = {
    name: 'Paris',
    min: 30,
    max: 28,
    avg: 2.3,
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

ParisObj.calculateCookiesPerHour();
ParisObj.renderList();
console.log(ParisObj.generateRandomNumberOfCustomers());

// Lima
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let limaContainer = document.getElementById("lima-container");

let LimaObj = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
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
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies sold`;
            limaContainer.appendChild(li);
        }
        let totalLi = document.createElement('li');
        totalLi.textContent = `Total: ${this.dailyTotal} cookies sold`;
        limaContainer.appendChild(totalLi);
    }
}

LimaObj.calculateCookiesPerHour();
LimaObj.renderList();

