# JSX

JavaScript XML/Extension. Estende a sintaxe do JavaScript introduzindo elementos como XML que são convertidos em funções React.
```jsx
const App = () => {
  return <button>Comprar</button>;
};
```
É transformado em
```jsx
const App = () => {
  return React.createElement('button', null, 'Comprar');
};
```
É possível utilizar a extensão .jsx

---
# React.Fragment
No React, um componente **precisa retornar um único elemento raiz**. Isso causa um problema:
```jsx
// ❌ ERRO - Não pode retornar múltiplos elementos
function Lista() {
  return (
    <h1>Título</h1>
    <p>Parágrafo</p>
  )
}
```

Solução antiga (ruim):
```jsx
// ✅ Funciona, mas adiciona uma div desnecessária
function Lista() {
  return (
    <div>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </div>
  )
}
```
O problema é que essa `<div>` extra vai para o DOM, o que pode:

- Bagunçar seu CSS (especialmente com Flexbox/Grid)
- Criar HTML desnecessário
- Quebrar a semântica do HTML

## A solução: React.Fragment
O **Fragment** permite agrupar elementos **sem adicionar nada no DOM**!

Exemplos

Sintaxe Completa:
```jsx
import React from 'react';

function Lista() {
  return (
    <React.Fragment>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </React.Fragment>
  )
}
```

Importando Fragment
```jsx
import { Fragment } from 'react';

function Lista() {
  return (
    <Fragment>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </Fragment>
  )
}
```

Sintaxe curta (mais comum)
```jsx
function Lista() {
  return (
    <>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </>
  )
}
```

---
# Atributos
Atributos podem ser passados como no HTML, porém com alguns casos especiais.
```jsx
const App = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};
```

## Casos Especiais
O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.
```jsx
const App = () => {
  return <div className="grid">Origamid</div>;
};
```

```jsx
const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};

```
[Elementos DOM](https://legacy.reactjs.org/docs/dom-elements.html)

---
## camelCase
Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.
```jsx
const App = () => {
  return <video autoPlay />;
};
```

---
# Expressões / Variáveis
Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves `{}`.
```jsx
const App = () => {
  const nome = 'André';
  return <p>{nome}</p>;
};
```

```jsx
const App = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
};
```

```jsx
const App = () => {
  const ativo = true;
  return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
};
```

Também posso atribuir JSX direto a uma constante/variável
```jsx
const Titulo = <h1>Meu título</h1>;

const App = () => {
  return <div>{Titulo}</div>;
};
```

---
# JSX Expressões
Podemos executar qualquer expressão dentro das chaves `{ }`. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.

```jsx
const App = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};
```

---
# Style
O style irá receber um objeto com as propriedades do elemento em camelCase.
```jsx
const App = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  );
};
```

---
# Exercício
```jsx
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  return <div></div>;
};
```

## Solução
```jsx
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default App;
```

---
# JSX Arrays
O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.
```jsx
const App = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  return <p>{produtos}</p>;
};
```

Olhe para o segundo exercício como os valores ficam tudo grudado
![[jsx-arrays.png]]

## Keys
O JSX necessita de uma key única para cada elemento da Array. [Keys](https://legacy.reactjs.org/docs/lists-and-keys.html)
```jsx
import React from "react";

const App2 = () => {

    //Array com Key no JSX
    const produtos = [<li key="p1">Notebook</li>,<li key="p2">Tablet</li>,<li key="p3">Smartphone</li>];
    return <p>{produtos}</p>
}

export default App2;
```

![[jsx-arrays-2.png]]

## Map
É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
```jsx
import React from "react";

const App2 = () => {
    //Utilizando map (mais comum)
    const produtos = ['Notebook','Tablet','Smartphone'];
    return <ul>{produtos.map((p) => <li key={p}>{p}</li>)}</ul>
}

export default App2;
```
## Array de Objetos
O cenário mais comum é trabalhar com array's de objetos.
```jsx
const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};
```

## Exercício
```jsx
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return <section></section>;
};

```

## Solução
```jsx
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return (
    <section>
      {produtos
        .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
        .map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};
```