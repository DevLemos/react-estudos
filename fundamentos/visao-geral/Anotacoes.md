# JSX

É uma sintaxe para javascript que permite você escrever código que parece com HTML dentro do seu código JavaScript.

```javascript
// Com JSX (mais legível)
const elemento = <h1>Olá, mundo!</h1>;

// Sem JSX (JavaScript puro)
const elemento = React.createElement('h1', null, 'Olá, mundo!');
```

# Características
- Permite misturar javascript com html através de `{}`. Por exemplo:
```javascript
const nome = "Maria";
const elemento = <h1>Olá, {nome}!</h1>;
```
- Você pode usar qualquer expressão JavaScript dentro das chaves, incluindo variáveis, funções, operações matemáticas, etc.
- Como JSX vira javascript, algumas coisas mudam. Por exemplo `class` vira `className` porque `class` é uma palavra reservada em JavaScript. Eventos também usam camelCase: `onclick` vira `onClick`.
```javascript
const botao = <button className="primario" onClick={handleClick}>
  Clique aqui
</button>;
```
- Importante: o JSX precisa sempre retornar um único elemento raiz. Se você tem múltiplos elementos, precisa envolvê-los em uma div ou usar um Fragment (`<>...</>`).
- Por baixo dos panos, o JSX é transformado em JavaScript normal por ferramentas como Babel antes de rodar no navegador. É por isso que ele funciona mesmo não sendo JavaScript "de verdade".

---
# Adicionar REACT (sem npm)
Recomendado apenas para rápidos testes e prototipagem, você pode iniciar a desenvolver com React colocando no head do HTML os links abaixo (script).
```jsx
<!DOCTYPE html>

<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>

    <!-- Carrega o React, React Dom e Babel -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
  </body>

</html>
```

---
# React
É a biblioteca principal que contém a lógica de criação dos componentes, gerenciamento de estados e toda a inteligência do React. O React em si, não sabe nada sobre navegadores ou DOM -ele apenas sabe como criar e gerenciar componentes.
```javascript
import React from 'react';
```
Ele fornece coisas como `useState`, `useEffect`, a lógica de criação dos elementos, etc.

---
# React DOM
É a "ponte" entre o React e o navegador. O React DOM pega os componentes criados pelo React e os transforma em elementos HTML reais que aparecem na tela. É ele quem manipula o DOM do navegador.
```jsx
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Porque eles são separados?
Por que o React pode renderizar em outros lugares além do navegador, como aplicativos mobile (React Native) ou até mesmo PDFs. O React cuida da lógica, e diferentes "renderizadores" (como React DOM) cuidam de onde isso aparece.

---
# Babel
É um compilador JavaScript que transforma código moderno (incluindo JSX) em javascript que os navegadores entendem.
```javascript
// Você escreve (JSX):
const elemento = <h1>Olá</h1>;

// Babel transforma em:
const elemento = React.createElement('h1', null, 'Olá');
```
Babel também converte recursos modernos do JavaScript como arrow functions e destructuring para versões mais antigas que os navegadores antigos entendem.

---
# **Resumindo:**

- **React** = cérebro (lógica dos componentes)
- **React DOM** = mãos (coloca na tela do navegador)
- **Babel** = tradutor (transforma JSX e JS moderno em JS que funciona)