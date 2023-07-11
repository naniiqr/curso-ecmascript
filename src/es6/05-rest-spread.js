// arrays destructuring 

let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring 

let user = {username: 'Daniella', age: 28 };
let { username, age } = user;
console.log(username, age);

// spread operator 
let person = { name: 'oscar', age: 28 };
let country = 'mx';

let data = {id: 1, ...person, country };
console.log(data);

// rest

function sun(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sun(1, 1, 2, 3)

