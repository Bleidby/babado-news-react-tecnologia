import './App.css'
import TechnologyCard from './components/TechnologyCard.jsx'

const noticiasTecnologia = [
  {
    imagem: '/img/ai.jpg',
    titulo: 'Tecnologia e inovação ganham destaque em 2026',
    descricao:
      'Inteligência artificial deixa de ser apenas tendência e passa a fazer parte da rotina de empresas e profissionais.',
    tempo: 'Há 2 horas',
  },
  {
    imagem: '/img/aitrab.png',
    titulo: 'Inteligência artificial transforma o mercado de trabalho',
    descricao:
      'Novas ferramentas de inteligência artificial estão mudando profissões e a rotina de trabalhadores.',
    tempo: 'Há 1 hora',
  },
  {
    imagem: '/img/ailuta.png',
    titulo: 'Revolução das máquinas?',
    descricao:
      'O avanço da robótica chama atenção e levanta discussões sobre a relação entre humanos e máquinas.',
    tempo: 'Há 3 horas',
  },
  {
    imagem: '/img/mao.png',
    titulo: 'O futuro das próteses',
    descricao:
      'Avanços tecnológicos estão tornando as próteses cada vez mais modernas e funcionais.',
    tempo: 'Há 30 minutos',
  },
]

function App() {
  return (
    <>
      <header className="cabecalho">
        <div className="cabecalho-logo">
          <img src="/img/logo.png" alt="Babado News" />
          <p>TUDO O QUE IMPORTA. EM UM SÓ LUGAR</p>
        </div>

      <nav className="menu">
        <a href="#inicio">Início</a>
        <a href="#destaques">Destaques</a>
        <a href="#tecnologia">Tecnologia</a>
        <a href="#newsletter">Newsletter</a>
      </nav>

      </header>

      <main>
  <section id="inicio" className="destaque-principal">
    <div className="destaque-conteudo">
      <span className="categoria">Tecnologia</span>

      <h1>Tecnologia e inovação ganham destaque em 2026</h1>

      <p>
        Inteligência artificial deixa de ser apenas tendência e passa a fazer
        parte da rotina de empresas e profissionais.
      </p>
    </div>

    <img
      src="/img/ai.jpg"
      alt="Tecnologia e inteligência artificial"
    />
  </section>

    <section id="destaques" className="secao-destaques">
      <h2>Em destaque</h2>

    <div className="grade-destaques">
    <article className="card-destaque">
      <span className="categoria">Tecnologia</span>
      <h3>Inteligência artificial transforma o mercado de trabalho</h3>
      <p>
        Novas ferramentas de inteligência artificial estão mudando profissões
        e a rotina de trabalhadores.
      </p>
    </article>

    <article className="card-destaque">
      <span className="categoria">Tecnologia</span>
      <h3>Revolução das máquinas?</h3>
      <p>
        O avanço da robótica chama atenção e levanta discussões sobre a relação
        entre humanos e máquinas.
      </p>
    </article>
  </div>
</section>

<section id="tecnologia" className="tecnologia">
  <h2>Babado News / Tecnologia</h2>

  <div className="grade-tecnologia">
    {noticiasTecnologia.map((noticia) => (
      <TechnologyCard
        key={noticia.titulo}
        imagem={noticia.imagem}
        titulo={noticia.titulo}
        descricao={noticia.descricao}
        tempo={noticia.tempo}
      />
    ))}
  </div>
</section>

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

</main>

<footer className="rodape">
  <div className="rodape-conteudo">
    <div className="rodape-marca">
  <h2>
    BABADO <span>NEWS.</span>
  </h2>
  <p>Informação que te acompanha. Sempre.</p>
</div>

    <div className="rodape-links">
      <a href="#inicio">Início</a>
      <a href="#destaques">Destaques</a>
      <a href="#tecnologia">Tecnologia</a>
      <a href="#newsletter">Newsletter</a>
    </div>
  </div>

  <div className="rodape-final">
    <p>© 2026 Babado News. Todos os direitos reservados.</p>
  </div>
</footer>

    </>
  )
}

export default App