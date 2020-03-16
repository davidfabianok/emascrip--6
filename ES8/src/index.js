/**
 * Object.entries
 * *Devuelve un array con los elementos del objeto
 */

const data = {
  frontend: "David",
  backend: "Fabian",
  desing: "Choque"
};

let entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/**
 *  Object.values
 * * Devuelve un array con los valores de cada elemento del objeto
 */

const data = {
  frontend: "David",
  backend: "Fabian",
  desing: "Choque"
};

let values = Object.values(data);
console.log(values);
console.log(values.length);

/**
 * padStart: Agrega caracteres a un string al inicio
 * padEnd: Agrega caracteres a un string al final
 */

let string = "David";
console.log(string.padStart(8, "Hi "));
console.log(string.padEnd(8, " Ok"));

/**
 * ASYNC AND AWAIT
 */

const myPromise = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("NICE!!"), 3000)
      : reject(new Error("The end!!!"));
  });
};

const myAsync = async () => {
  const resultPromise = await myPromise();
  console.log(resultPromise);
};

myAsync();

const anotherAsync = async () => {
    try {
        const resultPromise = await myPromise();
        console.log(resultPromise);
    } catch (error) {
        console.error(error);        
    }
}

anotherAsync()