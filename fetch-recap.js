// JSON, stringify, parse
const student = {
    name: 'allu',
    age: 32,
    movies: ['king kong', 'ramaiya']
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch
fetch('url')
    .then(res =>res.json())
    .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
// const values = object.values(student);

// for 
const numbers = [23, 45, 46, 67, 23];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


const products = [
    {name: 'laptop', price:20000, brand:'lenovo', color: 'silver'},
    {name: 'phone', price:70000, brand:'iphone', color: 'blue'},
    {name: 'watch', price:2000, brand:'shein', color: 'yello'},
    {name: 'sunglass', price:3000, brand:'lenovo', color: 'black'},
    {name: 'camera', price:20000, brand:'canon', color: 'silver'}
];

const newProduct = {name: 'webcam', price:10000, brand:'canon', color: 'gold'};

// copy products array and then add newProducts
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');