
// 1. Captura una excepción utilizando try-catch
try {
  console.log('Intentando ejecutar código riesgoso');
  const value = undefinedVariable;
} catch (error) {
  console.error('Error capturado:', error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
  JSON.parse('{bad json');
} catch (error) {
  console.error('Ocurrió un error:', error.message);
} finally {
  console.log('Siempre se ejecuta finally');
}

// 3. Lanza una excepción genérica
function throwGenericError() {
  throw new Error('Se lanzó una excepción genérica');
}

try {
  throwGenericError();
} catch (error) {
  console.error(error.message);
}

// 4. Crea una excepción personalizada
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

// 5. Lanza una excepción personalizada
try {
  throw new CustomError('Error personalizado lanzado');
} catch (error) {
  console.error(error.name + ':', error.message);
}

// 6. Lanza varias excepciones según una lógica definida
function validateAge(age) {
  if (age < 0) throw new Error('La edad no puede ser negativa');
  if (age > 120) throw new Error('La edad no es válida');
  return 'Edad correcta';
}

for (const age of [-1, 200, 30]) {
  try {
    console.log(validateAge(age));
  } catch (error) {
    console.error('Validación fallida:', error.message);
  }
}

// 7. Captura varias excepciones en un mismo try-catch
try {
  const a = 1;
  const b = null;
  console.log(a + b);
  JSON.parse('[');
} catch (error) {
  console.error('Se capturó una excepción general:', error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const values = [1, '2.5', 'abc', 3.14, null];
for (const value of values) {
  try {
    console.log(parseFloat(value));
  } catch (error) {
    console.error('Error parseando:', value, error.message);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function requireProperty(obj, propertyName) {
  if (!Object.prototype.hasOwnProperty.call(obj, propertyName)) {
    throw new CustomError(`La propiedad "${propertyName}" no existe`);
  }
  return obj[propertyName];
}

try {
  console.log(requireProperty({ name: 'Ana' }, 'age'));
} catch (error) {
  console.error(error.name + ':', error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function retryOperation(operation, maxRetries = 10) {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return operation();
    } catch (error) {
      attempts += 1;
      console.warn(`Intento ${attempts} fallido: ${error.message}`);
      if (attempts === maxRetries) throw error;
    }
  }
}

try {
  const result = retryOperation(() => {
    if (Math.random() < 0.7) {
      throw new Error('Fallo aleatorio');
    }
    return 'Éxito';
  }, 3);
  console.log(result);
} catch (error) {
  console.error('La operación falló tras varios intentos:', error.message);
}