# Crear el projecto y instalar
npm init -y 
1. npm install --save-dev eslint @eslint/js typescript typescript-eslint

eslin.config.mjs

# para inicial el lint
npx eslint --init

# plugin para manejar stilos de codigo 
npm i -D @stylistic/eslint-plugin    --> reglas de estili : https://eslint.style/rules


# Ejecutar un archivo específico
npx ts-node src/test.ts


## como instalar pretier

es una herramienta para formatear codigo opinionada (que por defecto trae reglas)
 "[typescript]": {
     "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

## en el settings.json
    "editor.formatOnSave": true   : para que se formatee el condigo automatizamente al guardar
    "prettier.requireConfig": true, : que solo lo haga cuando tenga un archivo de configuracion de prettier



    npm install --save-dev --save-exact prettier
    node --eval "fs.writeFileSync('.prettierrc','{}\n')"
    node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"