//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('.h1'));
//console.log(form);


//Multiple element
//console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));


const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Alexandra';
ul.lastElementChild.innerHTML = '<h4>Hello</h4)';

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('.msg');
const msg = document.querySelector('#my-form');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ==='') {
        msg.classList.add ('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('success');
    }
}


//alert('Hello World');
console.log('Hello World');

console.error('This is an error');
console.warn('This is a warning');

//let, const
let score = 30;

console.log(score);

//String, Numbers, Boolean, null(nothing in it), undefined (all directly assigned to memory)
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof age);

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//const s = 'Hello World';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
//console.log(s.substring(0, 5));
//console.log(s.split(''));

const s = 'hello, world';
console.log(s.split(', '));

//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['bananas', 'oranges', 'pineapples'];
fruits[3] = 'grapes';
fruits.push('melons');
fruits.unshift('water-melons');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('pineapples'));
console.log(fruits);

//objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '2Treublaan',
        city: 'DenHaag',
        state: 'Netherlands',
    }
}

console.log(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.city);

const {firstName, lastName } = person;

person.email = 'john@gmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with brother',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Swimming-pool',
        isCompleted: true
    },
];
console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i = 0; i <=10; i++) {
    console.log(i);
    console.log('For Loop Number: ${i}');
}

//While
//let i = 0;
//While(i < 10) {
    //console.log('While Loop Number: ${1}');
    //i++;
//}

for(let todo of todos) {
    console.log(todo.id);
};

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);

const a = 6;
const b = 11;

if(a >5 && b > 10) {
    console.log('x is more than 5 or y is more than 10');
}

//ternary operator
const d = 12;
const color = d > 10 ? 'red' : 'blue';
console.log(color);

//switches
const c = 12;
const size = 'big';

switch(size) {
    case 'big':
        console.log('size is big');
        break;
        case 'small':
        console.log('size is small');
        break;
        default:
            console.log('size is NOT big or small');
            break;
}

//Functions


function addNumbs (num1,num2,num3) {
    console.log(num1+num2+num3);
}
addNumbs(5,2,3);

const addNums = (num1 = 1, num2 = 1) => {return num1 + num2;
}
console.log(addNums (5,5));

//object-oriented programming

//Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    //this.getFullName = function () {
        //return `${this.firstName} ${this.lastName}`;
}
//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1981');
const person2 = new Person('Mary', 'Smith', '11-27-1981');

console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
//console.log(person1.getFullName());

//Class
class Person1 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);  
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
        console.log(person1);