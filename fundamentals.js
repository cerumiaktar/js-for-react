// How to declare a variable using let and const
const fatherName = 'Jhone';
let season = 'rainy';
season = 'winter';

// How to write condition..6type condition(<, >, ===, !==, <=, >=)
// multiple conditions: &&, ||

if(fatherName === 'jhone' || season === 'rainy'){
    console.log()
}
else if(fatherName === 'Jhone'){
    console.log()
}
else{
    console.log()
}

// How to declare array
// index, How to set a value using index
// length,push,
const numbers = [12, 13, 14, 15]
numbers[0] = 57;

// Loop (for loop and while loop)
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    confirm.log(number);
}

// function

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(44, 23);

// object
// 3 ways to access property by name 
const student = {
    name: 'rumi',
    age: 26,
    movies: ['']
}

const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via property name in a variable