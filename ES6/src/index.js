"use stric";

function presentation(name = "David", surname="fabian", direction="CABA"){
    console.log(name, surname, direction);
}

presentation("Anahi", "Paola", "CABA")

// DESTRUCTURIN

let Persona = {
    'name': 'David',
    'surname': 'Fabian',
    'country': 'CABA'
}

let { name, surname, country } = Persona;
console.log(name, surname, country);


//SPREAD OPERATOR

let Animales1 = ['perro', 'gato'];
let Animales2 = ['mono', 'loro'];
let allAnimales = [...Animales1, ...Animales2];
console.log(allAnimales);

// PROMESAS
function devolverPromasa(){
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("Todo piola")
        } else {
            reject(new Error('salio mal chabon'))
        }
    });
}

devolverPromasa()
.then(responce=>console.log(responce))
.then(console.log("dinosaurio"))
.catch(error=>console.log(error))*/

/**
* Classes
*/

class Calculator{
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log('Calc Result -> ', calc.sum(2, 3));

/**
 * Modules
 */

/**otro archivo
  const hello = () => {
      return'Hello World!';
  };
  export default hello;
  */

import { hello } from './class4-module.js';
console.log('Hello Module -> ', hello());


/**
 * Generators
 */
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }

  if (true) {
    yield 'World!';
  }
}
const generatorHello = helloWorld();
console.log('generatorHello first call -> ', generatorHello.next().value);
console.log('generatorHello second call -> ', generatorHello.next().value);
console.log('generatorHello third call -> ', generatorHello.next().value);
