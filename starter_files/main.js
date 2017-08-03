// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

function question1() {
  // Answer:
let avg = 0;
  for (let i = 0; i < data.length; i++) {
    (avg += data[i].price);
  }
  avg = avg / data.length;
  console.log(question1)
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2() {
  // Answer:
  let midPricing = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      midPricing.push(data[i].title)
    }
  }
  console.log(question2);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let answer3 = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      answer3.push(data.title + data.price)
    }
  }
  console.log(question3);
}



// 4: Display a list of all items who are made of wood.

function question4() {
  // Answer:
  let woodProducts = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials === "wood") {
      woodProducts.push(data.title)
    }
  }
  console.log(question4);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

function question5() {
  // Answer:
  let itemComponents = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].length >= 8) {
      itemComponents.push(data[i].title, data[i].materials.length, data[i].items);
    }
  }
console.log(question5);
}

// 6: How many items were made by their sellers?

function question6() {
  // Answer:
  let homeMade = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      homeMade.push(data[i].item)
    }
  }
  return homeMade.length;

}
console.log(question6);
