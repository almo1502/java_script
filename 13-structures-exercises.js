
// 1. Crea un array que almacene cinco animales
const animals = ['Giganatosaurus', 'spinosaurus', 'Plesosauro', 'Mossasaurus', 'T-rex'];
console.log('Animales:', animals);

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift('Therizinosaurus');
animals.push('Titanoboa');
console.log('Animales actualizados:', animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1);
console.log('Tras eliminar el tercero:', animals);

// 4. Crea un set que almacene cinco libros
const books = new Set(['El Quijote', 'Crimen y Castigo', 'Manifiesto comunista', 'Cien años de soledad', 'El principito']);
console.log('Set de libros:', books);

// 5. Añade dos más. Uno de ellos repetido
books.add('IT');
books.add('1984');
console.log('Set tras añadir:', books);

// 6. Elimina uno concreto a tu elección
books.delete('Dune');
console.log('Set tras eliminar Dune:', books);

// 7. Crea un mapa que asocie el número del mes a su nombre
const monthMap = new Map([
  [1, 'Enero'],
  [2, 'Febrero'],
  [3, 'Marzo'],
  [4, 'Abril'],
  [5, 'Mayo'],
  [6, 'Junio'],
  [7, 'Julio'],
  [8, 'Agosto'],
  [9, 'Septiembre'],
  [10, 'Octubre'],
  [11, 'Noviembre'],
  [12, 'Diciembre']
]);
console.log('Mes 5:', monthMap.get(5));

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (monthMap.has(5)) {
  console.log('El mes 5 existe y es:', monthMap.get(5));
} else {
  console.log('El mes 5 no existe');
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
monthMap.set('verano', ['Junio', 'Julio', 'Agosto']);
console.log('Meses de verano:', monthMap.get('verano'));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const arrayMonths = ['Enero', 'Febrero', 'Marzo', 'Enero'];
const monthSet = new Set(arrayMonths);
const monthInfo = new Map([['meses', monthSet]]);
console.log('Mapa con set:', monthInfo.get('meses'));