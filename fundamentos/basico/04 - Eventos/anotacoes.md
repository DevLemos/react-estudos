Podemos atribuir eventos diretamente em elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C.
```jsx
const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <>
      <h1>Eventos em React</h1>
      <button onClick={handleClick}>Evento Click</button>
      <button onMouseMove={handleClick}>Evento Mouse Move</button>
      <button onClick={() => console.log(event.target.innerText)}>Evento Click Arrow Function</button>
    </>
  );
};

export default App;
```
[Doc Eventos]([https://reactjs.org/docs/events.html](https://reactjs.org/docs/events.html))

---
# Função Anônima
É possível executar uma função anônima no evento.
```jsx
const App = () => {
  return (
    <button onClick={({ target }) => target.classList.toggle('ativa')}>
      Ativar
    </button>
  );
};
```
Guardar o estado do DOM não é o mais indicado, veremos mais tarde como fazer isso com Hooks.

---
# window/document
Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o `addEventListener`.
```jsx
const App = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
};
```

Obs: Esse tipo de evento será adicionado com o hook useEffect