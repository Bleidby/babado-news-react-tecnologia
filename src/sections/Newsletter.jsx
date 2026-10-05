function Newsletter() {
  return (
    <section id="newsletter" className="newsletter">
  <div className="newsletter-conteudo">
    <div>
      <h2>Fique por dentro!</h2>
      <p>
        Receba as principais notícias de tecnologia diretamente no seu e-mail.
      </p>
    </div>

    <form className="newsletter-form">
      <input
        type="email"
        placeholder="Digite seu e-mail"
        aria-label="Digite seu e-mail"
      />

      <button type="submit">Inscrever-se</button>
    </form>
  </div>
</section>
  )
}

export default Newsletter