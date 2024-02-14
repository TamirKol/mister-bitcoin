export const userService = {
    getUser,
}
const user = {
    name: "Tamir kol",
    balance: 100,
    transactions: []
}

function getUser(){
    return user
}