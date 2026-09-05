// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const yourName = 'alejandro'
if (yourName === 'alejandro') {
 console.log('alejandro')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const user = 'admin'
const password = '1234'
if (user === 'admin' && password === '1234') {
 console.log('Usuario y contraseña correctos')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const number = 0
if (number > 0) {
 console.log('El número es positivo')
} else if (number < 0) {
 console.log('El número es negativo')
} else {
 console.log('El número es cero')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const age = 17
if (age >= 18) {
 console.log('Puede votar')
} else {
 console.log(`Le faltan ${18 - age} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
// depending of the age
const ageToCheck = 20
const category = ageToCheck >= 18 ? 'adulto' : 'menor'
console.log(category)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const month = 11
if (month >= 3 && month <= 5) {
 console.log('Primavera')
} else if (month >= 6 && month <= 8) {
 console.log('Verano')
} else if (month >= 9 && month <= 11) {
 console.log('Otoño')
} else {
 console.log('Invierno')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let days = 0
if ([4, 6, 9, 11].includes(month)) {
 days = 30
} else if (month === 2) {
 days = 28
} else {
 days = 31
}
console.log(`El mes ${month} tiene ${days} días`)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const language = 'es'
switch (language) {
 case 'es':
  console.log('Hola')
  break
 case 'en':
  console.log('Hello')
  break
 case 'fr':
  console.log('Bonjour')
  break
 default:
  console.log('Idioma no soportado')
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
const currentMonth = 5
switch (true) {
 case currentMonth >= 3 && currentMonth <= 5:
  console.log('Primavera')
  break
 case currentMonth >= 6 && currentMonth <= 8:
  console.log('Verano')
  break
 case currentMonth >= 9 && currentMonth <= 11:
  console.log('Otoño')
  break
 default:
  console.log('Invierno')
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
const monthNumber = 4
let monthDays = 0
switch (monthNumber) {
 case 2:
  monthDays = 28
  break
 case 4:
 case 6:
 case 9:
 case 11:
  monthDays = 30
  break
 default:
  monthDays = 31
}
console.log(`El mes ${monthNumber} tiene ${monthDays} días`)
