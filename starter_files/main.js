// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.


function question1() {
  // Answer:
  let avg = "";
  for (let i = 0; i < data.price.length; i++) {
    (avg += data.price[i])
  }
  avg = avg / data.price.length;
  console.log(question1)
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2() {
  // Answer:
  let midPricing = [];
  for (let i = 0; i < data.price.length; i++) {
    if (data.price[i] >= 14 && data.price[i] <= 18) {
      midPricing.push(data.title[i]);
    }
  }
  console.log(question2);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let answer3 = [];
  for (let i = 0; i < data.currency_code.length; i++) {
    if (data.currency_code[i] === "GBP") {
      answer3.push(data.title + data.price)
    }
  }
  console.log(question3);
}



// 4: Display a list of all items who are made of wood.


function question4() {
  // Answer:
  let woodProducts = [];
  for (let i = 0; i < data.materials.length; i++) {
    if (data.materials[i] === "wood") {
      woodProducts.push(data.title);
    }
  }
  console.log(question4);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

function question5() {
  // Answer:
  let itemComponents = [];
  for (i = 0; i < data.materials.length; i++) {
    if (data.materials[i].length >= 8) {
      itemComponents.push(data.title[i], data.materials[i].length, data.items[i]);
    }
  }
console.log(question5);
}



// 6: How many items were made by their sellers?

function question6() {
  // Answer:
  let homeMade = [];
  for (let i = 0; i < data.length; i++) {
    if (data.who_made[i] === "i_did") {
      homeMade.push(data.item[i]);
    }
  }
  return homeMade.length

}
console.log(homeMade.length);
