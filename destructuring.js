// array destructuring
const numbers = [23, 45];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [23, 45];

const [x, y] = numbers;

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(40,23));

// object destructuring
const employe = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    specification: {
        height: 65,
        weight:69,
        address: 'mohammadpur',
        drink: 'water'
    }
}

const {machine, ide} = employe;
const {weight, address} = employe.specification;