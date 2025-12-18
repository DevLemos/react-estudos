# ESBuild Mínimo
https://esbuild.github.io/

- Inicia um pacote npm na pasta do seu aplicativo
```text
npm init -y
```

![[npm-init-y.png]]
Vai ser criado um arquivo **package.json**
```json
{
  "name": "ferramentas_e_automacao",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

## package.json
É um arquivo de configuração criado em qualquer projeto node.js ou javascript moderno. É como a "certidão de nascimento" do seu projeto.

### Pra que serve?
- Informações do projeto
- Gerenciar dependências
- Scripts automatizados

### Como funciona na prática?
Quando você clona um projeto e roda `npm install`, o npm lê o `package.json` e instala todas as dependências listadas, criando a pasta `node_modules`.

É por isso que a pasta `node_modules` nunca é versionada no Git - qualquer pessoa pode recriá-la apenas rodando `npm install`!

---
## Arquivos

## HTML
```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ferramentas e Automação</title>
</head>

<body>
    <div id="root"></div>
	
	<!--Onde será gerado arquivo final -->
    <script src="./main.js"></script>
</body>
</html>
```

### ESBuild
Agora vamos instalar o ESBuild (compilador) onde vai empacotar nosso código e transformar em um arquivo final.
```text
npm install esbuild
```

![[npm-esbuild.png]]
Vai ser criado um arquivo chamado **package-lock.json**

### package-lock.json
É um arquivo que trabalha em conjunto com o **package.json**, mas tem um propósito específico.

#### O que é?
É um arquivo gerado automaticamente pelo npm que registra a versão exata de cada dependência (e das dependências das dependências) que foi instalada em seu projeto.

#### Exemplo do problema:

Imagine que você instala o projeto hoje e o React está na versão `18.2.0`. Daqui a 2 meses, seu colega clona o projeto e instala, mas agora o React está na versão `18.3.5`. Vocês dois podem ter comportamentos diferentes. A solução: package-lock.json, esse arquivo "trava" as versões exatas de TUDO.

### node_modules
É a pasta onde ficam instaladas todas as bibliotecas (dependências) do seu projeto. Quando você roda `npm install`, o npm baixa os pacotes da internet e coloca nessa pasta.

#### Como funciona?
```text
meu-projeto/
├── node_modules/          ← Aqui ficam as bibliotecas
│   ├── react/
│   ├── react-dom/
│   ├── axios/
│   └── ... (centenas ou milhares de pastas)
├── package.json
├── package-lock.json
└── src/
```
Cada pasta dentro de `node_modules` é uma biblioteca completa com seu próprio código.

**Obs**: nunca subir para o Git

#### Como funciona na prática?
Você clona um projeto do Git:

bash
```bash
git clone https://github.com/algum-projeto.git
cd algum-projeto
npm install  # ← Isso cria a pasta node_modules
```
O `npm install` lê o `package.json` e `package-lock.json` e baixa tudo que precisa.

|Arquivo|O que é|Vai pro Git?|
|---|---|---|
|**package.json**|Lista de dependências (flexível)|✅ SIM|
|**package-lock.json**|Versões exatas instaladas|✅ SIM|
|**node_modules/**|As bibliotecas em si|❌ NUNCA|
## Scripts de desenvolvimento
```json
"scripts": {
  "start": "esbuild --bundle src/main.jsx --outfile=main.js --servedir=./ --watch",
  "build": "esbuild --bundle src/main.jsx --outfile=main.js"
},
```
- **esbuild --bundle**: basicamente é o comando que você da para mandar o esbuild empacotar algum arquivo.
- **src/main.jsx**: arquivo à ser empacotado
- **--outfile=main.js**: arquivo final
- **--servedir=./**: abre um servidor local para o desenvolvimento (não precisa do live server)
- **--watch**: faz atualizações das mudanças porém precisa atualizar

## Rodando Scipts
```text
npm start
```

![[npm-start.png]]
Você pode abrir os dois servidores sugeridos, particularmente use o local.

---
# Module

somar.js
```js
export default function Somar(a, b){
    return a + b;
}
```

main.js
```js
console.log("teste")

