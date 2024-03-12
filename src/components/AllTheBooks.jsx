import { useSearch } from '../context/SearchContext'
import { Col, Row } from 'react-bootstrap'
import { BookContext } from '../context/BooksContext'
import SingleBook from './SingleBook'
import { useContext } from 'react'
import { SelectedProvider } from '../context/SelectedContext'
import Loading from './Loading'

const AllTheBooks = () => {
  const { searchQuery } = useSearch();
  const { books } = useContext(BookContext);
  const urls = [];

  return (
    <>
      <Row className='d-flex  ' >
        <SelectedProvider>
          {books.length === 0 ? <Loading /> : ""
          }
          <Col className="g-2 mt-3 flex-wrap d-flex height-with-scroll gap-3 d-flex justify-content-center" lg={12}>

            {
              books.filter((b) => b.title.toLowerCase().includes(searchQuery)).map((book) => {
                const bookUrl = `/#/bookDetails/${book.asin}`;
                urls.push(bookUrl);
                return (

                  <Col lg={2} key={book.asin}>
                    <SingleBook book={book} url={bookUrl} />
                  </Col>
                )
              })
            }

          </Col>
        </SelectedProvider>
      </Row >
    </>
  )
}

export default AllTheBooks
