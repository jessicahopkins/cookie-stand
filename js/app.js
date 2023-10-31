console.log("Hello");

const seattle = {
  city: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  salesData: [],

  getRandomNumCustomer: function() {
    return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer );

  },

  simulateSales: function() {
    this.salesData = [];
    for (let hour = 6; hour <= 19; hour++) {
      const customers = this.getRandomNumCustomer();
      const cookiesSold = Math.round(customers * this.avgCookie);
      this.salesData.push({hour, cookiesSold });
    }

  },
};

seattle.simulateSales();

console.log(`Simulated sales in ${seattle.city} from 6am to 7pm:`);
seattle.salesData.forEach(item => {
  const time = item.hour === 12 ? '12pm' : item.hour > 12 ? `${item.hour - 12}pm` : `${item.hour}am`;
  console.log(`${time}: ${item.cookiesSold} cookies`);
});


let randomCustomers = seattle.getRandomNumCustomer();
console.log(`Random number of customers in ${seattle.city}: ${randomCustomers}`);

const tokyo = {
  city: "Tokyo",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  salesData: [],
};

const dubai = {
  city: "Dubai",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  salesData: [],
};

const Paris = {
  city: "Paris",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  salesData: [],
};

const Lima = {
  city: "Lima",
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  salesData: [],
};




