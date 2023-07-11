var lastname = "Quijada";
lastname = "Esperante";
console.log(lastname);

let fruit = "Banana";
fruit = "Coconut";
console.log(fruit);

const color = "white";
color = "Black";
console.log(color);

const fruits = () => {
    if(true) {
        var fruit1 = "coconut"; //function scope
        let fruit2 = "banana"; // block scope
        const fruit3 = "apple"; // block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruit();

