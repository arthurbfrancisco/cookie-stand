//Seattle
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', 
'1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', 'Total'];

let seattleContainer = document.getElementById("seattle-container");

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
        for (let i = 0; i < hours.length - 1; i++) {
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies sold`;
            seattleContainer.appendChild(li);
        }
        let totalLi = document.createElement('li');
        totalLi.textContent = `Total: ${this.dailyTotal} cookies sold`;
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