import Somar from "./script"
const resultado = Somar(2, 2);

console.log(`Resultado da soma: ${resultado}`)
```

Rodo o **npm run build** para transpilar o código em um novo arquivo main.js
```js
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };


  // src/script.js
  function Somar(a, b) {
    return a + b;
  }
  
  var init_script = __esm({
    "src/script.js"() {
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"() {
      init_script();
      console.log("teste");
      var resultado = Somar(2, 2);
      console.log(`Resultado da soma: ${resultado}`);
    }
  });

  require_main();

})();
```

---
# Instalando React e ReactDOM
```bash
npm install react react-dom
```

**App.jsx**
```js
import React from 'react';

const App = () => {
    return <a href='https://www.origamid.com'>Origamid</a>;
}

export default App;
```

**Main.jsx**
```js
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

Inicie o desenvolvimento com:
```bash
npm start
```

Crie a build final com:
```bash
npm run build
```

---
# Live Reload
Para atualizar automaticamente, adicione o script no final do HTML:
```html
<script>
  new EventSource('/esbuild').addEventListener('change', () =>
    location.reload(),
  );
</script>

```

---
# Ferramenta Front-end

## Vite
É um **build tool**. Cria um ambiente de desenvolvimento já configurado e otimizado para criação de aplicativos em React. [Vite](https://vite.dev/)

Na pasta que deseja instalar:
```js
npm create vite@latest .
npm install
```
Seguir o prompt > React > JavaScript

## Estrutura Vite
![[estrutura-vite.png]]
```text
- node_modules
- public
- src
  - App.jsx
  - main.jsx
- index.html
- package.json
- package-lock.json
- vite.config.js
```

Código mínimo para o index.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Código mínimo para o main.jsx
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

Código mínimo para o App.jsx
```js
import React from 'react';

const App = () => {
  return <div>App React</div>;
};

export default App;
```

## Comandos
Inicia o desenvolvimento
```bash
npm run dev
```
Cria a build final
```bash
npm run build
```

---
## ESLint
ESLint é um linter. Uma ferramenta que análisa seu código-fonte em busca de:
- Erros de sintaxe
- Problemas de estilos
- Bugs
- Vulnerabilidades de segurança
### Por que usar ESLint?

#### Sem ESLint
```js
// Variável declarada mas nunca usada
const nome = "João"

// Comparação perigosa
if (valor == 10) { }

// Função sem return
function somar(a, b) {
  a + b  // Esqueceu o return!
}
```

#### Com ESLint:
```
⚠️ 'nome' is assigned a value but never used
⚠️ Expected '===' and instead saw '=='
⚠️ Expected to return a value in arrow function
```

O ESLint **aponta os problemas antes mesmo de você rodar o código**!

#### Entendendo as partes

| env                                         | extends                   | rules                      |
| ------------------------------------------- | ------------------------- | -------------------------- |
| Define o ambiente (navegador, node.jsm etc) | Configurações pré-prontas | Suas regras personalizadas |
#### Configurar ESLint
```js
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unsafe-finally': 'off',
    'no-unused-vars': 'off',
    'react/jsx-key': 'off',
  },
};

```

--- 
# Esconder Arquivos
Não recomendo usar, mas eu irei durante o curso apenas para deixar a interface mais limpa:

.vscode/settings.json
```json
{
  "git.enabled": false,
  "files.exclude": {
    "node_modules": true,
    ".vscode": true,
    ".gitignore": true,
    "package.json": true,
    "package-lock.json": true,
    ".eslintrc.json": true,
    "vite.config.js": true,
    "public": true,
    "index.html": true
  }
}
```

# Modo Estrito
O modo estrito do React permite pegarmos alguns bugs no desenvolvimento.

Sem o modo estrito
```js
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

Com o modo estrito
```js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```