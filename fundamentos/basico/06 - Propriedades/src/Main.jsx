//Propriedades
const Titulo1 = (props) => {
  return <h1>{props.texto}</h1>;
};

//Múltiplas propriedades
const Titulo2 = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

//Desestruturação
const Titulo3 = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

//Children
const Titulo4 = (props) => {
  return <h1>{props.children}</h1>;
};

//Rest e Spread
const Input = ({ label, id, ...props }) => {
  return (
    <div style={{ margin: "1 rem 0" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Password" />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Titulo1 texto="Meu titulo 1" />
      <Titulo1 texto="Meu titulo 2" />
      <Titulo1 texto="Meu titulo 3" />
      <Titulo2 texto="Meu titulo 4" cor="blue" />
      <Titulo3 texto="Meu titulo 5" cor="red" />
      <Titulo4>Meu titulo 6</Titulo4>
      <Titulo4>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo4>
      <Form />
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
