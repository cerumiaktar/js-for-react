// template string
const quantities = [23, 45, 37, 89];
const students = {
    name: 'rumi',
    age: 26,
    qualification: 'BSc in CSE', 
    books: ['del karnegi', 'miracle morning', 'seser kobita']
};

const about = `${students.name}, ${students.age} quantity of this item ${quantities[2]}, she read books this books name is ${students.books[1]}`;
console.log(about);

// How to declare Arrow Function
 const numbers = () => 70;
const addNumbers = num => num + 65;
// multiline arrow function
const createNew = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

const result = createNew(10, 20);
console.log(result);

// array method
const productDetails = [
    {name: 'phone', price: 109000, brand: 'iphone', color: 'rose gold'},
    {name: 'laptop', price: 60000, brand: 'hp', color: 'blue'},
    {name: 'watch', price: 10000, brand: 'iphone', color: 'black'},
    {name: 'camera', price: 200000, brand: 'iphone', color: 'gray-black'},
    {name: 'sunglass', price: 10000, brand: 'ribon', color: 'gold'},
    {name: 'mobile', price: 10000, brand: 'note 12', color: 'rose gold'}
]

// map method
const brands = productDetails.map(product => product.brand)
// console.log(brands);

// forEach
productDetails.forEach(product => console.log(product.price));

// filter
// find

// array destructuring (serial maintain korte hbe)
const numberDestructure = [20, 40];
const [x, y] = numberDestructure;
console.log(x, y);

// object Destructuring (serial maintain korbe na)

const {name, age} = {name: 'rumi', age: 30};
console.log(name, age);
