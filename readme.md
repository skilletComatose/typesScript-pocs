npm init -y 
1. npm install --save-dev eslint @eslint/js typescript typescript-eslint

eslin.config.mjs

# para inicial el lint
npx eslint --init

# plugin para manejar stilos de codigo 
npm i -D @stylistic/eslint-plugin    --> reglas de estili : https://eslint.style/rules


# Ejecutar un archivo específico
npx ts-node src/test.ts



en el package json toca quitar y poner   "type": "module", dependiendo el caso 