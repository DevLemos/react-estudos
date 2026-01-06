# React Básico

# React Element
Todo elemento React é criado com a função `createElement`. O babel é responsável por transformar o elemento criado com JSX (que parece com HTML) em funções de React.
```js
//Elemento JSX
function App1(){
	return <div id="main">Meu App</div>
}

//Transformado em uma função React pelo babel:
function App2(){
	return React.createElement('div', { id: 'main'}, 'Meu App');
}

```

---
# Componentes 
Permitem dividir a interface em pequenos elementos. São criados através de funções que retornam um elemento React.
```js
 //Componente
const Button = () => {
	return <button>Comprar</button>
}
```

---
# Composição
O principal motivo de criarmos componentes é que podemos compor uma interface com diversos componentes que podem ser reutilizados.
```javascript
//Componente
const Button = () => {
	return <button>Comprar</button>;
};

//Componente
const MainNav = () => {
      return (
          <nav>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </ul>
          </nav>
     );
};

const App = () => {
    return (
          <div>
            <div>Teste</div>
            <MainNav />
            <Button />
          </div>
    );
};
```

---
# JavaScript { }
Utilizamos as `{ }` para executar expressões de JavaScript e mostrar o resultado no DOM.
```js
//Expressões JavaScript { }
const Produtos = () => {
    const produto1 = "Camisas";
    const produto2 = "Bermudas";

    return (
          <div>
            <button>
              {produto1} - R$ {Math.random() * 100}
            </button>
            <button>
              {produto2} - R$ {Math.random() * 100}
            </button>
          </div>
    );
};
```

---
# Eventos
Podemos atribuir eventos diretamente aos elementos Exemplo a seguir, `onClick`.
```js
//Eventos
const Produtos = () => {
    const produto1 = "Camisas";
    const produto2 = "Bermudas";

    function handleClick(event) {
	    console.log("Comprou " + event.target.innerText);
    }

    return (
          <div>
            <button onClick={handleClick}>
              {produto1} - R$ {Math.random() * 100}
            </button>
            <button onClick={handleClick}>
              {produto2} - R$ {Math.random() * 100}
            </button>
          </div>
    );
};
```

---
# Hooks
Utilizamos o React pela facilidade de sincronização do estado. Os hooks são funções especiais de React, o useState possibilita a sincroniza do estado.
```js
const Comprar = () => {
	const [count, setCount] = React.useState(0);
	return (
          <div>
            <button onClick={ () => setCount(count + 1)}>Comprar {count}</button>
            <p>Total {count}</p>
            <p>Preço {count * 250}</p>
          </div>
    );
};
```