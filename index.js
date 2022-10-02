// run `node index.js` in the terminal
function getFinalPrice(price: number, discount: number) {
  return price - price/discount;
}
 
console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(100, "10%"));

console.log(`Hello Node.js v${process.versions.node}!`);
