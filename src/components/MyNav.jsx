import { Navbar, Nav, Container, Form, Col } from 'react-bootstrap'

import { useSearch } from '../context/SearchContext';

const MyNav = () => {
  const { searchQuery, setSearchQuery } = useSearch()
  return (

    <Navbar Navbar
      expand="lg"
      className="bg-body-tertiary mb-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Col lg={3} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Navbar.Collapse>

      </Container>
    </Navbar >

  )
}
export default MyNav
