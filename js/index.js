// for (let i = 100; i >= 0; i--) {
//   if (i % 2 === 0 && i % 10 !== 0) {
// document.write(i + '<br>');
//   }
// }

let products = ['teslax', 'teslay', 'BMW'];
products[3] = 'zaz';
products.push('VW', 'Opel');
products[6] = 'Fiat';
products.push('Mazda');
console.log(products.length);

for (let i = 0; i < products.length; i++) {
    if (products[i] !== undefined)
    console.log(products[i]);
}
