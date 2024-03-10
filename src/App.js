import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { SearchProvider } from './context/SearchContext'
import { BookProvider } from './context/BooksContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import ProtectedRoutes from './middleware/ProtectedRoutes'
import NotFound from './pages/NotFound'
import BookDetails from './components/BookDetails'


function App() {
  // const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <BookProvider>
        <SearchProvider>
          <Container style={{ minHeight: 'calc(100vh - 100px)' }}>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path='/home' element={<Homepage />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='/bookDetails/:ASIN' element={<BookDetails />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Container>


        </SearchProvider>
      </BookProvider>
    </>

  )
}

export default App
