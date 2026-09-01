// 1. Crea una variable para cada operación aritmética
let b = 7
let a = 5

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División 
console.log(a % b); // Módulo      
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let total = 10;
total += 5
console.log(total);
let difference = 20;
difference -= 7;
console.log(difference);
let product = 3;
product *= 4;
console.log(product);   
let quotient = 40;
quotient /= 5;
console.log(quotient);
let remainder = 17;
remainder %= 5;
console.log(remainder);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 === 5);
console.log(10 > 7);
console.log(3 <= 3);
console.log('a' !== 'b');
console.log(8 >= 8);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 === 6);
console.log(2 > 3);
console.log(9 <= 8);
console.log('a' === 'A');
console.log(7 >= 8);

// 5. Utiliza el operador lógico and
const isAdult = true;
const hasID = true;
console.log(isAdult && hasID);

// 6. Utiliza el operador lógico or
const hasTicket = false;
const hasGuestPass = true;
console.log(hasTicket || hasGuestPass);

// 7. Combina ambos operadores lógicos
const isMember = true;
const isLogged = false;
const canAccess = isMember && (isLogged || true);
console.log(canAccess);

// 8. Añade alguna negación
const isNotReady = false;
console.log(!isNotReady);

// 9. Utiliza el operador ternario
const age = 20;
const status = age >= 18 ? 'adulto' : 'menor';
console.log(status);

// 10. Combina operadores aritméticos, de comparáción y lógicas
const x = 10;
const y = 5;
const z = 2;
const result = (x + y) > z && (x - y) >= 3;
console.log(result);