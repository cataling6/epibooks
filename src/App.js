import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Reacts, { useState } from 'react'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import { SearchProvider } from './context/SearchContext'
import { BookProvider } from './context/BooksContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import ProtectedRoutes from './middleware/ProtectedRoutes'
import NotFound from './pages/NotFound'
//import Login from './pages/Login'
//import { SelectedProvider } from './context/SelectedContext'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    // <>
    //   <BookProvider>
    //     <SearchProvider>

    //       <MyNav />
    //       <Container>
    //         <Welcome />
    //         <AllTheBooks />
    //       </Container>
    //       <MyFooter />

    //     </SearchProvider>
    //   </BookProvider>
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          {/* <Route exact path="/" element={<AllTheBooks searchQuery={searchQuery} />} /> */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<Homepage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
