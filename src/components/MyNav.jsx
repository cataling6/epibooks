import { Navbar, Nav, Container, Form, Col } from 'react-bootstrap'
import { useSearch } from '../context/SearchContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MyNav = () => {
  const { searchQuery, setSearchQuery } = useSearch()
  const [logged, setLogged] = useState(null);
  const location = useLocation();
  const isDetails = location.pathname.startsWith('/bookDetails/') //mi servirà per far scomparirre la ricerca nella Bookdetails (inutilmente visualizzata)

  useEffect(() => {
    const authYes = localStorage.getItem("auth");
    if (authYes) {
      setLogged(true);
    }
  }, [logged]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setLogged(false);
    window.location.href = '/'

  };

  return (

    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3 shadow"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            {logged ? <Nav.Link onClick={handleLogout} >Logout</Nav.Link> : ""}
          </Nav>
          {isDetails ? "" : <Col lg={3} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Col>}
        </Navbar.Collapse>

      </Container>
    </Navbar >

  )
}
export default MyNav
