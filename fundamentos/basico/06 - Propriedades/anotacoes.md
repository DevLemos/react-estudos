# Propriedades

Assim como uma função pode receber argumentos, um componente também pode. Esses são conhecidos como propriedades ou props.

```jsx
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};
```

---

# Múltiplas Propriedades

Podemos passar quantas propriedades quisermos.

```jsx
const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};
```

---

# Desestruturação

É comum desestruturarmos as propriedades.

```jsx
const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};
```

---

# Children

Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade `children`.

```jsx
const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo>Meu Primeiro Título</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};
```

---

# Rest e Spread

Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

```jsx
//Rest e Spread
const Input = ({ label, id, ...props }) => {
  return (
    <div style={{ margin: "1 rem 0" }}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props} />   {" "}
    </div>
  );
};

const Form = () => {
  return (
    <div>
            <Input id="email" label="Email" required />
            <Input id="password" type="password" label="Password" />   {" "}
    </div>
  );
};
```

---

# Dados

Podemos passar diferentes tipos de dados e até outros componentes nas propriedades

```jsx
const App = () => {
  const logado = true;
  const nome = "André";

  return (
    <section>
      <Header logado={logado} nome={nome} />
    </section>
  );
};
```

```jsx
const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};
```
