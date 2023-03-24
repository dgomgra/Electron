// Destructing de objetos y de arrays
// Sin desectruccturar
var persona = {
  nombre: 'David',
  apellido: 'Gómez',
  hijos: {
    numero: 2
  }
};
let nombre = persona.nombre;
let apellido = persona.apellido;
let hijos = persona.hijos.numero;
console.log(`${nombre} ${apellido} ${hijos}`);

// Hacienso uso del destructin de objetos
var person = {
  name: 'David',
  surname: 'Gómez',
  children: {
    number: 2
  }
};
const {name, surname} = person;
const {children: {number}} = person;
console.log(`${name} ${surname}`);
console.log(`${number}`);

// Destrucctin Arrays
var array = [1,2,3,4,5,6];
let [x,y,,z] = array; // para saltar un valor
console.log(x, y, z);
let [uno,dos,,cuatro,,,,nueve=88] = array; // una variable con valor por defecto

console.log(uno, dos, cuatro, nueve); 
