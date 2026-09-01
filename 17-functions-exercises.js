


// 1. Crea una función que reciba dos números y devuelva su suma
function add(a, b) {
  return a + b;
}
console.log('Suma:', add(5, 7));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function getMax(numbers) {
  return Math.max(...numbers);
}
console.log('Máximo:', getMax([3, 9, 12, 4]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function countVowels(text) {
  return [...text.toLowerCase()].filter((char) => 'aeiou'.includes(char)).length;
}
console.log('Vocales:', countVowels('JavaScript'));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function toUpperCaseArray(items) {
  return items.map((item) => item.toUpperCase());
}
console.log('Mayúsculas:', toUpperCaseArray(['hola', 'mundo']));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log('Es primo 7:', isPrime(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function commonElements(first, second) {
  return [...new Set(first.filter((item) => second.includes(item)))];
}
console.log('Comunes:', commonElements([1, 2, 3, 4], [3, 4, 5, 6]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0).reduce((sum, current) => sum + current, 0);
}
console.log('Suma pares:', sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function squareNumbers(numbers) {
  return numbers.map((number) => number ** 2);
}
console.log('Cuadrados:', squareNumbers([2, 3, 4]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseWords(text) {
  return text.split(' ').reverse().join(' ');
}
console.log('Palabras invertidas:', reverseWords('JavaScript es genial'));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(number) {
  if (number < 0) return 'No definido';
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
}
console.log('Factorial:', factorial(5));