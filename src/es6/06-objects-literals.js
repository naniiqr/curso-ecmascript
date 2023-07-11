function newUser(user, age, country, uId) {
    return {
        user,
        age, 
        country,
        id: uId //asi era anteriormente, se agregan los mismos valores a las variables.
    }
}

console.log(newUser("naniiqr", 28, "VE", 1));