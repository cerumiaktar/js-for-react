// using map
const products = [
    {name: 'laptop', price:20000, brand:'lenovo', color: 'silver'},
    {name: 'phone', price:70000, brand:'iphone', color: 'blue'},
    {name: 'watch', price:2000, brand:'shein', color: 'yello'},
    {name: 'sunglass', price:3000, brand:'lenovo', color: 'black'},
    {name: 'camera', price:20000, brand:'canon', color: 'silver'}
];

const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

const colors = products.map(product => product.color);
console.log(colors);

// foreach
products.forEach(product => console.log(product ));

// filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// find
const special = products.find(product => product.name.includes('n'));
console.log(special);