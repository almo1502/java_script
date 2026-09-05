// 1. Concatena dos cadenas de texto
const greeting = 'Hola';
const name = 'alejandro';
console.log(greeting + ' ' + name);

// 2. Muestra la longitud de una cadena de texto
const phrase = 'JavaScript';
console.log(phrase.length);

// 3. Muestra el primer y último carácter de un string
const text = 'Programación';
console.log(text[0], text[text.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
const message = 'Programacion Cavirey';
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
const multiLine = 'Atun\n Salmon\nCachalote\nPez espada';
console.log(multiLine);

// 6. Interpola el valor de una variable en un string
const user = 'Q yo se las coloreo';
console.log(`Pintelas, ${user}!`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
const spaces = 'Para mañana hay tarea de programación web';
console.log(spaces.replace(/\s+/g, '-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
const sentence = 'Hoy estudiaré ingles';
console.log(sentence.toLowerCase().includes('ingles'));

// 9. Comprueba si dos strings son iguales
const first = 'JavaScript';
const second = 'javascript';
console.log(first === second);

// 10. Comprueba si dos strings tienen la misma longitud
const left = 'abc';
const right = 'defg';
console.log(left.length === right.length);