import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import { SearchProvider } from './context/SearchContext'
import { BookProvider } from './context/BooksContext'
//import { SelectedProvider } from './context/SelectedContext'

function App() {
  return (
    <>
      <BookProvider>
        <SearchProvider>

          <MyNav />
          <Container>
            <Welcome />
            <AllTheBooks />
          </Container>
          <MyFooter />

        </SearchProvider>
      </BookProvider>
    </>
  )
}

export default App
