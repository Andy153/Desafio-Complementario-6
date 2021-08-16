var OrdenarNumeros = [10, 8, 9, 5, 3, 78, 23]


console.log(OrdenarNumeros.sort(function (a, b){
    return a - b;
}))

console.log(OrdenarNumeros.sort((a, b) => a - b ))