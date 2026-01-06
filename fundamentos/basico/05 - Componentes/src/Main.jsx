const Header = () => {
  return (
    <header>
      <a href="./">Marca</a>
      <nav>
        <a href="./">Link 1</a>
        <a href="./">Link 2</a>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Todos os direitos reservados.</p>
    </footer>
  );
};

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <input type="text" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" />
      </p>
      <button>Enviar</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <p>Esse é o meu aplicativo</p>
      <Form />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
