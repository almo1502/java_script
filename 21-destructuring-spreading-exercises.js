// 1. Usa desestructuración para extraer los dos primeros elementos de un array
const numbers = [10, 20, 30, 40];
const [firstNumber, secondNumber] = numbers;
console.log(firstNumber, secondNumber);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const values = [5];
const [valueA, valueB = 100] = values;
console.log(valueA, valueB);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const user = { name: 'Marta', age: 24, email: 'marta@test.com' };
const { name, age } = user;
console.log(name, age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
const { name: fullName, age: years } = user;
console.log(fullName, years);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const profile = {
  user: {
    username: 'peter',
    role: 'admin'
  }
};
const { user: { username, role } } = profile;
console.log(username, role);

// 6. Usa propagación para combinar dos arrays en uno nuevo
const fruits = ['manzana', 'pera'];
const moreFruits = ['uva', 'kiwi'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);

// 7. Usa propagación para crear una copia de un array
const copiedFruits = [...fruits];
console.log(copiedFruits);

// 8. Usa propagación para combinar dos objetos en uno nuevo
const baseUser = { name: 'Ana', active: true };
const extraUser = { email: 'ana@example.com' };
const combinedUser = { ...baseUser, ...extraUser };
console.log(combinedUser);

// 9. Usa propagación para crear una copia de un objeto
const clonedUser = { ...baseUser };
console.log(clonedUser);

// 10. Combina desestructuración y propagación
const settings = { theme: 'dark', language: 'es', notifications: true };
const { theme, ...rest } = settings;
console.log(theme, rest);