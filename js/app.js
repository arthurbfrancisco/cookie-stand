'use strict'

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m', 'Total'];

function Store(name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesSoldEachHourArray = [];
  this.dailyTotal = 0;

  this.generateRandomNumberOfCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  this.calculateCookiesPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
      let cookiesSoldPerHour = Math.ceil(randomNumberOfCustomers * this.average);
      this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  }

  this.renderTableRow = function() {
    let tableRow = document.createElement('tr');
    document.getElementById('storeProfiles').appendChild(tableRow);

    let nameTd = document.createElement('td');
    nameTd.textContent = this.name;
    tableRow.appendChild(nameTd);

    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      let tdElem = document.createElement('td');
      tdElem.textContent = this.cookiesSoldEachHourArray[i];
      tableRow.appendChild(tdElem);
    }
  }

  this.tableHeadRender = function() {
    let tHead = document.createElement('thead');
    document.getElementById('storeProfiles').appendChild(tHead);

    let tableRow = document.createElement('tr');
    tHead.appendChild(tableRow);

    let emptyTh = document.createElement('th');
    tableRow.appendChild(emptyTh);

    for (let i = 0; i < hours.length - 1; i++) {
      let thElem = document.createElement('th');
      thElem.textContent = `${hours[i]}`;
      tableRow.appendChild(thElem);
    }
  }

  this.calculateCookiesPerHour();
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.tableHeadRender();
Seattle.renderTableRow();

let Tokyo = new Store('Tokyo', 3, 24, 1.2);
Tokyo.renderTableRow();

// // Define an array of strings representing the hours of operation for the Seattle store
// let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']


// // construction Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with 
// //the ‘new’ keyword, it creates a new instance.
// function SalmonCookieStand(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
//   this.location = location,
//   this.minCustomersPerHour = minCustomersPerHour,
//   this.maxCustomersPerHour = maxCustomersPerHour,
//   this.avgCookiesPerCustomer = avgCookiesPerCustomer,
//   this.cookiesSoldPerHourArray = [],
//   this.totalCookiesSold = 0,
//  console.log(`${}`)
//   this.calculateCookiesSoldPerHour = function() {
//     for (var i = 0; i < 8; i++) {
//       var cookiesSold = Math.round(randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerCustomer);
//       this.cookiesSoldPerHour.push(cookiesSold);
//       this.totalCookiesSold += cookiesSold;
//     }
//   };
// }

// // Get the DOM element with ID "seattleSold" and store it in the variable seattleContainer
// let seattleContainer = document.getElementById("seattleSold");

// // Define an object representing the Seattle store, with properties for the store name, minimum and maximum number of customers, average number of cookies sold per customer, an array to store the number of cookies sold per hour, and a variable to store the daily total number of cookies sold
// let seattleStore = new ('Seattle', 23, 65, 6.3,) {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//    // Define a method to generate a random number of customers based on the minimum and maximum customer numbers specified for the store
//    generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//     // Define a method to calculate the number of cookies sold per hour
//     calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//         // Add the number of cookies sold per hour to the cookiesSoldPerHourArray
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//      // Add the number of cookies sold per hour to the daily total
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//     // Define a method to render the list of cookies sold per hour
//     renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//             // Create a new list item element
//       let li = document.createElement('li');
//             // Set the text content of the list item to the number of cookies sold during the current hour
//        li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//             // Append the list item element to the seattleContainer
//        seattleContainer.appendChild(li);
//         // Create a new list item element for the total number of cookies sold
//     } let li = document.createElement('li');
//         // Set the text content of the list item to the total number of cookies sold for the day
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//         // Append the list item element to the seattleContainer
//      seattleContainer.appendChild(li);
//   }
// }


// // Call the calculateCookiesPerHour method to calculate the number of cookies sold per hour for the Seattle store
// seattleStore.calculateCookiesPerHour();

// // Call the renderList method to render the list of cookies sold per hour for the Seattle store
//  seattleStore.renderList();

// // TOKYO

// let tokyoContainer = document.getElementById("tokyoSold");

// let tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       tokyoContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoContainer.appendChild(li);
//   }
// }


// tokyoStore.calculateCookiesPerHour();

// tokyoStore.renderList();

// // DUBAI 

// let dubaiContainer = document.getElementById("dubaiSold");

// let dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       dubaiContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiContainer.appendChild(li);
//   }
// }


// dubaiStore.calculateCookiesPerHour();

// dubaiStore.renderList();

// // PARIS 

// let parisContainer = document.getElementById("parisSold");

// let parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       parisContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisContainer.appendChild(li);
//   }
// }


// parisStore.calculateCookiesPerHour();

// parisStore.renderList();

// // LIMA


// let limaContainer = document.getElementById("limaSold");

// let limaStore = {
//   name: 'Lima',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       limaContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaContainer.appendChild(li);
//   }
// }


// limaStore.calculateCookiesPerHour();

// limaStore.renderList();