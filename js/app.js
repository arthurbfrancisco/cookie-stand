// Enforces strict mode to prevent using undeclared variables or other unsafe actions
"use strict";
// Get the form element from the HTML document using querySelector
let form = document.querySelector('form');

// Log the form element to the console for debugging purposes
console.log('form');

// Declare a function called 'handleSubmit' that takes 'event' as an argument
let handleSubmit = function(event) {
  
 // Prevent the form from submitting and refreshing the page
event.preventDefault();
 
  
    // Get the value of the 'storeName' input field from the form
  let name = event.target.storeName.value;
    // Get the value of the 'storeHour' input field from the form, and convert it to an integer
  let min = parseInt(event.target.storeHour.value);
    // Get the value of the 'storeSold' input field from the form, and convert it to an integer
  let max = parseInt(event.target.storeSold.value);
    // Get the value of the 'soldHour' input field from the form, and convert it to an integer
  let avg = parseInt(event.target.soldHour.value);
  
      // Create a new instance of the 'Store' class with the values from the form
  let newStore = new Store(
    name,
    min,
    max,
    avg,
    name,
  );
    // Log the newStore object to the console for debugging purposes
  console.log(newStore);
   // Call the 'tableRender' method on the newStore object to display its data in a table
   newStore.tableRender();
    // Call the 'tableRender' method on the 'storeTotal' object to update the total row in the table
  storeTotal.tableRender();
  // Add the newStore object to the 'storeArray' for future reference
  storeArray.push(newStore);
   // Call the 'storeTotal' function to update the total values in the table
   storeTotal();
}

//form.addEventListener('Submit', handleSubmit);

// Sample store data with min/max hourly customers and average cookies per customer

//Array for hours of ....
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

// Get the HTML element with ID "storeProfiles" to later add table rows and cellsconst tableElement = document.getElementById("storeProfiles");
const tableElement = document.getElementById("Table");
// Store constructor function, creates an object with store data and related methods
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHourArray = [];
    this.dailyTotal = 0;
    this.generateRandomNumberOfC = function () {
/**Math.random(): This function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
(this.max - this.min + 1): This calculates the range of possible integer values, by subtracting the minimum value from the maximum value and adding 1. This ensures that the maximum value is also included in the range.
Math.random() * (this.max - this.min + 1): This multiplies the random floating-point number (from step 1) by the range of possible integer values (from step 2). The result is a random floating-point number between 0 (inclusive) and the range (exclusive).
 */
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  //In summary, this function calculates the number of cookies sold per hour for a given store and updates the store's cookiesPerHourArray and dailyTotal properties accordingly.
    this.calculateCookiesPerHour = function () {
// A for loop iterates over each hour in the hours array. The loop counter i represents the index of the current hour being processed.
 //Inside the loop, the function calls this.generateRandomNumberOfC() to generate a random number of customers for the current hour. This value is stored in the variable randomNumberOfCustomers.
       for (let i = 0; i < hours.length; i++) {
 //It then calculates the number of cookies sold in that hour by multiplying randomNumberOfCustomers by the average number of cookies sold per customer (this.avg). This value is rounded to the nearest whole number using Math.round and stored in the variable cookiesSoldPerHour.
        let randomNumberOfCustomers = this.generateRandomNumberOfC();
 //The calculated cookiesSoldPerHour value for the current hour is then added (pushed) to the cookiesPerHourArray. This array will store the number of cookies sold for each hour.
        let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
 //The cookiesSoldPerHour value is also added to the dailyTotal property of the store object, which keeps a running total of the number of cookies sold throughout the day.
        this.cookiesPerHourArray.push(cookiesSoldPerHour);
   //this is adding to dailytotal and staying in dailytotal
        this.dailyTotal += cookiesSoldPerHour;
      }
    };
 //In summary, this function renders a table row with the store's name as the first cell. It also calculates the number of cookies sold per hour for the store by calling this.calculateCookiesPerHour(). The remaining cells with the hourly sales data and daily total are not included in the code snippet you provided, but they would be added in the continuation of this function.
//This function, tableRender, is responsible for rendering the data of a store object as a table row in an HTML table. It performs the following steps:
    this.tableRender = function(){
//First, it calls the this.calculateCookiesPerHour() method, which calculates the number of cookies sold per hour for the store and updates the cookiesPerHourArray and dailyTotal properties.
      this.calculateCookiesPerHour();
//Then, it creates a new table row (tr) element by calling document.createElement("tr"). The created element is stored in the variable firstRow.      
      let firstRow = document.createElement("tr");
//The newly created table row (firstRow) is appended to the tableElement, which is the HTML table element in the DOM. This effectively adds the row to the table.      
      tableElement.appendChild(firstRow);
//After that, it creates a new table cell (td) element by calling document.createElement('td'). The created element is stored in the variable cityName.      
      let cityName = document.createElement('td');
//The textContent property of the cityName element is set to this.name, which is the name of the store. This adds the store's name as the content of the table cell.      
      cityName.textContent = this.name;
//Finally, the cityName table cell is appended to the firstRow table row. This effectively adds the store name as the first cell in the row.      
      firstRow.appendChild(cityName);
//This for loop iterates over the hours array and adds a table cell (td) to the table row for each hour, displaying the number of cookies sold during that hour. Here's a breakdown of the loop:
//The loop starts with a counter variable i initialized to 0. It will run as long as i is less than the length of the hours array, incrementing i by 1 after each iteration.     
        for(let i = 0; i < hours.length; i++){
//n each iteration, a new table cell (td) element is created by calling document.createElement('td'). The created element is stored in the variable firstElem.          
        let firstElem = document.createElement('td');
//The textContent property of the firstElem table cell is set to the value of this.cookiesPerHourArray[i]. This value represents the number of cookies sold during the hour corresponding to the current value of i. The value is inserted as a template literal (${this.cookiesPerHourArray[i]}) so that it can be easily included as a string.        
        firstElem.textContent = `${this.cookiesPerHourArray[i]}`
//The commented-out lines of code are not executed, but they show that previously the daily total was being calculated in this loop. However, this calculation has been moved to the calculateCookiesPerHour() function, so these lines are not needed anymore.
//The firstElem table cell, containing the number of cookies sold during the current hour, is appended to the firstRow table row.
        firstRow.appendChild(firstElem);
      }
//These lines of code create a new table cell (td) to display the store's daily total number of cookies sold and append it to the table row (firstRow). Here's a step-by-step breakdown:
//let total = document.createElement('td');: This line creates a new table cell (td) element using the document.createElement() method and stores the created element in the variable total.
      let total = document.createElement('td');
//total.textContent = this.dailyTotal;: This line sets the textContent property of the total table cell to the value of this.dailyTotal. The dailyTotal property represents the total number of cookies sold by the store in a day.      
      total.textContent = this.dailyTotal
 //firstRow.appendChild(total);: This line appends the total table cell to the firstRow table row. This effectively adds the store's daily total number of cookies sold as the last cell in the row.     
      firstRow.appendChild(total);
    }
  }

