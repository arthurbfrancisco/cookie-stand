"use strict";

// Store the min/max hourly customers, and the average cookies per customer, in object properties.

//array for hours
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

const storeTableBody = document.querySelector('tbody');
const storeTableHead = document.querySelector('thead');

let storeArray = []

const tableElement = document.getElementById("Table");

function Store(name, min, max, avg) {
    this.name = name,
    this.min = min,
    this.max = max,
    this.avg = avg,
    this.cookiesPerHourArray = [],
    this.dailyTotal = 0,
    storeArray.push(this)
  this.render = function () {

  }
  this.generateRandomNumberOfC = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
    this.calculateCookiesPerHour = function () {
      for (let i = 0; i < hours.length; i++) {
        let randomNumberOfCustomers = this.generateRandomNumberOfC();
        let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
        this.cookiesPerHourArray.push(cookiesSoldPerHour);
        //this is adding to dailytotal and staying in dailytotal
        this.dailyTotal += cookiesSoldPerHour;
      }
    },
    
    this.tableRender = function(){
      this.calculateCookiesPerHour();
      let firstRow = document.createElement("tr");
      tableElement.appendChild(firstRow);
      let cityName = document.createElement('td')
      cityName.textContent = this.name;
      firstRow.appendChild(cityName)
      for(let i = 0; i < hours.length; i++){
        let firstElem = document.createElement('td');
        firstElem.textContent = `${this.cookiesPerHourArray[i]}`
        console.log(this.cookiesPerHourArray[i]);
        // this.dailyTotal += this.cookiesPerHourArray[i];
        firstRow.appendChild(firstElem);
      }
      // console.log("total: ", this.dailyTotal);
      let total = document.createElement('td');
      total.textContent = this.dailyTotal;
      firstRow.appendChild(total);
    }
  }

function renderHours(){
  let tdElem = document.createElement('td');
  tableElement.appendChild(tdElem);
  for(let i = 0; i < hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${hours[i]}`
    tableElement.appendChild(tdElem);
  }
  //only makes total head to right
  let total = document.createElement('td');
  total.textContent = "total"
  tableElement.appendChild(total)
}

Store.prototype.render = function(){
  return randomInRange(3, 12) + ' months';
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

renderHours();

Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
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