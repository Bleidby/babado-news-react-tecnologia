import TechnologyCard from '../components/TechnologyCard.jsx'

const noticiasTecnologia = [
  {
    imagem: '/img/ai.jpg',
    titulo: 'Tecnologia e inovação ganham destaque em 2026',
    descricao:
      'Acompanhe a transição da inteligência artificial de uma fase de testes para o uso industrial e cotidiano.',
    tempo: 'Há 2 horas',
  },
  {
    imagem: '/img/aitrab.png',
    titulo: 'Inteligência artificial transforma o mercado de trabalho',
    descricao:
      'Novas ferramentas estão mudando a forma como empresas e profissionais trabalham.',
    tempo: 'Há 1 hora',
  },
  {
    imagem: '/img/ailuta.png',
    titulo: 'Revolução das máquinas?',
    descricao:
      'Influenciador estadunidense enfrenta robô de quase dois metros em luta real.',
    tempo: 'Há 3 horas',
  },
  {
    imagem: '/img/mao.png',
    titulo: 'O futuro das próteses',
    descricao:
      'Engenheiro constrói prótese que funciona sem eletricidade.',
    tempo: 'Há 30 minutos',
  },
]

function Tecnologia() {
  return (
    <section id="tecnologia" className="tecnologia">
  <h2>Tecnologia</h2>

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
  )
}

export default Tecnologia