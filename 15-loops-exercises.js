

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i += 1) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let total = 0;
for (let i = 1; i <= 100; i += 1) {
  total += i;
}
console.log('1..100 =', total);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i += 1) {
  if (i % 2 === 0) console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const names = ['Ana', 'Luis', 'Marta', 'Pedro'];
for (const name of names) {
  console.log(name);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const text = 'JavaScript es divertido';
let vowelsCount = 0;
for (const char of text.toLowerCase()) {
  if ('aeiou'.includes(char)) vowelsCount += 1;
}
console.log('Vocales:', vowelsCount);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbers = [2, 3, 4, 5];
let product = 1;
for (const number of numbers) {
  product *= number;
}
console.log('Producto:', product);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i += 1) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
const original = 'JavaScript';
let reversed = '';
for (let i = original.length - 1; i >= 0; i -= 1) {
  reversed += original[i];
}
console.log('Invertido:', reversed);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib1 = 0;
let fib2 = 1;
const fibonacci = [fib1, fib2];
for (let i = 2; i < 10; i += 1) {
  const next = fib1 + fib2;
  fibonacci.push(next);
  fib1 = fib2;
  fib2 = next;
}
console.log('Fibonacci:', fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const values = [3, 12, 8, 17, 5, 21];
const greaterThanTen = [];
for (const value of values) {
  if (value > 10) greaterThanTen.push(value);
}
console.log('Mayores que 10:', greaterThanTen);