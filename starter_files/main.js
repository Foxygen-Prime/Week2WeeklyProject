// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.


function question1() {
  // Answer:
  let avg = "";
  for (let i = 0; i < data.length; i++) {
    (avg += data[i])
  }
  avg = avg / data.length;
}
console.log(avg)



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2() {
  // Answer:
  let midPricing = [];
  for (let i = 0; i < data.length; i++) {
    if (i >= 14 && i <= 18) {
      midPricing.push(data[i]);
    }
  }
}
console.log(midPricing);



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer: reDO AND SET UP A LOOP
  let answer3 = "";
  for (i = 0; i < data.length; i++) {
    if string.match(data.currency_code.
      "GBP") {
      answer3.push(data.title + data.price)
    }
  }
}
console.log(answer3);
//come back to this one, not sure what to do

// 4: Display a list of all items who are made of wood.

let woodProducts = [];

function question4() {
  // Answer:
  for (
    if i = 0; i < data.length; i++) {
    woodProducts.push(data.materials["wood"]);
  }

}
console.log(woodProducts);


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
let itemComponents = [];

function question5() {
  // Answer:
  for (i = 0; i < data.materials.length; i++) {
    if (data.materials[] >= 8) {
      itemComponents.push(data.title, data.materials.length, data.items);
    }
  }

}
console.log(itemComponents);


// 6: How many items were made by their sellers?
let homeMade = [];

function question6() {
  // Answer:
  for (
    if i = 0; i < data.length; i++) {
    if (data.
      "who_made" === "i_did") {
      homeMade.push(data[i]);
    }
  }
  return homeMade.length

}
console.log(homeMade.length);
