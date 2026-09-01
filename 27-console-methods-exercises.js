
// 1. Crea una función que utilice error correctamente
function logErrorExample() {
  console.error('Este es un error de ejemplo');
}
logErrorExample();

// 2. Crea una función que utilice warn correctamente
function logWarnExample() {
  console.warn('Este es un aviso importante');
}
logWarnExample();

// 3. Crea una función que utilice info correctamente
function logInfoExample() {
  console.info('Esto es información útil');
}
logInfoExample();

// 4. Utiliza table
const users = [
  { name: 'Ana', age: 25 },
  { name: 'Luis', age: 30 }
];
console.table(users);

// 5. Utiliza group
console.group('Grupo de mensajes');
console.log('Mensaje 1');
console.log('Mensaje 2');
console.groupEnd();

// 6. Utiliza time
console.time('timer');
for (let i = 0; i < 1000; i += 1) {
  Math.random();
}
console.timeEnd('timer');

// 7. Valida con assert si un número es positivo
console.assert(5 > 0, 'El número debe ser positivo');

// 8. Utiliza count
console.count('Cuenta de llamadas');
console.count('Cuenta de llamadas');
console.count('Cuenta de llamadas');

// 9. Utiliza trace
function tracedFunction() {
  console.trace('Traza de ejecución');
}
tracedFunction();

// 10. Utiliza clear
console.clear();