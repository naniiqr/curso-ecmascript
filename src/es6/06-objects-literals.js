function newUser(user, age, country) {
    return {
        user,
        age, 
        country,
        id: uId
    }
}

console.log(newUser("naniiqr", 28, "VE", 1));