function TechnologyCard({ imagem, titulo, descricao, tempo }) {
  return (
    <article className="card-tecnologia">
      <img src={imagem} alt={titulo} />

      <div className="card-tecnologia-conteudo">
        <span className="categoria-tecnologia">TECNOLOGIA</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <span className="tempo">{tempo}</span>
      </div>
    </article>
  )
}

export default TechnologyCard