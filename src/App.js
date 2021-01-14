import './App.css'
import './reset.css'
import Router from './Router'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Router />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
