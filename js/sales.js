"use strict";
// Thanks to the code review from Brendan on 11/1 in class, I was able to model after his code to get this working.
let stores = [];
let totals = new Array(14);
totals.fill(0);

function City(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCust = [];
  // total cookies for hour
  this.hourCookies = [];
  this.completeCookies = [];
  // total cookies for city
  this.totalCookies = [];
  this.totalSales = 0;
}

let seattle = new City('Seattle',23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

City.prototype.cookieTime = function(){
  for(let i = 0; i<14;i++){
    let randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.randomCust.push(randCust);
    let estimate = (Math.floor(randCust * this.avgCookie));
    this.hourCookies.push(estimate);
    this.totalSales += estimate;
    totals[i] += estimate;
  }

};

City.prototype.render = function(){
  let body = document.getElementById("tableBody");
  let cityRow = document.createElement('tr');
  body.appendChild(cityRow);


  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  cityRow.appendChild(cityName);


  for(let i = 0; i < this.hourCookies.length; i ++){
    let cell = document.createElement('td');
    cell.textContent = (this.hourCookies[i]);
    cityRow.appendChild(cell)
  }
  let cityTotal = document.createElement('td');
  cityTotal.textContent = this.totalSales;
  cityRow.appendChild(cityTotal);

};

let renderTotals = function(){

  let tableFooter = document.getElementById('tableFoot');
  let bottomTotal = document.createElement('tr');
  bottomTotal.textContent = 'Totals';
  tableFooter.appendChild(bottomTotal);


  for(let i = 0; i < totals.length; i++){
    let footCell;
    footCell = document.createElement('td');
    footCell.textContent = totals[i];
    bottomTotal.appendChild(footCell);
  }

  let dailyTotal = (seattle.totalSales + tokyo.totalSales + dubai.totalSales + paris.totalSales + lima.totalSales);

  let totalAll = document.createElement("td");
  totalAll.textContent = dailyTotal;
  bottomTotal.appendChild(totalAll);
};

seattle.cookieTime();
tokyo.cookieTime();
dubai.cookieTime();
paris.cookieTime();
lima.cookieTime();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderTotals();


console.log(totals);


// Original object literals and code to add estimates to list

// const seattle = {
//   name: "Seattle",
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   averageCookies: 6.3,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
//   }
// }

// const tokyo = {
//   name: "Tokyo",
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   averageCookies: 1.2,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
//   }
// }

// const dubai = {
//   name: "Dubai",
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   averageCookies: 3.7,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
//   }
// }

// const paris = {
//   name: "Paris",
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   averageCookies: 2.3,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
//   }
// }

// const lima = {
//   name: "Lima",
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   averageCookies: 4.6,
//   estimatedSales: [],
//   render: function() {
//     renderStore(this);
//   },
//   estimate: function() {
//     this.estimatedSales = estimate(this);
//   }
// }

// function random(min,max) {
//   return Math.floor( Math.random() * (max-min+1)) + min;
// }

// Based on the min/max and average
// return an array of estimated sales per hour
// function estimate(store) {
//   let estimatedSales = [];
  // loop over the hours array
  // for each, do the math and add that to the estimated sales
//   for( let i=0; i < hours.length; i++ ) {
//     const numCustomers = random( store.minCustomersPerHour, store.maxCustomersPerHour);
//     const hourlySales = Math.ceil(numCustomers * store.averageCookies);
//     estimatedSales.push( hourlySales );
//   }
//   return estimatedSales;
// }

// function renderStore( store ) {

//   console.log("In the renderStore(), store is: ", store);

//   // Looks for any element with an id="root", i.e.
//   // <section id="root">
//   const rootElement = document.getElementById("root");

//   // Create a new, empty section for a store
//   const storeSection = document.createElement("section");
//   rootElement.appendChild(storeSection);

//   const firstTitle = document.createElement("h2");
//   // Give it some content
//   firstTitle.textContent = store.name;
//   // Add it to the page, as a child of rootElement
//   storeSection.appendChild(firstTitle);

//   // Add a unordered list to show the address...
//   const storeDataList = document.createElement("ul");
//   storeSection.appendChild(storeDataList);

//   // Put the estimates in the UL
//   let total = 0;
//   for( let i=0; i < hours.length; i++ ) {
//     total += store.estimatedSales[i];
//     const est = document.createElement('li');
//     // Add the actual number, from the store object
//     est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
//     // Append that to the UL
//     storeDataList.appendChild(est);
//   }

//   const totalElement = document.createElement('li');
//   totalElement.textContent = `Total: ${total}`;
//   storeDataList.appendChild(totalElement);

// }


// // Way #1
// seattle.estimate();
// seattle.render();

// tokyo.estimate();
// tokyo.render();

// dubai.estimate();
// dubai.render();

// paris.estimate();
// paris.render();

// lima.estimate();
// lima.render();

// // Way #2
// // Make an array of stores and loop them.

// // Call the render function with different objects
// // let stores = [ seattle, tokyo ];

// // // Loop over the stores
// // for( let i=0; i < stores.length; i++ ) {
// //   stores[i].estimate();
// //   stores[i].render();
// // }
// }

