
// 1. Exporta una función
export function exportedFunction() {
  return 'Función exportada';
}

// 2. Exporta una constante
export const exportedConstant = 'Constante exportada';

// 3. Exporta una clase
export class ExportedClass {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

// 4. Importa una función
// 5. Importa una constante
// 6. Importa una clase
import {
  exportedFunction as importedFunction,
  exportedConstant as importedConstant,
  ExportedClass as ImportedClass
} from './31-modules-exercises.js';

console.log(importedFunction());
console.log(importedConstant);
console.log(new ImportedClass('prueba').getValue());

// 7. Exporta una función, una constante y una clase por defecto
export default {
  exportedFunction,
  exportedConstant,
  ExportedClass
};

// 8. Importa el export por defecto
import defaultModule from './31-modules-exercises.js';

console.log(defaultModule.exportedFunction());
console.log(defaultModule.exportedConstant);
console.log(new defaultModule.ExportedClass('default').getValue());


// 9. Exporta una función, una constante y una clase desde una carpeta
import { miFuncion, MI_CONSTANTE, MiClase } from './miCarpeta/index.js';

console.log(miFuncion(5));
console.log(MI_CONSTANTE);
const persona = new MiClase('Ana');
console.log(persona.saludar());

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
// const { exportedFunction, exportedConstant, ExportedClass } = require('./utils/module');