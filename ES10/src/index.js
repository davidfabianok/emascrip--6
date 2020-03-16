/**
 * Flat
 */
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

/**
 * FlatMap
 */
const array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap(value => [value, value * 2]));

// TRIM START
let string = '      HELLO';
console.log(string.trimStart());
// TRIM END
let string2 = 'HELLO      ';
console.log(string2.trimEnd());


// TRY AND CACTH WITHOUT error
// es7
try { }
catch (error) { console.log(error) }
// es10
try { }
catch { console.log(error) }


// ENTRIES TO OBJECTS
let entries = [['nombre', 'jesus'], ['edad', 22]]
obj = Object.fromEntries(entries)
console.log(entries)
console.log(obj)


// DESCRIPTION IN SIMBOL
let s = Symbol('Esta es la descripcion del simbolo')
console.log(s.description);