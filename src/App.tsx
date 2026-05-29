import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './hero/components/Hero'
import { Services } from './links/Services'

function App() {
  return (
    <>
      <div className='grid-cols-3 '>
        <Header/>
        <main className=''>
          <Hero/>
          <Services/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
