//Elemento JSX
function App1() {
  return <div id="main">Meu App</div>;
}

//Transformado em uma função React pelo babel:
function App2() {
  return React.createElement("div", { id: "main" }, "Meu App");
}

//Expressões JavaScript { }
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

//Hooks
const Comprar = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Comprar {count}</button>
      <p>Total {count}</p>
      <p>Preço {count * 250}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div>Teste</div>
      <MainNav />
      <Produtos />
      <Button />
      <Comprar />
    </div>
  );
};

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
