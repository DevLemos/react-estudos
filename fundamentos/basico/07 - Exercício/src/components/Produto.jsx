const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{ border: "1px solid #000", margin: "10px 5px", padding: "10px" }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
