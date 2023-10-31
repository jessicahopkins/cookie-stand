const seattle = {
  name: "Seattle",
  hours: "6am - 7pm",
  phoneNumbers: ["123-456-7890"],
  location: "2901 3rd Ave #300, Seattle, WA 98121",
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    storeSection.classList.add("location")
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers;
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }
}

const tokyo = {
  name: "Tokyo",
  phoneNumbers: ["222-222-2222"],
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers[i];
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }
}

const dubai = {
  name: "Dubai",
  phoneNumbers: ["333-333-3333"],
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    storeSection.classList.add("location")
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers[i];
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }

}

const paris = {
  name: "Paris",
  phoneNumbers: ["444-444-4444"],
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    storeSection.classList.add("location")
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers[i];
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }
}

const lima = {
  name: "Lima",
  phoneNumbers: ["555-555-5555"],
  render: function() {
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    storeSection.classList.add("location")
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = this.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the phone numbers in the UL
    for( let i=0; i<this.phoneNumbers.length; i++ ) {
      const phoneItem = document.createElement('li');
      // Add the actual number, from the store object
      phoneItem.textContent = this.phoneNumbers[i];
      // Append that to the UL
      storeDataList.appendChild(phoneItem);
    }
  }
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


