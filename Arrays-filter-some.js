/* ARRAYS */

//Array Filter
const arrayOriginal = [1, 2, 3, 1, 2, 3]
console.log('Array Original: ')
console.table(arrayOriginal)

var listaDivisasSalarios = arrayOriginal.filter(quitarRepetidos)
console.log('Array Filtrado: ')
console.table(listaDivisasSalarios)

function quitarRepetidos(value, index, array) {
  return array.indexOf(value) === index;
}


//Array Some
const arrayOriginal2 = [1, 2, 3, 4, 5]
console.log('Array Original: ')
console.table(arrayOriginal2)

const condicion = (x) => x % 2 === 0
console.log('Condición 1: ' + arrayOriginal2.some(condicion))

const condicion2 = (x) => x === 8
console.log('Condición 1: ' + arrayOriginal2.some(condicion2))




