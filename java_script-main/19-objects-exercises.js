
// 1. Crea un objeto con 3 propiedades
const person = {
  name: 'Ana',
  age: 28,
  city: 'Sevilla'
};
console.log('Objeto base:', person);

// 2. Accede y muestra su valor
console.log(person.name, person.age, person.city);

// 3. Agrega una nueva propiedad
person.country = 'España';
console.log('Añadida country:', person);

// 4. Elimina una de las 3 primeras propiedades
delete person.city;
console.log('Tras eliminar city:', person);

// 5. Agrega una función e invócala
person.greet = function greet() {
  return `Hola, soy ${this.name}`;
};
console.log(person.greet());

// 6. Itera las propiedades del objeto
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// 7. Crea un objeto anidado
const user = {
  profile: {
    firstName: 'Luis',
    lastName: 'Pérez',
    address: {
      street: 'Calle Mayor',
      number: 12
    }
  }
};
console.log('Objeto anidado:', user);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(user.profile.firstName, user.profile.address.street);

// 9. Comprueba si los dos objetos creados son iguales
const secondPerson = { name: 'Ana', age: 28, city: 'Sevilla' };
console.log('Objetos iguales:', JSON.stringify(person) === JSON.stringify(secondPerson));

// 10. Comprueba si dos propiedades diferentes son iguales
console.log('Propiedades iguales:', person.name === secondPerson.name);