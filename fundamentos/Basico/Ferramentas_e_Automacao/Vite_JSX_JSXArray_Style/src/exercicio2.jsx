import React from "react";

const App2 = () => {
  //Array Simples
  //const produtos = ['Notebook', 'Tablet', 'Smartphone'];

  //Array com Key no JSX
  //const produtos = [<li key="p1">Notebook</li>,<li key="p2">Tablet</li>,<li key="p3">Smartphone</li>];

  //Utilizando map (mais comum)
  const produtos = ["Notebook", "Tablet", "Smartphone"];

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <>
      <h3>Produtos</h3>
      <ul>
        {produtos.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <h3>Livros</h3>
      <ul>
        {livros
          .filter((livro) => livro.ano >= 1998)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome}
              {livro.ano}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App2;
