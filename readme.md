# Crear el projecto y instalar
```bash
  npm init -y 
  npm install --save-dev eslint @eslint/js typescript typescript-eslint

  # para inicial el lint -> eslin.config.mjs
  npx eslint --init

  # intalar ts-node para ejecutar ts desde el vscode
  npm install -D ts-node
  

  # configuracion de prettier
  npm install --save-dev --save-exact prettier
  node --eval "fs.writeFileSync('.prettierrc','{}\n')"
  node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```
 




# para inicial el lint
npx eslint --init

# plugin para manejar stilos de codigo 
npm i -D @stylistic/eslint-plugin    --> reglas de estili : https://eslint.style/rules


# Ejecutar un archivo específico
npx ts-node src/test.ts


## como instalar pretier

es una herramienta para formatear codigo opinionada (que por defecto trae reglas)
> para que formatee el archivo en vada save y tome el prettier como formater por defecto en ts

## en el settings.json

```json
 "[typescript]": {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
  },
  "prettier.requireConfig": true
```
"editor.formatOnSave": true   : para que se formatee el condigo automatizamente al guardar
"prettier.requireConfig": true, : que solo lo haga cuando tenga un archivo de 

# configuracion de prettier



    npm install --save-dev --save-exact prettier
    node --eval "fs.writeFileSync('.prettierrc','{}\n')"
    node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"