# Crear el projecto y instalar
```bash
  npm init -y 
  npm install --save-dev eslint @eslint/js typescript typescript-eslint

  # plugin para manejar stilos de codigo 
  npm install -D @stylistic/eslint-plugin 
  
  # para inicial el lint -> eslint.config.mts
  npx eslint --init

  # intalar ts-node para ejecutar ts desde el vscode
  npm install -D ts-node
  

  # configuracion de prettier
  npm install --save-dev --save-exact prettier
  node --eval "fs.writeFileSync('.prettierrc','{}\n')"
  node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

  npm install -D eslint-config-prettier
  npm install -D eslint-plugin-prettier

  #configuracion para pruebas unitarias 
  npm i -D jest ts-jest @types/jest
```



#configuar jest  desde cero (solo en caso de que no tengas jest.config.js )
npx ts-jest config:init 


# configurar eslint + prettier
```bash
npm i -D eslint-config-prettier

```

# en eslint.config.mts
import stylistic from '@stylistic/eslint-plugin';

```typescript
  plugins: {
			'@stylistic': stylistic # agregar esta linea en el apartado de plugins
	},

  # ejempo de una regla
  rules: {
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }]
  }
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