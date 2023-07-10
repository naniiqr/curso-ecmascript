function newUser(name, age, country) {
var name = name || "Daniella"
var age = age || 28
var country = country || "Vzla"

console.log(name, age, country);
}

newUser()
newUser("Felix", 31, "Vzla" )

CAMBIO

function newAdmin(name = "Oscar", age = 45, country = "CO") {
    console.log(name, age, country);
}

newAdmin()
newAdmin("Ana", 19, "PE")
