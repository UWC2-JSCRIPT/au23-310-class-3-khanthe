// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) => {
  let total = 0;
  let taxRate = 0.095;
  let tax = 0;
  items.forEach((item)=>{
      total += item.price;
      console.log(`${item.descr} - $${item.price}`);
  });
  console.log(`-----------------`);
  console.log(`Subtotal: $${total}`);
  tax = (total * taxRate);
  console.log(`Tax (${(taxRate * 100)}%): $${parseFloat(tax).toFixed(2)}`);
  console.log(`-----------------`);
  total += tax;
  console.log(`Total: $${parseFloat(total).toFixed(2)}`);
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