//The renderHours() function is responsible for creating and appending table cells (td) to display the hours and the "Daily Location Total" header in the table. Here's a breakdown of the code:
function renderHours(){
// This line creates an empty table cell (td) element using the document.createElement() method and stores it in the variable tdElem. This empty cell is used as a placeholder for the top-left corner of the table.  
  let tdElem = document.createElement('td');
// This line appends the empty tdElem table cell to the tableElement, which is the HTML table element in the DOM.  
//tableElement.appendChild(tdElem);
  //let thElem = document.createElement('th');
 //tr.appendChild(thElem);
 // This for loop iterates over the hours array. The loop counter i represents the index of the current hour being processed. 
 for(let i = 0; i < hours.length; i++){
  
    let thElem = document.createElement('td');
    total.textContent = `Daily Location Total`
    tableElement.appendChild(total);
  }
  //only makes total head off to the right
  let total = document.createElement('td');
//After the loop, a new table cell (td) element is created and stored in the variable total.  
//The textContent property of the total table cell is set to the string "Daily Location Total". This will serve as the header for the column displaying the daily total of cookies sold for each location. 
  total.textContent = "Daily Location Total"
//The total table cell is appended to the tableElement.  
  tableElement.appendChild(total)
}

//this will calculate the number of cookies for each hour
function storeTotal(){
let footer = document.querySelector('tfoot');
if (footer){
  footer.innerHTML = '';
}
footer = document.createElement('tfoot');
tableElement.appendChild(footer);
//I need to add all numbers of each index of each city

let timeTotal = document.createElement('td');
timeTotal.textContent = "Total";
footer.appendChild(timeTotal);


let totalOfTotals = 0;
for(let i = 0; i < hours.length; i++){
  let hourly = 0;
  for(let j = 0; j < storeArray.length; j++){
    hourly += storeArray[j].cookiesPerHourArray[i];
    totalOfTotals += storeArray[j].cookiesPerHourArray[i];
  }
  let timeTotal2 = document.createElement('td');
  timeTotal2.textContent = `${hourly}`;
  tableElement.appendChild(timeTotal2);
}
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${totalOfTotals}`;
  footer.appendChild(timeTotal3);
}

// Instances of our constructor
let Seattle = new Store('Seattle', 23, 65, 6.3); //'new'   properties and inside are values argument
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);
// array key to create the footer!
let storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];
/**These lines of code call various functions to render the table displaying the cookies sales data for each store location. Here's a breakdown of what each function call does:renderHours();:
 *This function call renders the hours and the "Daily Location Total" header in the table. It creates and appends table cells (td) for each hour and the "Daily Location Total" header to the tableElement.
Seattle.tableRender();: This function call renders the table row for the Seattle store. It calculates the number of cookies sold per hour and the daily total for the Seattle store, 
then creates and appends table cells (td) containing the data to the tableElement. */
renderHours();
Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
storeTotal();

