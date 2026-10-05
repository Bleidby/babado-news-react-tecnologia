function Destaques() {
  return (
     <section id="destaques" className="secao-destaques">
      <h2>Em destaque</h2>

    <div className="grade-destaques">
    <article className="card-destaque">
      <span className="categoria-tecnologia">TECNOLOGIA</span>
      <h3>Inteligência artificial transforma o mercado de trabalho</h3>
      <p>
        Novas ferramentas estão mudando a forma como empresas e profissionais trabalham.
      </p>
    </article>

    <article className="card-destaque">
      <span className="categoria-tecnologia">TECNOLOGIA</span>
      <h3>Revolução das máquinas?</h3>
      <p>
        Influenciador estadunidense enfrenta robô de quase dois metros em luta real.
      </p>
    </article>
  </div>
</section>
  )
}

export default Destaques