let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
  name: "Seattle",
  phoneNumber: "123-456-7890",
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookies: 6.3,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
  }
}

const tokyo = {
  name: "Tokyo",
  phoneNumber: "222-222-2222",
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookies: 1.2,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
  }
}

// const dubai = {
//   city: "Dubai",
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookie: 3.7,
//   salesData: [],
// };

// const Paris = {
//   city: "Paris",
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookie: 2.3,
//   salesData: [],
// };

// const Lima = {
//   city: "Lima",
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookie: 4.6,
//   salesData: [],
// };

function random(min,max) {
  return Math.floor( Math.random() * (max-min+1)) + min;
}

// Based on the min/max and average
// return an array of estimated sales per hour
function estimate(store) {
  let estimatedSales = [];
  // loop over the hours array
  // for each, do the math and add that to the estimated sales
  for( let i=0; i < hours.length; i++ ) {
    const numCustomers = random( store.minCustomersPerHour, store.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * store.averageCookies);
    estimatedSales.push( hourlySales );
  }
  return estimatedSales;
}

function renderStore( store ) {

  console.log("In the renderStore(), store is: ", store);

  // Looks for any element with an id="root", i.e.
  // <section id="root">
  const rootElement = document.getElementById("root");

  // Create a new, empty section for a store
  const storeSection = document.createElement("section");
  rootElement.appendChild(storeSection);

  const firstTitle = document.createElement("h2");
  // Give it some content
  firstTitle.textContent = store.name;
  // Add it to the page, as a child of rootElement
  storeSection.appendChild(firstTitle);

  // Add a unordered list to show the address...
  const storeDataList = document.createElement("ul");
  storeSection.appendChild(storeDataList);

  // Put the estimates in the UL
  let total = 0;
  for( let i=0; i < hours.length; i++ ) {
    total += store.estimatedSales[i];
    const est = document.createElement('li');
    // Add the actual number, from the store object
    est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
    // Append that to the UL
    storeDataList.appendChild(est);
  }

  const totalElement = document.createElement('li');
  totalElement.textContent = `Total: ${total}`;
  storeDataList.appendChild(totalElement);

}


// Way #1
seattle.estimate();
seattle.render();

tokyo.estimate();
tokyo.render();

// Way #2
// Make an array of stores and loop them.

// Call the render function with different objects
// let stores = [ seattle, tokyo ];

// // Loop over the stores
// for( let i=0; i < stores.length; i++ ) {
//   stores[i].estimate();
//   stores[i].render();
// }


