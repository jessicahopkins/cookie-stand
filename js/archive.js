// Original object literals (from lab 06) and code to add estimates to list on Sales Data page.

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
