import Titulo from "../components/Titulo";
import Produto from "../components/Produto";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <div>
      <Titulo texto="Produtos" cor="green" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </div>
  );
};

export default Produtos;
