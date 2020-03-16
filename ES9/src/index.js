/**
 * Spread Operator
 */

const obj = {
  name: "David",
  age: 24,
  country: "CABA"
};

const { name, ...all } = obj;
console.log(name, all);

/**
 *
 */

const obj1 = {
  name: "David",
  age: 24
};
const obj2 = {
  ...obj1,
  country: "CABA"
};
console.log(obj2);

/**
 *
 */

const helloWord = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hey!! promise resolved successfully"), 3000)
      : reject(new Error("Test error :("));
  });
};

helloWord()
  .then(response => console.log(response))
  .catch(error => console.error(error))
  .finally(() => console.warn("Execution finished"));


/**
 * regex
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-12-30');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);