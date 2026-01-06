const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <>
      <h1>Eventos em React</h1>
      <button onClick={handleClick}>Evento Click</button>
      <button onMouseMove={handleClick}>Evento Mouse Move</button>
      <button onClick={(event) => console.log(event.target.innerText)}>
        Evento Click Arrow Function
      </button>
       
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
