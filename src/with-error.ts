// ⚠️ 1. Variable declarada pero no usada (no-unused-vars)
let x = 5;

// ⚠️ 2. Usar 'let' pero no reasignar (prefer-const)
let nombre = 'Ana';

// ⚠️ 3. Uso explícito de 'any' (no-explicit-any)
function procesar(input: any) {
  return input;
}

// ⚠️ 4. Type assertion insegura (object literal assertion)
const persona = {} as { nombre: string; edad: number };

// ⚠️ 5. Falta el tipo de retorno en función (explicit-function-return-type)
function saludar(nombre: string) {
  return `Hola, ${nombre}`;
}

// ⚠️ 6. Comparación con doble igual (eqeqeq)
if (nombre == 'Ana') {
  console.log('Es Ana');
}

// ⚠️ 7. Uso de console.log (no-console)
console.log('Mensaje de depuración');

// ⚠️ 8. Tipo redundante (no-inferrable-types)
const mensaje: string = 'Hola';

// ⚠️ 9. No usar desestructuración (prefer-destructuring)
const fecha = new Date();
const mes = fecha.getMonth();
const anio = fecha.getFullYear();

// ⚠️ 10. Función clásica en lugar de arrow (prefer-arrow/prefer-arrow-functions)
/* eslint prefer-arrow/prefer-arrow-functions: "error" */
function despedirse() {
  return 'Adiós';
}