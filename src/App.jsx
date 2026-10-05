import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Destaques from './sections/Destaques.jsx'
import Tecnologia from './sections/Tecnologia.jsx'
import Newsletter from './sections/Newsletter.jsx'

function App() {
  return (
    <>
      <header className="cabecalho">
  <div className="cabecalho-logo">
      <img src="/img/logo.png" alt="Babado News" />
      <p>TUDO O QUE IMPORTA. EM UM SÓ LUGAR.</p>
    </div>
</header>

  <Navbar />

<main>

  <Hero />
  <Destaques />
  <Tecnologia />
  <Newsletter />

</main>

<Footer />

    </>
  )
}

export default App