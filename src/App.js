import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Reacts from 'react'
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
//import Login from './pages/Login'
//import { SelectedProvider } from './context/SelectedContext'

function App() {
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
          <Route exact path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route path="/home" element={<Homepage />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
