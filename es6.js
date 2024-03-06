// Template String
const numbers = [12, 24, 46, 78];
const student = {
    name: 'allu',
    age: 32,
    movies: ['king kong', 'ramaiya']
};

// Template string
const about = `My Name is ${student.name} age of ${student.age} 
has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// arrow function
const getfiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = numbers;
const NewNumbers = [...numbers];

// numbers.push(99);

// console.log(newNumbers);
// console.log(numbers);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 99];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
